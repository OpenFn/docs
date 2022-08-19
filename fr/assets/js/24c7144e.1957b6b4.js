"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3917],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o,r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],s={title:"Portabilit\xe9"},p=void 0,c={unversionedId:"portability",id:"portability",title:"Portabilit\xe9",description:"Intentions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/portability.md",sourceDirName:".",slug:"/portability",permalink:"/fr/documentation/portability",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/portability.md",tags:[],version:"current",frontMatter:{title:"Portabilit\xe9"},sidebar:"docs",previous:{title:"Planification du d\xe9ploiement",permalink:"/fr/documentation/deploy/options"},next:{title:"Plateforme",permalink:"/fr/documentation/deploy/platform"}},d={},u=[{value:"Intentions",id:"intentions",level:2},{value:"Proposal v4 <code>@next</code>",id:"proposal-v4-next",level:2},{value:"Autres versions",id:"autres-versions",level:2}],m=(o="ReactPlayer",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intentions"},"Intentions"),(0,i.kt)("p",null,"Beyond facilitating portability/transferability between OpenFn's ",(0,i.kt)("a",{parentName:"p",href:"deploy/platform"},"platform"),", ",(0,i.kt)("a",{parentName:"p",href:"/documentation/microservice/home"},"microservice"),", and ",(0,i.kt)("a",{parentName:"p",href:"/documentation/getting-started/integration-toolkit/#lightning-coming-soon"},"lightning")," deployment pathways, the portability proposal establishes a simple, globally-applicable way of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"specifying workflow automation"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"systems integration"))," that might be applied across workflow-engines/integration platforms across the sector. Nothing about the spec ",(0,i.kt)("em",{parentName:"p"},"must")," be specific to OpenFn or any one of our individual products. We envision a future in which software built with Lightning, the OpenFn Integration Toolkit, and entirely new and different integration/workflow tools can adopt this specification."),(0,i.kt)("p",null,"It boils down to several key top-level artifacts: ",(0,i.kt)("inlineCode",{parentName:"p"},"workflows")," (containing jobs and triggers), ",(0,i.kt)("inlineCode",{parentName:"p"},"globals"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jobs")," dictate what tasks or actions must be performed;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Triggers")," when they must be performed;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Globals")," are reusable constants, or datasets (like mapping tables) shared across jobs;"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("strong",{parentName:"li"},"Credentials")," are what, if any, authentication they'll need to perform them.")),(0,i.kt)("p",null,"Si vous souhaitez contribuer \xe0 la sp\xe9cification, contactez OpenFn via le ",(0,i.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"forum de la communaut\xe9"),", \xe9crivez-nous ou sugg\xe9rez des modifications en soumettant une demande ici."),(0,i.kt)("p",null,"importer ReactPlayer depuis 'react-player' ;"),(0,i.kt)(m,{url:"https://www.youtube.com/watch?v=9xXK5xoiMgA",mdxType:"ReactPlayer"}),(0,i.kt)("h2",{id:"proposal-v4-next"},"Proposal v4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"@next")),(0,i.kt)("p",null,"The portability specification v4 defines how entire projects (groups of workflows with their associated triggers, credentials and jobs) can be represented as code. This specification has been written for ",(0,i.kt)("a",{parentName:"p",href:"/documentation/getting-started/integration-toolkit/#lightning-coming-soon"},"Lightning"),", the fully open source webb app which extends the OpenFn DPG. It aims to (a) improve developer experience, allowing them to build and test workflows locally; (b) enable version control and an audit trail of project changes; and (c) enable users to port existing workflows from the OpenFn platform to Lightning."),(0,i.kt)("p",null,"This new specification has been designed and documented thanks to support from a Digital Square Global Goods grant."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"project.zip")," structure and files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/globals\n   sample-clinic-map.json\n   sample-translations.json\n/workflow-a\n   job-1.js\n   job-2.js\n   job-3.js\n/workflow-b\n   job-4.js\nproject.yaml\nproject.state.yaml\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"project.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "My Project" # The project name\n\nglobals: # All global constants accessible to this project\n  clinic-map: file://./globals/clinic-map.json\n  project-expense-codes: file://./globals/project-expense-codes.json\n  service-codes:\n    body:\n      m126: Medical Referral\n      g01: General Checkup\n      ps: Psycho-social Support\n\nworkflows: # All workflows in a project\n  CommCare-to-OpenMRS: #The workflow name. Workflow names won\'t have spaces\n    jobs: # All jobs/steps in a workflow\n      Coerce-to-FHIR: # The job/step name\n        trigger: webhook #webhook urls are uids so are not included\n        adaptor: language-fhir\n        enabled: true\n        credential: my-fihr-credential #looks up credential in state by its name\n        # when running locally, the credentials values are taken from the overrides file\n        # cli run workflow "CommCare-to-OpenMRS" --overrides ./keys-and-values.yaml\n        body: "file://./CommCare-to-OpenMRS/Coerce-to-FHIR.js" # each job job-body is stored in a separate file, within a folder for the whole workflow\n\n      Load-to-openmrs:\n        trigger:\n          on-success: Coerce-to-FHIR\n        adaptor: language-openmrs\n        credential: my-other-credential\n        enabled: true\n        body:\n          # no "include", but pathlike doesn\'t work: if you\'re doing a uri you need to be explicit about it\n          # default to local fs -- no numbering because too complicated if users change the order\n          "file://./CommCare-to-OpenMRS/Load-to-openmrs.js"\n\n      Send-Wrap-Up-Reports:\n        trigger:\n          on-success: Load-to-openmrs\n        enabled: true\n        adaptor: language-mailgun\n        globals:\n          - service-codes\n          - clinic-map\n        body: >\n          # this triggers a new workflow\n          fn(state => state)\n          sendEmail(state => state.emailContent)\n\n  Kobo-to-DHIS2: #This is a second workflow\n    Fetch-Kobo-Submissions:\n      trigger:\n        cron: * 5 * * *\n      enabled: true\n      adaptor: language-kobotoolbox\n      body: "file://./Kobo-to-DHIS2/Fetch-Kobo-Submissions.js"\n\n    Upload-to-DHIS2:\n      trigger:\n        on-success: Fetch-Kobo-Submissions\n      adaptor: language-kobotoolbox\n      enabled: false\n      body: "file://./Kobo-to-DHIS2/Upload-to-DHIS2.js"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"project.state.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"project:\n  - id: '45bffee'\n    key: 'My Project'\n\nglobals:\n  - id: 'sj23n36'\n    key: 'clinic-map'\n  - id: 'bss522g'\n    key: 'project-expense-codes'\n  - id: '22aa4st'\n    key: 'service-codes'\n\nworkflows:\n  - id: 'cfd7c68'\n    key: 'CommCare-to-OpenMRS' # this is the NAME and the KEY\n  - id: 'd1ecc4f'\n    key: 'Kobo-to-DHIS2'\n\njobs:\n  - id: 'ns6yw54'\n    key: 'Coerce-to-FHIR'\n  - id: '12bs52j'\n    key: 'Load-to-openmrs'\n  - id: 'lk81hs6'\n    key: 'Send-Wrap-Up-Reports'\n\n  - id: 'sn26sh2'\n    key: 'Fetch-Kobo-Submissions'\n  - id: 'sk1722h'\n    key: 'Upload-to-DHIS2'\n\ncredentials:\n  - id: '12ms62y'\n    key: 'My FHIR Credential'\n")),(0,i.kt)("p",null,"The full specification can be viewed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/projects-as-code"},"here"),"."),(0,i.kt)("h2",{id:"autres-versions"},"Autres versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/projects-as-code"},"Portability Proposal v4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"portability-versions#proposal-v3"},"Portability Proposal v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"portability-versions#proposal-v2"},"Portability Proposal v2")," (",(0,i.kt)("inlineCode",{parentName:"li"},"@latest")," for platform-app/microservice compatibility.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"portability-versions#proposal-v1"},"Portability Proposal v1"))))}b.isMDXComponent=!0}}]);