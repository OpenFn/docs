(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7127],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6345:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i={title:"Extract Vitas Data",sidebar_label:"Extract Vitas Data",id:"Extract Vitas Data-2021-05-11",keywords:["library","job","expression","mssql","sql"]},s={unversionedId:"jobs/auto/Extract Vitas Data-2021-05-11",id:"jobs/auto/Extract Vitas Data-2021-05-11",isDocsHomePage:!1,title:"Extract Vitas Data",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Extract Vitas Data-2021-05-11.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Extract Vitas Data-2021-05-11",permalink:"/fr/library/jobs/auto/Extract Vitas Data-2021-05-11",version:"current",sidebar_label:"Extract Vitas Data",frontMatter:{title:"Extract Vitas Data",sidebar_label:"Extract Vitas Data",id:"Extract Vitas Data-2021-05-11",keywords:["library","job","expression","mssql","sql"]},sidebar:"library",previous:{title:"CommCare to Azure Sql",permalink:"/fr/library/jobs/auto/CommCare to Azure Sql-2020-01-27"},next:{title:"01b/ Query new person record",permalink:"/fr/library/jobs/auto/01b- Query new person record-2019-12-13"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Extract Vitas Data"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mssql"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-mssql"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mssql/releases/tag/v2.3.3"},(0,o.kt)("inlineCode",{parentName:"a"},"v2.3.3"))),(0,o.kt)("li",{parentName:"ul"},"Created 7 days ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 7 days ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sql")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"sql(`select * from receipts where updated_at > ${state.meta.lastSuccess}`);\n\n")))}u.isMDXComponent=!0}}]);