"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[68911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Timeout to create a delay",sidebar_label:"\ud83d\udcdc Timeout to create a delay",id:"timeout",keywords:["library","job","expression","http","alterState","get"]},i=void 0,l={unversionedId:"jobs/auto/timeout",id:"jobs/auto/timeout",title:"Timeout to create a delay",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/timeout.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/timeout",permalink:"/library/jobs/auto/timeout",draft:!1,tags:[],version:"current",frontMatter:{title:"Timeout to create a delay",sidebar_label:"\ud83d\udcdc Timeout to create a delay",id:"timeout",keywords:["library","job","expression","http","alterState","get"]},sidebar:"library",previous:{title:"Request Vitas Sync",permalink:"/library/jobs/auto/Request-Vitas-Sync-2021-05-11"},next:{title:"\ud83d\udcdc Using async and array.map",permalink:"/library/jobs/auto/async-and-array-dot-map"}},p={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Timeout to create a delay"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// To properly use a timeout, wrap it in a promise. This job has two operations\n// and it executes the get(...) operation after the alterState(...) operation\n// waits for 4000ms.\nalterState(state => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('wait, and then resolve');\n      resolve(state);\n    }, 4000);\n  });\n});\n\nget('https://jsonplaceholder.typicode.com/todos/1');\n\n")))}c.isMDXComponent=!0}}]);