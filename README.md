# [OpenFn Documentation & Issue Tracking](https://docs.openfn.org)

## [![Logo](/docs/images/round-logo.png)&nbsp;&nbsp;docs.openfn.org](https://docs.openfn.org)

**_To view the documentation please visit
[docs.openfn.org](https://docs.openfn.org)._**

#### Other documentation

Documentation for various OpenFn tools, such as
[openfn/devtools](https://openfn.github.io/devtools/),
[openfn/core](https://github.com/OpenFn/core), and all of our open-source
language packages can be found in
[OpenFn's Github organization](https://github.com/OpenFn).

This repository is used to maintain the docs site, and for users to submit
issues and feature requests.

#### Contributing to this documentation site

- Install and familiarize yourself with [mkdocs](https://www.mkdocs.org/).
- `[Link name](/relative-path/#some-section)` to link to sections on this site.
- `[Link name](https://www.openfn.org)` to link to external websites.
- `![Screenshot](/relative-path/screenshot.png)` to include an image.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern
static website generator.

#####

Installation

```console
npm install
```

##### Local Development

```console
npm start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

##### Build

```console
npm build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

##### Deployment

Builds to `main` will autodeploy.