---
layout: post
title: How learning JavaScript is helping me better understand OpenFn jobs
author: Aicha Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags: [javascript, tips, jobs]
featured: true
---

OpenFn automation happens via [jobs](https://docs.openfn.org/documentation/build/jobs) written in JavaScript which define specific steps that OpenFn should perform. To improve my limited knowledge of JavaScript, I have been taking Codecademy's [Introduction to JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript). 

In this post we'll discuss:
1. Arrow functions 
2. Falsy values
3. Other short-hand notation

Keep reading for all the important learnings I have taken from just the first four modules!


## What is that little arrow? 

Most times, function declaration in OpenFn jobs looks like this:
```javascript
function getAge(dateString) {
    if (!dateString) return;

    const today = new Date();
    const birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
```
This was simple enough for me to follow. We are declaring a function, `getAge()`, which has the steps to calculate a person's age and can be easily reused throughout the job. 

But other times, function writing looks like this: 
```javascript
upsert('tbl_study', 'study_id', {
  study_id: state => state.studyIDMap[state.formType],
});
```

These **`arrow functions`** often confused me when reading through jobs. However, I've learned that these are merely a short-hand notation which removes the need to type out `function` for every function declaration. Further, we can make the code even more concise by also removing the parenthesis, curly braces, and the return keyword when certain criteria are met. In the code above, the parenthesis are omitted because there are no parameters, and the curly braces and return keyword are omitted because the function body is composed of a single-line block. As you can see, there are a variety of ways to write functions and this course is helping me better recognize them. Some key terminology here is: `function expression`, `arrow function`, `concise function`, `anonymous function`, and `implicit returns`.


## Falsy values


During the [mapping](https://docs.openfn.org/documentation/apps/salesforce/#mapping-and-design-considerations) phase of integration design, we often discuss how each answer choice for **multi-picklist** values should map from the source system to the destination system. Sometimes the mapping is simple but other times, there is an extensive list of possible choices that can be found in the [message](https://docs.openfn.org/documentation/getting-started/terminology/#message) and not all are relevant to the destination system. Then the question is, **how should the job handle values which are not explicitly mapped?** 

Sometimes we hear clients say to "ignore" those values. **But what does it really mean to "ignore" a value?** Should we set it to `0`? An empty string? How about `null`, `undefined` or `NaN`? In Javascript these are all `falsy` values. Determining what is really meant here is important and the value selected has different implications depending on the system. 

Take this sample mapping for different districts in Conakry. The value left of the colon is from the source system and the value to the right is for the destination system.

```javascript
const districtMapping = {
    Ratoma: 'RT',
    Kaloum: 'KL',
    Dixinn: 'DX',
    Matam: 'MA',
    Matoto: 'MT',
    Other: undefined,
  };
```

If the destination system is Salesforce, this mapping would not upload "Other" to Salesforce. However if "Other" mapped to an empty string instead, this would upload the empty string to Salesforce. **This distinction is especially important in cases where we are overwriting existing data.** For instance, if a student previously lived in Ratoma and then moved to an unknown district marked as "Other", "undefined" _would not_ update the student's district in Salesforce but the empty string would. 

How about if the message includes a value for a district that _is not_ in the mapping? Such as "New York". Should the job default to undefined? Null? 

These questions are just a few examples of how understanding `falsy` values in Javascript can make it easier to implement the best mapping for the real-world use case.

## Template literals, short-circuit evaluation and all the short hand that use to confuse me

**Short-circuit evaluation**

 When we are syncing forms to a database, we sometimes expect different versions of the same form with fields present one version but not the other. One way to mitigate this discrepancy, is by submitting a dummy value for the field whenever it is missing in the message. I just learned the fastest way to add this code to my jobs! For example, the code below will ensure that `household_id` always has a value in the destination system: if `survey_info/household_id` is present in the message this will be the assigned value, otherwise it will assign the dummy value  `state.data.body._id`. 

``` js
household_id: state.data.body['survey_info/household_id'] || state.data.body._id,
```

**Template literals**

Like the arrow discussed above, the "dollar sign" was another symbol that often confused me. But template literals are actually very straightforward. They increase the readability of the code and make it easier to see what the resulting string will be. Plus you don't have to worry about using quotes!

``` js
const sign = '$';
console.log(`The ${sign} isn't so confusing!`);
```

## Next steps

I'm well on my way to becoming a better job reader and writer. Here are some next steps:

1. Complete the 4 remaining Codecademy modules on **Intro to JavaScript.**

2. Understand `fn(state)` and how `state` can be manipulated in OpenFn jobs.

3. Explore what's available on the JavaScript docs [site](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

4. Sign up for the next level JavaScript course.  

