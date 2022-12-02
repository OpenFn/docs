"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[86869],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>k});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return i?a.createElement(k,r(r({ref:t},m),{},{components:i})):a.createElement(k,r({ref:t},m))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},98687:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const s={sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},r="Implementation Checklist",o={unversionedId:"getting-started/implementation-checklist",id:"getting-started/implementation-checklist",title:"Implementation Checklist for planning your next integration project",description:"This checklist draws from experience of implementing interoperability projects with in-country government agencies (incl. UNICEF country offices, Ministry of Social Services Cambodia, MoH Thailand) to offer an implementation & planning guide covering key milestones in most interoperability and integration projects.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/implementation-checklist.md",sourceDirName:"getting-started",slug:"/getting-started/implementation-checklist",permalink:"/fr/documentation/getting-started/implementation-checklist",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/implementation-checklist.md",tags:[],version:"current",frontMatter:{sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},sidebar:"docs",previous:{title:"OpenFn Concepts",permalink:"/fr/documentation/getting-started/terminology"},next:{title:"Security",permalink:"/fr/documentation/getting-started/security"}},l={},c=[{value:"(1) Preparing for the Technical Implementation",id:"1-preparing-for-the-technical-implementation",level:2},{value:"(2) Functional Requirements",id:"2-functional-requirements",level:2},{value:"(3) System APIs",id:"3-system-apis",level:2},{value:"(4) Data Flows",id:"4-data-flows",level:2},{value:"(5) Security",id:"5-security",level:2},{value:"(6) Administration",id:"6-administration",level:2},{value:"Provisioning, Hosting, &amp; Maintenance",id:"provisioning-hosting--maintenance",level:3},{value:"Support",id:"support",level:3},{value:"Questions or feedback?",id:"questions-or-feedback",level:2}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"implementation-checklist"},"Implementation Checklist"),(0,n.kt)("p",null,"This checklist draws from experience of implementing interoperability projects with in-country government agencies (incl. UNICEF country offices, Ministry of Social Services Cambodia, MoH Thailand) to offer an implementation & planning guide covering key milestones in most interoperability and integration projects."),(0,n.kt)("p",null,"While this checklist should be tailored for each implementation, the tasks outlined here provide a template workplan that can help any organization prepare for their upcoming implementation."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Check out a real-world example See the UNICEF Cambodia repository for documented outputs from this checklist from an interoperability project implemented for the Cambodia Ministry of Social Affairs, Veterans, and Youth Rehabilitation and partner NGOs: ",(0,n.kt)("a",{parentName:"p",href:"https://openfn.github.io/unicef-cambodia/"},"openfn.github.io/unicef-cambodia/"))),(0,n.kt)("h2",{id:"1-preparing-for-the-technical-implementation"},"(1) Preparing for the Technical Implementation"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Point of contacts identified for informing functional requirements, technical requirements (incl. target system administrators), & testing"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dating sharing agreement finalized (including data residency & compliance requirements, and detailed list of data points that may be exchanged)")),(0,n.kt)("h2",{id:"2-functional-requirements"},"(2) Functional Requirements"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Business value articulated & user stories documented. ",(0,n.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#1-capture-requirements-as-user-stories"},"Learn more about user stories.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diagrams documenting business processes. ",(0,n.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#2-diagram-the-business-process"},"Learn more about diagrams & BPMN notation.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data element mapping specifications drafted. ",(0,n.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#3-map-data-elements-to-be-exchanged"},"Read about mapping specs here"),".")),(0,n.kt)("h2",{id:"3-system-apis"},"(3) System APIs"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Do the target systems have available APIs?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","API documentation secured"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Access to staging/developer environments for testing with target systems secured"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Authentication via the API tested to verify your system credentials"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints determined based on the functional requirements"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints tested to validate API behavior and verify your system credential's permissions")),(0,n.kt)("h2",{id:"4-data-flows"},"(4) Data Flows"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"Trigger")," confirmed (What kicks off a flow or data sync? Is it time- or event-based?)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diagrams documenting the technical data flow finalized. ",(0,n.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#2-diagram-the-business-process"},"Learn more about diagrams & BPMN notation.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data element mapping specifications finalized (with specifications for data transformation, cleaning, & calculation rules, technical specs)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Technical specifications finalized for the integration setup (which reference the ",(0,n.kt)("inlineCode",{parentName:"li"},"Diagrams")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"Data element mapping specifications"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Solution assumptions documented (regarding human workflows, data entry, consent, other criteria)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing plan drafted with testing instructions for end users with expected inputs & outputs")),(0,n.kt)("h2",{id:"5-security"},"(5) Security"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sign-off received for the technical specifications & how compliance will be ensured"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sign-off for data points (if any) that can be logged to help monitor integration ",(0,n.kt)("inlineCode",{parentName:"li"},"Activity History")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Administrator users & access levels confirmed")),(0,n.kt)("h2",{id:"6-administration"},"(6) Administration"),(0,n.kt)("h3",{id:"provisioning-hosting--maintenance"},"Provisioning, Hosting, & Maintenance"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deployment pathway confirmed (SaaS, Local, Open-Source) - If using OpenFn, ",(0,n.kt)("a",{parentName:"li",href:"/documentation/deploy/options"},"learn about deployment options"),"."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Hosting & Maintenance: Software maintenance, security updates, server status, etc. - confirm roles & responsibilities across systems")),(0,n.kt)("h3",{id:"support"},"Support"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Administor responsible for monitoring the integration is identified & trained"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support point of contacts (e.g., system administrators) identified for each target system if troubleshooting support required"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Solution documentation & training materials saved/shared")),(0,n.kt)("h2",{id:"questions-or-feedback"},"Questions or feedback?"),(0,n.kt)("p",null,"If you have any inputs, comments, or questions\u2013please contribute! Submit a pull request to this documentation page or leave a comment in ",(0,n.kt)("a",{parentName:"p",href:"https://community.openfn.org/"},"OpenFn Community"),"."))}p.isMDXComponent=!0}}]);