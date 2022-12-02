"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Power BI"},i=void 0,s={unversionedId:"powerbi",id:"powerbi",title:"Power BI",description:"(Work in progress)",source:"@site/adaptors/powerbi.md",sourceDirName:".",slug:"/powerbi",permalink:"/fr/adaptors/powerbi",draft:!1,tags:[],version:"current",frontMatter:{title:"Power BI"},sidebar:"adaptors",previous:{title:"postgresql developer readme",permalink:"/fr/adaptors/packages/postgresql-readme"},next:{title:"Primero",permalink:"/fr/adaptors/primero"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(Work in progress)"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/"},"Power BI")," is a business analytics service by Microsoft. It provides interactive\nvisualizations and business intelligence capabilities with an interface simple\nenough for end users to create their own reports and dashboards."),(0,a.kt)("p",null,"Note that Power BI does not have a built-in database, rather it connects to many\ndifferent data sources (files, databases, etc). For a full list of available data sources, see\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources"},"Power BI data sources"),"."),(0,a.kt)("p",null,"OpenFn has experience setting up databases structured in a way that Power BI can\npull from."),(0,a.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,a.kt)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health\nprojects in several different geographies. This iNGO would like to use a\nbusiness intelligence tool, like Power BI, to create data visualisations for it's\nprojects' key indicators. To accomplish this, the iNGO uses OpenFn to take the\nsurvey data from CommCare, Kobo Toolbox and Survey CTO and then create a\nstructured database from it using MySQL. Once the structured database is\nestablished, OpenFn assists the iNGO with connecting this data to Power BI."),(0,a.kt)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the\nabove use case."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tableau Data Flow Visualization",src:r(72902).Z,width:"980",height:"425"})))}u.isMDXComponent=!0},72902:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/survey_db_powerbi-450b87361ecb103bba3d58ace03eaf59.png"}}]);