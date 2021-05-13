(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{277:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,d=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return a?r.a.createElement(d,c(c({ref:t},m),{},{components:a})):r.a.createElement(d,c({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),o=(a(0),a(277)),i={title:"CommCare"},c={unversionedId:"apps/commcare",id:"apps/commcare",isDocsHomePage:!1,title:"CommCare",description:"CommCare is a powerful data collection",source:"@site/docs/apps/commcare.md",sourceDirName:"apps",slug:"/apps/commcare",permalink:"/documentation/apps/commcare",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/commcare.md",version:"current",frontMatter:{title:"CommCare"},sidebar:"docs",previous:{title:"Community Health Toolkit",permalink:"/documentation/apps/cht"},next:{title:"Go.Data",permalink:"/documentation/apps/godata"}},p=[{value:"Integration Options",id:"integration-options",children:[{value:"Web API",id:"web-api",children:[]},{value:"Forward cases and/or forms from CommCare to OpenFn",id:"forward-cases-andor-forms-from-commcare-to-openfn",children:[]},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[]},{value:"Example Integrations",id:"example-integrations",children:[]}]}],m={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," is a powerful data collection\nplatform developed by Dimagi. It offers proprietary and open-source options, and\nis primarly best for mobile case management."),Object(o.b)("h2",{id:"integration-options"},"Integration Options"),Object(o.b)("p",null,"CommCare offers a number of integration options for extracting and/or loading\ndata to and from CommCare HQ."),Object(o.b)("h3",{id:"web-api"},"Web API"),Object(o.b)("p",null,"CommCare has different APIs for reading vs. updating data. Some helpful links:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Data APIs: ",Object(o.b)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Data+APIs"},"https://confluence.dimagi.com/display/commcarepublic/Data+APIs")),Object(o.b)("li",{parentName:"ul"},"Bulk Case Upload API to mass update case records:\n",Object(o.b)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"},"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"))),Object(o.b)("h3",{id:"forward-cases-andor-forms-from-commcare-to-openfn"},"Forward cases and/or forms from CommCare to OpenFn"),Object(o.b)("p",null,"See\n",Object(o.b)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare docs"),'\non how to configure this webhook to "push" data to an external system like\nOpenFn. This option is great for ',Object(o.b)("em",{parentName:"p"},"real-time")," data forwarding."),Object(o.b)("p",null,"Quick instructions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Go to "Project Settings".'),Object(o.b)("li",{parentName:"ol"},'Click "Data Forwarding".'),Object(o.b)("li",{parentName:"ol"},'"Add a forwarding location" for Cases, Forms, or both.'),Object(o.b)("li",{parentName:"ol"},"Specify JSON, using your OpenFn inbox URL as the target. See the\n",Object(o.b)("a",{parentName:"li",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare documentation"),"."),Object(o.b)("li",{parentName:"ol"},"Create a\n",Object(o.b)("a",{parentName:"li",href:"../build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form"},"message-filter trigger like this"),"."),Object(o.b)("li",{parentName:"ol"},"Set up a ",Object(o.b)("inlineCode",{parentName:"li"},"job")," running on that filter to process CommCare submissions or case\nupdates.")),Object(o.b)("p",null,"We recommend updating the ",Object(o.b)("inlineCode",{parentName:"p"},"Connection Settings")," to list emails that should be\nalerted if there is a data forwarding error. See docs:\n",Object(o.b)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications"},"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications")),Object(o.b)("h3",{id:"openfn-adaptors"},"OpenFn Adaptors"),Object(o.b)("p",null,"OpenFn implementations have leveraged both the ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CommCare")," adaptors to\nconnect with the CommCare API. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenFn/language-commcare"},"https://github.com/OpenFn/language-commcare"),"\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},"https://github.com/OpenFn/language-http")),Object(o.b)("h3",{id:"example-integrations"},"Example Integrations"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")))}l.isMDXComponent=!0}}]);