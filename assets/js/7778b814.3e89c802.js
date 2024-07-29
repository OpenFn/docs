"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46105],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const a={title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},l=void 0,i={unversionedId:"build-for-developers/cli-intro",id:"build-for-developers/cli-intro",title:"Get started with the OpenFn CLI",description:"Build and test your automated workflows and integrations via the command line.",source:"@site/docs/build-for-developers/cli-intro.md",sourceDirName:"build-for-developers",slug:"/cli",permalink:"/documentation/cli",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/cli-intro.md",tags:[],version:"current",frontMatter:{title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},sidebar:"docs",previous:{title:"Subscriptions (OpenFn.org)",permalink:"/documentation/hosted/overview"},next:{title:"Basic usage",permalink:"/documentation/cli-usage"}},s={},u=[{value:"Build and test your automated workflows and integrations via the command line.",id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line",level:4},{value:"Before you start",id:"before-you-start",level:3},{value:"Install the CLI",id:"install-the-cli",level:3},{value:"Updating the CLI",id:"updating-the-cli",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h4",{id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line"},"Build and test your automated workflows and integrations via the command line."),(0,o.yg)("p",null,"The OpenFn CLI is a developer tool to help you build, test, and manage your\nworkflows directly from the command line. It\u2019s simple to install, works on\nmacOS, Windows, and Linux, and offers a range of functionality to enhance your\ndeveloper experience with OpenFn. You can use the OpenFn CLI to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Securely run OpenFn steps and workflows"),(0,o.yg)("li",{parentName:"ul"},"Troubleshoot and debug OpenFn steps"),(0,o.yg)("li",{parentName:"ul"},"Access adaptor documentation"),(0,o.yg)("li",{parentName:"ul"},"Deploy workflows to OpenFn")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"before-you-start"},"Before you start"),(0,o.yg)("p",null,"Before you begin with the @openfn/cli, make sure to setup some key tooling:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Code Editor:")," Ensure you have a code editor installed on your machine. You\ncan use popular editors like ",(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code")," or\n",(0,o.yg)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"Sublime"),"."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Node.js:")," Install Node.js (version 18 or later). For Linux, Windows, or\nmacOS, use a version manager like ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," or\n",(0,o.yg)("a",{parentName:"li",href:"https://asdf-vm.com/guide/getting-started.html"},"asdf"),". Or\n",(0,o.yg)("a",{parentName:"li",href:"https://kinsta.com/blog/how-to-install-node-js/"},"install Node.js directly"),"\nby following this guide.")),(0,o.yg)("p",null,"You should also ",(0,o.yg)("strong",{parentName:"p"},"understand OpenFn Basic concepts"),", particularly steps and\nadaptors. Check out the ",(0,o.yg)("a",{parentName:"p",href:"/documentation"},"Intro section")," on this site to get\ncaught up."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"install-the-cli"},"Install the CLI"),(0,o.yg)("p",null,"To download the latest version of\n",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfn/cli"},"@openfn/cli"),", on the command line,\nrun the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,o.yg)("p",null,"Make sure everything works by running the built-in test workflow:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn test\n")),(0,o.yg)("p",null,"The word ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn")," will invoke the CLI. The word ",(0,o.yg)("inlineCode",{parentName:"p"},"test")," will invoke the test\ncommand."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see the expected output."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'[CLI] \u2666 Versions:\n     \u25b8 node.js     18.12.1\n     \u25b8 cli         1.0.0\n[CLI] \u2139 Running test workflow...\n\n[CLI] \u2139 Execution plan:\n[CLI] \u2139 {\n"options": {\n    "start": "start"\n},\n"workflow": {\n    "steps": [\n    {\n        "id": "start",\n        "state": {\n        "data": {\n            "defaultAnswer": 42\n        }\n        },\n        "expression": "const fn = () => (state) => { console.log(\'Starting computer...\'); return state; }; fn()",\n        "next": {\n        "calculate": "!state.error"\n        }\n    },\n    {\n        "id": "calculate",\n        "expression": "const fn = () => (state) => { console.log(\'Calculating to life, the universe, and everything..\'); return state }; fn()",\n        "next": {\n        "result": true\n        }\n    },\n    {\n        "id": "result",\n        "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"\n    }\n    ]\n}\n}\n\n[CLI] \u2714 Compiled all expressions in workflow\n[R/T] \u2139 Executing undefined\n[R/T] \u2139 Starting step start\n[JOB] \u2139 Starting computer...\n[R/T] \u2714 Completed step start in 1ms\n[R/T] \u2139 Starting step calculate\n[JOB] \u2139 Calculating to life, the universe, and everything..\n[R/T] \u2714 Completed step calculate in 1ms\n[R/T] \u2139 Starting step result\n[R/T] \u2714 Completed step result in 0ms\n[CLI] \u2714 Result: 42\n'))),(0,o.yg)("p",null,"All other output is the CLI telling us what it is doing internally."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Check the version")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn -v\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Get help")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn help\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"updating-the-cli"},"Updating the CLI"),(0,o.yg)("p",null,"To install a new version straight on top of your current installation, run the\nfollowing command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"If you encounter installation issues, try uninstalling the current version first\nand then re-installing."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm uninstall -g @openfn/cli\nnpm install -g @openfn/cli\n")))}d.isMDXComponent=!0}}]);