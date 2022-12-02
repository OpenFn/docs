"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[96110],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},40244:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"Platform Quick-Start"},s=void 0,i={unversionedId:"build/example-build",id:"build/example-build",title:"Platform Quick-Start",description:"Learn how to set up a simple data integration using the OpenFn platform. If you",source:"@site/docs/build/example-build.md",sourceDirName:"build",slug:"/build/example-build",permalink:"/documentation/build/example-build",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/example-build.md",tags:[],version:"current",frontMatter:{title:"Platform Quick-Start"},sidebar:"docs",previous:{title:"So, what is an integration? \ud83e\udd14",permalink:"/documentation/getting-started/so-you-want-to-integrate"},next:{title:"OpenFn Concepts",permalink:"/documentation/getting-started/terminology"}},l={},p=[{value:"1. Identify your source and destination system",id:"1-identify-your-source-and-destination-system",level:2},{value:"2. Create a project and send data from your source system to your OpenFn inbox",id:"2-create-a-project-and-send-data-from-your-source-system-to-your-openfn-inbox",level:2},{value:"3. Create credentials to connect your destination system",id:"3-create-credentials-to-connect-your-destination-system",level:2},{value:"4. Create a new job",id:"4-create-a-new-job",level:2},{value:"4.1 Create a new trigger",id:"41-create-a-new-trigger",level:3},{value:"4.2 Select an API adaptor",id:"42-select-an-api-adaptor",level:3},{value:"4.3 Choose your adaptor operation",id:"43-choose-your-adaptor-operation",level:3},{value:"4.4 Edit the function in your expression editor",id:"44-edit-the-function-in-your-expression-editor",level:3},{value:"5. Set autoprocess to true",id:"5-set-autoprocess-to-true",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Learn how to set up a simple data integration using the OpenFn platform. If you\nget stuck along the way, post a question to our\n",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org/"},"community forum")," so we can give you a hand."),(0,a.kt)("p",null,"In this walkthrough, we\u2019ll connect a ",(0,a.kt)("strong",{parentName:"p"},"KoboToolbox")," form to ",(0,a.kt)("strong",{parentName:"p"},"Google Sheets"),".\nIf you don\u2019t have a KoboToolbox account, we'll provide you with a demo account\nyou can use for the tutorial or you can create one for free."),(0,a.kt)("p",null,"We\u2019ll be completing the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify your source and destination system"),(0,a.kt)("li",{parentName:"ol"},"Create a project and send data from your source system to your OpenFn inbox"),(0,a.kt)("li",{parentName:"ol"},"Create credentials to connect your destination system"),(0,a.kt)("li",{parentName:"ol"},"Create a your job")),(0,a.kt)("h2",{id:"1-identify-your-source-and-destination-system"},"1. Identify your source and destination system"),(0,a.kt)("p",null,"The best way to figure out what an integration flow should look like is to\nphrase it in the following way: When A happens ",(0,a.kt)("strong",{parentName:"p"},"[in system 1]"),", I want B to\nhappen ",(0,a.kt)("strong",{parentName:"p"},"[in system 2]"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"When a \u2018Case registration\u2019 form is submitted ","[in KoboToolbox]",", I want the\nresponse to be inserted into my \u2018Kobo case registrations\u2019 sheet ","[in Google\nSheets]",".")),(0,a.kt)("p",null,"This tells us that system 1 (KoboToolbox) is our source application, and system\n2 (Google sheets) is our destination system."),(0,a.kt)("h2",{id:"2-create-a-project-and-send-data-from-your-source-system-to-your-openfn-inbox"},"2. Create a project and send data from your source system to your OpenFn inbox"),(0,a.kt)("p",null,"First, create an OpenFn ",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"account")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/login"},"login"),". Navigate to your ",(0,a.kt)("strong",{parentName:"p"},"Project dashboard")," -\nyou'll see that a sample project has been created for you."),(0,a.kt)("p",null,"Create a new project called \u2018Kobo case registrations\u2019 by clicking on the blue +\nicon at the bottom right hand corner of your dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new account dashboard",src:o(67469).Z,title:"Create a new project",width:"2532",height:"1330"})),(0,a.kt)("p",null,"When you click 'View' to enter your project space, you'll be taken to your\n",(0,a.kt)("strong",{parentName:"p"},"inbox"),". This is where you will receive ",(0,a.kt)("strong",{parentName:"p"},"messages")," - the data that gets sent\nfrom your source system to OpenFn. Copy your ",(0,a.kt)("strong",{parentName:"p"},"inbox url")," to configure\nKoboToolbox to send data to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inbox url",src:o(41613).Z,title:"Copy your inbox URL",width:"2300",height:"560"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kf.kobotoolbox.org/accounts/login/#/"},"Log into")," our KoboToolbox demo\naccount with ",(0,a.kt)("em",{parentName:"p"},"username: openfn_demo and password: openfn_demo"),". Select the form\nyou\u2019d like to connect (if using our demo account this will be 'COVID 19 case\nregistration') and go to Settings -> REST services -> Register a new service."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kobo",src:o(85710).Z,title:"Register a REST service with Kobo",width:"2002",height:"754"})),(0,a.kt)("p",null,"Set the service name to OpenFn and the URL to your project inbox url."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kobo",src:o(73441).Z,title:"Set the REST service URL to your OpenFn inbox URL",width:"1178",height:"1554"})),(0,a.kt)("p",null,"Your form should now be configured to send data to your OpenFn project inbox\nwhenever a response is submitted. We can test this out by submitting some form\nresponses at Form -> Open."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kobo form",src:o(48677).Z,title:"Open a kobo form",width:"2688",height:"1006"})),(0,a.kt)("p",null,"Return to your project inbox. You should see a new message there, which contains\nthe data submitted in the KoboToolbox form response."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inbox",src:o(16022).Z,title:"View inbound messages in your inbox",width:"2536",height:"1044"})),(0,a.kt)("p",null,"If you click on the message, and open up the ",(0,a.kt)("strong",{parentName:"p"},"message body")," you\u2019ll see the\ndata that you submitted to the form. To view the entire message, open it in full\nscreen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"message body",src:o(50927).Z,title:"Open up a message body",width:"1750",height:"1124"})),(0,a.kt)("p",null,"Once you can see the entire message, you need to identify a data point that will\nbe the same for every submission. In this case, we know that all of our messages\nwill have the same form ID. Save the snippet you have identified\n(",(0,a.kt)("inlineCode",{parentName:"p"},'"\\_xform_id_string": "aDReHdA7UuNBYsiCXQBr43"'),"), you'll need it later to\ncreate your trigger."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"common data point",src:o(78946).Z,title:"Identify a common snippet for all your messages",width:"1862",height:"1424"})),(0,a.kt)("h2",{id:"3-create-credentials-to-connect-your-destination-system"},"3. Create credentials to connect your destination system"),(0,a.kt)("p",null,"In order to connect to your destination system, you need to sign in through\nOpenFn to create credentials. These will allow you to send data to your google\nsheet."),(0,a.kt)("p",null,"Head to the credentials section of your dashboard, and once again click the\nblue + sign to create new credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create credentials",src:o(86831).Z,title:"Create credentials to connect your external system",width:"2544",height:"1436"})),(0,a.kt)("p",null,"You\u2019ll see various apps you recognise - these are all of the systems that we can\nhandle credentials for. Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sheets")," one, and log into your google\naccount when you get the pop up window. You\u2019ll get a confirmation message. Close\nthe window and give your new project access to these credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"select credential type",src:o(74493).Z,title:"Select a credential type",width:"2450",height:"994"})),(0,a.kt)("p",null,"You\u2019ve now created credentials that will allow you to perform operations in\ngoogle sheets from within your job."),(0,a.kt)("h2",{id:"4-create-a-new-job"},"4. Create a new job"),(0,a.kt)("p",null,"A job is a series of operations that formats and transfers data at a given time.\nIt needs a trigger, which determines when these operations should happen, and an\nexpression, which determines what should be done with the incoming data and\nwhere it should go."),(0,a.kt)("p",null,"Navigate to the jobs section in your dashboard, then click the + icon to create\na new job."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new job",src:o(83061).Z,title:"Create a new job",width:"2546",height:"1450"})),(0,a.kt)("p",null,"Give the job a name (we\u2019ll make ours \u201cKobo to sheets\u201d)."),(0,a.kt)("h3",{id:"41-create-a-new-trigger"},"4.1 Create a new trigger"),(0,a.kt)("p",null,"Every job needs a trigger, which determines when it should be run. A ",(0,a.kt)("strong",{parentName:"p"},"message\nfilter")," is a type of trigger which allows you to trigger a job when a specific\nmessage comes into your inbox."),(0,a.kt)("p",null,"In this example, you want your job to be triggered by any message that has come\nfrom the COVID 19 registration KoboToolbox form. Therefore the inclusion\ncriteria is the id string of the form which we saved earlier on:\n",(0,a.kt)("inlineCode",{parentName:"p"},'{"\\_xform_id_string": "aDReHdA7UuNBYsiCXQBr43"}'),". ",(0,a.kt)("em",{parentName:"p"},'(Don\u2019t forget to add curly\nbrackets "{}" around your inclusion criteria snippet.)')," This is found in the\nmessage body sent by each submitted form response to your inbox."),(0,a.kt)("p",null,"This message filter will trigger your job whenever a message which includes the\nsnippet comes into your inbox."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new trigger",src:o(94403).Z,title:"Create a new trigger",width:"1080",height:"1132"})),(0,a.kt)("p",null,"Save your trigger. You should see a confirmation message \u201cFound x matching\nmessages\u201d. To see the data from your last message inside the\n",(0,a.kt)("a",{parentName:"p",href:"/documentation/jobs/state/#initial-state"},"initial state"),", drag the\n",(0,a.kt)("strong",{parentName:"p"},"Expression")," panel to the right."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger message",src:o(71142).Z,title:"View a matching trigger message in initial state",width:"2348",height:"1406"})),(0,a.kt)("h3",{id:"42-select-an-api-adaptor"},"4.2 Select an API adaptor"),(0,a.kt)("p",null,"Adaptors are preconfigured pieces of code that allow communication with\ndestination systems."),(0,a.kt)("p",null,"In this example, you will send data collected from individual responses to your\nkobo form (append values) to google sheets."),(0,a.kt)("p",null,"Your API adaptor is therefore google sheets."),(0,a.kt)("h3",{id:"43-choose-your-adaptor-operation"},"4.3 Choose your adaptor operation"),(0,a.kt)("p",null,"Every adaptor allows you to perform different operations in your destination\nsystem. These operations are functions specific to every API adaptor."),(0,a.kt)("p",null,"Open up the inline documentation for the adaptor to see the available functions.\nCopy the appendValues function, then paste it into your Expression editor. It\nshould look something like this."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"adaptor operation",src:o(20396).Z,title:"Choose an adaptor operation",width:"1656",height:"744"})),(0,a.kt)("h3",{id:"44-edit-the-function-in-your-expression-editor"},"4.4 Edit the function in your expression editor"),(0,a.kt)("p",null,"The function you copy pasted into your expression editor is a template that\nshows you what your function should look like. This means the text in quotation\nmarks are just placeholders - they need to be replaced with the data entries you\nwant to send."),(0,a.kt)("p",null,"First, get your spreadsheet ID from the URL of your google sheet (between ",(0,a.kt)("inlineCode",{parentName:"p"},"d/"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"/edit"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sheets ID",src:o(76614).Z,title:"Find a google sheets ID",width:"1704",height:"630"})),(0,a.kt)("p",null,"Copy and paste the ID into your ",(0,a.kt)("inlineCode",{parentName:"p"},"appendValues")," operation to replace the\nplaceholder value for ",(0,a.kt)("inlineCode",{parentName:"p"},"spreadsheetId"),". This ensures your values get appended to\nthe correct spreadsheet."),(0,a.kt)("p",null,"Next, open up the initial state to select each form value you want to send.\nLet\u2019s start with the \u2018National ID\u2019, as this is the first column in your google\nsheet. Select the desired input from the dropdown menu located in the initial\nstate window and paste it to replace the placeholder text ('From expression')\ninside ",(0,a.kt)("inlineCode",{parentName:"p"},"values: []"),". Repeat this for the following values, and remove line 7 as\nthis would add a second row to your sheet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"select values",src:o(22027).Z,title:"Select values from initial state",width:"1664",height:"810"})),(0,a.kt)("p",null,"Your operation should now look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1zFcE05jGLYouXDpevdYQO81ejBWz7hn0ahEOg2gs9fw',\n  range: 'Sheet1!A1:E1',\n  values: [\n    [\n      dataValue('National_ID'),\n      dataValue('First_Name_of_Patient'),\n      dataValue('Last_Name_of_Patient'),\n    ],\n  ],\n});\n")),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save and run")," to get a \u2018Success!\u2019 response in the ",(0,a.kt)("inlineCode",{parentName:"p"},"run logs")," and see that\nthe data entries between the square brackets ","[ ]"," have been added to your google\nsheet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"save and run",src:o(4394).Z,title:"Save and run a job",width:"1652",height:"814"})),(0,a.kt)("h2",{id:"5-set-autoprocess-to-true"},"5. Set autoprocess to true"),(0,a.kt)("p",null,"You have now written and tested your job. In order to run your job automatically\nevery time a message matches the trigger inclusion criteria, turn on\nauto-process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"autoprocess",src:o(9345).Z,title:"Enabling 'autoprocess' for a job",width:"1651",height:"1592"})),(0,a.kt)("p",null,"You're all set! Try out your job by submitting another form response to see the\ndata automatically populate your google sheet."))}d.isMDXComponent=!0},67469:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.1_new_account_dashboard-ea0fee3e54b6d22aed07d29547df1929.png"},41613:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.2_inbox_url-30538a1d10ef54a0707de15fe1fbdf60.png"},85710:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.3_kobo_rest-acb8f89ed914a7ab4b37635c19c453e5.png"},73441:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.4_kobo_rest-56e51c209be91a60a67968c8e846f0ee.png"},48677:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.5_open_kobo_form-223bd1099644dcc0ce35a3ed3bb58b60.png"},16022:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.6_inbox-a5fee24bfe24497a0a0c5efbc64c4b64.png"},50927:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.7_message-f56fb02724a02dda83811681fa53377a.png"},78946:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2.8_common_data_point-f411098a959a59131869dadcfc5ad3dc.png"},86831:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/3.1_create_credentials-c6f2318c72c32c4e10e831056acc174e.png"},74493:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/3.2_select_credential_type-49ae8fca6426ee328562808a184db8de.png"},83061:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.1_new_job-101c44832a0fdb5ea1a728cfd8318638.png"},94403:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.2_new_trigger-2ad8a291d81ad815e045f0c6b4280242.png"},71142:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.3_trigger_message-c883ec97d65e5ec599819f0bc806af6f.png"},20396:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.4_adaptor_operation-7a6a8f255b23aea47600096896978147.png"},76614:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.5_sheets_id-666fc13fea9e6245498d34e9c88f0af0.png"},22027:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.6_select_values-53e93878ff42af4a2ad45881d2a9b17a.png"},4394:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4.7_save_and_run-a81c77d1fc487a9304e1e7c707b72344.png"},9345:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/5.1_autoprocess-7ebe1381788d6e36695a3c0cfd70761d.png"}}]);