"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31262],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>s});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),m=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return l.createElement(u.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=m(a),c=n,s=k["".concat(u,".").concat(c)]||k[c]||d[c]||r;return a?l.createElement(s,p(p({ref:e},o),{},{components:a})):l.createElement(s,p({ref:e},o))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[k]="string"==typeof t?t:n,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3925:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));const r={title:"mailchimp@0.5.0",id:"mailchimp-docs",keywords:["adaptor","mailchimp"]},p=void 0,i={unversionedId:"packages/mailchimp-docs",id:"packages/mailchimp-docs",title:"mailchimp@0.5.0",description:"Functions",source:"@site/adaptors/packages/mailchimp-docs.md",sourceDirName:"packages",slug:"/packages/mailchimp-docs",permalink:"/fr/adaptors/packages/mailchimp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mailchimp@0.5.0",id:"mailchimp-docs",keywords:["adaptor","mailchimp"]},sidebar:"adaptors",previous:{title:"magpi developer readme",permalink:"/fr/adaptors/packages/magpi-readme"},next:{title:"Config for mailchimp",permalink:"/fr/adaptors/packages/mailchimp-configuration-schema"}},u={},m=[{value:"Functions",id:"functions",level:2},{value:"addMember",id:"addmember",level:2},{value:"archiveMember",id:"archivemember",level:2},{value:"deleteMember",id:"deletemember",level:2},{value:"get",id:"get",level:2},{value:"listAudienceInfo",id:"listaudienceinfo",level:2},{value:"listAudiences",id:"listaudiences",level:2},{value:"listBatches",id:"listbatches",level:2},{value:"listMembers",id:"listmembers",level:2},{value:"post",id:"post",level:2},{value:"request",id:"request",level:2},{value:"startBatch",id:"startbatch",level:2},{value:"tagMembers",id:"tagmembers",level:2},{value:"updateMember",id:"updatemember",level:2},{value:"updateMemberTags",id:"updatemembertags",level:2},{value:"upsertMembers",id:"upsertmembers",level:2}],o={toc:m},k="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#addMember"},"addMember(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#archiveMember"},"archiveMember(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#deleteMember"},"deleteMember(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#get"},"get(path, query, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#listAudienceInfo"},"listAudienceInfo(query, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#listAudiences"},"listAudiences(query, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#listBatches"},"listBatches(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#listMembers"},"listMembers(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#post"},"post(path, body, query, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#request"},"request(method, path, options, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#startBatch"},"startBatch(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#tagMembers"},"tagMembers(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#updateMember"},"updateMember(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#updateMemberTags"},"updateMemberTags(params, [callback])")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#upsertMembers"},"upsertMembers(params, [callback])"))),(0,n.kt)("h2",{id:"addmember"},"addMember"),(0,n.kt)("p",null,"addMember(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\naddMember to a list"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"archivemember"},"archiveMember"),(0,n.kt)("p",null,"archiveMember(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\narchiveMember in a list"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deletemember"},"deleteMember"),(0,n.kt)("p",null,"deleteMember(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nPermanently delete a member from a list"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"get"},"get"),(0,n.kt)("p",null,"get(path, query, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nThe get function is used to make a GET request to the Mailchimp API."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"An object containing query parameters to be included in the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback to handle the response")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Get a list of account exports for a given account)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"get('/account-exports');\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"listaudienceinfo"},"listAudienceInfo"),(0,n.kt)("p",null,"listAudienceInfo(query, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nGet information about a specific list in your Mailchimp account.\nResults include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"listId and query parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"listaudiences"},"listAudiences"),(0,n.kt)("p",null,"listAudiences(query, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nGet information about all lists in the account."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"Query parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"listbatches"},"listBatches"),(0,n.kt)("p",null,"listBatches(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nlistBatches"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"listmembers"},"listMembers"),(0,n.kt)("p",null,"listMembers(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nlistMembers"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"post"},"post"),(0,n.kt)("p",null,"post(path, body, query, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nThe post function is used to make a POST request to the Mailchimp API."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"body"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"The data to be sent in the body of the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"An object containing query parameters to be included in the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback to handle the response")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Create a new account export in your Mailchimp account)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"post('/accounts-export', {include_stages:[]});\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"request"},"request"),(0,n.kt)("p",null,"request(method, path, options, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nMake an HTTP request to Mailchimp API"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"method"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE').")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Additional options for the request (query, body only).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function to handle the response.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Get list to all other resources available in the API)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"request('GET','/');\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")," ",(0,n.kt)("em",{parentName:"p"},"(Create a new account export in your Mailchimp account)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"request('POST','/accounts-export', {include_stages:[]});\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"startbatch"},"startBatch"),(0,n.kt)("p",null,"startBatch(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nStart a batch with a list of operations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"operations batch job")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"startBatch(params)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"tagmembers"},"tagMembers"),(0,n.kt)("p",null,"tagMembers(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nTag members with a particular tag"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a tagId, members, and a list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'tagMembers((state) => ({\n  listId: "someId", // All Subscribers list\n  tagId: "someTag", // User tag\n  members: state.response.body.rows.map((u) => u.email),\n}));\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'tagMembers((state) => ({\n  listId: "someId",\n  tagId: "someTag",\n  members: state.response.body.rows\n    .filter((u) => u.allow_other_emails)\n    .map((u) => u.email),\n}));\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"updatemember"},"updateMember"),(0,n.kt)("p",null,"updateMember(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nupdateMember"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId,subscriberHash and member")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"updatemembertags"},"updateMemberTags"),(0,n.kt)("p",null,"updateMemberTags(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nupdateMemberTags"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"upsertmembers"},"upsertMembers"),(0,n.kt)("p",null,"upsertMembers(params, ","[callback]",") \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nAdd or update a list members"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, users, and options")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'upsertMembers((state) => ({\n  listId: "someId",\n  users: state.response.body.rows.map((u) => ({\n    email: u.email,\n    status: u.allow_other_emails ? "subscribed" : "unsubscribed",\n    mergeFields: { FNAME: u.first_name, LNAME: u.last_name },\n  })),\n}));\n')),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);