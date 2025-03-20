"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[88318],{4067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_label:"Standards",title:"Standards & OpenFn"},i=void 0,s={unversionedId:"get-started/standards",id:"get-started/standards",title:"Standards & OpenFn",description:"OpenFn follows global standards for open source software and for workflow engine",source:"@site/docs/get-started/standards.md",sourceDirName:"get-started",slug:"/get-started/standards",permalink:"/documentation/get-started/standards",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/get-started/standards.md",tags:[],version:"current",frontMatter:{sidebar_label:"Standards",title:"Standards & OpenFn"},sidebar:"docs",previous:{title:"Glossary",permalink:"/documentation/get-started/glossary"},next:{title:"Security & Compliance",permalink:"/documentation/get-started/security-compliance"}},l={},p=[{value:"Digital Public Good",id:"digital-public-good",level:2},{value:"Global Good for Health",id:"global-good-for-health",level:2},{value:"OpenHIE Standard Architecture",id:"openhie-standard-architecture",level:2},{value:"OpenFn and OpenHIE",id:"openfn-and-openhie",level:3},{value:"More on how OpenFn supports the OpenHIE spec",id:"more-on-how-openfn-supports-the-openhie-spec",level:3},{value:"The Interoperability layer (IOL):",id:"the-interoperability-layer-iol",level:4},{value:"The workflow engine:",id:"the-workflow-engine",level:4},{value:"Case study: OpenFn as an OpenHIM Mediator",id:"case-study-openfn-as-an-openhim-mediator",level:3},{value:"GovStack",id:"govstack",level:2},{value:"Pricinciples for Digital Development",id:"pricinciples-for-digital-development",level:2},{value:"FHIR for health data exchange",id:"fhir-for-health-data-exchange",level:2},{value:"1. Non-FHIR to FHIR Data Exchange",id:"1-non-fhir-to-fhir-data-exchange",level:3},{value:"2. FHIR to FHIR Data Exchange",id:"2-fhir-to-fhir-data-exchange",level:3},{value:"FHIR Adaptors",id:"fhir-adaptors",level:2},{value:"Other Data Standards",id:"other-data-standards",level:2}],d={toc:p},c="wrapper";function g(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"OpenFn follows global standards for open source software and for workflow engine\nsolutions. Read on to learn how OpenFn complies with specific standards."),(0,o.yg)("h2",{id:"digital-public-good"},"Digital Public Good"),(0,o.yg)("p",null,"OpenFn is recognised by the\n",(0,o.yg)("a",{parentName:"p",href:"https://digitalpublicgoods.net/"},"Ditial Public Goods Alliance"),' as a Digital\nPublic Good, or "DPG".'),(0,o.yg)("admonition",{title:"Digital Public Goods Definition",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Open-source software, open data, open AI models, open standards, and open\ncontent that adhere to privacy and other applicable best practices, do no harm\nby design and are of high relevance for attainment of the United Nations 2030\nSustainable Development Goals (SDGs)")),(0,o.yg)("p",null,"You can read more about the DPG standard\n",(0,o.yg)("a",{parentName:"p",href:"https://digitalpublicgoods.net/standard/"},"here"),"."),(0,o.yg)("h2",{id:"global-good-for-health"},"Global Good for Health"),(0,o.yg)("p",null,"OpenFn is one of 36 software applications that have been recognised as a Digital\nSquare\n",(0,o.yg)("a",{parentName:"p",href:"https://wiki.digitalsquare.io/index.php/What_are_Global_Goods#:~:text=Digital%20Square%20Global%20Goods%20are,scale%2C%20are%20used%20across%20multiple"},"Global Good for Health"),"."),(0,o.yg)("admonition",{title:"Global Goods for Health Definition",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"A mature digital health software global good is software that is Free and Open\nSource Software (FOSS), is supported by a strong community, has a clear\ngovernance structure, is funded by multiple sources, has been deployed at\nsignificant scale, is used across multiple countries, has demonstrated\neffectiveness, is designed to be interoperable, and is an emergent standard\napplication.")),(0,o.yg)("p",null,"You can read more about Global Goods for Health\n",(0,o.yg)("a",{parentName:"p",href:"https://digitalsquare.org/digital-health-global-goods"},"here"),"."),(0,o.yg)("h2",{id:"openhie-standard-architecture"},"OpenHIE Standard Architecture"),(0,o.yg)("p",null,"OpenFn is considered a OpenHIE reference technology and is compliant with the\nOpenHIE standard architecture for digital health implementations."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"This section assumes you are familiar with the OpenHIE specification\u2013a\nreference framework that makes sharing health data across information systems\npossible through a Health Information Exchange (\u201cHIE\u201d). To learn more, check out\n",(0,o.yg)("a",{parentName:"em",href:"https://guides.ohie.org/arch-spec/"},"OpenHIE docs")," and\n",(0,o.yg)("a",{parentName:"em",href:"https://ohie.org/"},"community"),".")),(0,o.yg)("h3",{id:"openfn-and-openhie"},"OpenFn and OpenHIE"),(0,o.yg)("p",null,"The OpenFn platform v2 (",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/"},"OpenFn/lightning"),") is an\nOpenHIE-compliant ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"workflow engine"))," used to (1) automate complex business\nprocesses that cut across digital systems (including OpenHIE components ",(0,o.yg)("em",{parentName:"p"},"and"),"\npoint of care systems), and to (2) handle data mapping and transformation."),(0,o.yg)("p",null,"If your organization is implementing the OpenHIE standard architecture, then\nOpenFn provides a workflow engine that interfaces with your interoperability\nlater component (\u201cIOL\u201d). OpenFn can be implemented to automate:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Workflows between point of service systems;"),(0,o.yg)("li",{parentName:"ul"},"Workflows between across core HIE components;"),(0,o.yg)("li",{parentName:"ul"},"Data transformation steps required to prepare data before routing it to other\nHIE components via the IOL. (Note that OpenFn workflows serve as a\nweb-UI-accessible and manageable alternative to OpenHIM \u201cmediators\u201d.)")),(0,o.yg)("p",null,"OpenFn supports the\n",(0,o.yg)("a",{parentName:"p",href:"https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-functional-requirements"},"functional requirements"),"\nof the OpenHIE IOL, therefore some organizations also use OpenFn as their\ncentral interoperability layer. That said, please note that OpenFn cannot yet be\nused as a fully OpenHIE-compliant ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"interoperability layer ")),"because it does\nnot leverage the IHE ATNA profile (see\n",(0,o.yg)("a",{parentName:"p",href:"https://guides.ohie.org/arch-spec/openhie-component-specifications-1/openhie-interoperability-layer-iol#openhie-iol-workflow-requirements"},"requirement IOL-WF1"),")."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"openhie_architecture",src:t(71189).A,width:"690",height:"349"})),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"For an overview of OpenFn Lightning and how it fits into OpenHIE, see our\n",(0,o.yg)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=PTRRZBYtqyc"},"introduction for the OpenHIE showcase")),"\nor read on for more context."),(0,o.yg)("h3",{id:"more-on-how-openfn-supports-the-openhie-spec"},"More on how OpenFn supports the OpenHIE spec"),(0,o.yg)("h4",{id:"the-interoperability-layer-iol"},"The Interoperability layer (IOL):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Sits between the OpenHIE components and point-of-care systems"),(0,o.yg)("li",{parentName:"ul"},"Serves as a single point of entry and secure gateway to the OpenHIE"),(0,o.yg)("li",{parentName:"ul"},"Complies with requirements around transaction routing and auditing")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"OpenFn Lightning satisfies the functional requirements of the IOL, but is not\nfully OpenHIE-compliant since it does not yet leverage the IHE ATNA profile")),(0,o.yg)("h4",{id:"the-workflow-engine"},"The workflow engine:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Provides out-of-box interfaces to connect to point of care systems"),(0,o.yg)("li",{parentName:"ul"},"Handles complex data mapping and transformation to reformat data for receipt\nby a destination system (e.g., map data from point of care system to the data\nmodel of a OpenHIE component, and/or map non-FHIR data to FHIR profiles)"),(0,o.yg)("li",{parentName:"ul"},"Routes data to the interoperability layer"),(0,o.yg)("li",{parentName:"ul"},"Can keep track of the long running state of a patient's care and perform\nactions based on this context (such as sending alerts) to improve patient\ncare.")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"OpenFn Lightning is an OpenHIE-compliant workflow engine")),(0,o.yg)("h3",{id:"case-study-openfn-as-an-openhim-mediator"},"Case study: OpenFn as an OpenHIM Mediator"),(0,o.yg)("p",null,"In Nigeria, as part of the\n",(0,o.yg)("a",{parentName:"p",href:"https://articles.nigeriahealthwatch.com/almanach-revolutionising-the-management-of-childhood-illnesses-in-adamawa-state/"},"ALMANACH project"),",\nSwissTPH used OpenFn to automate data mapping and exchange between CommCare and\nDHIS2 for disease surveillance. The workflow ran on OpenFn\u2019s cloud for several\nyears and in preparation for handover and scaling-up, the team at SwissTPH then\nprepared a deep integration with OpenHIM for local deployment."),(0,o.yg)("p",null,"SwissTPH took their existing OpenFn workflow and built it into their OpenHIM\ninstance as a \u201cmediator\u201d, ensuring all data is routed via this IOL while still\nleveraging OpenFn\u2019s out-of-box DHIS2 adaptor and reusable workflow templates to\nquickly develop automation that reformats data received from CommCare and maps\nit to the DHIS2 data model."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"swisstph",src:t(14626).A,width:"1626",height:"852"})),(0,o.yg)("h2",{id:"govstack"},"GovStack"),(0,o.yg)("p",null,"OpenFn is compliant with\n",(0,o.yg)("a",{parentName:"p",href:"https://govstack.gitbook.io/bb-workflow/2-description"},"GovStack's standard specification"),"\nfor workflow engines."),(0,o.yg)("h2",{id:"pricinciples-for-digital-development"},"Pricinciples for Digital Development"),(0,o.yg)("p",null,"OpenFn was designed for the social sector and has been actively prioritizing the\n",(0,o.yg)("a",{parentName:"p",href:"https://digitalprinciples.org/"},"Principles of Digital Development")," since its\ninception."),(0,o.yg)("p",null,"OpenFn solutions are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"interoperable")," (connect any application);"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"reusable")," (utilize existing OpenFn configurations as templates, or easily\nshare, copy, and modify your own configurations; see docs.openfn.org/library);"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"sustainable")," (flexible implementation options with no lock-in);"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"scalable")," (OpenFn leverages enterprise-grade tech to handle high data\nvolumes and provides a range of deployment options to ensure total solution\nownership on any server);"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"promote open standards and open access")," (through our open-source software,\ndocumentation, and features to help users implement open standards in their\ninformation exchange solutions), and"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"address privacy & security"),".")),(0,o.yg)("h2",{id:"fhir-for-health-data-exchange"},"FHIR for health data exchange"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.hl7.org/fhir/"},"FHIR"),' (pronounced "fire" \ud83d\udd25) is a standard for\nhealth care data exchange, published by HL7\xae.'),(0,o.yg)("p",null,"OpenFn is used by health organizations to connect multiple FHIR- and non-FHIR\ncompliant systems in a secure, stable, and scalable manner. OpenFn can\nfacilitate 2 categories of FHIR workflows:"),(0,o.yg)("h3",{id:"1-non-fhir-to-fhir-data-exchange"},"1. Non-FHIR to FHIR Data Exchange"),(0,o.yg)("p",null,"OpenFn users can configure workflows to convert non-FHIR data to FHIR-compliant\nformats, and then route to FHIR systems."),(0,o.yg)("p",null,"For example, get data from CommCare mobile app, convert to FHIR, and send to\nnational health system's FHIR store.\n",(0,o.yg)("img",{alt:"nonFHIR Workflow",src:t(28373).A,width:"2856",height:"1442"})),(0,o.yg)("h3",{id:"2-fhir-to-fhir-data-exchange"},"2. FHIR to FHIR Data Exchange"),(0,o.yg)("p",null,"OpenFn users can also configure Workflows to automate the exchange and routing\nof ",(0,o.yg)("em",{parentName:"p"},"already")," FHIR-compliant data to other FHIR-compliant systems."),(0,o.yg)("p",null,"For example, get data from OpenMRS's FHIR API, and forward to the national\nhealth system's FHIR store (no data transformation needed)."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"FHIR Workflow",src:t(32542).A,width:"2856",height:"1442"})),(0,o.yg)("h2",{id:"fhir-adaptors"},"FHIR Adaptors"),(0,o.yg)("p",null,"OpenFn ",(0,o.yg)("a",{parentName:"p",href:"/adaptors"},"adaptors")," fast-track integration setup with target\napplications (including FHIR endpoints!). The core team is currently working on\na suite of FHIR-specific adaptors to enable interoperability with FHIR systems."),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/fhir-4"},"fhir-4 adaptor")," makes it easy to access and modify data\nheld on any ",(0,o.yg)("a",{parentName:"p",href:"https://www.hl7.org/fhir/R4/"},"FHIR r4")," compliant server. It also\nprovides full code-assist to developers while creating specific resource\ndefinitions, simplifying data-entry and mapping logic."),(0,o.yg)("p",null,"We also provide a generic ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/fhir"},"fhir")," adaptor that's compatible with\nall FHIR versions."),(0,o.yg)("admonition",{title:"Fhir 4 support",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"fhir-4")," adaptor is new to OpenFn as of March 2025. It introduces richer\nlevels of support from the generic ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/fhir"},"fhir"),"adaptor. Support for\nother FHIR versions is coming soon")),(0,o.yg)("p",null,"See the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/wiki/Generating-Fhir-Adaptors"},"Adaptors Wiki"),"\nto learn how to build your own FHIR adpator specific to your target FHIR\nImplementation Guide"),(0,o.yg)("h2",{id:"other-data-standards"},"Other Data Standards"),(0,o.yg)("p",null,"OpenFn Workflows can automate data transformation, cleaning, and formatting\nrules to ensure compliance with ",(0,o.yg)("em",{parentName:"p"},"your")," organization's specific standards."),(0,o.yg)("p",null,"Ask on the ",(0,o.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community")," to explore how OpenFn can\nbe leverage to help automate application and enforcement of other data\nstandards."))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,u=c["".concat(l,".").concat(h)]||c[h]||g[h]||r;return t?a.createElement(u,i(i({ref:n},d),{},{components:t})):a.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},71189:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/openhie_architecture-e11206904355a08ed7dd8080226e60ee.png"},14626:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/swisstph-b694f2c00fb5265672b86f8e1860af38.png"},32542:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/workflow_fhir_fhir-d4889cd3ac0c1421bcaac7b9c52954ad.png"},28373:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/workflow_nonfhir_fhir-a64e0c0ce48ddb5dedd9b7cf77b3da9e.png"}}]);