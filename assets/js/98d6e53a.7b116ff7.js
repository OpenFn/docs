"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24392],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(y,o(o({ref:a},d),{},{components:t})):n.createElement(y,o({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74596:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const i={id:"each",title:"The each(...) operation"},o=void 0,l={unversionedId:"build/steps/each",id:"build/steps/each",title:"The each(...) operation",description:"The each operation allows you to perform another operation on each item in an",source:"@site/docs/build/steps/each.md",sourceDirName:"build/steps",slug:"/build/steps/each",permalink:"/documentation/build/steps/each",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/steps/each.md",tags:[],version:"current",frontMatter:{id:"each",title:"The each(...) operation"},sidebar:"docs",previous:{title:"Initial and final state",permalink:"/documentation/build/steps/state"},next:{title:"Edit Steps locally",permalink:"/documentation/build/steps/editing-locally"}},p={},c=[{value:"Each takes two arguments",id:"each-takes-two-arguments",level:2},{value:"arrayPath",id:"arraypath",level:3},{value:"the operation",id:"the-operation",level:3},{value:"dataValue(...) <em>inside</em> each(...)",id:"datavalue-inside-each",level:2},{value:"merge(...) and bringing data &#39;down&#39; into an array:",id:"merge-and-bringing-data-down-into-an-array",level:2}],d={toc:c},s="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"each")," operation allows you to perform another operation on each item in an\narray."),(0,r.yg)("h2",{id:"each-takes-two-arguments"},"Each takes two arguments"),(0,r.yg)("p",null,"In other words, ",(0,r.yg)("inlineCode",{parentName:"p"},"each(arrayPath, operation)")," will ",(0,r.yg)("em",{parentName:"p"},"do")," ",(0,r.yg)("inlineCode",{parentName:"p"},"operation")," on each item\nit finds in the ",(0,r.yg)("inlineCode",{parentName:"p"},"arrayPath")," array. It takes just two arguments:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"an arrayPath"),(0,r.yg)("li",{parentName:"ol"},"an operation(...)")),(0,r.yg)("h3",{id:"arraypath"},"arrayPath"),(0,r.yg)("p",null,"Let's look at the first argument in ",(0,r.yg)("inlineCode",{parentName:"p"},"each"),"... the path to the array. Consider\nthe following code using the Salesforce adaptor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"each(\n  dataPath('form.participants[*]'),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n    )\n  )\n);\n")),(0,r.yg)("p",null,"This will upsert a ",(0,r.yg)("inlineCode",{parentName:"p"},"Person__c")," resource in Salesforce for each item found in the\n",(0,r.yg)("inlineCode",{parentName:"p"},"state.data.form.participants")," array. You could specify this path in the\nfollowing ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"'$.data.form.participants[*]'")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dataPath('form.participants[*]')"))),(0,r.yg)("p",null,"Note the JSON path syntax."),(0,r.yg)("h3",{id:"the-operation"},"the operation"),(0,r.yg)("p",null,"If there are 5 participants in there, it will execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")," operation on\nall 5 items, in sequence. ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")," takes whatever arguments it takes normally\nbut it operates ",(0,r.yg)("em",{parentName:"p"},"inside")," the array. See below for more details on the ",(0,r.yg)("em",{parentName:"p"},"scope")," of\nthis operation."),(0,r.yg)("h2",{id:"datavalue-inside-each"},"dataValue(...) ",(0,r.yg)("em",{parentName:"h2"},"inside")," each(...)"),(0,r.yg)("p",null,"Note that inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"each(...)")," operation, using ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue(path)")," will\nevaluate a path inside each item in the array."),(0,r.yg)("h2",{id:"merge-and-bringing-data-down-into-an-array"},"merge(...) and bringing data 'down' into an array:"),(0,r.yg)("p",null,"What if you want to access data in your ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")," operation that does ",(0,r.yg)("em",{parentName:"p"},"not")," exist\nin the array itself. You could use a data preparation step (see: ",(0,r.yg)("inlineCode",{parentName:"p"},"alterState"),")\nor make use of ",(0,r.yg)("inlineCode",{parentName:"p"},"merge(path, data)")," which allows you to merge data from the\ninitial scope down into your array and access it from the ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")," operation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"each(\n  merge(\n    dataPath('form.participants[*]'),\n    fields(\n      field('school_id', dataValue('form.school.id')),\n      field('intervention_type', dataValue('form.type'))\n    )\n  ),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n      // new fields...\n      field('School__c', dataValue('school_id')),\n      field('Intervention_Type__c', dataValue('intervention_type'))\n    )\n  )\n);\n")))}u.isMDXComponent=!0}}]);