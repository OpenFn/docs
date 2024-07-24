"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24998],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>_});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,_=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?t.createElement(_,o(o({ref:a},d),{},{components:n})):t.createElement(_,o({ref:a},d))}));function _(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50657:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const s={title:"Coach Session Register",sidebar_label:"Coach Session Register",id:"Coach-Session-Register-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","each","field","fields","query","relationship","upsert"]},o=void 0,i={unversionedId:"library/jobs/auto/Coach-Session-Register-2021-05-03",id:"library/jobs/auto/Coach-Session-Register-2021-05-03",title:"Coach Session Register",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Coach-Session-Register-2021-05-03.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Coach-Session-Register-2021-05-03",permalink:"/adaptors/library/jobs/auto/Coach-Session-Register-2021-05-03",draft:!1,tags:[],version:"current",frontMatter:{title:"Coach Session Register",sidebar_label:"Coach Session Register",id:"Coach-Session-Register-2021-05-03",keywords:["library","job","expression","salesforce","dataValue","each","field","fields","query","relationship","upsert"]},sidebar:"adaptors",previous:{title:"\u2728 Attendance Non Skillz",permalink:"/adaptors/library/jobs/auto/Attendance-Non-Skillz-2021-06-14"},next:{title:"\u2728 HIV Testing Event Statistics",permalink:"/adaptors/library/jobs/auto/HIV-Testing-Event-Statistics-2021-05-03"}},l={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Coach Session Register"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.yg)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.yg)("li",{parentName:"ul"},"Created about 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 12 months ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"67")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"query"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// push to production\nquery(\n  `SELECT Coach_A__c, Coach_A__r.Name from Event__c where CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`\n);\n\nfn(state => {\n  const present = dataValue('form.present')(state).toLowerCase();\n\n  function getSessionValue() {\n    let value;\n    switch (present) {\n      case 'yes':\n        value = 'X';\n        break;\n      case 'no':\n        value = 'A';\n        break;\n      case '':\n        value = 'N';\n        break;\n      default:\n        value = 'U';\n        break;\n    }\n    return value;\n  }\n\n  const session_text = dataValue('form.session')(state);\n\n  const session_id = session_text.trim().slice(0, session_text.indexOf(' ')).slice(1);\n\n  const coachname = dataValue('form.coach_name')(state)\n    ? dataValue('form.coach_name')(state)\n    : state.references[0].records[0].Coach_A__r.Name;\n\n  let external_id = `${dataValue('form.case.@case_id')(state)}\n    ${coachname}`; //case_id + coach_name for external Id\n\n  state.data.commcare_external_id = external_id.toLowerCase().replace(/\\s/g, '').trim();\n\n  state.data.dynamicFields = [\n    field(`Session_${session_id}__c`, getSessionValue()),\n    field(`Session_${session_id}_Date__c`, dataValue('form.date')(state)),\n    //field(`Session_${session_id}_Duration__c`, dataValue('form.duration')(state)), //NOTE: Duration fields don't exist in SF?\n  ];\n\n  state.data.durationFields = [field(`Session_${session_id}_Duration__c`, dataValue('form.duration')(state))];\n\n  return state;\n});\n\nupsert('Event__c', 'CommCare_Case_ID__c', state => ({\n  ...fields(field('CommCare_Case_ID__c', dataValue('form.case.@case_id'))),\n  ...fields(...state.data.durationFields),\n}));\n\nquery(\n  `SELECT Coach_A__c, Coach_A__r.CommCare_Ext_ID__c from Event__c where CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`\n);\n\nfn(state => {\n  const coaches = dataValue('form.coach_name')(state).split(' ');\n  const dynamicFields = state.data.dynamicFields;\n  const commcare_external_id = state.data.commcare_external_id;\n  const caseid = state.data.form.case['@case_id'];\n  return each(\n    coaches,\n    upsert('Attendance__c', 'CommCare_Ext_ID__c', state => ({\n      ...fields(\n        //relationship('RecordType', 'Name', 'Coach Development'),\n        field('RecordTypeId', '012500000009jqaAAA'),\n        relationship('Event__r', 'CommCare_Case_ID__c', caseid),\n        relationship('Person_Attendance__r', 'CommCare_Ext_ID__c', state => {\n          const coach_name = state.data;\n          return coach_name;\n        }),\n        field('CommCare_Ext_ID__c', commcare_external_id)\n      ),\n      ...fields(...dynamicFields),\n    }))\n  )(state);\n});\n\n")))}p.isMDXComponent=!0}}]);