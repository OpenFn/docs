"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[12229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"mogli developer readme",id:"mogli-readme",keywords:["adaptor","readme","mogli"]},i="Developer README for the mogli adaptor",l={unversionedId:"packages/mogli-readme",id:"packages/mogli-readme",title:"mogli developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/mogli",source:"@site/adaptors/packages/mogli-readme.md",sourceDirName:"packages",slug:"/packages/mogli-readme",permalink:"/fr/adaptors/packages/mogli-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"mogli developer readme",id:"mogli-readme",keywords:["adaptor","readme","mogli"]},sidebar:"adaptors",previous:{title:"mogli changelog",permalink:"/fr/adaptors/packages/mogli-changelog"},next:{title:"mogli Config",permalink:"/fr/adaptors/packages/mogli-configuration-schema"}},p={},c=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"Create inbound SMS",id:"create-inbound-sms",level:3},{value:"Development",id:"development",level:2}],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-mogli-adaptor"},"Developer README for the mogli adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/mogli"},"https://github.com/OpenFn/adaptors/tree/main/packages/mogli")),(0,a.kt)("h1",{id:"language-mogli"},"Language Mogli"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to interact with Mogli\nSMS."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "taylor@openfn.org",\n  "password": "supersecret",\n  "loginUrl": "https://instance_name.mogli.com",\n  "securityToken": "xxx123",\n  "secret": "abc456"\n}\n')),(0,a.kt)("h3",{id:"create-inbound-sms"},"Create inbound SMS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"createSMS(\n  fields(\n    field('sender', dataValue('from_number')),\n    field('receivedAt', dataValue('timestamp')),\n    field('message', dataValue('message'))\n  )\n);\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);