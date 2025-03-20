"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[98982],{85344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>i});var n=a(58168),l=(a(96540),a(15680));const r={title:"azure-storage@2.0.9",id:"azure-storage-docs",keywords:["adaptor","azure-storage","downloadBlob","getBlobProperties","uploadBlob"]},o=void 0,g={unversionedId:"packages/azure-storage-docs",id:"packages/azure-storage-docs",title:"azure-storage@2.0.9",description:"downloadBlob(blobName, [options])",source:"@site/adaptors/packages/azure-storage-docs.md",sourceDirName:"packages",slug:"/packages/azure-storage-docs",permalink:"/adaptors/packages/azure-storage-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"azure-storage@2.0.9",id:"azure-storage-docs",keywords:["adaptor","azure-storage","downloadBlob","getBlobProperties","uploadBlob"]},sidebar:"adaptors",previous:{title:"Azure Storage",permalink:"/adaptors/azure-storage"},next:{title:"Config for azure-storage",permalink:"/adaptors/packages/azure-storage-configuration-schema"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"downloadBlob",id:"downloadblob",level:3},{value:"getBlobProperties",id:"getblobproperties",level:3},{value:"uploadBlob",id:"uploadblob",level:3}],d={toc:i},u="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#downloadblob"},"downloadBlob(blobName, [options])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getblobproperties"},"getBlobProperties(blobName, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#uploadblob"},"uploadBlob(blobName, content, uploadOptions, [options])"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"downloadblob"},"downloadBlob"),(0,l.yg)("p",null,(0,l.yg)("code",null,"downloadBlob(blobName, [options]) \u21d2 Operation")),(0,l.yg)("p",null,"Download a blob from Azure Blob Storage."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blobName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the blob to download.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional options for the download process.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"downloadBlob('mycontainer', 'myblob.txt', { downloadAs: 'string' })\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getblobproperties"},"getBlobProperties"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getBlobProperties(blobName, options) \u21d2 Operation")),(0,l.yg)("p",null,"Get properties of a blob in Azure Blob Storage."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blobName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the blob to get properties for.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional options for the getBlobProperties process.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getBlobProperties('mycontainer', 'myblob.txt')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"uploadblob"},"uploadBlob"),(0,l.yg)("p",null,(0,l.yg)("code",null,"uploadBlob(blobName, content, uploadOptions, [options]) \u21d2 Operation")),(0,l.yg)("p",null,"Upload content to Azure Blob Storage."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blobName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Name of the blob to create or replace.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"content"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Content to upload.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uploadOptions"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"See BlockBlobUploadOptions in Azure Blob Storage docs")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional options for the upload process.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.createContainer]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to create the container if it doesn't exist.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.overwrite]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to overwrite an existing blob with the same name.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.containerName]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Container name. Overrides state.configuration.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"uploadBlob('mycontainer', 'myblob.txt', {foo:\"bar\"}, { blobHTTPHeaders: { blobContentType: 'application/json' } })\n")),(0,l.yg)("hr",null))}y.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),u=i(a),s=l,m=u["".concat(p,".").concat(s)]||u[s]||y[s]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[u]="string"==typeof e?e:l,o[1]=g;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);