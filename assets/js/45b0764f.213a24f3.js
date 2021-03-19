(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),r=(n(0),n(259)),i={layout:"post",title:"Building Integrated Systems That Just Work",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["tips"],image:"/img/roads.jpg",featured:!1},s={permalink:"/blog/2020/06/04/Building-Integrated-Systems-That-Just-Work",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-06-04-Building-Integrated-Systems-That-Just-Work.md",source:"@site/blog/2020-06-04-Building-Integrated-Systems-That-Just-Work.md",description:'OpenFn provides the "Rosetta Stone" for your technologies and integrates any',date:"2020-06-04T00:00:00.000Z",formattedDate:"June 4, 2020",tags:[{label:"tips",permalink:"/blog/tags/tips"}],title:"Building Integrated Systems That Just Work",readingTime:5.02,truncated:!0,prevItem:{title:"Enabling Scale at myAgro, 6 Years Later",permalink:"/blog/2020/06/09/enabling-scale-at-myagro"},nextItem:{title:"Technology Is Not The Answer, but It Should Not Be The Problem",permalink:"/blog/2020/06/04/Technology-Isnt-The-Answer"}},l=[],c={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'OpenFn provides the "Rosetta Stone" for your technologies and integrates any\napp.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"roads",src:n(407).default})),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This article was originally posted by Taylor Downs, Head of Product, on\n",Object(r.b)("a",{parentName:"em",href:"https://medium.com/@taylordowns2000"},"The OpenFn Founder's blog"),' as "Making\ntechnology work better in the social sector."')),Object(r.b)("h4",{id:"were-building-a-tool-that-will-make-integrating-critical-social-impact-technologies-trivial"},"We're building a tool that will make integrating critical social-impact technologies trivial."),Object(r.b)("p",null,"The words \u201cintegrating\u201d and \u201ctrivial\u201d are not often written in the same sentence\n\u2014 and for good reason! Non-technical readers click away when they read the\nformer, while developers see the latter and think it\u2019s nonsense! (i.e.,\nIntegration is NEVER trivial.) This doesn\u2019t leave a lot of you left here on\nsentence number 5. Thanks for sticking it out, and let me reward your patience\nby explaining why this is such a big deal and what we need from you to make it\nhappen."),Object(r.b)("p",null,"By leveraging technology, we can make social programs more effective. Bigger,\nbetter, more complete solutions to issues of poverty, public health, and human\nrights are not only possible, but seem to be right on our doorstep thanks to\ntremendous advances in information technology in the last 25 years. Thousands of\ntools have been developed to address all sorts of needs across international\ndevelopment. While the tools and use-cases vary tremendously, there\u2019s always one\nugly, expensive, technically complex constant lurking in the background."),Object(r.b)("p",null,"(Enter \u201cintegration\u201d stage left.)"),Object(r.b)("p",null,"Just as \u201cno man is an island\u201d, no single piece of technology can stand alone. We\nrely on integrations every day. Many applications are so tightly integrated that\nwe hardly notice. Gmail and Google Contacts almost behave like a single app. If\nyou\u2019re lucky, Gmail and your calendar are also integrated. If you sync a folder\non your computer to Dropbox, there\u2019s a nifty integration between your local\noperating system and Dropbox.com. All of these integrations save precious time \u2014\nthey cut out a tedious manual step like uploading a copy of each photo you save\non your computer to a website."),Object(r.b)("p",null,"Now imagine running a pediatric HIV clinic in Kenya. Beyond email, a calendar,\nand Dropbox, you rely on a fingerprint scanner to to quickly access patient IDs,\na smart-phone based data collection app for new patient intake during home\nvisits, an electronic medical record system to manage patient data securely, and\nan automated SsocMS service to notify workers and patients of upcoming visits."),Object(r.b)("h4",{id:"we-should-take-a-moment-to-be-thankful-for-the-progress-weve-made-in-ict4d-its-amazing-that-these-technologies-exist-they-save-time-money-and-lives"},"We should take a moment to be thankful for the progress we\u2019ve made in \u201cICT4D\u201d. It\u2019s amazing that these technologies exist. They save time, money, and lives."),Object(r.b)("p",null,"The problem is that, for lack of a better metaphor, these technologies all speak\ndifferent languages. You can ask users to download data from one, make sense of\nit, and then upload it to another, but that\u2019s a slow, expensive, and error-prone\ntask. (Not to mention the non-negligible fact that it\u2019s horribly boring.) To get\nthe tos working together automatically you\u2019re talking tens of thousands of\ndollars, and the integration you\u2019re left with isn\u2019t re-usable once your needs\nchange. What\u2019s worse is that every time a new technology is implemented within\nan organization, consultants and developers must struggle anew to integrate it\nwith existing systems because there\u2019s seldom the budget or foresight required to\nbuild a truly flexible and future-proof integration. This is the issue we\u2019re\ntackling, head on."),Object(r.b)("h4",{id:"openfn-is-a-rosetta-stone-that-makes-automating-the-constant-flow-of-crucial-information-from-one-system-to-another-as-easy-as-point-and-click"},"OpenFn is a \u201cRosetta Stone\u201d that makes automating the constant flow of crucial information from one system to another as easy as point-and-click."),Object(r.b)("p",null,"Google.org called OpenFn\u2019s attempt to provide easy and technology agnostic data\nintegration \u201cthe holy grail.\u201d Stu, our own chief engineer had the same notion.\nAfter some hard work, it seems that the platform may really be that powerful,\nbut also far more attainable. Here\u2019s how we do it:"),Object(r.b)("p",null,"We use (1) a universal standard for data storage, (2) standard information about\nwhat kinds of data are expected from \u201csource applications\u201d and \u201cdestination\napplications\u201d, and (3) a user-friendly interface to generate \u201cjobs\u201d\u2014sometimes\ncalled \u201cautomation scripts\u201d or instructions for how to process data."),Object(r.b)("h4",{id:"a-job-might-be-to-create-a-new-patient-record-when-fingerprints-are-scanned-once-a-job-is-created-it-can-simply-be-switched-on-to-run-in-the-background-while-the-human-beings-at-your-organization-focus-on-much-more-important-and-interesting-things"},"A job might be to create a new patient record when fingerprints are scanned. Once a job is created, it can simply be \u201cswitched on\u201d to run in the background while the human beings at your organization focus on much more important (and interesting!) things."),Object(r.b)("p",null,"For those of you who work in technology, the power of this strategy (namely,\nusing a universal standard) should be apparent. To integrate a new application,\na small adapter that translates data to JSON and provides a JSON-schema for your\ndatabase is all that\u2019s required. Once one API connection to OpenFn is\nestablished, ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"your technology is instantly connected to every other technology\nconnected to OpenFn\u2013and OpenFn can connect any application."))," It will start to\nsnowball quickly, allowing data to flow instantly between hundreds of crucial\napplications, and each developer will only ever need to maintain a single\nconnection."),Object(r.b)("p",null,Object(r.b)("img",{alt:"apps",src:n(408).default})),Object(r.b)("p",null,"Dozens of organizations worldwide use OpenFn to scale their interventions by\nautomating key processes and information flows. OpenFn solutions deliver\ncritical information, faster and unlock resources for organizations by\neliminating manual, time-intensive tasks. OpenFn connects any app\u2013including\ncommon ICT4D tools like DHIS2, CommCare, Kobo Toolbox, and Salesforce, as well\nas databases, custom applications, and legacy systems. Drop us a note if you\u2019re\nthinking about how to connect tools at your organization, or if you\u2019re a\ndeveloper and wondering how to get your product connected to other essential\ntools in international development."),Object(r.b)("p",null,"In the end, we\u2019re talking about making it orders of magnitude faster and\nsignificantly less expensive to integrate key technologies. By automating the\nflow of data in social impact organizations we eliminate human error and reduce\nlag time\u2014this means better information in the hands of decision makers, faster.\nAll this leads to one thing: bigger, better, and more complete solutions to some\nof the world's biggest problems."),Object(r.b)("p",null,"If you\u2019d just like some more information about OpenFn and how we help leading\nimpact-first organizations scale their interventions, head over to\n",Object(r.b)("a",{parentName:"p",href:"https://www.openfn.org/solutions"},"Solution Overviews - OpenFn.")," To get all the\nlatest OpenFn updates, like us on ",Object(r.b)("a",{parentName:"p",href:"https://www.facebook.com/openfn"},"Facebook"),"\nand follow us on ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/openfn"},"Twitter.")))}u.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},407:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roads-955d8a56df36f28ea82eb437b2206121.jpg"},408:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/apps-e29ed05a7635be733774994830077abb.png"}}]);