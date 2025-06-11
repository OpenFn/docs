---
layout: post
title: Improving Multistage Docker Builds using Buildx
authors: stu
tags: [how-to, docker, ci/cd]
featured: true
---

So you're using docker's multi-stage builds and noticed that your build times
aren't nearly as quick as you expected?

<!--truncate-->

As many teams who spend more and more time using docker, it's quite common to
get into multi-stage builds; usually resulting in significantly smaller images.

However this comes with a pretty significant dilemma with caching. Even when
using the `--cache-from` flag when building, docker only caches the last image.

One proposed solution<sup>[1](#ref1)</sup>, is to pull, build and push each
individual stage. Coming with tight coupling between the shape of your
Dockerfile and your build process/scripts.

The other solution uses Docker Buildx which the document describes as:

> Docker Buildx is a CLI plugin that extends the docker command with the full
> support of the features provided by Moby BuildKit builder toolkit. It provides
> the same user experience as docker build with many new features like creating
> scoped builder instances and building against multiple nodes concurrently.

While that sounds pretty cool, it doesn't really touch on caching. This actually
took me a while to find out that it would in fact do caching very differently.
In fact it's a very different experience using it, and has lots of really cool
features that further detach you from the local docker state allowing you to
build in environments that are stateless - such as Google CloudBuild without
having to wire up some kind of persistence or file caching scheme.

## Buildx

We're only going to scratch the surface of Buildx, and with that let's get the
absolute minimum working; build our image locally.

### Local Cache

First things first we need to create a builder, and select it for use. This is
important as without creating a buildx builder (and setting it as the default),
buildx will use the `docker` driver instead of the `docker-container` driver
which we want in order to take advantage of cache exporting.

```
docker buildx create --name mybuilder --use
```

> You only need to run this once, except in the case of CloudBuild where each
> invocation is a new node.

```
docker buildx build \
  --cache-from=type=local,src=/tmp/buildx-cache \
  --cache-to=type=local,dest=/tmp/buildx-cache \
  --load \
  .
```

While the `--cache-*` options aren't specifically required when running `build`,
as `buildx` does manage its own local cache (distinct from the regular docker
cache), it's there to emphasise the options that cache can be provided via the
CLI options.

This is about as close as you get to a regular docker build, with the
significant difference being that you have to specify where to cache from and
to.

The `--load` flag is to tell buildx to set the output to the local docker
daemon. Without that you won't actually get a resulting image to run. However,
depending on your use case, this could be seen as a convenience - if you're
wanting to run your tests inside your build; a resulting image isn't
particularly useful.

### Remote Cache

Now comes to the part I'm most interested in, caching in a stateless/remote
environment. Multipart builds for us at OpenFn are essential, since we use
Elixir and like other compiled languages there is a lot to be gained by only
shipping the stuff you're going to run; and no language is safe from requiring
several times more 'stuff' in order to build our apps.

Buildx supports a
[handful of different types](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#-export-build-cache-to-an-external-cache-destination---cache-to)
of caching sources and destinations. We're going to be using the `registry`
type, where you point the cache at a repository reference (repo/image:tag
style).

> One thing to note is that Google Container Registry does not support the
> metadata/manifest format that buildx uses, so if you're using Google Cloud you
> will need to start using Artifact Registry.

**Inline**

Push the image and the cache together:

```
...
--cache-from=type=registry,ref=$IMAGE_NAME \
--cache-to=type=inline \
...
```

This comes with the constraint that cache mode is always `min`, which only
exports/caches the resulting layers; which is still better than the plain docker
build caching but I think having the intermediary layers is generally a win. We
want to avoid a single line change invalidating an entire build step.

**Registry**

Resulting image and cache are separated:

```
...
--cache-from=type=registry,ref=$IMAGE_NAME-build-cache \
--cache-to=type=registry,ref=$IMAGE_NAME-build-cache,mode=max \
...
```

Again coming back to the cache mode, here being `max`; all intermediary laters
are exported to the cache image as well.

I have opted to create _two_ images, one for caching and another for the
resulting image used to deploy. This gains us a much more granular cache and the
ability to more easily manage the cache image - like deleting the whole thing
when wanting to invalidate the cache. Not to mention I'm fairly sure the size of
our images that get pulled on kubernetes would get significantly larger with
many more layers.

It feels like a safer bet to have lean images for kubernetes to pull, and chunky
cache images specifically for speeding up build.

Depending on your setup, pulling large images can get _seriously_ expensive in a
reasonably active deployment environment - like on AWS ECS without using
PrivateLink.

> It appears the `moby/buildkit` documentation also demonstrates
> [this](https://github.com/moby/buildkit#registry-push-image-and-cache-separately)
> approach.

```
IMAGE_NAME=us-east4-docker.pkg.dev/<project-name>/platform/app \
docker buildx build \
  -t $IMAGE_NAME:latest \
  --cache-from=type=registry,ref=$IMAGE_NAME-build-cache \
  --cache-to=type=registry,ref=$IMAGE_NAME-build-cache,mode=max \
  --push \
  --progress=plain \
  .
```

This implies that the cache image is named with the suffix `-build-cache`:  
`us-east4-docker.pkg.dev/<project-name>/platform/app[-build-cache]`.

The `--push` argument tells buildx to push the resulting image to the registry.

## Tips

**Clearing the local cache**

As mentioned before, buildx has its own cache and in order to clear the cache
while debugging and readying a Dockerfile for remote building you'll probably
need to reach for `docker buildx prune`.

## Closing thoughts

Using buildx has been a really pleasant experience, having personally attempted
using it a few times over the last 3 years; the most recent one being the first
time I felt confident getting it into production. As with any sufficiently
flexible build tooling, the errors and issues you can run into range from
complete gibberish, genuinely concerning inconsistencies to architectural
choices that you haven't fully caught up on; requiring an ever growing list of
changes you need to make to your own build process.

Our initial observations have been great, reasonable changes on our build have
gone from 28 minutes to around 9 minutes.

While I have encountered a few confusing cache invalidations, especially when
building locally, exporting the cache to a repository and then having CloudBuild
use the image cache. And occasionally locally having what feels like _really_
aggressive caching on intermediate steps, leading me to pruning the local cache.

But overall, these issues aren't necessarily buildx issues and more likely a
combination of building docker images in general except with many more steps
accounted for by the cache.

It's kinda hard to see now what the exact issues I had with it in the past, but
hey!

Buildx has given me what I 'expected' with docker multi-stage builds, and having
the cache in a repository completely side-steps having to attach a shared volume
or copying from a storage bucket.

## Resources

- [Multi-stage builds #3: Speeding up your builds](https://pythonspeed.com/articles/faster-multi-stage-builds/)
  <a name="ref1"><sup>1</sup></a>
- [Docker Buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [buildx build reference](https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#buildx-build)
- [mody/buildkey Registry cache exporter](https://github.com/moby/buildkit#registry-push-image-and-cache-separately)
