(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4325],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68654:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i={title:"Using async and array.map",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post"]},s={unversionedId:"jobs/auto/async-and-array-dot-map",id:"jobs/auto/async-and-array-dot-map",isDocsHomePage:!1,title:"Using async and array.map",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/async-and-array-dot-map.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/async-and-array-dot-map",permalink:"/library/jobs/auto/async-and-array-dot-map",version:"current",sidebar_label:"\ud83d\udcdc Using async and array.map",frontMatter:{title:"Using async and array.map",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post"]},sidebar:"library",previous:{title:"Request Vitas Sync",permalink:"/library/jobs/auto/Request Vitas Sync-2021-05-11"},next:{title:"Chaining HTTP Requests",permalink:"/library/jobs/auto/complex-http-request-chains"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Using async and array.map"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"post")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n\n  console.log('First we needed to break large arrays into smaller chunks.');\n  function chunk(arr, chunkSize) {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize)\n      R.push(arr.slice(i, i + chunkSize));\n    return R;\n  }\n\n  const clinicSets = chunk(state.data.Clinic, 10);\n  const patientSets = chunk(state.data.Patient, 10);\n  const visitSets = chunk(state.data.Visit, 10);\n  const deletedVisitSets = chunk(state.data.VisitDeleted, 10);\n\n  console.log('Then we define a bunch of different async functions.');\n  const postClinics = async cs => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: cs },\n    })(state);\n  };\n\n  const postPatients = async ps => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: ps },\n    })(state);\n  };\n\n  const postVisits = async vs => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: vs },\n    })(state);\n  };\n\n  const postDeletedVisits = async dvs => {\n    return post(state.configuration.inboxUrl, {\n      body: { deletedVisits: dvs },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...clinicSets.map(item => postClinics(item)),\n      ...patientSets.map(item => postPatients(item)),\n      ...visitSets.map(item => postVisits(item)),\n      ...deletedVisitSets.map(item => postDeletedVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I show up AFTER those async functions are resolved.');\n  return state;\n});\n\n")))}p.isMDXComponent=!0}}]);