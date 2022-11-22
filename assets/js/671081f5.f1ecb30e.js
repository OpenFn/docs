"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[73881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_label:"Security",title:"Security considerations for data integration projects"},o="Security Guidelines for Data Integration Implementations",l={unversionedId:"getting-started/security",id:"getting-started/security",title:"Security considerations for data integration projects",description:"Even if the technologies leveraged in your integration solution can be",source:"@site/docs/getting-started/security.md",sourceDirName:"getting-started",slug:"/getting-started/security",permalink:"/documentation/getting-started/security",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/security.md",tags:[],version:"current",frontMatter:{sidebar_label:"Security",title:"Security considerations for data integration projects"},sidebar:"docs",previous:{title:"Implementation Checklist",permalink:"/documentation/getting-started/implementation-checklist"},next:{title:"Integration Design",permalink:"/documentation/design/design-quickstart"}},s={},c=[{value:"Resources referenced in the guidebook",id:"resources-referenced-in-the-guidebook",level:3},{value:"OpenFn Resources",id:"openfn-resources",level:3},{value:"Communities of practice &amp; other experts",id:"communities-of-practice--other-experts",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-guidelines-for-data-integration-implementations"},"Security Guidelines for Data Integration Implementations"),(0,i.kt)("p",null,"Even if the technologies leveraged in your integration solution can be\nconsidered secure, there are still many security risks in data integration,\nespecially during implementation. With support from Digital Square, we have\ntherefore developed a ",(0,i.kt)("strong",{parentName:"p"},"Security Guidebook for Data Integration\nImplementations"),"."),(0,i.kt)("p",null,"Since 2014, we at Open Function Group (the primary custodians of OpenFn) have\nhelped implement nearly 100 data integration solutions for over 45 NGO and\ngovernment partners around the world. Through our engagements with security\nteams at different partners, our own research and development, consultations\nwith security experts internal and external, and partnerships with other\ncommunities of practice, we have developed a strong understanding of security\nbest practices and considerations for data integration projects that we would\nlike to share with the wider digital development community."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This Guidebook aims to help digital implementers in the Digital Public Good\nand Global Goods communities better understand security risks and presents 23\nbest practices for the various implementation phases of data integration\nprojects.")," It also links to some open-sourced OFG resources our team uses in\nour own implementation process for OpenFn projects."),(0,i.kt)("p",null,"You can find a complete list of the 23 best practices on this page below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To access the Guidebook, check out the below slides or click the link to share\n& download:"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/security_guidebook"},"https://bit.ly/security_guidebook")),(0,i.kt)("p",null,(0,i.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vSflwoTK6G7JnilqTqh7ntlzXARU2ITREXDV6hJCVpvN5gwVRn97sLVrG7pYV54UP2GhX7YPO_JSHn5/embed?start=false&loop=false&delayms=30000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"})),(0,i.kt)("h3",null,"Secure Data Integration: 23 Implementation Best Practices"),(0,i.kt)("h4",null,"Core Tenets"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Understand relevant policies specific to data sharing, storage, and protection"),(0,i.kt)("li",null,"Only extract & transfer essential data points"),(0,i.kt)("li",null,"Document, document, document")),(0,i.kt)("h4",null,"Analyze & Plan"),(0,i.kt)("ol",{start:"4"},(0,i.kt)("li",null,"Don\u2019t take API security for granted"),(0,i.kt)("li",null,"Budget time for security testing")),(0,i.kt)("h4",null,"Design"),(0,i.kt)("ol",{start:"6"},(0,i.kt)("li",null,"Resource: Mapping specification template"),(0,i.kt)("li",null,"Resource: Architecture data flow diagram"),(0,i.kt)("li",null,"Resource: Project Security Configuration & Go-Live Checklist"),(0,i.kt)("li",null,"Consider idempotency, unique identifiers, & \u201cupsert\u201d operations to ensure data integrity"),(0,i.kt)("li",null,"Design for failures & transaction reprocessing"),(0,i.kt)("li",null,"Consider data validation")),(0,i.kt)("h4",null,"Build"),(0,i.kt)("ol",{start:"12"},(0,i.kt)("li",null,"Use change tracking & version control"),(0,i.kt)("li",null,"Encrypt where possible"),(0,i.kt)("li",null,"Use strong authentication;  don\u2019t talk to strangers"),(0,i.kt)("li",null,"Authorization scopes to limit access"),(0,i.kt)("li",null,"Log transactions for activity monitoring & control what information is logged")),(0,i.kt)("h4",null,"Deploy"),(0,i.kt)("ol",{start:"17"},(0,i.kt)("li",null,"Test again, especially credentials, before deployment"),(0,i.kt)("li",null,"Train users and system administrators on integration security"),(0,i.kt)("li",null,"Review your security requirements again before go-live"),(0,i.kt)("li",null,"Determine point of contacts for reporting security issues")),(0,i.kt)("h4",null,"Ongoing Monitoring & Management"),(0,i.kt)("ol",{start:"21"},(0,i.kt)("li",null,"Consider Governance models for ongoing management & changing requirements"),(0,i.kt)("li",null,"Train partners on change management"),(0,i.kt)("li",null,"Have a strategy for access management")),(0,i.kt)("p",null,"Read on for other resources and implementer communities to check out."),(0,i.kt)("h3",{id:"resources-referenced-in-the-guidebook"},"Resources referenced in the guidebook"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://digitalprinciples.org/wp-content/uploads/PDD_Principle-AddressPrivacySecurity_v2.pdf"},"Principles of Digital Development Privacy and Security Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.unicef.org/supply/media/5356/file/Policy-on-personal-data-protection-July2020.pdf.pdf"},"UNICEF policy on personal data protection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.icrc.org/en/data-protection-humanitarian-action-handbook"},"International Committee of the Red Cross Handbook on data protection in humanitarian action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gdpr.eu/what-is-gdpr/"},"GDPR Quick Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sanity.io/blog/a-rough-guide-to-running-a-gdpr-compliant-saas-business"},"Sanity.io A Rough Guide to Running a GDPR Compliant SaaS Business")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://owasp.org/www-project-api-security/"},"OWASP API Security Project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.govstack.global/wp-content/uploads/2021/08/Security_Building_Block_Definition_1.0.1.pdf"},"GovStack Security & API Standards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.healthdataprinciples.org/"},"Health Data Governance Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gicsandbox.org/sandbox-cms/health-data-privacy-confidentiality-and-security-guidelines-development-toolkit#dd01fcf80d4d46f08a099b282bc23f16"},"CDC Health Data Privacy, Confidentiality, and Security Guidelines"))),(0,i.kt)("h3",{id:"openfn-resources"},"OpenFn Resources"),(0,i.kt)("p",null,"More implementation guidance can be found across this Docs site. For OpenFn\nusers, learn more about OpenFn security & compliance at\n",(0,i.kt)("a",{parentName:"p",href:"http://openfn.org/trust"},"openfn.org/trust")," and\n",(0,i.kt)("a",{parentName:"p",href:"http://openfn.org/compliance"},"openfn.org/compliance"),"."),(0,i.kt)("p",null,"Here are the key OpenFn templates and resources referenced in the Guidebook:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit#gid=1822444315"},"Mapping Specification Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit#?templateid=fb96ae05-e288-4d1f-b3fc-2cbf7641a7cc"},"Solution Architecture Diagram")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/design/design-quickstart/#use-bpmn-for-standardized-documentation"},"BPMN Diagram resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing"},"Project Security Configuration & Go-Live Checklist"))),(0,i.kt)("h3",{id:"communities-of-practice--other-experts"},"Communities of practice & other experts"),(0,i.kt)("p",null,"Here are some other communities you may consider following for more security\nguidance."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ohie.org/display/resources/Privacy+and+Security+Working+Group+Call"},"OpenHIE Privacy & Security Working Group")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.govstack.global/"},"GovStack")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://dhis2.org/security/"},"DHIS2 Security Team & Community of Practice")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.asiaehealthinformationnetwork.org/communities-of-practice/"},"Asia eHealth Information Network (AeHIN) Communities of Practice"))))}p.isMDXComponent=!0}}]);