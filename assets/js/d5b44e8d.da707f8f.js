"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(g,p(p({ref:t},m),{},{components:n})):a.createElement(g,p({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"template developer readme",id:"template-readme",keywords:["adaptor","readme","template"]},p="Developer README for the template adaptor",l={unversionedId:"packages/template-readme",id:"packages/template-readme",title:"template developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/template",source:"@site/adaptors/packages/template-readme.md",sourceDirName:"packages",slug:"/packages/template-readme",permalink:"/adaptors/packages/template-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"template developer readme",id:"template-readme",keywords:["adaptor","readme","template"]},sidebar:"library",previous:{title:"template changelog",permalink:"/adaptors/packages/template-changelog"},next:{title:"twilio@0.3.0",permalink:"/adaptors/packages/twilio-docs"}},i={},s=[{value:"Documentation",id:"documentation",level:2},{value:"post",id:"post",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample expression using operation",id:"sample-expression-using-operation",level:4},{value:"Development",id:"development",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-template-adaptor"},"Developer README for the template adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/template"},"https://github.com/OpenFn/adaptors/tree/main/packages/template")),(0,r.kt)("h1",{id:"language-template"},"language-template"),(0,r.kt)("p",null,"An OpenFn ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the ","_","_","_","_","\nAPI."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View the documentation at ",(0,r.kt)("a",{parentName:"li",href:"https://openfn.github.io/adaptor/"},"https://openfn.github.io/adaptor/")),(0,r.kt)("li",{parentName:"ul"},"To update the documentation site, run:\n",(0,r.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs"))),(0,r.kt)("h2",{id:"post"},"post"),(0,r.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "taylor@openfn.org",\n  "password": "supersecret"\n}\n')),(0,r.kt)("h4",{id:"sample-expression-using-operation"},"sample expression using operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'post({\n  "url": "api/v1/forms/data/wide/json/formId",\n  "body": {"a":1}\n  "headers": {}\n})\n')),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);