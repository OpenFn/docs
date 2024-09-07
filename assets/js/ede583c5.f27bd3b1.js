"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63817],{99936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const o={title:"Triggers"},i=void 0,s={unversionedId:"build/triggers",id:"build/triggers",title:"Triggers",description:"Triggers allow you to start the execution of Workflows automatically. They come",source:"@site/docs/build/triggers.md",sourceDirName:"build",slug:"/build/triggers",permalink:"/documentation/build/triggers",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/triggers.md",tags:[],version:"current",frontMatter:{title:"Triggers"},sidebar:"docs",previous:{title:"Workflows",permalink:"/documentation/build/workflows"},next:{title:"Configure Steps",permalink:"/documentation/build/steps/"}},l={},g=[{value:"Webhook Event Triggers",id:"webhook-event-triggers",level:2},{value:"Cron Triggers (formerly timers)",id:"cron-triggers-formerly-timers",level:2},{value:"Managing the size of <code>state</code> for Cron Workflows",id:"managing-the-size-of-state-for-cron-workflows",level:3},{value:"A quick fix for final state bloat",id:"a-quick-fix-for-final-state-bloat",level:3},{value:"Kafka Triggers",id:"kafka-triggers",level:2},{value:"Configuring a Kafka trigger for your workflow",id:"configuring-a-kafka-trigger-for-your-workflow",level:3}],u={toc:g},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Triggers allow you to start the execution of Workflows automatically. They come\nin three types: Cron triggers, Webhook Event, and Kafka triggers."),(0,a.yg)("h2",{id:"webhook-event-triggers"},"Webhook Event Triggers"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Webhook Event Triggers")," listen for inbound HTTP requests (messages from other\nsystems), and enable real-time, event-based automation."),(0,a.yg)("p",null,'These triggers are fired by "pushing" data to OpenFn (i.e., by sending an HTTP\n\u201cPOST\u201d request to your trigger\u2019s designated URL).'),(0,a.yg)("p",null,"The triggering HTTP request might be sent via a webhook in an external app,\nanother OpenFn workflow, or manually (i.e., via cURL request)."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Webhook Trigger",src:n(84035).A,width:"512",height:"706"})),(0,a.yg)("p",null,"To learn about how to add an additional layer of security to your Webhook\nTrigger by adding authentication, head over to our\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/webhook-security"},"Webhook Security")," page."),(0,a.yg)("p",null,"Learn how a workflow's initial ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," gets built from a webhook trigger\n",(0,a.yg)("a",{parentName:"p",href:"../jobs/state#webhook-triggered-runs"},"here"),"."),(0,a.yg)("h2",{id:"cron-triggers-formerly-timers"},"Cron Triggers (formerly timers)"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Cron Triggers")," run Workflows based on a cron schedule, and are good for\nrepetitive tasks that are time-based (e.g., every day at 8am, sync financial\ndata)."),(0,a.yg)("p",null,"These Triggers enable users to \u201cpull\u201d data from connected systems. You can pick\na standard schedule (e.g., every day, or every month), or define a custom\nschedule using cron expressions."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Cron Trigger",src:n(32604).A,width:"492",height:"710"})),(0,a.yg)("admonition",{title:"Help with cron expressions",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The best way to learn about ",(0,a.yg)("inlineCode",{parentName:"p"},"cron"),", if you're not already familiar, is through\nthe OpenFn interface or"),(0,a.yg)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),"."),(0,a.yg)("p",null,"Cron Triggers enable Workflows to be run as frequently as once every minute, or\nas infrequently as you desire and can be scheduled on very specific dates or\ntimes."),(0,a.yg)("p",null,"Learn how a workflow's initial ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," gets built from a cron trigger\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/jobs/state#cron-triggered-runs"},"here"),"."),(0,a.yg)("p",null,"You can use a Cursor to help build input state when the workflow is triggered:\nsee the ",(0,a.yg)("a",{parentName:"p",href:"/documentation/jobs/job-writing-guide#using-cursors"},"Job Writing Guide"),"\nfor more details."),(0,a.yg)("p",null,"Each time a timed job succeeds, its ",(0,a.yg)("inlineCode",{parentName:"p"},"final_state")," will be saved and used as the\ninput state for its next run."),(0,a.yg)("h3",{id:"managing-the-size-of-state-for-cron-workflows"},"Managing the size of ",(0,a.yg)("inlineCode",{parentName:"h3"},"state")," for Cron Workflows"),(0,a.yg)("p",null,"Since state is passed between each run of a cron Workflow, if your Workflow Step\nadds something new to state each time it runs, it may quickly become too large\nto be practically handled. Imagine if a server response were adding, via\n",(0,a.yg)("inlineCode",{parentName:"p"},"array.push(...)"),", to ",(0,a.yg)("inlineCode",{parentName:"p"},"state.references")," each time the job ran. OpenFn supports\nup to 50,000 bytes (via Erlang's ",(0,a.yg)("inlineCode",{parentName:"p"},"byte_size"),"), though most ",(0,a.yg)("inlineCode",{parentName:"p"},"final_state")," byte\nsizes are between 100 and 1000."),(0,a.yg)("p",null,"If the size of your ",(0,a.yg)("inlineCode",{parentName:"p"},"final_state")," exceeds 10,000 bytes, OpenFn will send project\ncollaborators a warning email. If it exceeds 50,000 bytes, your run will still\nsucceed but its ",(0,a.yg)("inlineCode",{parentName:"p"},"final_state")," will not be saved and the next time that job runs\nit will inherit the previous, un-updated final state. (I.e., the last state that\nwas < 50,000 bytes.)"),(0,a.yg)("h3",{id:"a-quick-fix-for-final-state-bloat"},"A quick fix for final state bloat"),(0,a.yg)("p",null,"Most often, final ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," bloat is due to improper handling of\n",(0,a.yg)("inlineCode",{parentName:"p"},"state.references")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"state.data"),". This can be fixed by cleaning up your final\n",(0,a.yg)("inlineCode",{parentName:"p"},"state")," by adding and customizing the following lines ",(0,a.yg)("em",{parentName:"p"},"either")," to the callback\nof your language-package's operation (if it allows for one) or by appending a\n",(0,a.yg)("inlineCode",{parentName:"p"},"fn(...)")," operation after your final operation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  state.custom = somethingIntentional;\n  state.data = {};\n  state.references = [];\n  return state;\n});\n")),(0,a.yg)("h2",{id:"kafka-triggers"},"Kafka Triggers"),(0,a.yg)("p",null,"The Kafka trigger allows OpenFn users to build Workflows triggered by messages\npublished by a Kafka cluster. The triggers make use of Kafka consumer groups\nthat are set up on-demand to receive messages from a defined cluster then\nconverts them to ",(0,a.yg)("inlineCode",{parentName:"p"},"Input")," dataclips that are used to initialize a Work Order."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Configuring Kafka Trigger",src:n(89409).A,width:"2424",height:"1630"})),(0,a.yg)("admonition",{title:"What is Kafka?",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Apache Kafka\xae is an event streaming platform designed to handle high volumes of\ndata. Check out\n",(0,a.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#gettingStarted"},"Kafka Docs")," to learn\nmore.")),(0,a.yg)("h3",{id:"configuring-a-kafka-trigger-for-your-workflow"},"Configuring a Kafka trigger for your workflow"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a new Workflow or open an existing Workflow in your Project."),(0,a.yg)("li",{parentName:"ol"},"Select ",(0,a.yg)("inlineCode",{parentName:"li"},"Kafka Consumer")," from the ",(0,a.yg)("inlineCode",{parentName:"li"},"Trigger type")," dropdown."),(0,a.yg)("li",{parentName:"ol"},"Fill out the required connection details:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hosts"),": Provide the URL of the host(s) your trigger should listen to for\nmessages."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Topics"),": Enter the topics your Kafka consumers should subscribe to. You\nneed at least one topic for a successful connection."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SSL"),": Some Kafka clusters require an SSL connection. If you are connecting\nto an environment that requires SSL connection, select ",(0,a.yg)("inlineCode",{parentName:"li"},"Enable SSL"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SSL Authentication"),": Select the type of authentication required for the\nKafka cluster."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Initial offset policy"),": The intial offset dictates where the consumer\nstarts reading messages from a topic when it subscribes for the first time.\nThere are three possible options: ",(0,a.yg)("inlineCode",{parentName:"li"},"earliest")," messages available, ",(0,a.yg)("inlineCode",{parentName:"li"},"latest"),"\nmessages available, or messages with a specific ",(0,a.yg)("inlineCode",{parentName:"li"},"timestamp")," (e.g.,\n",(0,a.yg)("inlineCode",{parentName:"li"},"1721889238000"),")."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Connect timeout"),": The connect timeout specified in seconds (e.g., ",(0,a.yg)("inlineCode",{parentName:"li"},"30"),")\nrepresents how long the consumer should wait before timing out when attempting\nto connect with a Kafka cluster.")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"If you have not finished designing your Workflow or you're not ready to start\nreceiving messages from the Kafka cluster, please check the box to ",(0,a.yg)("strong",{parentName:"li"},"disable\nthe trigger")," until you're ready for message ingestion to begin.")),(0,a.yg)("admonition",{title:"Disable the trigger during workflow design",type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Once the required connection information is provided via the modal, the trigger\nwill ",(0,a.yg)("em",{parentName:"p"},"immediately")," start attempting to connect to the Kafka cluster. We advise\nthat the trigger is disabled until your workflow is ready to receive data from\nthe cluster for processing. ",(0,a.yg)("strong",{parentName:"p"},"To stop the trigger from receiving and processing\nmessages, check the ",(0,a.yg)("inlineCode",{parentName:"strong"},"Disable this trigger")," checkbox at the bottom of the trigger\nconfiguration modal."))),(0,a.yg)("p",null,"Learn how the initial ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," (and ",(0,a.yg)("inlineCode",{parentName:"p"},"Input"),") for Kafka-triggered Workflows gets\nbuilt ",(0,a.yg)("a",{parentName:"p",href:"../jobs/state#kafka-triggered-runs"},"here"),"."))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89409:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/configuring-kafka-cb7e22422de261c0b3df8fa42bfd0bf6.png"},32604:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cron_trigger-65e425bf9442fa127c2c3d117810e3c7.png"},84035:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/webhook_trigger-b8ab066bd761552d7d734a3179b81832.png"}}]);