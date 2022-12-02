"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[19624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Promises and nested requests",sidebar_label:"\ud83d\udcdc Promises and nested requests",id:"promise-all-nested-requests",keywords:["library","job","expression","http","alterState","each","get","Promise"]},o=void 0,i={unversionedId:"library/jobs/auto/promise-all-nested-requests",id:"library/jobs/auto/promise-all-nested-requests",title:"Promises and nested requests",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/promise-all-nested-requests.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/promise-all-nested-requests",permalink:"/adaptors/library/jobs/auto/promise-all-nested-requests",draft:!1,tags:[],version:"current",frontMatter:{title:"Promises and nested requests",sidebar_label:"\ud83d\udcdc Promises and nested requests",id:"promise-all-nested-requests",keywords:["library","job","expression","http","alterState","each","get","Promise"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Chaining HTTP Requests",permalink:"/adaptors/library/jobs/auto/complex-http-request-chains"},next:{title:"\ud83d\udcdc Timeout to create a delay",permalink:"/adaptors/library/jobs/auto/timeout"}},l={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Promises and nested requests"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  '$.enrolledUsers[10]',\n  alterState(state => {\n    const { host } = state.configuration;\n    const { id } = state.data;\n    const usersfields = [];\n    return get(\n      host,\n      {\n        query: {\n          wstoken: state.token,\n          wsfunction: 'core_user_get_users_by_field',\n          field: 'id',\n          'values[]': id,\n          moodlewsrestformat: 'json',\n        },\n      },\n      state => {\n        const { id, phone1, address } = state.data[0];\n        const fields = [\n          { id, 'Tel\xe9fono m\xf3vil': phone1, Direcci\xf3n: address, grades: [] },\n        ];\n        console.log(state.courseIds);\n        let promises = [];\n        state.courseIds.forEach(courseid => {\n          promises.push(\n            get(\n              host,\n              {\n                query: {\n                  wstoken: state.token,\n                  wsfunction: 'gradereport_user_get_grade_items',\n                  userid: id,\n                  courseid,\n                  moodlewsrestformat: 'json',\n                },\n              },\n              state => {\n                console.log('fetched');\n                const { graderaw } = state.data.usergrades[0].gradeitems[0];\n                const grades = [{ courseid, graderaw }];\n                fields[0].grades.push(...grades);\n              }\n            )(state)\n          );\n        });\n\n        return Promise.all(promises).then(() => {\n          usersfields.push(...fields);\n          return {\n            ...state,\n            usersfields,\n            enrolledUsers: [],\n            response: [],\n          };\n        });\n      }\n    )(state);\n  })\n);\n\n")))}d.isMDXComponent=!0}}]);