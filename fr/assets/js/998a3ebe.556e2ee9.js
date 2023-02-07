"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[93233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(g,p(p({ref:t},s),{},{components:n})):o.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<a;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"mongodb developer readme",id:"mongodb-readme",keywords:["adaptor","readme","mongodb"]},p="Developer README for the mongodb adaptor",i={unversionedId:"packages/mongodb-readme",id:"packages/mongodb-readme",title:"mongodb developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/mongodb",source:"@site/adaptors/packages/mongodb-readme.md",sourceDirName:"packages",slug:"/packages/mongodb-readme",permalink:"/fr/adaptors/packages/mongodb-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"mongodb developer readme",id:"mongodb-readme",keywords:["adaptor","readme","mongodb"]},sidebar:"adaptors",previous:{title:"mongodb changelog",permalink:"/fr/adaptors/packages/mongodb-changelog"},next:{title:"mongodb Config",permalink:"/fr/adaptors/packages/mongodb-configuration-schema"}},l={},d=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"insertDocuments",id:"insertdocuments",level:3},{value:"findDocuments",id:"finddocuments",level:3},{value:"Development",id:"development",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-mongodb-adaptor"},"Developer README for the mongodb adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/mongodb"},"https://github.com/OpenFn/adaptors/tree/main/packages/mongodb")),(0,r.kt)("h1",{id:"language-mongodb"},"Language MongoDB"),(0,r.kt)("p",null,"Language Pack for building expressions and operations for use with MongoDB."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "something",\n  "password": "secret",\n  "clusterUrl": "yourCluster-xxxyzzz.mongodb.net"\n}\n')),(0,r.kt)("h3",{id:"insertdocuments"},"insertDocuments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertDocuments({\n  database: 'yourDb',\n  collection: 'yourCollection',\n  documents: state => {\n    return state.data.map(item => {\n      return { name: item.name, age: item.age };\n    });\n  },\n  // callback: (state) => state, // optional\n});\n")),(0,r.kt)("h3",{id:"finddocuments"},"findDocuments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"findDocuments({\n  database: 'yourDb',\n  collection: 'yourCollection',\n  query: state => {\n    return { name: 'stu' };\n  },\n  // callback: (state) => state, // optional\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);