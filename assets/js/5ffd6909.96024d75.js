"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"mssql changelog",id:"mssql-changelog",keywords:["adaptor","changelog","mssql"]},o="Changelog for the mssql adaptor",c={unversionedId:"packages/mssql-changelog",id:"packages/mssql-changelog",title:"mssql changelog",description:"4.0.1",source:"@site/adaptors/packages/mssql-changelog.md",sourceDirName:"packages",slug:"/packages/mssql-changelog",permalink:"/adaptors/packages/mssql-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mssql changelog",id:"mssql-changelog",keywords:["adaptor","changelog","mssql"]},sidebar:"adaptors",previous:{title:"CommCare to Azure Sql",permalink:"/adaptors/library/jobs/auto/CommCare-to-Azure-Sql-2020-01-27"},next:{title:"mssql developer readme",permalink:"/adaptors/packages/mssql-readme"}},s={},i=[{value:"4.0.1",id:"401",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"4.0.0",id:"400",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"3.1.1",id:"311",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"3.1.0",id:"310",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-3",level:3}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-mssql-adaptor"},"Changelog for the mssql adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-mssql"},"@openfn/language-mssql"),(0,r.kt)("h2",{id:"401"},"4.0.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"400"},"4.0.0"),(0,r.kt)("h3",{id:"major-changes"},"Major Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3878624: Modify composeNextState function, to flattern all rows into an array\nof rows with their corresponding column names")),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,r.kt)("h2",{id:"311"},"3.1.1"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))),(0,r.kt)("h2",{id:"310"},"3.1.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"c9b7ed7: Add language-mssql in monorepo")),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e04aa28: Rename credential-schema to configuration-schema, update descriptions")))}u.isMDXComponent=!0}}]);