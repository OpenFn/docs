"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[75484],{21348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const l={title:"senaite@1.0.0",id:"senaite-docs",keywords:["adaptor","senaite","request"]},o=void 0,p={unversionedId:"packages/senaite-docs",id:"packages/senaite-docs",title:"senaite@1.0.0",description:"request(method, path, options)",source:"@site/adaptors/packages/senaite-docs.md",sourceDirName:"packages",slug:"/packages/senaite-docs",permalink:"/adaptors/packages/senaite-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"senaite@1.0.0",id:"senaite-docs",keywords:["adaptor","senaite","request"]},sidebar:"adaptors",previous:{title:"satusehat developer readme",permalink:"/adaptors/packages/satusehat-readme"},next:{title:"Config for senaite",permalink:"/adaptors/packages/senaite-configuration-schema"}},s={},g=[{value:"Functions",id:"functions",level:2},{value:"request",id:"request",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"HttpState",id:"httpstate",level:3},{value:"RequestOptions",id:"requestoptions",level:3}],i={toc:g},y="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#request"},"request(method, path, options)"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"request"},"request"),(0,r.yg)("p",null,(0,r.yg)("code",null,"request(method, path, options) \u21d2 Operation")),(0,r.yg)("p",null,"Make a general HTTP request"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP method to use")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request options")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'request("GET", "catalogs");\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"httpstate"},"HttpState"),(0,r.yg)("p",null,"State object"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,r.yg)("p",null,"Options provided to the HTTP request"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")," ","|"," ",(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"body data to append to the request. JSON will be converted to a string (but a content-type header will not be attached to the request).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"errors"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Map of errorCodes -> error messages, ie, ",(0,r.yg)("inlineCode",{parentName:"td"},"{ 404: 'Resource not found;' }"),". Pass ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," to suppress errors for this code.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"form"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Pass a JSON object to be serialised into a multipart HTML form (as FormData) in the body.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"headers"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"An object of headers to append to the request.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parseAs"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Parse the response body as json, text or stream. By default will use the response headers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeout"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"number")),(0,r.yg)("td",{parentName:"tr",align:null},"Request timeout in ms. Default: 300 seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"TLS/SSL authentication options. See ",(0,r.yg)("a",{parentName:"td",href:"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions"},"https://nodejs.org/api/tls.html#tlscreatesecurecontextoptions"))))),(0,r.yg)("hr",null))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),y=g(a),u=r,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||l;return a?n.createElement(m,o(o({ref:t},i),{},{components:a})):n.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[y]="string"==typeof e?e:r,o[1]=p;for(var g=2;g<l;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);