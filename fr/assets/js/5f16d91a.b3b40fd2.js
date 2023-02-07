"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[68618],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},f=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return r?t.createElement(d,p(p({ref:n},f),{},{components:r})):t.createElement(d,p({ref:n},f))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98055:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const a={title:"openfn Config",id:"openfn-configuration-schema",keywords:["adaptor","configuration-schema","openfn"]},p=void 0,c={unversionedId:"packages/openfn-configuration-schema",id:"packages/openfn-configuration-schema",title:"openfn Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/openfn-configuration-schema.md",sourceDirName:"packages",slug:"/packages/openfn-configuration-schema",permalink:"/fr/adaptors/packages/openfn-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"openfn Config",id:"openfn-configuration-schema",keywords:["adaptor","configuration-schema","openfn"]},sidebar:"adaptors",previous:{title:"openfn developer readme",permalink:"/fr/adaptors/packages/openfn-readme"},next:{title:"openmrs@0.10.1",permalink:"/fr/adaptors/packages/openmrs-docs"}},i={},s=[],f={toc:s},u="wrapper";function l(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For use in ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "//The OpenFn host url",\n  "projectId": "//Your OpenFn project ID",\n  "username": "//The username to log in to OpenFn",\n  "password": "//The password to log in to OpenFn"\n}\n')))}l.isMDXComponent=!0}}]);