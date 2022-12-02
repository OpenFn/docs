"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[30674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Merge data into child array then upsert",sidebar_label:"\ud83d\udcdc Merge data into child array then upsert",id:"upsert-many-items-in-array-with-value-outside-array",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","merge","relationship","upsert"]},o=void 0,l={unversionedId:"library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",id:"library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",title:"Merge data into child array then upsert",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",permalink:"/fr/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Merge data into child array then upsert",sidebar_label:"\ud83d\udcdc Merge data into child array then upsert",id:"upsert-many-items-in-array-with-value-outside-array",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","merge","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Handling multiple ODK repeat groups",permalink:"/fr/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"},next:{title:"TEST] Bulk Upsert Person Visit",permalink:"/fr/adaptors/library/jobs/auto/TEST-Bulk-Upsert-Person-Visit-2022-07-11"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83d\udcdc ",(0,n.kt)("em",null,"This job is an official example from OpenFn.")),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Merge data into child array then upsert"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"latest"))),(0,n.kt)("li",{parentName:"ul"},"Created date unknown"),(0,n.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"100")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"upsert")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  merge(\n    dataPath('form.ID_cards_given_to_vendor[*]'),\n    fields(\n      field('Vendor_Id', dataValue('form.ID_vendor')),\n      field('form_finished_time', dataValue('form.meta.timeEnd'))\n    )\n  ),\n  upsert(\n    'Small_Packet__c',\n    'sp_id__c',\n    fields(\n      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),\n      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),\n      field(\n        'Small_Packet_Distribution_Date__c',\n        dataValue('form_finished_time')\n      )\n    )\n  )\n);\n\n")))}d.isMDXComponent=!0}}]);