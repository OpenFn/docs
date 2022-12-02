"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[59671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={title:"About",sidebar_label:"What is OpenFn",slug:"/"},i=void 0,p={unversionedId:"intro",id:"intro",title:"About",description:"What is OpenFn?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/documentation/",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{title:"About",sidebar_label:"What is OpenFn",slug:"/"},sidebar:"docs",next:{title:"The Integration Toolkit",permalink:"/documentation/getting-started/integration-toolkit"}},s={},l=[{value:"What is OpenFn?",id:"what-is-openfn",level:2},{value:"Who is it built by ?",id:"who-is-it-built-by-",level:2},{value:"Our products",id:"our-products",level:2},{value:"The OpenFn iPaaS",id:"the-openfn-ipaas",level:3},{value:"OpenFn/Lightning (Alpha)",id:"openfnlightning-alpha",level:3},{value:"OpenFn developer tooling",id:"openfn-developer-tooling",level:3},{value:"OpenFn/devtools",id:"openfndevtools",level:4},{value:"OpenFn/core",id:"openfncore",level:4},{value:"OpenFn/Microservice",id:"openfnmicroservice",level:3},{value:"The Community Forum",id:"the-community-forum",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-openfn"},"What is OpenFn?"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"OpenFn is software that makes it easier for governments and NGOs to ",(0,a.kt)("em",{parentName:"p"},"connect"),"\nthe different technologies they use, share data securely, drive critical\nbusiness processes, and scale their interventions via workflow automation and\nreal-time interoperability.")),(0,a.kt)("p",null,"OpenFn is a suite of data integration, interoperability, and business process\nautomation (i.e., workflow) tools that's used by governments, NGOs, and social\nenterprises in the health and humanitarian sectors. It enables users to connect\nany system, and comes with adaptors (i.e. connectors) for\n",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/apps"},"over 70 apps"),"."),(0,a.kt)("p",null,"Some OpenFn use cases are:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/nb246sav7ozlmo1/OpenFn%20Business%20Process%20%26%20Workflow%20Automation%20Solutions.pdf?dl=0"},"Business process and workflow automations"),"\n|\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/ij7n0fa2wosreod/OpenFn%20Data%20Integration%20%26%20Interoperability%20Solutions.pdf?dl=0"},"Data Integration and Interoperability"),"\n|\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/ffchww1niw46nlu/OpenFn%20Data%20Cleaning%20Pipeline%20Solutions.pdf?dl=0"},"Data Clearning Pipelines"),"\n|\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/5oj5wqo84q29p5j/OpenFn%20Data%20Sharing%20%26%20Reporting%20Solutions.pdf?dl=0"},"Data Sharing and Reporting"),"\n|\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/e48z6a9x1kgmlbd/OpenFn%20Data%20Warehouse%20%26%20Analytics%20Solutions.pdf?dl=0"},"Data Warehouse and Analytics"),"\n|\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/dqhgvjkqjrs9vzi/OpenFn%20Legacy%20Systems%20Integration%20%26%20Sync%20Solutions.pdf?dl=0"},"Legacy Systems Integration")),(0,a.kt)("h2",{id:"who-is-it-built-by-"},"Who is it built by ?"),(0,a.kt)("p",null,"OpenFn products are built by the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/about"},"Open Function Group")," and\na growing community of open-source contributors."),(0,a.kt)("h2",{id:"our-products"},"Our products"),(0,a.kt)("p",null,"OpenFn has several products, which are all fully interoperable. This gives our\nusers the freedom to switch between any and all of the OpenFn products."),(0,a.kt)("p",null,"All OpenFn products, other than the OpenFn iPaaS are part of the free and\nopen-source\n",(0,a.kt)("a",{parentName:"p",href:"/documentation/getting-started/integration-toolkit"},(0,a.kt)("strong",{parentName:"a"},"OpenFn Integration Toolkit")),".\nThis Toolkit is a ",(0,a.kt)("strong",{parentName:"p"},"Digital Public Good"),' (a "DPG") recognized in the\n',(0,a.kt)("a",{parentName:"p",href:"https://digitalpublicgoods.net/registry/"},"DPG Registry")," and Digital Square's\n",(0,a.kt)("a",{parentName:"p",href:"https://digitalsquare.org/resourcesrepository/global-goods-guidebook"},"Global Goods Guidebook"),"."),(0,a.kt)("h3",{id:"the-openfn-ipaas"},"The OpenFn iPaaS"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"OpenFn iPaaS")," is an\n",(0,a.kt)("em",{parentName:"p"},"integration-platform-as-a-service"),' or "iPaaS". It is enterprise-grade software,\nhosted by OpenFn. We recommend starting out there - you can\n',(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"create an account for free"),", or view our pricing\n",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/pricing"},"here"),"."),(0,a.kt)("h3",{id:"openfnlightning-alpha"},"OpenFn/Lightning (Alpha)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/lightning/"},"OpenFn/Lightning")," is a ",(0,a.kt)("em",{parentName:"p"},"fully open\nsource")," workflow automation web application which can be deployed and run\nanywhere. It is designed for governments or NGOs who want to deploy and manage\ntheir ",(0,a.kt)("em",{parentName:"p"},"own")," integration platform, and need fully-fledged user management and\nauditing capabilities. Lightning relies on the same tried-and-trusted core\ntechnology as the OpenFn iPaaS and comes with an improved, visual interface for\nbuilding integrations."),(0,a.kt)("p",null,"It is currently in Alpha, but is scheduled for Beta release in Q4 2022."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you have any questions about our products, please don't hesitate to email\n",(0,a.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"admin@openfn.org"),".")),(0,a.kt)("h3",{id:"openfn-developer-tooling"},"OpenFn developer tooling"),(0,a.kt)("h4",{id:"openfndevtools"},(0,a.kt)("a",{parentName:"h4",href:"/documentation/devtools/home"},"OpenFn/devtools")),(0,a.kt)("p",null,"A set of CLI tools for writing & testing expressions, managing OpenFn projects,\nand developing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openfn/adaptor"},"adaptors"),"."),(0,a.kt)("h4",{id:"openfncore"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/openfn/core"},"OpenFn/core")),(0,a.kt)("p",null,"The central job processing program used in the OpenFn platform."),(0,a.kt)("h3",{id:"openfnmicroservice"},"OpenFn/Microservice"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html"},"OpenFn/Microservice")," is open\nsource software which makes use of OpenFn's core technology to create standalone\nmicroservices which can be deployed on any hardware."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can view the technical documentation and source code for OpenFn's FOSS\nintegration tools and adaptors in their respective repositories at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openfn"},"Github.com/OpenFn")," or see\n",(0,a.kt)("a",{parentName:"p",href:"/documentation/deploy/options"},"Deploy")," section for an overview of the FOSS\noptions and additional docs.")),(0,a.kt)("h2",{id:"the-community-forum"},"The Community Forum"),(0,a.kt)("p",null,"Finally, please make sure to check out our Discourse forum at\n",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"community.openfn.org"),". Sign up and join the\nconversation. Usually, that's the quickest way to get help if you've got\nquestions that aren't answered here."))}u.isMDXComponent=!0}}]);