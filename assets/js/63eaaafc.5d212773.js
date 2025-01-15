"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[20363],{36444:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>g,toc:()=>l});var t=n(58168),o=(n(96540),n(15680));const i={title:"Converting Triggers from v1 to v2",sidebar_label:"Converting v1 Triggers",slug:"/converting-triggers"},a=void 0,g={unversionedId:"migration/converting-triggers",id:"migration/converting-triggers",title:"Converting Triggers from v1 to v2",description:"In this article we provide an overview of how to migrate your Triggers from",source:"@site/docs/migration/converting-triggers.md",sourceDirName:"migration",slug:"/converting-triggers",permalink:"/documentation/converting-triggers",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/migration/converting-triggers.md",tags:[],version:"current",frontMatter:{title:"Converting Triggers from v1 to v2",sidebar_label:"Converting v1 Triggers",slug:"/converting-triggers"},sidebar:"docs",previous:{title:"Migration Steps",permalink:"/documentation/migration-steps"},next:{title:"Automated Migration",permalink:"/documentation/migration/automated-migration"}},s={},l=[{value:"Converting Triggers",id:"converting-triggers",level:2},{value:"Trigger Types on v1",id:"trigger-types-on-v1",level:3},{value:"Converting Cron Triggers",id:"converting-cron-triggers",level:3},{value:"Converting Flow and Fail Triggers",id:"converting-flow-and-fail-triggers",level:3},{value:"Converting Message Filters",id:"converting-message-filters",level:3},{value:"One Webhook per Workflow",id:"one-webhook-per-workflow",level:4},{value:"Path Conditions",id:"path-conditions",level:4}],c={toc:l},u="wrapper";function p(e){let{components:r,...i}=e;return(0,o.yg)(u,(0,t.A)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this article we provide an overview of how to migrate your Triggers from\nOpenFn v1 to v2."),(0,o.yg)("h2",{id:"converting-triggers"},"Converting Triggers"),(0,o.yg)("h3",{id:"trigger-types-on-v1"},"Trigger Types on v1"),(0,o.yg)("p",null,"We use\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/build/triggers"},"4 types of triggers")," on\nv1: Message Filters, Cron Triggers, Flow Triggers, and Fail Triggers."),(0,o.yg)("h3",{id:"converting-cron-triggers"},"Converting Cron Triggers"),(0,o.yg)("p",null,"Setting up a\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/triggers#cron-triggers-formerly-timers"},"Cron Trigger on v2")," works\njust the same as on ",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/build/triggers"},"v1"),":\nwhen you're building a Workflow, select Cron Schedule as Trigger type, and set\nthe frequency."),(0,o.yg)("h3",{id:"converting-flow-and-fail-triggers"},"Converting Flow and Fail Triggers"),(0,o.yg)("p",null,"With a Flow trigger, we can execute a job upon success of another specified job.\nWith a Fail trigger, the job will run if an another specified job failed."),(0,o.yg)("p",null,"On v2, we achieve the same conditional behavior with\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/paths"},"Path Conditions"),": a job can run (1) always, (2), on success\nof another job, (3) on failure of another job, or (4) on a custom condition -\nwe'll get to this last one in the next section."),(0,o.yg)("p",null,"So, if on v1 you had a Flow Trigger, on v2 you'll need to choose the\n",(0,o.yg)("inlineCode",{parentName:"p"},"On Success")," condition between your jobs. If you had a Fail Trigger, select the\n",(0,o.yg)("inlineCode",{parentName:"p"},"On Failure")," condition."),(0,o.yg)("h3",{id:"converting-message-filters"},"Converting Message Filters"),(0,o.yg)("p",null,"V1 Message Filters work with webhooks: if an external application sends data to\nyour project, you can check whether the incoming message meets (or doesn't meet)\ncertain criteria, and execute jobs accordingly."),(0,o.yg)("p",null,"V2 works on the same principle, with a somewhat different setup."),(0,o.yg)("h4",{id:"one-webhook-per-workflow"},"One Webhook per Workflow"),(0,o.yg)("p",null,"On V1, you had one unified Inbox for your entire project, where all messages\nwould arrive to the same shared webhook URL from every source application. These\nwere then picked up by the different jobs based on Message Filter Triggers."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Unified Inbox",src:n(55076).A,width:"1899",height:"802"})),(0,o.yg)("p",null,"The main difference on V2 is that each workflow that operates with a webhook\ntrigger has its own unique webhook URL to receive data to."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"V2 Webhook Trigger",src:n(30730).A,width:"1190",height:"788"})),(0,o.yg)("p",null,"This will mean that in your source applications you will probably need to configure multiple webhooks/forwarders, one for each of your recieving workflows, instead of the previous common Inbox one. "),(0,o.yg)("h4",{id:"path-conditions"},"Path Conditions"),(0,o.yg)("p",null,"Once you've configured your\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/triggers#webhook-event-triggers"},"Webhook"),", you can use a custom\nPath Condition that matches a JavaScript expression to decide whether a\nsubsequent job should be executed or not."),(0,o.yg)("p",null,"For example, if on v1 you had a Message Filter trigger that looked like this:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Trigger Example",src:n(141).A,width:"543",height:"287"})),(0,o.yg)("p",null,"The matching v2 JavaScript Path Condition would look like this:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Path Condition Example",src:n(21555).A,width:"405",height:"217"})))}p.isMDXComponent=!0},15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>h});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function g(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?t.createElement(h,a(a({ref:r},c),{},{components:n})):t.createElement(h,a({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var g={};for(var s in r)hasOwnProperty.call(r,s)&&(g[s]=r[s]);g.originalType=e,g[u]="string"==typeof e?e:o,a[1]=g;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21555:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/lightning_path_trigger_example-3c9a200f1f80daa3e0bd5498662ab694.png"},141:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/lightning_trigger_example-78e9b9f301bb6b407e5a9677fd2d95ee.png"},55076:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/v1_unified_inbox-7b92b326f4895b48a1150776456be64e.png"},30730:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/v2_webhook_trigger-4f93ebc9a9859671486dff79f76958a0.png"}}]);