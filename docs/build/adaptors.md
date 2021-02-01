---
title: Adaptors
---

An adaptor is an open-source module that provides the necessary operations that help communicate with a specific external system. We often refer to them as `language-packages`.

## Where to find them?
### On GitHub
The developed adaptors can be found in GitHub under `https://github.com/openfn`, starting with the prefix `language-XXXX`. Some examples are: `language-http (https://github.com/OpenFn/language-http)`, `language-postgresql (https://github.com/OpenFn/language-postgresql)`.

### On openfn.org
When creating or editing a job, you can choose the adaptor to run the job. This way you "import" the needed operations. Simply open the dropdown list of adaptors, and click on one.
![Adaptors list in job editor](/img/adaptor_choice_openfn.png)

### On npm
Some of our language-packages are also available in `npmjs (https://www.npmjs.com/search?q=%40openfn)`.

![Adaptors list in job editor](/img/adaptor_npm.png)


## Prerequisites

Developing a new Adaptor a a language package can be done by cloning the template available in this Url: `https://github.com/OpenFn/adaptor`. 

## Default operation

This template contains a default `create` operation that can be customized according to the objectives.

```javascript
export function create(path, params, callback) {
  return state => {
   // expand references for the data argument with state
   // do the work
   // return state
  };
}
```