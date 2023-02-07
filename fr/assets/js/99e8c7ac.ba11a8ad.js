"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=c;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"The CLI (v2, beta)",sidebar_label:"CLI (v2, beta)",slug:"/cli"},s=void 0,r={unversionedId:"cli",id:"cli",title:"The CLI (v2, beta)",description:'This tutorial provides a hands-on way to learn about the new OpenFn CLI. By following the prompts and "challenges", a developer with a bit of Javascript experience should be able to write, run, and debug complex, multi-step jobs with OpenFn, using nothing but a text editor and their terminal.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli.md",sourceDirName:".",slug:"/cli",permalink:"/fr/documentation/cli",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/cli.md",tags:[],version:"current",frontMatter:{title:"The CLI (v2, beta)",sidebar_label:"CLI (v2, beta)",slug:"/cli"},sidebar:"docs",previous:{title:"Devtools",permalink:"/fr/documentation/devtools/home"},next:{title:"Troubleshooting",permalink:"/fr/documentation/build/troubleshooting"}},i={},p=[{value:"Intro to the OpenFn CLI",id:"intro-to-the-openfn-cli",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Walkthrough &amp; Challenges",id:"walkthrough--challenges",level:2},{value:"1. Getting started with the CLI",id:"1-getting-started-with-the-cli",level:3},{value:"Tasks:",id:"tasks",level:4},{value:"<strong>Challenge:</strong>",id:"challenge",level:4},{value:"2. Using adaptors helper functions",id:"2-using-adaptors-helper-functions",level:3},{value:"Basic usage:",id:"basic-usage",level:4},{value:"Tasks:",id:"tasks-1",level:4},{value:"Challenge:",id:"challenge-1",level:4},{value:"3. Understanding <code>state</code>",id:"3-understanding-state",level:3},{value:"How can we use state?",id:"how-can-we-use-state",level:4},{value:"Tasks:",id:"tasks-2",level:4},{value:"Update your job (<code>getPosts.js</code>) to look like this:",id:"update-your-job-getpostsjs-to-look-like-this",level:5},{value:"Now run the job using the following command",id:"now-run-the-job-using-the-following-command",level:5},{value:"Challenge:",id:"challenge-2",level:4},{value:"4. Additional arguments and commands",id:"4-additional-arguments-and-commands",level:3},{value:"Challenge:",id:"challenge-3",level:4},{value:"5. Manipulating data in a sequence of operations",id:"5-manipulating-data-in-a-sequence-of-operations",level:3},{value:"Example:",id:"example",level:5},{value:"In summary",id:"in-summary",level:5},{value:"Challenge:",id:"challenge-4",level:4},{value:"6. Debugging errors",id:"6-debugging-errors",level:3},{value:"Create <strong>debug.js</strong> and paste the code below",id:"create-debugjs-and-paste-the-code-below",level:5},{value:"Run <strong>openfn debug.js -a http</strong>",id:"run-openfn-debugjs--a-http",level:5},{value:"Challenge:",id:"challenge-5",level:4},{value:"7. Each and array iteration",id:"7-each-and-array-iteration",level:3},{value:"Create job.js and add the following codes",id:"create-jobjs-and-add-the-following-codes",level:5},{value:"Run <strong>openfn job.js -a http</strong>",id:"run-openfn-jobjs--a-http",level:5},{value:"Challenge",id:"challenge-6",level:4},{value:"Tasks:",id:"tasks-3",level:4},{value:"CLI Usage - Key Commands",id:"cli-usage---key-commands",level:2},{value:"Check the version",id:"check-the-version",level:3},{value:"Get help",id:"get-help",level:3},{value:"Run a job",id:"run-a-job",level:3},{value:"Change log level",id:"change-log-level",level:3},{value:"Compilation",id:"compilation",level:3},{value:"Strict Mode",id:"strict-mode",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"What is this tutorial?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial provides a ",(0,o.kt)("em",{parentName:"p"},"hands-on"),' way to learn about the new OpenFn CLI. By following the prompts and "challenges", a developer with a bit of Javascript experience should be able to write, run, and debug complex, multi-step jobs with OpenFn, using nothing but a text editor and their terminal.')),(0,o.kt)("h2",{id:"intro-to-the-openfn-cli"},"Intro to the OpenFn CLI"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli"},"@openfn/cli")," is the command line interface and developer toolkit for running OpenFn jobs locally. This enables developers to run, build, and test steps in an OpenFn workflow."),(0,o.kt)("p",null,"This CLI replaces the old ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"@openfn/devtools")," and provides a new suite of features and improvements, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a new runtime and compiler for executing and creating runnable OpenFn jobs,"),(0,o.kt)("li",{parentName:"ul"},"customizable logging output,"),(0,o.kt)("li",{parentName:"ul"},"automatic installation of language adaptors,"),(0,o.kt)("li",{parentName:"ul"},"and support for the adaptors monorepo (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/adaptors"},"@openfn/adaptors"),") where all OpenFn adaptor source code and documentation lives.")),(0,o.kt)("p",null,"These features are designed to make it easier and more convenient for developers to use OpenFn and automate tasks within their workflow."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure you have a code editor installed on your machine (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.sublimetext.com/"},"Sublime"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install NodeJs ",(0,o.kt)("strong",{parentName:"p"},"v18")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To install a specific version of Node.js (in this case, version 18) on Linux, Windows, or macOS, you can use a version manager such as nvm (Node Version Manager) or any multiple runtime version manager eg: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/asdf-vm/asdf"},"asdf"),". These tools allow you to install and switch between multiple versions of Node.js on the same machine. See below for instructions for different operating systems."),(0,o.kt)("li",{parentName:"ul"},"Read this article to learn how to install nodejs in your machine ",(0,o.kt)("a",{parentName:"li",href:"https://kinsta.com/blog/how-to-install-node-js/"},"kinsta.com/blog/how-to-install-node-js/")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Have a basic understanding of OpenFn\u2014check out jobs and adaptors, at least, in the ",(0,o.kt)("a",{parentName:"p",href:"getting-started/terminology"},"OpenFn Concepts")," of this site.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the OpenFn CLI with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g @openfn/cli")))),(0,o.kt)("h2",{id:"walkthrough--challenges"},"Walkthrough & Challenges"),(0,o.kt)("h3",{id:"1-getting-started-with-the-cli"},"1. Getting started with the CLI"),(0,o.kt)("p",null,"@openfn/cli is a new CLI for running openfn jobs. To get started, Make sure everything works by running the built-in test job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn test\n")),(0,o.kt)("p",null,"You should see the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"[CLI] \u26a0 No state detected: pass -S <number> to provide some state\n[CLI] \u2714 Compiled job from const fn = () => state => state \\*\n2; fn() [R/T] \u2714 Operation 1 complete in 0ms\n[CLI] \u2714 Result: 42\n")),(0,o.kt)("h4",{id:"tasks"},"Tasks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.js")," and write the following code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  console.log('Hello World!');\n  return state;\n});\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the job using the cli. (This will execute the job and produce an ",(0,o.kt)("inlineCode",{parentName:"p"},"output.json")," file.)"),(0,o.kt)("p",{parentName:"li"},"Run it with the short-form name of adaptor:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"openfn hello.js -ia http\n")),(0,o.kt)("p",{parentName:"li"},"Run it with the long-form name of adaptor:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"openfn hello.js -ia @openfn/language-http\n")),(0,o.kt)("admonition",{parentName:"li",title:"Understanding CLI arguments",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," to specify the adaptor; use ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," to auto-install the necessary adaptor"),(0,o.kt)("p",{parentName:"admonition"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn help")," to see the full list of CLI arguments.")))),(0,o.kt)("p",null,":::"),(0,o.kt)("h4",{id:"challenge"},(0,o.kt)("strong",{parentName:"h4"},"Challenge:")),(0,o.kt)("p",null,"Write a job that prints your name"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.js")," to print your name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Re-run the job by running ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn hello.js -a http"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Validate that you receive this expected output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[CLI] \u26a0 Error loading state from ./state.json\n[CLI] \u26a0 [Error: ENOENT: no\nsuch file or directory, open './state.json'] { errno: -2, code: 'ENOENT',\nsyscall: 'open', path: './state.json' }\n[CLI] \u26a0 Using default state { data: {}, configuration: {} }\n[CLI] \u2714 Compiled job from hello.js\n[JOB] \u2139 My name is {YourName}\n[R/T] \u2714 Operation 1 complete in 0ms\n[CLI] \u2714 Writing output to ./output.json [CLI] \u2714 Done in 366ms! \u2728\n")))),(0,o.kt)("h3",{id:"2-using-adaptors-helper-functions"},"2. Using adaptors helper functions"),(0,o.kt)("p",null,"Adaptors are Javascript or Typescript module that provides OpenFn users with a clean set of helper functions that help communicate with a specific external system. Learn more about the adaptors -> ",(0,o.kt)("a",{parentName:"p",href:"/adaptors/"},"docs.openfn.org/adaptors")),(0,o.kt)("h4",{id:"basic-usage"},"Basic usage:"),(0,o.kt)("p",null,"Let\u2019s use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfn/language-http"},"@openfn/language-http")," adaptor to fetch a list of forms from ",(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/")),(0,o.kt)("h4",{id:"tasks-1"},"Tasks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"getPosts.js")," and write the following code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"get('https://jsonplaceholder.typicode.com/posts');\nfn(state => {\n  console.log(state.data[1]);\n  return state;\n});\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the job by running ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn getPosts.js -a http"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"See expected output"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[CLI] \u26a0 Error loading state from ./state.json\n[CLI] \u26a0 [Error: ENOENT: no such file or directory, open './state.json'] { errno: -2, code: 'ENOENT', syscall:\n'open', path: './state.json' }\n[CLI] \u26a0 Using default state { data: {}, configuration: {} }\n[CLI] \u2714 Compiled job from hello.js GET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 1.072s\n[JOB] \u2139 { userId: 1, id: 2,\ntitle: 'qui est esse', body: 'est rerum tempore vitae\\n' + 'sequi sint nihil\nreprehenderit dolor beatae ea dolores neque\\n' + 'fugiat blanditiis voluptate\nporro vel nihil molestiae ut reiciendis\\n' + 'qui aperiam non debitis possimus\nqui neque nisi nulla' }\n[R/T] \u2714 Operation 2 complete in 0ms\n[CLI] \u2714 Writing output to ./output.json\n[CLI] \u2714 Done in 1.42s! \u2728\n")))),(0,o.kt)("h4",{id:"challenge-1"},"Challenge:"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/users"},"https://jsonplaceholder.typicode.com/users")," get the list of users and print the object of the first user"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create file called ",(0,o.kt)("inlineCode",{parentName:"li"},"getUsers.js")," and write your operation to fetch the user."),(0,o.kt)("li",{parentName:"ol"},"Run the job using the cli. ",(0,o.kt)("inlineCode",{parentName:"li"},"openfn getUsers.js -a http"),"."),(0,o.kt)("li",{parentName:"ol"},"Validate that you receive this expected output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u26a0 Error loading state from ./state.json\n[CLI] \u26a0 [Error: ENOENT: no such file or directory, open './state.json'] { errno: -2, code: 'ENOENT', syscall:\n'open', path: './state.json' }\n[CLI] \u26a0 Using default state { data: {}, configuration: {} }\n[CLI] \u2714 Compiled job from hello.js GET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 581ms\n[JOB] \u2139 {user details}\n[R/T] \u2714 Operation 2 complete in 2ms\n[CLI] \u2714 Writing output to ./output.json [CLI] \u2714 Done in 950ms! \u2728\n")),(0,o.kt)("h3",{id:"3-understanding-state"},"3. Understanding ",(0,o.kt)("inlineCode",{parentName:"h3"},"state")),(0,o.kt)("p",null,"It ",(0,o.kt)("a",{parentName:"p",href:"/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state"},"all starts with state\u200b"),". If a job is a set of instructions for a chef (a recipe?) then the initial state is all of the ingredients they need tied up in a perfect little bundle. It usually looks something like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    // This is where we put credentials which are used to authorize connection to source/destination systems\n  },\n  "data": {\n    // This is where the data from our source system will wind up\n  }\n}\n')),(0,o.kt)("p",null,"Using CLI, ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," will be loaded automatically from the current directory"),(0,o.kt)("p",null,"Or you can specify the path to the state file by passing the option -s, --state-path"),(0,o.kt)("p",null,"You can use this command to load the state automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn foo/job.js -a http\n")),(0,o.kt)("p",null,"Or you can specify the path of the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn foo/job.js -a http -s foo/state.json\n")),(0,o.kt)("p",null,"Expected output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2714 Loaded state from foo/state.json\n[CLI] \u2714 Compiled job from foo/job.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 876ms\n[R/T] \u2714 Operation 2 complete in 0ms\n[CLI] \u2714 Writing output to foo/output.json\n[CLI] \u2714 Done in 1.222s! \u2728\n")),(0,o.kt)("h4",{id:"how-can-we-use-state"},"How can we use state?"),(0,o.kt)("p",null,"Each adaptor has a configuration schema that's recommended for use in your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json"),". ",(0,o.kt)("a",{parentName:"p",href:"/adaptors/packages/dhis2-configuration-schema"},"Here is an example")," of how to set up ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"language-http"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "<name@email>",\n  "password": "<supersecret>",\n  "baseUrl": "https://jsonplaceholder.typicode.com"\n}\n')),(0,o.kt)("h4",{id:"tasks-2"},"Tasks:"),(0,o.kt)("p",null,"Update your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," to look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {},\n  "configuration": {\n    "baseUrl": "https://jsonplaceholder.typicode.com"\n  }\n}\n')),(0,o.kt)("p",null,"Since we have update our configuration in our state.json we can now use ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," helper function without the need to specify the ",(0,o.kt)("strong",{parentName:"p"},"baseUrl")),(0,o.kt)("p",null,"i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"get(\u201cposts\u201d)")),(0,o.kt)("h5",{id:"update-your-job-getpostsjs-to-look-like-this"},"Update your job (",(0,o.kt)("inlineCode",{parentName:"h5"},"getPosts.js"),") to look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="getPosts.js"',title:'"getPosts.js"'},"// Get all posts\nget('posts');\n\nfn(state => {\n  const posts = state.data;\n  console.log(posts[1]);\n  return state;\n});\n")),(0,o.kt)("h5",{id:"now-run-the-job-using-the-following-command"},"Now run the job using the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn getPosts.js -a http\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2714 Loaded state from ./state.json\n[CLI] \u2714 Compiled job from getPosts.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 460ms\n[JOB] \u2139 {\n  userId: 1,\n  id: 2,\n  title: 'qui est esse',\n  body: 'est rerum tempore vitae\\n' +\n    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\\n' +\n    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\n' +\n    'qui aperiam non debitis possimus qui neque nisi nulla'\n}\n[R/T] \u2714 Operation 2 complete in 12ms\n[CLI] \u2714 Writing output to output.json\n[CLI] \u2714 Done in 946ms! \u2728\n")),(0,o.kt)("h4",{id:"challenge-2"},"Challenge:"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://disease.sh/"},"disease.sh API"),", write an operation that return all covid-19 metadata, using this"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://disease.sh/v3/covid-19/"},"https://disease.sh/v3/covid-19/")," as you ",(0,o.kt)("strong",{parentName:"p"},"baseUrl")),(0,o.kt)("h3",{id:"4-additional-arguments-and-commands"},"4. Additional arguments and commands"),(0,o.kt)("h4",{id:"challenge-3"},"Challenge:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile a openfn job (",(0,o.kt)("strong",{parentName:"p"},"hello.js"),")."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"What's the difference between the job you wrote and the compiled job?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Run a job without "strict mode" enabled.'),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"What's the difference between the outputs when strict mode is enabled and disabled?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run a job with the log level set to ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", and then run it again with the log level set to ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"When is it appropriate to use these different log levels?")))),(0,o.kt)("h3",{id:"5-manipulating-data-in-a-sequence-of-operations"},"5. Manipulating data in a sequence of operations"),(0,o.kt)("p",null,"In most cases you need to write a sequence of operations for data manipulation, cleaning, or transformation. For example after we get data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com")," registry we might need to group the posts by user id."),(0,o.kt)("h5",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="getPosts.js"',title:'"getPosts.js"'},"// Get all posts\nget('posts');\n\n// Group posts by user\nfn(state => {\n  const posts = state.data;\n\n  //   Group posts by userId\n  //   r is an accumulator, a is a currentValue\n  const groupPostsByUserId = posts.reduce((r, a) => {\n    r[a.userId] = r[a.userId] || [];\n    r[a.userId].push(a);\n    return r;\n  }, {});\n\n  // console.log(groupPostsByUserId);\n  return { ...state, groupPostsByUserId };\n});\n\n// Log posts where userId = 1\nfn(state => {\n  const { groupPostsByUserId } = state;\n  console.log('Post with userId 1', groupPostsByUserId[1]);\n  return state;\n});\n")),(0,o.kt)("h5",{id:"in-summary"},"In summary"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Operation 1: Will get all posts and return response will be in state.data")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Operation2: Will group returned posts by userId")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Operation3: Will log posts with userId 1"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2714 Loaded state from foo/state.json\n[CLI] \u2714 Compiled job from foo/tmp.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 825ms\n[R/T] \u2714 Operation 2 complete in 0ms\n[JOB] \u2139 Post with userId 1 [\n //All of posts for userId 1\n]\n[R/T] \u2714 Operation 3 complete in 12ms\n[CLI] \u2714 Writing output to foo/output.json\n[CLI] \u2714 Done in 1.239s! \u2728\n")),(0,o.kt)("h4",{id:"challenge-4"},"Challenge:"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/posts/1/comments"},"https://jsonplaceholder.typicode.com/posts/1/comments")," API fetch comments for post with id 1 and extract name and email from each comment in that post"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get post all comments for post id 1"),(0,o.kt)("li",{parentName:"ol"},"Extract name and email from comments"),(0,o.kt)("li",{parentName:"ol"},"Log the extracted data from comments")),(0,o.kt)("h3",{id:"6-debugging-errors"},"6. Debugging errors"),(0,o.kt)("p",null,"When debugging, it\u2019s interesting to use log to have a visual representation of the content of the manipulated objects (such as state)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When you want to inspect the content of state in between operations, add an ",(0,o.kt)("inlineCode",{parentName:"li"},"fn()")," block with a ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// firstOperation(...);\n\nfn(state => {\n  console.log(state);\n  return state;\n});\n\n// secondOperation(...);\n")),(0,o.kt)("admonition",{title:"Important",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(state)")," will display the whole state, but also configuration elements ",(0,o.kt)("strong",{parentName:"p"},"(username, and password)"),". Remove this log whenever you're done debugging to avoid accidentally exposing sensitive information when the job is successful deployed on production")),(0,o.kt)("h5",{id:"create-debugjs-and-paste-the-code-below"},"Create ",(0,o.kt)("strong",{parentName:"h5"},"debug.js")," and paste the code below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="debug.js"',title:'"debug.js"'},"// Get all posts\nget('posts');\n\n// Get post by index helper function\nfn(state => {\n  // const getPostbyIndex = (index) => dataValue(index)(state);\n  console.log(dataValue(1));\n\n  return { ...state };\n});\n")),(0,o.kt)("h5",{id:"run-openfn-debugjs--a-http"},"Run ",(0,o.kt)("strong",{parentName:"h5"},"openfn debug.js -a http")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2718 TypeError: path.match is not a function\n    at dataPath (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:258:26)\n    at dataValue (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:262:22)\n    at getPostbyIndex (vm:module(0):5:37)\n    at vm:module(0):18:36\n    at /tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:241:12\n    at file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:288:26\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async run (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:269:18)\n    at async executeHandler (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/dist/process/runner.js:388:20)\n")),(0,o.kt)("p",null,"As you can see from our logs that helper function ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue")," has a TypeError, To troubleshoot this you can go to the documentation for ",(0,o.kt)("strong",{parentName:"p"},"dataValue -> ",(0,o.kt)("a",{parentName:"strong",href:"/adaptors/packages/common-docs/#datavaluepath--operation"},"docs.openfn.org/adaptors/packages/common-docs/#datavaluepath--operation")," ")),(0,o.kt)("p",null,"According to the docs, dataValue take path which is a string type. But in our operation were passing an integer, that\u2019s why we have a ",(0,o.kt)("em",{parentName:"p"},"TypeError"),". You can fix by passing a string in dataValue i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(dataValue(\u201c1\u201d))")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2714 Loaded state from ./state.json\n[CLI] \u2714 Compiled job from debug.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 722ms\n[JOB] \u2139 [Function (anonymous)]\n[R/T] \u2714 Operation 2 complete in 1ms\n[CLI] \u2714 Writing output to ./output.json\n[CLI] \u2714 Done in 1.102s!Example: \u2728\n")),(0,o.kt)("p",null,"If you need more information for debugging you can pass -l debug which will give all information about the run"),(0,o.kt)("p",null,"i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn debug.js -a http -l debug")),(0,o.kt)("h4",{id:"challenge-5"},"Challenge:"),(0,o.kt)("p",null,"Debug what is causing an error on the following line of code and display the error message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Get post where id is 180\nget('posts/180');\n")),(0,o.kt)("h3",{id:"7-each-and-array-iteration"},"7. Each and array iteration"),(0,o.kt)("p",null,"We often have to perform the same operation multiple times for items in an array. Most of the helper functions for data manipulation are inherited from @openfn/language-common and are available in most of the adaptors."),(0,o.kt)("h5",{id:"create-jobjs-and-add-the-following-codes"},"Create job.js and add the following codes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Get all posts\nget('posts');\n\n// Group posts by user\nfn(state => {\n  const posts = state.data;\n\n  //   Group posts by userId\n  //   r is an accumulator, a is a currentValue\n  const groupPostsByUserId = posts.reduce((r, a) => {\n    r[a.userId] = r[a.userId] || [];\n    r[a.userId].push(a);\n    return r;\n  }, {});\n\n  // console.log(groupPostsByUserId);\n  return { ...state, groupPostsByUserId };\n});\n\n// Log posts where userId = 1\nfn(state => {\n  const { groupPostsByUserId } = state;\n  const posts = groupPostsByUserId[1];\n\n  // console.log(\"Post with userId 1\", groupPostsByUserId[1]);\n  return { ...state, posts };\n});\n\neach('posts', state => {\n  console.log('Posts', state.data);\n});\n")),(0,o.kt)("p",null,"Notice how this code uses the \u201ceach\u201d function from common which is a helper function defined in ",(0,o.kt)("a",{parentName:"p",href:"/adaptors/packages/common-docs/#eachdatasource-operation--operation"},"language-common")," but is accessed in this job that is using language-http"),(0,o.kt)("h5",{id:"run-openfn-jobjs--a-http"},"Run ",(0,o.kt)("strong",{parentName:"h5"},"openfn job.js -a http")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[CLI] \u2714 Loaded state from ./state.json\n[CLI] \u2714 Compiled job from job.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 730ms\n[R/T] \u2714 Operation 2 complete in 0ms\n[R/T] \u2714 Operation 3 complete in 0ms\n[JOB] \u2139 Posts [\n// Posts\n]\n[R/T] \u2714 Operation 4 complete in 10ms\n[CLI] \u2714 Writing output to output.json\n[CLI] \u2714 Done in 1.091s! \u2728\n")),(0,o.kt)("h4",{id:"challenge-6"},"Challenge"),(0,o.kt)("p",null,"Using Javascript globals i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.reduce, Array.filter or Array.map"),", build function that will get posts by user id."),(0,o.kt)("h4",{id:"tasks-3"},"Tasks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a file called job1.js"),(0,o.kt)("li",{parentName:"ol"},"Add the 1st operation which is get all posts"),(0,o.kt)("li",{parentName:"ol"},"Add 2nd operation which has a function that filter posts by id"),(0,o.kt)("li",{parentName:"ol"},"Use the function from 2nd operation to get all post for user id 1")),(0,o.kt)("h2",{id:"cli-usage---key-commands"},"CLI Usage - Key Commands"),(0,o.kt)("p",null,"You\u2019ll learn about these commands in the following challenges, but please refer to this section for the key commands used in working with the CLI."),(0,o.kt)("h3",{id:"check-the-version"},"Check the version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn -v\n")),(0,o.kt)("h3",{id:"get-help"},"Get help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn help\n")),(0,o.kt)("h3",{id:"run-a-job"},"Run a job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn path/to/job.js -ia {adaptor-name}\n")),(0,o.kt)("p",null,"Note: You MUST specify which adaptor to use. Pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag to auto-install that adaptor (it's safe to do this redundantly)."),(0,o.kt)("p",null,"You can find the list of publicly available adaptors ",(0,o.kt)("a",{parentName:"p",href:"/adaptors"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Path is the job to load the job from (a .js file or a dir containing a job.js file) For example ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn execute foo/job.js")," Reads foo/job.js, looks for state and output in foo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-i, --autoinstall Auto-install the language adaptor\n-a, --adaptors, --adaptor A language adaptor to use for the job\n")),(0,o.kt)("p",null,"If an adaptor is already installed by auto install, you can use the command without the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," options. i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn foo/job.js -a http")),(0,o.kt)("h3",{id:"change-log-level"},"Change log level"),(0,o.kt)("p",null,"You can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"-l info")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--log info")," to get more feedback about what's happening, or ",(0,o.kt)("inlineCode",{parentName:"p"},"--log debug")," for more details than you could ever use. Below is the list of different log levels"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn foo/job.js -a http -l none\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"log level"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-l none")),(0,o.kt)("td",{parentName:"tr",align:null},"Quiet mode")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-l default")),(0,o.kt)("td",{parentName:"tr",align:null},"Top level information of what is happening")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-l info")),(0,o.kt)("td",{parentName:"tr",align:null},"Get more feedback on what is happening openfn")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-l debug")),(0,o.kt)("td",{parentName:"tr",align:null},"Get information about runtime, cli, compiler and the job")))),(0,o.kt)("h3",{id:"compilation"},"Compilation"),(0,o.kt)("p",null,"The CLI will attempt to compile your job code into normalized Javascript. It will do a number of things to make your code robust, portable, and easier to debug from a pure JS perspective."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openfn compile [path]\n")),(0,o.kt)("p",null,"Will compile a openfn job and print or save the resulting js"),(0,o.kt)("h3",{id:"strict-mode"},"Strict Mode"),(0,o.kt)("p",null,"By default CLI will return only the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," key inside the resulting state after a successful run. To Allow properties other than data to be returned in you need to use strict mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"openfn foo/job.js -a http --no-strict-output\n")),(0,o.kt)("p",null,"Learn more about CLI ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli"},"github.com/OpenFn/kit/")))}m.isMDXComponent=!0}}]);