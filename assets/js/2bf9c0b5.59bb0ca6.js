"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[86984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(s,".").concat(b)]||u[b]||c[b]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},10234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Load to DB",sidebar_label:"Load to DB",id:"Load-to-DB-2022-05-16",keywords:["library","job","expression","postgresql","dataValue","upsert"]},l=void 0,i={unversionedId:"library/jobs/auto/Load-to-DB-2022-05-16",id:"library/jobs/auto/Load-to-DB-2022-05-16",title:"Load to DB",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Load-to-DB-2022-05-16.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Load-to-DB-2022-05-16",permalink:"/adaptors/library/jobs/auto/Load-to-DB-2022-05-16",draft:!1,tags:[],version:"current",frontMatter:{title:"Load to DB",sidebar_label:"Load to DB",id:"Load-to-DB-2022-05-16",keywords:["library","job","expression","postgresql","dataValue","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Using findValue with an array of data",permalink:"/adaptors/library/jobs/auto/async-findValue"},next:{title:"Load / Upsert Data into PostgreSQL",permalink:"/adaptors/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Load to DB"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.3.3"},(0,n.kt)("inlineCode",{parentName:"a"},"v3.3.3"))),(0,n.kt)("li",{parentName:"ul"},"Created 7 months ago"),(0,n.kt)("li",{parentName:"ul"},"Updated 6 months ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"upsert")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\nupsert('patient', 'ON CONSTRAINT patient_pk', {\n  patient_id: dataValue('data.patient_name'),\n  patient_name: dataValue('data.patient_name'),\n  village_name: dataValue('data.village_name'),\n  last_menstrual_period: dataValue('data.last_menstrual_period'),\n  expected_delivery_date: dataValue('data.expected_delivery_date'),\n  children_alive: dataValue('data.children_alive'),\n  living_children: dataValue('data.living_children'),\n  feeling_sick: dataValue('data.feeling_sick'),\n  total_children: dataValue('data.Total_children'),\n  risk_level: dataValue('data.Risk_level')\n  \n});\n")))}u.isMDXComponent=!0}}]);