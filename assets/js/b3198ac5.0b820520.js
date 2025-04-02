"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[58581],{3608:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(58168),r=(n(96540),n(15680));const o={title:"Q3 2022 Update HH Name in CommCare",sidebar_label:"Q3 2022 Update HH Name in CommCare",id:"Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",keywords:["library","job","expression","commcare","map","submitXls","Array"]},i=void 0,s={unversionedId:"library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",id:"library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",title:"Q3 2022 Update HH Name in CommCare",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",permalink:"/adaptors/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",draft:!1,tags:[],version:"current",frontMatter:{title:"Q3 2022 Update HH Name in CommCare",sidebar_label:"Q3 2022 Update HH Name in CommCare",id:"Q3-2022-Update-HH-Name-in-CommCare-2021-09-27",keywords:["library","job","expression","commcare","map","submitXls","Array"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Create user",permalink:"/adaptors/library/jobs/auto/commcare-create-user"},next:{title:"commcare changelog",permalink:"/adaptors/packages/commcare-changelog"}},c={},l=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],m={toc:l},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(p,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Q3 2022 Update HH Name in CommCare"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-commcare"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare/releases/tag/v1.4.1"},(0,r.yg)("inlineCode",{parentName:"a"},"v1.4.1"))),(0,r.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 2 months ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"submitXls"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Array")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// Update CommCare case\nfn(state => {\n  const { Notification } = state.data.Envelope.Body.notifications;\n\n  const Notifications = Array.isArray(Notification)\n    ? Notification\n    : [Notification];\n\n  const notifications = Notifications.map(notification => {\n    console.log(\n      `Mapping HH code to CommCare: `,\n      notification.sObject.Household_Code_Autonumber__c\n    );\n    return {\n      case_id: notification.sObject.Commcare_Code__c,\n      name: notification.sObject.Household_Code_Autonumber__c,\n    };\n  });\n\n  return { ...state, notifications };\n});\n\nsubmitXls(state => state.notifications, {\n  case_type: 'Household',\n  search_field: 'case_id',\n  search_column: 'case_id',\n  name_column: 'name',\n  create_new_cases: 'off',\n});\n\n")))}u.isMDXComponent=!0},15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?t.createElement(y,i(i({ref:a},m),{},{components:n})):t.createElement(y,i({ref:a},m))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);