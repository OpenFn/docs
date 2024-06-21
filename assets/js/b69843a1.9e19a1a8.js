"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34149],{15680:(A,e,t)=>{t.d(e,{xA:()=>c,yg:()=>f});var n=t(96540);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var u=n.createContext({}),i=function(A){var e=n.useContext(u),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},c=function(A){var e=i(A.components);return n.createElement(u.Provider,{value:e},A.children)},s="mdxType",p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,u=A.parentName,c=l(A,["components","mdxType","originalType","parentName"]),s=i(t),d=r,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||a;return t?n.createElement(f,o(o({ref:e},c),{},{components:t})):n.createElement(f,o({ref:e},c))}));function f(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=A,l[s]="string"==typeof A?A:r,o[1]=l;for(var i=2;i<a;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39798:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(58168),r=(t(96540),t(15680));const a={title:"Update User Profile",sidebar_label:"User Profile",slug:"/user-profile"},o=void 0,l={unversionedId:"manage-users/user-profile",id:"manage-users/user-profile",title:"Update User Profile",description:"This article walks you through how to view and update your user information in",source:"@site/docs/manage-users/user-profile.md",sourceDirName:"manage-users",slug:"/user-profile",permalink:"/documentation/user-profile",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-users/user-profile.md",tags:[],version:"current",frontMatter:{title:"Update User Profile",sidebar_label:"User Profile",slug:"/user-profile"},sidebar:"docs",previous:{title:"Collaboration",permalink:"/documentation/collaboration"},next:{title:"User Credentials",permalink:"/documentation/user-credentials"}},u={},i=[{value:"Change Email and Password",id:"change-email-and-password",level:3},{value:"Enable Multi-Factor Authentication",id:"enable-multi-factor-authentication",level:3},{value:"Account Deletion",id:"account-deletion",level:3}],c={toc:i},s="wrapper";function p(A){let{components:e,...a}=A;return(0,r.yg)(s,(0,n.A)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This article walks you through how to view and update your user information in\nyour User Profile."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"User Profile",src:t(75494).A,width:"357",height:"267"})),(0,r.yg)("h3",{id:"change-email-and-password"},"Change Email and Password"),(0,r.yg)("p",null,"You can change the email address associated with your Profile, and update your\npassword."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Change Email Password",src:t(18793).A,width:"1480",height:"942"})),(0,r.yg)("h3",{id:"enable-multi-factor-authentication"},"Enable Multi-Factor Authentication"),(0,r.yg)("p",null,"By enabling Multi-Factor Authentication, you can add an additional layer of\nsecurity to your account by requiring more than just a password for logging in."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Enable MFA",src:t(19734).A,width:"951",height:"812"})),(0,r.yg)("p",null,"You can link your account to an authenticator app or a browser extension like\n1Password or Authy. Once configured, the app will generate a one-time password\nfor you to provide during sign-in to verify your identity at each login."),(0,r.yg)("p",null,"To configure multi-factor authentication, use an authenticator app or browser\nextension to scan the QR code found on your profile."),(0,r.yg)("p",null,"Alternatively, you can provide the secret key generated on your profile to the\napp to set it up."),(0,r.yg)("h3",{id:"account-deletion"},"Account Deletion"),(0,r.yg)("p",null,"Your User Profile is also the place where you can delete your OpenFn account."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Delete Account",src:t(40473).A,width:"786",height:"118"})))}p.isMDXComponent=!0},18793:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/lightning_change_email_pw-9aab164ea184953510ccc0861e71e8d0.png"},40473:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},19734:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/lightning_enable_MFA-c9e34439e6b7f324064c7cfde704a4f3.png"},75494:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/lightning_select_user_profile-34ba69238209ea2a5cfcd8c7ae7d7eb8.png"}}]);