"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34290],{76625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={title:"Upsert Intervention Notes",sidebar_label:"\u2728 Upsert Intervention Notes",id:"Upsert-Intervention-Notes-2021-04-28",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert"]},i=void 0,s={unversionedId:"library/jobs/auto/Upsert-Intervention-Notes-2021-04-28",id:"library/jobs/auto/Upsert-Intervention-Notes-2021-04-28",title:"Upsert Intervention Notes",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Intervention-Notes-2021-04-28.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Intervention-Notes-2021-04-28",permalink:"/adaptors/library/jobs/auto/Upsert-Intervention-Notes-2021-04-28",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Intervention Notes",sidebar_label:"\u2728 Upsert Intervention Notes",id:"Upsert-Intervention-Notes-2021-04-28",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert"]},sidebar:"adaptors",previous:{title:"Upsert Confirm Services Received",permalink:"/adaptors/library/jobs/auto/Upsert-Confirm-Services-Received-2021-06-14"},next:{title:"Upsert Register Event",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Event-2021-04-30"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Upsert Intervention Notes"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,a.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,a.yg)("li",{parentName:"ul"},"Created almost 4 years ago"),(0,a.yg)("li",{parentName:"ul"},"Updated almost 3 years ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"78")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"upsert")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"//openfn.org source \nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  fields(\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    //field('Name', dataValue('form.intervention_name')),\n    field('Notes__c', dataValue('form.intervention_notes_to_save')),\n    relationship('RecordType', 'Name', 'Intervention')\n  )\n);\n")))}d.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);