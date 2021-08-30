(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2249],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78879:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={title:"Salesforce"},s={unversionedId:"apps/salesforce",id:"apps/salesforce",isDocsHomePage:!1,title:"Salesforce",description:"App Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/salesforce.md",sourceDirName:"apps",slug:"/apps/salesforce",permalink:"/fr/documentation/apps/salesforce",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/salesforce.md",version:"current",frontMatter:{title:"Salesforce"},sidebar:"docs",previous:{title:"Power BI",permalink:"/fr/documentation/apps/powerbi"},next:{title:"SurveyCTO",permalink:"/fr/documentation/apps/survey-cto"}},l=[{value:"App Overview",id:"app-overview",children:[{value:"Data Model",id:"data-model",children:[]}]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"APIs &amp; Integration Options",id:"apis--integration-options",children:[]},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",children:[{value:"Field API Names",id:"field-api-names",children:[]},{value:"Mapping and Design Considerations",id:"mapping-and-design-considerations",children:[]},{value:"Salesforce Credentials",id:"salesforce-credentials",children:[]}]},{value:"Common Errors",id:"common-errors",children:[]},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[]},{value:"Example Implementations",id:"example-implementations",children:[]}],p={toc:l};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"app-overview"},"App Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.salesforce.com/"},"Salesforce")," is a cloud-based ",(0,r.kt)("strong",{parentName:"p"},"customer relationship management (CRM)")," platform that hosts applications that customers can access online. Beyond its core CRM product, Salesforce offers a customizable platform for configuring relational databases, business automation, web portals, reporting tools, and robust applications for supporting a wide range of use cases."),(0,r.kt)("h3",{id:"data-model"},"Data Model"),(0,r.kt)("p",null,'At its core, Salesforce is a relational database. It has some out-of-box or "standard" data tables and features, but can be easily extended to include "custom" metadata configuration and other app features.'),(0,r.kt)("p",null,"Salesforce data is stored in ",(0,r.kt)("strong",{parentName:"p"},"individual records (rows)")," and organized within ",(0,r.kt)("strong",{parentName:"p"},"objects (tables)"),". Record attributes are captured in ",(0,r.kt)("strong",{parentName:"p"},"fields (columns)"),'. The data model is configurable, but there are some standard objects that are provided. Note that naming conventions for custom and standard metadata may differ (e.g., all "custom" field names include the suffix ',(0,r.kt)("inlineCode",{parentName:"p"},"__c")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomField__c"),")."),(0,r.kt)("p",null,"Learn more about how data is structured in Salesforce at the links below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How data is organized in Salesforce: ",(0,r.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5"},"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5")),(0,r.kt)("li",{parentName:"ul"},"Salesforce objects: ",(0,r.kt)("a",{parentName:"li",href:"https://www.salesforcetutorial.com/salesforce-objects/"},"https://www.salesforcetutorial.com/salesforce-objects/"))),(0,r.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"Salesforce may be used to manage an organization's programs, operations, fundraising, and more. Therefore integrations with 3rd-party apps is a common requirement."),(0,r.kt)("p",null,"Example user stories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a program or M&E manager working in areas with limited internet connectivity, I would like to collect data on a mobile applicaiton that supports offline data capture, but then sync the data collected to Salesforce so that I can centrally monitor field activities and analyze data collected to evaluate program impact."),(0,r.kt)("li",{parentName:"ul"},"As a fundraiser at an NGO, I would like to see all donor information tracked in Salesforce so that I can better monitor fundraising activities, nurture relationships with all funders, and manage campaigns.")),(0,r.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,r.kt)("p",null,"Salesforce has a rich ecosystem of developers and ready-made applications. See the ",(0,r.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/"},"Salesforce App Exchange")," for existing apps and integrations custom-made for Salesforce. If existing applications do not meet your functional or budget requirements, leverage Salesforce's robust APIs to configure a custom integration."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"APIs:")," Salesforce has a robust set of RESTful APIs that support a wide range of operations. For connecting with these APIs, including the ",(0,r.kt)("inlineCode",{parentName:"li"},"Bulk API"),", OpenFn has developed a robust API adaptor for quicker integration setup - see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"language-salesforce")),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Webhook:")," By configuring ",(0,r.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm"},(0,r.kt)("inlineCode",{parentName:"a"},"Outbound Messages"))," that can be sent via criteria-based ",(0,r.kt)("inlineCode",{parentName:"li"},"Workflow Rules"),", Salesforce Admins can configure real-time notifications to be sent to OpenFn (or any endpoint URL) when a specific event occurs. (E.g., every time a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Contact")," is created, send an Outbound Message to OpenFn to trigger a data sync between that SF ",(0,r.kt)("inlineCode",{parentName:"li"},"Contact")," record and another data system.)")),(0,r.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,r.kt)("p",null,"Salesforce provides robust online documentation (see ",(0,r.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs"},"Developer Docs"),") and tutorials (see ",(0,r.kt)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en?utm_campaign=13515883882&utm_content=125227478042&utm_medium=paid&utm_source=google_sem"},"Trailheads"),") for learning about the platform. See below for helpful tips for your next Salesforce integration project."),(0,r.kt)("h3",{id:"field-api-names"},"Field API Names"),(0,r.kt)("p",null,"Salesforce ",(0,r.kt)("strong",{parentName:"p"},"field API names")," (unique names for each piece of metadata - e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"PatientID__c"),") should be referenced in OpenFn integrations, not ",(0,r.kt)("strong",{parentName:"p"},"field labels")," (business-friendly label that the end user sees - e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Patient ID"),") ",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128650593-343090da-7f12-468a-aa51-1f87f1cf9f34.png",alt:"image"}),"."),(0,r.kt)("p",null,"To view the Salesforce API field names, navigate to the Salesforce backend. Via the web app, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Setup")," from the top naviagation menu to browse the Salesforce backend settings, metadata configuration, object and field names, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Classic")," view, search for ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," in the left-hand ",(0,r.kt)("inlineCode",{parentName:"li"},"Setup")," search box without hitting Enter. From the quick results, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Create -> Objects"),". This takes you to all the custom objects. Select an object and you'll see all the fields and relationships on the object."),(0,r.kt)("li",{parentName:"ul"},"You can also easily view Salesforce API names via the front-end UI by downloading the Chrome extension ",(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/salesforce-show-api-name/dcfecmnffjopafbbbaepgopfcphnoham"},"Salesforce Show API Name"),". Follow the instructions for adding it to Chrome and use it to display API names without going to Setup.")),(0,r.kt)("h3",{id:"mapping-and-design-considerations"},"Mapping and Design Considerations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"External Identifiers"),": Individual fields can be configured as ",(0,r.kt)("inlineCode",{parentName:"p"},"external identifiers")," to search for a record via a the API/an external app and to help prevent duplicate records from being created in Salesforce. To enable this setting on an individual field, ensure ",(0,r.kt)("inlineCode",{parentName:"p"},"External ID")," is checked on the field settings. Learn more about external identifiers in Salesforce at ",(0,r.kt)("a",{parentName:"p",href:"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html"},"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html")," ",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128650680-e10fa395-bddb-45bd-bd6c-3a9dda8998f8.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Relationships"),": When mapping ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup"),' fields (which are similar to database "foreign keys") in Salesforce, use the . Ex. Say there is a ',(0,r.kt)("inlineCode",{parentName:"p"},"Person")," object in Salesforce with a field called ",(0,r.kt)("inlineCode",{parentName:"p"},"Parent")," that looks up to another ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," object. This would require the relationship class to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"externalID")," field to connect the two objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Picklist fields"),": As you design your integration and map data elements between systems, make sure that option values for ",(0,r.kt)("strong",{parentName:"p"},"picklistt")," fields also match the data from your connected application. If your other app's field value options do not match Salesforce picklist values, you should consider (1) transforming or re-labeling the values received from the source system before sending to Salesforce, or (2) add new ",(0,r.kt)("inlineCode",{parentName:"p"},"picklist values")," to Salesforce to align the metadata between systems."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")," When mapping a field that specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"sex"),", the source system could have the options ",(0,r.kt)("inlineCode",{parentName:"p"},'"male", "female", "other"')," and the destination system has the options ",(0,r.kt)("inlineCode",{parentName:"p"},'"M", "F", "Other"'),". The mappings would need to specify how to align the values (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"M: male, F: female"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multi-Select Picklist fields"),": If mapping to a Salesforce ",(0,r.kt)("inlineCode",{parentName:"p"},"multi-select picklist field"),", note that multiple values should be formatted as semicolon-separated strings (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Services__c: 'Food;Counselling;Medical_Aid"),")."),(0,r.kt)("h3",{id:"salesforce-credentials"},"Salesforce Credentials"),(0,r.kt)("p",null,"Salesforce requires a username, password, login URL, and security token to authenticate via a user. ",(0,r.kt)("strong",{parentName:"p"},"Note every time you reset the user's password, the security token will reset and you need to update the Credential record used in your OpenFn job.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Credentials Menu",src:a(49290).Z})),(0,r.kt)("p",null,'A "Salesforce" Credential record should include:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username"),(0,r.kt)("li",{parentName:"ul"},"Password"),(0,r.kt)("li",{parentName:"ul"},'Security Token (Salesforce will email you this when you set your password. If you cannot find "security token" in your inbox, see below for how to reset it.)'),(0,r.kt)("li",{parentName:"ul"},"Login URL: If a production system, use ",(0,r.kt)("inlineCode",{parentName:"li"},"https://login.salesforce.com/")," (unless you have a custom domain ",(0,r.kt)("inlineCode",{parentName:"li"},"https://domainName.salesforce.com/"),"). For sandbox environments, ",(0,r.kt)("inlineCode",{parentName:"li"},"https://test.salesforce.com/"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Salesforce Cred",src:a(23980).Z})),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"OpenFn/devtools")," or ",(0,r.kt)("strong",{parentName:"p"},"OpenFn/engine")," the raw JSON of the credential for inclusion in ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"configuration": {\n  "loginUrl": "https://login.salesforce.com/",\n  "username": "openfn@salesforce.org",\n  "password": "testing123",\n  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"\n},\n')),(0,r.kt)("h4",{id:"resetting-your-security-token"},"Resetting Your Security Token"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5"},"See instructions here")," or below screenshot. Once reset, you will receive an email from Salesforce. Please save this ",(0,r.kt)("inlineCode",{parentName:"p"},"security token")," in your OpenFn ",(0,r.kt)("inlineCode",{parentName:"p"},"Credential"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Token Reset",src:a(69920).Z})),(0,r.kt)("h2",{id:"common-errors"},"Common Errors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"INVALID_FIELD: Foreign key external id not found"),": This error message usually means that the parent record for an object has not been synced. For example, if one tries uploading participants for an event that has not yet been synced."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"TypeError [Error]"),":This error usually mean that the job received a part of the message that it wasn't expecting, or there is a syntax error in your job code. It means that the job needs to be updated to know how to handle the message."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NOT_FOUND: Provided external ID field does not exist or is not accessible"),": This error usually means that ",(0,r.kt)("inlineCode",{parentName:"li"},"External ID")," has not been checked in the field settings in Salesforce. See Mapping and Design Considerations section above."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MULTIPLE_CHOICES: Multiple records found"),": This error means that Salesforce has found multiple records with the ",(0,r.kt)("inlineCode",{parentName:"li"},"External ID")," that was specified."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"REQUIRED_FIELD_MISSING: Required fields are missing"),": This error usually means that a field which is required on the object being updated has not been set.")),(0,r.kt)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,r.kt)("p",null,"OpenFn has a robust ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"language-salesforce"))," adaptor with a range of helper functions for common CRUD & upsert operations, and for accessing the Salesforce bulk API."),(0,r.kt)("h2",{id:"example-implementations"},"Example Implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,r.kt)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,r.kt)("li",{parentName:"ul"},"GRS CommCare - Salesforce sync: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}c.isMDXComponent=!0},49290:function(e,t,a){"use strict";t.Z=a.p+"assets/images/credentials-864839c91f9940b590649a47da35fc00.png"},23980:function(e,t,a){"use strict";t.Z=a.p+"assets/images/salesforce-cred-5d5b9ada850c8a58fc99d009ab4835a4.png"},69920:function(e,t,a){"use strict";t.Z=a.p+"assets/images/security-token-67feb0a8803f27c60871f43472947981.png"}}]);