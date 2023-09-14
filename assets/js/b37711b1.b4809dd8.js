"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"vtiger developer readme",id:"vtiger-readme",keywords:["adaptor","readme","vtiger"]},i="vtiger Adaptor developer README.md",p={unversionedId:"packages/vtiger-readme",id:"packages/vtiger-readme",title:"vtiger developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/vtiger",source:"@site/adaptors/packages/vtiger-readme.md",sourceDirName:"packages",slug:"/packages/vtiger-readme",permalink:"/adaptors/packages/vtiger-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"vtiger developer readme",id:"vtiger-readme",keywords:["adaptor","readme","vtiger"]},sidebar:"adaptors",previous:{title:"vtiger changelog",permalink:"/adaptors/packages/vtiger-changelog"},next:{title:"zoho@0.3.1",permalink:"/adaptors/packages/zoho-docs"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"sample listTypes expression",id:"sample-listtypes-expression",level:4},{value:"sample postElement expression",id:"sample-postelement-expression",level:4},{value:"Development",id:"development",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vtiger-adaptor-developer-readmemd"},"vtiger Adaptor developer README.md"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/vtiger"},"https://github.com/OpenFn/adaptors/tree/main/packages/vtiger")),(0,a.kt)("h1",{id:"language-vtiger"},"Language Vtiger"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to make calls to the\nVtiger API."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"View all the required and optional properties for ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/vtiger-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.kt)("h4",{id:"sample-listtypes-expression"},"sample listTypes expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"listTypes();\n")),(0,a.kt)("h4",{id:"sample-postelement-expression"},"sample postElement expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'postElement({\n  operation: "create"\n  elementType: "leads",\n  element: {\n    "name": dataValue("name")(state),\n    "surname": dataValue("surname")(state),\n    "email": dataValue("email")(state)\n  }\n});\n\n\n')),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);