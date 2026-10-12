---
title: Go.Data
---

## Overview

Go.Data ([https://www.who.int/godata](https://www.who.int/godata) is an outbreak
investigation tool for field data collection during public health emergencies.

### Integration Use Cases

Check out the Go.Data `Interoperability Toolkit` docs for example OpenFn
integrations and related documentation:
https://worldhealthorganization.github.io/godata/interoperability/

### Further Reading

1. Go.Data API docs https://worldhealthorganization.github.io/godata/api-docs/

2. Go.Data Community https://community-godata.who.int/login

3. Go.Data GitHub Repository – https://github.com/WorldHealthOrganization/godata

## Integration Options

Data integration via the Go.Data web API. Two-way integration can be achieved,
but see all options here:
https://worldhealthorganization.github.io/godata/options/

## OpenFn Adaptor

The open-source [`language-godata`](https://openfn.github.io/language-godata/)
adaptor has been developed with a series of helper functions for common
operations to expedite integration setup.

Also, the generic
[`language-http`](https://github.com/OpenFn/language-http#language-http-) can be
used to make HTTP requests to the Go.Data API and can perform any operations not
supported by `language-godata`.

## Implementation Examples

See Go.Data docs site:
https://worldhealthorganization.github.io/godata/integration-scripts/

:::info Report or fix a problem with this adaptor

OpenFn adaptors are open source and we welcome contributions. See the
[Adaptors Wiki](https://github.com/OpenFn/adaptors/blob/main/wiki/index.md) to
learn how to update an adaptor, or ask on the
[OpenFn Community Forum](https://community.openfn.org/).

:::
