"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,c(c({ref:t},s),{},{components:n})):a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},c="Changelog for the common adaptor",i={unversionedId:"packages/common-changelog",id:"packages/common-changelog",title:"common changelog",description:"v0.4.0",source:"@site/adaptors/packages/common-changelog.md",sourceDirName:"packages",slug:"/packages/common-changelog",permalink:"/adaptors/packages/common-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},sidebar:"adaptors",previous:{title:"common@1.7.5",permalink:"/adaptors/packages/common-docs"},next:{title:"common developer readme",permalink:"/adaptors/packages/common-readme"}},l={},p=[{value:"1.7.5",id:"175",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.7.4",id:"174",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-common-adaptor"},"Changelog for the common adaptor"),(0,r.kt)("p",null,"v0.4.0"),(0,r.kt)("h2",{id:"175"},"1.7.5"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports")),(0,r.kt)("h2",{id:"174"},"1.7.4"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"b5eb665: Adjusted docs for common and built to markdown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h1",{parentName:"li",id:"ecf5d30-remove-sinon-since-it-was-not-being-used"},"ecf5d30: remove sinon since it was not being used"))),(0,r.kt)("p",null,"Bumped all package versions to their latest."),(0,r.kt)("h1",{id:"v004"},"v0.0.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"arrayToString")," helper.",(0,r.kt)("br",{parentName:"li"}),"Allowing you to join an array of string'able primitives (strings and integers)\ninto a string."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," helper.",(0,r.kt)("br",{parentName:"li"}),"This can be used to coerce certain types of data into an array, this can be\nuseful when the source data has an ambiguous format. For example a given key\nin the data may have an object as it's value (when there is only one item),\nand an array of objects when there is more than one. ",(0,r.kt)("inlineCode",{parentName:"li"},"toArray")," can be used to\nreconcile this inconsistency.")))}m.isMDXComponent=!0}}]);