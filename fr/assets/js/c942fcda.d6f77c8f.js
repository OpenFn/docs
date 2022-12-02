"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[54246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={layout:"post",title:"Product News: Enhanced Scheduled/Periodic Job Control",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["annoucement","tips"],featured:!1},i=void 0,s={permalink:"/fr/articles/2020/07/14/cron-is-better-than-a-timer",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-07-14-cron-is-better-than-a-timer.md",source:"@site/articles/2020-07-14-cron-is-better-than-a-timer.md",title:"Product News: Enhanced Scheduled/Periodic Job Control",description:"Hi all, this is a quick one from the product team at",date:"2020-07-14T00:00:00.000Z",formattedDate:"14 juillet 2020",tags:[{label:"annoucement",permalink:"/fr/articles/tags/annoucement"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:1.81,hasTruncateMarker:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],frontMatter:{layout:"post",title:"Product News: Enhanced Scheduled/Periodic Job Control",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["annoucement","tips"],featured:!1},prevItem:{title:"Tracked entity instances in DHIS2",permalink:"/fr/articles/2020/12/09/upsert-in-dhis2"},nextItem:{title:"Allow Yourself to Fail",permalink:"/fr/articles/2020/07/02/allow-yourself-to-fail"}},l={authorsImageUrls:[void 0]},u=[{value:"Scheduling is better than timing.",id:"scheduling-is-better-than-timing",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hi all, this is a quick one from the product team at\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," \u2014 we've made a major upgrade to how timed/period\njobs work."),(0,o.kt)("p",null,'In the past, if you weren\'t using OpenFn to drive some real-time (or\n"event-based") automation, you\'d need to set up an "interval trigger." Like the\nphoto above, this was essentially a sand timer. Set your trigger to ',(0,o.kt)("inlineCode",{parentName:"p"},"10")," seconds\nand your job fetches data from DHIS2, some regional public health data set, or\nwhatever, then cleans, transforms, and loads it into some other system."),(0,o.kt)("p",null,"For the most part, this has got the job done for the last 5 years, but as our\nNGO and government clients came up with increasingly specific requirements on\nnot only how often but ",(0,o.kt)("em",{parentName:"p"},"when")," a crucial job gets executed, we began finding\nourselves creating little customizations for them on a once-off basis. We're\nhappy to annouce that as of ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.75")," (released today), you can now schedule jobs\nto run based on ",(0,o.kt)("inlineCode",{parentName:"p"},"cron")," expressions, giving you incredible control over when your\ntasks get executed."),(0,o.kt)("h3",{id:"scheduling-is-better-than-timing"},"Scheduling is better than timing."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"cron"),", you can choose to run a job every minute by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"* * * * *"),"."),(0,o.kt)("p",null,"Or maybe you've got a batch sync that you want to take place while your users\nare asleep\u2014why not run it every night at 11pm with ",(0,o.kt)("inlineCode",{parentName:"p"},"23 * * * *"),"."),(0,o.kt)("p",null,"What if you've got to submit reuqests for medical inventory only during the\nonset of flu season? Simply type ",(0,o.kt)("inlineCode",{parentName:"p"},"0 0 1 2-4 *")," and your job will run at midnight\nthe 1st of the month, from February through April."),(0,o.kt)("p",null,"You can still run jobs at the click of a button and create timers with\nexpressions like ",(0,o.kt)("inlineCode",{parentName:"p"},"*/10 * * * *"),' for "every 10 minutes", but scheduling with cron\ngives OpenFn.org users so much more control over how they run their\norganizations. (And that\'s a good thing.)'),(0,o.kt)("p",null,"If you're keen on learning by doing but don't have an OpenFn account yet,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"sign up for free")," or mess around with cron\nexpressions at ",(0,o.kt)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),",\na brilliant site to quickly build complex cron expressions."),(0,o.kt)("p",null,"That's all from product for today. Speak soon."),(0,o.kt)("p",null,"Taylor"))}p.isMDXComponent=!0}}]);