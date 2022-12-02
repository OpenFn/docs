"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[74300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||p;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={title:"smpp developer readme",id:"smpp-readme",keywords:["adaptor","readme","smpp"]},o="Developer README for the smpp adaptor",s={unversionedId:"packages/smpp-readme",id:"packages/smpp-readme",title:"smpp developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/smpp",source:"@site/adaptors/packages/smpp-readme.md",sourceDirName:"packages",slug:"/packages/smpp-readme",permalink:"/fr/adaptors/packages/smpp-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"smpp developer readme",id:"smpp-readme",keywords:["adaptor","readme","smpp"]},sidebar:"adaptors",previous:{title:"smpp changelog",permalink:"/fr/adaptors/packages/smpp-changelog"},next:{title:"SurveyCTO",permalink:"/fr/adaptors/surveycto"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample send expression",id:"sample-send-expression",level:4},{value:"Development",id:"development",level:2}],c={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-smpp-adaptor"},"Developer README for the smpp adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/smpp"},"https://github.com/OpenFn/adaptors/tree/main/packages/smpp")),(0,a.kt)("h1",{id:"language-smpp"},"Language SMPP"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to make calls to an OpenFn\nSMPP client API."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "systemId": "some_smpp_client_name",\n  "password": "password",\n  "clientHost": "http://localhost:4000",\n  "inboxId": "1c908151-8273-431c-b1d4-blah"\n}\n')),(0,a.kt)("h4",{id:"sample-send-expression"},"sample send expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"send({\n  text: dataValue('text'),\n  smsId: dataValue('messageId'),\n  recipient: dataValue('to'),\n  sender: dataValue('from'),\n});\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);