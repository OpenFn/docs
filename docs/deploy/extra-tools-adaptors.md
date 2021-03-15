---
title: Extra tools for adaptors
sidebar_label: Extra tools for adaptors
---

The scripts here aid in setting up a development environment for adaptor work,
and include commands to quickly clone a large number of adaptors, create
tarballs of adaptors with only production dependencies included, etc.

For the kitchen sink, run:

```sh
./install ssh
./scripts/bootstrap npm-install
```

## Scripts

In order to run the scripts, ensure you have cd'd into the project directory and
enter `./scripts/<script-name>`

### bootstrap

Installs all adaptors in `repos` file to the `/adaptors` directory and prepares
the working directory. This needs to be run before running any of the other
scripts. Pass `npm-install` to run npm install for each adaptor also.

`./scripts/bootstrap npm-install` - to clone, set up hooks and npm install in
each `./scripts/bootstrap`- to clone and set up hooks in each

### generate-project.js

<!-- TODO: Rita to add generate-project usage instructions and one-line explanation. -->

### generate-doclets

Iterates overs all language pack folder names found in the `repos` list and
creates a doclet json file in the `doclets` directory.

### analyse-doclets

Iterates overs all doclets found in `doclets` and gives a tree view of the
doclet structure using [jsdoc-query](https://github.com/OpenFn/jsdoc-query).

### bundle

Creates a tarball with all production dependencies install for a given module.

Example: `./scripts/bundle-node language-common -o builds` creates a
`language-common-v1.0.0.tgz` file in the 'builds' directory.

Arguments `./scripts/bundle-node <language> -o <output folder> -d`

- `-o` - Output folder
- `-d` - Debug
- `--no-ast` - Don't build an include an AST for OpenFn.org to parse

### bundle-all

Runs `bundle` for all repos found in the list, and outputs them to the `builds`
folder.

### upload-release

Uploads a tarball to a Github release.

Example:

```
GH_TOKEN=<oauth-token> \
  ./scripts/upload-release -i ./builds/language-common-v0.0.0.tgz
```

Infers the repo name and version number from the file.

Arguments `./scripts/upload-release -i <file> [-u]`

- `i` - Path to build file to upload
- `u` - Update a file if already exists (and is a different size)

## Releasing a new adaptor version for production use

1. **Bump the version in `package.json`**
2. **Run `npm install`** to update `package-lock.json`
3. **Commit** and tag your version with `git tag`. _N.B., this is handled with a
   git hook provided by `bootstrap`_
4. **Push the commits and tag to GitHub** with `git push && git push --tags`
5. **Create a release** on the the associated repo on Github, selecting the
   version tag that was pushed in the last step. Write a title and release notes
   as needed then click 'Publish release'.
6. **Return to the devtools directory** with `cd ../../`
7. **Bundle the module** with
   `./scripts/bundle-node ./adaptors/<language-pack> -o builds`
8. **Verify that the tarball was created** in `builds` with the naming
   convention of: `<language-pack>-<version>.tgz`
9. **Upload the build** using the `upload-release` script:
   `./scripts/upload-release -i builds/<file>`

If the wrong file was uploaded or you want to replace the build on Github then
use the `-u` flag which deletes the build from Github if the filesize is
different.

Note that this script expects a `GH_TOKEN` env variable, which is an OAuth2
token you must get from Github (via the account page)

## Using a new adaptor in an OpenFn/platform instance

1. Add your release to the `scripts/install-lp` script.
2. Add the version number to `priv/adaptors.json`.
3. Add the `bodySchema` to `CredentialView.js`.
