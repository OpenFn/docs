"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[10390],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),c=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=c(a),y=r,u=i["".concat(g,".").concat(y)]||i[y]||d[y]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=y;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[i]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},96699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const l={title:"ocl@1.1.10",id:"ocl-docs",keywords:["adaptor","ocl","get","getMappings"]},o=void 0,p={unversionedId:"packages/ocl-docs",id:"packages/ocl-docs",title:"ocl@1.1.10",description:"Functions",source:"@site/adaptors/packages/ocl-docs.md",sourceDirName:"packages",slug:"/packages/ocl-docs",permalink:"/adaptors/packages/ocl-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"ocl@1.1.10",id:"ocl-docs",keywords:["adaptor","ocl","get","getMappings"]},sidebar:"adaptors",previous:{title:"nexmo developer readme",permalink:"/adaptors/packages/nexmo-readme"},next:{title:"Config for ocl",permalink:"/adaptors/packages/ocl-configuration-schema"}},g={},c=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:2},{value:"getMappings",id:"getmappings",level:2}],s={toc:c},i="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(i,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getmappings"},"getMappings(ownerId, repositoryId, [options], callback)"))),(0,r.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"get"},"get"),(0,r.yg)("p",null,"get(path, query, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get a resource in OCL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"A query object that will limit what resources are retrieved when converted into request params.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get(\n  "orgs/MSFOCG/collections/lime-demo/HEAD/mappings",\n  {\n    page: 1,\n    exact_match: "off",\n    limit: 200,\n    verbose: false,\n    sortDesc: "_score",\n  },\n  (state) => {\n    // Add state oclMappings\n    const oclMappings = state.data;\n    return { ...state, data: {}, references: [], response: {}, oclMappings };\n  }\n);\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"getmappings"},"getMappings"),(0,r.yg)("p",null,"getMappings(ownerId, repositoryId, ","[options]",", callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get a source repository in OCL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ownerId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"An OCL user or organization")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"repositoryId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"An OCL collection id or source id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[options]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. ",(0,r.yg)("inlineCode",{parentName:"td"},"options"),"  which can be passed to  See more ",(0,r.yg)("a",{parentName:"td",href:"https://api.openconceptlab.org/swagger/"},"on OCL swagger docs"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getMappings(\n  "MSFOCG",\n  "lime-demo",\n  { page: 1, exact_match: "off", verbose: false },\n  (state) => {\n    // Add state oclMappings\n    const oclMappings = state.data;\n    return { ...state, data: {}, references: [], response: {}, oclMappings };\n  }\n);\n')),(0,r.yg)("hr",null))}d.isMDXComponent=!0}}]);