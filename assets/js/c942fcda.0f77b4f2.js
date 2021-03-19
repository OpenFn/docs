(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(259)),i={layout:"post",title:"Product News: Enhanced Scheduled/Periodic Job Control",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["annoucement","tips"],featured:!1},c={permalink:"/articles/2020/07/14/cron-is-better-than-a-timer",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-07-14-cron-is-better-than-a-timer.md",source:"@site/articles/2020-07-14-cron-is-better-than-a-timer.md",description:"Hi all, this is a quick one from the product team at",date:"2020-07-14T00:00:00.000Z",formattedDate:"July 14, 2020",tags:[{label:"annoucement",permalink:"/articles/tags/annoucement"},{label:"tips",permalink:"/articles/tags/tips"}],title:"Product News: Enhanced Scheduled/Periodic Job Control",readingTime:1.81,truncated:!0,prevItem:{title:"Tracked entity instances in DHIS2",permalink:"/articles/2020/12/09/upsert-in-dhis2"},nextItem:{title:"Allow Yourself to Fail",permalink:"/articles/2020/07/02/allow-yourself-to-fail"}},s=[{value:"Scheduling is better than timing.",id:"scheduling-is-better-than-timing",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hi all, this is a quick one from the product team at\n",Object(a.b)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," \u2014 we've made a major upgrade to how timed/period\njobs work."),Object(a.b)("p",null,'In the past, if you weren\'t using OpenFn to drive some real-time (or\n"event-based") automation, you\'d need to set up an "interval trigger." Like the\nphoto above, this was essentially a sand timer. Set your trigger to ',Object(a.b)("inlineCode",{parentName:"p"},"10")," seconds\nand your job fetches data from DHIS2, some regional public health data set, or\nwhatever, then cleans, transforms, and loads it into some other system."),Object(a.b)("p",null,"For the most part, this has got the job done for the last 5 years, but as our\nNGO and government clients came up with increasingly specific requirements on\nnot only how often but ",Object(a.b)("em",{parentName:"p"},"when")," a crucial job gets executed, we began finding\nourselves creating little customizations for them on a once-off basis. We're\nhappy to annouce that as of ",Object(a.b)("inlineCode",{parentName:"p"},"v1.75")," (released today), you can now schedule jobs\nto run based on ",Object(a.b)("inlineCode",{parentName:"p"},"cron")," expressions, giving you incredible control over when your\ntasks get executed."),Object(a.b)("h3",{id:"scheduling-is-better-than-timing"},"Scheduling is better than timing."),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"cron"),", you can choose to run a job every minute by typing ",Object(a.b)("inlineCode",{parentName:"p"},"* * * * *"),"."),Object(a.b)("p",null,"Or maybe you've got a batch sync that you want to take place while your users\nare asleep\u2014why not run it every night at 11pm with ",Object(a.b)("inlineCode",{parentName:"p"},"23 * * * *"),"."),Object(a.b)("p",null,"What if you've got to submit reuqests for medical inventory only during the\nonset of flu season? Simply type ",Object(a.b)("inlineCode",{parentName:"p"},"0 0 1 2-4 *")," and your job will run at midnight\nthe 1st of the month, from February through April."),Object(a.b)("p",null,"You can still run jobs at the click of a button and create timers with\nexpressions like ",Object(a.b)("inlineCode",{parentName:"p"},"*/10 * * * *"),' for "every 10 minutes", but scheduling with cron\ngives OpenFn.org users so much more control over how they run their\norganizations. (And that\'s a good thing.)'),Object(a.b)("p",null,"If you're keen on learning by doing but don't have an OpenFn account yet,\n",Object(a.b)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"sign up for free")," or mess around with cron\nexpressions at ",Object(a.b)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),",\na brilliant site to quickly build complex cron expressions."),Object(a.b)("p",null,"That's all from product for today. Speak soon."),Object(a.b)("p",null,"Taylor"))}u.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);