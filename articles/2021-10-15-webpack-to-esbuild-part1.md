---
layout: post
title: Moving from Webpack to esbuild on Phoenix
authors: stu
tags: [how-to, js, webpack, build, phoenix, ci/cd]
featured: true
---

We're very happy users of Elixir and Phoenix at OpenFn, given that we've been
using it continuously for about 6 years - upgrades and all. Our front-end
toolchain, albeit far from out of date (Webpack `5.52.1` today) has left some
room for improvement.

<!--truncate-->

> This is a post written on what we call 'Slow Fridays', where we explore and
> think about stuff we're curious about. The deal is some artifact at the end of
> the day. So while this post is not complete - I believe part two is warranted.

Phoenix 1.6 started to include esbuild by [default](#ref1). The main reasons
cited were the amount of support the team had to continuously give for a
toolchain that although necessary is not under the control of the framework
teams control.

Back in the day, Phoenix used brunch to do front end builds - despite not being
the most common bundler at the time. The objective I assume was to provide
something that is easy to get going with and lowers the barrier to entry for
Phoenix. We actually switched brunch out for webpack before webpack got into
Phoenix in order to more easily use new libraries and newer ES syntax.

It wasn't without its challenges, and still is. Webpack is wonderfully
powerful - but it does do _a lot_, and it's really easy to stumble onto plugins
that are either order dependent or mutually exclusive.

## So what's this about esbuild

It's a bundler/compiler for JS/TS projects that is written in Go, along with
being faster by the simple fact it's natively compiled it also leverages
concurrency. To compare _why_ esbuild is faster than NodeJS on face value is
unfair in my opinion. Although having similar objectives, they are wildly
different in implementation and in features.

So **speed** is the big selling point. But thinking back to other bundlers, what
made us switch (thinking of gulp, grunt, mixing in babel, browserify etc). Those
changes were never about speed, at least a drop in build time was nice - a bit of
caching goes a long way. The changes were about being able to use the syntax and
libraries we wanted with as little fuss as possible.

Webpack _can_ do almost anything. I'm not convinced esbuild can match that, and
as an open-source maintainer I'd argue it shouldn't break its original goals to
match Webpack.

## Exploring the caveats

I started breaking down what our current bundle setup actually does, after all
if we were just bundling plain JS I'd probably be using rollup and terser. Going
through our `webpack.config.js` file I can see that it:

- Conditionally provide sourcemaps depending on the environment.
- Uses babel to parse js/jsx files  
  At the same time cherry picks lodash imports
  <a href="#lodash"><sup>*</sup></a>.
- Parse `import`s for `.css` files through `style-loader` and `css-loader`  
  Injecting the styles onto the dom.
- Detect `require` statements to images, copy them to an assets folder  
  and replace the statement with a url to image.
- Can watch files (excluding `node_modules`) in development.
- Splits files that come from `node_modules` into a `vendor.js` bundle.

That's a lot more than just building something, there's some implicit behaviour
here.

- The interaction between `style-loader` and `css-loader` results in extra
  functions and behaviour being introduced, it's not producing a `.css` file.
  > I'm personally not a big fan of apps injecting styles, but I think I get why
  > people do it. Maybe I'm old-school and like to have my stylesheets delivered
  > in a few files (or even one).
- The splitting doesn't know about `app.js`, it puts everything that resolves to
  `node_modules` in `vendor.js`. Subtle but worth pointing out.

<a name="lodash"><sup>*</sup></a>
Could probably ignore this and refactor some
files and check that tree-shaking is working properly.


## What we need esbuild to provide

Like I mentioned before, webpack is super versatile and it would be
short-sighted to get esbuild to do everything it does.

So I'm approaching this with the idea that I code will need some changes, the
less the better - I've always firmly believed the kinds of restrictions smaller
tools provide can make things neater and more portable.

- ✅ **Provide source maps**  
  Supported out of the box. [docs](https://esbuild.github.io/api/#sourcemap)
- ✅ **Watching files**  
  Yup. [docs](https://esbuild.github.io/api/#watch)
- 🆗 **Build our css** (and vendored css)  
  Compiling CSS is supported, however it doesn't (as far as I can tell) doesn't
  replace `style-loader` and how it injects CSS into the DOM.
- ✅ **Copy image assets referenced in JS**  
  Indeed it can, using the `file` loader.
  [docs](https://esbuild.github.io/content-types/#external-file)
- ✅ **Can split our files**  
  I picked a confusing green checkbox to illustrate that while esbuild does
  support file splitting - it appears to have some caveats, primarily that it
  only works with `esm` output files. We don't ship ES Modules to the browser,
  but seems like a good moment to try given the primary targets for our web
  front end getting module support in 2019 <sup><a href="#esm">2</a></sup>.

## Giving it a go

I've tried to go over the process as methodically as possible, after all this
isn't a new codebase nor am I alone on this. It's always important to understand
who's going to be working with this, and respect the varying skill sets and
focuses of our peers.

So we know what we want, but can any of this work? Let's give it a go with the
simplest of steps:

```
./node_modules/.bin/esbuild js/app.js --bundle --outfile=out.js                                    
 > js/app.js:58:2: error: Unexpected "<"
    58 │   <React.StrictMode>
       ╵   ^

1 error
```

Bang! Right, that one makes sense to me, it doesn't know what JSX is yet. I'm
gonna take a wild guess and say it won't know about the CSS or our referenced
images.

```
./node_modules/.bin/esbuild js/app.js \
        --loader:.js=jsx \
        --loader:.png=file \
        --loader:.jpg=file \
        --loader:.jpeg=file \
        --bundle \
        --outdir=out
 > js/marketing/ProductsList.js:53:40: error: Unexpected ":"
    53 │     const displayList = products.filter(::this.includesText);
       ╵                                         ^

 > js/marketing/Banner.js:13:4: warning: Duplicate key "background" in object literal
    13 │     background: `-webkit-linear-gradient(to left, ${theme.palette.banner.right}, ${theme.palette.banner.left})`,
       ╵     ~~~~~~~~~~
...
```

Nice! Two things worth mentioning here:

1. We're using some non-standard ES syntax here: `::`, let's replace that with
   the equivalent `includesText.bind(this)`.
2. Some duplicate keys in our theme objects, looks like a warning but worth
   cleaning up.

```
./node_modules/.bin/esbuild js/app.js \
        --loader:.js=jsx \
        --loader:.png=file \
        --loader:.jpg=file \
        --loader:.jpeg=file \
        --bundle \
        --outdir=out

  out/app.js                               8.0mb ⚠️
  out/commcare-dhis2-JKJLM3MQ.png        471.0kb
  ...
  out/app.css                             85.1kb
  ...and 145 more output files...

⚡ Done in 651ms
```

Jeepers! 651ms! That's nuts.

We can see it's copied our images and css into the build folder. Note that we're
not doing any bundle splitting right now and from the looks of it

```
... \ 
>   --minify

  out/app.js                               3.4mb ⚠️
  ...
⚡ Done in 611ms
```

That's better, wow. It's kinda difficult to not be amazed. For context, a
minified and split production build takes about 34s with webpack and that's on my
i7 desktop machine, and 197s (3+ mins) on CI/CD.

## What's next?

So our 'can we actually do this' seems to have gone pretty well so far. I'm
really excited about what this will give us in the end.

But a shell command doth not a replacement for webpack make. We still need to:

1. Get Phoenix to use esbuild and watch our files as we work.
2. Ensure that our html templates serve the correct files in dev & production.  
   Including our CSS that is no longer injected into the DOM.
3. Split at least our vendored modules into their own bundle.
4. Make sure sourcemaps generate correctly for when we upload them to Sentry.
5. Have some kind of cache-busting naming scheme for production builds.

## Resources

- [FYI: Phoenix drops webpack and npm for esbuild](https://fly.io/blog/phoenix-moves-to-esbuild-for-assets/) <a name="ref1"><sup>1</sup></a>
- [JavaScript modules via script tag](https://caniuse.com/es6-module) <a name="esm"><sup>2</sup></a>
