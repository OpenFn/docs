"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[93133],{53535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={title:"surveycto@2.2.3",id:"surveycto-docs",keywords:["adaptor","surveycto","cursor","fetchSubmissions","request"]},o=void 0,s={unversionedId:"packages/surveycto-docs",id:"packages/surveycto-docs",title:"surveycto@2.2.3",description:"cursor(value, options)",source:"@site/adaptors/packages/surveycto-docs.md",sourceDirName:"packages",slug:"/packages/surveycto-docs",permalink:"/adaptors/packages/surveycto-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"surveycto@2.2.3",id:"surveycto-docs",keywords:["adaptor","surveycto","cursor","fetchSubmissions","request"]},sidebar:"adaptors",previous:{title:"SurveyCTO",permalink:"/adaptors/surveycto"},next:{title:"Config for surveycto",permalink:"/adaptors/packages/surveycto-configuration-schema"}},g={},p=[{value:"Functions",id:"functions",level:2},{value:"cursor",id:"cursor",level:3},{value:"fetchSubmissions",id:"fetchsubmissions",level:3},{value:"request",id:"request",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"FetchSubmissionOptions",id:"fetchsubmissionoptions",level:3},{value:"RequestOptions",id:"requestoptions",level:3}],u={toc:p},i="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(i,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#cursor"},"cursor(value, options)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#fetchsubmissions"},"fetchSubmissions(formId, options, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#request"},"request(path, params, callback)"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#chunk"},"chunk()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#parsecsv"},"parseCsv()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"cursor"},"cursor"),(0,r.yg)("p",null,(0,r.yg)("code",null,"cursor(value, options) \u21d2 Operation")),(0,r.yg)("p",null,"Sets ",(0,r.yg)("inlineCode",{parentName:"p"},"state.cursor")," to a SurveyCTO timestamp string (",(0,r.yg)("inlineCode",{parentName:"p"},"MMM dd, yyy h:mm:ss a"),").\nThis supports natural language dates like ",(0,r.yg)("inlineCode",{parentName:"p"},"now"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"today"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"yesterday"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"n hours ago"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"n days ago"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"start"),",\nwhich will be converted into timestamp strings.\nSee the usage guide at ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/jobs/job-writing-guide#using-cursors"},"https://docs.openfn.org/documentation/jobs/job-writing-guide#using-cursors")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"any")),(0,r.yg)("td",{parentName:"tr",align:null},"the cursor value. Usually an ISO date, natural language date, or page number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"options to control the cursor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options.key"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"set the cursor key. Will persist through the whole run.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options.defaultValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"any")),(0,r.yg)("td",{parentName:"tr",align:null},"the value to use if value is falsy")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options.format"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"custom formatter for the final cursor value")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Use a cursor from state if present, or else use the default value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"cursor('today')\nfetchSubmissions('test', { date: $.cursor });\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"fetchsubmissions"},"fetchSubmissions"),(0,r.yg)("p",null,(0,r.yg)("code",null,"fetchSubmissions(formId, options, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Fetch form submissions."),(0,r.yg)("p",null,"If a date filter is provided, it will be  converted internally to the surveyCTO ",(0,r.yg)("inlineCode",{parentName:"p"},"MMM dd, yyy h:mm:ss")," format (in UTC time)."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"formId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Form id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#fetchsubmissionoptions"},(0,r.yg)("code",null,"FetchSubmissionOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Form submission date, format, status parameters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Fetch all form submissions"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions('test');\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:"),"  With SurveyCTO date format (UTC)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions('test', { date: 'Apr 18, 2024 6:26:21 AM' });\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Using a rolling cursor "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"cursor((state) => state.cursor, { defaultValue: 'today' });\nfetchSubmissions('test', { date: (state) => state.cursor, format: 'csv' });\ncursor('now');\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:"),"  Formatting the results to CSV String"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions('test', { format: 'csv' });\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:"),"  With reviewStatus filter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions('test', { status: 'approved|rejected' });\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:"),"  With a callback function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'test',\n  {\n    date: 'Apr 18, 2024 6:26:21 AM',\n  },\n  state => {\n    console.log('Hello from the callback!');\n    return state;\n  }\n);\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"request"},"request"),(0,r.yg)("p",null,(0,r.yg)("code",null,"request(path, params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Make a request in SurveyCTO API"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Query, body and method parameters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'request("/anEndpoint", {\n  method: "POST",\n  query: { foo: "bar", a: 1 },\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"fetchsubmissionoptions"},"FetchSubmissionOptions"),(0,r.yg)("p",null,"Options provided to ",(0,r.yg)("inlineCode",{parentName:"p"},"fetchSubmissions()")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[date]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"0")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetch only submissions from this timestamp. Acccepts SuvreyCTO date strings, unix and epoch timestamps, and ISO dates. By default, all submissions will be retrieved.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[format]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,'"',"json",'"')),(0,r.yg)("td",{parentName:"tr",align:null},"Format the submission data type as  ",(0,r.yg)("inlineCode",{parentName:"td"},"csv")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"json"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[status]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Review status. Can be either, ",(0,r.yg)("inlineCode",{parentName:"td"},"approved"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"rejected"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"pending")," or combine eg `approved")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,r.yg)("p",null,"Options provided to request()"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[headers]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"An object of headers parameters.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[body]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Body data to append to the request.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[query]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[method]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,'"',"GET",'"')),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP method to use.")))),(0,r.yg)("hr",null))}y.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=p(a),d=r,m=i["".concat(g,".").concat(d)]||i[d]||y[d]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);