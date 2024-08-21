"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56444],{99213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={title:"Google Summer of Code"},i=void 0,l={unversionedId:"gsoc",id:"version-legacy/gsoc",title:"Google Summer of Code",description:"Overview",source:"@site/versioned_docs/version-legacy/gsoc.md",sourceDirName:".",slug:"/gsoc",permalink:"/documentation/legacy/gsoc",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/gsoc.md",tags:[],version:"legacy",frontMatter:{title:"Google Summer of Code"},sidebar:"docs",previous:{title:"Building Compliant APIs",permalink:"/documentation/legacy/for-devs"},next:{title:"Writing Docs",permalink:"/documentation/legacy/writing-docs"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Mentors",id:"mentors",level:2},{value:"Project Ideas",id:"project-ideas",level:2},{value:"OpenFn/microservice Extension",id:"openfnmicroservice-extension",level:3},{value:"OpenFn/engine Extension",id:"openfnengine-extension",level:3},{value:"OpenFn/core Metrics",id:"openfncore-metrics",level:3},{value:"Adaptors 2.0",id:"adaptors-20",level:3}],c={toc:s},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"OpenFn provides data integration, automation, and interoperability tools that\nare used to scale the world's most promising health and humanitarian\ninterventions. UNICEF, the World Health Organization, the IRC, and the Wildlife\nConservation Society are just a few of the many organizations that drive\nefficiency via OpenFn software. With an open-core model, we've got hosted and\nlocally-deployed solutions in 40+ countries, and this summer you'll get the\nchance to work on leading-edge ETL tools built in Elixir/Erlang, and NodeJs. If\nlearning about APIs, data transformation, and middleware/automation layers\nexcites you, OpenFn is the place to be."),(0,o.yg)("h2",{id:"mentors"},"Mentors"),(0,o.yg)("p",null,"This summer, you'll get the chance to work with some of the core team at OpenFn,\nincluding ",(0,o.yg)("a",{parentName:"p",href:"https://openfn.org/team#chaiwa"},"Chaiwa Berian"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://openfn.org/team#mamadou"},"Mamadou Ciss\xe9"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://openfn.org/team#stuart"},"Stu Corbishley"),", and\n",(0,o.yg)("a",{parentName:"p",href:"https://openfn.org/team#taylor"},"Taylor Downs"),". They're based in Zambia,\nSenegal, South Africa, and the United Kingdom, respectively. Between them,\nthey've got almost 50 years of experience working in software and... a PhD in\nComputer Science. (Hey thanks, Mamadou \ud83d\ude09.)"),(0,o.yg)("h2",{id:"project-ideas"},"Project Ideas"),(0,o.yg)("h3",{id:"openfnmicroservice-extension"},"OpenFn/microservice Extension"),(0,o.yg)("p",null,"OpenFn projects (see ",(0,o.yg)("a",{parentName:"p",href:"portability"},(0,o.yg)("inlineCode",{parentName:"a"},"project.yaml")),") can be deployed on the\nplatform ",(0,o.yg)("em",{parentName:"p"},"or")," on microservice, a Phoenix web application. This summer, GSOC\ninterns will have the opportunity to build out the front-end for this community\nsupported web app."),(0,o.yg)("p",null,"Difficulty level: ",(0,o.yg)("inlineCode",{parentName:"p"},"medium")),(0,o.yg)("p",null,"You'll be working in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},(0,o.yg)("inlineCode",{parentName:"a"},"Docker")),",\n",(0,o.yg)("a",{parentName:"p",href:"https://www.phoenixframework.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Phoenix")),",\n",(0,o.yg)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Elixir"))," and ",(0,o.yg)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,o.yg)("h3",{id:"openfnengine-extension"},"OpenFn/engine Extension"),(0,o.yg)("p",null,"Engine is part of the common FOSS toolkit that is used both by ",(0,o.yg)("inlineCode",{parentName:"p"},"microservice"),"\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"platform"),". It's the software which is responsible for actually executing\ncalls to ",(0,o.yg)("inlineCode",{parentName:"p"},"OpenFn/core")," and doing neat things like streaming logs back to the\nrequester. If you're keen on really understanding how Elixir and Erlang work,\ngetting your hands dirty with OTP apps, engine is where you want to be working\nthis summer."),(0,o.yg)("p",null,"Difficulty level: ",(0,o.yg)("inlineCode",{parentName:"p"},"high")),(0,o.yg)("p",null,"You'll be working in ",(0,o.yg)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Elixir"))," and\n",(0,o.yg)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,o.yg)("h3",{id:"openfncore-metrics"},"OpenFn/core Metrics"),(0,o.yg)("p",null,"At the bottom of it all, whether we're providing secure patient data transfer\nservices for ministries of health or making child protection case referrals for\nUNICEF, OpenFn relies on spinning up NodeVMs, executing code inside those VMs\nsafely, and then shutting the down. Welcome to the core."),(0,o.yg)("p",null,"This summer you could have the chance to dig into that ",(0,o.yg)("em",{parentName:"p"},"sandboxed-VM-in-a-VM"),'\nmagic, learn loads about NodeJs, and provide end-users with better metrics on\nexactly what kinds of compute they\'re using to "get the job done".'),(0,o.yg)("p",null,"Difficulty level: ",(0,o.yg)("inlineCode",{parentName:"p"},"medium")),(0,o.yg)("p",null,"You'll be working in ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,o.yg)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Typescript")),"."),(0,o.yg)("h3",{id:"adaptors-20"},"Adaptors 2.0"),(0,o.yg)("p",null,"Adaptors are the API wrappers that allow OpenFn users to quickly and easily work\nwith the most common APIs in international development. They provide an\ninterface for connecting to DHIS2, ODK, CommCare, OpenMRS, etc., etc."),(0,o.yg)("p",null,"They're NodeJs modules, but in order to make the adaptor development and ",(0,o.yg)("em",{parentName:"p"},"use"),"\nprocess better, we want to bring them into the future with Typescript. Adaptors\nshould tell you how to use them while you use them."),(0,o.yg)("p",null,"Check out this thread on\n",(0,o.yg)("a",{parentName:"p",href:"https://community.openfn.org/t/discussion-regarding-adapter-2-0-project"},"community.openfn.org"),"\nfor more information."),(0,o.yg)("p",null,"Difficulty level: ",(0,o.yg)("inlineCode",{parentName:"p"},"medium")),(0,o.yg)("p",null,"You'll be working in ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,o.yg)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,o.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,o.yg)("inlineCode",{parentName:"a"},"Typescript")),"."))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||a;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);