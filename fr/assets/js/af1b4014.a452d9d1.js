"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77217],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var c=n.createContext({}),i=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,c=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=i(a),s=l,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||r;return a?n.createElement(m,o(o({ref:e},k),{},{components:a})):n.createElement(m,o({ref:e},k))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[u]="string"==typeof t?t:l,o[1]=p;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},35109:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={title:"godata@3.2.0",id:"godata-docs",keywords:["adaptor","godata","listContacts","getContact","upsertContact","listOutbreaks","getOutbreak","upsertOutbreak","listCases","getCase","upsertCase","listLocations","getLocation","upsertLocation","listReferenceData","getReferenceData","upsertReferenceData"]},o=void 0,p={unversionedId:"packages/godata-docs",id:"packages/godata-docs",title:"godata@3.2.0",description:"Functions",source:"@site/adaptors/packages/godata-docs.md",sourceDirName:"packages",slug:"/packages/godata-docs",permalink:"/fr/adaptors/packages/godata-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"godata@3.2.0",id:"godata-docs",keywords:["adaptor","godata","listContacts","getContact","upsertContact","listOutbreaks","getOutbreak","upsertOutbreak","listCases","getCase","upsertCase","listLocations","getLocation","upsertLocation","listReferenceData","getReferenceData","upsertReferenceData"]},sidebar:"adaptors",previous:{title:"Go.Data",permalink:"/fr/adaptors/godata"},next:{title:"godata changelog",permalink:"/fr/adaptors/packages/godata-changelog"}},c={},i=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"listContacts(id, callback) \u21d2 <code>Operation</code>",id:"listcontactsid-callback--operation",level:2},{value:"getContact(id, query, callback) \u21d2 <code>Operation</code>",id:"getcontactid-query-callback--operation",level:2},{value:"upsertContact(id, externalId, goDataContact, callback) \u21d2 <code>Operation</code>",id:"upsertcontactid-externalid-godatacontact-callback--operation",level:2},{value:"listOutbreaks(callback) \u21d2 <code>Operation</code>",id:"listoutbreakscallback--operation",level:2},{value:"getOutbreak(query, callback) \u21d2 <code>Operation</code>",id:"getoutbreakquery-callback--operation",level:2},{value:"upsertOutbreak(outbreak, callback) \u21d2 <code>Operation</code>",id:"upsertoutbreakoutbreak-callback--operation",level:2},{value:"listCases(id, callback) \u21d2 <code>Operation</code>",id:"listcasesid-callback--operation",level:2},{value:"getCase(id, query, callback) \u21d2 <code>Operation</code>",id:"getcaseid-query-callback--operation",level:2},{value:"upsertCase(id, externalId, goDataCase, callback) \u21d2 <code>Operation</code>",id:"upsertcaseid-externalid-godatacase-callback--operation",level:2},{value:"listLocations(callback) \u21d2 <code>Operation</code>",id:"listlocationscallback--operation",level:2},{value:"getLocation(query, callback) \u21d2 <code>Operation</code>",id:"getlocationquery-callback--operation",level:2},{value:"upsertLocation(externalId, goDataLocation, callback) \u21d2 <code>Operation</code>",id:"upsertlocationexternalid-godatalocation-callback--operation",level:2},{value:"listReferenceData(callback) \u21d2 <code>Operation</code>",id:"listreferencedatacallback--operation",level:2},{value:"getReferenceData(query, callback) \u21d2 <code>Operation</code>",id:"getreferencedataquery-callback--operation",level:2},{value:"upsertReferenceData(externalId, goDataReferenceData, callback) \u21d2 <code>Operation</code>",id:"upsertreferencedataexternalid-godatareferencedata-callback--operation",level:2}],k={toc:i};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,l.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#listContacts"},"listContacts(id, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch the list of contacts within a particular outbreak using its ID.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getContact"},"getContact(id, query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get one or multiple contacts within an outbreak from a query filter")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertContact"},"upsertContact(id, externalId, goDataContact, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert contact to godata using an external id to match a specific record.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#listOutbreaks"},"listOutbreaks(callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch the list of outbreaks")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getOutbreak"},"getOutbreak(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get one or multiple outbreaks from a query filter")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertOutbreak"},"upsertOutbreak(outbreak, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert outbreak to godata")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#listCases"},"listCases(id, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch the list of cases within a particular outbreak using its ID.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getCase"},"getCase(id, query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get one or multiple cases within an outbreak from a query filter")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertCase"},"upsertCase(id, externalId, goDataCase, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert case to godata using an external id to mach a specific record")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#listLocations"},"listLocations(callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch the list of locations")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getLocation"},"getLocation(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get one or multiple locations from a query filter")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertLocation"},"upsertLocation(externalId, goDataLocation, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert location to godata")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#listReferenceData"},"listReferenceData(callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch the list of reference data")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getReferenceData"},"getReferenceData(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get one or multiple reference data from a query filter")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertReferenceData"},"upsertReferenceData(externalId, goDataReferenceData, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert reference data to godata"))),(0,l.kt)("a",{name:"execute"}),(0,l.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,l.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Operations")),(0,l.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,l.kt)("a",{name:"listContacts"}),(0,l.kt)("h2",{id:"listcontactsid-callback--operation"},"listContacts(id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch the list of contacts within a particular outbreak using its ID."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'listContacts("343d-dc3e", // Outbreak Id\n   state => {\n      console.log(state);\n   return state;\n });\n')),(0,l.kt)("a",{name:"getContact"}),(0,l.kt)("h2",{id:"getcontactid-query-callback--operation"},"getContact(id, query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get one or multiple contacts within an outbreak from a query filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getContact("343d-dc3e", {"where":{"firstName": "Luca"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.kt)("a",{name:"upsertContact"}),(0,l.kt)("h2",{id:"upsertcontactid-externalid-godatacontact-callback--operation"},"upsertContact(id, externalId, goDataContact, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert contact to godata using an external id to match a specific record."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goDataContact"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertContact(\"4dce-3eedce3-rd33\", 'visualId',\n   {\n     firstName: 'Luca',\n     gender: 'male',\n     'age:years': '20'\n     ...\n   }\n )\n")),(0,l.kt)("a",{name:"listOutbreaks"}),(0,l.kt)("h2",{id:"listoutbreakscallback--operation"},"listOutbreaks(callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch the list of outbreaks"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listOutbreaks(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.kt)("a",{name:"getOutbreak"}),(0,l.kt)("h2",{id:"getoutbreakquery-callback--operation"},"getOutbreak(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get one or multiple outbreaks from a query filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getOutbreak({"where":{"name": "Outbreak demo"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.kt)("a",{name:"upsertOutbreak"}),(0,l.kt)("h2",{id:"upsertoutbreakoutbreak-callback--operation"},"upsertOutbreak(outbreak, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert outbreak to godata"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outbreak"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with an externalId and some outbreak data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'upsertOutbreak({externalId: "3dec33-ede3", data: {...}})\n')),(0,l.kt)("a",{name:"listCases"}),(0,l.kt)("h2",{id:"listcasesid-callback--operation"},"listCases(id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch the list of cases within a particular outbreak using its ID."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'listCases("343d-dc3e", state => {\n   console.log(state);\n   return state;\n });\n')),(0,l.kt)("a",{name:"getCase"}),(0,l.kt)("h2",{id:"getcaseid-query-callback--operation"},"getCase(id, query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get one or multiple cases within an outbreak from a query filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCase(\n   '3b55-cdf4',\n   { 'where.relationship': { active: true }, where: { firstName: 'Luca'} },\n   state => {\n     console.log(state);\n     return state;\n   }\n);\n")),(0,l.kt)("a",{name:"upsertCase"}),(0,l.kt)("h2",{id:"upsertcaseid-externalid-godatacase-callback--operation"},"upsertCase(id, externalId, goDataCase, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert case to godata using an external id to mach a specific record"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goDataCase"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertCase(\"4dce-3eedce3-rd33\", 'visualId',\n   data: state => {\n     const patient = state.data.body;\n      return {\n        firstName: patient.Patient_name.split(' ')[0],\n        lastName: patient.Patient_name.split(' ')[1],\n        visualId: patient.Case_ID,\n        'age:years': patient.Age_in_year,\n        gender: patient.Sex,\n      };\n })\n")),(0,l.kt)("a",{name:"listLocations"}),(0,l.kt)("h2",{id:"listlocationscallback--operation"},"listLocations(callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch the list of locations"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listLocations(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.kt)("a",{name:"getLocation"}),(0,l.kt)("h2",{id:"getlocationquery-callback--operation"},"getLocation(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get one or multiple locations from a query filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getLocation({"where":{"name": "30 DE OCTUBRE"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.kt)("a",{name:"upsertLocation"}),(0,l.kt)("h2",{id:"upsertlocationexternalid-godatalocation-callback--operation"},"upsertLocation(externalId, goDataLocation, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert location to godata"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goDataLocation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some location data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertLocation('name', {...})\n")),(0,l.kt)("a",{name:"listReferenceData"}),(0,l.kt)("h2",{id:"listreferencedatacallback--operation"},"listReferenceData(callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch the list of reference data"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listReferenceData(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.kt)("a",{name:"getReferenceData"}),(0,l.kt)("h2",{id:"getreferencedataquery-callback--operation"},"getReferenceData(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get one or multiple reference data from a query filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getReferenceData({"where":{"categoryId": "LNG_REFERENCE_DATA_CATEGORY_CENTRE_NAME"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.kt)("a",{name:"upsertReferenceData"}),(0,l.kt)("h2",{id:"upsertreferencedataexternalid-godatareferencedata-callback--operation"},"upsertReferenceData(externalId, goDataReferenceData, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert reference data to godata"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goDataReferenceData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some reference data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertReferenceData('id', {...})\n")))}u.isMDXComponent=!0}}]);