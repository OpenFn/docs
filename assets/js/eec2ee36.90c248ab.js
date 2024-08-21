"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[41015],{86004:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const o={title:"Upsert to mBrana",sidebar_label:"Upsert to mBrana",id:"Upsert-to-mBrana-2021-05-11",keywords:["library","job","expression","postgresql","upsert"]},s=void 0,i={unversionedId:"library/jobs/auto/Upsert-to-mBrana-2021-05-11",id:"library/jobs/auto/Upsert-to-mBrana-2021-05-11",title:"Upsert to mBrana",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-to-mBrana-2021-05-11.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-to-mBrana-2021-05-11",permalink:"/adaptors/library/jobs/auto/Upsert-to-mBrana-2021-05-11",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert to mBrana",sidebar_label:"Upsert to mBrana",id:"Upsert-to-mBrana-2021-05-11",keywords:["library","job","expression","postgresql","upsert"]},sidebar:"adaptors",previous:{title:"Load / Upsert Data into PostgreSQL",permalink:"/adaptors/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22"},next:{title:"postgresql changelog",permalink:"/adaptors/packages/postgresql-changelog"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Upsert to mBrana"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.1.4"},(0,n.yg)("inlineCode",{parentName:"a"},"v3.1.4"))),(0,n.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated almost 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\nupsert(\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true }\n);\n")))}y.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,m=c["".concat(l,".").concat(g)]||c[g]||y[g]||o;return t?a.createElement(m,s(s({ref:r},u),{},{components:t})):a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);