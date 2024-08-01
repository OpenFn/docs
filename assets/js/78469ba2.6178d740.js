"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76152],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,g=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),i=(n(96540),n(15680));const o={title:"OAuth Authentication",sidebar_label:"OAuth Authentication",slug:"/oauth"},r=void 0,l={unversionedId:"manage-projects/oauth",id:"manage-projects/oauth",title:"OAuth Authentication",description:"Some applications require OAuth as an authentication method for connecting with",source:"@site/docs/manage-projects/oauth.md",sourceDirName:"manage-projects",slug:"/oauth",permalink:"/documentation/oauth",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/oauth.md",tags:[],version:"current",frontMatter:{title:"OAuth Authentication",sidebar_label:"OAuth Authentication",slug:"/oauth"},sidebar:"docs",previous:{title:"Collaboration",permalink:"/documentation/collaboration"},next:{title:"User Profile",permalink:"/documentation/user-profile"}},c={},s=[{value:"OAuth Authentication",id:"oauth-authentication",level:3},{value:"Setting up an OAuth client",id:"setting-up-an-oauth-client",level:3},{value:"What is an OAuth client and when do I need it?",id:"what-is-an-oauth-client-and-when-do-i-need-it",level:4},{value:"Creating an OAuth client (Super Users)",id:"creating-an-oauth-client-super-users",level:3},{value:"Sharing OAuth Clients",id:"sharing-oauth-clients",level:3},{value:"Making OAuth clients global",id:"making-oauth-clients-global",level:4},{value:"Sharing OAuth clients with projects",id:"sharing-oauth-clients-with-projects",level:4},{value:"Creating a credential from an OAuth client",id:"creating-a-credential-from-an-oauth-client",level:3},{value:"Deleting Clients and Credentials",id:"deleting-clients-and-credentials",level:3},{value:"More on Managing Credentials",id:"more-on-managing-credentials",level:3}],u={toc:s},h="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(h,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Some applications require OAuth as an authentication method for connecting with\nthird party applications making requests via their APIs. This guide walks you\nthrough how to set up and manage OAuth clients."),(0,i.yg)("h3",{id:"oauth-authentication"},"OAuth Authentication"),(0,i.yg)("p",null,"Some applications require ",(0,i.yg)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth")," as an authentication\nmethod for connecting with third-party applications and making requests via\ntheir APIs. OpenFn allows you to connect with applications using their OAuth\nauthentication. To use this feature in your OpenFn workflows, you need to set up\nOAuth clients and credentials for your instances or projects. This guide walks\nyou through the management of OAuth clients and credentials."),(0,i.yg)("h3",{id:"setting-up-an-oauth-client"},"Setting up an OAuth client"),(0,i.yg)("h4",{id:"what-is-an-oauth-client-and-when-do-i-need-it"},"What is an OAuth client and when do I need it?"),(0,i.yg)("p",null,"By setting up OAuth for an application, you authorize OpenFn to connect and\ninteract with this application within a set of scopes defined by you. For\nexample, you might set up an OAuth authorization for OpenFn to connect to your\nGoogle Sheets account to read and track changes on your behalf. In this example,\nyou need to set up an OpenFn client that will represent an instance of OpenFn on\nGoogle and will hold all the permissions OpenFn needs on your behalf. All API\nrequests and responses are managed through the OpenFn client and authorized by\nan authorization token stored by the client."),(0,i.yg)("p",null,"In most cases, one client setup might be sufficient for one application but\ndepending on the project requirements and organization policy, several clients\nmight be set up for one application. These clients might be owned by the same or\ndifferent OpenFn users and accessible to different projects."),(0,i.yg)("p",null,"For every application you need to connect to OpenFn, you need to set up at least\none client for your project(s)."),(0,i.yg)("p",null,"Oauth clients can be set up either on the\n",(0,i.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"project credentials page")," or the\n",(0,i.yg)("a",{parentName:"p",href:"/documentation/user-credentials"},"user credentials page"),"."),(0,i.yg)("h3",{id:"creating-an-oauth-client-super-users"},"Creating an OAuth client (Super Users)"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," Currently only users with\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/manage-projects/user-roles-permissions#super-user-privileges"},"super user privileges"),"\ncan create and manage OAuth clients. If you're using the OpenFn cloud-hosted platform SaaS,\ncontact ",(0,i.yg)("a",{parentName:"p",href:"mailto://support@openfn.org"},"support@openfn.org")," for assistance adding a new Oauth client.")),(0,i.yg)("p",null,"If you have not created a client before or a superuser has not created a client\nfor the projects/users in the deployment, you will see an empty block with a\nbutton prompting you to create a client as shown below. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"New client",src:n(65834).A,width:"1147",height:"271"})),(0,i.yg)("p",null,"Alternatively, you will see the list of existing OAuth clients you have access\nto. In this case click on the ",(0,i.yg)("inlineCode",{parentName:"p"},"New credential")," button and select\n",(0,i.yg)("inlineCode",{parentName:"p"},"OAuth client [Advanced]")," in the dropdown."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"OAuth dropdown",src:n(5098).A,width:"1546",height:"236"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," Make sure you add ",(0,i.yg)("a",{parentName:"p",href:"https://app.openfn.org/authenticate/callback"},"https://app.openfn.org/authenticate/callback")," as the\ncallback URL for the application when enabling OAuth authentication for the\nthird party application.")),(0,i.yg)("h3",{id:"sharing-oauth-clients"},"Sharing OAuth Clients"),(0,i.yg)("p",null,"A super user has the privilege to share OAuth clients with projects in two ways:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Making a client global"),(0,i.yg)("li",{parentName:"ol"},"Sharing with specific projects")),(0,i.yg)("p",null,"They can do this in the OAuth client configuration modal either when creating\nthe client, or via editing it."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"OAuth edit",src:n(75369).A,width:"1274",height:"138"})),(0,i.yg)("h4",{id:"making-oauth-clients-global"},"Making OAuth clients global"),(0,i.yg)("p",null,"When an OAuth client is global, users in the instance can have access to it and\ncan create credentials from it."),(0,i.yg)("p",null,"To make a client global, scroll down to ",(0,i.yg)("inlineCode",{parentName:"p"},"Manage Project Access")," section in the\nOAuth client configuration modal and select the checkbox\n",(0,i.yg)("inlineCode",{parentName:"p"},"Make client global (allow any project in this instance to use this client)")," and\nsave changes. All projects on the instance can now access the client and users\nwith owner, admin and editor rights on these projects can now create credentials\nfrom the client."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"OAuth project access",src:n(6545).A,width:"854",height:"296"})),(0,i.yg)("h4",{id:"sharing-oauth-clients-with-projects"},"Sharing OAuth clients with projects"),(0,i.yg)("p",null,"To share an OAuth client with specific projects, scroll down to\n",(0,i.yg)("inlineCode",{parentName:"p"},"Manage Project Access")," section in the OAuth client configuration modal. Select\nthe project dropdown and select a project and click the add button to grant the\nproject access to the client."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Share OAuth client",src:n(30928).A,width:"862",height:"397"})),(0,i.yg)("h3",{id:"creating-a-credential-from-an-oauth-client"},"Creating a credential from an OAuth client"),(0,i.yg)("p",null,"Every client requires an authentication token to authenticate requests made to\nthe application on behalf of the user. On OpenFn, these tokens are created as\ncredentials and are associated with clients."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"To create a credential from an Oauth client, click on create a new credential\nor click on the button as show below:")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create new cred",src:n(80903).A,width:"1218",height:"287"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"New credential",src:n(55740).A,width:"381",height:"187"})),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Unlike for OAuth clients, project owners or admins can also create\ncredentials, not only super users. ")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Then, in the credential type modal, find and select the Oauth client to use\nfor creating the OAuth credential. This will open a new modal for you to\nconfigure the credential by providing the name, scopes/permissions required\nand API version."),(0,i.yg)("li",{parentName:"ol"},"When you\u2019ve filled the form, click on the\n",(0,i.yg)("inlineCode",{parentName:"li"},"Sign in with [your OAuth Client name]")," button to authorize the Oauth client.\nClicking this button will open a new tab for you to grant OpenFn an\nauthorization token to authenticate your requests.")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," When you have siged in, you will be required to grant OpenFn access by\nclicking ",(0,i.yg)("inlineCode",{parentName:"p"},"Allow")," on the permissions modal. Please note that this might look\ndifferent for different applications but the intent is to grant OpenFn\nperimission to carry out certain actions to the application on your behalf. The\nuser authenticating OAuth clients should have the required permissions in the\napplication.")),(0,i.yg)("h3",{id:"deleting-clients-and-credentials"},"Deleting Clients and Credentials"),(0,i.yg)("p",null,"To delete a credential/client, simply click ",(0,i.yg)("inlineCode",{parentName:"p"},"Delete"),". "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"OAuth edit",src:n(75369).A,width:"1274",height:"138"})),(0,i.yg)("p",null,"A confirmation message pops up to confirm your action."),(0,i.yg)("p",null,"As soon as you confirm that you want to delete a credential, you will receive an\nemail to notify you that the credential has been scheduled for deletion."),(0,i.yg)("p",null,"The scheduled deletion date is set by a grace period configured by your instance\nadministrator. On the ",(0,i.yg)("a",{parentName:"p",href:"https://app.openfn.org/"},"OpenFn hosted instance"),", it will be permanently deleted after 7 days."),(0,i.yg)("h3",{id:"more-on-managing-credentials"},"More on Managing Credentials"),(0,i.yg)("p",null,"Go to the docs on ",(0,i.yg)("a",{parentName:"p",href:"/documentation/user-credentials"},"managing user credentials")," to learn more\nabout credential management for the applications you are integrating with on OpenFn."))}p.isMDXComponent=!0},80903:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_new_cred-2876d0667ff7f6231656437040679f9c.png"},65834:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_new_oauth_client-9568fc496e272459862c2cbd04f27732.png"},6545:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/manage_project_access-69db63df9e7ebaf5737011f5a9ad4603.png"},55740:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new_cred-f9fb12e3efa6b510339acd9912fb1431.png"},75369:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/oauth_client_edit-a7159f44c0114f3149cf4360e02665b2.png"},5098:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/oauth_dropdown-8a982bdb778045a9641270801fcfe3af.png"},30928:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/share_oauth_client-9650d6d2953d73f2aead890b489b1773.png"}}]);