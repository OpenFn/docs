"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[20097],{15680:(e,t,_)=>{_.d(t,{xA:()=>l,yg:()=>h});var a=_(96540);function r(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}function i(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,a)}return _}function n(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?i(Object(_),!0).forEach((function(t){r(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):i(Object(_)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}function o(e,t){if(null==e)return{};var _,a,r=function(e,t){if(null==e)return{};var _,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)_=i[a],t.indexOf(_)>=0||(r[_]=e[_]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)_=i[a],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(r[_]=e[_])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),_=t;return e&&(_="function"==typeof e?e(t):n(n({},t),e)),_},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var _=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(_),f=r,h=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return _?a.createElement(h,n(n({ref:t},l),{},{components:_})):a.createElement(h,n({ref:t},l))}));function h(e,t){var _=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=_.length,n=new Array(i);n[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,n[1]=o;for(var c=2;c<i;c++)n[c]=_[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,_)}f.displayName="MDXCreateElement"},41780:(e,t,_)=>{_.r(t),_.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=_(58168),r=(_(96540),_(15680));const i={title:"Outcome Survey",sidebar_label:"Outcome Survey",id:"Outcome-Survey-2024-07-16",keywords:["library","job","expression","salesforce","dataValue","upsert"]},n=void 0,o={unversionedId:"library/jobs/auto/Outcome-Survey-2024-07-16",id:"library/jobs/auto/Outcome-Survey-2024-07-16",title:"Outcome Survey",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Outcome-Survey-2024-07-16.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Outcome-Survey-2024-07-16",permalink:"/adaptors/library/jobs/auto/Outcome-Survey-2024-07-16",draft:!1,tags:[],version:"current",frontMatter:{title:"Outcome Survey",sidebar_label:"Outcome Survey",id:"Outcome-Survey-2024-07-16",keywords:["library","job","expression","salesforce","dataValue","upsert"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"},next:{title:"Upsert Pre Challenges",permalink:"/adaptors/library/jobs/auto/Upsert-Pre-Challenges-2021-04-30"}},s={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],l={toc:c},p="wrapper";function m(e){let{components:t,..._}=e;return(0,r.yg)(p,(0,a.A)({},l,_,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Outcome Survey"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v4.6.0"},(0,r.yg)("inlineCode",{parentName:"a"},"v4.6.0"))),(0,r.yg)("li",{parentName:"ul"},"Created 10 days ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 10 days ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"43")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'fn((state) => {\n\n  \n  state.capitalizeFirstLetter = (text) => {\n    if (!text) return text; // Return the text if it\'s empty or undefined\n      return text.charAt(0).toUpperCase() + text.slice(1);\n  };\n  \n  state.replaceUnderscoreWithSpace = (text) => {\n    if (typeof text !== \'string\') {\n      return \'\'; // Return an empty string if input is not a string\n  }\n  return text.replace(/_/g, \' \');\n}\n\nstate.replaceSpaceWithSemiColon = (text) => {\n    if (typeof text !== \'string\') {\n      return \'\'; // Return an empty string if input is not a string\n  }\n  return text.replace(/ /g, \';\');\n  \n}\n\nstate.HIVtestMap = {\n    agree: "Positive",\n    negative: "Negative",\n    "copy-2-of-days": "5 - 6 days",\n    "i_dont_knowdeclined": "I don\'t know / Declined to answer",\n  };\n\n\n\nstate.daysMap = {\n    days: "1 - 2 days",\n    "copy-1-of-days": "3 - 4 days",\n    "copy-2-of-days": "5 - 6 days",\n    "more_than_6_days": "More than 6 days",\n    "none": "None"\n  };\n  \n  state.agreeDisagreeMap = {\n    Agree: \'Yes\', //New\n    Disagree: \'No\', // Continued\n    "I don\'t know/Declined to answer": "Declined to answer",\n    "choice2": "No"\n  };\n  \n  state.timeMap = {\n    "all_of_the_time": "All of the time",\n    "most_of_the_time": "Most of the time", \n    "more_than_half_of_the_time": "More than half of the time",\n    "less_than_half_of_the_time": "Less than half of the time",\n    "some_of_the_time": "Some of the time",\n    "at_no_time": "At no time"\n  }\n  \n  state.choiceMapping = {\n    "choice1": "Confidentiality concerns",\n    "choice2": "Contraceptives including pills, injections, implants or similar",\n    "choice3": "Condoms \u2013 male or female",\n    "choice4": "Voluntary medical male circumcision",\n    "choice10": "Less than half of the time"\n  }\n  \n  \n  // function capitalizeFirstLetter(text) {\n  // if (!text) return text; // Return the text if it\'s empty or undefined\n  // return text.charAt(0).toUpperCase() + text.slice(1);\n  // }\n\n  function transform(value) {\n    if (!value) return;\n    //console.log("value in switch", value.toString().trim().toLowerCase());\n    switch (value.toString().trim().toLowerCase()) {\n      case "Agree":\n        return "Yes";\n      case "Disagree":\n        return "No";\n      case "I don\'t know/Declined to answer":\n        return "Declined to answer";\n      default:\n        return value;\n    }\n  }\n\n  state.helperFunctions = { transform };\n\n  return state;\n});\n\nfn((state) => {\n  const { form } = state.data;\n  state.surveyMappings = {\n    CommCare_Ext_ID__c: dataValue("id"),\n    Name_of_Interviewer__c: form["name_of_interviewer"],\n    Date__c: form.date,\n    Interview_Start_Time__c: form.interview_start_time,\n    Interview_End_Time__c: form.interview_end_time,\n    What_was_the_main_reason_the_participant__c:\n      form[\n        "copy-1-of-what_was_the_main_reason_the_participant_did_not_consent_to_participate_in_"\n      ],\n    Site_Name__c: state.capitalizeFirstLetter(form.site),\n    Venue_Name__c: form.venue,\n    Group_Name__c: form.group_name,\n    //Grade__c: \'form.grade\',\n    Curriculum_Attended__c: form.curriculum,\n    Give_permission_to_participate__c:\n      form["did_the_individual_give_permission_to_participate_in_the_survey"],\n    Main_reason_of_not_consenting__c: state.choiceMapping[state.replaceUnderscoreWithSpace(state.capitalizeFirstLetter(\n      form["what_was_the_main_reason_the_participant_did_not_consent_to_participate_in_"]))],\n    Participant_Name__c: form.participant_name,\n    Participant_Gender__c: state.capitalizeFirstLetter(form.participant_gender),\n    Participant_DOB__c: form.participant_date_of_birth,\n    Currently_live_with_at_home__c: state.replaceSpaceWithSemiColon(state.capitalizeFirstLetter(form["who_do_you_currently_live_with_at_home"])),\n    Days_did_you_go_without_food__c: state.daysMap[form["in_the_last_week_how_many_days_did_you_go_without_food"]],\n    Ever_been_in_any_kind_of_sexual_relation__c: state.choiceMapping[state.capitalizeFirstLetter(form["have_you_ever_been_in_any_kind_of_sexual_relationship_with_someone"])],\n    In_any_form_of_sexual_relationship__c: state.choiceMapping[state.capitalizeFirstLetter(form["are_you_currently_in_any_form_of_sexual_relationship"])],\n    Age_of_your_current_last_sexual_partner__c: state.capitalizeFirstLetter(form["what_is_the_age_of_your_currentlast_sexual_partner"]),\n    Ever_had_sexual_intercourse__c: state.capitalizeFirstLetter(form["have_you_ever_had_sexual_intercourse"]),\n    Age_at_first_sex__c: state.capitalizeFirstLetter(form["how_old_were_you_when_you_had_sexual_intercourse_for_the_first_time"]),\n    La__c: state.replaceUnderscoreWithSpace(state.capitalizeFirstLetter(form["the_last_time_you_had_sexual_intercourse_why_did_you_do_it"])),\n    Last_2_years_pregnant_or_given_birth__c: state.capitalizeFirstLetter(form["in_the_last_2_years_did_you_ever_get_pregnant_or_give_birth_instruction_thi"]),\n    HIV_positive_should_hide_it_from_others__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["people_who_test_hiv_positive_should_hide_it_from_others"])],\n    I_would_rather_not_know_if_I_have_HIV__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_would_rather_not_know_if_i_have_hiv"])],\n    someone_with_HIV_to_stop_taking_their_AR__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["it_is_okay_for_someone_with_hiv_to_stop_taking_their_arv_as_soon_as_they_st"])],\n    People_with_HIV_to_have_unprotected_sex__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["it_is_okay_for_two_people_with_hiv_to_have_unprotected_sex_with_each_other"])],\n    Someone_has_HIV_by_looking_at_him_or_her__c: state.capitalizeFirstLetter(form["i_can_tell_whether_someone_has_hiv_by_looking_at_him_or_her"]),\n    talk_to_a_partner_about_HIV_STI_testing__c: state.capitalizeFirstLetter(form["i_know_how_to_talk_to_a_partner_about_hivsti_testing"]),\n    HIV_testing_is_free_at_government_health__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["hiv_testing_is_free_at_government_health_facilities"])],\n    Have_you_ever_tested_for_HIV__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["have_you_ever_tested_for_hiv"])],\n    Result_of_your_last_HIV_test__c: state.HIVtestMap[form["what_was_the_result_of_your_last_most_recent_hiv_test"]],\n    Where_to_get_support_services__c: state.capitalizeFirstLetter(form["i_know_where_to_get_support_services_for_me_or_someone_else_for_hiv-related"]),\n    Right_to_access_sexual_health_services__c: state.capitalizeFirstLetter(form["i_have_the_right_to_access_sexual_health_services_such_as_sti_and_hiv_testi"]),\n    Where_to_get_support_services_for_GBV__c: state.capitalizeFirstLetter(form["i_know_where_to_get_support_services_for_me_or_someone_else_for_gender-base"]),\n    Services_accessed_in_the_past_2_years__c: state.choiceMapping[state.replaceUnderscoreWithSpace(state.capitalizeFirstLetter(form["in_the_last_2_years_which_of_these_services_have_you_accessed_through_the_c"]))],\n    Accessed_the_above_services__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["did_you_access_the_above_services_more_than_once_per_year"])],\n    The_staff_at_my_nearest_clinic_are_frien__c: state.capitalizeFirstLetter(form["the_staff_at_my_nearest_clinic_are_friendly"]),\n    Keep_my_personal_information_private__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["the_staff_at_my_nearest_clinic_will_keep_my_personal_information_private"])],\n    Feel_stigmatism_or_judged__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_do_not_feel_stigmatism_or_judged_when_i_go_to_access_sexual_reproductive_"])],\n    Suggests_using_a_condom__c: state.capitalizeFirstLetter(form["when_a_partner_suggests_using_a_condom_it_means_he_or_she_has_had_sex_with_"]),\n    A_condom_would_make_sex_less_pleasing__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["using_a_condom_would_make_sex_less_pleasant"])],\n    I_know_how_to_correctly_use_a_condom__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_know_how_to_correctly_use_a_condom"])],\n    Able_to_refuse_to_have_sex__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_would_be_able_to_refuse_to_have_sex_if_my_partner_did_not_want_to_use_a_c"])],\n    Condoms_are_the_only_contraceptive__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["condoms_are_the_only_contraceptive_method_that_protect_against_pregnancy_as"])],\n    Use_a_condom__c: state.capitalizeFirstLetter(form["i_should_use_a_condom_even_if_my_girlfriend_is_on_another_form_of_birth_con"]),\n    The_last_time_you_had_sexual_intercourse__c: state.capitalizeFirstLetter(form["the_last_time_you_had_sexual_intercourse_did_you_and_your_partner_use_a_con"]),\n    A_girl_woman_can_get_pregnant__c: state.capitalizeFirstLetter(form["a_girl_or_woman_can_get_pregnant_the_very_first_time_she_has_sex"]),\n    Sign_of_Pregnancy__c: state.capitalizeFirstLetter(form["one_sign_of_pregnancy_is_a_girl_missing_her_period"]),\n    Ever_used_family_planning_method__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["have_you_ever_used_any_type_of_family_planning"])],\n    Recieved_Family_Planning__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["in_the_last_2_years_did_you_ask_for_or_receive_family_planning"])],\n    Type_of_Family_Planning_accessed__c: state.replaceUnderscoreWithSpace(state.capitalizeFirstLetter(form["in_the_last_2_years_what_type_of_family_planning_services_did_you_access"])),\n    Methods_to_avoid_unwanted_pregnancy__c: state.capitalizeFirstLetter(form["i_know_at_least_three_methods_to_avoid_an_unwanted_pregnancy"]),\n    Support_for_prevention_of_teen_pregnancy__c: state.capitalizeFirstLetter(form["in_the_last_2_years_did_you_get_support_for_prevention_of_teenage_pregnancy"]),\n    I_have_felt_cheerful_and_in_good_spirits__c: state.timeMap[(form["i_have_felt_cheerful_and_in_good_spirits"])],\n    I_have_felt_calm_and_relaxed__c: state.choiceMapping[state.timeMap[form["i_have_felt_calm_and_relaxed"]]],\n    I_have_felt_active_and_vigorous__c: state.timeMap[form["question11"]],\n    I_woke_up_feeling_fresh_and_rested__c: state.timeMap[form["i_woke_up_feeling_fresh_and_rested"]],\n    Life_filled_with_things_interesting_me__c: state.replaceUnderscoreWithSpace(state.capitalizeFirstLetter(form["my_daily_life_has_been_filled_with_things_that_interest_me"])),\n    Sign_of_personal_weakness__c: state.capitalizeFirstLetter(form["a_mental_illness_is_a_sign_of_personal_weakness"]),\n    Sign_of_personal_weakness__c: state.capitalizeFirstLetter(form["seeking_help_for_mental_health_challenges_is_a_sign_of_weakness"]),\n    Expectations_dealing_with_emotions__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["society_expects_boys_and_girls_to_deal_with_their_emotions_differently"])],\n    Self_control_and_smart_decisions__c: state.capitalizeFirstLetter(form["self-control_helps_you_make_smart_decisions_when_you_are_angry_or_upset"]),\n    Avoid_using_violent_behaviour__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["when_i_am_angry_i_know_how_to_avoid_using_violent_behaviour"])],\n    Confidence_and_face_to_face_appointments__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_am_confident_attending_face_to_face_appointments_to_seek_information_abou"])],\n    Seek_information_about_mental_illness__c: state.capitalizeFirstLetter(form["i_am_confident_that_i_know_where_to_seek_information_about_mental_illness"]),\n    Bounce_back_from_difficult_situations__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_can_bounce_back_from_difficult_situations"])],\n    Avoid_people_with_mental_illness__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["it_is_best_to_avoid_people_with_mental_illness_so_that_you_dont_develop_thi"])],\n    Informed_decisions_about_sexual_health__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_can_make_my_own_informed_decisions_about_my_sexual_healthcare"])],\n    Say_no_to_sex_despite_pressure__c: state.capitalizeFirstLetter(form["i_can_say_no_to_sex_even_if_my_boyfriend_or_friends_pressure_me_to_have_sex"]),\n    Make_my_own_decisions_pressure__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_can_make_my_own_decisions_no_matter_how_much_pressure_i_get_from_others"])],\n    Tell_someone_if_I_were_touched__c: state.capitalizeFirstLetter(form["i_would_tell_someone_if_i_were_touched_in_a_manner_that_made_me_uncomfortab"]),\n    Say_no_to_sex_no_matter_who_asks_me__c: state.capitalizeFirstLetter(form["i_can_say_no_to_sex_no_matter_who_asks_me"]),\n    How_to_overcome_challenges__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_know_how_to_overcome_challenges_that_i_may_face_in_my_life"])],\n    I_can_achieve_my_goals__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_can_achieve_my_goals_even_if_i_face_challenges"])],\n    Confident_setting_measurable_goals__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["i_feel_confident_setting_measurable_goals"])],\n    Good_reason_to_hit_his_girlfriend_wife__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["sometimes_a_man_or_boyfriend_may_have_a_good_reason_to_hit_his_girlfriend_o"])],\n    Take_part_in_household_chores__c: state.capitalizeFirstLetter(form["men_should_take_part_in_household_chores_such_as_washing_plates_and_sweepin"]),\n    Girls_responsibility_on_pregnancy__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["it_is_only_the_girls_responsibility_to_avoid_getting_pregnant"])],\n    Right_to_have_sex__c: state.capitalizeFirstLetter(form["a_man_has_the_right_to_have_sex_with_his_girlfriend_even_if_she_doesnt_want"]),\n    Appropriate_for_a_girl_to_carry_condoms__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["it_is_not_appropriate_for_a_girlwoman_to_carry_condoms"])],\n    Where_to_get_support__c: state.capitalizeFirstLetter(form["copy-1-of-i_know_where_to_get_support_services_for_me_or_someone_else_for_gender-base"]),\n    Gone_to_seek_support_forself__c: state.agreeDisagreeMap[state.capitalizeFirstLetter(form["in_the_last_2_years_have_you_ever_gone_to_seek_support_for_yourself_or_for_"])],\n    People_in_my_life_who_I_can_get_help__c: state.capitalizeFirstLetter(form["there_are_people_in_my_life_who_i_can_get_help_from_if_i_need_it"]),\n    People_in_my_life_who_I_can_talk_to__c: state.capitalizeFirstLetter(form["there_are_people_in_my_life_who_i_can_talk_to_about_how_to_handle_things"]),\n    Where_to_go_for_support_for_alcohol__c: state.capitalizeFirstLetter(form["i_know_where_to_go_for_support_if_i_or_someone_i_know_drinks_too_much_alcoh"]),\n  };\n  //console.log(state.surveyMappings)\n  return state;\n});\n\nupsert(\n  "SKILLZ_Outcome_Monitoring_Survey__c",\n  "CommCare_Ext_ID__c",\n  (state) => state.surveyMappings\n);\n\n')))}m.isMDXComponent=!0}}]);