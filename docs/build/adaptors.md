---
title: Adaptors
---

An adaptor is an open-source module that provides the necessary operations that help communicate with a specific external system. We often refer to them as `language-packages`. In the following, we might use the two terms interchangeably.

## Where to find them?
### On GitHub
The developed adaptors can be found in GitHub under `https://github.com/openfn`, starting with the prefix `language-XXXX`. Some examples are: `language-http (https://github.com/OpenFn/language-http)`, `language-postgresql (https://github.com/OpenFn/language-postgresql)`.

### On openfn.org
When creating or editing a job, you can choose the adaptor to run the job. This way you "import" the needed operations. Simply open the dropdown list of adaptors, and click on one.
![Adaptors list in job editor](/img/adaptor_choice_openfn.png)

### On npm
Some of our language-packages are also available in `npmjs (https://www.npmjs.com/search?q=%40openfn)`.

![Adaptors list in npm](/img/adaptor_npm.png)


## Developing an adaptor

You can develop a new adaptor from scratch or extend an existing one. 

### Extending an adaptor
Extending an adaptor equals adding one or multiple new operations. The new operations can be added inside the `src/Adaptor.js` file of the adaptor.

![Adaptor.js](/img/srcfolder.png)


### Developing a new adaptor
Developing a new Adaptor a a language package can be done by cloning the template available in this Url: `https://github.com/OpenFn/adaptor` via the `USE THIS TEMPLATE` button over on Github.

![Use this template button](/img/usethistemplate.png)

#### Default operation

This template contains a default `create` operation that can be customized according to the objectives of the new language-package.

```javascript
export function create(path, params, callback) {
  return state => {
   // expand references for the data argument with state
   // do the work
   // return state
  };
}
```