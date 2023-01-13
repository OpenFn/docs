"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[10309],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=c(a),k=o,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(d,l(l({ref:e},s),{},{components:a})):n.createElement(d,l({ref:e},s))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:o,l[1]=p;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},96266:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"kobotoolbox@1.2.0",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getForms"]},l=void 0,p={unversionedId:"packages/kobotoolbox-docs",id:"packages/kobotoolbox-docs",title:"kobotoolbox@1.2.0",description:"Functions",source:"@site/adaptors/packages/kobotoolbox-docs.md",sourceDirName:"packages",slug:"/packages/kobotoolbox-docs",permalink:"/fr/adaptors/packages/kobotoolbox-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"kobotoolbox@1.2.0",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getForms"]},sidebar:"adaptors",previous:{title:"Kobo Toolbox",permalink:"/fr/adaptors/kobotoolbox"},next:{title:"GET Data From KoboToolbox",permalink:"/fr/adaptors/library/jobs/auto/GET-Data-From-KoboToolbox-2022-03-22"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"getForms(params, callback) \u21d2 <code>Operation</code>",id:"getformsparams-callback--operation",level:2},{value:"getSubmissions(params, callback) \u21d2 <code>Operation</code>",id:"getsubmissionsparams-callback--operation",level:2},{value:"getDeploymentInfo(params, callback) \u21d2 <code>Operation</code>",id:"getdeploymentinfoparams-callback--operation",level:2}],s={toc:c};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("dl",null,(0,o.kt)("dt",null,(0,o.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,o.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,o.kt)("dt",null,(0,o.kt)("a",{href:"#getForms"},"getForms(params, callback)")," \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Make a request to get the list of forms")),(0,o.kt)("dt",null,(0,o.kt)("a",{href:"#getSubmissions"},"getSubmissions(params, callback)")," \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Get submissions for a specific form")),(0,o.kt)("dt",null,(0,o.kt)("a",{href:"#getDeploymentInfo"},"getDeploymentInfo(params, callback)")," \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("dd",null,(0,o.kt)("p",null,"Get deployment information for a specific form"))),(0,o.kt)("a",{name:"execute"}),(0,o.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,o.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"operations"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Operations")),(0,o.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,o.kt)("a",{name:"getForms"}),(0,o.kt)("h2",{id:"getformsparams-callback--operation"},"getForms(params, callback) \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("p",null,"Make a request to get the list of forms"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"object")),(0,o.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form list")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getForms({}, state => {\n   console.log(state.data);\n   return state;\n});\n")),(0,o.kt)("a",{name:"getSubmissions"}),(0,o.kt)("h2",{id:"getsubmissionsparams-callback--operation"},"getSubmissions(params, callback) \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("p",null,"Get submissions for a specific form"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"object")),(0,o.kt)("td",{parentName:"tr",align:null},"Form Id and data to make the fetch or filter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form submissions")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getSubmissions({formId: 'aXecHjmbATuF6iGFmvBLBX'}, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,o.kt)("a",{name:"getDeploymentInfo"}),(0,o.kt)("h2",{id:"getdeploymentinfoparams-callback--operation"},"getDeploymentInfo(params, callback) \u21d2 ",(0,o.kt)("code",null,"Operation")),(0,o.kt)("p",null,"Get deployment information for a specific form"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"object")),(0,o.kt)("td",{parentName:"tr",align:null},"Form Id and data to make the fetch or filter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form deployment information")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getDeploymentInfo({formId: 'aXecHjmbATuF6iGFmvBLBX'}, state => {\n  console.log(state.data);\n  return state;\n});\n")))}u.isMDXComponent=!0}}]);