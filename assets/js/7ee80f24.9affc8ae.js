"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[29632],{24935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const o={title:"bigquery@3.0.1",id:"bigquery-docs",keywords:["adaptor","bigquery","load"]},l=void 0,d={unversionedId:"packages/bigquery-docs",id:"packages/bigquery-docs",title:"bigquery@3.0.1",description:"load(dirPath, projectId, datasetId, tableId, loadOptions, callback)",source:"@site/adaptors/packages/bigquery-docs.md",sourceDirName:"packages",slug:"/packages/bigquery-docs",permalink:"/adaptors/packages/bigquery-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery@3.0.1",id:"bigquery-docs",keywords:["adaptor","bigquery","load"]},sidebar:"adaptors",previous:{title:"beyonic developer readme",permalink:"/adaptors/packages/beyonic-readme"},next:{title:"Config for bigquery",permalink:"/adaptors/packages/bigquery-configuration-schema"}},c={},g=[{value:"Functions",id:"functions",level:2},{value:"load",id:"load",level:3}],p={toc:g},i="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(i,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#load"},"load(dirPath, projectId, datasetId, tableId, loadOptions, callback)"))),(0,n.yg)("p",null,"This adaptor exports the following from common:"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#parsecsv"},"parseCsv()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("h3",{id:"load"},"load"),(0,n.yg)("p",null,(0,n.yg)("code",null,"load(dirPath, projectId, datasetId, tableId, loadOptions, callback) \u21d2 Operation")),(0,n.yg)("p",null,"Load files to BigQuery"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dirPath"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"the path to your local directory")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"projectId"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"your bigquery project id")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"datasetId"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"your bigquery dataset id")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tableId"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"the name of the table you'd like to load")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"loadOptions"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"options to pass to the bigquery.load() API")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"callback"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"and optional callback")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"load(\n  './tmp/files',\n  'my-bg-project',\n  'test01',\n  'product-codes',\n  {\n    schema: 'FREQ:STRING,DATATYPE:STRING,PRODUCTCODE:STRING,PARTNER:STRING',\n    writeDisposition: 'WRITE_APPEND',\n    skipLeadingRows: 1,\n    schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],\n    createDisposition: 'CREATE_IF_NEEDED',\n  }\n)\n")),(0,n.yg)("hr",null))}s.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),g=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),i=g(a),y=n,u=i["".concat(c,".").concat(y)]||i[y]||s[y]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[i]="string"==typeof e?e:n,l[1]=d;for(var g=2;g<o;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);