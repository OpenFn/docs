"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"vtiger developer readme",id:"vtiger-readme",keywords:["adaptor","readme","vtiger"]},p="Developer README for the vtiger adaptor",i={unversionedId:"packages/vtiger-readme",id:"packages/vtiger-readme",title:"vtiger developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/vtiger",source:"@site/adaptors/packages/vtiger-readme.md",sourceDirName:"packages",slug:"/packages/vtiger-readme",permalink:"/adaptors/packages/vtiger-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"vtiger developer readme",id:"vtiger-readme",keywords:["adaptor","readme","vtiger"]},sidebar:"adaptors",previous:{title:"vtiger changelog",permalink:"/adaptors/packages/vtiger-changelog"},next:{title:"zoho@0.2.0",permalink:"/adaptors/packages/zoho-docs"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample listTypes expression",id:"sample-listtypes-expression",level:4},{value:"sample postElement expression",id:"sample-postelement-expression",level:4},{value:"Development",id:"development",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-vtiger-adaptor"},"Developer README for the vtiger adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/vtiger"},"https://github.com/OpenFn/adaptors/tree/main/packages/vtiger")),(0,a.kt)("h1",{id:"language-vtiger"},"Language Vtiger"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to make calls to the\nVtiger API."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hostUrl": "https://openfunction.od2.vtiger.com",\n  "username": "taylor@openfn.org",\n  "accessToken": "blahBlahBlah"\n}\n')),(0,a.kt)("h4",{id:"sample-listtypes-expression"},"sample listTypes expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"listTypes();\n")),(0,a.kt)("h4",{id:"sample-postelement-expression"},"sample postElement expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'postElement({\n  operation: "create"\n  elementType: "leads",\n  element: {\n    "name": dataValue("name")(state),\n    "surname": dataValue("surname")(state),\n    "email": dataValue("email")(state)\n  }\n});\n\n\n')),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);