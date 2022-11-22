"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[57019],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||o;return t?n.createElement(k,p(p({ref:a},d),{},{components:t})):n.createElement(k,p({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10714:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const o={title:"khanacademy developer readme",id:"khanacademy-readme",keywords:["adaptor","readme","khanacademy"]},p="Developer README for the khanacademy adaptor",c={unversionedId:"packages/khanacademy-readme",id:"packages/khanacademy-readme",title:"khanacademy developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/khanacademy",source:"@site/adaptors/packages/khanacademy-readme.md",sourceDirName:"packages",slug:"/packages/khanacademy-readme",permalink:"/adaptors/packages/khanacademy-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"khanacademy developer readme",id:"khanacademy-readme",keywords:["adaptor","readme","khanacademy"]},sidebar:"library",previous:{title:"khanacademy changelog",permalink:"/adaptors/packages/khanacademy-changelog"},next:{title:"kobotoolbox@1.2.0",permalink:"/adaptors/packages/kobotoolbox-docs"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"fetch",id:"fetch",level:2},{value:"Sample configuration",id:"sample-configuration",level:4},{value:"sample usage",id:"sample-usage",level:4},{value:"Development",id:"development",level:2}],d={toc:i};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-khanacademy-adaptor"},"Developer README for the khanacademy adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/khanacademy"},"https://github.com/OpenFn/adaptors/tree/main/packages/khanacademy")),(0,r.kt)("h1",{id:"language-khanacademy"},"Language KhanAcademy"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to make HTTP calls."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"fetch"},"fetch"),(0,r.kt)("h4",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "yours",\n  "password": "notmine",\n  "consumerKey": "somEThINGkeyish",\n  "secretKey": "otherThiNGfSECret"\n}\n')),(0,r.kt)("h4",{id:"sample-usage"},"sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch({\n  getEndpoint: 'user',\n  queryParams: {\n    email: 'thisoneuser@something.org',\n  },\n  postUrl: 'https://www.openfn.org/inbox/your-uuid',\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}s.isMDXComponent=!0}}]);