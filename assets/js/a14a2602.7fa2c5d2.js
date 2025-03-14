"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16458],{16937:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"satusehat@2.0.10",id:"satusehat-docs",keywords:["adaptor","satusehat","get","patch","post","put"]},p=void 0,o={unversionedId:"packages/satusehat-docs",id:"packages/satusehat-docs",title:"satusehat@2.0.10",description:"get(path, params, callback)",source:"@site/adaptors/packages/satusehat-docs.md",sourceDirName:"packages",slug:"/packages/satusehat-docs",permalink:"/adaptors/packages/satusehat-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"satusehat@2.0.10",id:"satusehat-docs",keywords:["adaptor","satusehat","get","patch","post","put"]},sidebar:"adaptors",previous:{title:"Satusehat Adaptor",permalink:"/adaptors/satusehat"},next:{title:"Config for satusehat",permalink:"/adaptors/packages/satusehat-configuration-schema"}},g={},s=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:3},{value:"patch",id:"patch",level:3},{value:"post",id:"post",level:3},{value:"put",id:"put",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"SatusehatHttpState",id:"satusehathttpstate",level:3}],y={toc:s},u="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#patch"},"patch(path, data, params, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#post"},"post(path, data, params, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#put"},"put(path, data, params, [callback])"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request to Satusehat. Use this to fetch resources directly from the Satusehat REST API.\nYou can pass Satusehat query parameters as an object of key value pairs, which will map to parameters\nin the URL."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional object of query parameters to include in the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"An optional callback to handle the response")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP response from the Satusehat server (excluding the body)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get a resource by Id. Equivalent to GET ",(0,r.yg)("inlineCode",{parentName:"p"},"<baseUrl>/Organization/abcde")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("Organization/abcde")\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get resources with a query. Equivalent to GET ",(0,r.yg)("inlineCode",{parentName:"p"},"<baseUrl>/Patient?identifier=https://fhir.kemkes.go.id/id/nik|9271060312000001")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('/Patient', {\n  identifier:'https://fhir.kemkes.go.id/id/nik|9271060312000001'\n});\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"patch"},"patch"),(0,r.yg)("p",null,(0,r.yg)("code",null,"patch(path, data, params, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a PATCH request to Satusehat. Use this to directly update resources on Satusehat REST API.\nYou can pass Satusehat an array of objects which contains ",(0,r.yg)("inlineCode",{parentName:"p"},"op"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," as the body. You can also pass Satusehat query parameters as an object of key value pairs, which will map to parameters\nin the URL."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource and exact item to be partially updated")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Array")),(0,r.yg)("td",{parentName:"tr",align:null},"An array of objects which defines data that will be used to partially update a given instance of resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional object of query parameters to include in the request.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP response from the Satusehat server (excluding the body)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Update a property of a resource. Equivalent to PATCH ",(0,r.yg)("inlineCode",{parentName:"p"},"<baseurl>/Organization/abcde")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"patch('Organization/abcde', [\n{\n op: 'replace',\n path: '/language', // Name of property/element of resource to be replaced\n value: 'id', // Value to be replaced\n},\n]);\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"post"},"post"),(0,r.yg)("p",null,(0,r.yg)("code",null,"post(path, data, params, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a POST request to Satusehat. Use this to send resources directly to Satusehat REST API.\nYou can pass Satusehat body data as a JSON FHIR object."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"JSON FHIR object to create a resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional object of query parameters to include in the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP response from the Satusehat server (excluding the body)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create an encounter resource. Equivalent to POST ",(0,r.yg)("inlineCode",{parentName:"p"},"<baseUrl>/Encounter")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"post('Encounter', { resourceType: 'Encounter', ...state.data });\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"put"},"put"),(0,r.yg)("p",null,(0,r.yg)("code",null,"put(path, data, params, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a PUT request to Satusehat. Use this to directly update resources on Satusehat REST API.\nYou can pass Satusehat body data as a JSON FHIR object. You can also pass Satusehat query parameters as an object of key value pairs, which will map to parameters\nin the URL."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource and exact item to be updated")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"JSON FHIR object to update the resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional object of query parameters to include in the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP response from the Satusehat server (excluding the body)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Update a resource. Equivalent to PUT ",(0,r.yg)("inlineCode",{parentName:"p"},"<baseurl>/Organization/abcde")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"put('Organization/abcde', { resourceType: 'Organization', active: false });\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"satusehathttpstate"},"SatusehatHttpState"),(0,r.yg)("p",null,"State object"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP response from the Satusehat server (excluding the body)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,r.yg)("hr",null))}d.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),s=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},y=function(e){var a=s(e.components);return n.createElement(g.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},i=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=s(t),i=r,c=u["".concat(g,".").concat(i)]||u[i]||d[i]||l;return t?n.createElement(c,p(p({ref:a},y),{},{components:t})):n.createElement(c,p({ref:a},y))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=i;var o={};for(var g in a)hasOwnProperty.call(a,g)&&(o[g]=a[g]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}i.displayName="MDXCreateElement"}}]);