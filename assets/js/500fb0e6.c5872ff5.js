"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63761],{44215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={title:"05/ Submit employee evaluation",sidebar_label:"05/ Submit employee evaluation",id:"05-Submit-employee-evaluation-2019-12-03",keywords:["library","job","expression","http","alterState","post"]},i=void 0,s={unversionedId:"library/jobs/auto/05-Submit-employee-evaluation-2019-12-03",id:"library/jobs/auto/05-Submit-employee-evaluation-2019-12-03",title:"05/ Submit employee evaluation",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/05-Submit-employee-evaluation-2019-12-03.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/05-Submit-employee-evaluation-2019-12-03",permalink:"/adaptors/library/jobs/auto/05-Submit-employee-evaluation-2019-12-03",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"05/ Submit employee evaluation",sidebar_label:"05/ Submit employee evaluation",id:"05-Submit-employee-evaluation-2019-12-03",keywords:["library","job","expression","http","alterState","post"]},sidebar:"adaptors",previous:{title:"05b/Update ODK eval form",permalink:"/adaptors/library/jobs/auto/05b-Update-ODK-eval-form-2019-12-19"},next:{title:"04b/ Update ODK form",permalink:"/adaptors/library/jobs/auto/04b-Update-ODK-form-2019-12-03"}},p={},l=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:l},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: 05/ Submit employee evaluation"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created over 4 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated over 4 years ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"post")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// @trigger 'when employee evaluation form arrives'\n// @credential 'ihris-mifos-combined'\n// @adaptor 'http'\n// -----------------------------------------------------------------------------\n\nalterState(state => {\n  state.payee = state.data.EvaluationForm;\n  state.saved_config = state.configuration;\n  return state;\n});\n\npost(\n  `${state.configuration.mifosUrl}/channel/transactions`,\n  {\n    authentication: state.configuration.mifosAuth,\n    headers: {\n      'content-type': 'application/json',\n      'X-Tenant-Identifier': 'tn07',\n    },\n    body: state => {\n      return {\n        payer: {\n          partyIdInfo: {\n            partyIdType: 'MSISDN',\n            partyIdentifier: '27710407990',\n          },\n        },\n        payee: {\n          partyIdInfo: {\n            partyIdType: 'MSISDN',\n            partyIdentifier: state.payee.social_worker_id.split('_')[1],\n          },\n        },\n        amountType: 'SEND',\n        transactionType: {\n          scenario: 'PAYMENT',\n          initiator: 'PAYER',\n          initiatorType: 'CONSUMER',\n        },\n        amount: {\n          currency: 'USD',\n          // Calculate the bonus amount - for now just use number of clients seen * 100\n          amount: state.payee.client_counts*100,\n        },\n      };\n    },\n  },\n  state => {\n    const today = new Date();\n    state.data.person_payment = {\n      'form[person_payments][0][0][fields][id]': 'person_payments|0',\n      'form[person_payments][0][0][fields][parent]':\n        'person|' + state.payee.social_worker_id.split('_')[0],\n      'form[person_payments][0][0][fields][date][day]': today.getDate(),\n      'form[person_payments][0][0][fields][date][month]':\n        today.getMonth() + 1,\n      'form[person_payments][0][0][fields][date][year]': today.getFullYear(),\n      'form[person_payments][0][0][fields][amount]': state.payee.client_counts*100,\n      'form[person_payments][0][0][fields][transactionId]':\n        state.data.body.transactionId,\n      'form[person_payments][0][0][fields][status]':\n        state.data.body.transactionId ? 'initiated' : 'failed',\n    };\n    // =====================================================================\n    // Create \"initiated\" payments in iHRIS with their mifos external IDs ==\n    post(\n      `${state.saved_config.ihrisUrl}/manage/person_payments`,\n      {\n        authentication: state.configuration.ihrisAuth,\n        formData: state => {\n          state.data.person_payment.submit_type = 'confirm';\n          console.log('PaymentData: ' + state.data.person_payment);\n          return state.data.person_payment;\n        },\n      },\n      post(`${state.saved_config.ihrisUrl}/manage/person_payments`, {\n        authentication: state.configuration.ihrisAuth,\n        formData: state => {\n          state.references[1].person_payment.submit_type = 'save';\n          return state.references[1].person_payment;\n        },\n        options: {\n          successCodes: [302],\n        },\n      })\n    )(state);\n  }\n);\n\n\n")))}m.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(n),c=r,d=y["".concat(p,".").concat(c)]||y[c]||m[c]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);