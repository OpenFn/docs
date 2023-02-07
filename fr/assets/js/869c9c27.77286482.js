"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[53244],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"mogli Config",id:"mogli-configuration-schema",keywords:["adaptor","configuration-schema","mogli"]},i=void 0,c={unversionedId:"packages/mogli-configuration-schema",id:"packages/mogli-configuration-schema",title:"mogli Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/mogli-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mogli-configuration-schema",permalink:"/fr/adaptors/packages/mogli-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"mogli Config",id:"mogli-configuration-schema",keywords:["adaptor","configuration-schema","mogli"]},sidebar:"adaptors",previous:{title:"mogli developer readme",permalink:"/fr/adaptors/packages/mogli-readme"},next:{title:"mongodb@1.0.4",permalink:"/fr/adaptors/packages/mongodb-docs"}},s={},l=[],p={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For use in ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginUrl": "//Mogli instance login URL",\n  "username": "//Mogli instance username",\n  "password": "//Mogli instance password",\n  "securityToken": "//Mogli instance security token",\n  "secret": "//Mogli instance secret"\n}\n')))}g.isMDXComponent=!0}}]);