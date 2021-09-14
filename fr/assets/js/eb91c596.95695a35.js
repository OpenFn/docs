"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4504],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Ona.io"},p=void 0,u={unversionedId:"apps/ona",id:"apps/ona",isDocsHomePage:!1,title:"Ona.io",description:"Webhooks to push form data to OpenFn",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/ona.md",sourceDirName:"apps",slug:"/apps/ona",permalink:"/fr/documentation/apps/ona",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/ona.md",tags:[],version:"current",frontMatter:{title:"Ona.io"},sidebar:"docs",previous:{title:"Open Data Kit (ODK)",permalink:"/fr/documentation/apps/odk"},next:{title:"Power BI",permalink:"/fr/documentation/apps/powerbi"}},l=[{value:"Webhooks to push form data to OpenFn",id:"webhooks-to-push-form-data-to-openfn",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"webhooks-to-push-form-data-to-openfn"},"Webhooks to push form data to OpenFn"),(0,a.kt)("p",null,"Ona has a great ",(0,a.kt)("a",{parentName:"p",href:"https://help.ona.io/knowledge-base/how-do-i-configure-webhooks/"},"knowledge base article")," that walks users through webhook creation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pour transf\xe9rer des donn\xe9es depuis Ona.io, cliquez sur le menu d\xe9roulant situ\xe9 \xe0 c\xf4t\xe9 d'un formulaire sp\xe9cifique et s\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Dans la partie gauche du menu, s\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"Webhooks"),"."),(0,a.kt)("li",{parentName:"ol"},"Collez l'URL de votre inbox OpenFn dans le champ de saisie de l'URL."),(0,a.kt)("li",{parentName:"ol"},"Clickez sur \xab\xa0Ajouter webhook\xa0\xbb."),(0,a.kt)("li",{parentName:"ol"},"Assurez-vous que le webhook est maintenant repertori\xe9 avec la balise ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," , indiquant qu'il va transf\xe9rer les donn\xe9es en JSON."),(0,a.kt)("li",{parentName:"ol"},"V\xe9rifiez que, d\xe8s qu'un formulaire est soumis, il est transmis \xe0 votre inbox OpenFn.")))}c.isMDXComponent=!0}}]);