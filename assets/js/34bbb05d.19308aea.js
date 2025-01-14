"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48543],{55897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={title:"Manage Credentials"},o=void 0,l={unversionedId:"manage-projects/manage-credentials",id:"manage-projects/manage-credentials",title:"Manage Credentials",description:"You can view the Credentials related to a Project under the Project",source:"@site/docs/manage-projects/manage-credentials.md",sourceDirName:"manage-projects",slug:"/manage-projects/manage-credentials",permalink:"/documentation/manage-projects/manage-credentials",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/manage-credentials.md",tags:[],version:"current",frontMatter:{title:"Manage Credentials"},sidebar:"docs",previous:{title:"Data Storage",permalink:"/documentation/manage-projects/io-data-storage"},next:{title:"User Roles",permalink:"/documentation/manage-projects/user-roles-permissions"}},s={},c=[{value:"View all Project Credentials",id:"view-all-project-credentials",level:3},{value:"Create a new Credential",id:"create-a-new-credential",level:3},{value:"Share Credentials",id:"share-credentials",level:3},{value:"<code>Raw JSON</code> Credentials",id:"raw-json-credentials",level:3}],d={toc:c},p="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,a.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can view the Credentials related to a Project under the Project\n",(0,r.yg)("inlineCode",{parentName:"p"},"Settings > Credentials")," page. In this article, you'll learn how to manage your\ncredentials related to a project."),(0,r.yg)("h3",{id:"view-all-project-credentials"},"View all Project Credentials"),(0,r.yg)("p",null,"Via this ",(0,r.yg)("inlineCode",{parentName:"p"},"Credentials")," page, you can see a list of all Credentials, including\nthe name, type, and owner, and whether they are for a production environment."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Credentials Overview",src:t(94360).A,width:"1917",height:"788"})),(0,r.yg)("admonition",{title:"Viewing credential secrets",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"All Project Collaborators can view the credential name, type, and owner, but\nonly the Credential Owner can view the credential secrets (username, password,\netc.).")),(0,r.yg)("h3",{id:"create-a-new-credential"},"Create a new Credential"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Click on the ",(0,r.yg)("inlineCode",{parentName:"li"},"New Credential")," button, and choose the type of app you want to\nconnect."),(0,r.yg)("li",{parentName:"ol"},'If your app is not listed, choose "Raw JSON" to create your own custom\ncredential or "configuration" input. For example:')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ "loginUrl": "https://random-app.com", "username": "test", "password": "pwd" }\n')),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Credential Type",src:t(68157).A,width:"1098",height:"895"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"Configure Credentials")," and add the authentication details for your\napp. The credential form will indicate which fields are required.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Add Credential",src:t(62012).A,width:"658",height:"955"})),(0,r.yg)("admonition",{title:"Not sure how to fill in all credential details?",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},'While creating a new credential form, if you\'re not sure what some of these\nfields require (e.g., "security token"), then head over to the relevant\n',(0,r.yg)("inlineCode",{parentName:"p"},"Adaptors"),' docs page to learn more and read about the "configuration schema" or\nask on ',(0,r.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"Community"),".")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"Save")," and you'll see it listed in your ",(0,r.yg)("inlineCode",{parentName:"li"},"Credentials")," page. You can now\nuse it across the Project when building and running Workflows.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"New Credential Ready",src:t(61529).A,width:"1592",height:"651"})),(0,r.yg)("h3",{id:"share-credentials"},"Share Credentials"),(0,r.yg)("p",null,"If you own a Credential, you can choose which Project has access to it. To\nupdate which Projects your Credential is shared with, follow the steps on the\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/user-credentials"},"User Credentials docs page"),"."),(0,r.yg)("h3",{id:"raw-json-credentials"},(0,r.yg)("inlineCode",{parentName:"h3"},"Raw JSON")," Credentials"),(0,r.yg)("p",null,"Raw credentials are valid JSON documents which are passed into a job's runtime\nstate. Note that owners of these credentials will be able to view them, in their\nentirety, in the clear."),(0,r.yg)("p",null,"Raw credentials will work with any adaptor, so long as that adaptor's required ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," keys (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"baseUrl"),') are specified in your credential. See the "configuration schema" docs for each adaptor to see what is required for that app. '),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Use ",(0,r.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Raw JSON")," to specify custom credential inputs"),(0,r.yg)("p",{parentName:"admonition"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Raw JSON")," credential type if you would like to store secrets that\nare not standard inputs in an adaptor's credential form. For example, if my REST\nAPI requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"client_id")," instead of a ",(0,r.yg)("inlineCode",{parentName:"p"},"username"),", then my ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration"),"\nschema might look like the below code snippet. Because ",(0,r.yg)("inlineCode",{parentName:"p"},"client_id")," isn't an\noption in the default ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," credential form, I can create my own custom credential\nusing the ",(0,r.yg)("inlineCode",{parentName:"p"},"Raw JSON")," type.")),(0,r.yg)("p",null,"Example Raw JSON credential body or ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "baseUrl": "https://myapp.com/api",\n  "client_id": "test-j01",\n  "password": "testing123",\n  "customInput": "whateverYouWant"\n}\n')))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,u=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62012:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lightning_add_cred-a60eb2b968871521bf74d402a0bd59c2.png"},68157:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lightning_choose_cred_type-ceca1d35a8008c1dceecf8800a4d9014.png"},94360:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lightning_credentials_overview-6b95a72e80a0be2881b417356321b3e5.png"},61529:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lightning_new_cred_ready-c879ec3ae6d2aefb21a21b2a87bac165.png"}}]);