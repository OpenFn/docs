---
title: Using the CLI
sidebar_label: Installation and Updating
slug: /cli-installation
---

## **Installation**

To install:

```bash
npm install -g @openfn/cli
```

Make sure everything works by running the built-in test job:

```bash
openfn test
```

Check the version:

```bash
openfn -v
```

Get help:

```bash
openfn help
```

## **Updating**

You should be able to install a new version straight on top of your current
installation:

```bash
npm install -g @openfn/cli
```

If this fails, try uninstalling the current version first:

```bash
npm uninstall -g @openfn/cli
```

And then re-installing.
