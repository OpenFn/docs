"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72978],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),l=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(m.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(f,o(o({ref:a},p),{},{components:t})):n.createElement(f,o({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19640:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={title:"CommCare"},o=void 0,s={unversionedId:"commcare",id:"commcare",title:"CommCare",description:"App Overview",source:"@site/adaptors/commcare.md",sourceDirName:".",slug:"/commcare",permalink:"/adaptors/commcare",draft:!1,tags:[],version:"current",frontMatter:{title:"CommCare"},sidebar:"adaptors",previous:{title:"CKAN",permalink:"/adaptors/ckan"},next:{title:"commcare@1.5.3",permalink:"/adaptors/packages/commcare-docs"}},m={},l=[{value:"App Overview",id:"app-overview",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"APIs &amp; Integration Options",id:"apis--integration-options",level:2},{value:"Web API",id:"web-api",level:3},{value:"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service",id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service",level:3},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",level:2},{value:"App installation and configuration",id:"app-installation-and-configuration",level:3},{value:"App Versioning",id:"app-versioning",level:4},{value:"Exporting Metadata",id:"exporting-metadata",level:3},{value:"Unique Identifiers",id:"unique-identifiers",level:3},{value:"Data Element Mapping Notes",id:"data-element-mapping-notes",level:3},{value:"CommCare Credentials",id:"commcare-credentials",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],p={toc:l},c="wrapper";function d(e){let{components:a,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"app-overview"},"App Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," is a powerful data collection\nplatform developed by Dimagi. It is an open-source platform, and is primarily\nbest for mobile case management."),(0,r.kt)("h3",{id:"data-model"},"Data Model"),(0,r.kt)("p",null,"CommCare data is primarily stored in ",(0,r.kt)("strong",{parentName:"p"},"forms")," and ",(0,r.kt)("strong",{parentName:"p"},"cases"),". Forms are the\nbuilding blocks of applications and cases are used to track data on objects,\nusually people. Learn more about CommCare forms and cases at the links below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Case management:",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management")),(0,r.kt)("li",{parentName:"ul"},"Form and case data in CommCare:\n",(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"))),(0,r.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"Example user stories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a community health worker I want to store patient data that was collected\nin rural areas with no internet access in Salesforce so I can better analyze\nthe data being collected and make more informed recommendations."),(0,r.kt)("li",{parentName:"ul"},"As a teacher I want to set up automatic message alerts to my students in order\nto increase participation.")),(0,r.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,r.kt)("p",null,"CommCare offers a number of integration options for extracting and/or loading\ndata to and from CommCare HQ."),(0,r.kt)("h3",{id:"web-api"},"Web API"),(0,r.kt)("p",null,"CommCare has different APIs for reading vs. updating data. Some helpful links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Data+APIs"},"Data APIs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"},"Bulk Case Upload API to mass update case records"))),(0,r.kt)("h3",{id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service"},"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service"),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare docs"),'\non how to configure this webhook to "push" data to an external system like\nOpenFn. This option is great for ',(0,r.kt)("em",{parentName:"p"},"real-time")," data forwarding."),(0,r.kt)("p",null,"Quick instructions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Go to "Project Settings".'),(0,r.kt)("li",{parentName:"ol"},'Click "Data Forwarding".'),(0,r.kt)("li",{parentName:"ol"},'"Add a forwarding location" for Cases, Forms, or both.'),(0,r.kt)("li",{parentName:"ol"},"Specify JSON, using your OpenFn inbox URL as the target. See the\n",(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare documentation"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a\n",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form"},"message-filter trigger like this"),"."),(0,r.kt)("li",{parentName:"ol"},"Set up a ",(0,r.kt)("inlineCode",{parentName:"li"},"job")," running on that filter to process CommCare submissions or case\nupdates.")),(0,r.kt)("p",null,"We recommend updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," to list emails that should be\nalerted if there is a data forwarding error.\n",(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications"},"See the CommCare docs for more on this."),"."),(0,r.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,r.kt)("h3",{id:"app-installation-and-configuration"},"App installation and configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CommCare docs on installing the mobile app:\n",(0,r.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones"},"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones"))),(0,r.kt)("h4",{id:"app-versioning"},"App Versioning"),(0,r.kt)("p",null,"Ensure that you are always using the latest app version when testing, by\nupdating your app and checking that the version matches the latest version in\nCommCare HQ."),(0,r.kt)("h3",{id:"exporting-metadata"},"Exporting Metadata"),(0,r.kt)("p",null,"Use this\n",(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Export+Form+Contents"},"link"),"\nto ",(0,r.kt)("strong",{parentName:"p"},"export form contents"),". This will give you access to all the ",(0,r.kt)("inlineCode",{parentName:"p"},"question ids"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"labels")," in the CommCare form that are helpful for designing your\nintegration and mapping data elements."),(0,r.kt)("h3",{id:"unique-identifiers"},"Unique Identifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As CommCare data is stored in forms and cases, there are two types of UIDs in\nCommCare: ",(0,r.kt)("inlineCode",{parentName:"p"},"case_id")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"form id"),". You can search for a particular case or form\nsubmission in CommCare by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Find Data by ID")," feature here:\n",(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"},"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"),". For\nexample, if you received a submission in the OpenFn inbox that you would like\nto find in CommCare, search by ",(0,r.kt)("inlineCode",{parentName:"p"},"form id"),". If you'd like to find a particular\ncase (i.e. person, event, etc) search by ",(0,r.kt)("inlineCode",{parentName:"p"},"case id"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649444-04f371ea-80b1-4c28-8d42-1591c0a96758.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the OpenFn ",(0,r.kt)("a",{parentName:"p",href:"/documentation/getting-started/terminology#message"},"message"),":\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is the unique identifier for the form submission\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649481-83b3f7ee-c6a6-42f8-8752-2f4e96b7fa1f.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"case_id")," is the unique identifier for the case being updated by the form. For\nexample, the ",(0,r.kt)("inlineCode",{parentName:"p"},"case_id")," can be the UID for a person.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649509-098a5418-4b72-4cec-a4d2-47c8bedaac25.png",alt:"image"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"N.B.")," Unique identifiers and ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden fields")," in CommCare forms: Make sure\nthat unique identifiers for forms and objects are always in the form. If the\nunique identifier isn't relevant for the user, it can be added to the form as a\n",(0,r.kt)("inlineCode",{parentName:"p"},"hidden field"),". Learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden fields")," here:\n",(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial"},"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial")),(0,r.kt)("h3",{id:"data-element-mapping-notes"},"Data Element Mapping Notes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Labels")," are generally not mapped in an integration because they represent text\nthat is displayed to the CommCare user to facilitate easy use of the\napplication. ",(0,r.kt)("inlineCode",{parentName:"p"},"Ids")," however, represent actual data that should be mapped."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When mapping ",(0,r.kt)("inlineCode",{parentName:"li"},"multiple choice")," questions, make sure to consider how the answer\nchoices should map to the source/destination system.")),(0,r.kt)("h2",{id:"commcare-credentials"},"CommCare Credentials"),(0,r.kt)("p",null,'To connect to CommCare you\'ll need a username, password, host URL, and the\n"appId".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CommCare Credentials Menu",src:t(41249).Z,width:"1362",height:"404"})),(0,r.kt)("p",null,'The username is your full email address and the "appId" is the UUID which\ndesignates your CommCare project as different from everyone elses. It can be\nfound in the URL of your application when you first enter it from the project\nscreen. I.e., the last part of this URL:\n',(0,r.kt)("inlineCode",{parentName:"p"},"https://www.commcarehq.org/a/YOUR_PROJECT/apps/view/YOUR_APP_ID/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CommCare Cred",src:t(78873).Z,width:"734",height:"860"})),(0,r.kt)("p",null,"The raw JSON of your credential (for use in the CLI or when inspecting\n",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration"),") is defined in the\n",(0,r.kt)("a",{parentName:"p",href:"/adaptors/packages/commcare-configuration-schema"},"CommCare Configuration"),"\nsection."),(0,r.kt)("h2",{id:"common-errors"},"Common Errors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Docs in progress!\n")),(0,r.kt)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,r.kt)("p",null,"OpenFn implementations can leverage both the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},(0,r.kt)("inlineCode",{parentName:"a"},"HTTP"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-commcare"},(0,r.kt)("inlineCode",{parentName:"a"},"CommCare"))," adaptors to connect\nwith the CommCare API."),(0,r.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync):\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,r.kt)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,r.kt)("li",{parentName:"ul"},"Grassroot Soccer (CommCare-to-Salesforce sync):\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}d.isMDXComponent=!0},41249:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/commcare_credential-ada449a6fab844160c5991a069bff415.png"},78873:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/commcare_credential_edit-47a4bc51e45c06831ec87ec29832ac19.png"}}]);