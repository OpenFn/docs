"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[22708],{20516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={title:"DHIS2 Events",sidebar_label:"DHIS2 Events",id:"DHIS2-Events-2016-01-27",keywords:["library","job","expression","dhis2","create","dataValue","Math"]},i=void 0,s={unversionedId:"library/jobs/auto/DHIS2-Events-2016-01-27",id:"library/jobs/auto/DHIS2-Events-2016-01-27",title:"DHIS2 Events",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/DHIS2-Events-2016-01-27.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/DHIS2-Events-2016-01-27",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-2016-01-27",draft:!1,tags:[],version:"current",frontMatter:{title:"DHIS2 Events",sidebar_label:"DHIS2 Events",id:"DHIS2-Events-2016-01-27",keywords:["library","job","expression","dhis2","create","dataValue","Math"]},sidebar:"adaptors",previous:{title:"Load to DHIS2",permalink:"/adaptors/library/jobs/auto/Load-to-DHIS2-2023-07-17"},next:{title:"Create TEI (dhis2)",permalink:"/adaptors/library/jobs/auto/Create-TEI-dhis2-2021-03-22"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: DHIS2 Events"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v3.0.4"},(0,r.yg)("inlineCode",{parentName:"a"},"v3.0.4"))),(0,r.yg)("li",{parentName:"ul"},"Created over 8 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated about 1 month ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Math")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"create('trackedEntityInstances', {\n  orgUnit: 'DiszpKrYNg8',\n  trackedEntityType: 'Zy2SEgA61ys',\n  attributes: [\n    {\n      attribute: 'flGbXLXCrEo', // system case ID\n      value: Math.random(),\n    },\n  ],\n});\n\n// create('trackedEntityInstances', {\n//   trackedEntityType: 'nEenWmSyUEp', // a person\n//   orgUnit: 'g8upMTyEZGZ', // Njandama MCHP\n//   attributes: [\n//     {\n//       attribute: 'w75KJ2mc4zz', // attribute id for first name\n//       value: dataValue('case.firstName')(state), // data from submission\n//     },\n//     {\n//       attribute: 'zDhUuAYrxNC', // attribute id for last name\n//       value: dataValue('case.lastName')(state), // data from another submission field\n//     },\n//   ],\n//   enrollments: [\n//     {\n//       orgUnit: 'g8upMTyEZGZ', // Njandama MCHP\n//       program: 'IpHINAT79UW', // enroll in Child Program\n//       enrollmentDate: new Date().toISOString().slice(0, 10), // some custom javascript\n//       incidentDate: state.data.metadata.timeStart.slice(0, 10), // more custom javascript\n//     },\n//   ],\n// });\n")))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),y=r,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);