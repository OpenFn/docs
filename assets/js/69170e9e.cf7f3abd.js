(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),s=t(8),o=(t(0),t(266)),a={},i={unversionedId:"jobs/promise-all-nested-requests",id:"jobs/promise-all-nested-requests",isDocsHomePage:!1,title:"promise-all-nested-requests",description:"`js",source:"@site/library/jobs/promise-all-nested-requests.md",sourceDirName:"jobs",slug:"/jobs/promise-all-nested-requests",permalink:"/library/jobs/promise-all-nested-requests",version:"current",frontMatter:{},sidebar:"library",previous:{title:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",permalink:"/library/jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"},next:{title:"send-mail-in-mailgun",permalink:"/library/jobs/send-mail-in-mailgun"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"each(\n  '$.enrolledUsers[10]',\n  alterState(state => {\n    const { host } = state.configuration;\n    const { id } = state.data;\n    const usersfields = [];\n    return get(\n      host,\n      {\n        query: {\n          wstoken: state.token,\n          wsfunction: 'core_user_get_users_by_field',\n          field: 'id',\n          'values[]': id,\n          moodlewsrestformat: 'json',\n        },\n      },\n      state => {\n        const { id, phone1, address } = state.data[0];\n        const fields = [\n          { id, 'Tel\xe9fono m\xf3vil': phone1, Direcci\xf3n: address, grades: [] },\n        ];\n        console.log(state.courseIds);\n        let promises = [];\n        state.courseIds.forEach(courseid => {\n          promises.push(\n            get(\n              host,\n              {\n                query: {\n                  wstoken: state.token,\n                  wsfunction: 'gradereport_user_get_grade_items',\n                  userid: id,\n                  courseid,\n                  moodlewsrestformat: 'json',\n                },\n              },\n              state => {\n                console.log('fetched');\n                const { graderaw } = state.data.usergrades[0].gradeitems[0];\n                const grades = [{ courseid, graderaw }];\n                fields[0].grades.push(...grades);\n              }\n            )(state)\n          );\n        });\n\n        return Promise.all(promises).then(() => {\n          usersfields.push(...fields);\n          return {\n            ...state,\n            usersfields,\n            enrolledUsers: [],\n            response: [],\n          };\n        });\n      }\n    )(state);\n  })\n);\n")))}u.isMDXComponent=!0},266:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),s=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),u=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},f=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?s.a.createElement(m,i(i({ref:n},l),{},{components:t})):s.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);