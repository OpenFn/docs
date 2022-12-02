"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[26920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=i(n),u=o,g=s["".concat(m,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(g,p(p({ref:t},l),{},{components:n})):r.createElement(g,p({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[s]="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"common developer readme",id:"common-readme",keywords:["adaptor","readme","common"]},p="Developer README for the common adaptor",c={unversionedId:"packages/common-readme",id:"packages/common-readme",title:"common developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/common",source:"@site/adaptors/packages/common-readme.md",sourceDirName:"packages",slug:"/packages/common-readme",permalink:"/adaptors/packages/common-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"common developer readme",id:"common-readme",keywords:["adaptor","readme","common"]},sidebar:"adaptors",previous:{title:"common changelog",permalink:"/adaptors/packages/common-changelog"},next:{title:"DHIS2",permalink:"/adaptors/dhis2"}},m={},i=[{value:"Development",id:"development",level:2}],l={toc:i};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-readme-for-the-common-adaptor"},"Developer README for the common adaptor"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/common"},"https://github.com/OpenFn/adaptors/tree/main/packages/common")),(0,o.kt)("h1",{id:"language-common-circleci"},"Language Common ",(0,o.kt)("a",{parentName:"h1",href:"https://circleci.com/gh/OpenFn/language-common"},(0,o.kt)("img",{parentName:"a",src:"https://circleci.com/gh/OpenFn/language-common.svg?style=svg",alt:"CircleCI"}))),(0,o.kt)("p",null,"Common and generic expressions and operations for ",(0,o.kt)("a",{parentName:"p",href:"http://openfn.org"},"OpenFn"),"."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,o.kt)("p",null,"Run tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,o.kt)("p",null,"Build the project using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,o.kt)("p",null,"To just build the docs run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}s.isMDXComponent=!0}}]);