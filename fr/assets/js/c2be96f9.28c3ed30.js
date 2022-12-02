"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[91374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Moodle"},l=void 0,s={unversionedId:"moodle",id:"moodle",title:"Moodle",description:"Overview",source:"@site/adaptors/moodle.md",sourceDirName:".",slug:"/moodle",permalink:"/fr/adaptors/moodle",draft:!1,tags:[],version:"current",frontMatter:{title:"Moodle"},sidebar:"adaptors",previous:{title:"mongodb developer readme",permalink:"/fr/adaptors/packages/mongodb-readme"},next:{title:"mssql@4.0.0",permalink:"/fr/adaptors/packages/mssql-docs"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Learn More",id:"learn-more",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"More on the Moodle API",id:"more-on-the-moodle-api",level:3},{value:"Connect with OpenFn",id:"connect-with-openfn",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moodle.org/"},"Moodle")," is a free and open-source online learning\nmanagement system."),(0,r.kt)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"As a teacher on Moodle, I want to send profile, enrollment, and grade updates\nto CommCare so I can continue supporting students offline."),(0,r.kt)("li",{parentName:"ol"},"As a teacher on Moodle, I want to automatically send student engagement data\nto CommCare so I can integrate SMS notifications to increase student\nparticipation."),(0,r.kt)("li",{parentName:"ol"},"As a student on Moodle, I want to access my course data and grades even when\nnot connected to the internet.")),(0,r.kt)("h3",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"Helpful links..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Moodle Docs \u2013 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/310/en/Main_page"},"https://docs.moodle.org/310/en/Main_page")),(0,r.kt)("li",{parentName:"ol"},"Moodle API Docs - ",(0,r.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/webservice_restful"},"https://moodle.org/plugins/webservice_restful"))),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("p",null,"Data integration via the Moodle web API:\n",(0,r.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/webservice_restful"},"https://moodle.org/plugins/webservice_restful")),(0,r.kt)("p",null,"Data forwarding using a Webhook: ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/local_webhooks"},"https://moodle.org/plugins/local_webhooks")),(0,r.kt)("h3",{id:"more-on-the-moodle-api"},"More on the Moodle API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample HTTP requests")),(0,r.kt)("p",null,"Authentication:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET mymoodlesite.com/login/token.php?service=moodle_mobile_app &username=USERNAME&password=PASSWORD")),(0,r.kt)("p",null,"Retrieve course information for all courses:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_course_get_courses&moodlewsrestformat=json HTTP/1.1")),(0,r.kt)("p",null,"Retrieve enrolled users in a specific course:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_enrol_get_enrolled_users&courseid=225&moodlewsrestformat=json HTTP/1.1")),(0,r.kt)("p",null,"Retrieve all final grades for one student:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= gradereport_user_get_grade_items&userid=46580&courseid=225&moodlewsrestformat=json HTTP/1.1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Integration tips")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The endpoint ",(0,r.kt)("inlineCode",{parentName:"li"},"get_enrolled_users")," does not return all user profile details.\nWe have had to access ",(0,r.kt)("inlineCode",{parentName:"li"},"core_user_get_users_by_field")," and filter by one\nspecific user to retrieve profile information such as phone number and\naddress."),(0,r.kt)("li",{parentName:"ol"},"Googling the endpoint you're using goes a long way!")),(0,r.kt)("h2",{id:"connect-with-openfn"},"Connect with OpenFn"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http#language-http-"},(0,r.kt)("inlineCode",{parentName:"a"},"language-http")),"\ncan be used to make HTTP requests to the Moodle API."),(0,r.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Moodle -> CommCare Integration:")),(0,r.kt)("p",null,"In a project implementation for creating an education app (based on CommCare),\nwe extract data from a Moodle learning management system daily, and then upload\nMoodle student ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," data as ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," records in Commcare."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example User Story: As a coach using CommCare, when a student's profile and\ngrades are updated in Moodle, I would like to automatically see that data\nreflected in my mobile app so that I can follow-up with the relevant support to\nensure they perform well.")),(0,r.kt)("p",null,"Example job to get enrolled users via the Moodle API endpoint (aka\n",(0,r.kt)("inlineCode",{parentName:"p"},"web service function"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"core_enrol_get_enrolled_users")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  const { loginUrl, username, password, host } = state.configuration;\n  return get(\n    `${loginUrl}&username=${username}&password=${password}`,\n    {},\n    state => {\n      const { token } = state.data;\n      const courseIds = [224, 225];\n      const enrolledUsers = [];\n      return each(\n        courseIds,\n        alterState(state => {\n          let courseid = state.data;\n          return get(\n            `${host}`,\n            {\n              query: {\n                wstoken: token,\n                wsfunction: 'core_enrol_get_enrolled_users',\n                courseid,\n                moodlewsrestformat: 'json',\n              },\n              headers: { 'content-type': 'application/json' },\n            },\n            state => {\n              console.log(\n                `Getting users enrolled in the course with ${courseid}...`\n              );\n              enrolledUsers.push(state.data);\n              return { ...state, enrolledUsers };\n            }\n          )(state);\n        })\n      )(state);\n    }\n  )(state);\n});\n")))}c.isMDXComponent=!0}}]);