"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31350],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"dynamics developer readme",id:"dynamics-readme",keywords:["adaptor","readme","dynamics"]},o="Developer README for the dynamics adaptor",s={unversionedId:"packages/dynamics-readme",id:"packages/dynamics-readme",title:"dynamics developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/dynamics",source:"@site/adaptors/packages/dynamics-readme.md",sourceDirName:"packages",slug:"/packages/dynamics-readme",permalink:"/adaptors/packages/dynamics-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"dynamics developer readme",id:"dynamics-readme",keywords:["adaptor","readme","dynamics"]},sidebar:"adaptors",previous:{title:"dynamics changelog",permalink:"/adaptors/packages/dynamics-changelog"},next:{title:"dynamics Config",permalink:"/adaptors/packages/dynamics-configuration-schema"}},p={},l=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample createEntity expression",id:"sample-createentity-expression",level:4},{value:"sample query expression",id:"sample-query-expression",level:4},{value:"sample update expression",id:"sample-update-expression",level:4},{value:"sample delete expression",id:"sample-delete-expression",level:4},{value:"Development",id:"development",level:2}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-dynamics-adaptor"},"Developer README for the dynamics adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/dynamics"},"https://github.com/OpenFn/adaptors/tree/main/packages/dynamics")),(0,r.kt)("h1",{id:"language-dynamics"},"Language Dynamics"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to make calls to the\nMicrosoft Dynamics API."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dynamics uses oauth2. The language-package will expect to be given a valid\noauth token. If a valid token is not provided, it will fail. On OpenFn.org, the\n",(0,r.kt)("inlineCode",{parentName:"em"},"CredentialService")," is responsible for making sure the the oauth token is valid\neach time it assembles state to hand to ",(0,r.kt)("inlineCode",{parentName:"em"},"execute"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": "https://openfn.crm2.dynamics.com",\n  "apiVersion": "8.2.0",\n  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"\n}\n')),(0,r.kt)("h4",{id:"sample-createentity-expression"},"sample createEntity expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createEntity({\n  entityName: 'accounts',\n  body: {\n    name: 'Open Function',\n    creditonhold: false,\n    address1_latitude: 47.639583,\n    description: 'This is the description of the sample account',\n    revenue: 5000000,\n    accountcategorycode: 1,\n  },\n});\n")),(0,r.kt)("h4",{id:"sample-query-expression"},"sample query expression"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Can be used to retrieve or query a specific Entity if an entityId is declared\nin the expression. Otherwise it will perform a query on all data with the\ndefined Entity Name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query({\n  entityName: 'contacts',\n  entityId: '51a0e5b9-88df-e311-b8e5-6c3be5a8b200',\n  query: {\n    fields: ['fullname', 'birthdate'],\n    limit: 10,\n    orderBy: {\n      field: 'lastname',\n      direction: 'asc',\n    },\n    filter: \"firstname eq 'Cat'\",\n  },\n});\n")),(0,r.kt)("h4",{id:"sample-update-expression"},"sample update expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"updateEntity({\n  entityName: 'accounts',\n  entityId: 'f4301865-c64a-e711-80f3-e0071b6fd061',\n  body: {\n    name: 'wilder 2',\n    creditonhold: true,\n    address1_latitude: 47.639583,\n    description: 'This is the description of the sample account',\n    revenue: 5000000,\n    accountcategorycode: 1,\n  },\n});\n")),(0,r.kt)("h4",{id:"sample-delete-expression"},"sample delete expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"deleteEntity({\n  entityName: 'accounts',\n  entityId: 'aeef941b-254a-e711-80f1-e0071b685921',\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);