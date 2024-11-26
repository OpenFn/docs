"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[58564],{17726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const l={title:"Collections Adaptor"},r=void 0,i={unversionedId:"collections",id:"collections",title:"Collections Adaptor",description:"Collections Overview",source:"@site/adaptors/collections.md",sourceDirName:".",slug:"/collections",permalink:"/adaptors/collections",draft:!1,tags:[],version:"current",frontMatter:{title:"Collections Adaptor"},sidebar:"adaptors",previous:{title:"CKAN",permalink:"/adaptors/ckan"},next:{title:"collections@0.5.2",permalink:"/adaptors/packages/collections-docs"}},s={},c=[{value:"Collections Overview",id:"collections-overview",level:2},{value:"The Collections Adaptor",id:"the-collections-adaptor",level:2},{value:"Usage Guide",id:"usage-guide",level:2},{value:"Set some data in a Collection",id:"set-some-data-in-a-collection",level:3},{value:"Getting data from a Collection",id:"getting-data-from-a-collection",level:3},{value:"Remove data from a Collection",id:"remove-data-from-a-collection",level:3},{value:"Filters, Limits &amp; Cursors",id:"filters-limits--cursors",level:2},{value:"CLI usage",id:"cli-usage",level:2},{value:"For a single job",id:"for-a-single-job",level:3},{value:"For a workflow",id:"for-a-workflow",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"collections-overview"},"Collections Overview"),(0,o.yg)("p",null,"The Collections API provides access to a secure key/value store on the OpenFn\nPlatform. It is designed for high performance over a large volume of data."),(0,o.yg)("p",null,"Collections are secure, private datastores which are visible only to Workflows\nwithin a particular OpenFn Project. They can be created, managed and destroyed\nfrom the OpenFn Admin page."),(0,o.yg)("p",null,"When running in the CLI, a Personal Access Token can be used to get access to\nthe collection (generated from the app at /profile/tokens)."),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/collections"},"Collections")," Platform Docs to learn\nmore about Collections."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Collections must be created in the platform Admin page before they can be used."),(0,o.yg)("p",{parentName:"admonition"},"Refer to the ",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/collections"},"Collections Docs")," for details")),(0,o.yg)("h2",{id:"the-collections-adaptor"},"The Collections Adaptor"),(0,o.yg)("p",null,"The Collections API is inserted into all Steps through a special kind of\nadaptor."),(0,o.yg)("p",null,"Uniquely, the Collections adaptor it is designed to be run ",(0,o.yg)("em",{parentName:"p"},"alongside")," other\nadaptors, not by itself. It is injected into the runtime environment for you for\nyou by OpenFn. This makes the Collections API available to every Step in a\nWorkflow, regardless of which adaptor it is using."),(0,o.yg)("p",null,"If using the CLI run a workflow with Collections, refer to the\n",(0,o.yg)("a",{parentName:"p",href:"#cli-usage"},"CLI Usage")," guide below."),(0,o.yg)("h2",{id:"usage-guide"},"Usage Guide"),(0,o.yg)("p",null,"All values in a Collection are stored under a string key. Values are stored as\nStrings, but the Collections API will automatically serialized and de-serialize\nJSON objects to strings for you (so, in effect, you can treat keys as strings\nand value as objects)."),(0,o.yg)("p",null,"Collections can be manipulated using a single key a pattern - where a pattern is\na string with a wildcard. So the key-pattern ",(0,o.yg)("inlineCode",{parentName:"p"},"mr-benn")," will only match a single\nvalue under the key ",(0,o.yg)("inlineCode",{parentName:"p"},"mr-benn"),", but the pattern ",(0,o.yg)("inlineCode",{parentName:"p"},"2024*")," will match all keys which\nstart with ",(0,o.yg)("inlineCode",{parentName:"p"},"2024")," but have any other characters afterwards. The pattern\n",(0,o.yg)("inlineCode",{parentName:"p"},"2024*mr-benn*")," will match keys starting with 2024, then having some values plus\nthe string ",(0,o.yg)("inlineCode",{parentName:"p"},"mr-benn"),", plus any other sequence of characters (in other words,\nfetch all keys which relate to Mr Benn in 2024)."),(0,o.yg)("p",null,"The Collections API gives you four functions to read, write and remove data from\na collection."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Use ",(0,o.yg)("a",{parentName:"li",href:"adaptors/packages/collections-docs#collections_get"},(0,o.yg)("inlineCode",{parentName:"a"},"collections.get()")),"\nto fetch a single value, or batch-download a range of values."),(0,o.yg)("li",{parentName:"ul"},"Use\n",(0,o.yg)("a",{parentName:"li",href:"adaptors/packages/collections-docs#collections_each"},(0,o.yg)("inlineCode",{parentName:"a"},"collections.each()"))," to\nefficiently iterate over a range of items in a collection. Recommended for\nlarge data sets."),(0,o.yg)("li",{parentName:"ul"},"Use ",(0,o.yg)("a",{parentName:"li",href:"adaptors/packages/collections-docs#collections_set"},(0,o.yg)("inlineCode",{parentName:"a"},"collections.set()")),"\nto upload one or more values to a collection. ",(0,o.yg)("inlineCode",{parentName:"li"},"set()"),' is always an "upsert":\nif a key already exists, it\'s value will be replaced by the new value'),(0,o.yg)("li",{parentName:"ul"},"Use\n",(0,o.yg)("a",{parentName:"li",href:"adaptors/packages/collections-docs#collections_remove"},(0,o.yg)("inlineCode",{parentName:"a"},"collections.remove()")),"\nto remove one or more values.")),(0,o.yg)("p",null,"Detailed usage examples are provided below."),(0,o.yg)("h3",{id:"set-some-data-in-a-collection"},"Set some data in a Collection"),(0,o.yg)("p",null,"The Collection API allows you to set a JSON object (or any primitive JS value)\nunder a given key:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.set('my-collection', 'commcare-fhir-value-mappings', {\n  current_smoker: {\n    system: 'http://snomed.info/sct',\n    code: '77176002',\n    display: 'Smoker',\n  },\n  /* ... */\n});\n")),(0,o.yg)("p",null,"You can also pass an array of items for a batch-set. When setting multiple\nvalues, you need to set a key generator function to calculate a key for each\nitem, like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.set('my-favourite-footballer', value => value.id, [\n  {\n    id: 'player01',\n    name: 'Lamine Yamal',\n    /* other patient details */\n  },\n  {\n    id: 'player02',\n    name: 'Aitana Bonmati',\n    /* other patient details */\n  },\n  /* More patients {}, {} */\n]);\n")),(0,o.yg)("p",null,"The key generator is a function which receives each of the values in the\nsupplied values array as an id (so, in the example above, it gets called with\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"player01")," object, then the ",(0,o.yg)("inlineCode",{parentName:"p"},"player02")," object, and so on). For each value,\nit should return a string key, under which it will be saved in the collection."),(0,o.yg)("p",null,"You can use Javascript template literals to easily generate key values which\ninclude a mixture of static and dynamic values:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.set(\n  'my-favourite-footballer',\n  value => `${value.createdDate}-${value.region}-${value.name}`\n  $.data\n),\n")),(0,o.yg)("p",null,"In this example, the ",(0,o.yg)("inlineCode",{parentName:"p"},"createdDate"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"region")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," properties will be read\nfrom each value and assembled into a key-string, separated by dashes. This\ntechnique creates keys that are easily sorted by date."),(0,o.yg)("h3",{id:"getting-data-from-a-collection"},"Getting data from a Collection"),(0,o.yg)("p",null,"To retrieve multiple items from a Collection, we generally recommend using the\n",(0,o.yg)("inlineCode",{parentName:"p"},"each()")," function."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"each()")," will stream each value individually, greatly reducing the memory\noverhead of downloading a large amount of data to the client."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.each('my-collection', '2024*', (state, value, key) => {\n  console.log(value);\n  // No need to return state here\n});\n")),(0,o.yg)("p",null,"The second argument to ",(0,o.yg)("inlineCode",{parentName:"p"},"each")," is a query string or object. Pass a key with a\npattern, or an object including different query strings. Check the API reference\nfor a full listing."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.each(\n  'my-collection',\n  { key: '2024*', created_after: '20240601' },\n  (state, value, key) => {\n    console.log(value);\n  }\n);\n")),(0,o.yg)("p",null,"You can limit the amount of data you want to download with the ",(0,o.yg)("inlineCode",{parentName:"p"},"limit")," key. If\nthere are returned values on the server, a ",(0,o.yg)("inlineCode",{parentName:"p"},"cursor")," key will be written to\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.data"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections\n  .each('my-collection', { key: '2024*', limit: 1000 }, (state, value, key) => {\n    console.log(value);\n  })\n  .then(state => {\n    state.nextCursor = state.data.cursor;\n    // state.data.cursor now contains the cursor position\n    return state;\n  });\n")),(0,o.yg)("p",null,"You can fetch items individually with ",(0,o.yg)("inlineCode",{parentName:"p"},"get()"),", which will be written to\nstate.data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.get('my-collection', 'commcare-fhir-value-mappings').then(state => {\n  state.mappings = state.data;\n  return state;\n});\ncollecions.each($.inputs, state => {\n  const mappedString = state.mappings[state.data.diagnosis];\n  state.resources ??= {};\n  state.resources[state.data.id] = mappedString;\n  return state;\n});\n")),(0,o.yg)("p",null,"You can also fetch multiple items with ",(0,o.yg)("inlineCode",{parentName:"p"},"get()"),", which supports the same query\noptions as ",(0,o.yg)("inlineCode",{parentName:"p"},"each()"),"."),(0,o.yg)("p",null,"Bear in mind that all the items will be loaded into memory at once. For large\ndatasets and structures, this may cause problems."),(0,o.yg)("p",null,"When bulk-loading with ",(0,o.yg)("inlineCode",{parentName:"p"},"get()"),", state.data will be an array of items, and\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.data.cursor")," will contain the cursor position from the server"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.get('my-collection', '2024*').then(state => {\n  state.allRecords = state.data;\n  return state;\n});\n")),(0,o.yg)("h3",{id:"remove-data-from-a-collection"},"Remove data from a Collection"),(0,o.yg)("p",null,"You can remove an individual value by key:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.remove('my-collection', 'commcare-fhir-value-mappings');\n")),(0,o.yg)("p",null,"You can also use patterns to delete multiple values at a time:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.remove('my-collection', '2024*');\n")),(0,o.yg)("h2",{id:"filters-limits--cursors"},"Filters, Limits & Cursors"),(0,o.yg)("p",null,"As well as filtering keys with patterns, you can filter by created date:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"collections.each(\n  'my-collection',\n  { key: '2024*', createdAfter: '20240601' },\n  (state, value, key) => {\n    console.log(value);\n  }\n);\n")),(0,o.yg)("p",null,"You can use ",(0,o.yg)("inlineCode",{parentName:"p"},"createdBefore")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"createdAfter")," dates, which must be ISO 1806\nformatted strings. The ",(0,o.yg)("inlineCode",{parentName:"p"},"createdBefore")," timestamp will match all dates less than\nor equal to (<=) the ",(0,o.yg)("em",{parentName:"p"},"start")," of the provided date. Conversely, ",(0,o.yg)("inlineCode",{parentName:"p"},"createdAfter"),"\nwill match dates greater than or equal to the ",(0,o.yg)("em",{parentName:"p"},"end")," of the provided date."),(0,o.yg)("p",null,"By default, all matching values will be returned to you, but you can limit how\nmany items are returned in a single call:"),(0,o.yg)("p",null,"If a limit is set and there are more values waiting on the server, a ",(0,o.yg)("inlineCode",{parentName:"p"},"cursor"),"\nwill be written to ",(0,o.yg)("inlineCode",{parentName:"p"},"state.data"),". You can pass this cursor back to the server in\nthe next query to resume from that position."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// request 10k values from the cursor position\ncollections.get('my-collection', { key: '*', limit: 10e3, cursor: $.cursor });\nfn(state => {\n  // Write the cursor (if any) back to state for next time\n  state.cursor = state.data.cursor;\n  return state;\n});\n")),(0,o.yg)("h2",{id:"cli-usage"},"CLI usage"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Improved Collections support is coming to the CLI soon.")),(0,o.yg)("p",null,"Collections are designed for close integration with the platform app, but can be\nused from the CLI too."),(0,o.yg)("p",null,"You will need to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Set the job to use two adaptors"),(0,o.yg)("li",{parentName:"ul"},"Pass a Personal Access Token"),(0,o.yg)("li",{parentName:"ul"},"Set the Collections endpoint")),(0,o.yg)("p",null,"You can get a Personal Access Token from any v2 deployment."),(0,o.yg)("p",null,"Remember that a Collection must be created from the Admin page before it can be\nused!"),(0,o.yg)("h3",{id:"for-a-single-job"},"For a single job"),(0,o.yg)("p",null,"You can pass multiple adaptors from the CLI:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn job.js -a collections -a http -s state.json\n")),(0,o.yg)("p",null,"You'll need to set configuration on the state.json:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "collections_endpoint": "http://localhost:4000/collections",\n    "collections_token": "...paste the token from the app..."\n  }\n}\n')),(0,o.yg)("h3",{id:"for-a-workflow"},"For a workflow"),(0,o.yg)("p",null,"If you're using ",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.json"),", set the token and endpoint on\n",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.credentials"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "workflow": {\n    "steps": [ ... ],\n    "credentials": {\n      "collections_endpoint": "http://localhost:4000/collections",\n      "collections_token": "...paste the token from the app..."\n    }\n  }\n}\n')),(0,o.yg)("p",null,"And make sure that any steps which use collections have multiple adaptors set:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "workflow": {\n    "steps": [\n      {\n        "expression": "...",\n        "adaptors": ["@openfn/language-http", "@openfn/language-collections"]\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);