"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return a?n.createElement(h,o(o({ref:t},i),{},{components:a})):n.createElement(h,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"postgresql changelog",id:"postgresql-changelog",keywords:["adaptor","changelog","postgresql"]},o="Changelog for the postgresql adaptor",p={unversionedId:"packages/postgresql-changelog",id:"packages/postgresql-changelog",title:"postgresql changelog",description:"3.4.2",source:"@site/adaptors/packages/postgresql-changelog.md",sourceDirName:"packages",slug:"/packages/postgresql-changelog",permalink:"/fr/adaptors/packages/postgresql-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"postgresql changelog",id:"postgresql-changelog",keywords:["adaptor","changelog","postgresql"]},sidebar:"library",previous:{title:"postgresql@3.4.2",permalink:"/fr/adaptors/packages/postgresql-docs"},next:{title:"postgresql developer readme",permalink:"/fr/adaptors/packages/postgresql-readme"}},s={},c=[{value:"3.4.2",id:"342",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"3.4.1",id:"341",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"3.4.0",id:"340",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-2",level:3}],i={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-postgresql-adaptor"},"Changelog for the postgresql adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-postgresql"},"@openfn/language-postgresql"),(0,r.kt)("h2",{id:"342"},"3.4.2"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,r.kt)("h2",{id:"341"},"3.4.1"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))),(0,r.kt)("h2",{id:"340"},"3.4.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"44ae341: Migrate postgresql")),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e04aa28: Rename credential-schema to configuration-schema, update descriptions")))}g.isMDXComponent=!0}}]);