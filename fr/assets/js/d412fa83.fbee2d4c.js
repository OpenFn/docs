(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2249],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Salesforce"},s={unversionedId:"apps/salesforce",id:"apps/salesforce",isDocsHomePage:!1,title:"Salesforce",description:"App Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/salesforce.md",sourceDirName:"apps",slug:"/apps/salesforce",permalink:"/fr/documentation/apps/salesforce",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/salesforce.md",version:"current",frontMatter:{title:"Salesforce"},sidebar:"docs",previous:{title:"Power BI",permalink:"/fr/documentation/apps/powerbi"},next:{title:"SurveyCTO",permalink:"/fr/documentation/apps/survey-cto"}},l=[{value:"App Overview",id:"app-overview",children:[{value:"Data Model",id:"data-model",children:[]}]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"APIs &amp; Integration Options",id:"apis--integration-options",children:[]},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",children:[{value:"1. Field API Names",id:"1-field-api-names",children:[]},{value:"2. Mapping and Design Considerations",id:"2-mapping-and-design-considerations",children:[]},{value:"3. Salesforce Credentials",id:"3-salesforce-credentials",children:[]},{value:"Common Errors",id:"common-errors",children:[]},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[]},{value:"Example Implementations",id:"example-implementations",children:[]}]}],p={toc:l};function c(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"app-overview"},"App Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Functional overview - What is this app and how it is typically used? \n# Links to available documentaiton\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.salesforce.com/"},"Salesforce")," is a ",(0,o.kt)("strong",{parentName:"p"},"customer relationship management (CRM)")," platform which hosts applications that customers can access online."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# How is this app's data structured? Are there key resources/tables/data elements this app is built around? \n# Links to any other online docs or resources? \n")),(0,o.kt)("p",null,"Much of Salesforce data is stored in ",(0,o.kt)("strong",{parentName:"p"},"individual records (rows)")," and organized within ",(0,o.kt)("strong",{parentName:"p"},"objects (tables)"),". Learn more about how data is structured in Salesforce at the links below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How data is organized in Salesforce: ",(0,o.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5"},"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5")),(0,o.kt)("li",{parentName:"ul"},"Salesforce objects: ",(0,o.kt)("a",{parentName:"li",href:"https://www.salesforcetutorial.com/salesforce-objects/"},"https://www.salesforcetutorial.com/salesforce-objects/"))),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Why might someone want to integrate with this app? \n# What are some business use cases for using the APIs? \n")),(0,o.kt)("p",null,"Example user stories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a program assistant at an organization that hosts events in rural areas with limited access to internet, I would like to take attendance on a mobile device and automatically sync participant information to Salesforce so I can better analyze event popularity."),(0,o.kt)("li",{parentName:"ul"},"As a project manager at an NGO, I would like to see all data consolidated in Salesforce so I can better monitor fundraising activities and nurture relationships with all stakeholders.")),(0,o.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"APIs:")," Salesforce has a robust set of RESTful APIs that support a wide range of operations. Voir l'adaptateur d'API OpenFn ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"language-salesforce")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Webhook:")," Using ",(0,o.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm"},(0,o.kt)("inlineCode",{parentName:"a"},"Outbound Messages"))," and workflow automation, admins can configure notifications to be sent to OpenFn when a specific event occurs.")),(0,o.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# How does one secure access to the app? What type of access do they need to start integrating? \n# Any API-specific features or settings that should be enabled? Any other setup steps?  \n# Add links to this app's documentation on how the app can be installed, configured, etc. \n# Mapping or design considerations specific to this app?\n")),(0,o.kt)("h3",{id:"1-field-api-names"},"1. Field API Names"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Salesforce Classic View"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"Setup")," from the top naviagation menu. Search for ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")," in the left-hand search box without hitting Enter. From the quick results, select Create -> Objects. This takes you to all the custom objects. Select an object and you'll see all the fields and relationships on the object."),(0,o.kt)("li",{parentName:"ul"},"You can also view Salesforce API names by downloading the Chrome ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/salesforce-show-api-name/dcfecmnffjopafbbbaepgopfcphnoham"},"exstention")," ",(0,o.kt)("strong",{parentName:"li"},"Salesforce Show API Name"),". Follow the instructions for adding it to Chrome and use it to display API names without going to Setup."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API field names")," are used in the OpenFn jobs during an integration, not ",(0,o.kt)("strong",{parentName:"li"},"field labels"),". ",(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/80456839/128650593-343090da-7f12-468a-aa51-1f87f1cf9f34.png",alt:"image"}))),(0,o.kt)("h3",{id:"2-mapping-and-design-considerations"},"2. Mapping and Design Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"External Identifiers"),": This is important for integrations because it prevents duplicate records from being created in Salesforce. To enable, ensure ",(0,o.kt)("inlineCode",{parentName:"p"},"External ID")," is checked on the field settings. Learn more about external identifiers in Salesforce at ",(0,o.kt)("a",{parentName:"p",href:"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html"},"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html")," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128650680-e10fa395-bddb-45bd-bd6c-3a9dda8998f8.png",alt:"image"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Relationships"),": When mapping lookup fields in Salesforce, use relationships. Ex. Say there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," object in Salesforce with a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"Parent")," that looks up to another ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," object. This would require the relationship class to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"externalID")," field to connect the two objects.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Multi-select fields"),": During the mapping phase, make sure that option values for ",(0,o.kt)("strong",{parentName:"p"},"multi-select"),' fields also match. If they do not match, specify the transformation required. Ex. When mapping a field that specifies gender, the source system could have the options "male", "female", "other" and the destination system has the options "Male", "Female", "Other". The mappings would need to specify a transformation that makes the fist letter in each option lowercase.'))),(0,o.kt)("h3",{id:"3-salesforce-credentials"},"3. Salesforce Credentials"),(0,o.kt)("p",null,"Salesforce requires a username, password, login URL, and security token to authenticate via a user. ",(0,o.kt)("strong",{parentName:"p"},"Note every time you reset the user's password, the security token will reset and you need to update the Credential record used in your OpenFn job.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Credentials Menu",src:n(49290).Z})),(0,o.kt)("p",null,'A "Salesforce" Credential record should include:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username"),(0,o.kt)("li",{parentName:"ul"},"Password"),(0,o.kt)("li",{parentName:"ul"},'Security Token (Salesforce will email you this when you set your password. If you cannot find "security token" in your inbox, see below for how to reset it.)'),(0,o.kt)("li",{parentName:"ul"},"Login URL: If a production system, use ",(0,o.kt)("inlineCode",{parentName:"li"},"https://login.salesforce.com/")," (unless you have a custom domain ",(0,o.kt)("inlineCode",{parentName:"li"},"https://domainName.salesforce.com/"),"). For sandbox environments, ",(0,o.kt)("inlineCode",{parentName:"li"},"https://test.salesforce.com/"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Salesforce Cred",src:n(23980).Z})),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/devtools")," or ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine")," the raw JSON of the credential for inclusion in ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"configuration": {\n  "loginUrl": "https://login.salesforce.com/",\n  "username": "openfn@salesforce.org",\n  "password": "testing123",\n  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"\n},\n')),(0,o.kt)("h4",{id:"resetting-your-security-token"},"Resetting Your Security Token"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5"},"See instructions here")," or below screenshot. Once reset, you will receive an email from Salesforce. Please save this ",(0,o.kt)("inlineCode",{parentName:"p"},"security token")," in your OpenFn ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Token Reset",src:n(69920).Z})),(0,o.kt)("h3",{id:"common-errors"},"Common Errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# What ares some common error messages OpenFn users might encounter? Any guidance on how to troubleshoot?\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"INVALID_FIELD: Foreign key external id not found"),": This error message usually means that the parent record for an object has not been synced. For example, if one tries uploading participants for an event that has not yet been synced."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeError [Error]"),":This error usually mean that the job received a part of the message that it wasn't expecting, or there is a syntax error in your job code. It means that the job needs to be updated to know how to handle the message."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NOT_FOUND: Provided external ID field does not exist or is not accessible"),": This error usually means that ",(0,o.kt)("inlineCode",{parentName:"li"},"External ID")," has not been checked in the field settings in Salesforce. See Mapping and Design Considerations section above."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MULTIPLE_CHOICES: Multiple records found"),": This error means that Salesforce has found multiple records with the ",(0,o.kt)("inlineCode",{parentName:"li"},"External ID")," that was specified."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"REQUIRED_FIELD_MISSING: Required fields are missing"),": This error usually means that a field which is required on the object being updated has not been set.")),(0,o.kt)("h3",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.kt)("p",null,"OpenFn has a robust ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"language-salesforce"))," adaptor with a range of helper functions for common CRUD & upsert operations, and for accessing the Salesforce bulk API."),(0,o.kt)("h3",{id:"example-implementations"},"Example Implementations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,o.kt)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,o.kt)("li",{parentName:"ul"},"GRS CommCare - Salesforce sync: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}c.isMDXComponent=!0},49290:function(e,t,n){"use strict";t.Z=n.p+"assets/images/credentials-864839c91f9940b590649a47da35fc00.png"},23980:function(e,t,n){"use strict";t.Z=n.p+"assets/images/salesforce-cred-5d5b9ada850c8a58fc99d009ab4835a4.png"},69920:function(e,t,n){"use strict";t.Z=n.p+"assets/images/security-token-67feb0a8803f27c60871f43472947981.png"}}]);