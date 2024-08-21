"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[40200],{47886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={title:"1. Get data from SLUHIS",sidebar_label:"1. Get data from SLUHIS",id:"1-Get-data-from-SLUHIS-2023-03-08",keywords:["library","job","expression","postgresql","sql"]},i=void 0,l={unversionedId:"library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08",id:"library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08",title:"1. Get data from SLUHIS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08",permalink:"/adaptors/library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Get data from SLUHIS",sidebar_label:"1. Get data from SLUHIS",id:"1-Get-data-from-SLUHIS-2023-03-08",keywords:["library","job","expression","postgresql","sql"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Using findValue with an array of data",permalink:"/adaptors/library/jobs/auto/async-findValue"},next:{title:"Load to DB",permalink:"/adaptors/library/jobs/auto/Load-to-DB-2022-05-16"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: 1. Get data from SLUHIS"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.4.2"},(0,n.yg)("inlineCode",{parentName:"a"},"v3.4.2"))),(0,n.yg)("li",{parentName:"ul"},"Created over 1 year ago"),(0,n.yg)("li",{parentName:"ul"},"Updated over 1 year ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"28")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"sql")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"sql(state => `select(*) from patients where updated_at > ${state.lastSyncTime};`)\n")))}c.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,f=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);