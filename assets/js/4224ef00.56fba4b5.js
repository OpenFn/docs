"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[86565],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),c=a,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return o?n.createElement(f,r(r({ref:t},u),{},{components:o})):n.createElement(f,r({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},85577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const i={title:"Kobo Toolbox"},r=void 0,s={unversionedId:"kobotoolbox",id:"kobotoolbox",title:"Kobo Toolbox",description:"App Overview",source:"@site/adaptors/kobotoolbox.md",sourceDirName:".",slug:"/kobotoolbox",permalink:"/adaptors/kobotoolbox",draft:!1,tags:[],version:"current",frontMatter:{title:"Kobo Toolbox"},sidebar:"adaptors",previous:{title:"khanacademy developer readme",permalink:"/adaptors/packages/khanacademy-readme"},next:{title:"kobotoolbox@1.2.0",permalink:"/adaptors/packages/kobotoolbox-docs"}},l={},p=[{value:"App Overview",id:"app-overview",level:2},{value:"Data Model",id:"data-model",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"APIs &amp; Integration Options",id:"apis--integration-options",level:2},{value:"Webhook: Forward forms in real-time from Kobo using REST service",id:"webhook-forward-forms-in-real-time-from-kobo-using-rest-service",level:3},{value:"Web APIs",id:"web-apis",level:3},{value:"Using OpenFn to access the Kobo Web API",id:"using-openfn-to-access-the-kobo-web-api",level:4},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",level:2},{value:"App installation and configuration",id:"app-installation-and-configuration",level:3},{value:"Hidden Values &amp; Tagging Submissions",id:"hidden-values--tagging-submissions",level:3},{value:"Unique Identifiers",id:"unique-identifiers",level:3},{value:"Exporting form metadata and submission data",id:"exporting-form-metadata-and-submission-data",level:3},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Integration Examples",id:"integration-examples",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"app-overview"},"App Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo Toolbox")," is a suite of open source tools for\nfield data collection for use in challenging environments. If you've worked on\nODK or ONA, the underlying tech is very similar. They offer free accounts and\nhosting for humanitarian projects, and the app provides a nice interface for\nmanaging (and cleaning!) form submissions."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate\nwith common tools, and (2) to educate any OpenFn user/the wider sector.")),(0,a.kt)("h2",{id:"data-model"},"Data Model"),(0,a.kt)("p",null,"Kobo data is collected using ",(0,a.kt)("inlineCode",{parentName:"p"},"projects")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"forms")," which are the actual surveys/\nquestions being adminsitered. Form responses are collected as individual\n",(0,a.kt)("inlineCode",{parentName:"p"},"form submissions")," (1 row for every form submitted is logged in the Kobo web\napp, viewable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Data")," menu option)."),(0,a.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,a.kt)("p",null,"Example user stories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time\nin a central database, so that I can better understand data collection\nactivities and program performance across my partner sites.")),(0,a.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,a.kt)("h3",{id:"webhook-forward-forms-in-real-time-from-kobo-using-rest-service"},"Webhook: Forward forms in real-time from Kobo using REST service"),(0,a.kt)("p",null,"Webhook or \u201cREST Service\u201d that will forward data to OpenFn (or any designated\nendpoint URL). ",(0,a.kt)("strong",{parentName:"p"},"Note: Kobo not forward any form submissions cleaned via the\nKobo web app. Only form submissions submitted via mobile are forwarded via the\nwebhook.")),(0,a.kt)("p",null,"To set this up, follow the\n",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/rest_services.html"},"Kobo REST service guide")),(0,a.kt)("p",null,"See below for OpenFn-specific configuration instructions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To push data from Kobo, users must click the projects icon on their left-side\nnav bar. It's in the shape of a globe."),(0,a.kt)("li",{parentName:"ol"},"Once selecting a project, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Settings")," link will appear at the top\nleft side of the screen. Click it to open the Project Settings page."),(0,a.kt)("li",{parentName:"ol"},"In the bottom left pane of the project settings page, users must paste their\n",(0,a.kt)("inlineCode",{parentName:"li"},"inbox URL")," from OpenFn into the ",(0,a.kt)("inlineCode",{parentName:"li"},"Rest Services")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Service URL")," input area and\nselect ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON Post")," as the ",(0,a.kt)("inlineCode",{parentName:"li"},"Service Name"),"."),(0,a.kt)("li",{parentName:"ol"},"It's helpful to add a wrapper to your form data if you will be publishing\nmultiple forms to OpenFn. You could use\n",(0,a.kt)("inlineCode",{parentName:"li"},'{"form":"my_form", "body": %SUBMISSION%}'),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Service")," to start forwarding new Kobo submissions to OpenFn.org.")),(0,a.kt)("p",null,"To test to integration with OpenFn, add a submission manually using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"enter data in browser")," button. Head back to your history page at OpenFn to view\nthe newly submitted data and write a new ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," to map your Kobo\ndata to any destination system on OpenFn."),(0,a.kt)("p",null,"Here's a sample post from Kobo REST service. Note that questions inside groups\nare prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"groupname/")," rather than sitting inside a group object like\nODK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "group1/name": "twenty",\n  "group1/age": "19",\n  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",\n  "first_q": "hello",\n  "final_q": "why not?",\n  "_xform_id_string": "groups",\n  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "_userform_id": "taylordowns2000_groups",\n  "_tags": [],\n  "_submitted_by": null,\n  "_submission_time": "2016-04-22T06:38:20",\n  "_status": "submitted_via_web",\n  "_notes": [],\n  "_id": 889409,\n  "_geolocation": [null, null],\n  "_bamboo_dataset_id": "",\n  "_attachments": []\n}\n')),(0,a.kt)("h3",{id:"web-apis"},"Web APIs"),(0,a.kt)("p",null,"Kobo APIs support both data and metadata integration. Check out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kobo API docs: ",(0,a.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/api.html"},"https://support.kobotoolbox.org/api.html")),(0,a.kt)("li",{parentName:"ul"},"Kobo Community: ",(0,a.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/rest_services.html"},"https://support.kobotoolbox.org/rest_services.html")),(0,a.kt)("li",{parentName:"ul"},"Kobo API v2 explorer: ",(0,a.kt)("a",{parentName:"li",href:"https://kf.kobotoolbox.org/api/v2/assets/"},"https://kf.kobotoolbox.org/api/v2/assets/"))),(0,a.kt)("h4",{id:"using-openfn-to-access-the-kobo-web-api"},"Using OpenFn to access the Kobo Web API"),(0,a.kt)("p",null,"Timer OpenFn jobs that run on cron schedule can be configured to \u201cGET\u201d data from\nKobo API. If you are cleaning data in Kobo, we recommend this option as it will\nfetch cleaned submissions as well."),(0,a.kt)("p",null,"In order to fetch data from a form, use the Kobo API endpoint of the form. The\nbase URL is that of your Kobo server, in this example it's\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://kf.kobotoolbox.org"),":\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json"),"."),(0,a.kt)("p",null,"With this OpenFn job snippet we fetch submission data from a list of surveys,\nindicated by their IDs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Current cursor value:', state.lastEnd);\n  // Set a manual cursor if you'd like to only fetch data after this date.\n  const manualCursor = '2020-11-20T14:32:43.325+01:00';\n  state.data = {\n    surveys: [\n      //** Specify new forms to fetch here **//\n      {\n        id: 'aVdh90L9979L945lb02',\n        name: 'Initial Data Collection',\n      },\n      {\n        id: 'bkgIF96fK7v9n7Hfj2',\n        name: 'Follow-up',\n      },\n    ].map(survey => ({\n      formId: survey.id,\n      name: survey.name,\n      url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,\n      query: `&query={\"end\":{\"$gte\":\"${state.lastEnd || manualCursor}\"}}`,\n    })),\n  };\n  return state;\n});\n\neach(dataPath('surveys[*]'), state => {\n  const { url, query, formId, name } = state.data;\n  return get(`${url}${query}`, {}, state => {\n    state.data.submissions = state.data.results.map((submission, i) => {\n      return {\n        i,\n        // Here we append the names defined above to the Kobo form submission data\n        formName: name,\n      };\n    });\n  });\n});\n")),(0,a.kt)("p",null,"Check out some of our\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1Q9YKKiaTg3ty4BC6f7PMsnXcrT6WaF0w_Eo4yOh8fQw/edit#slide=id.gcf42eece58_0_1080"},"training slides"),"\nfor an overview of Kobo integration options."),(0,a.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,a.kt)("h3",{id:"app-installation-and-configuration"},"App installation and configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/"},"Kobo documentation")," offers detailed\nguidance on setting up forms and managing data collection."),(0,a.kt)("p",null,"You can find some of our training materials on Kobo form management\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/16ZenDRq3zmX6LgrH4_g3O9lISTve42ZDJgjm7RThbTY/edit#slide=id.gc90ebee775_0_242"},"here"),"."),(0,a.kt)("h3",{id:"hidden-values--tagging-submissions"},"Hidden Values & Tagging Submissions"),(0,a.kt)("p",null,'A small useful trick we learned is if you want to add a hidden value to your\nforms to "inject" data or tag your form (for example a tag to mark a form as\n"test"), you can add it to the form as a\n',(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/calculate_questions.html"},"calculated field"),"."),(0,a.kt)("h3",{id:"unique-identifiers"},"Unique Identifiers"),(0,a.kt)("p",null,"You can use the following Kobo-generated unique identifiers for forms and\nsubmissions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"formId": "adiNTJXFtpKEDGGZFMUtgQ"'),": This is a unique form instance ID, it\nwill be different for every copy/clone of the same form."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"_id": 85252496'),": This is the form submission, it's unique within the same\nKobo server"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"uuid" : bfcda81622a94de3a85f69aed29790af'),": This changes every time a\nsubmission is cleaned; if you'd still like to use it as unique ID, you can\ncreate a ",(0,a.kt)("inlineCode",{parentName:"li"},"calculate")," question in your form with the calculation\n",(0,a.kt)("inlineCode",{parentName:"li"},"once(uuid())"),". This will prevent the ",(0,a.kt)("inlineCode",{parentName:"li"},"uuid")," from updating with each\nsubmission edit.")),(0,a.kt)("p",null,"To uniquely identify the questions, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Data Column Name")," under\nquestion options. This is unique within a form and it's different from what is\ndisplayed in the survey as the question itself. You can find more info on it in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/question_options.html"},"Kobo docs"),"."),(0,a.kt)("p",null,"Similarly, if you have multiple choice question (called ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Many")," question\ntype in Kobo),you can specify the underlying identifier (called ",(0,a.kt)("inlineCode",{parentName:"p"},"XML value"),") for\neach option. This is the value that you'll see when you export the collected\ndata."),(0,a.kt)("h3",{id:"exporting-form-metadata-and-submission-data"},"Exporting form metadata and submission data"),(0,a.kt)("p",null,"You can manually download your form metadata, such as question names and labels,\nquestion types, in XLS or XML format from the project's Form section on the web\ninterface, see more detail\n",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/new_form.html"},"here"),"."),(0,a.kt)("p",null,"To export submission data in XLS or CSV format, follow\n",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/export_download.html"},"these steps"),"."),(0,a.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,a.kt)("p",null,"Check out\n",(0,a.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-kobotoolbox"},"OpenFn/language-kobotoolbox"),'\nfor some helper functions for extracting or "getting" data in bulk from Kobo\nToolbox.'),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"language-kobotoolbox")," does not provide functions to support your integration\nrequirements, ",(0,a.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"language-http"))," may\nalso be implemented to send GET/POST/PUT requests to the Kobo APIs."),(0,a.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConSoSci")," Github repo for several example Kobo-to-database jobs:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/consosci"},"https://github.com/OpenFn/consosci")))}d.isMDXComponent=!0}}]);