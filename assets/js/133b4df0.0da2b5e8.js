"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3970],{40107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={title:"Credentials"},o=void 0,l={unversionedId:"build/credentials",id:"build/credentials",title:"Credentials",description:"Credentials",source:"@site/docs/build/credentials.md",sourceDirName:"build",slug:"/build/credentials",permalink:"/documentation/build/credentials",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/credentials.md",tags:[],version:"current",frontMatter:{title:"Credentials"},sidebar:"docs",previous:{title:"Paths",permalink:"/documentation/build/paths"},next:{title:"Limits",permalink:"/documentation/build/limits"}},s={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Create a new Credential",id:"create-a-new-credential",level:3},{value:"Understand the app-specific credentials",id:"understand-the-app-specific-credentials",level:3},{value:"Use OAuth2 credentials",id:"use-oauth2-credentials",level:3},{value:"e.g., GoogleSheets OAuth Credential",id:"eg-googlesheets-oauth-credential",level:4},{value:"e.g., Salesforce OAuth Credential",id:"eg-salesforce-oauth-credential",level:4},{value:"Creating a dedicated &quot;integration user&quot; for your OpenFn workflow",id:"creating-a-dedicated-integration-user-for-your-openfn-workflow",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"credentials"},"Credentials"),(0,r.yg)("p",null,"Credentials are used to authorize connections to external systems. Some Adaptors\nwill use credentials to fetch meta-data from source and destination applications\nand make the job writing process easier."),(0,r.yg)("p",null,'A Credentials\' values can only be viewed or edited by a single user \u2014 their "owner"\n(the user that created that credential). All the collaborators on a Project can\nchoose from all credentials for the Project when defining a job.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Credentials Page",src:n(29217).A,width:"2726",height:"1004"})),(0,r.yg)("h3",{id:"create-a-new-credential"},"Create a new Credential"),(0,r.yg)("p",null,"You can create a new Credential while configuring a new Step in your Workflow,\nor via the Settings > Credentials page.\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"Read this")," for more on\nmanaging credentials."),(0,r.yg)("h3",{id:"understand-the-app-specific-credentials"},"Understand the app-specific credentials"),(0,r.yg)("p",null,"Check out the dedicated ",(0,r.yg)("a",{parentName:"p",href:"/adaptors"},"Adaptor docs")," page for your app to inspect\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration schema")," and see what credential details will be required to\nauthenticate with your app (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"username"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"api_key"),")."),(0,r.yg)("p",null,'If your app is not listed in the Adaptors section, then inspect your app\'s API\ndocumentation to see what is required for "authentication". You can then create\na ',(0,r.yg)("inlineCode",{parentName:"p"},"Raw JSON")," Credential in OpenFn to define whatever credential inputs are\nrequired. E.g.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "apiKey": "someSecretKey",\n  "baseUrl": "https://example.com/api/v2"\n}\n')),(0,r.yg)("p",null,'Note that some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl,\nhost, or ApiUrl. While most adaptors will handle a "trailing slash" in a URL\ngracefully, when in doubt you should leave it off. For example:'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"prefer ",(0,r.yg)("inlineCode",{parentName:"li"},"https://login.salesforce.com")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"https://login.salesforce.com/"),","),(0,r.yg)("li",{parentName:"ul"},"use ",(0,r.yg)("inlineCode",{parentName:"li"},"http://demo.openmrs.org/openmrs")," instead of\n",(0,r.yg)("inlineCode",{parentName:"li"},"http://demo.openmrs.org/openmrs/"),","),(0,r.yg)("li",{parentName:"ul"},"and write ",(0,r.yg)("inlineCode",{parentName:"li"},"https://play.dhis2.org")," rather than ",(0,r.yg)("inlineCode",{parentName:"li"},"https://play.dhis2.org/"),".")),(0,r.yg)("h3",{id:"use-oauth2-credentials"},"Use OAuth2 credentials"),(0,r.yg)("p",null,"If OAuth2 ",(0,r.yg)("em",{parentName:"p"},"clients")," have been configured on your OpenFn instance, you can use\nthem create OAuth credentials:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'First you pick an OAuth credential type from the "New Credential" interface.'),(0,r.yg)("li",{parentName:"ol"},"Then you give it a name."),(0,r.yg)("li",{parentName:"ol"},'You optionally select additional "scopes" that you want to use. (See the\nin-app link to third-party documentation on scopes, depending on what\napplication you\'re using.)'),(0,r.yg)("li",{parentName:"ol"},'And then click "Sign in with ',"_","_","_","_","_","_",'".')),(0,r.yg)("p",null,"You will be asked by the third-party application to verify your identity and\nthat you'd like to use OAuth. Once you accept, back on OpenFn you'll be able to\nsave and use your new credential just like any other."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you're using a deployed instance of OpenFn and can't find the OAuth\ncredential type for your app, please contact the superuser responsible for your\ninstance setup and request them to set up OAuth clients for your application.\nUsers of the hosted OpenFn platform SaaS can post on\n",(0,r.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community.openfn.org")," or send an email to\n",(0,r.yg)("a",{parentName:"p",href:"mailto://support@openfn.org"},"support@openfn.org"),".")),(0,r.yg)("h4",{id:"eg-googlesheets-oauth-credential"},"e.g., GoogleSheets OAuth Credential"),(0,r.yg)("p",null,"Note the credential selects only required scopes for Google Sheets."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Google OAuth",src:n(51770).A,width:"363",height:"222"})),(0,r.yg)("h4",{id:"eg-salesforce-oauth-credential"},"e.g., Salesforce OAuth Credential"),(0,r.yg)("p",null,"Note that you can choose which scopes to access on Salesforce."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Salseforce OAuth",src:n(65022).A,width:"477",height:"415"})),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Check out the dedicated ",(0,r.yg)("a",{parentName:"p",href:"/adaptors"},"Adaptor docs")," page for app-specific\ncredential guidance.")),(0,r.yg)("h3",{id:"creating-a-dedicated-integration-user-for-your-openfn-workflow"},'Creating a dedicated "integration user" for your OpenFn workflow'),(0,r.yg)("p",null,"To keep target systems as secure and controlled as possible, we recommend that\ncredentials used in the integration be granted API-only access to the target\napplication. "),(0,r.yg)("p",null,"You ",(0,r.yg)("em",{parentName:"p"},"can"),' use your personal user as an OpenFn credential for your\nworkflow, but we recommend that you create a dedicated "OpenFn" integration user\nor service account user to access your target applications. For example, in\nSalesforce, you can create an API-only user with a special API-only license type\nto perform automated tasks and integrations without requiring full user access.'),(0,r.yg)("p",null,"API-only users might not be available in every target system, but many do offer the\ncreation of user roles that have API-only access permissions, and may allow you\nto determine the scopes for which APIs or endpoints users can access. Even when an\nAPI only user is not available in the target system, best practices dictate that an\nintegration/service user is used for all automation tasks to maintain a secure audit\ntrail."),(0,r.yg)("p",null,"API-only access minimizes the risks of data breaches by:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Ensuring Traceability"),": Accessing with an integration user provides an audit\ntrail of who logged in when and what changes were made. For example, if you used\nyour personal user login for a system in an integration implementation, it\nwould be hard to know if it was YOU, a human, who made a change vs. an\nautomated system action via the API user.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Minimizing breach impact"),": The user can be deactivated if compromised, and log\nin to the frontend with the breached API credential is automatically disallowed,\nlimiting attack vectors.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Ensuring the principle of least privilege"),": Each integration user need only\nhave access to the subset of data supporting its specific use case."))),(0,r.yg)("p",null,"Check out the docs on\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/get-started/security"},"Security Best Practices")," to learn more."))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51770:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/google-oauth2-d69c7a743931c4b157b73b212d3eb083.png"},65022:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/salesforce-oauth2-ee013ee61fcd24ba1c8eb4e72c9bd889.png"},29217:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/settings_credentials-baf87b7f92677fb3783cc99eaf4936b5.png"}}]);