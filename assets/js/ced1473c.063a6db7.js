"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48155],{2476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const o={title:"Chaining synchronous http requests",sidebar_label:"\ud83d\udcdc Chaining synchronous http requests",id:"synchronous-http-request",keywords:["library","job","expression","http","post","async","await"]},s=void 0,i={unversionedId:"library/jobs/auto/synchronous-http-request",id:"library/jobs/auto/synchronous-http-request",title:"Chaining synchronous http requests",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/synchronous-http-request.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/synchronous-http-request",permalink:"/adaptors/library/jobs/auto/synchronous-http-request",draft:!1,tags:[],version:"current",frontMatter:{title:"Chaining synchronous http requests",sidebar_label:"\ud83d\udcdc Chaining synchronous http requests",id:"synchronous-http-request",keywords:["library","job","expression","http","post","async","await"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Timeout to create a delay",permalink:"/adaptors/library/jobs/auto/timeout"},next:{title:"1 Get CommCare Forms Bulk Extract",permalink:"/adaptors/library/jobs/auto/1-Get-CommCare-Forms-Bulk-Extract-2021-04-08"}},l={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:u},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\ud83d\udcdc ",(0,a.yg)("em",null,"This job is an official example from OpenFn.")),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Chaining synchronous http requests"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.yg)("inlineCode",{parentName:"a"},"latest"))),(0,a.yg)("li",{parentName:"ul"},"Created date unknown"),(0,a.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"100")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"post"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"async"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"await")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"fn(async state => {\n  const { Patient, Visit } = state.data;\n\n  console.log('Here we break large arrays into smaller chunks.');\n  const chunk = (arr, chunkSize) => {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize) R.push(arr.slice(i, i + chunkSize));\n    return R;\n  };\n\n  const patientSets = chunk(Patient, 10);\n  const visitSets = chunk(Visit, 10);\n\n  console.log('Patient sets:', patientSets.length);\n  console.log('Visit sets:', visitSets.length);\n\n  const visitChunks = [];\n  const patientChunks = [];\n\n  patientSets.forEach(sets => {\n    const data = {\n      Visit: [],\n      Patient: sets,\n    };\n    patientChunks.push(data);\n  });\n\n  visitSets.forEach(sets => {\n    const data = {\n      Visit: sets,\n      Patient: [],\n    };\n    visitChunks.push(data);\n  });\n\n  let countInbox = 0;\n  console.log('Then we define our async function that make multiple posts requests,');\n  console.log('each after a fix period of time.');\n  const postToInbox = async data => {\n    countInbox++;\n    console.log(`${countInbox} request to inbox`);\n\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await post(state.configuration.inboxUrl, { body: data })(state);\n  };\n\n  console.log('For each one of our chunks, we send one by one awaiting response.');\n  for (const patient of patientChunks) {\n    await postToInbox(patient);\n  }\n  for (const visit of visitChunks) {\n    await postToInbox(visit);\n  }\n\n  return { ...state, patientChunks, visitChunks };\n});\n\n")))}y.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,f=c["".concat(l,".").concat(h)]||c[h]||y[h]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);