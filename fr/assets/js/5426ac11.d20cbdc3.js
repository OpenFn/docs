"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"surveycto developer readme",id:"surveycto-readme",keywords:["adaptor","readme","surveycto"]},s="Developer README for the surveycto adaptor",i={unversionedId:"packages/surveycto-readme",id:"packages/surveycto-readme",title:"surveycto developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/surveycto",source:"@site/adaptors/packages/surveycto-readme.md",sourceDirName:"packages",slug:"/packages/surveycto-readme",permalink:"/fr/adaptors/packages/surveycto-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"surveycto developer readme",id:"surveycto-readme",keywords:["adaptor","readme","surveycto"]},sidebar:"adaptors",previous:{title:"surveycto changelog",permalink:"/fr/adaptors/packages/surveycto-changelog"},next:{title:"Tableau",permalink:"/fr/adaptors/tableau"}},p={},l=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:2},{value:"fetchSubmissions",id:"fetchsubmissions",level:2},{value:"sample <code>fetchSubmissions</code> expression",id:"sample-fetchsubmissions-expression",level:3},{value:"Development",id:"development",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-surveycto-adaptor"},"Developer README for the surveycto adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/surveycto"},"https://github.com/OpenFn/adaptors/tree/main/packages/surveycto")),(0,a.kt)("h1",{id:"language-surveycto"},"Language SurveyCTO"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to make HTTP calls to\nSurveyCTO."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h2",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "username": "taylor@openfn.org",\n  "password": "supersecret",\n  "instanceName": "openfn_test"\n}\n')),(0,a.kt)("h2",{id:"fetchsubmissions"},"fetchSubmissions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fetchSubmissions(1,2,3)")," takes three arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("inlineCode",{parentName:"p"},"formId")," of the form on SurveyCTO")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialAfterDate"),", a date string or UNIX timestamp which instructs the\njob to only fetch submissions after a certain date. After the first run of\nthe job, subsequent runs will only fetch ",(0,a.kt)("em",{parentName:"p"},"NEW")," submissions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("inlineCode",{parentName:"p"},"postUrl")," is where the wide-format JSON representation of each form\nsubmission should be sent. Note that a ",(0,a.kt)("inlineCode",{parentName:"p"},"formId")," key will be added to each\nform submission for later filtering/routing."))),(0,a.kt)("h3",{id:"sample-fetchsubmissions-expression"},"sample ",(0,a.kt)("inlineCode",{parentName:"h3"},"fetchSubmissions")," expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  // formId on SurveyCTO server\n  'household_survey',\n  // initialAfterDate: this will only be accessed if \"lastSubmissionDate\" is empty in your job_state\".\n  // After the initial run of the job, OpenFn will only pull new submissions from SurveyCTO.\n  'Aug 29, 2016 4:44:26 PM',\n  // postUrl is where you want to send the JSON submissions, appended with a new \"formId\" key\n  'https://www.openfn.org/inbox/secret-inbox-uuid'\n);\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the repo, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),"."))}c.isMDXComponent=!0}}]);