"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8911],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Timeout to create a delay",sidebar_label:"\ud83d\udcdc Timeout to create a delay",id:"timeout",keywords:["library","job","expression","http","alterState","get"]},u=void 0,p={unversionedId:"jobs/auto/timeout",id:"jobs/auto/timeout",title:"Timeout to create a delay",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/timeout.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/timeout",permalink:"/library/jobs/auto/timeout",tags:[],version:"current",frontMatter:{title:"Timeout to create a delay",sidebar_label:"\ud83d\udcdc Timeout to create a delay",id:"timeout",keywords:["library","job","expression","http","alterState","get"]},sidebar:"library",previous:{title:"Request Vitas Sync",permalink:"/library/jobs/auto/Request-Vitas-Sync-2021-05-11"},next:{title:"\ud83d\udcdc Using async and array.map",permalink:"/library/jobs/auto/async-and-array-dot-map"}},c=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Timeout to create a delay"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"get")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// To properly use a timeout, wrap it in a promise. This job has two operations\n// and it executes the get(...) operation after the alterState(...) operation\n// waits for 4000ms.\nalterState(state => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('wait, and then resolve');\n      resolve(state);\n    }, 4000);\n  });\n});\n\nget('https://jsonplaceholder.typicode.com/todos/1');\n\n")))}m.isMDXComponent=!0}}]);