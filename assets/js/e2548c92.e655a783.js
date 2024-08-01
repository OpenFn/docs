"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8275],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,c=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return t?n.createElement(c,i(i({ref:a},d),{},{components:t})):n.createElement(c,i({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97136:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const o={title:"magpi developer readme",id:"magpi-readme",keywords:["adaptor","readme","magpi"]},i="magpi Adaptor developer README.md",p={unversionedId:"packages/magpi-readme",id:"packages/magpi-readme",title:"magpi developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/magpi",source:"@site/adaptors/packages/magpi-readme.md",sourceDirName:"packages",slug:"/packages/magpi-readme",permalink:"/adaptors/packages/magpi-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"magpi developer readme",id:"magpi-readme",keywords:["adaptor","readme","magpi"]},sidebar:"adaptors",previous:{title:"magpi changelog",permalink:"/adaptors/packages/magpi-changelog"},next:{title:"mailchimp@1.0.2",permalink:"/adaptors/packages/mailchimp-docs"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Fetch data from Magpi",id:"fetch-data-from-magpi",level:2},{value:"Using <code>fetchSurveyData</code>:",id:"using-fetchsurveydata",level:4},{value:"Submit new records",id:"submit-new-records",level:2},{value:"Using <code>submitRecord</code>:",id:"using-submitrecord",level:4},{value:"Magpi Outbound API Parameters:",id:"magpi-outbound-api-parameters",level:4},{value:"Development",id:"development",level:2}],d={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"magpi-adaptor-developer-readmemd"},"magpi Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/magpi"},"https://github.com/OpenFn/adaptors/tree/main/packages/magpi")),(0,r.yg)("h1",{id:"language-magpi"},"Language Magpi"),(0,r.yg)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.yg)("a",{parentName:"p",href:"http://support.magpi.com/support/solutions/articles/4839-magpi-inbound-api"},"Magpi inbound API"),"\nand the\n",(0,r.yg)("a",{parentName:"p",href:"http://support.magpi.com/support/solutions/articles/4865-magpi-outbound-api"},"Magpi outbound API"),"."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"N.B.: The Magpi API is under development and this pack may change.")),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/magpi-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h2",{id:"fetch-data-from-magpi"},"Fetch data from Magpi"),(0,r.yg)("p",null,"Allows you to fetch data from Magpi and post it elsewhere."),(0,r.yg)("h4",{id:"using-fetchsurveydata"},"Using ",(0,r.yg)("inlineCode",{parentName:"h4"},"fetchSurveyData"),":"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.magpi.com/api/surveydata/v2?username=taylordowns2000&accesstoken=blahblahblah&surveyid=921409679070"},"https://www.magpi.com/api/surveydata/v2?username=taylordowns2000&accesstoken=blahblahblah&surveyid=921409679070")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSurveyData({\n  surveyId: '37479',\n  afterDate: '2016-01-01',\n  beforeDate: '2100-01-01',\n  postUrl: 'https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url',\n});\n")),(0,r.yg)("h2",{id:"submit-new-records"},"Submit new records"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"wip:")," This will allow you to push data to Magpi to create a new record for a\nform which exists in a user account."),(0,r.yg)("h4",{id:"using-submitrecord"},"Using ",(0,r.yg)("inlineCode",{parentName:"h4"},"submitRecord"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"submitRecord(1, 2);\n")),(0,r.yg)("h4",{id:"magpi-outbound-api-parameters"},"Magpi Outbound API Parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"username"),": The account username."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"accesstoken"),": The accesstoken generated on the site. Each accesstoken is\nassociated with the user who generated."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"surveyid"),": The surveyid is not the survey's name. The surveyid can be\nobtained from the list of forms generated in 1 above."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"startdate"),": Start date of the data to be returned. Filtering is done based on\nthe DateStamp and is inclusive.(Optional). The date format should be the same\none as the one on the data tab/ The date format should be the same one as the\none on the data tab"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"enddate"),": End date of the data to be returned. Filtering is done based on the\nDateStamp and is inclusive.(Optional)")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);