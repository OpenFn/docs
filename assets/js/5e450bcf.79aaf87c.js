"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31805],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>m});var l=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function g(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?g(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},g=Object.keys(e);for(l=0;l<g.length;l++)n=g[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(l=0;l<g.length;l++)n=g[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=l.createContext({}),p=function(e){var a=l.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=p(e.components);return l.createElement(c.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,g=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||g;return n?l.createElement(m,i(i({ref:a},o),{},{components:n})):l.createElement(m,i({ref:a},o))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var g=n.length,i=new Array(g);i[0]=d;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r[u]="string"==typeof e?e:t,i[1]=r;for(var p=2;p<g;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84952:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>g,metadata:()=>r,toc:()=>p});var l=n(58168),t=(n(96540),n(15680));const g={title:"bigquery changelog",id:"bigquery-changelog",keywords:["adaptor","changelog","bigquery"]},i="Changelog for the bigquery adaptor",r={unversionedId:"packages/bigquery-changelog",id:"packages/bigquery-changelog",title:"bigquery changelog",description:"2.0.7",source:"@site/adaptors/packages/bigquery-changelog.md",sourceDirName:"packages",slug:"/packages/bigquery-changelog",permalink:"/adaptors/packages/bigquery-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery changelog",id:"bigquery-changelog",keywords:["adaptor","changelog","bigquery"]},sidebar:"adaptors",previous:{title:"Config for bigquery",permalink:"/adaptors/packages/bigquery-configuration-schema"},next:{title:"bigquery developer readme",permalink:"/adaptors/packages/bigquery-readme"}},c={},p=[{value:"2.0.7",id:"207",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"2.0.6",id:"206",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"2.0.5",id:"205",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"2.0.4",id:"204",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"2.0.3",id:"203",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"2.0.2",id:"202",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"2.0.1",id:"201",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"2.0.0",id:"200",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"1.2.3",id:"123",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"1.2.2",id:"122",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"1.2.1",id:"121",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"1.2.0",id:"120",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"1.1.5",id:"115",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"1.1.4",id:"114",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"1.1.3",id:"113",level:2},{value:"Patch Changes",id:"patch-changes-14",level:3},{value:"1.1.2",id:"112",level:2},{value:"Patch Changes",id:"patch-changes-15",level:3},{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes-16",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-17",level:3}],o={toc:p},u="wrapper";function h(e){let{components:a,...n}=e;return(0,t.yg)(u,(0,l.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"changelog-for-the-bigquery-adaptor"},"Changelog for the bigquery adaptor"),(0,t.yg)("h1",{id:"openfnlanguage-bigquery"},"@openfn/language-bigquery"),(0,t.yg)("h2",{id:"207"},"2.0.7"),(0,t.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.13.2"},"language-common@1.13.2"))))),(0,t.yg)("h2",{id:"206"},"2.0.6"),(0,t.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.13.1"},"language-common@1.13.1"))))),(0,t.yg)("h2",{id:"205"},"2.0.5"),(0,t.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[1ad86651]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.13.0"},"language-common@1.13.0"))))),(0,t.yg)("h2",{id:"204"},"2.0.4"),(0,t.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[c19efbe]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.11.1"},"language-common@1.11.1"))))),(0,t.yg)("h2",{id:"203"},"2.0.3"),(0,t.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[85c35b8]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.11.0"},"language-common@1.11.0"))))),(0,t.yg)("h2",{id:"202"},"2.0.2"),(0,t.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[df09270]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.3"},"language-common@1.10.3"))))),(0,t.yg)("h2",{id:"201"},"2.0.1"),(0,t.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[26a303e]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.2"},"language-common@1.10.2"))))),(0,t.yg)("h2",{id:"200"},"2.0.0"),(0,t.yg)("h3",{id:"major-changes"},"Major Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"0b6f20b: use parseCsv from common")),(0,t.yg)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[8c32eb3]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.1"},"language-common@1.10.1"))))),(0,t.yg)("h2",{id:"123"},"1.2.3"),(0,t.yg)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[aad9549]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.0"},"language-common@1.10.0"))))),(0,t.yg)("h2",{id:"122"},"1.2.2"),(0,t.yg)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[111807f]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.9.0"},"language-common@1.9.0"))))),(0,t.yg)("h2",{id:"121"},"1.2.1"),(0,t.yg)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Update lock files"),(0,t.yg)("li",{parentName:"ul"},"Updated dependencies",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,t.yg)("h2",{id:"120"},"1.2.0"),(0,t.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,t.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,t.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,t.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,t.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,t.yg)("p",{parentName:"li"},"See ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,t.yg)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,t.yg)("h2",{id:"115"},"1.1.5"),(0,t.yg)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"5895eb9: update dependencies")),(0,t.yg)("h2",{id:"114"},"1.1.4"),(0,t.yg)("h3",{id:"patch-changes-13"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,t.yg)("h2",{id:"113"},"1.1.3"),(0,t.yg)("h3",{id:"patch-changes-14"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,t.yg)("h2",{id:"112"},"1.1.2"),(0,t.yg)("h3",{id:"patch-changes-15"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,t.yg)("h2",{id:"111"},"1.1.1"),(0,t.yg)("h3",{id:"patch-changes-16"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,t.yg)("em",{parentName:"li"}," @module Adaptor "),"/"),(0,t.yg)("li",{parentName:"ul"},"57f3513: Fix exports in index.js")),(0,t.yg)("h2",{id:"110"},"1.1.0"),(0,t.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"e4c6114: bigquery migration and build")),(0,t.yg)("h3",{id:"patch-changes-17"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))))}h.isMDXComponent=!0}}]);