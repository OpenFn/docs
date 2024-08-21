"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[81471],{14412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const o={title:"openmrs developer readme",id:"openmrs-readme",keywords:["adaptor","readme","openmrs"]},p="openmrs Adaptor developer README.md",i={unversionedId:"packages/openmrs-readme",id:"packages/openmrs-readme",title:"openmrs developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/openmrs",source:"@site/adaptors/packages/openmrs-readme.md",sourceDirName:"packages",slug:"/packages/openmrs-readme",permalink:"/adaptors/packages/openmrs-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs developer readme",id:"openmrs-readme",keywords:["adaptor","readme","openmrs"]},sidebar:"adaptors",previous:{title:"openmrs changelog",permalink:"/adaptors/packages/openmrs-changelog"},next:{title:"openspp@2.0.1",permalink:"/adaptors/packages/openspp-docs"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Get a patient by some criteria",id:"get-a-patient-by-some-criteria",level:3},{value:"Example of searching for patients based on their <code>EMR Id</code>",id:"example-of-searching-for-patients-based-on-their-emr-id",level:4},{value:"Create an Encounter",id:"create-an-encounter",level:3},{value:"Make a request to any OpenMRS endpoint",id:"make-a-request-to-any-openmrs-endpoint",level:3},{value:"Create new patient",id:"create-new-patient",level:2},{value:"Development",id:"development",level:2}],d={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"openmrs-adaptor-developer-readmemd"},"openmrs Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/openmrs"},"https://github.com/OpenFn/adaptors/tree/main/packages/openmrs")),(0,r.yg)("h1",{id:"language-openmrs"},"Language OpenMRS"),(0,r.yg)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.yg)("a",{parentName:"p",href:"https://rest.openmrs.org/?javascript#openmrs-rest-api"},"OpenMRS Rest API")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://burkeware.com/openmrs-data-model/openmrs-data-model-1.11.html#"},"OpenMRS Data Model Explorer")),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openmrs-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h3",{id:"get-a-patient-by-some-criteria"},"Get a patient by some criteria"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// getPatient({ uuid: '516af9aa-0402-4e11-ad79-e394fdec0c91' });\n// getPatient({ uuid: dataValue('patientId')(state) });\ngetPatient({\n  uuid: state => state.data[0].uuid,\n});\n")),(0,r.yg)("h4",{id:"example-of-searching-for-patients-based-on-their-emr-id"},"Example of searching for patients based on their ",(0,r.yg)("inlineCode",{parentName:"h4"},"EMR Id")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getPatients(\n  {\n    identifier: state => state.data.emrId,\n    v: 'full',\n  },\n  {\n    exactlyOne: true,\n  }\n);\n")),(0,r.yg)("h3",{id:"create-an-encounter"},"Create an Encounter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"createEncounter({\n  encounterDatetime: dataValue('visit_date'), //dynamically fill with source app data\n  patient: dataValue('uuid'),\n  encounterType: dataValue('visit_type'),\n  location: dataValue('location.uuid'),\n  encounterProviders: [\n    {\n      provider: dataValue('provider_name'),\n      encounterRole: '240b26f9-dd88-4172-823d-4a8bfeb7841f', //hardcoded value\n    },\n  ],\n});\n")),(0,r.yg)("h3",{id:"make-a-request-to-any-openmrs-endpoint"},"Make a request to any OpenMRS endpoint"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('/ws/rest/v1/patient', { q: 'mohammed' }, state => {\n  console.log(JSON.stringify(state, null, 2));\n  return state;\n});\n")),(0,r.yg)("h2",{id:"create-new-patient"},"Create new patient"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"createPatient(\n  fields(\n    field('gender', 'M'),\n    field('names', function (state) {\n      return [\n        {\n          patient_id: dataValue('form.patientId')(state),\n          creator: dataValue('form.user')(state),\n        },\n      ];\n    })\n  )\n);\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,p(p({ref:n},d),{},{components:t})):a.createElement(g,p({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);