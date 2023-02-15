"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90451],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),g=a,y=s["".concat(u,".").concat(g)]||s[g]||f[g]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4051:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"bigquery Config",id:"bigquery-configuration-schema",keywords:["adaptor","configuration-schema","bigquery"]},i=void 0,c={unversionedId:"packages/bigquery-configuration-schema",id:"packages/bigquery-configuration-schema",title:"bigquery Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/bigquery-configuration-schema.md",sourceDirName:"packages",slug:"/packages/bigquery-configuration-schema",permalink:"/adaptors/packages/bigquery-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery Config",id:"bigquery-configuration-schema",keywords:["adaptor","configuration-schema","bigquery"]},sidebar:"adaptors",previous:{title:"bigquery developer readme",permalink:"/adaptors/packages/bigquery-readme"},next:{title:"Community Health Toolkit",permalink:"/adaptors/cht"}},u={},p=[],l={toc:p},s="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For use in ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "",\n  "project_id": "Project id",\n  "private_key_id": "Private key id",\n  "private_key": "Private key",\n  "client_email": "Client email",\n  "client_id": "Client id",\n  "auth_uri": "Auth Uri",\n  "token_uri": "Token Uri",\n  "auth_provider_x509_cert_url": "",\n  "client_x509_cert_url": ""\n}\n')))}f.isMDXComponent=!0}}]);