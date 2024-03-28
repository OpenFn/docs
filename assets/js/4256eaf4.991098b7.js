"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[75132],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,o[1]=g;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const l={title:"mongodb@2.0.1",id:"mongodb-docs",keywords:["adaptor","mongodb"]},o=void 0,g={unversionedId:"packages/mongodb-docs",id:"packages/mongodb-docs",title:"mongodb@2.0.1",description:"Functions",source:"@site/adaptors/packages/mongodb-docs.md",sourceDirName:"packages",slug:"/packages/mongodb-docs",permalink:"/adaptors/packages/mongodb-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mongodb@2.0.1",id:"mongodb-docs",keywords:["adaptor","mongodb"]},sidebar:"adaptors",previous:{title:"mogli developer readme",permalink:"/adaptors/packages/mogli-readme"},next:{title:"Config for mongodb",permalink:"/adaptors/packages/mongodb-configuration-schema"}},p={},c=[{value:"Functions",id:"functions",level:2},{value:"connect",id:"connect",level:2},{value:"disconnect",id:"disconnect",level:2},{value:"execute",id:"execute",level:2},{value:"findDocuments",id:"finddocuments",level:2},{value:"insertDocuments",id:"insertdocuments",level:2},{value:"updateDocument",id:"updatedocument",level:2}],u={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#connect"},"connect(state)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#disconnect"},"disconnect(state)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#execute"},"execute(operations)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#finddocuments"},"findDocuments(params)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#insertdocuments"},"insertDocuments(params)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#updatedocument"},"updateDocument(params)"))),(0,r.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"connect"},"connect"),(0,r.yg)("p",null,"connect(state) \u21d2 ",(0,r.yg)("code",null,"State")),(0,r.yg)("p",null,"Connects to a mongoDb instance"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"State")),(0,r.yg)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"connect(state)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"disconnect"},"disconnect"),(0,r.yg)("p",null,"disconnect(state) \u21d2 ",(0,r.yg)("code",null,"State")),(0,r.yg)("p",null,"Removes connection from the state."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"State"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"disconnect(state)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"execute"},"execute"),(0,r.yg)("p",null,"execute(operations) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.yg)("inlineCode",{parentName:"p"},"@openfn/language-common/execute"),", and prepends initial state for http."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"operations"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Operations")),(0,r.yg)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  insertDocuments(params),\n  findDocuments(params)\n)(state)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"finddocuments"},"findDocuments"),(0,r.yg)("p",null,"findDocuments(params) \u21d2 ",(0,r.yg)("code",null,"State")),(0,r.yg)("p",null,"Find documents in a mongoDb collection"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration for mongo")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"findDocuments({\n   database: 'str',\n   collection: 'cases',\n   query: {a:3}\n  });\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"insertdocuments"},"insertDocuments"),(0,r.yg)("p",null,"insertDocuments(params) \u21d2 ",(0,r.yg)("code",null,"State")),(0,r.yg)("p",null,"Inserts documents into a mongoDb collection"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration for mongo")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"insertDocuments({\n   database: 'str',\n   collection: 'kids',\n   documents: [1,2,3]\n  });\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"updatedocument"},"updateDocument"),(0,r.yg)("p",null,"updateDocument(params) \u21d2 ",(0,r.yg)("code",null,"State")),(0,r.yg)("p",null,"Updates document (optionally upserting) into a mongoDb collection"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration for mongo")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"updateDocuments({\n   database: 'str',\n   collection: 'animals',\n   filter: { type: 'fuzzy' },\n   changes: { kind: 'soft' },\n   options: { upsert: true }\n  });\n")),(0,r.yg)("hr",null))}s.isMDXComponent=!0}}]);