(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{249:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return d})),a.d(n,"default",(function(){return s}));var t=a(3),i=a(8),r=(a(0),a(336)),o={title:"Nutrition Survey Submissions with salesforce",sidebar_label:"Nutrition Survey Submissions",id:"Nutrition Survey Submissions-2017-08-31",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","upsert"]},l={unversionedId:"jobs/auto/Nutrition Survey Submissions-2017-08-31",id:"jobs/auto/Nutrition Survey Submissions-2017-08-31",isDocsHomePage:!1,title:"Nutrition Survey Submissions with salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Nutrition Survey Submissions-2017-08-31.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Nutrition Survey Submissions-2017-08-31",permalink:"/library/jobs/auto/Nutrition Survey Submissions-2017-08-31",version:"current",sidebar_label:"Nutrition Survey Submissions",frontMatter:{title:"Nutrition Survey Submissions with salesforce",sidebar_label:"Nutrition Survey Submissions",id:"Nutrition Survey Submissions-2017-08-31",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","upsert"]},sidebar:"library",previous:{title:"MOH 513 Update Household Revised (NEW) with salesforce",permalink:"/library/jobs/auto/MOH 513 Update Household Revised NEW-2020-02-27"},next:{title:"Handling multiple ODK repeat groups with salesforce",permalink:"/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"}},d=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],_={toc:d};function s(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},_,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(r.b)("h2",{id:"metadata"},"Metadata"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Name: Nutrition Survey Submissions"),Object(r.b)("li",{parentName:"ul"},"Adaptor: ",Object(r.b)("inlineCode",{parentName:"li"},"@openfn/language-salesforce")),Object(r.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(r.b)("inlineCode",{parentName:"li"},"v1.3.2")),Object(r.b)("li",{parentName:"ul"},"Created over 3 years ago"),Object(r.b)("li",{parentName:"ul"},"Updated 8 months ago")),Object(r.b)("h2",{id:"key-functions"},"Key Functions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"alterState"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dataValue"),", ",Object(r.b)("inlineCode",{parentName:"p"},"field"),", ",Object(r.b)("inlineCode",{parentName:"p"},"fields"),", ",Object(r.b)("inlineCode",{parentName:"p"},"upsert")),Object(r.b)("h2",{id:"expression"},"Expression"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'Service__c',\n  'Service_UID__c',\n  fields(\n    field('Service_UID__c', state => {\n      const id = dataValue('form.subcase_0.case.@case_id')(state);\n      const date = dataValue('$.form.Date')(state);\n      return id + date + 'Nutrition-Screening';\n    }),\n    field('Source__c', 1),\n    field('Catchment__c', 'a002400000pAcOe'),\n    field('Date__c', dataValue('$.form.Date')),\n    field('Type_of_Service__c', 'CHW Mobile Survey'),\n    field('Household_CHW__c', dataValue('$.form.Household_CHW')),\n    field('RecordTypeID', '01224000000YAuK'),\n    field('Reason_for_Service__c', 'Nutrition Screening'),\n    relationship(\n      'Person__r',\n      'CommCare_ID__c',\n      dataValue('$.form.case.@case_id')\n    ),\n    field(\n      'Primary_Caregiver__c',\n      dataValue('$.form.Child_Information.Primary_Caregiver')\n    ),\n    field('Height__c', dataValue('$.form.Child_Information.body_specs.Height')),\n    field('Weight__c', dataValue('$.form.Child_Information.body_specs.Weight')),\n    field('MUAC__c', dataValue('$.form.Child_Information.body_specs.MUAC')),\n    field('Nutrition_Status__c', state => {\n      var status = '';\n      if (\n        dataValue('$.form.Child_Information.malnourished.Nutrition_Status')(\n          state\n        ) == 'normal'\n      ) {\n        status = 'Normal';\n      } else if (\n        dataValue('$.form.Child_Information.malnourished.Nutrition_Status')(\n          state\n        ) == 'moderate'\n      ) {\n        status = 'Moderately Malnourished';\n      } else if (\n        dataValue('$.form.Child_Information.malnourished.Nutrition_Status')(\n          state\n        ) == 'severe'\n      ) {\n        status = 'Severely Malnourished';\n      }\n      return status;\n    }),\n    field(\n      'Ever_been_breastfed__c',\n      dataValue('$.form.Child_Information.infant_diet.ever_been_breastfed')\n    ),\n    field(\n      'Age_at_which_breastfed__c',\n      dataValue('$.form.Child_Information.infant_diet.age_at_which_breastfed')\n    ),\n    field(\n      'X24_Hours_Breastfed__c',\n      dataValue('$.form.Child_Information.infant_diet.how_many_times_24_hours')\n    ),\n    field(\n      'Formula_Milk__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_formula')\n    ),\n    field(\n      'Water__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_water')\n    ),\n    field(\n      'Glucose__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_glucose')\n    ),\n    field(\n      'Animal_Milk__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_animal_milk')\n    ),\n    field(\n      'Juice__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_juice')\n    ),\n    field(\n      'Sweetened_Drinks__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_sweetened_drinks')\n    ),\n    field(\n      'Honey__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_honey')\n    ),\n    field(\n      'Sugar__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_sugar')\n    ),\n    field(\n      'Clear_Soup__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_clear_soup')\n    ),\n    field(\n      'Grains__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_grains')\n    ),\n    field(\n      'Yellow_Flesh__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_yellow_flesh')\n    ),\n    field(\n      'Roots__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_roots')\n    ),\n    field(\n      'Leafy_Vegetables__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_leafy_veg')\n    ),\n    field(\n      'Fruits_or_Vegetables__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_other_fruit_veg')\n    ),\n    field(\n      'Meat__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_meat')\n    ),\n    field(\n      'Organ_Meat__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_organ_meat')\n    ),\n    field(\n      'Eggs__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_eggs')\n    ),\n    field(\n      'Dried_Silver_Fish__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_silver_fish')\n    ),\n    field(\n      'Seafood__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_other_seafood')\n    ),\n    field(\n      'Dairy__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_milk_products')\n    ),\n    field(\n      'Fats__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_fats')\n    ),\n    field(\n      'Sugary_Foods__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_sugary_foods')\n    ),\n    field(\n      'Insects__c',\n      dataValue('$.form.Child_Information.infant_diet.has_had_insects')\n    )\n  )\n);\n\nalterState(state => {\n  if (\n    dataValue('$.form.Child_Information.malnourished.Follow-Up_Required')(\n      state\n    ) === 'Yes'\n  ) {\n    return upsert(\n      'Service__c',\n      'Service_UID__c',\n      fields(\n        field('Service_UID__c', state => {\n          const id = dataValue('form.subcase_0.case.@case_id')(state);\n          const date = dataValue('$.form.Date')(state);\n          return id + date + 'Nutrition-Referral';\n        }),\n        field('Source__c', 1),\n        field('Catchment__c', 'a002400000pAcOe'),\n        field('Date__c', dataValue('$.form.Date')),\n        field('Type_of_Service__c', 'CHW Mobile Survey'),\n        field('Household_CHW__c', dataValue('$.form.Household_CHW')),\n        field('RecordTypeID', '01224000000kOto'),\n        field('Referred__c', 1),\n        field(\n          'Follow_Up_By_Date__c',\n          dataValue('$.form.Child_Information.malnourished.Follow-Up_By_Date')\n        ),\n        field('Reason_for_Service__c', 'Referral'),\n        field('Open_Case__c', 1),\n        field('CommCare_Code__c', dataValue('form.subcase_0.case.@case_id')),\n        field(\n          'Purpose_of_Referral__c',\n          dataValue('form.Child_Information.malnourished.Purpose_of_Referral')\n        ),\n        relationship(\n          'Person__r',\n          'CommCare_ID__c',\n          dataValue('$.form.case.@case_id')\n        )\n      )\n    )(state);\n  }\n\n  return state;\n});\n\n")))}s.isMDXComponent=!0},336:function(e,n,a){"use strict";a.d(n,"a",(function(){return f})),a.d(n,"b",(function(){return m}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var _=i.a.createContext({}),s=function(e){var n=i.a.useContext(_),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},f=function(e){var n=s(e.components);return i.a.createElement(_.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},c=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,_=d(e,["components","mdxType","originalType","parentName"]),f=s(a),c=t,m=f["".concat(o,".").concat(c)]||f[c]||u[c]||r;return a?i.a.createElement(m,l(l({ref:n},_),{},{components:a})):i.a.createElement(m,l({ref:n},_))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var _=2;_<r;_++)o[_]=a[_];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);