"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[35632],{86127:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const l={title:"Handling multiple ODK repeat groups",sidebar_label:"\ud83d\udcdc Handling multiple ODK repeat groups",id:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","lastReferenceValue","merge"]},i=void 0,o={unversionedId:"library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",id:"library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",title:"Handling multiple ODK repeat groups",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",permalink:"/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",draft:!1,tags:[],version:"current",frontMatter:{title:"Handling multiple ODK repeat groups",sidebar_label:"\ud83d\udcdc Handling multiple ODK repeat groups",id:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","lastReferenceValue","merge"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Create SMS linked to contact",permalink:"/adaptors/library/jobs/auto/Create-SMS-Linked-to-Contact-in-SF"},next:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"}},d={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:s},c="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83d\udcdc ",(0,r.yg)("em",null,"This job is an official example from OpenFn.")),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Handling multiple ODK repeat groups"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created date unknown"),(0,r.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"100")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"merge")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"/*\n  Create many records from an ODK submission, moving in and out of repeat\n  blocks, submitted by Taylor Downs @ OpenFn.\n*/\n\nbeta.each(\n  '$.data.data[*]',\n  create(\n    'ODK__c',\n    fields(\n      field('Event_Type__c', dataValue('event_type')),\n      field('Training_Type__c', dataValue('training_type')),\n      field('Event_Leader_ID__c', dataValue('leader')),\n      field('Event_Date__c', dataValue('date')),\n      field('metainstanceid__c', dataValue('*meta-instance-id*'))\n    )\n  )\n);\n\nbeta.each(\n  merge(\n    dataPath('data[*].attendee_new[*]'),\n    fields(field('parentId', lastReferenceValue('id')))\n  ),\n  create(\n    'ODK_Child_2__c',\n    fields(\n      field('ODK__c', dataValue('parentId')),\n      field('Barcode__c', dataValue('new_attendee_id')),\n      field('First_Name__c', dataValue('new_attendee_first_name')),\n      field('Last_Name__c', dataValue('new_attendee_last_name')),\n      field('Phone_Number__c', dataValue('new_attendee_phone'))\n    )\n  )\n);\n\nbeta.each(\n  merge(\n    dataPath('data[*].attendee[*]'),\n    fields(\n      field('parentId', function (state) {\n        return state.references[state.references.length - 1].id;\n      })\n      // ^^ This will get the sfID of the 1st item created.\n    )\n  ),\n  create(\n    'ODK_Child_1__c',\n    fields(\n      field('ODK__c', dataValue('parentId')),\n      field('Barcode__c', dataValue('attendee_id')),\n      field('Late__c', dataValue('late'))\n    )\n  )\n);\n\n")))}u.isMDXComponent=!0},15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),s=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,y=c["".concat(d,".").concat(f)]||c[f]||u[f]||l;return n?t.createElement(y,i(i({ref:a},p),{},{components:n})):t.createElement(y,i({ref:a},p))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);