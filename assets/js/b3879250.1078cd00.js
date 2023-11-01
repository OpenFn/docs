"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Google Summer of Code"},i=void 0,l={unversionedId:"gsoc",id:"gsoc",title:"Google Summer of Code",description:"Overview",source:"@site/docs/gsoc.md",sourceDirName:".",slug:"/gsoc",permalink:"/documentation/next/gsoc",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/gsoc.md",tags:[],version:"current",frontMatter:{title:"Google Summer of Code"},sidebar:"docs",previous:{title:"Building Compliant APIs",permalink:"/documentation/next/for-devs"},next:{title:"Writing Docs",permalink:"/documentation/next/writing-docs"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Mentors",id:"mentors",level:2},{value:"Project Ideas",id:"project-ideas",level:2},{value:"OpenFn/microservice Extension",id:"openfnmicroservice-extension",level:3},{value:"OpenFn/engine Extension",id:"openfnengine-extension",level:3},{value:"OpenFn/core Metrics",id:"openfncore-metrics",level:3},{value:"Adaptors 2.0",id:"adaptors-20",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"OpenFn provides data integration, automation, and interoperability tools that\nare used to scale the world's most promising health and humanitarian\ninterventions. UNICEF, the World Health Organization, the IRC, and the Wildlife\nConservation Society are just a few of the many organizations that drive\nefficiency via OpenFn software. With an open-core model, we've got hosted and\nlocally-deployed solutions in 40+ countries, and this summer you'll get the\nchance to work on leading-edge ETL tools built in Elixir/Erlang, and NodeJs. If\nlearning about APIs, data transformation, and middleware/automation layers\nexcites you, OpenFn is the place to be."),(0,o.kt)("h2",{id:"mentors"},"Mentors"),(0,o.kt)("p",null,"This summer, you'll get the chance to work with some of the core team at OpenFn,\nincluding ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/team#chaiwa"},"Chaiwa Berian"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/team#mamadou"},"Mamadou Ciss\xe9"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/team#stuart"},"Stu Corbishley"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/team#taylor"},"Taylor Downs"),". They're based in Zambia,\nSenegal, South Africa, and the United Kingdom, respectively. Between them,\nthey've got almost 50 years of experience working in software and... a PhD in\nComputer Science. (Hey thanks, Mamadou \ud83d\ude09.)"),(0,o.kt)("h2",{id:"project-ideas"},"Project Ideas"),(0,o.kt)("h3",{id:"openfnmicroservice-extension"},"OpenFn/microservice Extension"),(0,o.kt)("p",null,"OpenFn projects (see ",(0,o.kt)("a",{parentName:"p",href:"portability"},(0,o.kt)("inlineCode",{parentName:"a"},"project.yaml")),") can be deployed on the\nplatform ",(0,o.kt)("em",{parentName:"p"},"or")," on microservice, a Phoenix web application. This summer, GSOC\ninterns will have the opportunity to build out the front-end for this community\nsupported web app."),(0,o.kt)("p",null,"Difficulty level: ",(0,o.kt)("inlineCode",{parentName:"p"},"medium")),(0,o.kt)("p",null,"You'll be working in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},(0,o.kt)("inlineCode",{parentName:"a"},"Docker")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.phoenixframework.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Phoenix")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Elixir"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,o.kt)("h3",{id:"openfnengine-extension"},"OpenFn/engine Extension"),(0,o.kt)("p",null,"Engine is part of the common FOSS toolkit that is used both by ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),". It's the software which is responsible for actually executing\ncalls to ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenFn/core")," and doing neat things like streaming logs back to the\nrequester. If you're keen on really understanding how Elixir and Erlang work,\ngetting your hands dirty with OTP apps, engine is where you want to be working\nthis summer."),(0,o.kt)("p",null,"Difficulty level: ",(0,o.kt)("inlineCode",{parentName:"p"},"high")),(0,o.kt)("p",null,"You'll be working in ",(0,o.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Elixir"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,o.kt)("h3",{id:"openfncore-metrics"},"OpenFn/core Metrics"),(0,o.kt)("p",null,"At the bottom of it all, whether we're providing secure patient data transfer\nservices for ministries of health or making child protection case referrals for\nUNICEF, OpenFn relies on spinning up NodeVMs, executing code inside those VMs\nsafely, and then shutting the down. Welcome to the core."),(0,o.kt)("p",null,"This summer you could have the chance to dig into that ",(0,o.kt)("em",{parentName:"p"},"sandboxed-VM-in-a-VM"),'\nmagic, learn loads about NodeJs, and provide end-users with better metrics on\nexactly what kinds of compute they\'re using to "get the job done".'),(0,o.kt)("p",null,"Difficulty level: ",(0,o.kt)("inlineCode",{parentName:"p"},"medium")),(0,o.kt)("p",null,"You'll be working in ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,o.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Typescript")),"."),(0,o.kt)("h3",{id:"adaptors-20"},"Adaptors 2.0"),(0,o.kt)("p",null,"Adaptors are the API wrappers that allow OpenFn users to quickly and easily work\nwith the most common APIs in international development. They provide an\ninterface for connecting to DHIS2, ODK, CommCare, OpenMRS, etc., etc."),(0,o.kt)("p",null,"They're NodeJs modules, but in order to make the adaptor development and ",(0,o.kt)("em",{parentName:"p"},"use"),"\nprocess better, we want to bring them into the future with Typescript. Adaptors\nshould tell you how to use them while you use them."),(0,o.kt)("p",null,"Check out this thread on\n",(0,o.kt)("a",{parentName:"p",href:"https://community.openfn.org/t/discussion-regarding-adapter-2-0-project"},"community.openfn.org"),"\nfor more information."),(0,o.kt)("p",null,"Difficulty level: ",(0,o.kt)("inlineCode",{parentName:"p"},"medium")),(0,o.kt)("p",null,"You'll be working in ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,o.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"Typescript")),"."))}m.isMDXComponent=!0}}]);