"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Making the Case for Health Information Exchanges",author:"Aicha Diallo",author_url:"https://github.com/daissatou2",author_image_url:"https://avatars.githubusercontent.com/daissatou2",featured:!0},i=void 0,s={permalink:"/blog/2021/10/20/the-case-for-health-information-exchange",editUrl:"https://github.com/openfn/docs/edit/main/blog/2021-10-20-the-case-for-health-information-exchange.md",source:"@site/blog/2021-10-20-the-case-for-health-information-exchange.md",title:"Making the Case for Health Information Exchanges",description:"I attended the OpenHIE Academy Live Event last week and learned about the",date:"2021-10-20T00:00:00.000Z",formattedDate:"October 20, 2021",tags:[],readingTime:2.145,hasTruncateMarker:!0,authors:[{name:"Aicha Diallo",url:"https://github.com/daissatou2",imageURL:"https://avatars.githubusercontent.com/daissatou2"}],frontMatter:{title:"Making the Case for Health Information Exchanges",author:"Aicha Diallo",author_url:"https://github.com/daissatou2",author_image_url:"https://avatars.githubusercontent.com/daissatou2",featured:!0},prevItem:{title:"Data Integration to better safeguard the world\u2019s wildlife",permalink:"/blog/2022/06/28/Data-Integration-to-better-safeguard-the-world\u2019s-wildlife"},nextItem:{title:"Platforms, Processes and Legitimate Freedom at the National Government Level",permalink:"/blog/2021/07/30/processes-and-open-source-as-choice"}},l={authorsImageUrls:[void 0]},c=[{value:"OpenFn&#39;s Role",id:"openfns-role",level:3}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I attended the OpenHIE Academy Live Event last week and learned about the\nfunction and application of the OpenHIE Architecture framework and its\ncomponents. What's a health information exchange, and what does it mean for\npeople in everyday terms?"),(0,r.kt)("p",null,"A health information exchange allows for health data to be entered once and\nreused across different systems by defining standards and communication\nprotocols that enable many systems to work with the same data."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://wiki.ohie.org/download/attachments/41943663/openimis%20hie%20arch.png?version=1&modificationDate=1573566637897&api=v2",alt:"OpenHIE Framework",title:"OpenHIE Framework"})),(0,r.kt)("p",null,"We can imagine various real world use cases for implementing a health\ninformation exchange architecture. My cousin Mariam\u2019s experience with healthcare\nin Conakry serves as an example. After visiting three clinics and hospitals in\nConakry, Mariam was diagnosed with kidney stones at the fourth one. All of the\ndata that was collected in the first three clinics were not accessible to her\ndoctor at the fourth one. At each clinic the same data was collected and doctors\nrelied on Mariam to provide her medical history. They asked about past visits,\nprevious diagnoses, prescriptions, lab results, etc. Her medical history was\nspread across paper and electronic systems, in her home, at different\npharmacies, and in labs. Imagine how much faster she could have been diagnosed\nand treated if her healthcare workers had access to a comprehensive view of her\nmedical history."),(0,r.kt)("p",null,"A health information exchange would mitigate these issues and allow data to be\nstored in a single database. All authorized stakeholders would be able to access\nand update this single health record and Mariam wouldn\u2019t need to stress about\nher paper prescription she lost from years ago. ",(0,r.kt)("strong",{parentName:"p"},"Patient data is only one piece\nof the puzzle and other important health data such as information on facilities,\nproviders, and supplies can also be managed in the health information exchange\nsystem.")),(0,r.kt)("h3",{id:"openfns-role"},"OpenFn's Role"),(0,r.kt)("p",null,"Two key components of a health information exchange are ",(0,r.kt)("strong",{parentName:"p"},"interoperability and\ndata standards.")," The OpenFn Integration Toolkit is a tool for interoperability\nsolution design, implementation, and adherence to data standards in health\ninformation exchange\u2013key for organizations seeking to securely increase\ninteroperability across systems and partners, reduce costs, strengthen health\nsystems, and improve service delivery. Released this year, the Toolkit is a\ndigital global good that helps health and humanitarian organizations and\ngovernments automate key processes and integrate critical information systems.\nIt was developed in partnership with 45+ social sector partners, incorporating\nresources and learnings from dozens of implementations to deliver a suite of\nopen-source documentation, implementation tools, and a templates library that\nfast-tracks interoperability and automation projects."),(0,r.kt)("p",null,"For more information visit the links below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://academy.ohie.org/"},"https://academy.ohie.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/"},"https://docs.openfn.org/documentation/"))),(0,r.kt)("p",null,"\u2014 Aicha"))}d.isMDXComponent=!0}}]);