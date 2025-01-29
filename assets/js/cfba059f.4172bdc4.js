"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87791],{77929:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(58168),n=(a(96540),a(15680));const o={title:"Upsert Team or Group Name",sidebar_label:"Upsert Team or Group Name",id:"Upsert-Team-or-Group-Name-2021-04-28",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert"]},i=void 0,l={unversionedId:"library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28",id:"library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28",title:"Upsert Team or Group Name",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28",permalink:"/adaptors/library/jobs/auto/Upsert-Team-or-Group-Name-2021-04-28",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Team or Group Name",sidebar_label:"Upsert Team or Group Name",id:"Upsert-Team-or-Group-Name-2021-04-28",keywords:["library","job","expression","salesforce","dataValue","field","fields","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"},next:{title:"Upsert Service Referral Followup",permalink:"/adaptors/library/jobs/auto/Upsert-Service-Referral-Followup-2021-04-30"}},p={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:s},m="wrapper";function c(e){let{components:r,...a}=e;return(0,n.yg)(m,(0,t.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Upsert Team or Group Name"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,n.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,n.yg)("li",{parentName:"ul"},"Created almost 4 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated about 2 hours ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// Upsert event by unique 'Name'\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  fields(\n    field(\n      'Class_Group_Team__c',\n      dataValue('form.question_group.group__team_name')\n    ),\n    relationship('RecordType', 'Name', 'Intervention'), \n    field(\n      'CommCare_Case_ID__c',\n      dataValue('form.case.@case_id')\n    ),\n  )\n);\n")))}c.isMDXComponent=!0},15680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),s=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),y=n,d=m["".concat(p,".").concat(y)]||m[y]||c[y]||o;return a?t.createElement(d,i(i({ref:r},u),{},{components:a})):t.createElement(d,i({ref:r},u))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);