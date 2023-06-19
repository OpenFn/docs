"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24219],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>g});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=l,g=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return a?t.createElement(g,o(o({ref:n},s),{},{components:a})):t.createElement(g,o({ref:n},s))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[h]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62903:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(87462),l=(a(67294),a(3905));const r={title:"openfn changelog",id:"openfn-changelog",keywords:["adaptor","changelog","openfn"]},o="Changelog for the openfn adaptor",i={unversionedId:"packages/openfn-changelog",id:"packages/openfn-changelog",title:"openfn changelog",description:"1.3.1",source:"@site/adaptors/packages/openfn-changelog.md",sourceDirName:"packages",slug:"/packages/openfn-changelog",permalink:"/adaptors/packages/openfn-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"openfn changelog",id:"openfn-changelog",keywords:["adaptor","changelog","openfn"]},sidebar:"adaptors",previous:{title:"Config for openfn",permalink:"/adaptors/packages/openfn-configuration-schema"},next:{title:"openfn developer readme",permalink:"/adaptors/packages/openfn-readme"}},p={},c=[{value:"1.3.1",id:"131",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.3.0",id:"130",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.2.6",id:"126",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.2.5",id:"125",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.2.4",id:"124",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.2.3",id:"123",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.2.2",id:"122",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.2.1",id:"121",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"1.2.0",id:"120",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],s={toc:c},h="wrapper";function u(e){let{components:n,...a}=e;return(0,l.kt)(h,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-openfn-adaptor"},"Changelog for the openfn adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-openfn"},"@openfn/language-openfn"),(0,l.kt)("h2",{id:"131"},"1.3.1"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"130"},"1.3.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"126"},"1.2.6"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"779596f: Use native fetch (undici) in template and add icons in openfn")),(0,l.kt)("h2",{id:"125"},"1.2.5"),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,l.kt)("h2",{id:"124"},"1.2.4"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"123"},"1.2.3"),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.kt)("h2",{id:"122"},"1.2.2"),(0,l.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"121"},"1.2.1"),(0,l.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.kt)("h2",{id:"120"},"1.2.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"be9d3c6: Migrate OpenFn")))}u.isMDXComponent=!0}}]);