"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[37878],{98890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var n=a(58168),o=(a(96540),a(15680));const r={title:"Walk-through - Syncing your CommCare form submissions to a PostgreSQL database"},i=void 0,s={unversionedId:"getting-started/commcare-project-walkthrough",id:"version-legacy/getting-started/commcare-project-walkthrough",title:"Walk-through - Syncing your CommCare form submissions to a PostgreSQL database",description:"Before starting this tutorial please make sure:",source:"@site/versioned_docs/version-legacy/getting-started/commcare-project-walkthrough.md",sourceDirName:"getting-started",slug:"/getting-started/commcare-project-walkthrough",permalink:"/documentation/legacy/getting-started/commcare-project-walkthrough",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/getting-started/commcare-project-walkthrough.md",tags:[],version:"legacy",frontMatter:{title:"Walk-through - Syncing your CommCare form submissions to a PostgreSQL database"}},l={},g=[{value:"Getting started",id:"getting-started",level:2},{value:"Getting data from CommCare",id:"getting-data-from-commcare",level:2},{value:"Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service",id:"option-1-webhook-to-forward-cases-andor-forms-in-real-time-from-commcare-to-openfn-using-rest-service",level:3},{value:"Option 2: Extracting Commcare data via the REST API",id:"option-2-extracting-commcare-data-via-the-rest-api",level:3},{value:"Transforming and loading CommCare data to a PostgreSQL database",id:"transforming-and-loading-commcare-data-to-a-postgresql-database",level:2},{value:"Time to test!",id:"time-to-test",level:2}],p={toc:g},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Before starting this tutorial please make sure:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You have signed up for ",(0,o.yg)("a",{parentName:"li",href:"http://openfn.org"},"OpenFn.org")," (it takes less than a\nminute!)"),(0,o.yg)("li",{parentName:"ul"},"You have checked out our glossary and have an understanding of basic OpenFn\nand API terminology. Check out the pages below to get started",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/documentation/legacy/getting-started/terminology"},"OpenFn Concepts")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/documentation/legacy/getting-started/glossary"},"A glossary for data integration")))),(0,o.yg)("li",{parentName:"ul"},"You have a CommCare application with at least one form configured. This is\nyour source system."),(0,o.yg)("li",{parentName:"ul"},"You have a PostgreSQL database configured. This is your destination system.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"If you don\u2019t have a CommCare application or PostgreSQL database setup, you can\nalso follow along with the prebuilt solution. Follow along at the links below:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing"},"Mapping specifications document")),(0,o.yg)("li",{parentName:"ol"},"Commcare application to download:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Username: testuser"),(0,o.yg)("li",{parentName:"ul"},"Password: 123")))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"install_cc_app",src:a(46087).A,width:"852",height:"466"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://www.openfn.org/projects/commcare-demo/jobs"},"OpenFn project")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://analytics.openfn.org/public/question/095449a9-5696-463c-a4fb-24614c9f08a5"},"Public report that shows records in the PostgreSQL database"))),(0,o.yg)("h2",{id:"getting-started"},"Getting started"),(0,o.yg)("p",null,"In this walkthrough, we will be setting up an ",(0,o.yg)("strong",{parentName:"p"},"automatic data sync between\nCommCare and a PostgreSQL database"),". We will be syncing submissions coming from\na CommCare ",(0,o.yg)("inlineCode",{parentName:"p"},"Maternal and Newborn Health")," application that has a\n",(0,o.yg)("inlineCode",{parentName:"p"},"Register a New Patient")," form."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Whenever a CommCare user registers a new patient, the patient details will\nautomatically be synced to an already configured PostgreSQL database to enable\nreal-time monitoring and analytics on data collected in the field. For example,\nthis database can quickly be connected to a dashboard that collects aggregate\ndata on patients registered!")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"cc-postgres",src:a(68135).A,width:"1144",height:"246"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"This integration can be broken up into two parts:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Getting data from your source system to your OpenFn inbox so you can inspect\nthe data structure to inform the job design for part two"),(0,o.yg)("li",{parentName:"ol"},"Transforming and loading this data to your destination system")),(0,o.yg)("p",null,"\u2026 let\u2019s get started!"),(0,o.yg)("h2",{id:"getting-data-from-commcare"},"Getting data from CommCare"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"There are two ways to get your CommCare form submissions in your OpenFn inbox\nto inspect the data, and to later map it to your destination system.")),(0,o.yg)("h3",{id:"option-1-webhook-to-forward-cases-andor-forms-in-real-time-from-commcare-to-openfn-using-rest-service"},"Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service"),(0,o.yg)("p",null,"CommCareHQ has a native data forwarding feature that provides a webhook/REST\nservice that can be pointed to the destination of your choice (i.e., your OpenFn\nInbox). When a webhook is configured, any Commcare forms submitted are\n",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"automatically forwarded"))," to the designated endpoint, such as your OpenFn\ninbox. After data forwarding is set up, it happens automatically, ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"in\nreal-time for all forms and cases")),". Learn more about configuring a webhook\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/commcare#webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"option1",src:a(39917).A,width:"1132",height:"572"})),(0,o.yg)("h3",{id:"option-2-extracting-commcare-data-via-the-rest-api"},"Option 2: Extracting Commcare data via the REST API"),(0,o.yg)("p",null,"CommCare provides a robust\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/List+Forms"},"REST API")," for\nextracting and loading data. This second option involves configuring a job in\nOpenFn to fetch CommCare submissions via a ",(0,o.yg)("inlineCode",{parentName:"p"},"GET")," HTTP request with parameters to\nfilter your data query. Follow along for how to set this job up!"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new project space, or open up an existing one where you have Admin\naccess."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create_new_project",src:a(82047).A,width:"1226",height:"672"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new \u201cCron\u201d trigger to schedule this extract job. Consider how\nfrequently you want this job to run. Daily? Weekly? Every 1 hour?"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create_trigger_cc",src:a(96132).A,width:"1440",height:"672"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a \u201cRaw JSON\u201d credential to input the authentication details for your\nCommCare source application."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"add_new_cred",src:a(26643).A,width:"1440",height:"672"})),(0,o.yg)("p",null,"In the credential ",(0,o.yg)("inlineCode",{parentName:"p"},"JSON Configuration"),", add your credential as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "APPID",\n  "password": "PASSWORD",\n  "username": "USERNAME",\n  "applicationName": "APP NAME",\n  "hostUrl": "https://www.CommCarehq.org",\n  "openfnInboxUrl": "INBOXURL"\n}\n')),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Check out ",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/getting-started/terminology/#inbox"},"this")," docs page on\nhow to find your OpenFn inbox URL to fill in the configuration above.")),(0,o.yg)("p",null,"Now that you've configured the job Trigger and Credential to authenticate\u2026"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Configure a new job. Note that this job will use the HTTP adaptor in order\nto connect with the CommCare REST API."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"configure_job_cc",src:a(44975).A,width:"1438",height:"672"})),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Writing the \u201cFETCH\u201d job expression:")," You will want to write a job\nexpression that sends a ",(0,o.yg)("inlineCode",{parentName:"p"},"GET")," HTTP request to CommCare\u2019s List Forms API."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"GET /https://www.CommCarecommcarehq.org/a/cc-demo-2/api/v0.5/form")),(0,o.yg)("p",{parentName:"li"},"We have included the code snippet for replicating this job below. Please\ncheck out the\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/List+Forms"},"CommCare API docs"),"\non how to adjust the request query parameters."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"get(\n  'https://www.CommCarehq.org/a/cc-demo-2/api/v0.5/form/',\n  {\n    query: {\n      //see API docs to adjust query parameters\n      limit: 1000, //max limit: 1000\n      offset:\n        state.meta && state.meta.next\n          ? state.meta.limit + state.meta.offset\n          : 0,\n      received_on_start: '2022-02-16',\n      received_on_end: '2022-02-18',\n      xmlns:\n        'http://openrosa.org/formdesigner/D771417E-354E-4906-A686-DF0BA230F16A',\n    },\n  },\n  state => {\n    //After the CommCare API responds to our GET request, we want to POST the data in the response to our OpenFn Inbox for further inspection\n    const { meta, objects } = state.data;\n    const { openfnInboxUrl } = state.configuration;\n    const forms = objects;\n\n    state.configuration = { baseUrl: 'https://www.openfn.org' };\n    console.log('Posting form submissions to OpenFn Inbox...');\n\n    return each(forms, state => {\n      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({\n        ...state,\n        data: {},\n        references: [],\n      }))(state);\n    })(state);\n  }\n);\n")),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Once you are finished configuring and writing your job, save and run it!"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"save_run_job_cc",src:a(19800).A,width:"1438",height:"672"})),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Check out the ",(0,o.yg)("inlineCode",{parentName:"strong"},"Activity History")," tab to see if your run succeeded.")," If it\nsucceeded, you should see:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Successful run log (look for the green!)"),(0,o.yg)("li",{parentName:"ul"},"New Messages in your ",(0,o.yg)("inlineCode",{parentName:"li"},"Inbox")," containing data for any forms submitted in the\ntime frame specified in your query.")))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"activity_history_cc",src:a(52562).A,width:"1260",height:"608"})),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"What do do if your run fails:")),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"Open the run to inspect the error message"),(0,o.yg)("li",{parentName:"ol"},"Adjust the job to issue and re-run the transaction as needed by clicking the\nplay button in ",(0,o.yg)("inlineCode",{parentName:"li"},"Activity History")),(0,o.yg)("li",{parentName:"ol"},"Check out the ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/postgresql/#common-errors"},"PostgreSQL common errors"),"\npage for more details!"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"If you want to replicate this setup and configure your own CommCare\nintegration, first consider your CommCare extraction options - remember that\nthere are 2:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Data forwarding webhook (native CommCare feature)")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"REST API (List Forms API - ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"API access requires a paid CommCare plan")),")"),(0,o.yg)("p",{parentName:"li"},"The main advantage of using the webhook is that your data is forwarded to the\ndestination system in real-time. However, the List Forms API is also\nadvantageous because it enables users to extract data in bulk on a scheduled\nbasis, for syncing historical data every month on the 30th, for example.\nDeciding on which option to go with depends on your business requirements."))),(0,o.yg)("h2",{id:"transforming-and-loading-commcare-data-to-a-postgresql-database"},"Transforming and loading CommCare data to a PostgreSQL database"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"You should have a database configured and a username provided for OpenFn to\nread and write data in your target DB tables.")," For this demo, we have\nconfigured the database\n",(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing"},"like this"),"\nto capture the CommCare form data. Check out the\n",(0,o.yg)("a",{parentName:"li",href:"/documentation/legacy/design/design-quickstart#3-map-data-elements-to-be-exchanged"},"design quickstart"),"\nfor how to create your own ",(0,o.yg)("inlineCode",{parentName:"li"},"mapping specification document")," to map data\nelements to be exchanged.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"db_config",src:a(48566).A,width:"1122",height:"564"})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new message filter trigger, to run our second job for every new\npatient record received in the OpenFn inbox.")," Learn more about message\nfilter triggers\n",(0,o.yg)("a",{parentName:"li",href:"/documentation/legacy/build/triggers#message-filter-triggers"},"here"),".")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create_new_trgger_db",src:a(97190).A,width:"1438",height:"672"})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a PostgreSQL credential which will be used by the job to\nauthenticate with the database."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"add_credential_postgres",src:a(69869).A,width:"1434",height:"672"})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new job with the ",(0,o.yg)("inlineCode",{parentName:"strong"},"postgresql")," adaptor for loading the CommCare\ndata into your destination database."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"configure_job_postgres",src:a(85648).A,width:"1434",height:"672"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Writing the job:")," For this job we will use the upsert operation to\ninsert/update records in the destination ",(0,o.yg)("inlineCode",{parentName:"p"},"patient")," table and use ",(0,o.yg)("inlineCode",{parentName:"p"},"patient_id")," as\nthe primary key. An ",(0,o.yg)("inlineCode",{parentName:"p"},"upsert")," will update an existing row if a specified value\nalready exists in a table, and insert a new row if the specified value doesn't\nalready exist."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"upsert('patient', 'ON CONSTRAINT patient_pk', {\n  patient_id: dataValue('data.patient_name'),\n  patient_name: dataValue('data.patient_name'),\n  village_name: dataValue('data.village_name'),\n  last_menstrual_period: dataValue('data.last_menstrual_period'),\n  expected_delivery_date: dataValue('data.expected_delivery_date'),\n  children_alive: dataValue('data.children_alive'),\n  living_children: dataValue('data.living_children'),\n  feeling_sick: dataValue('data.feeling_sick'),\n  total_children: dataValue('data.Total_children'),\n  risk_level: dataValue('data.Risk_level'),\n});\n")),(0,o.yg)("p",null,"Feel free to modify the code above to reflect your CommCare and database\nconfiguration according to your mapping specifications. Check out this\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/jobs/job-studio#job-studio-features"},"page")," for how to copy the\ndataValue for source data fields in the OpenFn job studio."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Check out the\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/design/design-quickstart#3-map-data-elements-to-be-exchanged"},"design quickstart"),"\nfor how to create your own ",(0,o.yg)("inlineCode",{parentName:"p"},"mapping specification document")," to map data elements\nto be exchanged.")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Save and turn on the job"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"save_db_job",src:a(5742).A,width:"1434",height:"672"})),(0,o.yg)("h2",{id:"time-to-test"},"Time to test!"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Submit a form in CommCare"),(0,o.yg)("li",{parentName:"ol"},"If you have enabled data forwarding, refresh your OpenFn inbox"),(0,o.yg)("li",{parentName:"ol"},"If you have not enabled data forwarding and set up a FETCH job instead, run\nthe job (ensure the ",(0,o.yg)("inlineCode",{parentName:"li"},"received_on_start")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"received_on_start")," dates in the\nFETCH are appropriate)."),(0,o.yg)("li",{parentName:"ol"},"Run the FETCH job\u2013if the fetch job passes, the \u201cLoad to DB\u201d job should\nautomatically run"),(0,o.yg)("li",{parentName:"ol"},"Check out the ",(0,o.yg)("inlineCode",{parentName:"li"},"Activity History")," and ensure that both runs passed (look for\nthe green checks in the ",(0,o.yg)("inlineCode",{parentName:"li"},"Status/Action")," column).")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"activity_history_final",src:a(51862).A,width:"1116",height:"398"})),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Finally, refresh your database and check out the new submission data!"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"metabase",src:a(73109).A,width:"2826",height:"260"})),(0,o.yg)("p",null,"While this guide is specifically for PostgreSQL databases, you can generally\nfollow these same steps for other database types (e.g., MS SQL or MySQL)\u2014simply\nleverage a different adaptor in your job configuration."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Other resources to check out:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"OpenFn Job Library"),(0,o.yg)("li",{parentName:"ol"},"OpenFn Docs \u2018App\u2019 pages for CommCare and Postgres")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Any questions? Comments? New configuration ideas? Please reach out to us with\na post on the ",(0,o.yg)("a",{parentName:"strong",href:"https://community.openfn.org/"},"OpenFn Community")," forum.")))}m.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(a),c=o,u=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82047:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Create_new_project-b47871a0b6c540c5a79f2d6cddaf1538.gif"},52562:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/activity_history_cc-154b50f9b747dd426818196d98c5a741.png"},51862:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/activity_history_final-44c148bba4bd5098dc388bef628a6ef4.png"},69869:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/add_credential_postgres-afd69dbe6eaf064230a78172533156b0.gif"},26643:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/add_new_cred-912b4b37f5b26072662520bf0d9b7a5e.gif"},68135:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cc-postgres-0e43a3ec2fd55882ec72a4c7103bb700.png"},44975:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/configure_job_cc-e94df21dc9df7094b76da52975731cb2.gif"},85648:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/configure_job_postgres-621ed70d671c2d2ee0228e557299d651.gif"},97190:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_new_trgger_db-0aa1c2d5037ad6d65e533b40d5911aed.gif"},96132:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_trigger_cc-4a9c63aeb70cf7e9d51cfa2f8c539bc5.gif"},48566:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/db_config-b22df6f0bbefc59968ed1f89559088b2.png"},46087:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/install_cc_app-a0db259c1350b908fcce5c2ab00d575a.png"},73109:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/metabase-d197691432643693b52d5e5bb0b288db.png"},39917:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/option1-fce1d1c17260348267c6d93c42e93905.png"},5742:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/save_db_job-00d96d7bfa81c65f1e383365693a88e2.gif"},19800:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/save_run_job_cc-4515134aea4e1776ccb7264786e1ef83.gif"}}]);