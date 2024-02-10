"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46526],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var o=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=t(45072),a=(t(11504),t(95788));const r={title:"About",id:"home",sidebar_label:"What is OpenFn?",slug:"/"},i=void 0,p={unversionedId:"get-started/home",id:"get-started/home",title:"About",description:"OpenFn is open source software that makes it easier for governments and NGOs to",source:"@site/docs/get-started/home.md",sourceDirName:"get-started",slug:"/",permalink:"/documentation/next/",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/get-started/home.md",tags:[],version:"current",frontMatter:{title:"About",id:"home",sidebar_label:"What is OpenFn?",slug:"/"},sidebar:"docs",next:{title:"Key Concepts",permalink:"/documentation/next/get-started/terminology"}},s={},l=[{value:"What is OpenFn?",id:"what-is-openfn",level:2},{value:"Who is it built by?",id:"who-is-it-built-by",level:2},{value:"Our products",id:"our-products",level:2},{value:"OpenFn v2: Lightning \u26a1",id:"openfn-v2-lightning-",level:3},{value:"OpenFn v1",id:"openfn-v1",level:3},{value:"OpenFn developer tooling",id:"openfn-developer-tooling",level:3},{value:"Community",id:"community",level:2}],u={toc:l},g="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,o.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Automation, integration, & interoperability",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"OpenFn is open source software that makes it easier for governments and NGOs to\n",(0,a.yg)("em",{parentName:"p"},"connect")," the different technologies they use, automate critical business\nprocesses, and scale their interventions. OpenFn enables automation,\nintegration, and data interoperability for the worlds most impactful\norganizations.")),(0,a.yg)("h2",{id:"what-is-openfn"},"What is OpenFn?"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"OpenFn is the leading\n",(0,a.yg)("a",{parentName:"strong",href:"https://digitalpublicgoods.net/digital-public-goods/"},"Digital Public Good")," for\nworkflow automation"),"\u2013a platform that's been used by 70+ NGOs and government\nministries to automate and integrate critical business processes and information\nsystems."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Connect any app")," with OpenFn's library of open-source ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/"},"Adaptors"),"\n(i.e., connectors). From last-mile services to national-level reporting, OpenFn\nboosts efficiency & effectiveness while enabling secure, stable, scalable\ninteroperability at all levels."),(0,a.yg)("p",null,"OpenFn can be deployed locally or on the secure\n",(0,a.yg)("a",{parentName:"p",href:"https://openfn.org/pricing"},"cloud-hosted platform"),". See the\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/next/deploy/options"},"Deploy docs")," for more on deployment options\nand requirements."),(0,a.yg)("p",null,"To support implementers, OpenFn has an online\n",(0,a.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community"),", documentation, and\n",(0,a.yg)("a",{parentName:"p",href:"mailto://support@openfn.org"},"support"),". Contact\n",(0,a.yg)("a",{parentName:"p",href:"mailto://partnerships@openfn.org"},"partnerships@openfn.org")," to learn about\nOpenFn implementation partners and the OpenFn Partner Program."),(0,a.yg)("h2",{id:"who-is-it-built-by"},"Who is it built by?"),(0,a.yg)("p",null,"The primary steward of OpenFn is\n",(0,a.yg)("a",{parentName:"p",href:"https://openfn.org/about"},"Open Function Group"),", a global team of workflow\nautomation and data integration specialists and core contributors to OpenFn.\nLearn more about OpenFn's governance\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/governance"},"here"),"."),(0,a.yg)("p",null,"The OpenFn ",(0,a.yg)("a",{parentName:"p",href:"https://app.digitalpublicgoods.net/a/11038"},"Digital Public Good"),' has\nbeen built by and for the growing community of NGOs, governments,\n"tech-for-good" partners, and open-source contributors working on the health and\nhumanitarian interventions in Low- and Middle-income Countries (LMICs).'),(0,a.yg)("h2",{id:"our-products"},"Our products"),(0,a.yg)("p",null,"OpenFn has a suite of products, which are all fully interoperable. This gives\nour users the freedom to switch between any and all of the OpenFn products."),(0,a.yg)("p",null,"All OpenFn products, other than the OpenFn v1 iPaaS, are part of the free and\nopen-source ",(0,a.yg)("inlineCode",{parentName:"p"},"OpenFn Integration Toolkit"),", which is a ",(0,a.yg)("strong",{parentName:"p"},"Digital Public Good"),' (a\n"DPG") recognized in the\n',(0,a.yg)("a",{parentName:"p",href:"https://digitalpublicgoods.net/registry/"},"DPG Registry")," and Digital Square's\n",(0,a.yg)("a",{parentName:"p",href:"https://digitalsquare.org/resourcesrepository/global-goods-guidebook"},"Global Goods Guidebook"),"."),(0,a.yg)("p",null,"The core OpenFn products include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://github.com/OpenFn/lightning"},"OpenFn/lightning"),': the "v2"')," open\nsource platform - current version"),(0,a.yg)("li",{parentName:"ul"},"OpenFn/platform v1: replaced by the v2; soon to be sunsetted in 2025"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/adaptors"},(0,a.yg)("strong",{parentName:"a"},"OpenFn/adaptors")),": source code for\nadaptors"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/kit"},(0,a.yg)("strong",{parentName:"a"},"OpenFn/kit")),": developer tooling & CLI"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/docs"},(0,a.yg)("strong",{parentName:"a"},"OpenFn/docs")),": documentation & source for\ndocs.openfn.org")),(0,a.yg)("p",null,"See all products and code at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn"},"Github.com/OpenFn"),"."),(0,a.yg)("h3",{id:"openfn-v2-lightning-"},"OpenFn v2: Lightning \u26a1"),(0,a.yg)("p",null,'When you hear "OpenFn", think\n',(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/lightning/"},"OpenFn/lightning"),"--",(0,a.yg)("strong",{parentName:"p"},'the OpenFn "v2"'),".\nIt is a ",(0,a.yg)("em",{parentName:"p"},"full open source")," workflow automation web application which can be\ndeployed and run anywhere. It is designed for governments and NGOs who want\nstate-of-the-art workflow automation and data integration/interoperability\ncapabilities with fully-fledged user management and auditing capabilities\nthrough a managed ",(0,a.yg)("em",{parentName:"p"},"or")," entirely self-hosted platform."),(0,a.yg)("p",null,"The v2 leverages the same tried-and-trusted core technology as the OpenFn v1 and\ncomes with an improved, visual interface for building integrations."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"OpenFn Workflow Canvas",src:t(89996).c,width:"2856",height:"1442"})),(0,a.yg)("admonition",{title:"OpenFn v2 replaces the v1",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"OpenFn v2 is available to any new users. All organizations currently using the\nlegacy OpenFn v1 platform will be migrated to OpenFn v2 by the end of 2024.")),(0,a.yg)("h3",{id:"openfn-v1"},"OpenFn v1"),(0,a.yg)("p",null,"OpenFn v1 is the legacy OpenFn ",(0,a.yg)("em",{parentName:"p"},"integration-platform-as-a-service"),' or "iPaaS"\nfirst launched in 2015. OpenFn v1 was open-core with a proprietary web app.'),(0,a.yg)("p",null,"The v1 platform will be sunsetted by 2025 and replaced by the fully open-source\nOpenFn v2 (see above)."),(0,a.yg)("h3",{id:"openfn-developer-tooling"},"OpenFn developer tooling"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit"},"OpenFn/kit")," provides a CLI and set of developer tools for\nwriting & testing workflows, managing OpenFn projects, and developing\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/openfn/adaptors"},"Adaptors"),"."),(0,a.yg)("admonition",{title:"Browse all OpenFn code",type:"note"},(0,a.yg)("p",{parentName:"admonition"},'You can view the technical documentation and source code for OpenFn\'s fully open\nsource ("FOSS") integration tools and adaptors in their respective repositories\nat ',(0,a.yg)("a",{parentName:"p",href:"https://github.com/openfn"},"Github.com/OpenFn")," or see\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/next/deploy/options"},"Deploy")," section for an overview of the FOSS\noptions and additional docs.")),(0,a.yg)("h2",{id:"community"},"Community"),(0,a.yg)("p",null,"To ask questions, report issues, or learn from other OpenFn implementers, check\nout our Discourse forum at ",(0,a.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community.openfn.org"),".\nSign up and join the conversation. Usually, that's the quickest way to get help\nif you've got questions that aren't answered here."),(0,a.yg)("p",null,"If you have any questions about our products, ask on the Community or email the\ncore team ",(0,a.yg)("a",{parentName:"p",href:"mailto:support@openfn.org"},"support@openfn.org"),"."))}c.isMDXComponent=!0},89996:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/case_referral_workflow-9102e35d98938e276cdcc435f794ce43.png"}}]);