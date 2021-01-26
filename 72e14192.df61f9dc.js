(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(145)),i={title:"Quick-start"},c={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick-start",description:"1. Create your account",source:"@site/docs/quick-start.md",slug:"/quick-start",permalink:"/documentation/quick-start",editUrl:"https://github.com/openfn/docs/edit/main/docs/quick-start.md",version:"current",sidebar:"docs",previous:{title:"We \u2764\ufe0f documentation.",permalink:"/documentation/"},next:{title:"Platform Docs",permalink:"/documentation/platform"}},s=[{value:"1. Create your account",id:"1-create-your-account",children:[]},{value:"2. Log In",id:"2-log-in",children:[]},{value:"3. Review the navigation bar",id:"3-review-the-navigation-bar",children:[{value:"Jobs",id:"jobs",children:[]},{value:"Triggers",id:"triggers",children:[]},{value:"Credentials",id:"credentials",children:[]},{value:"Inbox",id:"inbox",children:[]},{value:"Run History",id:"run-history",children:[]},{value:"Version Control",id:"version-control",children:[]},{value:"Access &amp; Security",id:"access--security",children:[]},{value:"Project Settings",id:"project-settings",children:[]}]},{value:"4. Check your inbox",id:"4-check-your-inbox",children:[]},{value:"5. Run a job",id:"5-run-a-job",children:[]},{value:"6. View the Associated Runs",id:"6-view-the-associated-runs",children:[]},{value:"7. Familiarize yourself with the other tabs",id:"7-familiarize-yourself-with-the-other-tabs",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"1-create-your-account"},"1. Create your account"),Object(o.a)("p",null,"If you haven't already, create an account at\n",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/signup"}),"OpenFn.org")),Object(o.a)("h2",{id:"2-log-in"},"2. Log In"),Object(o.a)("p",null,"After logging into your new account, you will see an overview of your current\nprojects and the job runs associated with that project. This is called the outer\n",Object(o.a)("strong",{parentName:"p"},"Dashboard"),". Click on one project to start."),Object(o.a)("h2",{id:"3-review-the-navigation-bar"},"3. Review the navigation bar"),Object(o.a)("p",null,"You should now be looking at the OpenFn User dashboard for a particular project.\nReview the following navigation tabs: ",Object(o.a)("inlineCode",{parentName:"p"},"Jobs")," | ",Object(o.a)("inlineCode",{parentName:"p"},"Triggers")," | ",Object(o.a)("inlineCode",{parentName:"p"},"Credentials")," |\n",Object(o.a)("inlineCode",{parentName:"p"},"Inbox")," | ",Object(o.a)("inlineCode",{parentName:"p"},"Run History")," | ",Object(o.a)("inlineCode",{parentName:"p"},"Version Control")," | ",Object(o.a)("inlineCode",{parentName:"p"},"Access & Security")," |\n",Object(o.a)("inlineCode",{parentName:"p"},"Project Settings")),Object(o.a)("h3",{id:"jobs"},"Jobs"),Object(o.a)("p",null,"A job defines the specific series of tasks or database actions to be performed\nwhen a triggering message is received or a scheduled/recurring time is reached.\nJobs are like the \u201cinstructions\u201d you might give a data entry staff member (e.g.,\ncreate new Patient record in the database, send SMS with payment confirmation\nnumber, etc.)."),Object(o.a)("h3",{id:"triggers"},"Triggers"),Object(o.a)("p",null,"A trigger runs jobs based on events, including incoming messages (this is known\nas a ",Object(o.a)("inlineCode",{parentName:"p"},"filter")," trigger), on a cron schedule (a ",Object(o.a)("inlineCode",{parentName:"p"},"cron")," trigger) or based on the\nsuccess or failure of ",Object(o.a)("em",{parentName:"p"},"another")," job(a ",Object(o.a)("inlineCode",{parentName:"p"},"flow")," or ",Object(o.a)("inlineCode",{parentName:"p"},"catch")," trigger)."),Object(o.a)("h3",{id:"credentials"},"Credentials"),Object(o.a)("p",null,"A credential is used to authorize connection to a destination system (e.g.,\nSalesforce username, password & login URL)."),Object(o.a)("h3",{id:"inbox"},"Inbox"),Object(o.a)("p",null,"Your inbox contains the history of all messages that have passed in to your\nproject, which may or may not have triggered a specific job. Messages are stored\npayloads or data (e.g., an incoming SMS, a submitted CommCare form) that were\nsent via HTTP post to your inbox."),Object(o.a)("h3",{id:"run-history"},"Run History"),Object(o.a)("p",null,"Runs are OpenFn attempts made on a destination system by running a message\nthrough a job. Runs can be viewed here and re-processed if there were any errors\nflagged when running a job."),Object(o.a)("h3",{id:"version-control"},"Version Control"),Object(o.a)("p",null,"Sync your project with a GitHub repository so that every change is tracked using\ngit and jobs can be 'rolled back' to previous commits at the touch of a button."),Object(o.a)("h3",{id:"access--security"},"Access & Security"),Object(o.a)("p",null,"Invite other OpenFn users to collaborate with you on your project and create\nauthentication methods for your project to restrict which applications can send\ndata to your inbox."),Object(o.a)("h3",{id:"project-settings"},"Project Settings"),Object(o.a)("p",null,"Monitor your usage and update your project settings here."),Object(o.a)("h2",{id:"4-check-your-inbox"},"4. Check your inbox"),Object(o.a)("p",null,"Click on the Inbox tab to view messages\u2014receipts of data that was sent to your\nproject inbox. Click on the Inbox tab."),Object(o.a)("h2",{id:"5-run-a-job"},"5. Run a job"),Object(o.a)("p",null,'You should see your first message associated with a "sample job". Click on it.\nYou can now choose to do the following:'),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Edit the message (mainly for the purpose of fixing mistakes in data),"),Object(o.a)("li",{parentName:"ul"},"Manually run the job associated with a filter which has identified your first\nmessage as a trigger. See the ",Object(o.a)("inlineCode",{parentName:"li"},"Current Potential")," section for all jobs that\ncan be run against this message based on their triggers and the message body.")),Object(o.a)("p",null,"Click run."),Object(o.a)("h2",{id:"6-view-the-associated-runs"},"6. View the Associated Runs"),Object(o.a)("p",null,"After running the job, view the run logs in this section below."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Click into a run to see what happened to the data inside of the message. In\nthe logs, you should be able to see the status (success/error) of the run."),Object(o.a)("li",{parentName:"ul"},'Go to the "Run History" navigation tab to also view every job run log and its\nstatus.')),Object(o.a)("h2",{id:"7-familiarize-yourself-with-the-other-tabs"},"7. Familiarize yourself with the other tabs"),Object(o.a)("p",null,"Navigate to ",Object(o.a)("strong",{parentName:"p"},"Triggers"),". You can see that the sample filter we provided you\nrequired a message to be sent from OpenFn in order to trigger a job run. Click\non the filter to edit it. Click save when you are done."),Object(o.a)("p",null,"Navigate to ",Object(o.a)("strong",{parentName:"p"},"Jobs"),". Here you can:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"You can click to view the job that was run when triggered by the sample filter\nand sample message."),Object(o.a)("li",{parentName:"ul"},'Click on "Edit Job" to edit the .js file which executes a specific action\n(job).'),Object(o.a)("li",{parentName:"ul"},"Click on the specified filter to change which filter should trigger that job.")),Object(o.a)("p",null,"Navigate to ",Object(o.a)("strong",{parentName:"p"},"Credentials")," to edit the destination system you want to connect\nto. By default, we have provided credentials to access the Salesforce sandbox\nenvironment."),Object(o.a)("p",null,"Navigate to the ",Object(o.a)("strong",{parentName:"p"},"Settings")," tab to change the project's name, upgrade your\naccount for more jobs and runs, add collaborators, and transfer project\nownership."))}u.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);