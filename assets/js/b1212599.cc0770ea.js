"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34446],{97622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const s={title:"Attendance Non Skillz",sidebar_label:"\u2728 Attendance Non Skillz",id:"Attendance-Non-Skillz-2021-06-14",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},i=void 0,o={unversionedId:"library/jobs/auto/Attendance-Non-Skillz-2021-06-14",id:"library/jobs/auto/Attendance-Non-Skillz-2021-06-14",title:"Attendance Non Skillz",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Attendance-Non-Skillz-2021-06-14.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Attendance-Non-Skillz-2021-06-14",permalink:"/adaptors/library/jobs/auto/Attendance-Non-Skillz-2021-06-14",draft:!1,tags:[],version:"current",frontMatter:{title:"Attendance Non Skillz",sidebar_label:"\u2728 Attendance Non Skillz",id:"Attendance-Non-Skillz-2021-06-14",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},sidebar:"adaptors",previous:{title:"Upsert User in Salesforce",permalink:"/adaptors/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16"},next:{title:"\u2728 Outcome Survey",permalink:"/adaptors/library/jobs/auto/Outcome-Survey-2024-07-16"}},l={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Attendance Non Skillz"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v4.3.0"},(0,r.yg)("inlineCode",{parentName:"a"},"v4.3.0"))),(0,r.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 2 months ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"85")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"merge"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"query"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Array")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  if (!state.data.form.attendance_list.update_participant_cases.item) {\n    console.log('No participant attendance data was provided, not upserting to Salesforce.');\n    return state;\n  } else {\n    // query(\n    //   `SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}'`\n    // );\n\n    // fn(state => {\n    const records = lastReferenceValue('records')(state);\n    const eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);\n\n    // if (!eventName) {\n    //   console.log(\n    //     `Participant not found with CommCare_Case_ID__c: ${state.data.form.attendance_list.update_participant_cases.item[0]['@id']}`\n    //   );\n    //   return state;\n    // }\n\n    return execute(\n      fn(state => {\n        // Note: lastReferenceValue selects the first item in the references array.\n        state.data.eventName = eventName ? eventName.replace(/\\//gi, '') : null;\n\n        function getSessionValue(present) {\n          switch (present.toString().toLowerCase()) {\n            case 'yes':\n              return 'X';\n            case 'no':\n              return 'A';\n            case '':\n              return 'N';\n            default:\n              return 'U';\n          }\n        }\n\n        function getSessionId(session_text) {\n          return session_text.toString().trim().slice(0, session_text.indexOf(' ')).slice(1);\n        }\n\n        function objectToArray(object) {\n          if (!object) return [];\n          return !Array.isArray(object) ? [object] : object;\n        }\n\n        state.data.form.attendance_list.update_participant_cases.item = objectToArray(\n          state.data.form.attendance_list.update_participant_cases.item\n        );\n        \n        //When GRS enters session names incorrectly in CommCare (e.g., session: \"P8 // My body is mine)\n        function findPValue(input) {\n          // Regular expression to match \"P\" followed by one or more digits, then \"//\"\n            const regex = /P(\\d+)\\s*\\/\\//;\n    \n          // Match the input against the regex\n          const match = input.match(regex);\n    \n          // If a match is found, return the captured digits as an integer\n          if (match) {\n            return parseInt(match[1], 10);\n          } else {\n            // If no match is found, return null or handle as needed\n          return 'Session_not_found';\n        }\n}\n\n        const sessionText = dataValue('form.attendance_list.session')(state);\n        const sessionId = sessionText.includes('//') ? findPValue(sessionText) : getSessionId(sessionText);\n        \n        console.log('sessionText:: ', sessionText); \n        console.log('sessionId:: ', sessionText); \n        \n        const sessionDate = dataValue(\"form.case['@date_modified']\")(state);\n\n        state.data.form.attendance_list.update_participant_cases.item =\n          state.data.form.attendance_list.update_participant_cases.item.map(item => {\n            const sessionValue = getSessionValue(item.attendance_session);\n            return {\n              ...item,\n              dynamicFields: {\n                [`Session_${sessionId}__c`]: sessionValue,\n                [`Session_${sessionId}_Date__c`]: sessionDate,\n              },\n            };\n          });\n\n        return state;\n      }),\n\n      each(\n        merge(\n          dataPath('form.attendance_list.update_participant_cases.item[*]'),\n          fields(\n            field('intervention_name', dataValue('form.intervention_name')),\n            field('eventName', dataValue('eventName')),\n            field('caseid', dataValue('form.case.@case_id'))\n          )\n        ),\n        upsert('Attendance__c', 'CommCare_Ext_ID__c', state => ({\n          ...fields(\n            relationship('Event__r', 'CommCare_Case_ID__c', dataValue('caseid')),\n            field(\n              'CommCare_Ext_ID__c',\n              state => `${state.data['@id']}-${toUTF8(state.data.intervention_name)}`\n            ),\n            relationship('Person_Attendance__r', 'Participant_Identification_Number_PID__c', dataValue('@id'))\n          ),\n          ...state.data.dynamicFields,\n        }))\n      )\n    )(state);\n  }\n});\n\n")))}u.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);