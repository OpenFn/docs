"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Versions of the Portability Proposal"},i=void 0,s={unversionedId:"portability-versions",id:"portability-versions",title:"Versions of the Portability Proposal",description:"OpenFn is currently designing a portable project configuration schema that can",source:"@site/docs/portability-versions.md",sourceDirName:".",slug:"/portability-versions",permalink:"/documentation/portability-versions",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/portability-versions.md",tags:[],version:"current",frontMatter:{title:"Versions of the Portability Proposal"}},l={},p=[{value:"Proposal v3",id:"proposal-v3",level:2},{value:"Proposal v2",id:"proposal-v2",level:2},{value:"Proposal v1",id:"proposal-v1",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenFn is currently designing a portable project configuration schema that can\nbe used to import or export projects between OpenFn/platform and OpenFn/engine."),(0,a.kt)("h2",{id:"proposal-v3"},"Proposal v3"),(0,a.kt)("p",null,"v3 introduces\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI schemes"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"file://"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs://")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: 'file://my-job.js' # URIs may be used (e.g., https://raw.githubusercontent.com/org/repo/my-job.js)\n    adaptor: '@openfn/language-common'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      alterState(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      alterState(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      alterState(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\ncredentials:\n  my-secret-credential:\n    username: '******' # Credential keys get exported, but values must be manually reentered\n    password: '******'\n  my-other-credential: 'file://gcp_credential.json' # And URIs may be specified directly for the credential body\n")),(0,a.kt)("h2",{id:"proposal-v2"},"Proposal v2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: >\n      registerPatient({\n        patient-id: state.data.id,\n        dob: state.data.birth\n      })\n    adaptor: '@openfn/language-openmrs'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      alterState(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      alterState(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      alterState(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\n# Note that credential keys get copied, but values must be manually entered\n# after the export is completed.\ncredentials:\n  my-secret-credential:\n    username: '******'\n    password: '******'\n")),(0,a.kt)("h2",{id:"proposal-v1"},"Proposal v1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const project = {\n  async: true,\n  triggers: {\n    uniqueTriggerId: {\n      // trigger properties\n    },\n    otherTrigger: {\n      // other trigger properties\n    },\n  },\n  credentials: {\n    // for now, credentials will not be synced //\n    // secret1: {\n    // username: 'mamadou',\n    // pass: 'shhh',\n  },\n  staticData: {\n    // static objects that can be accessed from any job\n  },\n  jobs: {\n    payHealthWorker: { trigger: 'otherTrigger' },\n    syncToSalesforce: {\n      expression: 'uri://github.com/jobs/expresion.js',\n      trigger: 'uniqueTriggerId',\n      credential: 'secret1',\n    },\n  },\n};\n")))}u.isMDXComponent=!0}}]);