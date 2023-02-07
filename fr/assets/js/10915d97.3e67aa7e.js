"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[78314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"nexmo developer readme",id:"nexmo-readme",keywords:["adaptor","readme","nexmo"]},p="Developer README for the nexmo adaptor",i={unversionedId:"packages/nexmo-readme",id:"packages/nexmo-readme",title:"nexmo developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/nexmo",source:"@site/adaptors/packages/nexmo-readme.md",sourceDirName:"packages",slug:"/packages/nexmo-readme",permalink:"/fr/adaptors/packages/nexmo-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"nexmo developer readme",id:"nexmo-readme",keywords:["adaptor","readme","nexmo"]},sidebar:"adaptors",previous:{title:"nexmo changelog",permalink:"/fr/adaptors/packages/nexmo-changelog"},next:{title:"nexmo Config",permalink:"/fr/adaptors/packages/nexmo-configuration-schema"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"sendSMS",id:"sendsms",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample expression",id:"sample-expression",level:4},{value:"Development",id:"development",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-nexmo-adaptor"},"Developer README for the nexmo adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/nexmo"},"https://github.com/OpenFn/adaptors/tree/main/packages/nexmo")),(0,a.kt)("h1",{id:"language-nexmo"},"Language Nexmo"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to interact with the Nexmo\nAPI."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h2",{id:"sendsms"},"sendSMS"),(0,a.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiKey": "mYaP1K3y",\n  "apiSecret": "supersecret"\n}\n')),(0,a.kt)("h4",{id:"sample-expression"},"sample expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sendSMS('OpenFn', '0123456789', 'HelloWorld!');\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);