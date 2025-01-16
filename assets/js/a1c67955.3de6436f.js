"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8364],{22277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(58168),o=(n(96540),n(15680));const r={title:"Mojatax Adaptor"},i=void 0,p={unversionedId:"mojatax",id:"mojatax",title:"Mojatax Adaptor",description:"About Mojatax",source:"@site/adaptors/mojatax.md",sourceDirName:".",slug:"/mojatax",permalink:"/adaptors/mojatax",draft:!1,tags:[],version:"current",frontMatter:{title:"Mojatax Adaptor"},sidebar:"adaptors",previous:{title:"mogli developer readme",permalink:"/adaptors/packages/mogli-readme"},next:{title:"mojatax@1.0.5",permalink:"/adaptors/packages/mojatax-docs"}},s={},l=[{value:"About Mojatax",id:"about-mojatax",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"about-mojatax"},"About Mojatax"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://mojatax.com/"},"Mojatax")," is a mobile application designed to help\nbusinesses and individuals in Tanzania issue TRA (Tanzania Revenue Authority)\nfiscal receipts directly from their mobile devices. It simplifies the process of\ntax receipt issuance."),(0,o.yg)("h2",{id:"integration-options"},"Integration Options"),(0,o.yg)("p",null,"Mojatax 1.0 has an available\n",(0,o.yg)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro"},"REST API"),". See\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/mojatax-docs"},"functions")," for more on how to use this adaptor\nto work with the API."),(0,o.yg)("p",null,"As of October '24, there is no documented support for a webhook or a data\nforwarding feature."),(0,o.yg)("h2",{id:"authentication"},"Authentication"),(0,o.yg)("p",null,"Users must specify a Mojatax Business ",(0,o.yg)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"password")," to generate an\n",(0,o.yg)("inlineCode",{parentName:"p"},"access_token"),", which can be sent as a ",(0,o.yg)("strong",{parentName:"p"},"Bearer Token")," to access other API\nendpoints.\n",(0,o.yg)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/5385860/2s93RMVao6#e4d5c554-0224-4705-9094-b565c82b1f26"},"See Mojatax docs"),"\nfor detailed guidance."),(0,o.yg)("p",null,"OpenFn users can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Mojatax")," credential type when\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"creating a credential"),"."),(0,o.yg)("p",null,"See this adaptor's\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/mojatax-configuration-schema"},"Configuration docs")," for\ntechnical docs on the authentication parameters required. If working locally or\nif using a ",(0,o.yg)("inlineCode",{parentName:"p"},"Raw JSON")," credential type, then your configuration will look\nsomething like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "baseUrl": "https://vfd-staging.mojatax.com",\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "clientId": "the-long-uuid-provided-by-mojatax"\n}\n')),(0,o.yg)("h2",{id:"helpful-links"},"Helpful Links"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Mojatax API documentation on Postman:\n",(0,o.yg)("a",{parentName:"li",href:"https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro"},"https://documenter.getpostman.com/view/5385860/2s93RMVao6#intro"))))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);