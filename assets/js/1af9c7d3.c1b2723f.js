"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[25035],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>s});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,s=m["".concat(o,".").concat(u)]||m[u]||g[u]||l;return t?n.createElement(s,i(i({ref:a},h),{},{components:t})):n.createElement(s,i({ref:a},h))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33403:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const l={title:"mailchimp changelog",id:"mailchimp-changelog",keywords:["adaptor","changelog","mailchimp"]},i="Changelog for the mailchimp adaptor",c={unversionedId:"packages/mailchimp-changelog",id:"packages/mailchimp-changelog",title:"mailchimp changelog",description:"0.3.4",source:"@site/adaptors/packages/mailchimp-changelog.md",sourceDirName:"packages",slug:"/packages/mailchimp-changelog",permalink:"/adaptors/packages/mailchimp-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mailchimp changelog",id:"mailchimp-changelog",keywords:["adaptor","changelog","mailchimp"]},sidebar:"adaptors",previous:{title:"Config for mailchimp",permalink:"/adaptors/packages/mailchimp-configuration-schema"},next:{title:"mailchimp developer readme",permalink:"/adaptors/packages/mailchimp-readme"}},o={},p=[{value:"0.3.4",id:"034",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.3.3",id:"033",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.3.2",id:"032",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.3.1",id:"031",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-4",level:3}],h={toc:p},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-mailchimp-adaptor"},"Changelog for the mailchimp adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-mailchimp"},"@openfn/language-mailchimp"),(0,r.kt)("h2",{id:"034"},"0.3.4"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.kt)("h2",{id:"033"},"0.3.3"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.kt)("h2",{id:"032"},"0.3.2"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"031"},"0.3.1"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cbb8968: Fix axios Inefficient Regular Expression Complexity vulnerability"),(0,r.kt)("li",{parentName:"ul"},"e81561f: Updated ast and package.json")),(0,r.kt)("h2",{id:"030"},"0.3.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"88fa3b5: migrate mailchimp")),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))))}g.isMDXComponent=!0}}]);