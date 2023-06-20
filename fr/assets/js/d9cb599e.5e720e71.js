"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,p(p({ref:t},l),{},{components:r})):n.createElement(g,p({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"msgraph developer readme",id:"msgraph-readme",keywords:["adaptor","readme","msgraph"]},p="msgraph Adaptor developer README.md",i={unversionedId:"packages/msgraph-readme",id:"packages/msgraph-readme",title:"msgraph developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/msgraph",source:"@site/adaptors/packages/msgraph-readme.md",sourceDirName:"packages",slug:"/packages/msgraph-readme",permalink:"/fr/adaptors/packages/msgraph-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"msgraph developer readme",id:"msgraph-readme",keywords:["adaptor","readme","msgraph"]},sidebar:"adaptors",previous:{title:"msgraph changelog",permalink:"/fr/adaptors/packages/msgraph-changelog"},next:{title:"mssql@4.1.1",permalink:"/fr/adaptors/packages/mssql-docs"}},s={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Development",id:"development",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msgraph-adaptor-developer-readmemd"},"msgraph Adaptor developer README.md"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/msgraph"},"https://github.com/OpenFn/adaptors/tree/main/packages/msgraph")),(0,a.kt)("h1",{id:"language-msgraph-"},"language-msgraph ",(0,a.kt)("img",{src:"assets/sq-256x256.png",width:"30",height:"30"})),(0,a.kt)("p",null,"An OpenFn ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API"),"."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/msgraph-docs"},"docs site")," for\nfull technical documentation."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"View the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/msgraph-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To build ",(0,a.kt)("em",{parentName:"p"},"only")," the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0}}]);