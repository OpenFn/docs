"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3704],{8474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={title:"sftp@2.0.1",id:"sftp-docs",keywords:["adaptor","sftp","getCSV","getJSON","list","normalizeCSVarray","putCSV"]},o=void 0,g={unversionedId:"packages/sftp-docs",id:"packages/sftp-docs",title:"sftp@2.0.1",description:"getCSV(filePath, [parsingOptions])",source:"@site/adaptors/packages/sftp-docs.md",sourceDirName:"packages",slug:"/packages/sftp-docs",permalink:"/adaptors/packages/sftp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp@2.0.1",id:"sftp-docs",keywords:["adaptor","sftp","getCSV","getJSON","list","normalizeCSVarray","putCSV"]},sidebar:"adaptors",previous:{title:"satusehat developer readme",permalink:"/adaptors/packages/satusehat-readme"},next:{title:"Config for sftp",permalink:"/adaptors/packages/sftp-configuration-schema"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"getCSV",id:"getcsv",level:3},{value:"getJSON",id:"getjson",level:3},{value:"list",id:"list",level:3},{value:"normalizeCSVarray",id:"normalizecsvarray",level:3},{value:"putCSV",id:"putcsv",level:3}],i={toc:s},y="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getcsv"},"getCSV(filePath, [parsingOptions])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getjson"},"getJSON(filePath, encoding)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#list"},"list(dirPath, filter, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#normalizecsvarray"},"normalizeCSVarray(options, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#putcsv"},"putCSV(localFilePath, remoteFilePath, parsingOptions)"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#chunk"},"chunk()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#parsecsv"},"parseCsv()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"getcsv"},"getCSV"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getCSV(filePath, [parsingOptions]) \u21d2 Operation")),(0,r.yg)("p",null,"Get a CSV and return a JSON array of strings for each item separated by the delimiter"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filePath"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[parsingOptions]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. ",(0,r.yg)("inlineCode",{parentName:"td"},"parsingOptions")," Parsing options which can be passed to convert csv to json See more ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/Keyang/node-csvtojson#parameters"},"on csvtojson docs"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getCSV(\n  '/some/path/to_file.csv',\n  {delimiter: \";\", flatKeys: true }\n);\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getjson"},"getJSON"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getJSON(filePath, encoding) \u21d2 Operation")),(0,r.yg)("p",null,"Fetch a json file from an FTP server"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filePath"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"encoding"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Character encoding for the json")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getJSON(\n  '/path/To/File',\n  'utf8',\n);\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"list"},"list"),(0,r.yg)("p",null,(0,r.yg)("code",null,"list(dirPath, filter, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"List files present in a directory"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dirPath"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to remote directory")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"a filter function used to select return entries")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," basic files listing"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"list('/some/path/')\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," list files with filters"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"list('/some/path/', file=> {\n return /foo.\\.txt/.test(file.name);\n})\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," list files with filters and use callback"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'list(\n  "/some/path/",\n  (file) => /foo.\\.txt/.test(file.name),\n  (state) => {\n    const latestFile = state.data.filter(\n      (file) => file.modifyTime <= new Date()\n    );\n    return { ...state, latestFile };\n  }\n);\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"normalizecsvarray"},"normalizeCSVarray"),(0,r.yg)("p",null,(0,r.yg)("code",null,"normalizeCSVarray(options, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Convert JSON array of strings into a normalized object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"options")),(0,r.yg)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"callback")),(0,r.yg)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"normalizeCSVarray({ delimiter: ';', noheader: true });\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"putcsv"},"putCSV"),(0,r.yg)("p",null,(0,r.yg)("code",null,"putCSV(localFilePath, remoteFilePath, parsingOptions) \u21d2 Operation")),(0,r.yg)("p",null,"Convert JSON to CSV and upload to an FTP server"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"localFilePath"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"remoteFilePath"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to the remote file to be created on the server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parsingOptions"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Options which can be passed to adjust the read and write stream used in sending the data to the remote server")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"putCSV(\n  '/some/path/to_local_file.csv',\n  '/some/path/to_remove_file.csv',\n  { delimiter: ';', noheader: true }\n);\n")),(0,r.yg)("hr",null))}c.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=g(e,["components","mdxType","originalType","parentName"]),y=s(a),d=r,u=y["".concat(p,".").concat(d)]||y[d]||c[d]||l;return a?n.createElement(u,o(o({ref:t},i),{},{components:a})):n.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[y]="string"==typeof e?e:r,o[1]=g;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);