"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17191],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>h});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=t.createContext({}),p=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,h=s["".concat(c,".").concat(d)]||s[d]||g[d]||r;return n?t.createElement(h,i(i({ref:a},u),{},{components:n})):t.createElement(h,i({ref:a},u))}));function h(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14255:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(87462),l=(n(67294),n(3905));const r={title:"mailgun changelog",id:"mailgun-changelog",keywords:["adaptor","changelog","mailgun"]},i="Changelog for the mailgun adaptor",o={unversionedId:"packages/mailgun-changelog",id:"packages/mailgun-changelog",title:"mailgun changelog",description:"0.4.1",source:"@site/adaptors/packages/mailgun-changelog.md",sourceDirName:"packages",slug:"/packages/mailgun-changelog",permalink:"/adaptors/packages/mailgun-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mailgun changelog",id:"mailgun-changelog",keywords:["adaptor","changelog","mailgun"]},sidebar:"adaptors",previous:{title:"01 send mailgun email",permalink:"/adaptors/library/jobs/auto/01-send-mailgun-email-2018-12-04"},next:{title:"mailgun developer readme",permalink:"/adaptors/packages/mailgun-readme"}},c={},p=[{value:"0.4.1",id:"041",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.4.0",id:"040",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.3.4",id:"034",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.3.3",id:"033",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.3.2",id:"032",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.3.1",id:"031",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],u={toc:p},s="wrapper";function g(e){let{components:a,...n}=e;return(0,l.kt)(s,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-mailgun-adaptor"},"Changelog for the mailgun adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-mailgun"},"@openfn/language-mailgun"),(0,l.kt)("h2",{id:"041"},"0.4.1"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"040"},"0.4.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"034"},"0.3.4"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"033"},"0.3.3"),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.kt)("h2",{id:"032"},"0.3.2"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"031"},"0.3.1"),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.kt)("h2",{id:"030"},"0.3.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"9ded25e: Migrate Mailgun")))}g.isMDXComponent=!0}}]);