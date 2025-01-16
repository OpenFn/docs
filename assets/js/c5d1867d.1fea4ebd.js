"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24613],{19607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={title:"Satusehat Adaptor"},s=void 0,i={unversionedId:"satusehat",id:"satusehat",title:"Satusehat Adaptor",description:"About Satusehat",source:"@site/adaptors/satusehat.md",sourceDirName:".",slug:"/satusehat",permalink:"/adaptors/satusehat",draft:!1,tags:[],version:"current",frontMatter:{title:"Satusehat Adaptor"},sidebar:"adaptors",previous:{title:"salesforce developer readme",permalink:"/adaptors/packages/salesforce-readme"},next:{title:"satusehat@2.0.9",permalink:"/adaptors/packages/satusehat-docs"}},l={},p=[{value:"About Satusehat",id:"about-satusehat",level:2},{value:"Mapping Satusehat URLs to Adaptor Functions",id:"mapping-satusehat-urls-to-adaptor-functions",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"How to Extract or Modify Satusehat Data",id:"how-to-extract-or-modify-satusehat-data",level:2},{value:"Authentication",id:"authentication",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-satusehat"},"About Satusehat"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://satusehat.kemkes.go.id/platform/docs/id/playbook/introduction/"},"Satusehat"),"\nis a health data exchange ecosystem that connects information systems or\napplications from all members of the Indonesian digital health ecosystem\nincluding health facilities, regulators, guarantors, and digital service\nproviders."),(0,r.yg)("p",null,"SATUSEHAT uses HL7 ",(0,r.yg)("a",{parentName:"p",href:"https://www.hl7.org/fhir/"},"FHIR")," (Fast Healthcare\nInteroperability Resources) in implementing standard data models and Application\nProgramming Interfaces (APIs)."),(0,r.yg)("admonition",{title:"FHIR",type:"info"},(0,r.yg)("p",{parentName:"admonition"},'FHIR (Fast Healthcare Interoperability Resources) is a global (international)\nstandard that defines the data format and its elements (called " resources ")\nand an application programming interface (API ) standard for information\nexchange')),(0,r.yg)("p",null,"The following example shows a HTTP POST request to creating an ",(0,r.yg)("inlineCode",{parentName:"p"},"Encounter")," FHIR\nresource. Data was taken from the\n",(0,r.yg)("a",{parentName:"p",href:"https://www.postman.com/satusehat/satusehat-public/request/56uan96/encounter-create"},"Satusehate Postman Collection")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"post('Encounter', {\n  resourceType: 'Encounter',\n  status: 'arrived',\n  class: {\n    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',\n    code: 'AMB',\n    display: 'ambulatory',\n  },\n  subject: {\n    reference: 'Patient/100000030009',\n    display: 'Budi Santoso',\n  },\n  participant: [\n    {\n      type: [\n        {\n          coding: [\n            {\n              system:\n                'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',\n              code: 'ATND',\n              display: 'attender',\n            },\n          ],\n        },\n      ],\n      individual: {\n        reference: 'Practitioner/N10000001',\n        display: 'Dokter Bronsig',\n      },\n    },\n  ],\n  period: {\n    start: '2022-06-14T07:00:00+07:00',\n  },\n  location: [\n    {\n      location: {\n        reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',\n        display:\n          'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',\n      },\n    },\n  ],\n  statusHistory: [\n    {\n      status: 'arrived',\n      period: {\n        start: '2022-06-14T07:00:00+07:00',\n      },\n    },\n  ],\n  serviceProvider: {\n    reference: 'Organization/{{Org_id}}',\n  },\n  identifier: [\n    {\n      system: 'http://sys-ids.kemkes.go.id/encounter/{{Org_id}}',\n      value: 'P20240001',\n    },\n  ],\n});\n")),(0,r.yg)("p",null,"Checkout Satusehat's\n",(0,r.yg)("a",{parentName:"p",href:"https://www.postman.com/satusehat/satusehat-public/overview"},"Postman Collection"),"\nfor more examples and resources."),(0,r.yg)("h2",{id:"mapping-satusehat-urls-to-adaptor-functions"},"Mapping Satusehat URLs to Adaptor Functions"),(0,r.yg)("p",null,"The Satusehat adaptor functions provide convenient HTTP method helpers - like\n",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/satusehat-docs#get"},(0,r.yg)("inlineCode",{parentName:"a"},"get()")),"."),(0,r.yg)("p",null,"Each takes a path to a FHIR resource, relative to the baseURL in the\nconfiguration file, and a list of query parameters. Some helpers (like ",(0,r.yg)("inlineCode",{parentName:"p"},"post"),")\nalso take a FHIR resource as a JSON object."),(0,r.yg)("p",null,"For example, a request to find an\n",(0,r.yg)("a",{parentName:"p",href:"https://www.postman.com/satusehat/satusehat-public/request/ef2ilan/encounter-by-subject"},"encounter by subject"),"\nrequires a URL like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Encounter?subject=100000030009\n")),(0,r.yg)("p",null,"In OpenFn, we would use the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," function, pass the path as the first argument,\nand the query parameters as the second. Like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('Encounter', { subject: '100000030009' });\n")),(0,r.yg)("p",null,"The result will be written to ",(0,r.yg)("inlineCode",{parentName:"p"},"state.data"),"."),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("a",{parentName:"strong",href:"https://satusehat.kemkes.go.id/platform/docs/id/postman-workshop/"},"REST APIs")),"\nenable external services like OpenFn to pull data from Satusehat or push data to Satusehat from external apps. This option is suitable for scheduled workflows or those that need to update data in Satusehat with external information.")),(0,r.yg)("h2",{id:"how-to-extract-or-modify-satusehat-data"},"How to Extract or Modify Satusehat Data"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See the available ",(0,r.yg)("a",{parentName:"strong",href:"/adaptors/packages/satusehat-docs"},"helper functions"))," for\na full list of functions supported by this adaptor for extracting and/or\nmodifying Satusehat data."),(0,r.yg)("p",null,"To fetch data from Satusehat via OpenFn, you can:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Configure a new workflow with a "cron" trigger and define the frequency of\nyour workflow (e.g., daily at 8:00AM)'),(0,r.yg)("li",{parentName:"ol"},'Add a "Get data" step linked to this Satusehat adaptor'),(0,r.yg)("li",{parentName:"ol"},"Edit the Step and open the Inspector (",(0,r.yg)("inlineCode",{parentName:"li"},"</>"),") to write a basic job using this\nadaptor's ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/packages/satusehat-docs#get"},"GET"),' to specify which data\nyou want to extract or "pull" from Satusehat')),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/documentation/build/workflows"},"platform docs")," for more guidance on\nbuilding workflows."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://satusehat.kemkes.go.id/platform/docs/id/api-catalogue/authentication/"},"See Satusehat docs"),"\nfor the latest on supported authentication methods."),(0,r.yg)("p",null,"When integrating with Satusehat via OpenFn, there are 2 primary authentication\nmethods supported:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Basic authentication (requires clientId + clientSecret), or"),(0,r.yg)("li",{parentName:"ol"},"Access token (requires access token created after authenticating in\nSatusehat)")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See this adaptor's\n",(0,r.yg)("a",{parentName:"strong",href:"/adaptors/packages/satusehat-configuration-schema"},"Configuration docs")," for more\non required authentication parameters.")),(0,r.yg)("p",null,"See platform docs\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"on managing credentials")," for\nhow to configure a credential in OpenFn and see the below Satusehat credential\nexample."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Satusehat Cred",src:a(68114).A,width:"988",height:"1522"})),(0,r.yg)("p",null,"If you're using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Raw JSON")," credential type, your configuration may look like\nthis:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "your-client-id", // e.g 12345678\n  "clientSecret": "your-client-secret-key", // e.g abcd123456\n  "baseUrl": "your-base-url", // e.g https://api-satusehat-stg.dto.kemkes.go.id\n  "accessToken": "your-access-token" // Don\'t add accessToken if you\'re using client secret and client id\n}\n')))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},68114:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/satusehat_credential_edit-70ef217075cfb9d002a61ade84eb427c.png"}}]);