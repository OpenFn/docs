"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8773],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,h=d["".concat(c,".").concat(u)]||d[u]||s[u]||r;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29474:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));const r={title:"medicmobile changelog",id:"medicmobile-changelog",keywords:["adaptor","changelog","medicmobile"]},i="Changelog for the medicmobile adaptor",o={unversionedId:"packages/medicmobile-changelog",id:"packages/medicmobile-changelog",title:"medicmobile changelog",description:"0.4.1",source:"@site/adaptors/packages/medicmobile-changelog.md",sourceDirName:"packages",slug:"/packages/medicmobile-changelog",permalink:"/adaptors/packages/medicmobile-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"medicmobile changelog",id:"medicmobile-changelog",keywords:["adaptor","changelog","medicmobile"]},sidebar:"adaptors",previous:{title:"Config for medicmobile",permalink:"/adaptors/packages/medicmobile-configuration-schema"},next:{title:"medicmobile developer readme",permalink:"/adaptors/packages/medicmobile-readme"}},c={},p=[{value:"0.4.1",id:"041",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.4.0",id:"040",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.3.3",id:"033",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.3.2",id:"032",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.3.1",id:"031",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-5",level:3}],m={toc:p},d="wrapper";function s(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-medicmobile-adaptor"},"Changelog for the medicmobile adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-medicmobile"},"@openfn/language-medicmobile"),(0,l.kt)("h2",{id:"041"},"0.4.1"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"040"},"0.4.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"033"},"0.3.3"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"032"},"0.3.2"),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.kt)("h2",{id:"031"},"0.3.1"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"030"},"0.3.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2cd3236: migrate medicmobile")),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))))}s.isMDXComponent=!0}}]);