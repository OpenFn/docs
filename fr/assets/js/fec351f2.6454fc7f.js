"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[86904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),y=n,b=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},75687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Request Vitas Sync",sidebar_label:"Request Vitas Sync",id:"Request-Vitas-Sync-2021-05-11",keywords:["library","job","expression","http","alterState","dataPath","dataValue","each","post"]},i=void 0,s={unversionedId:"library/jobs/auto/Request-Vitas-Sync-2021-05-11",id:"library/jobs/auto/Request-Vitas-Sync-2021-05-11",title:"Request Vitas Sync",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Request-Vitas-Sync-2021-05-11.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Request-Vitas-Sync-2021-05-11",permalink:"/fr/adaptors/library/jobs/auto/Request-Vitas-Sync-2021-05-11",draft:!1,tags:[],version:"current",frontMatter:{title:"Request Vitas Sync",sidebar_label:"Request Vitas Sync",id:"Request-Vitas-Sync-2021-05-11",keywords:["library","job","expression","http","alterState","dataPath","dataValue","each","post"]},sidebar:"adaptors",previous:{title:"1. Get CommCare Forms (Bulk Extract)",permalink:"/fr/adaptors/library/jobs/auto/1-Get-CommCare-Forms-Bulk-Extract-2021-04-08"},next:{title:"Failed Payment Notification",permalink:"/fr/adaptors/library/jobs/auto/Failed-Payment-Notification-2021-04-23"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Request Vitas Sync"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,n.kt)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,n.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,n.kt)("li",{parentName:"ul"},"Updated about 1 year ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"post")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  const vitasSystemsToCheck = [\n    'vitas-1',\n    'thatMinistry-vitas-7',\n    '3',\n    '4',\n    '5',\n  ]\n  return { ...state, data: { vitasSystemsToCheck } };\n});\n\neach(\n  dataPath('vitasSystemsToCheck[*]'),\n  post(state.configuration.inboxUrl, {\n    body: { \"db\": dataValue('database-id') },\n  })\n);\n")))}c.isMDXComponent=!0}}]);