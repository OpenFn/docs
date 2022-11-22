"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(a),s=n,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"fhir@1.1.1",id:"fhir-docs",keywords:["adaptor","fhir","create","createTransactionBundle"]},o=void 0,p={unversionedId:"packages/fhir-docs",id:"packages/fhir-docs",title:"fhir@1.1.1",description:"Adaptor",source:"@site/adaptors/packages/fhir-docs.md",sourceDirName:"packages",slug:"/packages/fhir-docs",permalink:"/adaptors/packages/fhir-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir@1.1.1",id:"fhir-docs",keywords:["adaptor","fhir","create","createTransactionBundle"]},sidebar:"library",previous:{title:"facebook developer readme",permalink:"/adaptors/packages/facebook-readme"},next:{title:"fhir changelog",permalink:"/adaptors/packages/fhir-changelog"}},c={},i=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute(operations) \u21d2 <code>Operation</code>",id:"adaptorexecuteoperations--operation",level:3},{value:"Adaptor.create(path, params, callback) \u21d2 <code>Operation</code>",id:"adaptorcreatepath-params-callback--operation",level:3},{value:"Adaptor.createTransactionBundle(params, callback) \u21d2 <code>Operation</code>",id:"adaptorcreatetransactionbundleparams-callback--operation",level:3}],d={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute(operations)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.create"},".create(path, params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.createTransactionBundle"},".createTransactionBundle(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation"))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecuteoperations--operation"},"Adaptor.execute(operations) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.create"}),(0,n.kt)("h3",{id:"adaptorcreatepath-params-callback--operation"},"Adaptor.create(path, params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Creates a resource in a destination system using a POST request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'create("/endpoint", {"foo": "bar"})\n')),(0,n.kt)("a",{name:"module_Adaptor.createTransactionBundle"}),(0,n.kt)("h3",{id:"adaptorcreatetransactionbundleparams-callback--operation"},"Adaptor.createTransactionBundle(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Creates a transactionBundle for HAPI FHIR"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'createTransactionBundle( {"entry": [{...},, {...}]})\n')))}u.isMDXComponent=!0}}]);