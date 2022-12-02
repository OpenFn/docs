"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[70486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(o),m=r,h=c["".concat(l,".").concat(m)]||c[m]||s[m]||a;return o?n.createElement(h,p(p({ref:t},u),{},{components:o})):n.createElement(h,p({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<a;d++)p[d]=o[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},96289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={title:"zoho developer readme",id:"zoho-readme",keywords:["adaptor","readme","zoho"]},p="Developer README for the zoho adaptor",i={unversionedId:"packages/zoho-readme",id:"packages/zoho-readme",title:"zoho developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/zoho",source:"@site/adaptors/packages/zoho-readme.md",sourceDirName:"packages",slug:"/packages/zoho-readme",permalink:"/fr/adaptors/packages/zoho-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"zoho developer readme",id:"zoho-readme",keywords:["adaptor","readme","zoho"]},sidebar:"adaptors",previous:{title:"zoho changelog",permalink:"/fr/adaptors/packages/zoho-changelog"}},l={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:3},{value:"addRow",id:"addrow",level:3},{value:"updateRow",id:"updaterow",level:3},{value:"Development",id:"development",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-zoho-adaptor"},"Developer README for the zoho adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/zoho"},"https://github.com/OpenFn/adaptors/tree/main/packages/zoho")),(0,r.kt)("h1",{id:"language-zoho"},"Language Zoho"),(0,r.kt)("p",null,"Language Pack for sending messages using the Zoho API."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "account": "yourzohoaccount",\n  "authToken": "secretauthtoken",\n  "apiVersion": "v2"\n}\n')),(0,r.kt)("h3",{id:"addrow"},"addRow"),(0,r.kt)("p",null,'To add a row to the "Customers" table in the "testing_openfn" database, use the\nfollowing ',(0,r.kt)("inlineCode",{parentName:"p"},"addRow")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"addRow(\n  'testing_openfn',\n  'Customers',\n  fields(field('Subject', dataValue('formId')), field('Status', 'Closed'))\n);\n")),(0,r.kt)("h3",{id:"updaterow"},"updateRow"),(0,r.kt)("p",null,"Coming soon. Want to help?\n",(0,r.kt)("a",{parentName:"p",href:"https://zohoreportsapi.wiki.zoho.com/Updating-Data.html"},"https://zohoreportsapi.wiki.zoho.com/Updating-Data.html")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}c.isMDXComponent=!0}}]);