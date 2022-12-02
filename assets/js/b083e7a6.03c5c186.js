"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||_[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Upsert Register Participant (Skillz)",sidebar_label:"Upsert Register Participant (Skillz)",id:"Upsert-Register-Participant-Skillz-2021-08-30",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},o=void 0,s={unversionedId:"library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30",id:"library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30",title:"Upsert Register Participant (Skillz)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-Skillz-2021-08-30",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Register Participant (Skillz)",sidebar_label:"Upsert Register Participant (Skillz)",id:"Upsert-Register-Participant-Skillz-2021-08-30",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},sidebar:"adaptors",previous:{title:"Upsert Register Participant",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Participant-2021-04-28"},next:{title:"Upsert Register Skills plus Club",permalink:"/adaptors/library/jobs/auto/Upsert-Register-Skills-plus-Club-2021-04-30"}},l={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Upsert Register Participant (Skillz)"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,r.kt)("li",{parentName:"ul"},"Updated 8 months ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"18")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query(\n  `SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`\n);\n\nalterState(state => {\n  // Note: lastReferenceValue selects the first item in the references array.\n  state.data.eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);\n  state.data.eventCase = dataValue('form.case.@case_id')(state);\n\n  function objectToArray(object) {\n    return !Array.isArray(object) ? [object] : object;\n  }\n\n  const { form } = state.data;\n  if (form.question1) {\n    console.log('Ensuring that \"question1\" is an array.');\n    form.question1 = objectToArray(form.question1);\n  } else if (!form.new_participants) {\n    console.log('Nothing to upsert. No participants were registered');\n  } else {\n    console.log('Shifting \"new_participants\" to \"question1\" array.');\n    form.question1 = objectToArray(form.new_participants);\n    console.log('Creating a \"case\" object inside each item in that array.');\n    form.question1 = form.question1.map(item => ({\n      ...item,\n      case: item.create_skillz_plus_participant.case,\n    }));\n  }\n\n  console.log('Done with initial data manipulation.');\n\n  return state;\n});\n\nbeta.each(\n  merge(\n    dataPath('form.question1[*]'),\n    fields(field('intervention_notes_to_save', dataValue('form.intervention_notes_to_save')))\n  ),\n\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Notes__c', dataValue('intervention_notes_to_save')),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('Participant_Identification_Number_PID__c', state => state.data.case['@case_id']),\n      field('Sex__c', dataValue('gender')),\n      field('Mobile_Number_1__c', dataValue('mobile_number')), //QUESTION: In CommCare, phone doesn't look like it's saving?\n      field('School_name_person__c', dataValue('school_name')),\n      field('Date_of_Birth__c', dataValue('date_of_birth')),\n      field('School_name_person__c', dataValue('school_name')),\n      field('Physical_Address__c', dataValue('participants_home_address'))\n      //field('Age__c', dataValue('form.question1.age_in_years')), //This is a SF formula field, cannot map\n    )\n  )\n);\n\neach(\n  merge(\n    dataPath('form.question1[*]'),\n    fields(\n      field('intervention_name', dataValue('form.intervention_name')),\n      field('eventCase', dataValue('eventCase')),\n      field('eventName', dataValue('eventName'))\n    )\n  ),\n  upsert(\n    'Attendance__c',\n    'CommCare_Ext_ID__c',\n    fields(\n      field('CommCare_Ext_ID__c', state => {\n        var eventid = `${state.data.intervention_name}` || `${state.data.eventName}`; //dataValue('intervention_name')(state) || `${state.data.eventName}`;\n        var personid = state.data.case['@case_id'];\n        const value = personid + '-' + eventid.replace(/\\//gi, '');\n        return scrubEmojis(value, '');\n      }),\n      relationship(\n        //Attendance looks up to Persn via the case_id\n        'Person_Attendance__r',\n        'Participant_Identification_Number_PID__c',\n        state => state.data.case['@case_id']\n      ),\n      relationship(\n        //Attendance looks up to Event via the Event case_id\n        'Event__r',\n        'CommCare_Case_ID__c',\n        state => `${state.data.eventCase}`\n      ),\n      // relationship(\n      //   //Attendance looks up to Event via the intervention_name\n      //   'Event__r',\n      //   'CommCare_Ext_ID__c',\n      //   state => `${state.data.intervention_name}` || `${state.data.eventName}`\n      // ),\n      field('Date_of_Birth__c', dataValue('date_of_birth'))\n    )\n  )\n);\n\n//First we insert Person record\n// alterState(state => {\n//   return upsert(\n//     'Person__c',\n//     'Participant_Identification_Number_PID__c',\n//     fields(\n//       field('Notes__c', dataValue('form.intervention_notes_to_save')),\n//       field('First_Name__c', dataValue('form.question1.participant_first_name')),\n//       field('Surname__c', dataValue('form.question1.participant_surname')),\n//       relationship('RecordType', 'Name', 'Participant'),\n//       field('Participant_Identification_Number_PID__c', state => state.data.case['@case_id']),\n//       field('Sex__c', dataValue('form.question1.gender')),\n//       //field('Age__c', dataValue('form.question1.age_in_years')), //This is a SF formula field, cannot map\n//       field('Mobile_Number_1__c', dataValue('form.question1.mobile_number')),\n//       field('School_name_person__c', dataValue('form.question1.school_name'))\n//     )\n//   )(state);\n// });\n\n// alterState(state => {\n//   //Then we upsert related Attendance records\n//   return upsert(\n//     'Attendance__c',\n//     'CommCare_Ext_ID__c',\n//     fields(\n//       field('CommCare_Ext_ID__c', state => {\n//         var eventid = dataValue('form.intervention_name')(state);\n//         var personid = dataValue('form.case.@case_id')(state);\n//         return personid + '-' + eventid;\n//       }),\n//       relationship(\n//         //Attendance looks up to Persn via the case_id\n//         'Person_Attendance__r',\n//         'Participant_Identification_Number_PID__c',\n//         dataValue('form.case.@case_id')\n//       ),\n//       relationship(\n//         //Attendance looks up to Event via the intervention_name\n//         'Event__r',\n//         'Name',\n//         dataValue('form.intervention_name')\n//       ),\n//       field('Date_of_Birth__c', dataValue('form.question1.date_of_birth'))\n//     )\n//   )(state);\n// });\n\n")))}d.isMDXComponent=!0}}]);