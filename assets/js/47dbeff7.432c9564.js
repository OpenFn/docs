"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[74030],{32894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(58168),o=(n(96540),n(15680));const a={title:"Common Adaptor"},c=void 0,p={unversionedId:"common",id:"common",title:"Common Adaptor",description:'About OpenFn "Common" Language',source:"@site/adaptors/common.md",sourceDirName:".",slug:"/common",permalink:"/adaptors/common",draft:!1,tags:[],version:"current",frontMatter:{title:"Common Adaptor"},sidebar:"adaptors",previous:{title:"commcare developer readme",permalink:"/adaptors/packages/commcare-readme"},next:{title:"common@2.1.0",permalink:"/adaptors/packages/common-docs"}},s={},m=[{value:"About OpenFn &quot;Common&quot; Language",id:"about-openfn-common-language",level:2}],l={toc:m},i="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(i,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"about-openfn-common-language"},'About OpenFn "Common" Language'),(0,o.yg)("p",null,"Use this adaptor to write JavaScript, or to leverage common expressions and\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/common-docs"},"helper functions")," for OpenFn."),(0,o.yg)("p",null,'This adaptor is typically used for transforming data in OpenFn workflows that\nautomate "ETL" (extract, transform, load) processes. See below examples.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"//use fn() to write your own functions\nfn(state => {\n  // write javascript...\n  // ...to do some things to state\n  console.log(state.data); //or to debug\n  return state;\n});\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"//use each() to create 1 account for each form\neach(\n  $.forms,\n  create('Account', {\n    Kobo_ID__c: $.data.id,\n    Name: $.data.customer_name,\n    Phone: $.data.customer_phone,\n  })\n);\n")))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=m(n),f=o,d=i["".concat(s,".").concat(f)]||i[f]||u[f]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[i]="string"==typeof e?e:o,c[1]=p;for(var m=2;m<a;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);