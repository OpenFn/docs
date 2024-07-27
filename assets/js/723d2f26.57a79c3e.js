"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[70001],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(y,i(i({ref:t},u),{},{components:r})):o.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(58168),n=(r(96540),r(15680));const a={title:"Workflows",sidebar_label:"Workflows"},i=void 0,l={unversionedId:"build/workflows",id:"build/workflows",title:"Workflows",description:"Workflows are automated processes or sets of instructions that accomplish a",source:"@site/docs/build/workflows.md",sourceDirName:"build",slug:"/build/workflows",permalink:"/documentation/build/workflows",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/workflows.md",tags:[],version:"current",frontMatter:{title:"Workflows",sidebar_label:"Workflows"},sidebar:"docs",previous:{title:"Security considerations",permalink:"/documentation/security-for-devs"},next:{title:"Triggers",permalink:"/documentation/build/triggers"}},s={},c=[{value:"Create Workflows",id:"create-workflows",level:2},{value:"Run Workflows",id:"run-workflows",level:2},{value:"Turn off Workflows",id:"turn-off-workflows",level:2},{value:"Limit Concurrency",id:"limit-concurrency",level:2},{value:"What happens when concurrency limit is set on a workflow?",id:"what-happens-when-concurrency-limit-is-set-on-a-workflow",level:3},{value:"Setting Concurrency for a workflow",id:"setting-concurrency-for-a-workflow",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,o.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Workflows")," are automated processes or sets of instructions that accomplish a\ntask. In OpenFn configuration, a Workflow consists of a Trigger, Steps, and\nPaths that define automation logic. Read on to learn how to configure Workflows."),(0,n.yg)("h2",{id:"create-workflows"},"Create Workflows"),(0,n.yg)("p",null,"To create a new Workflow in your Project:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go to the ",(0,n.yg)("strong",{parentName:"li"},"Workflows")," page."),(0,n.yg)("li",{parentName:"ol"},"Click the ",(0,n.yg)("strong",{parentName:"li"},"Create new workflow")," button."),(0,n.yg)("li",{parentName:"ol"},"Give your Workflow a descriptive ",(0,n.yg)("inlineCode",{parentName:"li"},"Name")," (e.g., ",(0,n.yg)("inlineCode",{parentName:"li"},"Register patients"),",\n",(0,n.yg)("inlineCode",{parentName:"li"},"Refer cases"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"Monthly payroll"),")."),(0,n.yg)("li",{parentName:"ol"},"Choose your ",(0,n.yg)("a",{parentName:"li",href:"/documentation/build/triggers"},"Trigger")),(0,n.yg)("li",{parentName:"ol"},"Edit your first ",(0,n.yg)("a",{parentName:"li",href:"/documentation/build/steps/"},"Step")),(0,n.yg)("li",{parentName:"ol"},"Modify the ",(0,n.yg)("a",{parentName:"li",href:"/documentation/build/paths"},"Path Condition"),", if needed, to define ",(0,n.yg)("em",{parentName:"li"},"when"),"\nthe Workflow should proceed to the next Step."),(0,n.yg)("li",{parentName:"ol"},"Configure more Steps as needed")),(0,n.yg)("p",null,"Check out the video overview below to learn how to create a Workflow."),(0,n.yg)("iframe",{width:"784",height:"441",src:"https://www.youtube.com/embed/HmE_wp_g1RY?si=Pud7DPS0BevAjStp",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.yg)("h2",{id:"run-workflows"},"Run Workflows"),(0,n.yg)("p",null,"To run a Workflow, you can either activate the Trigger (e.g., send a request to\nthe Webhook Event Trigger's URL, or wait for the cron timer to be activated), or\nrun your workflow manually. Check out the video below for how to run your\nworkflow manually."),(0,n.yg)("iframe",{width:"784",height:"441",src:"https://www.youtube.com/embed/dssixE3Sukc?si=n3Jpdiu_aiBLXuHb",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.yg)("h2",{id:"turn-off-workflows"},"Turn off Workflows"),(0,n.yg)("p",null,'To "turn off" or disable a Workflow:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the Workflow"),(0,n.yg)("li",{parentName:"ol"},"Click on the Trigger"),(0,n.yg)("li",{parentName:"ol"},"Select the ",(0,n.yg)("strong",{parentName:"li"},"Disable this trigger")," checkbox"),(0,n.yg)("li",{parentName:"ol"},"Select ",(0,n.yg)("strong",{parentName:"li"},"Save")," to save your changes")),(0,n.yg)("h2",{id:"limit-concurrency"},"Limit Concurrency"),(0,n.yg)("p",null,"Workflow ",(0,n.yg)("strong",{parentName:"p"},"concurrency")," is the number pf runs will be allowed for a given\nworkflow ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"at the same time")),'. In OpenFn, project administrators and editors\nare able to limit the maximum number of the runs that can be executed at the\nsame time for a workflow. You might do this to ensure "one at a time" serial\nprocessing or to keep a fast OpenFn workflow from overwhelming the API rate\nlimit of some other connected system.'),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Note that this setting allows administrators to ",(0,n.yg)("em",{parentName:"p"},"limit")," the maximum concurrency\nfor a workflow, but the ",(0,n.yg)("strong",{parentName:"p"},"global maximum")," (i.e., the highest concurrency that\ncan be reached if a workflow is ",(0,n.yg)("em",{parentName:"p"},"not")," limited by a project administrator) will\nbe controlled by your OpenFn instance superuser. This global maximum will be\ndetermined by the computing power and throughput made available to your\ninstallation.")),(0,n.yg)("h3",{id:"what-happens-when-concurrency-limit-is-set-on-a-workflow"},"What happens when concurrency limit is set on a workflow?"),(0,n.yg)("p",null,"When concurrency limit is configured for a workflow, the maximum number of runs\nthat are executed concurrently will not exceed the number that has been set for\nthe workflow. For example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concurrency not set (or = 0)"),": There's no artificial limit applied, and\nthis workflow will only be limited by the total computing power available\nacross your OpenFn installation."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concurrency = 1"),": Runs for this workflow will only take place 1-at-a-time.\nEach run must ",(0,n.yg)("em",{parentName:"li"},"finish")," before the next run can start."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concurrency = 2"),": No more than 2 runs for this workflow can be executed at\na time and other runs will have stay ",(0,n.yg)("inlineCode",{parentName:"li"},"enqueued"),'. If runs "A", "B", and "C" are\nall enqueued, "A" and "B" will start executing. Once "A" finishes, "C" will\nstart. (No more than 2-at-a-time.)')),(0,n.yg)("h3",{id:"setting-concurrency-for-a-workflow"},"Setting Concurrency for a workflow"),(0,n.yg)("p",null,"Concurrency limits can be set via the workflow settings modal on the workflow\ncanvas."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Click on the settings icon beside the save button on your workflow to open\nthe workflow settings"),(0,n.yg)("li",{parentName:"ol"},"In the modal, enter the maximum concurrency limit"),(0,n.yg)("li",{parentName:"ol"},"Click save.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Configuring Concurrency",src:r(96902).A,width:"2972",height:"1850"})))}m.isMDXComponent=!0},96902:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/configuring-concurrency-c894b7a1118b3276cb84879d09a0ec50.png"}}]);