"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34483],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>s});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(t),d=r,s=u["".concat(p,".").concat(d)]||u[d]||y[d]||l;return t?n.createElement(s,g(g({ref:a},c),{},{components:t})):n.createElement(s,g({ref:a},c))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,g[1]=o;for(var i=2;i<l;i++)g[i]=t[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59850:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=t(58168),r=(t(96540),t(15680));const l={title:"fhir@3.1.2",id:"fhir-docs",keywords:["adaptor","fhir","create","createTransactionBundle","get","getClaim"]},g=void 0,o={unversionedId:"packages/fhir-docs",id:"packages/fhir-docs",title:"fhir@3.1.2",description:"Functions",source:"@site/adaptors/packages/fhir-docs.md",sourceDirName:"packages",slug:"/packages/fhir-docs",permalink:"/adaptors/packages/fhir-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir@3.1.2",id:"fhir-docs",keywords:["adaptor","fhir","create","createTransactionBundle","get","getClaim"]},sidebar:"adaptors",previous:{title:"facebook developer readme",permalink:"/adaptors/packages/facebook-readme"},next:{title:"Config for fhir",permalink:"/adaptors/packages/fhir-configuration-schema"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:2},{value:"createTransactionBundle",id:"createtransactionbundle",level:2},{value:"get",id:"get",level:2},{value:"getClaim",id:"getclaim",level:2},{value:"request",id:"request",level:2}],c={toc:i},u="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#create"},"create(path, params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#createtransactionbundle"},"createTransactionBundle(params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getclaim"},"getClaim(claimId, query, callback)"))),(0,r.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"create"},"create"),(0,r.yg)("p",null,"create(path, params, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Creates a resource in a destination system using a POST request"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'create("Bundle", {\n  entry: [\n    {\n      fullUrl: "", // Eg: Patient URL\n      resource: {}, // Resource data\n      search: {\n        mode: "match",\n      },\n    },\n  ],\n  type: "collection",\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"createtransactionbundle"},"createTransactionBundle"),(0,r.yg)("p",null,"createTransactionBundle(params, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Creates a transactionBundle for HAPI FHIR"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to create the new transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'createTransactionBundle({\n  resourceType: "Bundle",\n  type: "transaction",\n  entry: [\n    {\n      fullUrl: "https://hapi.fhir.org/baseR4/Patient/592442",\n      resource: {\n        resourceType: "Patient",\n        id: "592442",\n        name: [{ given: "Caleb", family: "Cushing" }],\n      },\n      request: {\n        method: "POST",\n        url: "Patient",\n      },\n    },\n  ],\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"get"},"get"),(0,r.yg)("p",null,"get(path, query, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get a resource in a FHIR system"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to get the new resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(Get Claim from FHIR with optional query)"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("Claim", { _include: "Claim:patient", _sort: "-_lastUpdated", _count: 200 })\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")," ",(0,r.yg)("em",{parentName:"p"},"(Get Patient from FHIR)"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('Patient');\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"getclaim"},"getClaim"),(0,r.yg)("p",null,"getClaim(claimId, query, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get Claim in a FHIR system"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"claimId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"(optional) claim id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"(optinal) query parameters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getClaim({ _include: "Claim:patient", _sort: "-_lastUpdated", _count: 200 });\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"request"},"request"),(0,r.yg)("p",null,"request \u21d2"),(0,r.yg)("p",null,"This is an asynchronous function that sends a request to a specified URL with optional parameters\nand headers, and returns the response data in JSON format."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": The ",(0,r.yg)("inlineCode",{parentName:"p"},"request")," function is returning the parsed JSON data from the response of the HTTP\nrequest made to the specified ",(0,r.yg)("inlineCode",{parentName:"p"},"url")," with the given ",(0,r.yg)("inlineCode",{parentName:"p"},"params")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"method"),". If there is an error in\nthe response, the function will throw an error.  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the API endpoint that the request is being made to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[params]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"An object containing any additional parameters to be sent with the request, such as query parameters or request body data. It is an optional parameter and defaults to an empty object if not provided.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[method]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,'"',"GET",'"')),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP method to be used for the request. It defaults to 'GET' if not specified.")))),(0,r.yg)("hr",null))}y.isMDXComponent=!0}}]);