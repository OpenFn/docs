(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(336)),i={title:"Quick-start",sidebar_label:"Quick-start"},s={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Quick-start",description:"1. Create your account",source:"@site/docs/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/documentation/getting-started/quick-start",editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/quick-start.md",version:"current",sidebar_label:"Quick-start",frontMatter:{title:"Quick-start",sidebar_label:"Quick-start"},sidebar:"docs",previous:{title:"Overview",permalink:"/documentation/getting-started/overview"},next:{title:"Project Walk-through",permalink:"/documentation/build/example-build"}},c=[{value:"1. Create your account",id:"1-create-your-account",children:[]},{value:"2. Log In",id:"2-log-in",children:[]},{value:"3. Review the navigation bar",id:"3-review-the-navigation-bar",children:[{value:"Jobs",id:"jobs",children:[]},{value:"Triggers",id:"triggers",children:[]},{value:"Credentials",id:"credentials",children:[]},{value:"Inbox",id:"inbox",children:[]},{value:"Run History",id:"run-history",children:[]},{value:"Version Control",id:"version-control",children:[]},{value:"Access &amp; Security",id:"access--security",children:[]},{value:"Project Settings",id:"project-settings",children:[]}]},{value:"4. Check your inbox",id:"4-check-your-inbox",children:[]},{value:"5. Run a job",id:"5-run-a-job",children:[]},{value:"6. View the Associated Runs",id:"6-view-the-associated-runs",children:[]},{value:"8. Set up some live data sources",id:"8-set-up-some-live-data-sources",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-create-your-account"},"1. Create your account"),Object(a.b)("p",null,"If you haven't already, create an account at\n",Object(a.b)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"OpenFn.org")),Object(a.b)("h2",{id:"2-log-in"},"2. Log In"),Object(a.b)("p",null,"After logging into your new account, you will see an overview of your current\nprojects and the job runs associated with that project. This is called the outer\n",Object(a.b)("strong",{parentName:"p"},"Dashboard"),". Click on one project to start."),Object(a.b)("h2",{id:"3-review-the-navigation-bar"},"3. Review the navigation bar"),Object(a.b)("p",null,"You should now be looking at the OpenFn User dashboard for a particular project.\nReview the following navigation tabs: ",Object(a.b)("inlineCode",{parentName:"p"},"Jobs")," | ",Object(a.b)("inlineCode",{parentName:"p"},"Triggers")," | ",Object(a.b)("inlineCode",{parentName:"p"},"Credentials")," |\n",Object(a.b)("inlineCode",{parentName:"p"},"Inbox")," | ",Object(a.b)("inlineCode",{parentName:"p"},"Run History")," | ",Object(a.b)("inlineCode",{parentName:"p"},"Version Control")," | ",Object(a.b)("inlineCode",{parentName:"p"},"Access & Security")," |\n",Object(a.b)("inlineCode",{parentName:"p"},"Project Settings")),Object(a.b)("h3",{id:"jobs"},"Jobs"),Object(a.b)("p",null,"A job defines the specific series of tasks or database actions to be performed\nwhen a triggering message is received or a scheduled/recurring time is reached.\nJobs are like the \u201cinstructions\u201d you might give a data entry staff member (e.g.,\ncreate new Patient record in the database, send SMS with payment confirmation\nnumber, etc.)."),Object(a.b)("h3",{id:"triggers"},"Triggers"),Object(a.b)("p",null,"A trigger runs jobs based on events, including incoming messages (this is known\nas a ",Object(a.b)("inlineCode",{parentName:"p"},"filter")," trigger), on a cron schedule (a ",Object(a.b)("inlineCode",{parentName:"p"},"cron")," trigger) or based on the\nsuccess or failure of ",Object(a.b)("em",{parentName:"p"},"another")," job(a ",Object(a.b)("inlineCode",{parentName:"p"},"flow")," or ",Object(a.b)("inlineCode",{parentName:"p"},"catch")," trigger)."),Object(a.b)("h3",{id:"credentials"},"Credentials"),Object(a.b)("p",null,"A credential is used to authorize connection to a destination system (e.g.,\nSalesforce username, password & login URL)."),Object(a.b)("h3",{id:"inbox"},"Inbox"),Object(a.b)("p",null,"Your inbox contains the history of all messages that have passed in to your\nproject, which may or may not have triggered a specific job. Messages are stored\npayloads or data (e.g., an incoming SMS, a submitted CommCare form) that were\nsent via HTTP post to your inbox."),Object(a.b)("h3",{id:"run-history"},"Run History"),Object(a.b)("p",null,"Runs are OpenFn attempts made on a destination system by running a message\nthrough a job. Runs can be viewed here and re-processed if there were any errors\nflagged when running a job."),Object(a.b)("h3",{id:"version-control"},"Version Control"),Object(a.b)("p",null,"Sync your project with a GitHub repository so that every change is tracked using\ngit and jobs can be 'rolled back' to previous commits at the touch of a button."),Object(a.b)("h3",{id:"access--security"},"Access & Security"),Object(a.b)("p",null,"Invite other OpenFn users to collaborate with you on your project and create\nauthentication methods for your project to restrict which applications can send\ndata to your inbox."),Object(a.b)("h3",{id:"project-settings"},"Project Settings"),Object(a.b)("p",null,"Monitor your usage and update your project settings here."),Object(a.b)("h2",{id:"4-check-your-inbox"},"4. Check your inbox"),Object(a.b)("p",null,"Click on the Inbox tab to view messages\u2014receipts of data that was sent to your\nproject inbox. Click on the Inbox tab."),Object(a.b)("h2",{id:"5-run-a-job"},"5. Run a job"),Object(a.b)("p",null,'You should see your first message associated with a "sample job". Click on it.\nYou can now choose to do the following:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Edit the message (mainly for the purpose of fixing mistakes in data),"),Object(a.b)("li",{parentName:"ul"},"Manually run the job associated with a filter which has identified your first\nmessage as a trigger. See the ",Object(a.b)("inlineCode",{parentName:"li"},"Current Potential")," section for all jobs that\ncan be run against this message based on their triggers and the message body.")),Object(a.b)("p",null,"Click run."),Object(a.b)("h2",{id:"6-view-the-associated-runs"},"6. View the Associated Runs"),Object(a.b)("p",null,"After running the job, view the run logs in this section below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click into a run to see what happened to the data inside of the message. In\nthe logs, you should be able to see the status (success/error) of the run."),Object(a.b)("li",{parentName:"ul"},'Go to the "Run History" navigation tab to also view every job run log and its\nstatus.')),Object(a.b)("h2",{id:"8-set-up-some-live-data-sources"},"8. Set up some live data sources"),Object(a.b)("p",null,"Most modern web applications have a feature that allows you to ",Object(a.b)("inlineCode",{parentName:"p"},"push"),",\n",Object(a.b)("inlineCode",{parentName:"p"},"publish"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"post")," data to another URL when a certain ",Object(a.b)("strong",{parentName:"p"},"event")," takes place.\nThis event could be a form submission, mobile payment, patient registration, or\nbarcode scan submission from a mobile app. The key is that your source\napplication will notify OpenFn when ",Object(a.b)("em",{parentName:"p"},"something happens"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Go to the "settings" or "administration" page for your source app, and look\nfor a ',Object(a.b)("inlineCode",{parentName:"p"},"Webhook API"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Data Forwarding API"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"Notifications API"),". Write to\nthe developers of your application if none is provided out of the box.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When setting up forwarding, select to send messages in ",Object(a.b)("inlineCode",{parentName:"p"},"JSON")," to your\nproject's ",Object(a.b)("inlineCode",{parentName:"p"},"inbox URL"),'. This is a UUID that serves as your API token. You can\nfind and copy your secure inbox URL by clicking on the "copy URL" link in the\nbottom-right corner of the project in question on your\n',Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://www.openfn.org/projects"},"project dashboard")),' page or by using the\n"Copy URL" button on your project\'s "Inbox" page.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Soon you'll see new messages arrive in your ",Object(a.b)("strong",{parentName:"p"},"Inbox"),"."))),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"/documentation/source-apps"},"Generic Data Sources")," for specific instructions for\nconnecting common applications."))}u.isMDXComponent=!0},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,h=l["".concat(i,".").concat(d)]||l[d]||p[d]||a;return n?o.a.createElement(h,s(s({ref:t},b),{},{components:n})):o.a.createElement(h,s({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);