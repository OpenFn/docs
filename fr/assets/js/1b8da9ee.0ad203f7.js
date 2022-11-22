"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Tableau"},o=void 0,i={unversionedId:"apps/tableau",id:"apps/tableau",title:"Tableau",description:"(Travail en cours)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/tableau.md",sourceDirName:"apps",slug:"/apps/tableau",permalink:"/fr/documentation/apps/tableau",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/tableau.md",tags:[],version:"current",frontMatter:{title:"Tableau"},sidebar:"docs",previous:{title:"SurveyCTO",permalink:"/fr/documentation/apps/survey-cto"},next:{title:"FAQs",permalink:"/fr/documentation/faqs"}},u={},l=[{value:"Aper\xe7u",id:"aper\xe7u",level:2},{value:"Cas d&#39;utilisation d&#39;int\xe9gration",id:"cas-dutilisation-dint\xe9gration",level:2}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(Travail en cours)"),(0,a.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tableau.com/"},"Tableau")," est une plateforme d'analyse visuelle qui aide les gens \xe0 utiliser les donn\xe9es pour r\xe9soudre des probl\xe8mes."),(0,a.kt)("p",null,"Tableau Desktop n'a pas de base de donn\xe9es int\xe9gr\xe9e, il se connecte plut\xf4t \xe0 diff\xe9rentes sources de donn\xe9es (fichiers, bases de donn\xe9es, etc.). Apr\xe8s la connexion \xe0 une source de donn\xe9es, Tableau ne peut \xab\xa0extraire\xa0\xbb que les donn\xe9es dans un fichier d'extraction de donn\xe9es Tableau qui est \xe0 la fois compress\xe9 et repr\xe9sent\xe9 dans un format de stockage en colonnes."),(0,a.kt)("p",null,"Une liste des sources de donn\xe9es \xe0 partir desquelles vous pouvez vous connecter \xe0 Tableau se trouve ici\xa0: ",(0,a.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/techspecs"},"https://www.tableau.com/products/techspecs")),(0,a.kt)("p",null,"OpenFn a de l'exp\xe9rience dans la mise en place de bases de donn\xe9es structur\xe9es de mani\xe8re \xe0 ce que Tableau puisse s'en servir."),(0,a.kt)("h2",{id:"cas-dutilisation-dint\xe9gration"},"Cas d'utilisation d'int\xe9gration"),(0,a.kt)("p",null,"Une ONGI utilise CommCare, Kobo Toolbox et Survey CTO pour diff\xe9rents projets de sant\xe9 maternelle dans plusieurs pays diff\xe9rents. Cette ONGI aimerait utiliser un outil d'informatique d\xe9cisionnelle comme Tableau, pour cr\xe9er des visualisations de donn\xe9es pour ses indicateurs cl\xe9s. Pour cela, l'ONGI utilise OpenFn pour prendre les donn\xe9es d'enqu\xeate de CommCare, Kobo Toolbox et Survey CTO et cr\xe9e ensuite une base de donn\xe9es structur\xe9e \xe0 l'aide de MySQL. Une fois que la base de donn\xe9es structur\xe9e est \xe9tablie, OpenFn aide l'ONGI \xe0 connecter ces donn\xe9es \xe0 Tableau."),(0,a.kt)("p",null,"Le diagramme ci-dessous permet de visualiser le flux de donn\xe9es cit\xe9 dans le cas d'utilisation ci-dessus."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Visualisation des flux de donn\xe9es Tableau",src:n(9460).Z,width:"993",height:"425"})))}p.isMDXComponent=!0},9460:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/survey_db_tableau-fd5bc5832da679ed66badac6a7130303.png"}}]);