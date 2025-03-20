"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46995],{85987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>i,frontMatter:()=>l,metadata:()=>y,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={title:"mysql@2.1.1",id:"mysql-docs",keywords:["adaptor","mysql","insert","query","sqlString","upsert","upsertMany"]},g=void 0,y={unversionedId:"packages/mysql-docs",id:"packages/mysql-docs",title:"mysql@2.1.1",description:"insert(table, fields)",source:"@site/adaptors/packages/mysql-docs.md",sourceDirName:"packages",slug:"/packages/mysql-docs",permalink:"/adaptors/packages/mysql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mysql@2.1.1",id:"mysql-docs",keywords:["adaptor","mysql","insert","query","sqlString","upsert","upsertMany"]},sidebar:"adaptors",previous:{title:"MySQL Adaptor",permalink:"/adaptors/mysql"},next:{title:"Config for mysql",permalink:"/adaptors/packages/mysql-configuration-schema"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"insert",id:"insert",level:3},{value:"query",id:"query",level:3},{value:"sqlString",id:"sqlstring",level:3},{value:"upsert",id:"upsert",level:3},{value:"upsertMany",id:"upsertmany",level:3}],u={toc:s},o="wrapper";function i(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#insert"},"insert(table, fields)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#query"},"query(options)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#sqlstring"},"sqlString(queryString)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#upsert"},"upsert(table, fields)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#upsertmany"},"upsertMany(table, data)"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"insert"},"insert"),(0,r.yg)("p",null,(0,r.yg)("code",null,"insert(table, fields) \u21d2 Operation")),(0,r.yg)("p",null,"Insert a record"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The target table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"A fields object")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Insert a record into the ",(0,r.yg)("inlineCode",{parentName:"p"},"users")," table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'insert("users", { name: (state) => state.data.name });\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"query"},"query"),(0,r.yg)("p",null,(0,r.yg)("code",null,"query(options) \u21d2 Operation")),(0,r.yg)("p",null,"Execute a SQL statement"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Execute a SQL statement"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"query({ sql: 'select * from users;' })\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"sqlstring"},"sqlString"),(0,r.yg)("p",null,(0,r.yg)("code",null,"sqlString(queryString) \u21d2 Operation")),(0,r.yg)("p",null,"Execute a SQL statement"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queryString"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"A query string (or function which takes state and returns a string)")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Execute a SQL statement"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'sqlString(state => "select * from items;")\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"upsert"},"upsert"),(0,r.yg)("p",null,(0,r.yg)("code",null,"upsert(table, fields) \u21d2 Operation")),(0,r.yg)("p",null,"Insert or Update a record if matched"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The target table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"A fields object")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Upsert a record"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'upsert("table", { name: (state) => state.data.name });\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"upsertmany"},"upsertMany"),(0,r.yg)("p",null,(0,r.yg)("code",null,"upsertMany(table, data) \u21d2 Operation")),(0,r.yg)("p",null,"Insert or update multiple records using ON DUPLICATE KEY"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The target table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"array")),(0,r.yg)("td",{parentName:"tr",align:null},"An array of objects or a function that returns an array")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Upsert multiple records"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  [\n    { name: 'one', email: 'one@openfn.org' },\n    { name: 'two', email: 'two@openfn.org' },\n  ]\n)\n")),(0,r.yg)("hr",null))}i.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=y(e,["components","mdxType","originalType","parentName"]),o=s(a),m=r,d=o["".concat(p,".").concat(m)]||o[m]||i[m]||l;return a?n.createElement(d,g(g({ref:t},u),{},{components:a})):n.createElement(d,g({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=m;var y={};for(var p in t)hasOwnProperty.call(t,p)&&(y[p]=t[p]);y.originalType=e,y[o]="string"==typeof e?e:r,g[1]=y;for(var s=2;s<l;s++)g[s]=a[s];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);