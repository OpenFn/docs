"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64880],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(t),u=r,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||l;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90183:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},o="Changelog for the common adaptor",i={unversionedId:"packages/common-changelog",id:"packages/common-changelog",title:"common changelog",description:"v0.4.0",source:"@site/adaptors/packages/common-changelog.md",sourceDirName:"packages",slug:"/packages/common-changelog",permalink:"/fr/adaptors/packages/common-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},sidebar:"adaptors",previous:{title:"Config for common",permalink:"/fr/adaptors/packages/common-configuration-schema"},next:{title:"common developer readme",permalink:"/fr/adaptors/packages/common-readme"}},c={},s=[{value:"1.10.3",id:"1103",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.10.2",id:"1102",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.10.1",id:"1101",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.10.0",id:"1100",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"1.9.0",id:"190",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"1.8.1",id:"181",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.8.0",id:"180",level:2},{value:"Minor Changes",id:"minor-changes-2",level:3},{value:"1.7.7",id:"177",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.7.6",id:"176",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.7.5",id:"175",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.7.4",id:"174",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3}],p={toc:s},h="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(h,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-common-adaptor"},"Changelog for the common adaptor"),(0,r.kt)("p",null,"v0.4.0"),(0,r.kt)("h2",{id:"1103"},"1.10.3"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"df09270: Fix streaming interface to parseCSV")),(0,r.kt)("h2",{id:"1102"},"1.10.2"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"26a303e: add expandReferences for csvData and parsingOptions")),(0,r.kt)("h2",{id:"1101"},"1.10.1"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8c32eb3: - update parseCsv to await callback",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added documentation for splitKeys")))),(0,r.kt)("h2",{id:"1100"},"1.10.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'aad9549: Ensure that standard OAuth2 credentials with snake-cased\n"access_token" keys can be used for OAuth2-reliant adaptors')),(0,r.kt)("h2",{id:"190"},"1.9.0"),(0,r.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"111807f: Add support for ",(0,r.kt)("inlineCode",{parentName:"li"},"parseCsv")," in common")),(0,r.kt)("h2",{id:"181"},"1.8.1"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update lock files")),(0,r.kt)("h2",{id:"180"},"1.8.0"),(0,r.kt)("h3",{id:"minor-changes-2"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.kt)("h2",{id:"177"},"1.7.7"),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"929bca6: Export metadata helper function")),(0,r.kt)("h2",{id:"176"},"1.7.6"),(0,r.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2b4c61a: mark execute private and ast build")),(0,r.kt)("h2",{id:"175"},"1.7.5"),(0,r.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports")),(0,r.kt)("h2",{id:"174"},"1.7.4"),(0,r.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"b5eb665: Adjusted docs for common and built to markdown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h1",{parentName:"li",id:"ecf5d30-remove-sinon-since-it-was-not-being-used"},"ecf5d30: remove sinon since it was not being used"))),(0,r.kt)("p",null,"Bumped all package versions to their latest."),(0,r.kt)("h1",{id:"v004"},"v0.0.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"arrayToString")," helper.",(0,r.kt)("br",{parentName:"li"}),"Allowing you to join an array of string'able primitives (strings and integers)\ninto a string."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," helper.",(0,r.kt)("br",{parentName:"li"}),"This can be used to coerce certain types of data into an array, this can be\nuseful when the source data has an ambiguous format. For example a given key\nin the data may have an object as it's value (when there is only one item),\nand an array of objects when there is more than one. ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," can be used to\nreconcile this inconsistency.")))}d.isMDXComponent=!0}}]);