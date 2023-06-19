"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49517],{3905:(e,a,t)=>{t.d(a,{Zo:()=>g,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,d=s["".concat(p,".").concat(u)]||s[u]||h[u]||l;return t?n.createElement(d,i(i({ref:a},g),{},{components:t})):n.createElement(d,i({ref:a},g))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53359:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={title:"magpi changelog",id:"magpi-changelog",keywords:["adaptor","changelog","magpi"]},i="Changelog for the magpi adaptor",o={unversionedId:"packages/magpi-changelog",id:"packages/magpi-changelog",title:"magpi changelog",description:"1.1.1",source:"@site/adaptors/packages/magpi-changelog.md",sourceDirName:"packages",slug:"/packages/magpi-changelog",permalink:"/fr/adaptors/packages/magpi-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"magpi changelog",id:"magpi-changelog",keywords:["adaptor","changelog","magpi"]},sidebar:"adaptors",previous:{title:"Config for magpi",permalink:"/fr/adaptors/packages/magpi-configuration-schema"},next:{title:"magpi developer readme",permalink:"/fr/adaptors/packages/magpi-readme"}},p={},c=[{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.0.5",id:"105",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.0.4",id:"104",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.0.3",id:"103",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.0.2",id:"102",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.0.1",id:"101",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.0.0",id:"100",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"Minor Changes",id:"minor-changes-1",level:3}],g={toc:c},s="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(s,(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-magpi-adaptor"},"Changelog for the magpi adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-magpi"},"@openfn/language-magpi"),(0,r.kt)("h2",{id:"111"},"1.1.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update lock files"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,r.kt)("h2",{id:"110"},"1.1.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,r.kt)("h2",{id:"105"},"1.0.5"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"86fb813: dependencies update")),(0,r.kt)("h2",{id:"104"},"1.0.4"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.kt)("h2",{id:"103"},"1.0.3"),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.kt)("h2",{id:"102"},"1.0.2"),(0,r.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.kt)("h2",{id:"101"},"1.0.1"),(0,r.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"100"},"1.0.0"),(0,r.kt)("h3",{id:"major-changes"},"Major Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e6c2b4a: Update xml2js parser")),(0,r.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"df5dd2e: migrate magpi")))}h.isMDXComponent=!0}}]);