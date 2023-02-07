"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[50339],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>m});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},l=function(e){var o=s(e.components);return r.createElement(p.Provider,{value:o},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},f=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,m=u["".concat(p,".").concat(f)]||u[f]||b[f]||a;return t?r.createElement(m,i(i({ref:o},l),{},{components:t})):r.createElement(m,i({ref:o},l))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in o)hasOwnProperty.call(o,p)&&(c[p]=o[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81582:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const a={title:"kobotoolbox Config",id:"kobotoolbox-configuration-schema",keywords:["adaptor","configuration-schema","kobotoolbox"]},i=void 0,c={unversionedId:"packages/kobotoolbox-configuration-schema",id:"packages/kobotoolbox-configuration-schema",title:"kobotoolbox Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/kobotoolbox-configuration-schema.md",sourceDirName:"packages",slug:"/packages/kobotoolbox-configuration-schema",permalink:"/adaptors/packages/kobotoolbox-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"kobotoolbox Config",id:"kobotoolbox-configuration-schema",keywords:["adaptor","configuration-schema","kobotoolbox"]},sidebar:"adaptors",previous:{title:"kobotoolbox developer readme",permalink:"/adaptors/packages/kobotoolbox-readme"},next:{title:"Magpi",permalink:"/adaptors/magpi"}},p={},s=[],l={toc:s},u="wrapper";function b(e){let{components:o,...t}=e;return(0,n.kt)(u,(0,r.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For use in ",(0,n.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseURL": "//Kobotoolbox URL",\n  "username": "//Kobotoolbox username",\n  "password": "//Kobotoolbox password",\n  "apiVersion": "//Kobotoolbox API version to use"\n}\n')))}b.isMDXComponent=!0}}]);