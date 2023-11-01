"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[27918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"A closer look at jobs"},s=void 0,i={unversionedId:"jobs/understanding",id:"jobs/understanding",title:"A closer look at jobs",description:"This is technical documentation aimed at making complex custom jobs easier to",source:"@site/docs/jobs/understanding.md",sourceDirName:"jobs",slug:"/jobs/understanding",permalink:"/documentation/next/jobs/understanding",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/understanding.md",tags:[],version:"current",frontMatter:{title:"A closer look at jobs"},sidebar:"docs",previous:{title:"Designing a job",permalink:"/documentation/next/jobs/job-design-intro"},next:{title:"What's an operation?",permalink:"/documentation/next/jobs/operations"}},l={},c=[{value:"Key Terms and Concepts",id:"key-terms-and-concepts",level:2},{value:"State is passed to operations. Operations Return state.",id:"state-is-passed-to-operations-operations-return-state",level:2},{value:"Sequences of operations inside custom functions.",id:"sequences-of-operations-inside-custom-functions",level:2},{value:"Controlling timing between operations with async functions.",id:"controlling-timing-between-operations-with-async-functions",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is technical documentation aimed at making complex custom jobs easier to\nwrite."),(0,a.kt)("h2",{id:"key-terms-and-concepts"},"Key Terms and Concepts"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"core")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openfn/core"},"https://github.com/openfn/core"),") is the Javascript program which\nexecutes jobs for OpenFn in an emphemeral Node.js environment."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"state")," is a .JSON file that is built and passed into the Node environment.\nIt contains at least two keys, ",(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"data"),". Configuration will\nbe populated with your credential and it used by adaptors for authentication,\nand data will be populated with message data if the job was triggered by an\nincoming message.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "username": "taylor",\n    "password": "shhhhhh",\n    "loginUrl": "https://login.salesforce.com"\n  },\n  "data": {\n    "a": 1,\n    "b": {\n      "x": [1, 2, 3]\n    }\n  }\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"expressions"),' are sequences of operations to be executed. They are part of\n"jobs", which also include a credential, a trigger, a label, and (sometimes)\na github filepath.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"operations")," are named functions, exported for use by specific adaptors,\nwhich take state and return state.")),(0,a.kt)("h2",{id:"state-is-passed-to-operations-operations-return-state"},"State is passed to operations. Operations Return state."),(0,a.kt)("p",null,"This is a key concept. When you write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"create('object', fields(\n  field(...)\n));\n")),(0,a.kt)("p",null,"The execute function in your language-package (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"language-salesforce"),") will\nexecute each operation with state, then return state. If you want to execute\noperations inside another custom function, you must explicitly pass in state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  return create('object', fields(\n    field(...)\n  ))(state)\n});\n")),(0,a.kt)("h2",{id:"sequences-of-operations-inside-custom-functions"},"Sequences of operations inside custom functions."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," you can string together several sequential operations inside a\ncustom function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fn(state => {\n  const { userName } = state.data.form.meta;\n\n  if (userName != \'tester\') {\n    return execute(\n      upsert("person__c", "Name", fields(\n        field(...),\n        field(...)\n      )),\n      beta.each(\n        dataPath("form.array[*]"),\n        upsert("object", "Name", fields(\n          field(...)\n        ))\n      )\n    )(state)\n  }\n  return state;\n});\n')),(0,a.kt)("h2",{id:"controlling-timing-between-operations-with-async-functions"},"Controlling timing between operations with async functions."),(0,a.kt)("p",null,"To get really complex, you might want to execute a number of async functions\ninside an ",(0,a.kt)("inlineCode",{parentName:"p"},"alterState")," operation, but WAIT for those functions to resolve before\nmoving on to your next operation. If ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," doesn't work for your use case,\nyou could use ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all")," and return an async function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n  console.log('First we define a bunch of different async functions.');\n  const postClinics = async c => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: c },\n    })(state);\n  };\n\n  const postPatients = async p => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: p },\n    })(state);\n  };\n\n  const postVisits = async v => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: v },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...state.data.clinicSets.map(item => postClinics(item)),\n      ...state.data.patientSets.map(item => postPatients(item)),\n      ...state.data.visitSets.map(item => postVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nfn(state => {\n  console.log('I get called AFTER those async functions are resolved.');\n  return state;\n});\n")))}d.isMDXComponent=!0}}]);