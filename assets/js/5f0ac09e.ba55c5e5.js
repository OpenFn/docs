"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7253],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,f=d["".concat(l,".").concat(b)]||d[b]||c[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11871:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},l=void 0,p={unversionedId:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",id:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",title:"Load / Upsert Data into PostgreSQL",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",permalink:"/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",tags:[],version:"current",frontMatter:{title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},sidebar:"library",previous:{title:"Create Person in OpenMRS",permalink:"/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12"},next:{title:"Upsert to mBrana",permalink:"/library/jobs/auto/Upsert-to-mBrana-2021-05-11"}},u=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Load / Upsert Data into PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.3.3"},(0,o.kt)("inlineCode",{parentName:"a"},"v3.3.3"))),(0,o.kt)("li",{parentName:"ul"},"Created about 2 months ago"),(0,o.kt)("li",{parentName:"ul"},"Updated about 2 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\n")))}d.isMDXComponent=!0}}]);