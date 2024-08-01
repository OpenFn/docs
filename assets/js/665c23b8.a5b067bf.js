"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[55580],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const r={title:"SurveyCTO"},i=void 0,s={unversionedId:"surveycto",id:"surveycto",title:"SurveyCTO",description:"App Overview",source:"@site/adaptors/surveycto.md",sourceDirName:".",slug:"/surveycto",permalink:"/adaptors/surveycto",draft:!1,tags:[],version:"current",frontMatter:{title:"SurveyCTO"},sidebar:"adaptors",previous:{title:"smpp developer readme",permalink:"/adaptors/packages/smpp-readme"},next:{title:"surveycto@2.2.1",permalink:"/adaptors/packages/surveycto-docs"}},l={},p=[{value:"App Overview",id:"app-overview",level:2},{value:"Integration Use Cases:",id:"integration-use-cases",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"1. Webhooks (for real-time integration):",id:"1-webhooks-for-real-time-integration",level:3},{value:"2. API integration (for scheduled and/or bulk data integration):",id:"2-api-integration-for-scheduled-andor-bulk-data-integration",level:3},{value:"Configuring a Credential with API Access",id:"configuring-a-credential-with-api-access",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"app-overview"},"App Overview"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.surveycto.com/"},"SurveyCTO")," is a versatile data collection platform\ndesigned to streamline the process of gathering field data for research,\nevaluations, and monitoring purposes. SurveyCTO operates in the cloud, providing\nusers with convenient online access to its suite of tools and features."),(0,o.yg)("p",null,"At its core, SurveyCTO offers a comprehensive solution for creating and\ndeploying customized surveys, forms, and questionnaires, enabling organizations\nto collect data efficiently and accurately. In addition to its primary data\ncollection functionality, SurveyCTO boasts a range of advanced features,\nincluding robust data validation, real-time monitoring capabilities, and\nseamless integration with external data systems. This versatile platform caters\nto a diverse array of needs, serving researchers, NGOs, government agencies, and\nother entities seeking reliable data collection solutions."),(0,o.yg)("h2",{id:"integration-use-cases"},"Integration Use Cases:"),(0,o.yg)("p",null,'As SurveyCTO is primarily a mobile data collection tool, often that data needs\nto be extracted, managed, summarized, and analysed in another system (e.g.,\ndatabase/data warehouse, analytics tools, and "MIS"/data management software\nlike like DHIS2, Salesforce, etc.).'),(0,o.yg)("p",null,"Example user story:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"As a program or M&E manager, I would like my field officers to collect data in\nplaces with limited connection availability using SurveyCTO. I want the data\ncollected to automatically sync to my Tabluea dashboard for visualization and\nfurther analysis.")),(0,o.yg)("h2",{id:"integration-options"},"Integration Options"),(0,o.yg)("p",null,"SurveyCTO provides a REST API which can be accessed via the OpenFn ",(0,o.yg)("inlineCode",{parentName:"p"},"surveycto"),"\nadaptor. In SurveyCTO, admins can also configure webhooks to push data to\nOpenFn/other external systems in real-time in CSV or JSON format."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"openfn-trigger-options",src:n(69419).A,width:"1580",height:"936"})),(0,o.yg)("h3",{id:"1-webhooks-for-real-time-integration"},"1. Webhooks (for real-time integration):"),(0,o.yg)("p",null,"SurveyCTO has a\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html"},"webhooks service"),"\nwhich allows you to publish data to your OpenFn workflow (or any endpoint URL).\nNote that as submissions come in to the server, SurveyCTO will automatically\npublish your selected fields to your chosen webhook but there will be a brief\ndelay of up to ten minutes from the time the submission occurs and the time\nSurveyCTO sends this data to OpenFn. (Therefore this integration is ",(0,o.yg)("em",{parentName:"p"},"near"),"\nreal-time, depending on how quickly SurveyCTO forwards the data.)"),(0,o.yg)("p",null,"To configure a webhook to push data to OpenFn:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Login to SurveyCTO and navigate to the export section of the form setup"),(0,o.yg)("li",{parentName:"ol"},'Scroll down to "Your data" section and make sure "Advanced Mode" is enabled'),(0,o.yg)("li",{parentName:"ol"},"Click the ",(0,o.yg)("inlineCode",{parentName:"li"},"Configure")," button and ",(0,o.yg)("inlineCode",{parentName:"li"},"Add Webhook")),(0,o.yg)("li",{parentName:"ol"},"Add a ",(0,o.yg)("inlineCode",{parentName:"li"},"Name")," for the webhook and paste your OpenFn ",(0,o.yg)("inlineCode",{parentName:"li"},"Webhook URL")," (copied from\nyour OpenFn Workflow trigger)"),(0,o.yg)("li",{parentName:"ol"},"Select the fields you want to publish/forward to OpenFn and click on ",(0,o.yg)("inlineCode",{parentName:"li"},"Save"))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html"},"See this docs page"),"\nfor more on SurveyCTO webooks."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Configuraing the webhook for OpenFn",src:n(53004).A,width:"1374",height:"1070"})),(0,o.yg)("h3",{id:"2-api-integration-for-scheduled-andor-bulk-data-integration"},"2. API integration (for scheduled and/or bulk data integration):"),(0,o.yg)("p",null,"SurveyCTO provides\n",(0,o.yg)("a",{parentName:"p",href:"https://support.surveycto.com/hc/en-us/articles/360033156894-REST-API-documentation"},"RESTful APIs"),"\nthat we can use to pull data on a scheduled basis using OpenFn ",(0,o.yg)("inlineCode",{parentName:"p"},"cron triggers"),".\nFor connectng with these APIs, OpenFb has developed an API adaptor for a quicker\nintegation setup - see\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/surveycto"},"the `surveycto' adaptor source"),"."),(0,o.yg)("p",null,"Via the REST API, data can be extracted in JSON or CSV formats. Example APIs\nendpoints include:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"https://_servername_.surveycto.com/api/v1/forms/files/csv/formid")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"https://_servername_.surveycto.com/api/v2/forms/data/wide/json/formid?date=[D]")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"JSON is the desirable format for API-to-API integration and when working with\nOpenFn"),(0,o.yg)("li",{parentName:"ul"},"Replace the ",(0,o.yg)("inlineCode",{parentName:"li"},"formId")," parameter with the ",(0,o.yg)("strong",{parentName:"li"},"formId")," of the survey you want to\nextract"),(0,o.yg)("li",{parentName:"ul"},"If you want to filter form submissions by the survey submission ",(0,o.yg)("inlineCode",{parentName:"li"},"date"),",\nreplace the ",(0,o.yg)("inlineCode",{parentName:"li"},"[D]")," parameter with the survey submission date value you want to\nfilter by and see SurveyCTO docs on data format requirements")),(0,o.yg)("p",null,"When using the OpenFn ",(0,o.yg)("inlineCode",{parentName:"p"},"surveycto")," adaptor to connect with the ",(0,o.yg)("inlineCode",{parentName:"p"},"/formid")," API\nendpoint, your job expression might look as follows. See the ",(0,o.yg)("inlineCode",{parentName:"p"},"functions")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"examples")," in the sidebar for more."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'form123', //replace with the form id\n  {\n    date: 'Apr 18, 2024 6:26:21 AM', //if submission date filter not specified, the function will fetch submissions from ALL-TIME\n    status: 'approved|rejected', // add to filter by status; if not specified, the function will fetch submissions of ALL statuses\n  }\n);\n")),(0,o.yg)("h2",{id:"configuring-a-credential-with-api-access"},"Configuring a Credential with API Access"),(0,o.yg)("p",null,"To authenticate with the SurveyCTO API, your OpenFn Workflow will require a user\ncredential where the setting ",(0,o.yg)("inlineCode",{parentName:"p"},"Allow server API access")," has been enabled. This\nsetting controls whether or not users in a given role can use the API to fetch\nforms and data from the server.\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.surveycto.com/04-monitoring-and-management/01-the-basics/00b.managing-user-roles.html"},"See SurveyCTO docs"),"\non managing user roles."))}d.isMDXComponent=!0},69419:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/openfn_surveycto_trigger-49b13e430a160bfb2526c855523764b1.png"},53004:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/surveycto_webhook_config-5e1b0b4b78137c155f0b061c11571347.png"}}]);