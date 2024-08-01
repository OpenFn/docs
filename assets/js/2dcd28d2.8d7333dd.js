"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[14340],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>s});var l=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var y=l.createContext({}),m=function(e){var a=l.useContext(y),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},i=function(e){var a=m(e.components);return l.createElement(y.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},o=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,y=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=m(t),o=n,s=u["".concat(y,".").concat(o)]||u[o]||d[o]||r;return t?l.createElement(s,g(g({ref:a},i),{},{components:t})):l.createElement(s,g({ref:a},i))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,g=new Array(r);g[0]=o;var p={};for(var y in a)hasOwnProperty.call(a,y)&&(p[y]=a[y]);p.originalType=e,p[u]="string"==typeof e?e:n,g[1]=p;for(var m=2;m<r;m++)g[m]=t[m];return l.createElement.apply(null,g)}return l.createElement.apply(null,t)}o.displayName="MDXCreateElement"},48515:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=t(58168),n=(t(96540),t(15680));const r={title:"mailchimp@1.0.2",id:"mailchimp-docs",keywords:["adaptor","mailchimp","addMember","archiveMember","deleteMember","get","listAudienceInfo","listAudiences","listBatches","listMembers","post","request","startBatch","tagMembers","updateMember","updateMemberTags","upsertMembers"]},g=void 0,p={unversionedId:"packages/mailchimp-docs",id:"packages/mailchimp-docs",title:"mailchimp@1.0.2",description:"addMember(params, [callback])",source:"@site/adaptors/packages/mailchimp-docs.md",sourceDirName:"packages",slug:"/packages/mailchimp-docs",permalink:"/adaptors/packages/mailchimp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mailchimp@1.0.2",id:"mailchimp-docs",keywords:["adaptor","mailchimp","addMember","archiveMember","deleteMember","get","listAudienceInfo","listAudiences","listBatches","listMembers","post","request","startBatch","tagMembers","updateMember","updateMemberTags","upsertMembers"]},sidebar:"adaptors",previous:{title:"magpi developer readme",permalink:"/adaptors/packages/magpi-readme"},next:{title:"Config for mailchimp",permalink:"/adaptors/packages/mailchimp-configuration-schema"}},y={},m=[{value:"Functions",id:"functions",level:2},{value:"addMember",id:"addmember",level:3},{value:"archiveMember",id:"archivemember",level:3},{value:"deleteMember",id:"deletemember",level:3},{value:"get",id:"get",level:3},{value:"listAudienceInfo",id:"listaudienceinfo",level:3},{value:"listAudiences",id:"listaudiences",level:3},{value:"listBatches",id:"listbatches",level:3},{value:"listMembers",id:"listmembers",level:3},{value:"post",id:"post",level:3},{value:"request",id:"request",level:3},{value:"startBatch",id:"startbatch",level:3},{value:"tagMembers",id:"tagmembers",level:3},{value:"updateMember",id:"updatemember",level:3},{value:"updateMemberTags",id:"updatemembertags",level:3},{value:"upsertMembers",id:"upsertmembers",level:3}],i={toc:m},u="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,l.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#addmember"},"addMember(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#archivemember"},"archiveMember(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#deletemember"},"deleteMember(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#get"},"get(path, query, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#listaudienceinfo"},"listAudienceInfo(query, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#listaudiences"},"listAudiences(query, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#listbatches"},"listBatches(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#listmembers"},"listMembers(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#post"},"post(path, body, query, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#request"},"request(method, path, options, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#startbatch"},"startBatch(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#tagmembers"},"tagMembers(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#updatemember"},"updateMember(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#updatemembertags"},"updateMemberTags(params, [callback])")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#upsertmembers"},"upsertMembers(params, [callback])"))),(0,n.yg)("p",null,"This adaptor exports the following from common:"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#chunk"},"chunk()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("h3",{id:"addmember"},"addMember"),(0,n.yg)("p",null,(0,n.yg)("code",null,"addMember(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"addMember to a list"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"archivemember"},"archiveMember"),(0,n.yg)("p",null,(0,n.yg)("code",null,"archiveMember(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"archiveMember in a list"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"deletemember"},"deleteMember"),(0,n.yg)("p",null,(0,n.yg)("code",null,"deleteMember(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Permanently delete a member from a list"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"get"},"get"),(0,n.yg)("p",null,(0,n.yg)("code",null,"get(path, query, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"The get function is used to make a GET request to the Mailchimp API."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"path"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"query"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"An object containing query parameters to be included in the request")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"(Optional) callback to handle the response")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example:")," Get a list of account exports for a given account"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"get('/account-exports');\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"listaudienceinfo"},"listAudienceInfo"),(0,n.yg)("p",null,(0,n.yg)("code",null,"listAudienceInfo(query, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Get information about a specific list in your Mailchimp account.\nResults include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"query"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"listId and query parameters")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"listaudiences"},"listAudiences"),(0,n.yg)("p",null,(0,n.yg)("code",null,"listAudiences(query, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Get information about all lists in the account."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"query"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"Query parameters")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"listbatches"},"listBatches"),(0,n.yg)("p",null,(0,n.yg)("code",null,"listBatches(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"listBatches"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"listmembers"},"listMembers"),(0,n.yg)("p",null,(0,n.yg)("code",null,"listMembers(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"listMembers"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"post"},"post"),(0,n.yg)("p",null,(0,n.yg)("code",null,"post(path, body, query, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"The post function is used to make a POST request to the Mailchimp API."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"path"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"body"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"The data to be sent in the body of the request")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"query"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"An object containing query parameters to be included in the request")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"(Optional) callback to handle the response")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example:")," Create a new account export in your Mailchimp account"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"post('/accounts-export', {include_stages:[]});\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"request"},"request"),(0,n.yg)("p",null,(0,n.yg)("code",null,"request(method, path, options, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Make an HTTP request to Mailchimp API"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"method"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE').")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"path"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"string")),(0,n.yg)("td",{parentName:"tr",align:null},"The endpoint of the api to which the request should be made.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"options"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"Object")),(0,n.yg)("td",{parentName:"tr",align:null},"Additional options for the request (query, body only).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"(Optional) callback function to handle the response.")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example:")," Get list to all other resources available in the API"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"request('GET','/');\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example:")," Create a new account export in your Mailchimp account"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"request('POST','/accounts-export', {include_stages:[]});\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"startbatch"},"startBatch"),(0,n.yg)("p",null,(0,n.yg)("code",null,"startBatch(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Start a batch with a list of operations."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"operations batch job")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"startBatch(params)\n")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"tagmembers"},"tagMembers"),(0,n.yg)("p",null,(0,n.yg)("code",null,"tagMembers(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Tag members with a particular tag"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a tagId, members, and a list")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'tagMembers((state) => ({\n  listId: "someId", // All Subscribers list\n  tagId: "someTag", // User tag\n  members: state.response.body.rows.map((u) => u.email),\n}));\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'tagMembers((state) => ({\n  listId: "someId",\n  tagId: "someTag",\n  members: state.response.body.rows\n    .filter((u) => u.allow_other_emails)\n    .map((u) => u.email),\n}));\n')),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"updatemember"},"updateMember"),(0,n.yg)("p",null,(0,n.yg)("code",null,"updateMember(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"updateMember"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId,subscriberHash and member")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"updatemembertags"},"updateMemberTags"),(0,n.yg)("p",null,(0,n.yg)("code",null,"updateMemberTags(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"updateMemberTags"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"upsertmembers"},"upsertMembers"),(0,n.yg)("p",null,(0,n.yg)("code",null,"upsertMembers(params, [callback]) \u21d2 Operation")),(0,n.yg)("p",null,"Add or update a list members"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"a listId, users, and options")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'upsertMembers((state) => ({\n  listId: "someId",\n  users: state.response.body.rows.map((u) => ({\n    email: u.email,\n    status: u.allow_other_emails ? "subscribed" : "unsubscribed",\n    mergeFields: { FNAME: u.first_name, LNAME: u.last_name },\n  })),\n}));\n')),(0,n.yg)("hr",null))}d.isMDXComponent=!0}}]);