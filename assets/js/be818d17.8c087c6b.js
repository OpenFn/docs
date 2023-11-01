"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[29881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Using multiple operations"},i=void 0,l={unversionedId:"jobs/multiple-operations",id:"jobs/multiple-operations",title:"Using multiple operations",description:"You can do many things in sequence with OpenFn, whether using core,",source:"@site/docs/jobs/multiple-operations.md",sourceDirName:"jobs",slug:"/jobs/multiple-operations",permalink:"/documentation/next/jobs/multiple-operations",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/multiple-operations.md",tags:[],version:"current",frontMatter:{title:"Using multiple operations"},sidebar:"docs",previous:{title:"What's an operation?",permalink:"/documentation/next/jobs/operations"},next:{title:"Initial and final state for runs",permalink:"/documentation/next/jobs/state"}},s={},u=[{value:"Flow jobs vs multiple operations in a single job vs posting back to the inbox",id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox",level:2},{value:"Reasons to use flow jobs",id:"reasons-to-use-flow-jobs",level:3},{value:"Reasons to use multiple operations in a single job",id:"reasons-to-use-multiple-operations-in-a-single-job",level:3},{value:"Reasons to post back to the inbox",id:"reasons-to-post-back-to-the-inbox",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can do many things in sequence with OpenFn, whether using ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"microservice"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,r.kt)("h2",{id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox"},"Flow jobs vs multiple operations in a single job vs posting back to the inbox"),(0,r.kt)("h3",{id:"reasons-to-use-flow-jobs"},"Reasons to use flow jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each operation needs to use functions that are ",(0,r.kt)("em",{parentName:"li"},"only")," available in different\nadaptors."),(0,r.kt)("li",{parentName:"ul"},"You ",(0,r.kt)("em",{parentName:"li"},"must")," have different credentials for each operation"),(0,r.kt)("li",{parentName:"ul"},"You want to see success and failure at the level of each operation"),(0,r.kt)("li",{parentName:"ul"},"Each individual run takes a long time and you're worried about your NodeVM\nbeing timed out. (On ",(0,r.kt)("inlineCode",{parentName:"li"},"platform"),", this happens after 100s for non-enterprise\nusers; on ",(0,r.kt)("inlineCode",{parentName:"li"},"microservice")," you've likely configured your own timeout duration.)")),(0,r.kt)("h3",{id:"reasons-to-use-multiple-operations-in-a-single-job"},"Reasons to use multiple operations in a single job"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The job must be atomic, you want the whole thing to count as a failure if any\npart of it fails."),(0,r.kt)("li",{parentName:"ul"},"You run jobs manually and you want a single button to click to retry the\nentire sequence of operations."),(0,r.kt)("li",{parentName:"ul"},"You update a ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," in a series of operations that involve ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),".\nWhen the ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," fails, you don't want to update the ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," for the\nsubsequent job run which contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,r.kt)("li",{parentName:"ul"},"Your operations don't take too long (<100s in total for ",(0,r.kt)("inlineCode",{parentName:"li"},"platform"),") and you\nwant to reduce the number of executions.")),(0,r.kt)("h3",{id:"reasons-to-post-back-to-the-inbox"},"Reasons to post back to the inbox"),(0,r.kt)("p",null,"You might decide to send data from a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," back to your inbox and let another\njob be triggered by a message filter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You'd like to store the result of the first operation for later use or\ninspection and not have to retry that operation in order to reproduce the\ndata."),(0,r.kt)("li",{parentName:"ul"},"You don't care about small delays between the first and second job being run.")))}m.isMDXComponent=!0}}]);