(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9693],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65859:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"03/ Update Payment Status",sidebar_label:"03/ Update Payment Status",id:"03- Update Payment Status-2019-11-19",keywords:["library","job","expression","mysql","alterState"]},s={unversionedId:"jobs/auto/03- Update Payment Status-2019-11-19",id:"jobs/auto/03- Update Payment Status-2019-11-19",isDocsHomePage:!1,title:"03/ Update Payment Status",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/03- Update Payment Status-2019-11-19.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/03- Update Payment Status-2019-11-19",permalink:"/library/jobs/auto/03- Update Payment Status-2019-11-19",version:"current",sidebar_label:"03/ Update Payment Status",sidebarPosition:3,frontMatter:{title:"03/ Update Payment Status",sidebar_label:"03/ Update Payment Status",id:"03- Update Payment Status-2019-11-19",keywords:["library","job","expression","mysql","alterState"]},sidebar:"library",previous:{title:"02a/ Query DB for people to pay",permalink:"/library/jobs/auto/02a- Query DB for people to pay-2019-12-11"},next:{title:"04a/Query for job changes",permalink:"/library/jobs/auto/04a-Query for job changes-2019-12-12"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: 03/ Update Payment Status"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-mysql"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,o.kt)("li",{parentName:"ul"},"Updated about 1 year ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"sqlString(state => {\n  console.log(state.data.transactionCode);\n  return `SELECT record FROM entry WHERE string_value='${state.data.transactionCode}'`;\n});\n\nalterState(state => {\n  // Note: we pluck out on the 'RowDataResponses' from the SQL server.\n  const recordData = state.response.body.filter(x => x.record !== undefined);\n  // Get the first record\n  state.data.record = recordData[0] && recordData[0].record;\n  return state;\n});\n\nsqlString(state => {\n  return `UPDATE entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;\n});\n\nsqlString(state => {\n  return `UPDATE last_entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;\n});\n\nsqlString(state => {\n  return `UPDATE hippo_person_payments SET status='completed' where id='person_payments|${state.data.record}'`;\n});\n")))}p.isMDXComponent=!0}}]);