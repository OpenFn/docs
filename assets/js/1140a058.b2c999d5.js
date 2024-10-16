"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17357],{40831:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(58168),n=(r(96540),r(15680));const i={title:"Merge data into child array then upsert",sidebar_label:"\ud83d\udcdc Merge data into child array then upsert",id:"upsert-many-items-in-array-with-value-outside-array",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","merge","relationship","upsert"]},o=void 0,l={unversionedId:"library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",id:"library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",title:"Merge data into child array then upsert",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Merge data into child array then upsert",sidebar_label:"\ud83d\udcdc Merge data into child array then upsert",id:"upsert-many-items-in-array-with-value-outside-array",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","merge","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Handling multiple ODK repeat groups",permalink:"/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"},next:{title:"Upsert Register Participant",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-2021-04-28"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\ud83d\udcdc ",(0,n.yg)("em",null,"This job is an official example from OpenFn.")),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Merge data into child array then upsert"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"latest"))),(0,n.yg)("li",{parentName:"ul"},"Created date unknown"),(0,n.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"100")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"merge"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"upsert")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"each(\n  merge(\n    dataPath('form.ID_cards_given_to_vendor[*]'),\n    fields(\n      field('Vendor_Id', dataValue('form.ID_vendor')),\n      field('form_finished_time', dataValue('form.meta.timeEnd'))\n    )\n  ),\n  upsert(\n    'Small_Packet__c',\n    'sp_id__c',\n    fields(\n      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),\n      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),\n      field(\n        'Small_Packet_Distribution_Date__c',\n        dataValue('form_finished_time')\n      )\n    )\n  )\n);\n\n")))}c.isMDXComponent=!0},15680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>m});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,m=d["".concat(s,".").concat(y)]||d[y]||c[y]||i;return r?t.createElement(m,o(o({ref:a},u),{},{components:r})):t.createElement(m,o({ref:a},u))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);