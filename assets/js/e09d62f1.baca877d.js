"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[50576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,c=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(c,i(i({ref:t},h),{},{components:n})):a.createElement(c,i({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Troubleshooting Platform",sidebar_label:"Troubleshooting"},i=void 0,s={unversionedId:"manage/troubleshooting-tips-on-platform",id:"manage/troubleshooting-tips-on-platform",title:"Troubleshooting Platform",description:"Currently, this section is specific to OpenFn/platform.",source:"@site/docs/manage/troubleshooting-tips-on-platform.md",sourceDirName:"manage",slug:"/manage/troubleshooting-tips-on-platform",permalink:"/documentation/manage/troubleshooting-tips-on-platform",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage/troubleshooting-tips-on-platform.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting Platform",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Project Management",permalink:"/documentation/manage/platform-mgmt"},next:{title:"Exit Codes & Errors",permalink:"/documentation/jobs/errors"}},l={},p=[{value:"Runs",id:"runs",level:2},{value:"Exit codes",id:"exit-codes",level:3},{value:"The time it took for the job to fail",id:"the-time-it-took-for-the-job-to-fail",level:3},{value:"Run logs",id:"run-logs",level:3},{value:"Mappings",id:"mappings",level:4},{value:"Error messages",id:"error-messages",level:4},{value:"Leveraging search and filtering in OpenFn",id:"leveraging-search-and-filtering-in-openfn",level:2},{value:"Bulk reprocessing",id:"bulk-reprocessing",level:2},{value:"Other tips",id:"other-tips",level:2},{value:"Sign up for email alerts",id:"sign-up-for-email-alerts",level:2},{value:"More",id:"more",level:2},{value:"Common Error Messages",id:"common-error-messages",level:3}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Currently, this section is specific to ",(0,r.kt)("strong",{parentName:"p"},"OpenFn/platform"),".")),(0,r.kt)("h2",{id:"runs"},"Runs"),(0,r.kt)("p",null,"One of the most helpful pages for troubleshooting on OpenFn platform is the\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/getting-started/terminology/#activity-history"},"Activity History"),".\nThis pages provides a list of all of the runs executed in a project and always\nmarks any failed runs red or yellow. Project administrators can troubleshoot\nerrors by clicking into the run to review the run details. Keep reading for all\nthe important parts of a run and how to leverage them during your\ntroubleshooting!"),(0,r.kt)("h3",{id:"exit-codes"},"Exit codes"),(0,r.kt)("p",null,"Every run will have an exit code. The exit code is a way for OpenFn to classify\nthe run status and can help you troubleshoot errors. Learn more about OpenFn\nexit codes and what each one means ",(0,r.kt)("a",{parentName:"p",href:"/documentation/jobs/errors"},"here"),"."),(0,r.kt)("h3",{id:"the-time-it-took-for-the-job-to-fail"},"The time it took for the job to fail"),(0,r.kt)("p",null,"The run will also record how long it took before the job failed. This\ninformation helps users understand if the job is taking longer than it should\nand is especially helpful with errors that involve timeouts. You can use the run\nto determine at which operation the job is timing out and determine if the job\nperformance can be optimized."),(0,r.kt)("h3",{id:"run-logs"},"Run logs"),(0,r.kt)("p",null,"As jobs are developed it is important to log details which will make testing and\ntroubleshooting much easier in the future. Keep reading for the two most\nimportant parts of a run log!"),(0,r.kt)("h4",{id:"mappings"},"Mappings"),(0,r.kt)("p",null,"The logs should be written so that you can see exactly what was mapped between\nthe source system and the destination system. In cases where data received from\nthe source system is ",(0,r.kt)("em",{parentName:"p"},"not")," being posted to the OpenFn inbox (often for security\nreasons), it can even be helpful to log the data that was received. In summary,\nthe log can have a ",(0,r.kt)("strong",{parentName:"p"},'"Data received from source system"')," section and a ",(0,r.kt)("strong",{parentName:"p"},'"Data\nto be uploaded to destination system"')," section."),(0,r.kt)("p",null,"These logs can help admins verify that the source data and the data being\nuploaded to the destination system is correct. For example, seeing in the logs\nthat that a unique identifier is being mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," in the destination\nsystem can help you understand this Salesforce error message:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"METHOD_NOT_ALLOWED: HTTP Method 'PATCH' not allowed. Allowed are GET,HEAD,POST at HttpApi.getError"),"."),(0,r.kt)("h4",{id:"error-messages"},"Error messages"),(0,r.kt)("p",null,"The run log should also tell us if an error has been thrown, and depending on\nthe destination system, what the error message is. Sometimes the error message\nis very specific like:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NOT_FOUND: Provided external ID field does not exist or is not accessible")),(0,r.kt)("p",null,"This error from Salesforce usually indicates that ",(0,r.kt)("inlineCode",{parentName:"p"},"External ID")," has not been\nchecked in the field settings in Salesforce."),(0,r.kt)("p",null,"Other error messages are not as clear and can take some time to debug:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypeError [Error]: Cannot read property 'split' of undefined")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TypeErrors"))," usually indicate that the job received a part of the message\nthat it wasn't expecting, or there is a syntax error in your job code. It means\nthat the job needs to be updated to know how to handle the message. In this\ncase, the job received an old version of the Commcare form which was missing a\nfield which the job called the ",(0,r.kt)("inlineCode",{parentName:"p"},"split")," function on. You can determine this by\nreviewing the job for which fields the split function is being called on and\nchecking that they are all present in the message."),(0,r.kt)("p",null,"The more you test and troubleshoot with a particular system, the more familiar\nwith it's error messages you become."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"OpenFn has outlined several of the more common error messages specific to some\nof the systems that we have integrated in the past. Explore these systems and\ntheir error messages ",(0,r.kt)("a",{parentName:"p",href:"/adaptors#connect-anything"},"here"),".")),(0,r.kt)("h2",{id:"leveraging-search-and-filtering-in-openfn"},"Leveraging search and filtering in OpenFn"),(0,r.kt)("p",null,"Leverage the various search functionalities in OpenFn to find the right messages\nand runs to support your troubleshooting. You can search in the Inbox, Activity\nHistory, and Search Console."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentation/manage/platform-mgmt/#inbox"},"Inbox"))," - The inbox contains\nall the messages that have been sent to your project. Search your project\ninbox for messages that contain a specific body text. You can also filter\nthese messages by date, run status and trigger. You can even use filtering to\nsee all the messages whose last run failed, so you can get to\ntroubleshooting! Learn more about inbox filtering\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/manage/platform-mgmt/#inbox"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentation/getting-started/terminology/#activity-history"},"Activity history"))," -\nAs discussed above, the activity history records all runs for the current\nproject. It has similar search and filtering capabilities as the inbox except\nit doesn't require valid JSON in the search box. Use the search in activity\nhistory instead of inbox when you want to search ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"run logs"))," instead of\nmessages.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentation/manage/platform-mgmt/#search-console"},"Search console"))," -\nThe search console will search in both message bodies ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"and"))," run logs for\nany string is entered!"))),(0,r.kt)("h2",{id:"bulk-reprocessing"},"Bulk reprocessing"),(0,r.kt)("p",null,"Sometimes you'll see several messages in the inbox whose last run failed because\nof the same error. Once you have resolved the error, you can test it by\nrerunning the transaction for one failed run. If this passes, you can then\nleverage ",(0,r.kt)("strong",{parentName:"p"},"bulk reprocessing")," in the OpenFn inbox and activity history to\nreprocess all messages in the current filtered query. This means OpenFn will\nrerun all of those transactions in the order they were received. Learn more\nabout bulk reprocessing\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/manage/platform-mgmt/#bulk-reprocess-messages"},"here"),"."),(0,r.kt)("p",null,"Sometimes you'll have so many messages with failed runs that it will be\nvirtually impossible to open each one and inspect the run logs. In this case,\nyou can resolve the errors and bulk reprocess as you go, each time reducing the\nnumber of failures in the inbox and generating a short list of the remaining\nerrors."),(0,r.kt)("h2",{id:"other-tips"},"Other tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Posting messages to the inbox")," - You can post messages directly to the\nOpenFn inbox by clicking the ",(0,r.kt)("strong",{parentName:"li"},"plus")," icon on the bottom left of the inbox.\nThis feature can come in handy when you have lengthy messages which include\nseveral rows of data. You simply copy and paste one row of data from the\noriginal message to a new message and post it to the inbox. This allows you to\ntroubleshoot individual rows of data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Editing messages")," - Messages in the inbox can be edited by clicking the\npencil icon in the message. This is a quick way to update and test any mapping\nfixes with data that is already in the inbox. Once you verify that the run for\nthe updated message passes, you can make the appropriate updates to the source\nsytem and post the correct data to the inbox moving forward."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organizing error messages")," - When working with various different jobs and\nerror messages, it is helpful to organize all errors in a spreadsheet which\nlinks to the last run, error, and status.")),(0,r.kt)("h2",{id:"sign-up-for-email-alerts"},"Sign up for email alerts"),(0,r.kt)("p",null,"You can turn on notifications to receive email alerts when a job fails. When you\nreceive an error email, you can click \u201cinspect & take action\u201d to be taken to the\nfailed run and being troubleshooting!"),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What happens if my survey data from ODK needs to link to existing records in\nmy Salesforce system but a respondent enters or selects an invalid\n",(0,r.kt)("inlineCode",{parentName:"p"},"external ID"),"?")),(0,r.kt)("p",null,"Great question, and don't worry, it happens all the time. Assuming you've\nalready taken all possible measures to either pre-load external IDs in your ODK\nform or use more human-proof IDs (like barcodes and fingerprints) here's the\nflow of work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read the email, and inspect the reason for failure.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"99% of failed runs on OpenFn are due to ",(0,r.kt)("inlineCode",{parentName:"p"},"value mismatches"),". The ",(0,r.kt)("em",{parentName:"p"},"collected"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in ODK doesn't match the ",(0,r.kt)("em",{parentName:"p"},"expected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in Salesforce. You must now\nchose to either:"),(0,r.kt)("p",{parentName:"li"},"A. Edit the source ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"receipt")," & retry the attempt."),(0,r.kt)("p",{parentName:"li"},"B. Edit the related ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in your destination system & retry the attempt."),(0,r.kt)("p",{parentName:"li"},'C. Ignore the attempt\u2014this source data will never reach your destination\nsystem. (There have been reports of ODK Aggregate\'s JSON publisher sending\nduplicate values. If that happens and your run fails due to "duplicate\nvalues" on a particular unique field you can safely ignore the run in\nOpenFn.)'))),(0,r.kt)("p",null,"Editing data in your destination system can be done through that system's\ninterface. Many tools that act as ",(0,r.kt)("inlineCode",{parentName:"p"},"sources")," (like ODK) do not allow for easy\nediting and re-submission of data. You can use OpenFn to edit the source data\nbefore retrying the attempt."),(0,r.kt)("h3",{id:"common-error-messages"},"Common Error Messages"),(0,r.kt)("p",null,"The most common error messages with English explanations are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0\nThe insert is blocked because you are attempting to create a new record with a\nunique field with the same value as an existing record.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Required value missing\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ExternalId not found\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.\nPlease check the security settings of this field and verify that it is\nread/write for your profile or permission set. }\n")),(0,r.kt)("p",null,"This last one may arise if a master-detail relationship in Salesforce is not set\nas reparentable and the user attempts to run an upsert."))}u.isMDXComponent=!0}}]);