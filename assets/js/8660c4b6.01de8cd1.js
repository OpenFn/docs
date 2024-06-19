"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[66814],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const o={title:"Create Intervention",sidebar_label:"Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-Intervention-2021-04-08",id:"library/jobs/auto/Create-Intervention-2021-04-08",title:"Create Intervention",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-Intervention-2021-04-08.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-Intervention-2021-04-08",permalink:"/adaptors/library/jobs/auto/Create-Intervention-2021-04-08",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Intervention",sidebar_label:"Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"},next:{title:"WF3-2a Repeat Failed Person Visits",permalink:"/adaptors/library/jobs/auto/WF3-2a-Repeat-Failed-Person-Visits-2023-05-31"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Create Intervention"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.yg)("li",{parentName:"ul"},"Created about 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 10 days ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"66")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"alterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  state.data.form.delivery_method = clean(state.data.form.delivery_method);\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n  \n  return state; \n}); \n\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  state=>({\n  ...fields(\n    field('Name', dataValue('form.name_of_intervention')),\n    field('CommCare_Ext_ID__c', state => {\n      return dataValue('form.name_of_intervention')(state).replace(/\\//gi, ''); \n    }),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    relationship('RecordType', 'Name', 'Intervention'),\n    field('Business_Unit__c', state => {\n      const bu = dataValue('form.business_unit')(state); \n      return bu==='65680f0c4c144b03ad0f86bdc46c1ebc' ? 'GRS Zambia' : \n      bu==='04d98397e28046118fade28ced6b65cb' ? 'GRS Zimbabwe' : \n      bu==='ed125ab19ec34aacab79585e59eb76f4' ? 'GRS Partnerships': undefined ; \n    }),\n    relationship(\n      'Site__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.site')\n    ),\n    relationship(\n      'Venue__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.Venue')\n      \n    ),\n    relationship(\n      'Curriculum__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.curriculum_selection.curriculum')\n    ),\n    // relationship(\n    //   'Grant__r',\n    //   'CommCare_Ext_ID__c',\n    //   dataValue('form.grant')\n    // ),\n    field('Delivery_Method__c', dataValue('form.delivery_method')),\n    field('Class_Group_Team__c', dataValue('form.class_grade')),\n    field('Pre_Post_Administered__c', dataValue('form.prepost_administered')),\n    field('Start_Date__c', dataValue('form.intervention_dates.start_date')),\n    field('End_Date__c', dataValue('form.intervention_dates.end_date'))\n  ),\n  ...fields(...state.data.destinationCoachFields)\n  })\n);\n")))}p.isMDXComponent=!0}}]);