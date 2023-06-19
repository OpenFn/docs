"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[21356],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),h=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=h(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=h(t),u=l,g=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return t?n.createElement(g,r(r({ref:a},p),{},{components:t})):n.createElement(g,r({ref:a},p))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[d]="string"==typeof e?e:l,r[1]=c;for(var h=2;h<i;h++)r[h]=t[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22641:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(87462),l=(t(67294),t(3905));const i={title:"dhis2 changelog",id:"dhis2-changelog",keywords:["adaptor","changelog","dhis2"]},r="Changelog for the dhis2 adaptor",c={unversionedId:"packages/dhis2-changelog",id:"packages/dhis2-changelog",title:"dhis2 changelog",description:"4.0.1",source:"@site/adaptors/packages/dhis2-changelog.md",sourceDirName:"packages",slug:"/packages/dhis2-changelog",permalink:"/fr/adaptors/packages/dhis2-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"dhis2 changelog",id:"dhis2-changelog",keywords:["adaptor","changelog","dhis2"]},sidebar:"adaptors",previous:{title:"Add DHIS2 Data Value Sets",permalink:"/fr/adaptors/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28"},next:{title:"dhis2 developer readme",permalink:"/fr/adaptors/packages/dhis2-readme"}},o={},h=[{value:"4.0.1",id:"401",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"4.0.0",id:"400",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"3.2.12",id:"3212",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"3.2.11",id:"3211",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"3.2.10",id:"3210",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"3.2.9",id:"329",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"3.2.8",id:"328",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"3.2.7",id:"327",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"3.2.6",id:"326",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"3.2.5",id:"325",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"3.2.4",id:"324",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"3.2.3",id:"323",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"3.2.2",id:"322",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"3.2.1",id:"321",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"3.2.0",id:"320",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"3.1.0",id:"310",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-14",level:3}],p={toc:h},d="wrapper";function s(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-dhis2-adaptor"},"Changelog for the dhis2 adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-dhis2"},"@openfn/language-dhis2"),(0,l.kt)("h2",{id:"401"},"4.0.1"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"400"},"4.0.0"),(0,l.kt)("h3",{id:"major-changes"},"Major Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"3212"},"3.2.12"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"57742d1: improve logs output")),(0,l.kt)("h2",{id:"3211"},"3.2.11"),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"705caab: Remove tools as devdependencies")),(0,l.kt)("h2",{id:"3210"},"3.2.10"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"929bca6: Use metadata helper function from common"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,l.kt)("h2",{id:"329"},"3.2.9"),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"328"},"3.2.8"),(0,l.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix metadata function export")),(0,l.kt)("h2",{id:"327"},"3.2.7"),(0,l.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"c09b821: Add @magic annotations")),(0,l.kt)("h2",{id:"326"},"3.2.6"),(0,l.kt)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"df6098d: replace sample state with configuration")),(0,l.kt)("h2",{id:"325"},"3.2.5"),(0,l.kt)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"324"},"3.2.4"),(0,l.kt)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.kt)("h2",{id:"323"},"3.2.3"),(0,l.kt)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,l.kt)("h2",{id:"322"},"3.2.2"),(0,l.kt)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"9a2755e: Update dependency on language-common"),(0,l.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,l.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,l.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4")),(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:buildtools@1.0.2"},"buildtools@1.0.2"))))),(0,l.kt)("h2",{id:"321"},"3.2.1"),(0,l.kt)("h3",{id:"patch-changes-13"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e04aa28: Rename credential-schema to configuration-schema, update descriptions")),(0,l.kt)("h2",{id:"320"},"3.2.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f670bf8: Added credential schema to enable new ui")),(0,l.kt)("h2",{id:"310"},"3.1.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"8d6e8ce: Migrate dhis2 into repo")),(0,l.kt)("h3",{id:"patch-changes-14"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[4671e89]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[8d6e8ce]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:buildtools@1.0.1"},"buildtools@1.0.1"))))))}s.isMDXComponent=!0}}]);