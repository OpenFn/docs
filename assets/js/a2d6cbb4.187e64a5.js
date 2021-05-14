(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5574],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30728:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o={title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]},l={unversionedId:"jobs/auto/CommCare-FHIR",id:"jobs/auto/CommCare-FHIR",isDocsHomePage:!1,title:"Create encounter in OpenHIM",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/CommCare-FHIR.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/CommCare-FHIR",permalink:"/library/jobs/auto/CommCare-FHIR",version:"current",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",frontMatter:{title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]},sidebar:"library",previous:{title:"Extract Vitas Data",permalink:"/library/jobs/auto/Extract Vitas Data-2021-05-11"},next:{title:"mBrana",permalink:"/library/jobs/auto/mBrana-2021-05-11"}},u=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("em",null,"This job is an official example from OpenFn.")),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Create encounter in OpenHIM"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-openhim"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created date unknown"),(0,i.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"100")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// CommCare form submission mapped to the FHIR patient encounter standard,\n// submitted by Simon Kelly @ Dimagi.\nencounter(\n  fields(\n    field('resourceType', 'Encounter'),\n    field('status', 'finished'),\n    field('type', function (state) {\n      return [\n        {\n          coding: [\n            {\n              system: 'momconnect:type',\n              code: '8',\n            },\n          ],\n        },\n      ];\n    }),\n    field('contained', function (state) {\n      return [\n        {\n          resourceType: 'Patient',\n          id: 'patient',\n          identifier: [\n            {\n              use: 'official',\n              system: 'momconnect:sanid',\n              value: dataValue('properties.id_number')(state),\n            },\n          ],\n          name: [\n            {\n              use: 'official',\n              family: [dataValue('properties.family_name')(state)],\n              given: [dataValue('properties.given_name')(state)],\n              text: dataValue('properties.given_name')(state).concat(\n                ' ',\n                dataValue('properties.family_name')(state)\n              ),\n            },\n          ],\n          gender: 'female',\n          birthDate: dataValue('properties.dob')(state),\n          telecom: [\n            {\n              system: 'phone',\n              value: dataValue('properties.msisdn')(state),\n            },\n          ],\n          communication: [\n            {\n              language: {\n                coding: [\n                  {\n                    system: 'urn:ietf:bcp:47',\n                    code: dataValue('properties.language_code')(state),\n                  },\n                ],\n              },\n              preferred: true,\n            },\n          ],\n        },\n        {\n          resourceType: 'Observation',\n          id: 'edd',\n          code: {\n            coding: [\n              {\n                system: 'http://loinc.org',\n                code: '11778-8',\n                display: 'Delivery date Estimated',\n              },\n            ],\n          },\n          valueDateTime: dataValue('properties.edd')(state),\n          status: 'preliminary',\n        },\n      ];\n    }),\n    field('patient', function (state) {\n      return {\n        reference: '#patient',\n      };\n    }),\n    field('period', function (state) {\n      return {\n        start: dataValue('properties.visit_date')(state),\n      };\n    }),\n    field('extension', function (state) {\n      return [\n        {\n          url: 'momconnect:mha',\n          valueInteger: 2,\n        },\n        {\n          url: 'momconnect:swt',\n          valueInteger: 3,\n        },\n        {\n          url: 'momconnect:dmsisdn',\n          valueString: '+27831111111',\n        },\n      ];\n    })\n  )\n);\n\n")))}p.isMDXComponent=!0}}]);