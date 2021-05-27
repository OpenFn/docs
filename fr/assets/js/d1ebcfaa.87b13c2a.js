(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6293],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=i,h=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57258:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),l={title:"Triggers"},s={unversionedId:"build/triggers",id:"build/triggers",isDocsHomePage:!1,title:"Triggers",description:'Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types diff\xe9rent. . The most common are "message filter" triggers, but there are also "cron" triggers, "flow" triggers, and "fail" triggers.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/triggers.md",sourceDirName:"build",slug:"/build/triggers",permalink:"/fr/documentation/build/triggers",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/triggers.md",version:"current",frontMatter:{title:"Triggers"},sidebar:"docs",previous:{title:"The OpenFn Job Studio",permalink:"/fr/documentation/jobs/job-studio"},next:{title:"Credentials",permalink:"/fr/documentation/build/credentials"}},o=[{value:"Trigger types",id:"trigger-types",children:[{value:"Message Filter Triggers",id:"message-filter-triggers",children:[]},{value:"Cron Triggers (formerly timers)",id:"cron-triggers-formerly-timers",children:[]},{value:"Flow Triggers",id:"flow-triggers",children:[]},{value:"Fail Triggers",id:"fail-triggers",children:[]}]},{value:"Processing cron jobs",id:"processing-cron-jobs",children:[{value:"Managing the size of <code>state</code> for Timer Jobs",id:"managing-the-size-of-state-for-timer-jobs",children:[]},{value:"A quick fix for final state bloat",id:"a-quick-fix-for-final-state-bloat",children:[]}]},{value:"Filter Matching in Detail",id:"filter-matching-in-detail",children:[{value:"Filter 1, simple inclusion",id:"filter-1-simple-inclusion",children:[]},{value:"Filter 2, inclusion <em>and</em> exclusion",id:"filter-2-inclusion-and-exclusion",children:[]}]},{value:"More filter samples",id:"more-filter-samples",children:[{value:"Match messages <code>WHERE</code> the <code>formId</code> is <code>&quot;Robot_Photo_21.04.2015&quot;</code>",id:"match-messages-where-the-formid-is-robot_photo_21042015",children:[]},{value:"Match a message with two fragments inside an array called <code>data</code>",id:"match-a-message-with-two-fragments-inside-an-array-called-data",children:[]},{value:"Match a message <code>WHERE</code> this <code>AND</code> that are both included",id:"match-a-message-where-this-and-that-are-both-included",children:[]},{value:"Match a message using exclusion",id:"match-a-message-using-exclusion",children:[]},{value:"Match a message with a fragment inside another object called <code>form</code>",id:"match-a-message-with-a-fragment-inside-another-object-called-form",children:[]}]},{value:"An exclusion demo",id:"an-exclusion-demo",children:[]}],d={toc:o};function c(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types diff\xe9rent. . The most common are "message filter" triggers, but there are also "cron" triggers, "flow" triggers, and "fail" triggers.'),(0,r.kt)("h2",{id:"trigger-types"},"Trigger types"),(0,r.kt)("h3",{id:"message-filter-triggers"},"Message Filter Triggers"),(0,r.kt)("p",null,"Message Filter triggers watch for inbound messages and check to see if the data in those messages meet their ",(0,r.kt)("strong",{parentName:"p"},"inclusion criteria")," and ",(0,r.kt)("em",{parentName:"p"},"don't")," meet their ",(0,r.kt)("strong",{parentName:"p"},"exclusion criteria"),". If they pass these tests and if there are active jobs configured to use that trigger, a run will be started for each message/job combination."),(0,r.kt)("p",null,"You, the user, specify the inclusion and exclusion criteria which determines which inbound messages should trigger job runs. Broadly speaking, if part of a message body ",(0,r.kt)("strong",{parentName:"p"},"matches")," the JSON you provide as the inclusion filter, and ",(0,r.kt)("em",{parentName:"p"},"doesn't")," match the JSON you provided as the exclusion filter, a job will run (assuming you created one with ",(0,r.kt)("inlineCode",{parentName:"p"},"autoprocess")," turned on)."),(0,r.kt)("p",null,"The filter criteria takes the form of a string of valid JSON like this: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"Name":"Aleksa Iwobi"}'),". In an SQL query, this string will be used in the WHERE clause and make use of special ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonb")," operators like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb;\n')),(0,r.kt)("p",null,"If you provide a exclusion criteria like ",(0,r.kt)("inlineCode",{parentName:"p"},'{"type": "fake-data"}')," the resulting query will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb\n  AND NOT (body::jsonb @> \'{"type":"fake-data"}\'::jsonb);\n')),(0,r.kt)("p",null,"There is a more detailed explanation of filter matching ",(0,r.kt)("a",{parentName:"p",href:"#filter-matching-in-detail"},"below"),"."),(0,r.kt)("h3",{id:"cron-triggers-formerly-timers"},"Cron Triggers (formerly timers)"),(0,r.kt)("p",null,"Cron triggers run jobs based on a cron scheuled. They can run as frequently as once every minutes, or as infrequently as you desire and can be scheuled on very specific dates or times. Each time a timed job succeeds, its ",(0,r.kt)("inlineCode",{parentName:"p"},"final_state")," will be saved and used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial_state"),' for its next run. See "Managing state" and "Keeping a cursor" below for implementation help.'),(0,r.kt)("p",null,"The best way to learn about ",(0,r.kt)("inlineCode",{parentName:"p"},"cron"),", if you're not already familiar, is through the OpenFn interface or"),(0,r.kt)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),".",(0,r.kt)("h3",{id:"flow-triggers"},"Flow Triggers"),(0,r.kt)("p",null,"Flow triggers will execute a job ",(0,r.kt)("em",{parentName:"p"},"after")," another specified job finishes successfully. E.g., a flow trigger which specifies the succesful run of Job A can be used by Job B. Each time Job A succeeds, Job B will start to run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"final_state")," of Job A as its ",(0,r.kt)("inlineCode",{parentName:"p"},"initial_state"),"."),(0,r.kt)("h3",{id:"fail-triggers"},"Fail Triggers"),(0,r.kt)("p",null,'Fail, or "catch", triggers work just like flow triggers, except that they watch for the failure, rather than the success, of a specified job. (E.g., Job A pays a CHW via MPESA. If Job A ',(0,r.kt)("em",{parentName:"p"},"fails")," we should initiate Job B, which sends an SMS to the district manager instructing them to manually pay the CHW.)"),(0,r.kt)("h2",{id:"processing-cron-jobs"},"Processing cron jobs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On-demand processing for cron jobs.")," If you\u2019re leveraging cron triggers to run jobs at specific times, you can also run that cron triggered job on demand. This way you don\u2019t have to wait for the timer to expire before testing! Simply click the process/ \u201cplay\u201d button now available via the Job, Run, and Activity History pages."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Runs list run time trigger button",src:a(95279).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Run history time trigger button",src:a(28443).Z})),(0,r.kt)("h4",{id:"keeping-a-cursor-in-state-for-timer-jobs"},"Keeping a cursor in ",(0,r.kt)("inlineCode",{parentName:"h4"},"state")," for timer Jobs"),(0,r.kt)("p",null,"Because many timer jobs require keeping some sort of record of their previous run to modify their later actions, ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),' is passed between the runs. One example might be keeping a "cursor" to select only new records from a database. We\'d expect the following logic:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"job-1")," fetches patients from the database"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"job-1")," does something important with those patient records"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"job-1")," saves the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the last successfully processed patient to ",(0,r.kt)("inlineCode",{parentName:"li"},"final_state")),(0,r.kt)("li",{parentName:"ol"},"when ",(0,r.kt)("inlineCode",{parentName:"li"},"job-1")," runs again, it fetches patients whose ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," is greater than the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the last successfully processed patient.")),(0,r.kt)("p",null,"To achieve this you might write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetchPatient({ type: 'referral', offset: state.lastId }, state => {\n  // Assuming the system returned an array of patients in the \"data\" key.\n  state.lastId = state.data.patients.sort((a, b) => b.id - a.id)[0];\n  return state;\n});\n")),(0,r.kt)("p",null,"The initial offset will be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),', but the subsequent runs will automatically only fetch "new" patients.'),(0,r.kt)("h3",{id:"managing-the-size-of-state-for-timer-jobs"},"Managing the size of ",(0,r.kt)("inlineCode",{parentName:"h3"},"state")," for Timer Jobs"),(0,r.kt)("p",null,"Since state is passed between each run of a timer job, if your job adds something new to state each time it runs, it may quickly become too large to be practically handled. Imagine if a server response were adding, via ",(0,r.kt)("inlineCode",{parentName:"p"},"array.push(...)"),", to ",(0,r.kt)("inlineCode",{parentName:"p"},"state.references")," each time the job ran. OpenFn supports up to 50,000 bytes (via Erlang's ",(0,r.kt)("inlineCode",{parentName:"p"},"byte_size"),"), though most ",(0,r.kt)("inlineCode",{parentName:"p"},"final_state")," byte sizes are between 100 and 1000."),(0,r.kt)("p",null,"If the size of your ",(0,r.kt)("inlineCode",{parentName:"p"},"final_state")," exceeds 10,000 bytes, OpenFn will send project collaborators a warning email. If it exceeds 50,000 bytes, your run will still succeed but its ",(0,r.kt)("inlineCode",{parentName:"p"},"final_state")," will not be saved and the next time that job runs it will inherit the previous, un-updated final state. (I.e., the last state that was < 50,000 bytes.)"),(0,r.kt)("h3",{id:"a-quick-fix-for-final-state-bloat"},"A quick fix for final state bloat"),(0,r.kt)("p",null,"Most often, final state bloat is due to improper handling of ",(0,r.kt)("inlineCode",{parentName:"p"},"state.references")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"state.data"),". This can be fixed by adding the following lines ",(0,r.kt)("em",{parentName:"p"},"either")," to the callback of your language-package's operation (if it allows for one) or by appending an ",(0,r.kt)("inlineCode",{parentName:"p"},"alterState(...)")," operation after your operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  state.custom = somethingIntentional;\n  state.data = {};\n  state.references = [];\n  return state;\n});\n")),(0,r.kt)("h2",{id:"filter-matching-in-detail"},"Filter Matching in Detail"),(0,r.kt)("p",null,"To illustrate filter matching, refer to the filters and message samples below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Message "a" will match filter 1, but message "b" will not.'),(0,r.kt)("li",{parentName:"ul"},'Message "c" will match filter 2, but message "d" will not.')),(0,r.kt)("h3",{id:"filter-1-simple-inclusion"},"Filter 1, simple inclusion"),(0,r.kt)("p",null,"The inclusion criteria is ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "formID": "patient_registration_v7" }')," and the exclusion criteria is left blank."),(0,r.kt)("h4",{id:"message-a-will-match"},'Message "a" will match'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "formID": "patient_registration_v7",\n  "name": "Jack Wilshere",\n  "dob": "1986-05-16",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,r.kt)("h4",{id:"message-b-will-not-match"},'Message "b" will NOT match'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-16",\n  "formID": "patient_registration_v8",\n  "name": "Larry Bird",\n  "dob": "1982-03-21",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,r.kt)("p",null,"Message 'b' does not include ",(0,r.kt)("inlineCode",{parentName:"p"},'"formID":"patient_registration_v7"')," and will not match filter '1'."),(0,r.kt)("h3",{id:"filter-2-inclusion-and-exclusion"},"Filter 2, inclusion ",(0,r.kt)("em",{parentName:"h3"},"and")," exclusion"),(0,r.kt)("p",null,"The inclusion criteria is ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "name": "john doe" }')," and the exclusion criteria is ",(0,r.kt)("inlineCode",{parentName:"p"},'{"allowedToShare": false}'),"."),(0,r.kt)("h4",{id:"message-c-will-match"},'Message "c" will match'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16"\n}\n')),(0,r.kt)("h4",{id:"message-d-will-not-match"},'Message "d" will NOT match'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16",\n  "allowedToShare": false\n}\n')),(0,r.kt)("h2",{id:"more-filter-samples"},"More filter samples"),(0,r.kt)("h3",{id:"match-messages-where-the-formid-is-robot_photo_21042015"},"Match messages ",(0,r.kt)("inlineCode",{parentName:"h3"},"WHERE")," the ",(0,r.kt)("inlineCode",{parentName:"h3"},"formId")," is ",(0,r.kt)("inlineCode",{parentName:"h3"},'"Robot_Photo_21.04.2015"')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"match-a-message-with-two-fragments-inside-an-array-called-data"},"Match a message with two fragments inside an array called ",(0,r.kt)("inlineCode",{parentName:"h3"},"data")),(0,r.kt)("p",null,"(This is useful when gathering data via ODK)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "data": [{ "outlet_call": "TRUE", "new_existing": "Existing" }] }')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"match-a-message-where-this-and-that-are-both-included"},"Match a message ",(0,r.kt)("inlineCode",{parentName:"h3"},"WHERE")," this ",(0,r.kt)("inlineCode",{parentName:"h3"},"AND")," that are both included"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015", "secret_number": 8 }')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"match-a-message-using-exclusion"},"Match a message using exclusion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "safeToProcess": false }'))))),(0,r.kt)("h3",{id:"match-a-message-with-a-fragment-inside-another-object-called-form"},"Match a message with a fragment inside another object called ",(0,r.kt)("inlineCode",{parentName:"h3"},"form")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"form": {"@xmlns": "http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"}}')),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"an-exclusion-demo"},"An exclusion demo"),(0,r.kt)("p",null,"Imagine that we had a filter which included messages with ",(0,r.kt)("inlineCode",{parentName:"p"},"form == 'bns_survey'")," but we then want to start ",(0,r.kt)("em",{parentName:"p"},"excluding")," those that have ",(0,r.kt)("inlineCode",{parentName:"p"},"body.survey_type == 'practice'"),". Our filter trigger would look need to like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,r.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "form": "bns_survey" }')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"body": {"survey_type": "practice"}}'))))),(0,r.kt)("p",null,"We'd set it up from the trigger form like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(39308).Z})),(0,r.kt)("p",null,"And verify the result on the inbox:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(68069).Z})))}c.isMDXComponent=!0},68069:function(e,t,a){"use strict";t.Z=a.p+"assets/images/demo-exclusion-cc520464bca5893c3ca38bfa1d1f2142.gif"},39308:function(e,t,a){"use strict";t.Z=a.p+"assets/images/exclusion-cb6fe8d428d9dd35a5712fa756eb907a.gif"},28443:function(e,t,a){"use strict";t.Z=a.p+"assets/images/runtimetrigger1-6895401e3fee9878d136613b44c469e9.png"},95279:function(e,t,a){"use strict";t.Z=a.p+"assets/images/timetriggerunslist-30591afe14b40286a89b96a5a78f3c55.png"}}]);