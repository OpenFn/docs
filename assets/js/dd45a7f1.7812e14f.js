"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4652],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(a),p=o,f=c["".concat(l,".").concat(p)]||c[p]||h[p]||r;return a?n.createElement(f,s(s({ref:e},u),{},{components:a})):n.createElement(f,s({ref:e},u))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},30969:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_label:"Glossary for Integration",title:"A glossary for data integration"},s=void 0,i={unversionedId:"getting-started/glossary",id:"getting-started/glossary",title:"A glossary for data integration",description:"Now that we've got a basic understanding of what an integration is, it's",source:"@site/docs/getting-started/glossary.md",sourceDirName:"getting-started",slug:"/getting-started/glossary",permalink:"/documentation/getting-started/glossary",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/glossary.md",tags:[],version:"current",frontMatter:{sidebar_label:"Glossary for Integration",title:"A glossary for data integration"},sidebar:"docs",previous:{title:"Integration Design",permalink:"/documentation/design/design-quickstart"},next:{title:"Introduction to Jobs",permalink:"/documentation/build/jobs"}},l={},d=[{value:"API",id:"api",level:2},{value:"API Protocol",id:"api-protocol",level:2},{value:"Database",id:"database",level:2},{value:"Data source",id:"data-source",level:2},{value:"Data system",id:"data-system",level:2},{value:"Encryption",id:"encryption",level:2},{value:"File system",id:"file-system",level:2},{value:"ETL",id:"etl",level:2},{value:"Integration platform",id:"integration-platform",level:2},{value:"iPaaS",id:"ipaas",level:3},{value:"Metadata",id:"metadata",level:2},{value:"Push, pull, and streaming",id:"push-pull-and-streaming",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Structured and unstructured data",id:"structured-and-unstructured-data",level:2},{value:"Writeback",id:"writeback",level:2}],u={toc:d};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we've got a basic understanding of what an integration is, it's\nimportant to establish some of the foundational concepts we need to press\nforward. This doesn't mean you can't use OpenFn if you don't know what any of\nthese words mean prior to reading our documentation, but it does mean that some\nof the most important tasks along the OpenFn journey will assume at least a\nbasic understanding of each of these terms. In\nsome cases, we also link to further reading if you want a better\nunderstanding of some part of your data integration picture."),(0,o.kt)("p",null,"Note: This glossary is meant to be OpenFn-agnostic. The rest of the docs help\nyou to get a picture of the parts of OpenFn, what we call them, and why, but\nthis glossary is really meant as a prerequisite to all those other things to aid\nusers with no experience in this area."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,'API is short for "application programming interface," and it\'s the part of some\nsoftware ',(0,o.kt)("b",null,"application")," that has chosen to make itself visible\n(",(0,o.kt)("b",null,"interface"),") to users outside the application itself. And it's doing that\nin a ",(0,o.kt)("b",null,"programmatic")," way, in a way that allows developers of other\napplications or data systems to use it the same way each time."),(0,o.kt)("h2",{id:"api-protocol"},"API Protocol"),(0,o.kt)("p",null,"There's no hard and fast rule about how an API gets developed, but over time,\nstandards have emerged to make it more straightforward for a new user to\ninteract with Platform X's API, by trying to ensure most applications use one of\na few different formats. That's what an API protocol is. A few of the big names\nhere are REST, SOAP, JSON, and GraphQL. Rather than reinvent the wheel,\n",(0,o.kt)("a",{parentName:"p",href:"https://frontend-digest.com/beginners-guide-to-apis-protocols-and-data-formats-f80cf7f30425%5D"},"here's a good primer on how protocols differ, their data formats, and why that all matters.")),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("p",null,"Any organized collection of data can probably be safely called a database. If\nit's got a structure with which to reference all the stuff it's storing, and the\n\"stuff\" is data, then it's a database."),(0,o.kt)("h2",{id:"data-source"},"Data source"),(0,o.kt)("p",null,"A data source is an application, database, or table that provides data to some\nother platform. Nothing is ",(0,o.kt)("i",null,"always")," a data source. For example, Google\nSheets can be a data source, but it can also pull from data sources (individual\nCSV uploads or manual user data entry). We just call it a source when it's doing\nthe job of sourcing data to some other place. Data sources are the starting\npoint, temporally, for any integration."),(0,o.kt)("h2",{id:"data-system"},"Data system"),(0,o.kt)("p",null,"Sometimes folks get confused about the distinction between a database, a data\nsource, an application, and a data system. A data ",(0,o.kt)("i",null,"system")," is a more\ncomplex collection of these other things, usually one that allows a user to more\neasily interact with all of the data they should have access to. The data system\noften serves as an entry point to the myriad databases, applications, tables,\netc. that a user would otherwise have to go 12 different places to find."),(0,o.kt)("h2",{id:"encryption"},"Encryption"),(0,o.kt)("p",null,"In this day and age, security is everything. Encryption is the process of taking\nsomething that is readable to anyone and making it only readable to people we\nwant to read it. OpenFn ensures your data is encrypted every step of the way\nwhile it's in our platform.\n",(0,o.kt)("a",{parentName:"p",href:"https://ssd.eff.org/en/node/36"},"For more on different kinds of encryption, you can look here.")),(0,o.kt)("h2",{id:"file-system"},"File system"),(0,o.kt)("p",null,"A file system is to files what a data system is to data. It structures your\nfiles in a way that makes it easy for you to retrieve them in a standardized way\n(think of your home file system with its file paths on your home computer). File\nsystems can exist in other contexts too, and sometimes you need to access them\nto retrieve a file (a Word doc, CSV, plain text file, etc. might all be relevant\ndepending on your use case). The only real difference between file systems and\ndata systems or databases is the kind of information stored, data vs. files."),(0,o.kt)("h2",{id:"etl"},"ETL"),(0,o.kt)("p",null,"ETL stands for extract, transform, and load. These are often thought of as the\nthree constituent parts of a data integration. First, we extract (push of pull\ndata from a data source). Then, we transform (make any changes to the data to\nmake it acceptable to the destination system or application). Then, we load\n(send it to the destination)."),(0,o.kt)("h2",{id:"integration-platform"},"Integration platform"),(0,o.kt)("p",null,"An integration platform (e.g., OpenFn) is an application (or set of\napplications) that help organizations set up, run, and maintain/manage the\nintegrations between all of their various systems."),(0,o.kt)("h3",{id:"ipaas"},"iPaaS"),(0,o.kt)("p",null,'You may also see the acronym "iPaaS". This stands for integration platform as a\nservice and is a type of "software as a service" (or "SaaS"). SaaS is a software\npurchasing model in which software is paid for only as it is used (often\nmonth-to-month), rather than purchased up front or given away for free.'),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"This is data that tells us about our data. In a table, for example, that's the\nname of the columns, the number of rows, etc. Metadata is often brought up in\nconversations about privacy\u2014e.g., regulators might want to ensure that ",(0,o.kt)("em",{parentName:"p"},"only\nmetadata")," is moved from Ministry A to Ministry B, as opposed to personally\nidentifiable information (PII) about individuals themselves."),(0,o.kt)("h2",{id:"push-pull-and-streaming"},"Push, pull, and streaming"),(0,o.kt)("i",null,"Pushing")," is when a triggering action in the data source causes it to send data to the destination. ",(0,o.kt)("i",null,"Pulling")," is the opposite, where the destination system requests the data from the source based on some triggering action, rather than waiting for the source to send it on its own. ",(0,o.kt)("i",null,"Streaming")," is a bit different, and it's when a data source is essentially ",(0,o.kt)("i",null,"constantly")," sending data to a destination system.",(0,o.kt)("h2",{id:"webhook"},"Webhook"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/documentation/source-apps#standard-webhook-configuration"},"webhook")," (also called a web\ncallback or HTTP push API \u2014 thanks\n",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.com/blog/whats-webhook/"},"SendGrid"),"!) is a feature of an\napplication that allows ",(0,o.kt)("i",null,"pushing"),'. It\'s often configured to notify some\nexternal URL when an event occurs. A system administrator might create a\n"webhook" which notifies an integration platform whenever some event occurs so\nthat the iPaaS can start executing some complex workflow.'),(0,o.kt)("h2",{id:"structured-and-unstructured-data"},"Structured and unstructured data"),(0,o.kt)("p",null,"Structured data is data that has metadata. Unstructured data has very little\nmetadata (though probably still has things like time of creation, update, etc.).\nWithout metadata about the format of the data, unstructured data is more\ndifficult to interact with programmatically. We need different sorts of rules\nwhen doing ETL on unstructured data to do it well, whereas structured data is an\neasier starting point because we know what to expect from a column with a name,\ndata type, field size, and so on."),(0,o.kt)("h2",{id:"writeback"},"Writeback"),(0,o.kt)("p",null,"Refers to a destination system making a change in a data source. When my\ndestination application receives information from a data source and wants to do\nsomething back to the source in response, that's writeback."))}c.isMDXComponent=!0}}]);