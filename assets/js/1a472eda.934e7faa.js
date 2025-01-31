"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[41288],{54468:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={title:"Bulk upload obat lookup-table",sidebar_label:"\ud83d\udcdc Bulk upload obat lookup-table",id:"commcare-asri-bulk-upload",keywords:["library","job","expression","commcare","bulk","map"]},i=void 0,l={unversionedId:"library/jobs/auto/commcare-asri-bulk-upload",id:"library/jobs/auto/commcare-asri-bulk-upload",title:"Bulk upload obat lookup-table",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/commcare-asri-bulk-upload.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/commcare-asri-bulk-upload",permalink:"/adaptors/library/jobs/auto/commcare-asri-bulk-upload",draft:!1,tags:[],version:"current",frontMatter:{title:"Bulk upload obat lookup-table",sidebar_label:"\ud83d\udcdc Bulk upload obat lookup-table",id:"commcare-asri-bulk-upload",keywords:["library","job","expression","commcare","bulk","map"]},sidebar:"adaptors",previous:{title:"Config for commcare",permalink:"/adaptors/packages/commcare-configuration-schema"},next:{title:"Q3 2022 Update HH Name in CommCare",permalink:"/adaptors/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83d\udcdc ",(0,r.yg)("em",null,"This job is an official example from OpenFn.")),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Bulk upload obat lookup-table"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-commcare"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-commcare"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created date unknown"),(0,r.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"100")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"bulk"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"\n// Bulk update obat lookup-table \nfn(state => {\n    const { medication_ids, visit, obat } = state.data\n    state.medication_ids = medication_ids;\n    state.visit = visit\n    state.obat = obat\n    return state\n  })\n  \n  fn(state => {\n  \n    const properties = state.visit.properties;\n  \n    const data = state.medication_ids\n      .flatMap(medicine => {\n        const medicineName = properties[Object.keys(medicine)[0]];\n        return state.obat.filter(\n          item => item.fields['Nama'] === medicineName\n        ).map(item => ({ ...item, fields: { ...item.fields, satusehat_id: Object.values(medicine)[0] } }))\n      }).map(obat => {\n        const data = {\n          UID: obat.id,\n          'DELETE(Y/N)': 'N',\n          'field:Nama': obat.fields['Nama'],\n          'field:Satuan': obat.fields['Satuan'],\n          'field:Harga': obat.fields['Harga'],\n          'field:kfa_codes': obat.fields['kfa_codes'],\n          'field:satusehat_id': obat.fields['satusehat_id'],\n          'field:strength': obat.fields['strength'],\n          'field:strength_unit': obat.fields['strength_unit'],\n        }\n        return data\n      })\n  \n    state.medicationMappedData = {\n      types: [{\n        'DELETE(Y/N)': 'N',\n        table_id: 'test_obat', \n        'is_global?': 'yes',\n        'field 1': 'Nama',\n        'field 2': 'Satuan',\n        'field 3': 'Harga',\n        'field 4': 'kfa_codes',\n        'field 5': 'satusehat_id',\n        'field 6': 'strength',\n        'field 7': 'strength_unit',\n      }],\n      test_obat: data,\n    }\n  \n    return state\n  })\n  \n  bulk(\n    'lookup-table',\n    state => state.medicationMappedData,\n    { replace: false }\n  )\n\n")))}d.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>b});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(b,i(i({ref:a},u),{},{components:t})):n.createElement(b,i({ref:a},u))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);