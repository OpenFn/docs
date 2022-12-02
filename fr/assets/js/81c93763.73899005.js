"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,f=l["".concat(s,".").concat(d)]||l[d]||u[d]||o;return t?a.createElement(f,m(m({ref:n},c),{},{components:t})):a.createElement(f,m({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,m=new Array(o);m[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:r,m[1]=i;for(var p=2;p<o;p++)m[p]=t[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"commcare developer readme",id:"commcare-readme",keywords:["adaptor","readme","commcare"]},m="Developer README for the commcare adaptor",i={unversionedId:"packages/commcare-readme",id:"packages/commcare-readme",title:"commcare developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/commcare",source:"@site/adaptors/packages/commcare-readme.md",sourceDirName:"packages",slug:"/packages/commcare-readme",permalink:"/fr/adaptors/packages/commcare-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"commcare developer readme",id:"commcare-readme",keywords:["adaptor","readme","commcare"]},sidebar:"adaptors",previous:{title:"commcare changelog",permalink:"/fr/adaptors/packages/commcare-changelog"},next:{title:"common@1.7.5",permalink:"/fr/adaptors/packages/common-docs"}},s={},p=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:2},{value:"<code>fetchReportData</code> to pull aggregate data from CommCare",id:"fetchreportdata-to-pull-aggregate-data-from-commcare",level:2},{value:"Submitting data to CommCare HQ",id:"submitting-data-to-commcare-hq",level:2},{value:"Submit an XLS file",id:"submit-an-xls-file",level:3},{value:"submit",id:"submit",level:3},{value:"Development",id:"development",level:2}],c={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-commcare-adaptor"},"Developer README for the commcare adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/commcare"},"https://github.com/OpenFn/adaptors/tree/main/packages/commcare")),(0,r.kt)("h1",{id:"language-commcare"},"Language CommCare"),(0,r.kt)("p",null,"Language Pack for interacting with the CommCare API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Download+Report+Data"},"https://confluence.dimagi.com/display/commcarepublic/Download+Report+Data")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/Submission+API"},"https://confluence.dimagi.com/display/commcarepublic/Submission+API")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/javarosa/javarosa/wiki/FormSubmissionAPI"},"https://bitbucket.org/javarosa/javarosa/wiki/FormSubmissionAPI")),(0,r.kt)("p",null,"Accepted X-Form Spec from Dimagi: ",(0,r.kt)("a",{parentName:"p",href:"http://dimagi.github.io/xform-spec"},"http://dimagi.github.io/xform-spec")," Accepted\nX-Form Spec for Cases from Dimagi:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dimagi/commcare/wiki/casexml20"},"https://github.com/dimagi/commcare/wiki/casexml20")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("p",null,'The "appId" is the UUID which designates your commcare project as different from\neveryone elses. It can be found in the URL of your application when you first\nenter it from the project screen. I.e., the last part of this url:\n',(0,r.kt)("inlineCode",{parentName:"p"},"https://www.commcarehq.org/a/YOUR_PROJECT/apps/view/YOUR_APP_ID/")),(0,r.kt)("p",null,"Note that the username is your full email address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "the-long-uuid-in-the-url-that-designates-a-unique-commcare-project",\n  "password": "shhh",\n  "username": "test@openfn.org",\n  "applicationName": "some-proof-of-concept",\n  "hostUrl": "https://www.commcarehq.org"\n}\n')),(0,r.kt)("h2",{id:"fetchreportdata-to-pull-aggregate-data-from-commcare"},(0,r.kt)("inlineCode",{parentName:"h2"},"fetchReportData")," to pull aggregate data from CommCare"),(0,r.kt)("p",null,"It takes 3 arguments: reportId, params, and postUrl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetchReportData(\n  'reportId',\n  { limit: 10, offset: 2, state: 'Vermont' },\n  'http://www.openfn.org/inbox/secret-uuid'\n);\n")),(0,r.kt)("p",null,"simple body target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<data xmlns="http://openrosa.org/formdesigner/39A2CA97-2EB8-4A9C-A0D1-6AA666666A66">\n    <firstname>Something</firstname>\n    <lastname>Else</lastname>\n    <age>29</age>\n</data>\n')),(0,r.kt)("p",null,"complex body target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' ?>\n<data uiVersion="1" version="17" name="New Form" xmlns:jrm="http://dev.commcarehq.org/jr/xforms" xmlns="http://openrosa.org/formdesigner/1DFD8610-91E3-4409-BF8B-02D3B4FF3530">\n    <foo>bar</foo>\n    <n0:case case_id="ddb8e2b3-7ce0-43e4-ad45-d7a2eebe9169" user_id="user-xxx-eve" date_modified="2013-04-19T16:53:02.799-04" xmlns:n0="http://commcarehq.org/case/transaction/v2">\n        <n0:create>\n            <n0:case_name>bar</n0:case_name>\n            <n0:owner_id>user-xxx-eve</n0:owner_id>\n            <n0:case_type>member</n0:case_type>\n        </n0:create>\n    </n0:case>\n    <n1:meta xmlns:n1="http://openrosa.org/jr/xforms">\n        <n1:deviceID>A00000245706EE</n1:deviceID>\n        <n1:timeStart>2013-04-19T16:52:41.000-04</n1:timeStart>\n        <n1:timeEnd>2013-04-19T16:53:02.799-04</n1:timeEnd>\n        <n1:username>eve</n1:username>\n        <n1:userID>user-xxx-eve</n1:userID>\n        <n1:instanceID>b58df19c-efd5-4ecf-9581-65dda8b8787c</n1:instanceID>\n        <n2:appVersion xmlns:n2="http://commcarehq.org/xforms">CommCare ODK, version "2.4.1"(10083). App v19. CommCare Version 2.4. Build 10083, built on: March-12-2013</n2:appVersion>\n    </n1:meta>\n</data>\n')),(0,r.kt)("h2",{id:"submitting-data-to-commcare-hq"},"Submitting data to CommCare HQ"),(0,r.kt)("h3",{id:"submit-an-xls-file"},"Submit an XLS file"),(0,r.kt)("p",null,"This function bulk submit a JSON object as xls file to CommCare HQ"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"submitXls([{ name: 'Mamadou', phone: '000000' }], {\n  case_type: 'student',\n  search_field: 'external_id',\n  create_new_cases: 'on',\n});\n")),(0,r.kt)("h3",{id:"submit"},"submit"),(0,r.kt)("p",null,"Here we're just building the most basic JSON object, that will be converted to\nan XML object and posted as the ",(0,r.kt)("data",null)," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"submit(\n  fields(\n    field('@', function (state) {\n      return {\n        xmlns:\n          'http://openrosa.org/formdesigner/2BCC3E88-2D0D-4C07-8D4A-6B372F3799D9',\n      };\n    }),\n    field('paitent_namentosh', dataValue('first_name')),\n    field('question2', 'Some answer here.'),\n    field('question3', 'HKS'),\n    field('question4', 'item1'),\n    field('question5', 69855),\n    field('question6', 12)\n  )\n);\n")),(0,r.kt)("p",null,"An open rosa form submission body should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" ?>\n<data name="Patient Registration" uiVersion="1" version="9" xmlns="http://openrosa.org/formdesigner/2BCC3E88-2D0D-4C07-8D4A-6B372F3799D9" xmlns:jrm="http://dev.commcarehq.org/jr/xforms">\n  <paitent_namentosh>Taylor</paitent_namentosh>\n  <question2>Moruki</question2>\n  <question3>Hks</question3>\n  <question4>item1</question4>\n  <question5>69855</question5>\n  <question6>12</question6>\n  <n0:meta xmlns:n0="http://openrosa.org/jr/xforms">\n    <n0:deviceID>358239055789384</n0:deviceID>\n    <n0:timeStart>2015-08-21T16:21:59.807+02</n0:timeStart>\n    <n0:timeEnd>2015-08-21T16:22:15.987+02</n0:timeEnd>\n    <n0:username>openfn</n0:username>\n    <n0:userID>5fe615b3af2834cb5dca59f7466d6174</n0:userID>\n    <n0:instanceID>195e79eb-d823-46fe-9e4f-59b8327d5db2</n0:instanceID>\n    <n1:appVersion xmlns:n1="http://commcarehq.org/xforms">CommCare ODK, version &quot;2.22.0&quot;(370023). App v9. CommCare Version 2.22. Build 370023, built on: July-22-2015</n1:appVersion>\n  </n0:meta>\n</data>\n')),(0,r.kt)("p",null,"So the JSON emitted by your expression should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "name": "Patient Registration",\n    "uiVersion": "1",\n    "version": "9",\n    "xmlns": "http://openrosa.org/formdesigner/2BCC3E88-2D0D-4C07-8D4A-6B372F3799D9",\n    "xmlns:jrm": "http://dev.commcarehq.org/jr/xforms",\n    "paitent_namentosh": "Taylor",\n    "question2": " Moruki",\n    "question3": "Hks",\n    "question4": "item1",\n    "question5": "69855",\n    "question6": "12",\n    "n0:meta": {\n      "xmlns:n0": "http://openrosa.org/jr/xforms",\n      "n0:deviceID": "358239055789384",\n      "n0:timeStart": "2015-08-21T16:21:59.807+02",\n      "n0:timeEnd": "2015-08-21T16:22:15.987+02",\n      "n0:username": "openfn",\n      "n0:userID": "5fe615b3af2834cb5dca59f7466d6174",\n      "n0:instanceID": "195e79eb-d823-46fe-9e4f-59b8327d5db2",\n      "n1:appVersion": {\n        "xmlns:n1": "http://commcarehq.org/xforms",\n        "$t": "CommCare ODK, version \\"2.22.0\\"(370023). App v9. CommCare Version 2.22. Build 370023, built on: July-22-2015"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}l.isMDXComponent=!0}}]);