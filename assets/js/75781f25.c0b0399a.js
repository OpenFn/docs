"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[95818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"BambooHR"},i=void 0,p={unversionedId:"apps/bamboohr",id:"apps/bamboohr",title:"BambooHR",description:"Overview",source:"@site/docs/apps/bamboohr.md",sourceDirName:"apps",slug:"/apps/bamboohr",permalink:"/documentation/apps/bamboohr",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/bamboohr.md",tags:[],version:"current",frontMatter:{title:"BambooHR"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Further Reading:",id:"further-reading",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Integration Examples",id:"integration-examples",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"BambooHR is..."),(0,o.kt)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("p",null,"Example user stories..."),(0,o.kt)("h3",{id:"further-reading"},"Further Reading:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Links...")),(0,o.kt)("h2",{id:"integration-options"},"Integration Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Data integration via BambooHR Web API - link: ....")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Webhook service to push data to OpenFn endpoint - link: ... Notes about\nwebhook setup..."))),(0,o.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,o.kt)("p",null,"Currently there is no tool-specific adaptor, so ",(0,o.kt)("inlineCode",{parentName:"p"},"language-http")," can be\nimplemented to integrate via HTTP requests to the web API."),(0,o.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,o.kt)("p",null,"Links to sample jobs/ code snippets..."))}u.isMDXComponent=!0}}]);