"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[26723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={layout:"post",title:"Workflow Automation; Why do it yourself when a program can do it for you?",author:"Alexa de Vegvar",author_url:"https://github.com/alexadevegvar",author_image_url:"https://avatars.githubusercontent.com/alexadevegvar",tags:["automation","solution"],image:"https://user-images.githubusercontent.com/105651463/172341536-ebde5ca0-12b8-4a8a-bb40-da9442701df3.png",featured:!1},i=void 0,s={permalink:"/articles/2022/06/07/workflow-automation",editUrl:"https://github.com/openfn/docs/edit/main/articles/2022-06-07-workflow-automation.md",source:"@site/articles/2022-06-07-workflow-automation.md",title:"Workflow Automation; Why do it yourself when a program can do it for you?",description:"Do you think twice when you get an automatic SMS notification because your",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"automation",permalink:"/articles/tags/automation"},{label:"solution",permalink:"/articles/tags/solution"}],readingTime:5.34,hasTruncateMarker:!0,authors:[{name:"Alexa de Vegvar",url:"https://github.com/alexadevegvar",imageURL:"https://avatars.githubusercontent.com/alexadevegvar"}],frontMatter:{layout:"post",title:"Workflow Automation; Why do it yourself when a program can do it for you?",author:"Alexa de Vegvar",author_url:"https://github.com/alexadevegvar",author_image_url:"https://avatars.githubusercontent.com/alexadevegvar",tags:["automation","solution"],image:"https://user-images.githubusercontent.com/105651463/172341536-ebde5ca0-12b8-4a8a-bb40-da9442701df3.png",featured:!1},prevItem:{title:"Secure by design: a roadmap to secure authentication and authorization",permalink:"/articles/2022/09/19/auth-security"},nextItem:{title:"How learning JavaScript helps me better understand OpenFn jobs",permalink:"/articles/2021/10/29/how-learning-javascript-helped-me-better-understand-jobs"}},l={authorsImageUrls:[void 0]},c=[{value:"What is workflow automation?",id:"what-is-workflow-automation",level:2},{value:"MyAgro",id:"myagro",level:3},{value:"Sinapis",id:"sinapis",level:3},{value:"DIAL",id:"dial",level:3},{value:"What\u2019s the big picture here?",id:"whats-the-big-picture-here",level:2},{value:"Call to Action",id:"call-to-action",level:2},{value:"About Open Function Group",id:"about-open-function-group",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do you think twice when you get an automatic SMS notification because your\nprescription is ready? (Neither do I.) This seamless experience is driven by\n\u201cworkflow automation\u201d, a key feature that OpenFn provides. The OpenFn\nIntegration Toolkit is a Digital Public Good (DPG) used by governments and NGOs\nto boost efficiency through workflow automation. The automation that OpenFn\nprovides includes automatically sending SMSs, automating stock updates across\nsupply chain systems, tracking clinical visits, and helping plan vaccine\nrollouts. We support our partners\u2019 work by lifting the burden of manual data\ntransfers between platforms."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This article\n",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/pulse/workflow-automation-why-do-yourself-when-program-can-you-openfn/?trackingId=TnWiYNtf5QP4GfAj6R4meQ%3D%3D"},"originally appeared"),"\nas a LinkedIn article from Open Function Group.")),(0,o.kt)("h2",{id:"what-is-workflow-automation"},"What is workflow automation?"),(0,o.kt)("p",null,"Workflow automation is an approach to making the flow of tasks across platforms\nrun independently. A prescription SMS notification feels seamless, but it\nprobably requires complex automation across multiple systems like clinical\nregistries, pharmacy stock databases, and SMS gateways. Tools like OpenFn run\n\u201cbehind the scenes\u201d to perform calculations and transfer relevant data to/from\ndifferent systems autonomously, minimising the risk of human error and\nultimately saving time and money that an agency would spend on manual data\ntransfers. The goal is to preserve data integrity, uphold data security, and\nenforce compliance with policies and data standards."),(0,o.kt)("p",null,"Since 2014, OpenFn has been at the forefront of workflow automation in the\nsocial sector, providing a platform to help governments and NGOs focus on the\nhuman aspect of their work rather than wasting time trying to exchange data\nbetween systems or perform calculations manually."),(0,o.kt)("h3",{id:"myagro"},"MyAgro"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.myagro.org/"},"MyAgro"),", an NGO helping West African farmers increase\ntheir yield, uses OpenFn to power its SMS-based savings deposit system for\nsmall-scale farmers. MyAgro distributes and tracks saving vouchers using the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," app. Smallholder farmers purchase\npre-paid myAgro saving scratch cards and text the one-time code to secure the\nvoucher credit in their account. Once the amount has been added to their\nbalance, a confirmation notification is sent to the farmer. MyAgro works with\nthe farmers to reach their savings goal, which they then use to pay for seeds,\nfertilisers, and training courses. OpenFn:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/105651463/172341045-62a3eebd-98fb-4189-987f-06bbdb03ac30.png"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Syncs voucher codes from CommCare to Salesforce so the relevant offices can\ntrack who purchased the saving vouchers."),(0,o.kt)("li",{parentName:"ol"},"Matches incoming SMSs against the database of vouchers to deposit correct\nfunds into the individual account."),(0,o.kt)("li",{parentName:"ol"},"Allocates savings to farmers\u2019 accounts in Salesforce and updates the account\nstatus."),(0,o.kt)("li",{parentName:"ol"},"Sends a confirmation SMS with updated account balances to farmers, so they\nare aware of their credit.")),(0,o.kt)("p",null,"OpenFn helps myAgro reach more farmers with less administrative overhead by\nautomating these key steps. MyAgro calculated that even at their 2014 levels of\nscale, OpenFn saved them 260+ hours per year and increased customer confidence\nas they worked to serve poor farmers."),(0,o.kt)("h3",{id:"sinapis"},"Sinapis"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sinapis.org/"},"Sinapis"),", an NGO that empowers entrepreneurs through\ntraining courses, uses OpenFn to automate its payment collection process. Every\ntime a client\u2019s new\n",(0,o.kt)("a",{parentName:"p",href:"https://www.vodafone.com/about-vodafone/what-we-do/consumer-products-and-services/m-pesa/globalmerchants"},"M-Pesa"),"\npayment is registered in ",(0,o.kt)("a",{parentName:"p",href:"https://kopokopo.co.ke/"},"Kopo Kopo"),", OpenFn:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/105651463/172341175-5505b647-93dc-44af-9143-00ebdd0b5bae.png"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Automatically matches incoming payments with existing Sinapis accounts."),(0,o.kt)("li",{parentName:"ol"},"Logs new payments and updated payment status in Salesforce to track\nentrepreneurs\u2019 charges."),(0,o.kt)("li",{parentName:"ol"},"Updates account balances to help staff monitor outstanding balances and\noverdue fees.")),(0,o.kt)("p",null,"With OpenFn handling the routine data processing, Sinapis has more time to\nsupport its entrepreneurs. Precious staff time can be spent delivering training,\nthe essential face-to-face coaching that transforms their clients\u2019 fledgling\nenterprises. Their team does not have to worry about the accuracy of payments\nand account balances; the OpenFn implementation replaces error-prone manual data\nentry with a systematised, intelligible, fully automated process."),(0,o.kt)("h3",{id:"dial"},"DIAL"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://digitalimpactalliance.org/"},"Digital Impact Alliance (DIAL)"),", an\norganisation that works to overcome digital development barriers, wanted to\nprototype a \u201cbuilding-blocks based approach\u201d for their upcoming GovStack.global\nproject. They configured an HR workflow solution that connects mobile data\ncollection apps, databases, and payment apps using OpenFn. Every time an\norganisation registers new workers via\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.opendatakit.org/collect-intro/"},"ODK Collect"),", OpenFn:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/105651463/172341214-06a1e74b-c1e3-45e4-83c8-4a60af5a9d2d.png"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Automatically registers new employees in an ",(0,o.kt)("a",{parentName:"li",href:"https://www.ihris.org/"},"iHRIS"),"\ndatabase to oversee all new hires."),(0,o.kt)("li",{parentName:"ol"},"Makes payments to workers via\n",(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/aclk?sa=l&ai=DChcSEwicha-ltsnnAhUB1N4KHY8hDEoYABAAGgJ3Yg&sig=AOD64_27g900G2RtoQsW0km9iT4Oq262ag&q=&ved=2ahUKEwj8wKeltsnnAhVSxYUKHVcrBbUQ0Qx6BAgMEAE&adurl="},"Mifos"),",\nensuring all wage transfers are direct.")),(0,o.kt)("p",null,"While it\u2019s not in use at scale, this prototype is a powerful illustration of how\nautomation enables scalable, component-based solutions to become more than the\nsum of their parts. The processes that DIAL implement with OpenFn help unlock\nthe true potential of these powerful underlying DPGs."),(0,o.kt)("h2",{id:"whats-the-big-picture-here"},"What\u2019s the big picture here?"),(0,o.kt)("p",null,"OpenFn\u2019s goal is to increase the efficiency and effectiveness of the social\nsector. Why should health and humanitarian organisations waste precious\nresources manually moving data across systems when workflow automation can do it\nmore safely and quickly? We want to ensure employees focus on using data to do\ntheir work, not transferring data between systems and running rote calculations."),(0,o.kt)("p",null,"Saving organisations time and money is part of the picture, but we also deliver\nbetter program outcomes through efficiency and effectiveness. Suppose OpenFn\nsecurely automates the complex digital processes critical health and\nhumanitarian interventions require. Reducing error rates and security\nvulnerabilities and getting higher quality data into the hands of a doctor\nfaster actually saves lives. Responsible automation leads to better health and\nhumanitarian outcomes, enabling larger-scale intervention delivery via\nefficiency gains and improving service quality by getting accurate data into the\nhands of patients, clinicians, and policymakers when they need it."),(0,o.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,o.kt)("p",null,"Think about your own experiences; have you found yourself in a situation where\nmanual data processing\u2014some rote, mindless task\u2014has gotten in the way of doing\nthe more exciting parts of your job? Whether you are in the health and\nhumanitarian space or just want to make your life easier, OpenFn is here for\nyou. Our open-source toolkit is available for everyone to automate tasks such as\nsending SMS and email notifications or automating data cleaning and formatting\nfor faster reporting."),(0,o.kt)("p",null,"Head to ",(0,o.kt)("a",{parentName:"p",href:"http://docs.openfn.org/"},"docs.openfn.org")," to learn more about\nenterprise-grade automations with our DPG and check out\n",(0,o.kt)("a",{parentName:"p",href:"http://community.openfn.org/"},"community.openfn.org")," to connect and collaborate\nwith like-minded social-sector integrators and OpenFn staff. We hope to see you\nsoon!"),(0,o.kt)("h2",{id:"about-open-function-group"},"About Open Function Group"),(0,o.kt)("p",null,"Open Function Group (OFG) is a global team of integration specialists and\ndevelopers of the OpenFn Integration Toolkit. As a\n",(0,o.kt)("a",{parentName:"p",href:"https://digitalpublicgoods.net/"},"DPG"),", OpenFn\u2019s core technology is free and\nopen-source. If you want more information about the Toolkit or to sign up for a\nfree plan on our associated SaaS application, visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/"},"https://www.openfn.org/"),"."))}u.isMDXComponent=!0}}]);