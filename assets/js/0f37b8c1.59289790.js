(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2258],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72494:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i={title:"CommCare"},s={unversionedId:"apps/commcare",id:"apps/commcare",isDocsHomePage:!1,title:"CommCare",description:"App Overview",source:"@site/docs/apps/commcare.md",sourceDirName:"apps",slug:"/apps/commcare",permalink:"/documentation/apps/commcare",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/commcare.md",version:"current",frontMatter:{title:"CommCare"},sidebar:"docs",previous:{title:"CKAN",permalink:"/documentation/apps/ckan"},next:{title:"Go.Data",permalink:"/documentation/apps/godata"}},p=[{value:"App Overview",id:"app-overview",children:[{value:"Data Model",id:"data-model",children:[]}]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"APIs &amp; Integration Options",id:"apis--integration-options",children:[{value:"Web API",id:"web-api",children:[]},{value:"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service",id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service",children:[]}]},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",children:[{value:"1. App installation and configuration",id:"1-app-installation-and-configuration",children:[]},{value:"2. Unique Identifiers",id:"2-unique-identifiers",children:[]},{value:"3. Other Mapping and design considerations:",id:"3-other-mapping-and-design-considerations",children:[]},{value:"Common Errors",id:"common-errors",children:[]},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[]},{value:"Implementation Examples",id:"implementation-examples",children:[]}]}],m={toc:p};function l(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"app-overview"},"App Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Functional overview - What is this app and how it is typically used? \n# Links to available documentation\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," is a powerful data collection\nplatform developed by Dimagi. It is an open-source platform, and is primarily best for mobile case management."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# How is this app's data structured? Are there key resources/tables/data elements this app is built around? \n# Links to any other online docs or resources? \n")),(0,o.kt)("p",null,"CommCare data is primarily stored in ",(0,o.kt)("strong",{parentName:"p"},"forms")," and ",(0,o.kt)("strong",{parentName:"p"},"cases"),". Forms are the building blocks of applications and cases are used to track data on objects, usually people.\nLearn more about CommCare forms and cases at the links below.   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Case management:",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Case+Management"),"  "),(0,o.kt)("li",{parentName:"ul"},"Form and case data in CommCare: ",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"},"https://confluence.dimagi.com/display/commcarepublic/CommCare+Fundamentals+-+Data+in+CommCare"))),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Why might someone want to integrate with this app? \n# What are some business use cases for using the APIs? \n")),(0,o.kt)("p",null,"Example user stories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a community health worker I want to store patient data that was collected in rural areas with no internet access in Salesforce so I can better analyze the data being collected and make more informed recommendations."),(0,o.kt)("li",{parentName:"ul"},"As a teacher I want to set up automatic message alerts to my students in order to increase participation. ")),(0,o.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,o.kt)("p",null,"CommCare offers a number of integration options for extracting and/or loading\ndata to and from CommCare HQ."),(0,o.kt)("h3",{id:"web-api"},"Web API"),(0,o.kt)("p",null,"CommCare has different APIs for reading vs. updating data. Some helpful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Data+APIs"},"Data APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"},"Bulk Case Upload API to mass update case records"))),(0,o.kt)("h3",{id:"webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service"},"Webhook: Forward cases and/or forms from CommCare to OpenFn using REST service"),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare docs"),'\non how to configure this webhook to "push" data to an external system like\nOpenFn. This option is great for ',(0,o.kt)("em",{parentName:"p"},"real-time")," data forwarding."),(0,o.kt)("p",null,"Quick instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Go to "Project Settings".'),(0,o.kt)("li",{parentName:"ol"},'Click "Data Forwarding".'),(0,o.kt)("li",{parentName:"ol"},'"Add a forwarding location" for Cases, Forms, or both.'),(0,o.kt)("li",{parentName:"ol"},"Specify JSON, using your OpenFn inbox URL as the target. See the\n",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare documentation"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a\n",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form"},"message-filter trigger like this"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up a ",(0,o.kt)("inlineCode",{parentName:"li"},"job")," running on that filter to process CommCare submissions or case\nupdates.")),(0,o.kt)("p",null,"We recommend updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection Settings")," to list emails that should be\nalerted if there is a data forwarding error. ",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications"},"See the CommCare docs for more on this."),"."),(0,o.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# How does one secure access to the app? What type of access do they need to start integrating? \n# Any API-specific features or settings that should be enabled? Any other setup steps?  \n# Add links to this app's documentation on how the app can be installed, configured, etc. \n# Mapping or design considerations specific to this app?\n")),(0,o.kt)("h3",{id:"1-app-installation-and-configuration"},"1. App installation and configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CommCare docs on installing the mobile app: ",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones"},"https://confluence.dimagi.com/display/commcarepublic/Install+CommCare+for+Android+Smartphones")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"App Versioning"),": Ensure that you are always using the latest app version when testing, by updating your app and checking that the version matches the latest version in CommCare HQ")),(0,o.kt)("h3",{id:"2-unique-identifiers"},"2. Unique Identifiers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As CommCare data is stored in forms and cases, there are two types of UIDs in CommCare: ",(0,o.kt)("inlineCode",{parentName:"p"},"case_id")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"form id"),". You can search for a particular case or form submission in CommCare by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Find Data by ID")," feature here: ",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"},"https://confluence.dimagi.com/display/commcarepublic/Find+Data+by+ID"),". For example, if you received a submission in the OpenFn inbox that you would like to find in CommCare, search by ",(0,o.kt)("inlineCode",{parentName:"p"},"form id"),". If you'd like to find a particular case (i.e. person, event, etc) search by ",(0,o.kt)("inlineCode",{parentName:"p"},"case id"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649444-04f371ea-80b1-4c28-8d42-1591c0a96758.png",alt:"image"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the OpenFn ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/getting-started/overview#messages"},"message"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is the unique identifier for the form submission\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649481-83b3f7ee-c6a6-42f8-8752-2f4e96b7fa1f.png",alt:"image"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"case_id")," is the unique identifier for the case being updated by the form. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"case_id")," can be the UID for a person.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128649509-098a5418-4b72-4cec-a4d2-47c8bedaac25.png",alt:"image"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"N.B. Unique identifiers and ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden fields")," in CommCare forms: Make sure that unique identifiers for forms and objects are always in the form. If the unique identifier isn't relevant for the user, it can be added to the form as a ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden field"),". Learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden fields")," here: ",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial"},"https://confluence.dimagi.com/display/commcarepublic/Hidden+Value+Calculations+Tutorial")))),(0,o.kt)("h3",{id:"3-other-mapping-and-design-considerations"},"3. Other Mapping and design considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use this ",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Export+Form+Contents"},"link")," to ",(0,o.kt)("strong",{parentName:"li"},"export form contents"),". This will give you access to all the ",(0,o.kt)("inlineCode",{parentName:"li"},"question ids")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"labels")," in the CommCare form. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Labels")," are generally not mapped in an integration because they represent text that is displayed to the CommCare user to facilitate easy use of the application. ",(0,o.kt)("inlineCode",{parentName:"li"},"Ids")," however, represent actual data that should be mapped."),(0,o.kt)("li",{parentName:"ul"},"When mapping multiple choice questions, make sure to consider how the answer choices should map to the source/destination system.")),(0,o.kt)("h3",{id:"common-errors"},"Common Errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# What ares some common error messages OpenFn users might encounter? Any guidance on how to troubleshoot?\n")),(0,o.kt)("h3",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.kt)("p",null,"OpenFn implementations can leverage both the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"HTTP"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-commcare"},(0,o.kt)("inlineCode",{parentName:"a"},"CommCare"))," adaptors to connect with the CommCare API. "),(0,o.kt)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,o.kt)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,o.kt)("li",{parentName:"ul"},"Moodle-to-CommCare sync: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/moodle-commcare"},"https://github.com/OpenFn/moodle-commcare")),(0,o.kt)("li",{parentName:"ul"},"Grassroot Soccer CommCare-to-Salesforce sync: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}l.isMDXComponent=!0}}]);