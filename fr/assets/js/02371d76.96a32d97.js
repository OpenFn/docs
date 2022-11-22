"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[37274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,p(p({ref:t},d),{},{components:n})):a.createElement(f,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"openmrs developer readme",id:"openmrs-readme",keywords:["adaptor","readme","openmrs"]},p="Developer README for the openmrs adaptor",i={unversionedId:"packages/openmrs-readme",id:"packages/openmrs-readme",title:"openmrs developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/openmrs",source:"@site/adaptors/packages/openmrs-readme.md",sourceDirName:"packages",slug:"/packages/openmrs-readme",permalink:"/fr/adaptors/packages/openmrs-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs developer readme",id:"openmrs-readme",keywords:["adaptor","readme","openmrs"]},sidebar:"library",previous:{title:"openmrs changelog",permalink:"/fr/adaptors/packages/openmrs-changelog"},next:{title:"postgresql@3.4.2",permalink:"/fr/adaptors/packages/postgresql-docs"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:3},{value:"Get a patient by some criteria",id:"get-a-patient-by-some-criteria",level:3},{value:"Example of searching for patients based on their <code>EMR Id</code>",id:"example-of-searching-for-patients-based-on-their-emr-id",level:4},{value:"Create an Encounter",id:"create-an-encounter",level:3},{value:"Make a request to any OpenMRS endpoint",id:"make-a-request-to-any-openmrs-endpoint",level:3},{value:"Create new patient",id:"create-new-patient",level:2},{value:"Development",id:"development",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-openmrs-adaptor"},"Developer README for the openmrs adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/openmrs"},"https://github.com/OpenFn/adaptors/tree/main/packages/openmrs")),(0,r.kt)("h1",{id:"language-openmrs"},"Language OpenMRS"),(0,r.kt)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openmrs.org/display/docs/API"},"OpenMRS API"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://burkeware.com/openmrs-data-model/openmrs-data-model-1.11.html#"},"OpenMRS Data Model Explorer")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "instanceUrl": "http://openmrs.com/instance/url",\n  "username": "admin@openmrs",\n  "password": "supersecretopenmrspassword"\n}\n')),(0,r.kt)("h3",{id:"get-a-patient-by-some-criteria"},"Get a patient by some criteria"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// getPatient({ uuid: '516af9aa-0402-4e11-ad79-e394fdec0c91' });\n// getPatient({ uuid: dataValue('patientId')(state) });\ngetPatient({\n  uuid: state => state.data[0].uuid,\n});\n")),(0,r.kt)("h4",{id:"example-of-searching-for-patients-based-on-their-emr-id"},"Example of searching for patients based on their ",(0,r.kt)("inlineCode",{parentName:"h4"},"EMR Id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getPatients(\n  {\n    identifier: state => state.data.emrId,\n    v: 'full',\n  },\n  {\n    exactlyOne: true,\n  }\n);\n")),(0,r.kt)("h3",{id:"create-an-encounter"},"Create an Encounter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createEncounter({\n  encounterDatetime: dataValue('visit_date'), //dynamically fill with source app data\n  patient: dataValue('uuid'),\n  encounterType: dataValue('visit_type'),\n  location: dataValue('location.uuid'),\n  encounterProviders: [\n    {\n      provider: dataValue('provider_name'),\n      encounterRole: '240b26f9-dd88-4172-823d-4a8bfeb7841f', //hardcoded value\n    },\n  ],\n});\n")),(0,r.kt)("h3",{id:"make-a-request-to-any-openmrs-endpoint"},"Make a request to any OpenMRS endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"req({ method: 'GET', url: '/ws/rest/v1/concept' }, state => {\n  console.log(JSON.stringify(state, null, 2));\n  return state;\n});\n")),(0,r.kt)("h2",{id:"create-new-patient"},"Create new patient"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"patient(\n  fields(\n    field('gender', 'M'),\n    field('names', function (state) {\n      return [\n        {\n          patient_id: dataValue('form.patientId')(state),\n          creator: dataValue('form.user')(state),\n        },\n      ];\n    })\n  )\n);\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}c.isMDXComponent=!0}}]);