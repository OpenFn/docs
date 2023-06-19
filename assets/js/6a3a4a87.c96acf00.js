"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},i="Changelog for the common adaptor",l={unversionedId:"packages/common-changelog",id:"packages/common-changelog",title:"common changelog",description:"v0.4.0",source:"@site/adaptors/packages/common-changelog.md",sourceDirName:"packages",slug:"/packages/common-changelog",permalink:"/adaptors/packages/common-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},sidebar:"adaptors",previous:{title:"Config for common",permalink:"/adaptors/packages/common-configuration-schema"},next:{title:"common developer readme",permalink:"/adaptors/packages/common-readme"}},c={},s=[{value:"1.8.1",id:"181",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.8.0",id:"180",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"1.7.7",id:"177",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.7.6",id:"176",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.7.5",id:"175",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.7.4",id:"174",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-common-adaptor"},"Changelog for the common adaptor"),(0,r.kt)("p",null,"v0.4.0"),(0,r.kt)("h2",{id:"181"},"1.8.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update lock files")),(0,r.kt)("h2",{id:"180"},"1.8.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.kt)("h2",{id:"177"},"1.7.7"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"929bca6: Export metadata helper function")),(0,r.kt)("h2",{id:"176"},"1.7.6"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2b4c61a: mark execute private and ast build")),(0,r.kt)("h2",{id:"175"},"1.7.5"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports")),(0,r.kt)("h2",{id:"174"},"1.7.4"),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"b5eb665: Adjusted docs for common and built to markdown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h1",{parentName:"li",id:"ecf5d30-remove-sinon-since-it-was-not-being-used"},"ecf5d30: remove sinon since it was not being used"))),(0,r.kt)("p",null,"Bumped all package versions to their latest."),(0,r.kt)("h1",{id:"v004"},"v0.0.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"arrayToString")," helper.",(0,r.kt)("br",{parentName:"li"}),"Allowing you to join an array of string'able primitives (strings and integers)\ninto a string."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," helper.",(0,r.kt)("br",{parentName:"li"}),"This can be used to coerce certain types of data into an array, this can be\nuseful when the source data has an ambiguous format. For example a given key\nin the data may have an object as it's value (when there is only one item),\nand an array of objects when there is more than one. ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," can be used to\nreconcile this inconsistency.")))}d.isMDXComponent=!0}}]);