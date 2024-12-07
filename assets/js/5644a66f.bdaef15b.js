"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[66703],{2142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"SFTP Adaptor"},i=void 0,l={unversionedId:"sftp",id:"sftp",title:"SFTP Adaptor",description:"About SFTP",source:"@site/adaptors/sftp.md",sourceDirName:".",slug:"/sftp",permalink:"/adaptors/sftp",draft:!1,tags:[],version:"current",frontMatter:{title:"SFTP Adaptor"},sidebar:"adaptors",previous:{title:"satusehat developer readme",permalink:"/adaptors/packages/satusehat-readme"},next:{title:"sftp@2.0.5",permalink:"/adaptors/packages/sftp-docs"}},s={},p=[{value:"About SFTP",id:"about-sftp",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"about-sftp"},"About SFTP"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.techtarget.com/searchcontentmanagement/definition/Secure-File-Transfer-Protocol-SSH-File-Transfer-Protocol"},"SFTP (Secure File Transfer Protocol)")," is a secure method for transferring files between systems over an encrypted SSH connection. It is widely used for securely uploading, downloading, and managing files on remote servers."),(0,a.yg)("p",null,"Using this adaptor, you can read and write files (e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"csv"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"xls"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"json")," files) saved on a SFTP server. "),(0,a.yg)("h2",{id:"integration-options"},"Integration Options"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Direct File Transfers:")," SFTP allows users to manually or programmatically transfer files between a local and remote system. See ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/packages/sftp-docs"},"functions")," for more on how to use this adaptor to work with an SFTP server."),(0,a.yg)("h2",{id:"authentication"},"Authentication"),(0,a.yg)("p",null,"When integrating with a SFTP server via OpenFn, you can provide a ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"password")," for an authorized user to authenticate. See this adaptor's ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/packages/sftp-configuration-schema"},"Configuration docs")," for more on the required authentication parameters."),(0,a.yg)("p",null,"See platform docs on ",(0,a.yg)("a",{parentName:"p",href:"documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n  "host": "191.173.128.88",\n  "username": "name",\n  "password": "pwd"\n}\n')),(0,a.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://www.ssh.com/academy/ssh/sftp"},"Best Practices for SFTP"))),(0,a.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Women for Women International - SFTP -> Salesforce sync: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/women-for-women"},"https://github.com/OpenFn/women-for-women"))))}f.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);