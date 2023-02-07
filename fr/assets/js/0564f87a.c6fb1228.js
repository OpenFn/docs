"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6249],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75232:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"medicmobile Config",id:"medicmobile-configuration-schema",keywords:["adaptor","configuration-schema","medicmobile"]},i=void 0,c={unversionedId:"packages/medicmobile-configuration-schema",id:"packages/medicmobile-configuration-schema",title:"medicmobile Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/medicmobile-configuration-schema.md",sourceDirName:"packages",slug:"/packages/medicmobile-configuration-schema",permalink:"/fr/adaptors/packages/medicmobile-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"medicmobile Config",id:"medicmobile-configuration-schema",keywords:["adaptor","configuration-schema","medicmobile"]},sidebar:"adaptors",previous:{title:"medicmobile developer readme",permalink:"/fr/adaptors/packages/medicmobile-readme"},next:{title:"mogli@0.3.1",permalink:"/fr/adaptors/packages/mogli-docs"}},s={},p=[],l={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For use in ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": "//Medic\'s CouchDB api URL",\n  "db": "//Database name",\n  "username": "//Medic instance username",\n  "password": "//Medic instance password"\n}\n')))}u.isMDXComponent=!0}}]);