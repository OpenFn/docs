"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[97714],{28381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={title:"Claude AI Adaptor"},i=void 0,l={unversionedId:"claude",id:"claude",title:"Claude AI Adaptor",description:"About Claude",source:"@site/adaptors/claude.md",sourceDirName:".",slug:"/claude",permalink:"/adaptors/claude",draft:!1,tags:[],version:"current",frontMatter:{title:"Claude AI Adaptor"},sidebar:"adaptors",previous:{title:"CKAN",permalink:"/adaptors/ckan"},next:{title:"claude@1.0.4",permalink:"/adaptors/packages/claude-docs"}},s={},p=[{value:"About Claude",id:"about-claude",level:2},{value:"Use OpenFn + LLMs for AI-Driven Workflows",id:"use-openfn--llms-for-ai-driven-workflows",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-claude"},"About Claude"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://claude.ai/"},"Claude")," is an AI assistant built by Anthropic. It provides\na family of large language models (LLMs) developed for natural language\nprocessing tasks such as text generation, summarization, and question answering."),(0,r.yg)("p",null,"Claude models process text input to generate responses but do not have built-in\nmemory or autonomous decision-making. They can be integrated with external tools\nor APIs to execute actions beyond text-based outputs."),(0,r.yg)("h2",{id:"use-openfn--llms-for-ai-driven-workflows"},"Use OpenFn + LLMs for AI-Driven Workflows"),(0,r.yg)("p",null,"While LLMs (like Claude or ChatGPT) can generate insights, recommendations, or\nstructured data, they often ",(0,r.yg)("strong",{parentName:"p"},"lack direct execution capabilities"),"\u2014meaning they\nneed an automation system to act on their outputs."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"OpenFn workflows fill this gap by orchestrating actions based on LLM-generated responses.")),(0,r.yg)("p",null,"Remember that LLMs are imperfect. Learn more about your recommended approach to\nAI in our ",(0,r.yg)("a",{parentName:"p",href:"https://www.openfn.org/ai"},"Responsible AI Policy"),"."),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"Use this adpator to integrate with the ",(0,r.yg)("a",{parentName:"p",href:"https://www.anthropic.com/api"},"Claude API"),", to integrate Claude AI models into your workflows to\nleverage their natural language processing (NLP) capabilities."),(0,r.yg)("p",null,"Example AI-driven workflow on OpenFn:\n",(0,r.yg)("img",{alt:"ai-driven-workflow",src:n(44508).A,width:"960",height:"540"})),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"See this adaptor's\n",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/claude-configuration-schema"},"Configuration docs")," for\ntechnical docs on the authentication parameters required."),(0,r.yg)("h2",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"About Claude: ",(0,r.yg)("a",{parentName:"li",href:"https://claude.ai/"},"https://claude.ai/")),(0,r.yg)("li",{parentName:"ul"},"API docs: ",(0,r.yg)("a",{parentName:"li",href:"https://www.anthropic.com/api"},"https://www.anthropic.com/api"))))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44508:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ai-workflow-example-c146ecf7d59c81d96b7d1d86bf2302eb.png"}}]);