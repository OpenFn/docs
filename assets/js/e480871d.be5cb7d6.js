"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1372],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,h=l["".concat(c,".").concat(d)]||l[d]||y[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const i={title:"Inspect Runs & Search via the History page",sidebar_label:"Inspect Runs"},a=void 0,s={unversionedId:"monitor-history/inspect-runs",id:"monitor-history/inspect-runs",title:"Inspect Runs & Search via the History page",description:"A Run is created each time",source:"@site/docs/monitor-history/inspect-runs.md",sourceDirName:"monitor-history",slug:"/monitor-history/inspect-runs",permalink:"/documentation/monitor-history/inspect-runs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/monitor-history/inspect-runs.md",tags:[],version:"current",frontMatter:{title:"Inspect Runs & Search via the History page",sidebar_label:"Inspect Runs"},sidebar:"docs",previous:{title:"History & Search",permalink:"/documentation/monitor-history/activity-history"},next:{title:"Rerun failures",permalink:"/documentation/monitor-history/rerunning-workflow"}},c={},u=[{value:"Inspect Runs",id:"inspect-runs",level:2},{value:"Search History and Runs",id:"search-history-and-runs",level:2}],p={toc:u},l="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"A ",(0,o.yg)("a",{parentName:"p",href:"/documentation/get-started/terminology#run"},"Run")," is created each time\nOpenFn attempts to excute a Workflow for a given Work Order. All Runs can be\nviewed, filtered, and searched via the ",(0,o.yg)("inlineCode",{parentName:"p"},"History")," page."),(0,o.yg)("p",null,'In short, Runs tell us "what happened" when OpenFn tried to execute the\nWorkflow. Runs have start times, end times, logs, and\n',(0,o.yg)("a",{parentName:"p",href:"/documentation/monitor-history/status-codes"},"status codes")," that indicate\nwhen they took place, what they did, and whether or not they succeeded."),(0,o.yg)("h2",{id:"inspect-runs"},"Inspect Runs"),(0,o.yg)("p",null,"Check out the below video tutorial\n(",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/xPgVZmJMT3w?si=bMf9wof_Qla-0ihW"},"or see link"),") for a walk\nthrough on inspecting Runs via the History page."),(0,o.yg)("iframe",{width:"784",height:"441",src:"https://www.youtube.com/embed/xPgVZmJMT3w?si=fO7_kqgpbUJE6ArK",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.yg)("h2",{id:"search-history-and-runs"},"Search History and Runs"),(0,o.yg)("p",null,"To learn how to search and filter Work Order and Run history via the History\npage, check out the below video tutorial\n(",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/XIUykmLCxwQ?si=pCzefw4zyLxG1voE"},"or see link"),")."),(0,o.yg)("iframe",{width:"784",height:"441",src:"https://www.youtube.com/embed/XIUykmLCxwQ?si=IM73HvXEC2Azg5YF",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}y.isMDXComponent=!0}}]);