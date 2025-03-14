"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99924],{26698:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=a(58168),r=(a(96540),a(15680));const i={title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},o=void 0,l={unversionedId:"library/jobs/auto/01-send-mailgun-email-2018-12-04",id:"library/jobs/auto/01-send-mailgun-email-2018-12-04",title:"01 send mailgun email",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/01-send-mailgun-email-2018-12-04.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/01-send-mailgun-email-2018-12-04",permalink:"/adaptors/library/jobs/auto/01-send-mailgun-email-2018-12-04",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc send email",permalink:"/adaptors/library/jobs/auto/send-mail-in-mailgun"},next:{title:"mailgun changelog",permalink:"/adaptors/packages/mailgun-changelog"}},s={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:u},p="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: 01 send mailgun email"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-mailgun"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created over 6 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated over 6 years ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"send")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('from', 'aleksa@openfn.org'),\n    field('to', 'aleksa@openfn.org, aleksa@verasolutions.org'),\n    field('subject', 'Kobo: New Form Submitted'),\n      //You can write your own custom, anonymous functions to do whatever you desire - see function(state)\n    field('text', function(state) {\n      const msgText = \"A form was submitted by \"+ dataValue(\"_submitted_by\")(state) + \". Please login to review!\"\n      return msgText\n       //result will be an email with body text \"A form was submitted by [Kobo Submitted By User]. Please login to review!\" \n\n    })\n  ) \n )\n")))}m.isMDXComponent=!0},15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return a?t.createElement(g,o(o({ref:n},d),{},{components:a})):t.createElement(g,o({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);