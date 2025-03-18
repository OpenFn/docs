"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[13963],{20296:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(58168),n=(a(96540),a(15680));const o={title:"Create user",sidebar_label:"\ud83d\udcdc Create user",id:"commcare-create-user",keywords:["library","job","expression","commcare","post","submitXls"]},i=void 0,l={unversionedId:"library/jobs/auto/commcare-create-user",id:"library/jobs/auto/commcare-create-user",title:"Create user",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/commcare-create-user.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/commcare-create-user",permalink:"/adaptors/library/jobs/auto/commcare-create-user",draft:!1,tags:[],version:"current",frontMatter:{title:"Create user",sidebar_label:"\ud83d\udcdc Create user",id:"commcare-create-user",keywords:["library","job","expression","commcare","post","submitXls"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Bulk upload obat lookup-table",permalink:"/adaptors/library/jobs/auto/commcare-asri-bulk-upload"},next:{title:"Q3 2022 Update HH Name in CommCare",permalink:"/adaptors/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27"}},s={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...a}=e;return(0,n.yg)(p,(0,t.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\ud83d\udcdc ",(0,n.yg)("em",null,"This job is an official example from OpenFn.")),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Create user"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-commcare"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare"},(0,n.yg)("inlineCode",{parentName:"a"},"latest"))),(0,n.yg)("li",{parentName:"ul"},"Created date unknown"),(0,n.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"100")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"post"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"submitXls")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// Create a user and submit their case to commcare\n\npost('user', {\n  username: 'janedoe42',\n  password: 'qwer12345',\n  first_name: 'Jane',\n  last_name: 'Doe',\n  default_phone_number: '+50253311399',\n  email: 'jdoe@example.org',\n});\n\nsubmitXls([{ name: $.data.username, feeling_sick: 'No' }], {\n  case_type: 'pregnancy',\n  search_field: 'case_id',\n  search_column: 'case_id',\n  name_column: 'name',\n  create_new_cases: 'on',\n});\n\n")))}m.isMDXComponent=!0},15680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),y=n,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return a?t.createElement(d,i(i({ref:r},u),{},{components:a})):t.createElement(d,i({ref:r},u))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);