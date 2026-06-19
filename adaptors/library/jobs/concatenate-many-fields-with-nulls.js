// Use array.filter(Boolean).join(',') instead of arrayToString() with function(state)
// wrappers. Replace fields()/field()/relationship()/dataValue() with a plain object.
each(
  $.data.data,
  create('Verification__c', {
    RecordTypeId: '01236000000Q6PT',
    Supplier__r: { Unique_Entity_ID__c: $.data.Unique_Entity_ID },
    Currency_ISO_Code__c: $.data.Currency_ISO_Code,
    Date_Conducted__c: $.data.Date_Conducted,
    ODK_Key__c: $.data['*meta-instance-id*'],
    Unique_Entity_ID__c: $.data.Unique_Entity_ID,
    Interviewee__c: $.data.Interviewee,
    Interviewee_Role__c: $.data.Interviewee_Role,
    Interviewee_Primary_Phone__c: $.data.Interviewee_Primary_Phone,
    Interviewee_Phone_2__c: $.data.Interviewee_Phone_2,
    Interviewee_Phone_3__c: $.data.Interviewee_Phone_3,
    Interviewee_Primary_Email__c: $.data.Interviewee_Primary_Email,
    Trade_Name__c: $.data.Trade_Name,
    Registered_Name__c: $.data.Registered_Name,
    Location_Description__c: $.data.Location_Description,
    Main_Office_Country__c: $.data.Main_Office_Country,
    Main_Office_Region_Province_or_County__c: [
      $.data.Main_Office_Region_Province_or_County_a,
      $.data.Main_Office_Region_Province_or_County_b,
      $.data.Main_Office_Region_Province_or_County_c,
      $.data.Main_Office_Region_Province_or_County_d,
    ].filter(Boolean).join(','),
    Main_Office_City__c: [
      $.data.Main_Office_City_a,
      $.data.Main_Office_City_b,
      $.data.Main_Office_City_c,
      $.data.Main_Office_City_d,
    ].filter(Boolean).join(','),
    Main_Office_Street_Address__c: $.data.Main_Office_Street_Address,
    Geolocation__Latitude__s: $.data['gps:Latitude'],
    Geolocation__Longitude__s: $.data['gps:Longitude'],
    Main_Contact_First__c: $.data.Main_Contact_First,
    Main_Contact_Last__c: $.data.Main_Contact_Last,
    Main_Contact_Role__c: $.data.Main_Contact_Role,
    Main_Contact_Role_Other__c: $.data.Main_Contact_Role_Other,
    Main_Contact_Phone_Mobile__c: $.data.Main_Contact_Phone_Mobile,
    Main_Contact_Phone_Work__c: $.data.Main_Contact_Phone_Work,
    Main_Contact_Phone_Other__c: $.data.Main_Contact_Phone_Other,
    Main_Contact_Email_Work__c: $.data.Main_Contact_Email_Work,
    General_Phone__c: $.data.General_Phone,
    General_Email__c: $.data.General_Email,
    Website__c: $.data.Website,
    Interest_in_Website__c: $.data.Interest_in_Website,
    Hours_of_Operation_Start__c: $.data.Hours_of_Operation_Start,
    Hours_of_Operation_End__c: $.data.Hours_of_Operation_End,
    Hours_of_Operation_Other__c: $.data.Hours_of_Operation_Other,
    Hours_of_Operation_Other_Start__c: $.data.Hours_of_Operation_Other_Start,
    Hours_of_Operation_Other_End__c: $.data.Hours_of_Operation_Other_End,
    Goods_and_Services_Description__c: $.data.Goods_and_Services_Description,
    Primary_Sector__c: $.data.Primary_Sector,
    Primary_Subsectors__c: [
      $.data.Primary_Subsectors_1,
      $.data.Primary_Subsectors_2,
      $.data.Primary_Subsectors_3,
      $.data.Primary_Subsectors_4,
      $.data.Primary_Subsectors_5,
      $.data.Primary_Subsectors_6,
      $.data.Primary_Subsectors_7,
      $.data.Primary_Subsectors_8,
      $.data.Primary_Subsectors_9,
      $.data.Primary_Subsectors_10,
      $.data.Primary_Subsectors_l1,
      $.data.Primary_Subsectors_12,
      $.data.Primary_Subsectors_13,
      $.data.Primary_Subsectors_14,
      $.data.Primary_Subsectors_15,
      $.data.Primary_Subsectors_16,
      $.data.Primary_Subsectors_17,
      $.data.Primary_Subsectors_18,
      $.data.Primary_Subsectors_19,
      $.data.Primary_Subsectors_20,
      $.data.Primary_Subsectors_21,
    ].filter(Boolean).join(','),
    Other_Sectors__c: $.data.Other_Sectors,
    Other_Subsectors__c: [
      $.data.Other_Subsectors_1,
      $.data.Other_Subsectors_2,
      $.data.Other_Subsectors_3,
      $.data.Other_Subsectors_4,
      $.data.Other_Subsectors_5,
      $.data.Other_Subsectors_6,
      $.data.Other_Subsectors_7,
      $.data.Other_Subsectors_8,
      $.data.Other_Subsectors_9,
      $.data.Other_Subsectors_10,
      $.data.Other_Subsectors_l1,
      $.data.Other_Subsectors_12,
      $.data.Other_Subsectors_13,
      $.data.Other_Subsectors_14,
      $.data.Other_Subsectors_15,
      $.data.Other_Subsectors_16,
      $.data.Other_Subsectors_17,
      $.data.Other_Subsectors_18,
      $.data.Other_Subsectors_19,
      $.data.Other_Subsectors_20,
      $.data.Other_Subsectors_21,
    ].filter(Boolean).join(','),
    Entity_and_Registration_1__c: $.data.Entity_and_Registration_1,
    Entity_and_Registration_2__c: $.data.Entity_and_Registration_2,
    Entity_and_Registration_3__c: $.data.Entity_and_Registration_3,
    Registration_Date__c: $.data.Registration_Date,
    Registration_Active__c: $.data.Registration_Active,
    Business_Operation_Licenses__c: $.data.Business_Operation_Licenses,
    Business_Operation_Certificates__c: $.data.Business_Operation_Certificates,
    Association_Memberships__c: $.data.Association_Memberships,
    Vendor_List_Memberships__c: $.data.Vendor_List_Memberships,
    Has_Marketing_Plan__c: $.data.Has_Marketing_Plan,
    Number_of_Competitors__c: $.data.Number_of_Competitors,
    Start_of_Operations__c: $.data.Start_of_Operations,
    Primary_Language__c: $.data.Primary_Language,
    Primary_Language_Other__c: $.data.Primary_Language_Other,
    English_Speakers__c: $.data.English_Speakers,
    Other_Languages__c: $.data.Other_Languages,
    Frequency_of_Internet_Access__c: $.data.Frequency_of_Internet_Access,
    Method_of_Internet_Access__c: $.data.Method_of_Internet_Access,
    Method_of_Internet_Access_Other__c: $.data.Method_of_Internet_Access_Other,
    Frequency_of_Email_Use__c: $.data.Frequency_of_Email_Use,
    Type_of_Email_Use__c: $.data.Type_of_Email_Use,
    Counties_Regions_Serviced__c: [
      $.data.Counties_Regions_Serviced_a,
      $.data.Counties_Regions_Serviced_b,
      $.data.Counties_Regions_Serviced_c,
      $.data.Counties_Regions_Serviced_d,
    ].filter(Boolean).join(','),
    Additional_Branches__c: $.data.Additional_Branches,
    Branch_Locations__c: [
      $.data.Branch_Locations_a,
      $.data.Branch_Locations_b,
      $.data.Branch_Locations_c,
      $.data.Branch_Locations_d,
    ].filter(Boolean).join(','),
    Majority_Local_or_Foreign__c: $.data.Majority_Local_or_Foreign,
    Num_of_Owners__c: $.data.Num_of_Owners,
    Num_of_Female_Owners__c: $.data.Num_of_Female_Owners,
    Num_of_Male_Owners__c: $.data.Num_of_Male_Owners,
    Primary_Owner_is_Same_as_Main_Contact__c:
      $.data.Primary_Owner_is_Same_as_Main_Contact,
    Primary_Owner__c: $.data.Primary_Owner,
    Primary_Owner_Gender__c: $.data.Primary_Owner_Gender,
    Primary_Owner_Gender_Other__c: $.data.Primary_Owner_Gender_Other,
    Primary_Owner_Nationality__c: $.data.Primary_Owner_Nationality,
    Primary_Owner_Phone_Mobile__c: $.data.Primary_Owner_Phone_Mobile,
    Primary_Owner_Phone_Work__c: $.data.Primary_Owner_Phone_Work,
    Primary_Owner_Phone_Other__c: $.data.Primary_Owner_Phone_Other,
    Primary_Owner_Email__c: $.data.Primary_Owner_Email,
    Num_of_Businesses_Owned__c: $.data.Num_of_Businesses_Owned,
    Names_of_Businesses_Owned__c: $.data.Names_of_Businesses_Owned,
    Num_of_Managers__c: $.data.Num_of_Managers,
    Num_of_Female_Managers__c: $.data.Num_of_Female_Managers,
    Num_of_Male_Managers__c: $.data.Num_of_Male_Managers,
    Finance_Management__c: $.data.Finance_Management,
    Finance_Management_Other__c: $.data.Finance_Management_Other,
    Dedicated_HR_Manager__c: $.data.Dedicated_HR_Manager,
    Num_of_Permanent_Full_Time_Employees__c:
      $.data.Num_of_Permanent_Full_Time_Employees,
    Num_of_Perm_Full_Time_Female_Employees__c:
      $.data.Num_of_Perm_Full_Time_Female_Employees,
    Num_of_Perm_Full_Time_Male_Employees__c:
      $.data.Num_of_Perm_Full_Time_Male_Employees,
    Num_of_Full_Time_Temporary_Employees__c:
      $.data.Num_of_Full_Time_Temporary_Employees,
    Num_of_Full_Time_Temp_Female_Employees__c:
      $.data.Num_of_Full_Time_Temp_Female_Employees,
    Num_of_Full_Time_Temp_Male_Employees__c:
      $.data.Num_of_Full_Time_Temp_Male_Employees,
    Num_of_Local_Staff_Full_Part_Time__c:
      $.data.Num_of_Local_Staff_Full_Part_Time,
    Num_of_Expatriate_Staff_Full_Part_Time__c:
      $.data.Num_of_Expatriate_Staff_Full_Part_Time,
    International_Client_in_Past_Six_Months__c:
      $.data.International_Client_in_Past_Six_Months,
    Principal_Client_Name__c: $.data.Principal_Client_Name,
    Foreign_or_Domestic_Principal_Client__c:
      $.data.Foreign_or_Domestic_Principal_Client,
    Principal_Client_Sector__c: $.data.Principal_Client_Sector,
    Goods_Services_Provided_to_this_Client__c:
      $.data.Goods_Services_Provided_to_this_Client,
    End_of_Last_Contract_with_this_Client__c:
      $.data.End_of_Last_Contract_with_this_Client,
    Value_Goods_Services_Sold_Last_6_Months__c:
      $.data.Value_Goods_Services_Sold_Last_6_Months,
    Value_Goods_Sold_Last_6_Months_USD__c:
      $.data.Value_Goods_Sold_Last_6_Months_USD,
    Access_to_Finance_Constraint_Ranking__c:
      $.data.Access_to_Finance_Constraint_Ranking,
    Bank_Account__c: $.data.Bank_Account,
    Bank_Guarantee__c: $.data.Bank_Guarantee,
    Satisfied_with_Current_Bank__c: $.data.Satisfied_with_Current_Bank,
    Describe_Satisfaction_with_Current_Bank__c:
      $.data.Describe_Satisfaction_with_Current_Bank,
    Has_Received_a_Formal_Loan__c: $.data.Has_Received_a_Formal_Loan,
    Formal_Loan_Provider__c: $.data.Formal_Loan_Provider,
    Formal_Loan_Amount_Received__c: $.data.Formal_Loan_Amount_Received,
    Formal_Loan_Amount_Received_USD__c: $.data.Formal_Loan_Amount_Received_USD,
    Date_Formal_Loan_Received__c: $.data.Date_Formal_Loan_Received,
    Formal_Loan_Purpose__c: $.data.Formal_Loan_Purpose,
    Formal_Loan_Purpose_Other__c: $.data.Formal_Loan_Purpose_Other,
    Formal_Loan_Repaid__c: $.data.Formal_Loan_Repaid,
    Interested_in_Loan__c: $.data.Interested_in_Loan,
    Interested_Loan_Amount__c: $.data.Interested_Loan_Amount,
    Interested_Loan_Amount_USD__c: $.data.Interested_Loan_Amount_USD,
    Interested_Loan_Duration__c: $.data.Interested_Loan_Duration,
    Interested_Loan_Purpose__c: $.data.Interested_Loan_Purpose,
    Interested_Loan_Purpose_Other__c: $.data.Interested_Loan_Purpose_Other,
    Formal_Loan_Confidence_Ranking__c: $.data.Formal_Loan_Confidence_Ranking,
    Received_Loan_from_Family_Friends__c:
      $.data.Received_Loan_from_Family_Friends,
    Family_Friend_Loan_Amount__c: $.data.Family_Friend_Loan_Amount,
    Family_Friend_Loan_Amount_USD__c: $.data.Family_Friend_Loan_Amount_USD,
    Received_Loan_from_Informal_Lenders__c:
      $.data.Received_Loan_from_Informal_Lenders,
    Informal_Lender_Loan_Amount__c: $.data.Informal_Lender_Loan_Amount,
    Informal_Lender_Loan_Amount_USD__c: $.data.Informal_Lender_Loan_Amount_USD,
    Interested_in_Investor_Business_Partner__c:
      $.data.Interested_in_Investor_Business_Partner,
    Total_Turnover_Previous_Month__c: $.data.Total_Turnover_Previous_Month,
    Total_Turnover_Previous_Month_USD__c:
      $.data.Total_Turnover_Previous_Month_USD,
    Total_Turnover_Previous_Fiscal_Year__c:
      $.data.Total_Turnover_Previous_Fiscal_Year,
    Total_Turnover_Previous_Fiscal_Yr_USD__c:
      $.data.Total_Turnover_Previous_Fiscal_Yr_USD,
    Total_Profit_Previous_Fiscal_Year__c:
      $.data.Total_Profit_Previous_Fiscal_Year,
    Total_Profit_Previous_Fiscal_Year_USD__c:
      $.data.Total_Profit_Previous_Fiscal_Year_USD,
    Accepted_Modes_of_Payment__c: $.data.Accepted_Modes_of_Payment,
    Accepted_Modes_of_Payment_Other__c: $.data.Accepted_Modes_of_Payment_Other,
    Avg_Expen_Spent_on_Imported_Goods_Year__c:
      $.data.Avg_Expen_Spent_on_Imported_Goods_Year,
    Avg_Expen_Spent_on_Domestic_Goods_Year__c:
      $.data.Avg_Expen_Spent_on_Domestic_Goods_Year,
    Avg_Expen_on_Domestic_Suppliers_Year__c:
      $.data.Avg_Expen_on_Domestic_Suppliers_Year,
    Avg_Expen_on_Intl_Suppliers_Year__c:
      $.data.Avg_Expen_on_Intl_Suppliers_Year,
    Avg_Expen_Spent_on_Salaries_Year__c:
      $.data.Avg_Expen_Spent_on_Salaries_Year,
    Balance_Sheet_Statement_Available__c:
      $.data.Balance_Sheet_Statement_Available,
    Profit_Loss_Statement__c: $.data.Profit_Loss_Statement,
    Directly_Imports_Goods__c: $.data.Directly_Imports_Goods,
    Avg_of_Total_Costs_from_Imports__c: $.data.Avg_of_Total_Costs_from_Imports,
    Highest_Costing_Import__c: $.data.Highest_Costing_Import,
    Origin_Country_of_Highest_Costing_Import__c:
      $.data.Origin_Country_of_Highest_Costing_Import,
    Other_Import_Countries__c: $.data.Other_Import_Countries,
    Exports_Products__c: $.data.Exports_Products,
    Avg_of_Total_Revenue_from_Exports__c:
      $.data.Avg_of_Total_Revenue_from_Exports,
    Primary_Export__c: $.data.Primary_Export,
    Destination_of_Exports__c: $.data.Destination_of_Exports,
    Profits_Expectation_Next_Six_Months__c:
      $.data.Profits_Expectation_Next_Six_Months,
    Staff_Expectation_Next_Six_Months__c:
      $.data.Staff_Expectation_Next_Six_Months,
    Int_l_Entities_Represent_Good_Opp__c:
      $.data.Int_l_Entities_Represent_Good_Opp,
    Int_l_Concessionaires_Represent_Good_Opp__c:
      $.data.Int_l_Concessionaires_Represent_Good_Opp,
    Sectors_Representing_Best_Local_Opps__c:
      $.data.Sectors_Presenting_Best_Local_Opps,
    Obstacle_Working_with_Intl_Entities__c:
      $.data.Obstacle_Working_with_Intl_Entities,
    Biggest_Challenge_Next_6_Months__c: $.data.Biggest_Challenge_Next_6_Months,
    Second_Biggest_Challenge_Next_6_Months__c:
      $.data.Second_Biggest_Challenge_Next_6_Months,
    Financial_Management_Ranking__c: $.data.Financial_Management_Ranking,
    Access_to_Finance_Ranking__c: $.data.Access_to_Finance_Ranking,
    Administration_Ranking__c: $.data.Administration_Ranking,
    Human_Resources_Ranking__c: $.data.Human_Resources_Ranking,
    Technical_Expertise_Ranking__c: $.data.Technical_Expertise_Ranking,
    Training_Helps_Efficiency__c: $.data.Training_Helps_Efficiency,
    Capacity_Building_Activities_Offered__c:
      $.data.Capacity_Building_Activities_Offered,
    Capacity_Building_Offered_Other__c: $.data.Capacity_Building_Offered_Other,
    Can_Provide_Quotations_WP_on_Request__c:
      $.data.Can_Provide_Quotations_WP_on_Request,
    Knows_What_a_Tender_is__c: $.data.Knows_What_a_Tender_is,
    Frequency_Checking_for_Tenders__c: $.data.Frequency_Checking_for_Tenders,
    Has_Submitted_a_Tender_Bid__c: $.data.Has_Submitted_a_Tender_Bid,
    Has_Won_Tenders_in_Past_Six_Months__c:
      $.data.Has_Won_Tenders_in_Past_Six_Months,
    Details_of_Recently_Won_Tenders__c: $.data.Details_of_Recently_Won_Tenders,
    Num_of_Gov_t_Bids_in_Last_Six_Months__c:
      $.data.Num_of_Govt_Bids_in_Last_Six_Months,
    Num_of_Private_Bids_in_Last_Six_Months__c:
      $.data.Num_of_Private_Bids_in_Last_Six_Months,
    Num_of_NGO_INGO_IO_Bids_Last_Six_Months__c:
      $.data.Num_of_NGO_INGO_IO_Bids_Last_Six_Months,
    Main_Reason_for_Lost_Bids__c: $.data.Main_Reason_for_Lost_Bids,
    Main_Reason_for_Lost_Bids_Other__c:
      $.data.Main_Reason_for_Lost_Bids_Other__c,
    Main_Reason_for_Not_Bidding_on_Tenders__c:
      $.data.Main_Reason_for_Not_Bidding_on_Tenders,
    Main_Reason_Not_Bidding_Tenders_Others__c:
      $.data.Main_Reason_Not_Bidding_Tenders_Others__c,
    Planning_to_Bid_on_Future_Tenders__c:
      $.data.Planning_to_Bid_on_Tenders_in_the_Future,
    Services_That_Would_Help_to_Win_Tenders__c:
      $.data.Services_That_Would_Help_to_Win_Tenders,
    Interested_in_Future_BM_Communications__c:
      $.data.Interested_in_Future_BM_Communications,
    Future_BM_Communications__c: $.data.Future_BM_Communications,
    Interested_in_Attending_Future_Training__c:
      $.data.Interested_in_Attending_Future_Training,
    Training_Most_Interested_in_Attending__c:
      $.data.Training_Most_Interested_in_Attending,
    Training_Most_Interested_in_Other__c:
      $.data.Training_Most_Interested_in_Other,
    Amount_Willing_to_Pay_for_Training__c:
      $.data.Amount_Willing_to_Pay_for_Training,
    Training_Interested_In_but_Not_Offered__c:
      $.data.Training_Interested_In_but_Not_Offered,
    Advice_to_Entrepreneurs_in_your_Country__c:
      $.data.Advice_to_Entrepreneurs_in_your_Country,
    Interviewer_Comments__c: $.data.Interviewer_Comments,
  })
);
