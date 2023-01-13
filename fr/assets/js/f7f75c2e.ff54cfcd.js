"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[84784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(a),k=n,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return a?r.createElement(m,l(l({ref:t},s),{},{components:a})):r.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},99432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={title:"progres@1.2.0",id:"progres-docs",keywords:["adaptor","progres","postData"]},l=void 0,p={unversionedId:"packages/progres-docs",id:"packages/progres-docs",title:"progres@1.2.0",description:"Functions",source:"@site/adaptors/packages/progres-docs.md",sourceDirName:"packages",slug:"/packages/progres-docs",permalink:"/fr/adaptors/packages/progres-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"progres@1.2.0",id:"progres-docs",keywords:["adaptor","progres","postData"]},sidebar:"adaptors",previous:{title:"primero developer readme",permalink:"/fr/adaptors/packages/primero-readme"},next:{title:"progres changelog",permalink:"/fr/adaptors/packages/progres-changelog"}},c={},i=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"postData(params, callback) \u21d2 <code>Operation</code>",id:"postdataparams-callback--operation",level:2}],s={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,n.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#postData"},"postData(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Make a POST request with a certificate"))),(0,n.kt)("a",{name:"execute"}),(0,n.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"postData"}),(0,n.kt)("h2",{id:"postdataparams-callback--operation"},"postData(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Make a POST request with a certificate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"Url, Headers and Body parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) A callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"postData({\n url: urlDTP,\n body: obj,\n headers: {\n   'Ocp-Apim-Subscription-Key': configuration['Ocp-Apim-Subscription-Key'],\n },\n agentOptions: {\n   key,\n   cert,\n },\n}, callback)(state)\n")))}u.isMDXComponent=!0}}]);