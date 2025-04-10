"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33254],{68121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={title:"pesapal@1.0.0",id:"pesapal-docs",keywords:["adaptor","pesapal","get","post","request"]},p=void 0,o={unversionedId:"packages/pesapal-docs",id:"packages/pesapal-docs",title:"pesapal@1.0.0",description:"get(path, options)",source:"@site/adaptors/packages/pesapal-docs.md",sourceDirName:"packages",slug:"/packages/pesapal-docs",permalink:"/adaptors/packages/pesapal-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"pesapal@1.0.0",id:"pesapal-docs",keywords:["adaptor","pesapal","get","post","request"]},sidebar:"adaptors",previous:{title:"openspp developer readme",permalink:"/adaptors/packages/openspp-readme"},next:{title:"Config for pesapal",permalink:"/adaptors/packages/pesapal-configuration-schema"}},g={},s=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:3},{value:"post",id:"post",level:3},{value:"request",id:"request",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"RequestOptions",id:"requestoptions",level:3}],y={toc:s},i="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(i,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, options)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#post"},"post(path, body, options)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#request"},"request(method, path, body, options)"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, options) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request to Pesapal"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request options")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the Pesapal server, including headers, statusCode, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get all registered IPN URLs for a merchant"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('URLSetup/GetIpnList')\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"post"},"post"),(0,r.yg)("p",null,(0,r.yg)("code",null,"post(path, body, options) \u21d2 Operation")),(0,r.yg)("p",null,"Make a POST request to Pesapal"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object which will be attached to the POST body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request options")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the Pesapal server, including headers, statusCode, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Send an order request "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'post(\'Transactions/SubmitOrderRequest\', \n    {\n        "id": "TEST-05",\n        "currency": "KES",\n        "amount": "1",\n        "description": "Testing",\n        "callback_url": "https://www.myapplication.com/response-page",\n        "notification_id": "fe078e53-78da-4a83-aa89-e7ded5c456e6",\n        "billing_address": {\n            "email_address": "john.doe@example.com",\n            "phone_number": "0712xxxxxx",\n            "country_code": "",\n            "first_name": "Doe",\n            "middle_name": "",\n            "last_name": "John",\n            "line_1": "",\n            "line_2": "",\n            "city": "",\n            "state": "",\n            "postal_code": "",\n            "zip_code": ""\n        }\n})\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"request"},"request"),(0,r.yg)("p",null,(0,r.yg)("code",null,"request(method, path, body, options) \u21d2 Operation")),(0,r.yg)("p",null,"Make a general HTTP request to Pesapal"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP method to use")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object which will be attached to the POST body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request options")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the Pesapal server, including headers, statusCode, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Register IPN URL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'request("POST", "URLSetup/RegisterIPN", {\n  "url": "https://www.myapplication.com/ipn",\n  "ipn_notification_type": "GET"\n });\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get transaction status"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"request('GET', 'GetTransactionStatus', {}, {query:{\n  orderTrackingId: '123456'\n}})\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,r.yg)("p",null,"Options provided to the Pesapal request"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")," ","|"," ",(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"body data to append to the request. JSON will be converted to a string.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"errors"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Map of errorCodes -> error messages, ie, ",(0,r.yg)("inlineCode",{parentName:"td"},"{ 404: 'Resource not found;' }"),". Pass ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," to suppress errors for this code.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"headers"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"An object of headers to append to the request.")))),(0,r.yg)("hr",null))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},y=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),i=s(a),u=r,m=i["".concat(g,".").concat(u)]||i[u]||d[u]||l;return a?n.createElement(m,p(p({ref:t},y),{},{components:a})):n.createElement(m,p({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[i]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);