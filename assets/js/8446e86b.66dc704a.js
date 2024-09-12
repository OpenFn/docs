"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[92058],{3541:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),t=(a(96540),a(15680));const l={title:"redis changelog",id:"redis-changelog",keywords:["adaptor","changelog","redis"]},i="Changelog for the redis adaptor",o={unversionedId:"packages/redis-changelog",id:"packages/redis-changelog",title:"redis changelog",description:"1.2.0",source:"@site/adaptors/packages/redis-changelog.md",sourceDirName:"packages",slug:"/packages/redis-changelog",permalink:"/adaptors/packages/redis-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"redis changelog",id:"redis-changelog",keywords:["adaptor","changelog","redis"]},sidebar:"adaptors",previous:{title:"Config for redis",permalink:"/adaptors/packages/redis-configuration-schema"},next:{title:"redis developer readme",permalink:"/adaptors/packages/redis-readme"}},g={},p=[{value:"1.2.0",id:"120",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"1.1.2",id:"112",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"1.0.0",id:"100",level:2}],c={toc:p},s="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(s,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"changelog-for-the-redis-adaptor"},"Changelog for the redis adaptor"),(0,t.yg)("h1",{id:"openfnlanguage-redis"},"@openfn/language-redis"),(0,t.yg)("h2",{id:"120"},"1.2.0"),(0,t.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"c1e3221: - Add ",(0,t.yg)("inlineCode",{parentName:"li"},"mGet()")," function",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Remove console.log in ",(0,t.yg)("inlineCode",{parentName:"li"},"hget()")),(0,t.yg)("li",{parentName:"ul"},"Add logging to ",(0,t.yg)("inlineCode",{parentName:"li"},"scan()"))))),(0,t.yg)("h2",{id:"112"},"1.1.2"),(0,t.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"8146c23: Fix typings in package.json"),(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[8146c23]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@2.0.1"},"language-common@2.0.1"))))),(0,t.yg)("h2",{id:"111"},"1.1.1"),(0,t.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"2b8ec34: - Update host type configuration-schema")),(0,t.yg)("h2",{id:"110"},"1.1.0"),(0,t.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"jGet()")," function"),(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"jSet()")," function"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"scan()")," now iterates the whole database",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Removed ",(0,t.yg)("inlineCode",{parentName:"li"},"cursor")," option from ",(0,t.yg)("inlineCode",{parentName:"li"},"scan")),(0,t.yg)("li",{parentName:"ul"},"Removed default value for ",(0,t.yg)("inlineCode",{parentName:"li"},"type")," option"),(0,t.yg)("li",{parentName:"ul"},"Mapped ",(0,t.yg)("inlineCode",{parentName:"li"},"json")," data type to the redis internal type")))),(0,t.yg)("h2",{id:"100"},"1.0.0"),(0,t.yg)("p",null,"First release. Designed as a low-level wrapper around npm redis client."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"get(key)"),(0,t.yg)("li",{parentName:"ul"},"hget(key, field)"),(0,t.yg)("li",{parentName:"ul"},"hGetAll(key)"),(0,t.yg)("li",{parentName:"ul"},"hset(key, value)"),(0,t.yg)("li",{parentName:"ul"},"scan(pattern,options)"),(0,t.yg)("li",{parentName:"ul"},"set(key, field)")))}d.isMDXComponent=!0},15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var g=r.createContext({}),p=function(e){var n=r.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=t,y=s["".concat(g,".").concat(u)]||s[u]||d[u]||l;return a?r.createElement(y,i(i({ref:n},c),{},{components:a})):r.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[s]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);