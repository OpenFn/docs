"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63828],{59811:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(58168),o=(t(96540),t(15680));const r={title:"odoo changelog",id:"odoo-changelog",keywords:["adaptor","changelog","odoo"]},l="Changelog for the odoo adaptor",i={unversionedId:"packages/odoo-changelog",id:"packages/odoo-changelog",title:"odoo changelog",description:"1.0.3",source:"@site/adaptors/packages/odoo-changelog.md",sourceDirName:"packages",slug:"/packages/odoo-changelog",permalink:"/adaptors/packages/odoo-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"odoo changelog",id:"odoo-changelog",keywords:["adaptor","changelog","odoo"]},sidebar:"adaptors",previous:{title:"Config for odoo",permalink:"/adaptors/packages/odoo-configuration-schema"},next:{title:"odoo developer readme",permalink:"/adaptors/packages/odoo-readme"}},c={},p=[{value:"1.0.3",id:"103",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.0.2",id:"102",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.0.1",id:"101",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.0.0",id:"100",level:2}],d={toc:p},g="wrapper";function s(e){let{components:a,...t}=e;return(0,o.yg)(g,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"changelog-for-the-odoo-adaptor"},"Changelog for the odoo adaptor"),(0,o.yg)("h1",{id:"openfnlanguage-odoo"},"@openfn/language-odoo"),(0,o.yg)("h2",{id:"103"},"1.0.3"),(0,o.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Updated dependencies ","[23ccb01]",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"@openfn/",(0,o.yg)("a",{parentName:"li",href:"mailto:language-common@2.3.1"},"language-common@2.3.1"))))),(0,o.yg)("h2",{id:"102"},"1.0.2"),(0,o.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"cde1ead: Add a ",(0,o.yg)("inlineCode",{parentName:"p"},"downloadNewRecord: true")," option to ",(0,o.yg)("inlineCode",{parentName:"p"},"create")," to enable\ndownloading of the whole record in the response."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-js"},"create('res.partner', { name: 'Kool Keith' }, { downloadNewRecord: true });\nfn(state => {\n  const record = state.data; // whole record is here\n  return state;\n});\n")))),(0,o.yg)("h2",{id:"101"},"1.0.1"),(0,o.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"2f58a71: Default ",(0,o.yg)("inlineCode",{parentName:"li"},"create()")," options to ",(0,o.yg)("inlineCode",{parentName:"li"},"{}")," to ensure that the options\nargument is optional."),(0,o.yg)("li",{parentName:"ul"},"e26fbd5: Simplified logging across the adaptor without displaying user data"),(0,o.yg)("li",{parentName:"ul"},"2db9f8d: Update the third argument in ",(0,o.yg)("inlineCode",{parentName:"li"},"read()")," examples and documentation to\nexplicitly indicate that it accepts an array of strings.")),(0,o.yg)("h2",{id:"100"},"1.0.0"),(0,o.yg)("p",null,"Initial release."))}s.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(t),u=o,h=g["".concat(c,".").concat(u)]||g[u]||s[u]||r;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);