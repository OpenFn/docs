"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[20396],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),i=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=i(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=i(a),m=n,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return a?r.createElement(k,o(o({ref:e},c),{},{components:a})):r.createElement(k,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},19026:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"bigquery@1.1.0",id:"bigquery-docs",keywords:["adaptor","bigquery","load","parseCSV"]},o=void 0,p={unversionedId:"packages/bigquery-docs",id:"packages/bigquery-docs",title:"bigquery@1.1.0",description:"Adaptor",source:"@site/adaptors/packages/bigquery-docs.md",sourceDirName:"packages",slug:"/packages/bigquery-docs",permalink:"/adaptors/packages/bigquery-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery@1.1.0",id:"bigquery-docs",keywords:["adaptor","bigquery","load","parseCSV"]},sidebar:"library",previous:{title:"beyonic developer readme",permalink:"/adaptors/packages/beyonic-readme"},next:{title:"bigquery changelog",permalink:"/adaptors/packages/bigquery-changelog"}},d={},i=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute(operations) \u21d2 <code>Operation</code>",id:"adaptorexecuteoperations--operation",level:3},{value:"Adaptor.load(dirPath, projectId, datasetId, tableId, loadOptions, callback) \u21d2 <code>Operation</code>",id:"adaptorloaddirpath-projectid-datasetid-tableid-loadoptions-callback--operation",level:3},{value:"Adaptor.parseCSV(target, config) \u21d2 <code>Operation</code>",id:"adaptorparsecsvtarget-config--operation",level:3}],c={toc:i};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute(operations)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.load"},".load(dirPath, projectId, datasetId, tableId, loadOptions, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.parseCSV"},".parseCSV(target, config)")," \u21d2 ",(0,n.kt)("code",null,"Operation"))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecuteoperations--operation"},"Adaptor.execute(operations) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.load"}),(0,n.kt)("h3",{id:"adaptorloaddirpath-projectid-datasetid-tableid-loadoptions-callback--operation"},"Adaptor.load(dirPath, projectId, datasetId, tableId, loadOptions, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Load files to BigQuery"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dirPath"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"the path to your local directory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"projectId"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"your bigquery project id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"datasetId"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"your bigquery dataset id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tableId"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"the name of the table you'd like to load")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loadOptions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"options to pass to the bigquery.load() API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"and optional callback")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"load(\n  './tmp/files',\n  'my-bg-project',\n  'test01',\n  'product-codes',\n  {\n    schema: 'FREQ:STRING,DATATYPE:STRING,PRODUCTCODE:STRING,PARTNER:STRING',\n    writeDisposition: 'WRITE_APPEND',\n    skipLeadingRows: 1,\n    schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],\n    createDisposition: 'CREATE_IF_NEEDED',\n  }\n)\n")),(0,n.kt)("a",{name:"module_Adaptor.parseCSV"}),(0,n.kt)("h3",{id:"adaptorparsecsvtarget-config--operation"},"Adaptor.parseCSV(target, config) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"CSV-Parse for CSV conversion to JSON"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"String")),(0,n.kt)("td",{parentName:"tr",align:null},"string or local file with CSV data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"config"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"csv-parse config object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'parseCSV("/home/user/someData.csv", {\n      quoteChar: \'"\',\n      header: false,\n    });\n')))}u.isMDXComponent=!0}}]);