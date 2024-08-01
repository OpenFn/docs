"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[185],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>u});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),m=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),g=o,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?t.createElement(u,i(i({ref:a},p),{},{components:n})):t.createElement(u,i({ref:a},p))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56610:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var t=n(58168),o=(n(96540),n(15680));const r={title:"CommCare"},i=void 0,s={unversionedId:"commcare",id:"commcare",title:"CommCare",description:"App Overview",source:"@site/adaptors/commcare.md",sourceDirName:".",slug:"/commcare",permalink:"/adaptors/commcare",draft:!1,tags:[],version:"current",frontMatter:{title:"CommCare"},sidebar:"adaptors",previous:{title:"CKAN",permalink:"/adaptors/ckan"},next:{title:"commcare@3.0.0",permalink:"/adaptors/packages/commcare-docs"}},l={},m=[{value:"App Overview",id:"app-overview",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"APIs &amp; Integration Options",id:"apis--integration-options",level:2},{value:"Web API",id:"web-api",level:3},{value:"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service",id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service",level:2},{value:"Creating a Connection",id:"creating-a-connection",level:3},{value:"Forwarding Individual Forms",id:"forwarding-individual-forms",level:3},{value:"Forwarding Specific Case Types",id:"forwarding-specific-case-types",level:3},{value:"Data Forwarding and OpenFn Workflow Design",id:"data-forwarding-and-openfn-workflow-design",level:2},{value:"Pulling Data From CommCare",id:"pulling-data-from-commcare",level:2},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",level:2},{value:"App installation and configuration",id:"app-installation-and-configuration",level:3},{value:"App Versioning",id:"app-versioning",level:4},{value:"Exporting Metadata",id:"exporting-metadata",level:3},{value:"Unique Identifiers",id:"unique-identifiers",level:3},{value:"Data Element Mapping Notes",id:"data-element-mapping-notes",level:3},{value:"CommCare Credentials",id:"commcare-credentials",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],p={toc:m},c="wrapper";function d(e){let{components:a,...r}=e;return(0,o.yg)(c,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"app-overview"},"App Overview"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," is a powerful data collection\nplatform developed by Dimagi. It is an open-source platform, and is primarily\nbest for mobile case management."),(0,o.yg)("h3",{id:"data-model"},"Data Model"),(0,o.yg)("p",null,"CommCare data is primarily stored in ",(0,o.yg)("strong",{parentName:"p"},"forms")," and ",(0,o.yg)("strong",{parentName:"p"},"cases"),". Forms are the\nbuilding blocks of applications and cases are used to track data on objects,\nusually people. Learn more about CommCare forms and cases at the links below."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Case management:",(0,o.yg)("br",{parentName:"li"}),(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management")),(0,o.yg)("li",{parentName:"ul"},"Form and case data in CommCare:\n",(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"))),(0,o.yg)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.yg)("p",null,"Example user stories:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"As a community health worker I want to store patient data that was collected\nin rural areas with no internet access in Salesforce so I can better analyze\nthe data being collected and make more informed recommendations."),(0,o.yg)("li",{parentName:"ul"},"As a teacher I want to set up automatic message alerts to my students in order\nto increase participation.")),(0,o.yg)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,o.yg)("p",null,"CommCare offers a number of integration options for extracting and/or loading\ndata to and from CommCare HQ."),(0,o.yg)("h3",{id:"web-api"},"Web API"),(0,o.yg)("p",null,"CommCare has different APIs for reading vs. updating data. Some helpful links:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Data+APIs"},"Data APIs")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"},"Bulk Case Upload API to mass update case records"))),(0,o.yg)("h2",{id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service"},"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service"),(0,o.yg)("p",null,"See\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare docs"),'\non how to configure this webhook to "push" data to an external system like\nOpenFn. This option is great for ',(0,o.yg)("em",{parentName:"p"},"real-time")," data forwarding."),(0,o.yg)("p",null,"In order to connect CommCare with OpenFn v2, you'll often need to set up\nCommCare data forwarding for individual forms, and for specific case types.\nLet's set up a connection to OpenFn and then see how to do each."),(0,o.yg)("h3",{id:"creating-a-connection"},"Creating a Connection"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Go to "Project Settings".'),(0,o.yg)("li",{parentName:"ol"},'Click "Connection Settings".'),(0,o.yg)("li",{parentName:"ol"},'Choose "Add Connection Settings" at the bottom'),(0,o.yg)("li",{parentName:"ol"},"Give the connection a name, and indicate email address(es) to send failure\nnotifications to.\n",(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications"},"See the CommCare docs for more on this."),"."),(0,o.yg)("li",{parentName:"ol"},"Paste the URL of the OpenFn\n",(0,o.yg)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/build/triggers#webhook-event-triggers"},"webhook"),"\nyou want to forward data to"),(0,o.yg)("li",{parentName:"ol"},"If you have ","[webhook authentication]",(0,o.yg)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/webhook-security"},"https://docs.openfn.org/documentation/webhook-security"),")\nset up on OpenFn, add the authentication type, the username and password here"),(0,o.yg)("li",{parentName:"ol"},"You can test the connection, then save it")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Connection",src:n(31770).A,width:"1107",height:"755"})),(0,o.yg)("h3",{id:"forwarding-individual-forms"},"Forwarding Individual Forms"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Click over to "Data Forwarding".'),(0,o.yg)("li",{parentName:"ol"},'Under "Forward Forms", click "+ Add a service to forward to"'),(0,o.yg)("li",{parentName:"ol"},"Select the connection to forward the forms to set up following the steps\nabove"),(0,o.yg)("li",{parentName:"ol"},"Name it"),(0,o.yg)("li",{parentName:"ol"},'Select "POST" HTTP Request Method'),(0,o.yg)("li",{parentName:"ol"},'Choose "JSON" as Payload Format'),(0,o.yg)("li",{parentName:"ol"},"Exclude any (eg. test) users - forms submitted by them won't be forwarded"),(0,o.yg)("li",{parentName:"ol"},'"XMLNSes of forms to include" lets you select which form(s) to forward by\nadding the XMLNSes of the required forms. Follow\n',(0,o.yg)("a",{parentName:"li",href:"https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143979045/Finding+a+Form+s+XMLNS"},"this CommCare guide"),"\nto find the XMLNS of any form. To add multiple, separate them with commas,\nspaces or newlines. Leave empty to forward all forms."),(0,o.yg)("li",{parentName:"ol"},'Hit "Start Forwarding" to save and activate')),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Forms",src:n(62649).A,width:"1080",height:"817"})),(0,o.yg)("h3",{id:"forwarding-specific-case-types"},"Forwarding Specific Case Types"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Go to "Data Forwarding".'),(0,o.yg)("li",{parentName:"ol"},'lick "+ Add a service to forward to" under "Forward Cases"'),(0,o.yg)("li",{parentName:"ol"},"Select the connection to forward the cases to"),(0,o.yg)("li",{parentName:"ol"},"Name the forwarder"),(0,o.yg)("li",{parentName:"ol"},'Select "POST" HTTP Request Method'),(0,o.yg)("li",{parentName:"ol"},'Choose "JSON" as Payload Format'),(0,o.yg)("li",{parentName:"ol"},'Select which case type(s) you want to forward, for example "patient"'),(0,o.yg)("li",{parentName:"ol"},"Exclude any (eg. test) users")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Cases",src:n(32694).A,width:"1153",height:"631"})),(0,o.yg)("h2",{id:"data-forwarding-and-openfn-workflow-design"},"Data Forwarding and OpenFn Workflow Design"),(0,o.yg)("p",null,"A clean way and efficient way of designing CommCare\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/build/triggers#webhook-event-triggers"},"webhook")," workflows on OpenFn v2 is to have a\nseparate workflow handling each form and case type. As each of your OpenFn\nwebhook workflows has a unique URL, you'll need to set up a separate CommCare\nconnection for each, then use that connection to forward the relevant form or\ncase type to OpenFn. So your CommCare Data Forwarding overview might look like\nthis:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Data Forwarding Overview",src:n(8571).A,width:"1443",height:"742"})),(0,o.yg)("p",null,"While on OpenFn, you can set up one or multiple jobs to handle the form or case\ntype received."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Form Workflow",src:n(42327).A,width:"1310",height:"856"})),(0,o.yg)("h2",{id:"pulling-data-from-commcare"},"Pulling Data From CommCare"),(0,o.yg)("p",null,"You can also fetch data from CommCare initiated from an OpenFn workflow, by\nsending a GET request to one of\n",(0,o.yg)("a",{parentName:"p",href:"https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143957366/Data+APIs"},"CommCare's data APIs"),".\nYou could use our ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/http-docs"},"http adaptor")," to achieve\nthis. Fetching can be done on a scheduled basis, as a daily or monthly sync.\nThis design also lends itself well to processing data in bulk."),(0,o.yg)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,o.yg)("h3",{id:"app-installation-and-configuration"},"App installation and configuration"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"CommCare docs on installing the mobile app:\n",(0,o.yg)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones"},"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones"))),(0,o.yg)("h4",{id:"app-versioning"},"App Versioning"),(0,o.yg)("p",null,"Ensure that you are always using the latest app version when testing, by\nupdating your app and checking that the version matches the latest version in\nCommCare HQ."),(0,o.yg)("h3",{id:"exporting-metadata"},"Exporting Metadata"),(0,o.yg)("p",null,"Use this\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Export+Form+Contents"},"link"),"\nto ",(0,o.yg)("strong",{parentName:"p"},"export form contents"),". This will give you access to all the ",(0,o.yg)("inlineCode",{parentName:"p"},"question ids"),"\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"labels")," in the CommCare form that are helpful for designing your\nintegration and mapping data elements."),(0,o.yg)("h3",{id:"unique-identifiers"},"Unique Identifiers"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"As CommCare data is stored in forms and cases, there are two types of UIDs in\nCommCare: ",(0,o.yg)("inlineCode",{parentName:"p"},"case_id")," & ",(0,o.yg)("inlineCode",{parentName:"p"},"form id"),". You can search for a particular case or form\nsubmission in CommCare by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Find Data by ID")," feature here:\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"},"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"),". For\nexample, if you received a submission in the OpenFn inbox that you would like\nto find in CommCare, search by ",(0,o.yg)("inlineCode",{parentName:"p"},"form id"),". If you'd like to find a particular\ncase (i.e. person, event, etc) search by ",(0,o.yg)("inlineCode",{parentName:"p"},"case id"),".",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649444-04f371ea-80b1-4c28-8d42-1591c0a96758.png",alt:"image"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"In the OpenFn ",(0,o.yg)("a",{parentName:"p",href:"/documentation/get-started/terminology#message"},"message"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"id"),"\nis the unique identifier for the form submission\n",(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649481-83b3f7ee-c6a6-42f8-8752-2f4e96b7fa1f.png",alt:"image"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"case_id")," is the unique identifier for the case being updated by the form. For\nexample, the ",(0,o.yg)("inlineCode",{parentName:"p"},"case_id")," can be the UID for a person.\n",(0,o.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649509-098a5418-4b72-4cec-a4d2-47c8bedaac25.png",alt:"image"})))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"N.B.")," Unique identifiers and ",(0,o.yg)("inlineCode",{parentName:"p"},"hidden fields")," in CommCare forms: Make sure\nthat unique identifiers for forms and objects are always in the form. If the\nunique identifier isn't relevant for the user, it can be added to the form as a\n",(0,o.yg)("inlineCode",{parentName:"p"},"hidden field"),". Learn more about ",(0,o.yg)("inlineCode",{parentName:"p"},"hidden fields")," here:\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial"},"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial")),(0,o.yg)("h3",{id:"data-element-mapping-notes"},"Data Element Mapping Notes"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Labels")," are generally not mapped in an integration because they represent text\nthat is displayed to the CommCare user to facilitate easy use of the\napplication. ",(0,o.yg)("inlineCode",{parentName:"p"},"Ids")," however, represent actual data that should be mapped."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"When mapping ",(0,o.yg)("inlineCode",{parentName:"li"},"multiple choice")," questions, make sure to consider how the answer\nchoices should map to the source/destination system.")),(0,o.yg)("h2",{id:"commcare-credentials"},"CommCare Credentials"),(0,o.yg)("p",null,'To connect to CommCare you\'ll need a username, password, host URL, and the\n"appId".'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"CommCare Credentials Menu",src:n(93156).A,width:"1362",height:"404"})),(0,o.yg)("p",null,'The username is your full email address and the "appId" is the UUID which\ndesignates your CommCare project as different from everyone elses. It can be\nfound in the URL of your application when you first enter it from the project\nscreen. I.e., the last part of this URL:\n',(0,o.yg)("inlineCode",{parentName:"p"},"https://www.commcarehq.org/a/YOUR_PROJECT/apps/view/YOUR_APP_ID/")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"CommCare Cred",src:n(373).A,width:"734",height:"860"})),(0,o.yg)("p",null,"The raw JSON of your credential (for use in the CLI or when inspecting\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration"),") is defined in the\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/commcare-configuration-schema"},"CommCare Configuration"),"\nsection."),(0,o.yg)("h2",{id:"common-errors"},"Common Errors"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Docs in progress!\n")),(0,o.yg)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.yg)("p",null,"OpenFn implementations can leverage both the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},(0,o.yg)("inlineCode",{parentName:"a"},"HTTP"))," and\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-commcare"},(0,o.yg)("inlineCode",{parentName:"a"},"CommCare"))," adaptors to connect\nwith the CommCare API."),(0,o.yg)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync):\n",(0,o.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,o.yg)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,o.yg)("li",{parentName:"ul"},"Grassroot Soccer (CommCare-to-Salesforce sync):\n",(0,o.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}d.isMDXComponent=!0},93156:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commcare_credential-ada449a6fab844160c5991a069bff415.png"},373:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commcare_credential_edit-47a4bc51e45c06831ec87ec29832ac19.png"},8571:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commcare_data_forwarding_overview-3837a543db6a237a0f7e9f2210990efd.png"},32694:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commcare_forward_cases-34e867d0d80bf18dd3ea929223042e7f.png"},31770:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commecare_connection_settings-4702ac712ea18be8dbda10bbd7c4f738.png"},62649:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/commecare_forward_forms-2aeae8f002584fbcec044605f0de15c1.png"},42327:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/form_workflow-76097672bc24c9948b5bceee2ab9f9b0.png"}}]);