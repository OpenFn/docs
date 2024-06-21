"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23060],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>m});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),y=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},i=function(e){var a=y(e.components);return n.createElement(o.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=y(t),c=l,m=s["".concat(o,".").concat(c)]||s[c]||u[c]||r;return t?n.createElement(m,g(g({ref:a},i),{},{components:t})):n.createElement(m,g({ref:a},i))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:l,g[1]=p;for(var y=2;y<r;y++)g[y]=t[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69333:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>y});var n=t(58168),l=(t(96540),t(15680));const r={title:"primero@2.12.1",id:"primero-docs",keywords:["adaptor","primero","createCase","createReferrals","getCases","getForms","getLocations","getLookups","getReferrals","updateCase","updateReferral","upsertCase"]},g=void 0,p={unversionedId:"packages/primero-docs",id:"packages/primero-docs",title:"primero@2.12.1",description:"Functions",source:"@site/adaptors/packages/primero-docs.md",sourceDirName:"packages",slug:"/packages/primero-docs",permalink:"/adaptors/packages/primero-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"primero@2.12.1",id:"primero-docs",keywords:["adaptor","primero","createCase","createReferrals","getCases","getForms","getLocations","getLookups","getReferrals","updateCase","updateReferral","upsertCase"]},sidebar:"adaptors",previous:{title:"Primero",permalink:"/adaptors/primero"},next:{title:"Config for primero",permalink:"/adaptors/packages/primero-configuration-schema"}},o={},y=[{value:"Functions",id:"functions",level:2},{value:"cleanupState",id:"cleanupstate",level:2},{value:"createCase",id:"createcase",level:2},{value:"createReferrals",id:"createreferrals",level:2},{value:"generateAuthString",id:"generateauthstring",level:2},{value:"getCases",id:"getcases",level:2},{value:"getForms",id:"getforms",level:2},{value:"getLocations",id:"getlocations",level:2},{value:"getLookups",id:"getlookups",level:2},{value:"getReferrals",id:"getreferrals",level:2},{value:"login",id:"login",level:2},{value:"queryHandler",id:"queryhandler",level:2},{value:"updateCase",id:"updatecase",level:2},{value:"updateReferral",id:"updatereferral",level:2},{value:"upsertCase",id:"upsertcase",level:2}],i={toc:y},s="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(s,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#cleanupstate"},"cleanupState(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createcase"},"createCase(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createreferrals"},"createReferrals(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#generateauthstring"},"generateAuthString(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getcases"},"getCases(query, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getforms"},"getForms(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getlocations"},"getLocations(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getlookups"},"getLookups(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getreferrals"},"getReferrals(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#login"},"login(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#queryhandler"},"queryHandler(state, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#updatecase"},"updateCase(id, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#updatereferral"},"updateReferral(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertcase"},"upsertCase(params, callback)"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#beta"},"beta()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"cleanupstate"},"cleanupState"),(0,l.yg)("p",null,"cleanupState(state) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Removes unserializable keys from the state."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State"))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createcase"},"createCase"),(0,l.yg)("p",null,"createCase(params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a new case in Primero"),(0,l.yg)("p",null,"Use this function to create a new case in Primero based on a set of Data."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Create a new case in Primero based on a set of Data)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createCase({\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Edwine Edgemont",\n  },\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createreferrals"},"createReferrals"),(0,l.yg)("p",null,"createReferrals(params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create referrals in Primero"),(0,l.yg)("p",null,"Use this function to bulk refer to one or multiple cases from Primero to a single user"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with referral data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Create referrals for multiple cases in Primero)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createReferrals({\n  data: {\n    ids: [\n      "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n      "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n    ],\n    transitioned_to: "primero_cp",\n    notes: "This is a bulk referral",\n  },\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"generateauthstring"},"generateAuthString"),(0,l.yg)("p",null,"generateAuthString(state) \u21d2 ",(0,l.yg)("code",null,"string")),(0,l.yg)("p",null,"Generate an auth string to support multiple types of auth credentials."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State"))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"generateAuthString(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getcases"},"getCases"),(0,l.yg)("p",null,"getCases(query, options, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get cases from Primero"),(0,l.yg)("p",null,"Use this function to get cases from Primero based on a set of query parameters.\nNote that in many implementations, the ",(0,l.yg)("inlineCode",{parentName:"p"},"remote")," attribute should be set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," to ensure that only cases marked for remote access will be retrieved.\nYou can specify a ",(0,l.yg)("inlineCode",{parentName:"p"},"case_id")," value to fetch a unique case and a query string to filter result."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum, option to getReferrals")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) an object with a getReferrals key to fetch referrals")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"( Get cases from Primero with query parameters)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getCases({\n  remote: true,\n  query: "sex=male",\n});\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get case from Primero for a specific case id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getCases({\n  remote: true,\n  case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getforms"},"getForms"),(0,l.yg)("p",null,"getForms(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get forms from Primero"),(0,l.yg)("p",null,"Use this function to get forms from Primero that are accessible to this user based on a set of query parameters.\nThe user can filter the form list by record type and module."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get the list of all forms)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getForms();\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get the list of all forms for a specific module)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getForms({\n  module_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getlocations"},"getLocations"),(0,l.yg)("p",null,"getLocations(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get locations from Primero"),(0,l.yg)("p",null,"Use this function to get a paginated list of all locations that are accessible to this user from Primero.\nNote: You can specify a ",(0,l.yg)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,l.yg)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1).\nAnother parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"hierarchy: true")," (Defaults to false)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get loocations from Primero with query parameters)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getLocations({\n  page: 1,\n  per: 20\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getlookups"},"getLookups"),(0,l.yg)("p",null,"getLookups(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get lookups from Primero"),(0,l.yg)("p",null,"Use this function to get a paginated list of all lookups that are accessible to this user from Primero.\nNote: You can specify a ",(0,l.yg)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,l.yg)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1)"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get lookups from Primero with query parameters)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getLookups({\n  per: 10000,\n  page: 5\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getreferrals"},"getReferrals"),(0,l.yg)("p",null,"getReferrals(params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get referrals for a specific case in Primero"),(0,l.yg)("p",null,"Use this function to get the list of referrals of one case from Primero.\nThe search can be done using either ",(0,l.yg)("inlineCode",{parentName:"p"},"record id")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"case id"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an externalId field to select the attribute to use for matching on case and an externalId value for that case.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get referrals for a case in Primero by record id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getReferrals({\n  externalId: "record_id",\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get referrals for a case in Primero by case id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},' getReferrals({\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"login"},"login"),(0,l.yg)("p",null,"login(state) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Logs in to Primero."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State")),(0,l.yg)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"login(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"queryhandler"},"queryHandler"),(0,l.yg)("p",null,"queryHandler(state, params, callback) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Execute custom query"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function"))))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"updatecase"},"updateCase"),(0,l.yg)("p",null,"updateCase(id, params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Update an existing case in Primero"),(0,l.yg)("p",null,"Use this function to update an existing case from Primero.\nIn this implementation, the function uses a case ID to check for the case to update,\nThen merge the values submitted in this call into an existing case.\nFields not specified in this request will not be modified.\nFor nested subform fields, the subform arrays will be recursively merged,\nkeeping both the existing values and appending the new"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A case ID to use for the update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Update case for a specific case id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'updateCase("6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz", {\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Fiona Edgemont",\n  },\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"updatereferral"},"updateReferral"),(0,l.yg)("p",null,"updateReferral(params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Update a single referral for a specific case in Primero"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an caseExternalId value to use, the id and the referral id to update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Update referral by record id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'updateReferral({\n  caseExternalId: "record_id",\n  id: "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n  caseId: "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n  data: (state) => state.data,\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertcase"},"upsertCase"),(0,l.yg)("p",null,"upsertCase(params, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert case to Primero"),(0,l.yg)("p",null,"Use this function to update an existing case from Primero or to create it otherwise.\nIn this implementation, we first fetch the list of cases,\nthen we check if the case exist before choosing the right operation to do."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an externalIds and some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Upsert case for a specific case id)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsertCase({\n  externalIds: ["case_id"],\n  data: state => ({\n    age: 20,\n    sex: "male",\n    name: "Alex",\n    status: "open",\n    case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n  }),\n});\n')),(0,l.yg)("hr",null))}u.isMDXComponent=!0}}]);