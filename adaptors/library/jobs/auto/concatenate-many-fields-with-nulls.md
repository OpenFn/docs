---
title: Concat fields with nulls
sidebar_label: 📜 Concat fields with nulls
id: concatenate-many-fields-with-nulls
keywords:
  - library
  - job
  - expression
  - salesforce
  - arrayToString
  - create
  - dataValue
  - each
  - field
  - fields
  - relationship
---

📜 <em>This job is an official example from OpenFn.</em>

## Metadata

- Name: Concat fields with nulls
- Adaptor: [`@openfn/language-salesforce`](https://www.github.com/openfn/language-salesforce)
- Adaptor Version: [`latest`](https://www.github.com/openfn/language-salesforce)
- Created date unknown
- Updated date unknown
- Score: <b>100</b> (an [indicator](/adaptors/library/#library-scores) of how useful this job may be)

## Key Functions

`arrayToString`, `create`, `dataValue`, `each`, `field`, `fields`, `relationship`

## Expression

```js
each(
  '$.data.data[*]',
  create(
    'Verification__c',
    fields(
      field('RecordTypeId', '01236000000Q6PT'),
      relationship(
        'Supplier__r',
        'Unique_Entity_ID__c',
        dataValue('Unique_Entity_ID')
      ),
      field('Currency_ISO_Code__c', dataValue('Currency_ISO_Code')),
      field('Date_Conducted__c', dataValue('Date_Conducted')),
      field('ODK_Key__c', dataValue('*meta-instance-id*')),
      field('Unique_Entity_ID__c', dataValue('Unique_Entity_ID')),
      field('Interviewee__c', dataValue('Interviewee')),
      field('Interviewee_Role__c', dataValue('Interviewee_Role')),
      field(
        'Interviewee_Primary_Phone__c',
        dataValue('Interviewee_Primary_Phone')
      ),
      field('Interviewee_Phone_2__c', dataValue('Interviewee_Phone_2')),
      field('Interviewee_Phone_3__c', dataValue('Interviewee_Phone_3')),
      field(
        'Interviewee_Primary_Email__c',
        dataValue('Interviewee_Primary_Email')
      ),
      field('Trade_Name__c', dataValue('Trade_Name')),
      field('Registered_Name__c', dataValue('Registered_Name')),
      field('Location_Description__c', dataValue('Location_Description')),
      field('Main_Office_Country__c', dataValue('Main_Office_Country')),
      field('Main_Office_Region_Province_or_County__c', function (state) {
        return arrayToString(
          [
            dataValue('Main_Office_Region_Province_or_County_a')(state),
            dataValue('Main_Office_Region_Province_or_County_b')(state),
            dataValue('Main_Office_Region_Province_or_County_c')(state),
            dataValue('Main_Office_Region_Province_or_County_d')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field('Main_Office_City__c', function (state) {
        return arrayToString(
          [
            dataValue('Main_Office_City_a')(state),
            dataValue('Main_Office_City_b')(state),
            dataValue('Main_Office_City_c')(state),
            dataValue('Main_Office_City_d')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field(
        'Main_Office_Street_Address__c',
        dataValue('Main_Office_Street_Address')
      ),
      field('Geolocation__Latitude__s', dataValue('gps:Latitude')),
      field('Geolocation__Longitude__s', dataValue('gps:Longitude')),
      field('Main_Contact_First__c', dataValue('Main_Contact_First')),
      field('Main_Contact_Last__c', dataValue('Main_Contact_Last')),
      field('Main_Contact_Role__c', dataValue('Main_Contact_Role')),
      field('Main_Contact_Role_Other__c', dataValue('Main_Contact_Role_Other')),
      field(
        'Main_Contact_Phone_Mobile__c',
        dataValue('Main_Contact_Phone_Mobile')
      ),
      field('Main_Contact_Phone_Work__c', dataValue('Main_Contact_Phone_Work')),
      field(
        'Main_Contact_Phone_Other__c',
        dataValue('Main_Contact_Phone_Other')
      ),
      field('Main_Contact_Email_Work__c', dataValue('Main_Contact_Email_Work')),
      field('General_Phone__c', dataValue('General_Phone')),
      field('General_Email__c', dataValue('General_Email')),
      field('Website__c', dataValue('Website')),
      field('Interest_in_Website__c', dataValue('Interest_in_Website')),
      field(
        'Hours_of_Operation_Start__c',
        dataValue('Hours_of_Operation_Start')
      ),
      field('Hours_of_Operation_End__c', dataValue('Hours_of_Operation_End')),
      field(
        'Hours_of_Operation_Other__c',
        dataValue('Hours_of_Operation_Other')
      ),
      field(
        'Hours_of_Operation_Other_Start__c',
        dataValue('Hours_of_Operation_Other_Start')
      ),
      field(
        'Hours_of_Operation_Other_End__c',
        dataValue('Hours_of_Operation_Other_End')
      ),
      field(
        'Goods_and_Services_Description__c',
        dataValue('Goods_and_Services_Description')
      ),
      field('Primary_Sector__c', dataValue('Primary_Sector')),
      field('Primary_Subsectors__c', function (state) {
        return arrayToString(
          [
            dataValue('Primary_Subsectors_1')(state),
            dataValue('Primary_Subsectors_2')(state),
            dataValue('Primary_Subsectors_3')(state),
            dataValue('Primary_Subsectors_4')(state),
            dataValue('Primary_Subsectors_5')(state),
            dataValue('Primary_Subsectors_6')(state),
            dataValue('Primary_Subsectors_7')(state),
            dataValue('Primary_Subsectors_8')(state),
            dataValue('Primary_Subsectors_9')(state),
            dataValue('Primary_Subsectors_10')(state),
            dataValue('Primary_Subsectors_l1')(state),
            dataValue('Primary_Subsectors_12')(state),
            dataValue('Primary_Subsectors_13')(state),
            dataValue('Primary_Subsectors_14')(state),
            dataValue('Primary_Subsectors_15')(state),
            dataValue('Primary_Subsectors_16')(state),
            dataValue('Primary_Subsectors_17')(state),
            dataValue('Primary_Subsectors_18')(state),
            dataValue('Primary_Subsectors_19')(state),
            dataValue('Primary_Subsectors_20')(state),
            dataValue('Primary_Subsectors_21')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field('Other_Sectors__c', function (state) {
        return arrayToString(dataValue('Other_Sectors')(state), ',');
      }),
      field('Other_Subsectors__c', function (state) {
        return arrayToString(
          [
            dataValue('Other_Subsectors_1')(state),
            dataValue('Other_Subsectors_2')(state),
            dataValue('Other_Subsectors_3')(state),
            dataValue('Other_Subsectors_4')(state),
            dataValue('Other_Subsectors_5')(state),
            dataValue('Other_Subsectors_6')(state),
            dataValue('Other_Subsectors_7')(state),
            dataValue('Other_Subsectors_8')(state),
            dataValue('Other_Subsectors_9')(state),
            dataValue('Other_Subsectors_10')(state),
            dataValue('Other_Subsectors_l1')(state),
            dataValue('Other_Subsectors_12')(state),
            dataValue('Other_Subsectors_13')(state),
            dataValue('Other_Subsectors_14')(state),
            dataValue('Other_Subsectors_15')(state),
            dataValue('Other_Subsectors_16')(state),
            dataValue('Other_Subsectors_17')(state),
            dataValue('Other_Subsectors_18')(state),
            dataValue('Other_Subsectors_19')(state),
            dataValue('Other_Subsectors_20')(state),
            dataValue('Other_Subsectors_21')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field(
        'Entity_and_Registration_1__c',
        dataValue('Entity_and_Registration_1')
      ),
      field(
        'Entity_and_Registration_2__c',
        dataValue('Entity_and_Registration_2')
      ),
      field(
        'Entity_and_Registration_3__c',
        dataValue('Entity_and_Registration_3')
      ),
      field('Registration_Date__c', dataValue('Registration_Date')),
      field('Registration_Active__c', dataValue('Registration_Active')),
      field(
        'Business_Operation_Licenses__c',
        dataValue('Business_Operation_Licenses')
      ),
      field(
        'Business_Operation_Certificates__c',
        dataValue('Business_Operation_Certificates')
      ),
      field('Association_Memberships__c', dataValue('Association_Memberships')),
      field('Vendor_List_Memberships__c', dataValue('Vendor_List_Memberships')),
      field('Has_Marketing_Plan__c', dataValue('Has_Marketing_Plan')),
      field('Number_of_Competitors__c', dataValue('Number_of_Competitors')),
      field('Start_of_Operations__c', dataValue('Start_of_Operations')),
      field('Primary_Language__c', dataValue('Primary_Language')),
      field('Primary_Language_Other__c', dataValue('Primary_Language_Other')),
      field('English_Speakers__c', dataValue('English_Speakers')),
      field('Other_Languages__c', dataValue('Other_Languages')),
      field(
        'Frequency_of_Internet_Access__c',
        dataValue('Frequency_of_Internet_Access')
      ),
      field(
        'Method_of_Internet_Access__c',
        dataValue('Method_of_Internet_Access')
      ),
      field(
        'Method_of_Internet_Access_Other__c',
        dataValue('Method_of_Internet_Access_Other')
      ),
      field('Frequency_of_Email_Use__c', dataValue('Frequency_of_Email_Use')),
      field('Type_of_Email_Use__c', dataValue('Type_of_Email_Use')),
      field('Counties_Regions_Serviced__c', function (state) {
        return arrayToString(
          [
            dataValue('Counties_Regions_Serviced_a')(state),
            dataValue('Counties_Regions_Serviced_b')(state),
            dataValue('Counties_Regions_Serviced_c')(state),
            dataValue('Counties_Regions_Serviced_d')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field('Additional_Branches__c', dataValue('Additional_Branches')),
      field('Branch_Locations__c', function (state) {
        return arrayToString(
          [
            dataValue('Branch_Locations_a')(state),
            dataValue('Branch_Locations_b')(state),
            dataValue('Branch_Locations_c')(state),
            dataValue('Branch_Locations_d')(state),
          ].filter(Boolean),
          ','
        );
      }),
      field(
        'Majority_Local_or_Foreign__c',
        dataValue('Majority_Local_or_Foreign')
      ),
      field('Num_of_Owners__c', dataValue('Num_of_Owners')),
      field('Num_of_Female_Owners__c', dataValue('Num_of_Female_Owners')),
      field('Num_of_Male_Owners__c', dataValue('Num_of_Male_Owners')),
      field(
        'Primary_Owner_is_Same_as_Main_Contact__c',
        dataValue('Primary_Owner_is_Same_as_Main_Contact')
      ),
      field('Primary_Owner__c', dataValue('Primary_Owner')),
      field('Primary_Owner_Gender__c', dataValue('Primary_Owner_Gender')),
      field(
        'Primary_Owner_Gender_Other__c',
        dataValue('Primary_Owner_Gender_Other')
      ),
      field(
        'Primary_Owner_Nationality__c',
        dataValue('Primary_Owner_Nationality')
      ),
      field(
        'Primary_Owner_Phone_Mobile__c',
        dataValue('Primary_Owner_Phone_Mobile')
      ),
      field(
        'Primary_Owner_Phone_Work__c',
        dataValue('Primary_Owner_Phone_Work')
      ),
      field(
        'Primary_Owner_Phone_Other__c',
        dataValue('Primary_Owner_Phone_Other')
      ),
      field('Primary_Owner_Email__c', dataValue('Primary_Owner_Email')),
      field('Num_of_Businesses_Owned__c', dataValue('Num_of_Businesses_Owned')),
      field(
        'Names_of_Businesses_Owned__c',
        dataValue('Names_of_Businesses_Owned')
      ),
      field('Num_of_Managers__c', dataValue('Num_of_Managers')),
      field('Num_of_Female_Managers__c', dataValue('Num_of_Female_Managers')),
      field('Num_of_Male_Managers__c', dataValue('Num_of_Male_Managers')),
      field('Finance_Management__c', dataValue('Finance_Management')),
      field(
        'Finance_Management_Other__c',
        dataValue('Finance_Management_Other')
      ),
      field('Dedicated_HR_Manager__c', dataValue('Dedicated_HR_Manager')),
      field(
        'Num_of_Permanent_Full_Time_Employees__c',
        dataValue('Num_of_Permanent_Full_Time_Employees')
      ),
      field(
        'Num_of_Perm_Full_Time_Female_Employees__c',
        dataValue('Num_of_Perm_Full_Time_Female_Employees')
      ),
      field(
        'Num_of_Perm_Full_Time_Male_Employees__c',
        dataValue('Num_of_Perm_Full_Time_Male_Employees')
      ),
      field(
        'Num_of_Full_Time_Temporary_Employees__c',
        dataValue('Num_of_Full_Time_Temporary_Employees')
      ),
      field(
        'Num_of_Full_Time_Temp_Female_Employees__c',
        dataValue('Num_of_Full_Time_Temp_Female_Employees')
      ),
      field(
        'Num_of_Full_Time_Temp_Male_Employees__c',
        dataValue('Num_of_Full_Time_Temp_Male_Employees')
      ),
      field(
        'Num_of_Local_Staff_Full_Part_Time__c',
        dataValue('Num_of_Local_Staff_Full_Part_Time')
      ),
      field(
        'Num_of_Expatriate_Staff_Full_Part_Time__c',
        dataValue('Num_of_Expatriate_Staff_Full_Part_Time')
      ),
      field(
        'International_Client_in_Past_Six_Months__c',
        dataValue('International_Client_in_Past_Six_Months')
      ),
      field('Principal_Client_Name__c', dataValue('Principal_Client_Name')),
      field(
        'Foreign_or_Domestic_Principal_Client__c',
        dataValue('Foreign_or_Domestic_Principal_Client')
      ),
      field('Principal_Client_Sector__c', dataValue('Principal_Client_Sector')),
      field(
        'Goods_Services_Provided_to_this_Client__c',
        dataValue('Goods_Services_Provided_to_this_Client')
      ),
      field(
        'End_of_Last_Contract_with_this_Client__c',
        dataValue('End_of_Last_Contract_with_this_Client')
      ),
      field(
        'Value_Goods_Services_Sold_Last_6_Months__c',
        dataValue('Value_Goods_Services_Sold_Last_6_Months')
      ),
      field(
        'Value_Goods_Sold_Last_6_Months_USD__c',
        dataValue('Value_Goods_Sold_Last_6_Months_USD')
      ),
      field(
        'Access_to_Finance_Constraint_Ranking__c',
        dataValue('Access_to_Finance_Constraint_Ranking')
      ),
      field('Bank_Account__c', dataValue('Bank_Account')),
      field('Bank_Guarantee__c', dataValue('Bank_Guarantee')),
      field(
        'Satisfied_with_Current_Bank__c',
        dataValue('Satisfied_with_Current_Bank')
      ),
      field(
        'Describe_Satisfaction_with_Current_Bank__c',
        dataValue('Describe_Satisfaction_with_Current_Bank')
      ),
      field(
        'Has_Received_a_Formal_Loan__c',
        dataValue('Has_Received_a_Formal_Loan')
      ),
      field('Formal_Loan_Provider__c', dataValue('Formal_Loan_Provider')),
      field(
        'Formal_Loan_Amount_Received__c',
        dataValue('Formal_Loan_Amount_Received')
      ),
      field(
        'Formal_Loan_Amount_Received_USD__c',
        dataValue('Formal_Loan_Amount_Received_USD')
      ),
      field(
        'Date_Formal_Loan_Received__c',
        dataValue('Date_Formal_Loan_Received')
      ),
      field('Formal_Loan_Purpose__c', dataValue('Formal_Loan_Purpose')),
      field(
        'Formal_Loan_Purpose_Other__c',
        dataValue('Formal_Loan_Purpose_Other')
      ),
      field('Formal_Loan_Repaid__c', dataValue('Formal_Loan_Repaid')),
      field('Interested_in_Loan__c', dataValue('Interested_in_Loan')),
      field('Interested_Loan_Amount__c', dataValue('Interested_Loan_Amount')),
      field(
        'Interested_Loan_Amount_USD__c',
        dataValue('Interested_Loan_Amount_USD')
      ),
      field(
        'Interested_Loan_Duration__c',
        dataValue('Interested_Loan_Duration')
      ),
      field('Interested_Loan_Purpose__c', dataValue('Interested_Loan_Purpose')),
      field(
        'Interested_Loan_Purpose_Other__c',
        dataValue('Interested_Loan_Purpose_Other')
      ),
      field(
        'Formal_Loan_Confidence_Ranking__c',
        dataValue('Formal_Loan_Confidence_Ranking')
      ),
      field(
        'Received_Loan_from_Family_Friends__c',
        dataValue('Received_Loan_from_Family_Friends')
      ),
      field(
        'Family_Friend_Loan_Amount__c',
        dataValue('Family_Friend_Loan_Amount')
      ),
      field(
        'Family_Friend_Loan_Amount_USD__c',
        dataValue('Family_Friend_Loan_Amount_USD')
      ),
      field(
        'Received_Loan_from_Informal_Lenders__c',
        dataValue('Received_Loan_from_Informal_Lenders')
      ),
      field(
        'Informal_Lender_Loan_Amount__c',
        dataValue('Informal_Lender_Loan_Amount')
      ),
      field(
        'Informal_Lender_Loan_Amount_USD__c',
        dataValue('Informal_Lender_Loan_Amount_USD')
      ),
      field(
        'Interested_in_Investor_Business_Partner__c',
        dataValue('Interested_in_Investor_Business_Partner')
      ),
      field(
        'Total_Turnover_Previous_Month__c',
        dataValue('Total_Turnover_Previous_Month')
      ),
      field(
        'Total_Turnover_Previous_Month_USD__c',
        dataValue('Total_Turnover_Previous_Month_USD')
      ),
      field(
        'Total_Turnover_Previous_Fiscal_Year__c',
        dataValue('Total_Turnover_Previous_Fiscal_Year')
      ),
      field(
        'Total_Turnover_Previous_Fiscal_Yr_USD__c',
        dataValue('Total_Turnover_Previous_Fiscal_Yr_USD')
      ),
      field(
        'Total_Profit_Previous_Fiscal_Year__c',
        dataValue('Total_Profit_Previous_Fiscal_Year')
      ),
      field(
        'Total_Profit_Previous_Fiscal_Year_USD__c',
        dataValue('Total_Profit_Previous_Fiscal_Year_USD')
      ),
      field(
        'Accepted_Modes_of_Payment__c',
        dataValue('Accepted_Modes_of_Payment')
      ),
      field(
        'Accepted_Modes_of_Payment_Other__c',
        dataValue('Accepted_Modes_of_Payment_Other')
      ),
      field(
        'Avg_Expen_Spent_on_Imported_Goods_Year__c',
        dataValue('Avg_Expen_Spent_on_Imported_Goods_Year')
      ),
      field(
        'Avg_Expen_Spent_on_Domestic_Goods_Year__c',
        dataValue('Avg_Expen_Spent_on_Domestic_Goods_Year')
      ),
      field(
        'Avg_Expen_on_Domestic_Suppliers_Year__c',
        dataValue('Avg_Expen_on_Domestic_Suppliers_Year')
      ),
      field(
        'Avg_Expen_on_Intl_Suppliers_Year__c',
        dataValue('Avg_Expen_on_Intl_Suppliers_Year')
      ),
      field(
        'Avg_Expen_Spent_on_Salaries_Year__c',
        dataValue('Avg_Expen_Spent_on_Salaries_Year')
      ),
      field(
        'Balance_Sheet_Statement_Available__c',
        dataValue('Balance_Sheet_Statement_Available')
      ),
      field('Profit_Loss_Statement__c', dataValue('Profit_Loss_Statement')),
      field('Directly_Imports_Goods__c', dataValue('Directly_Imports_Goods')),
      field(
        'Avg_of_Total_Costs_from_Imports__c',
        dataValue('Avg_of_Total_Costs_from_Imports')
      ),
      field('Highest_Costing_Import__c', dataValue('Highest_Costing_Import')),
      field(
        'Origin_Country_of_Highest_Costing_Import__c',
        dataValue('Origin_Country_of_Highest_Costing_Import')
      ),
      field('Other_Import_Countries__c', dataValue('Other_Import_Countries')),
      field('Exports_Products__c', dataValue('Exports_Products')),
      field(
        'Avg_of_Total_Revenue_from_Exports__c',
        dataValue('Avg_of_Total_Revenue_from_Exports')
      ),
      field('Primary_Export__c', dataValue('Primary_Export')),
      field('Destination_of_Exports__c', dataValue('Destination_of_Exports')),
      field(
        'Profits_Expectation_Next_Six_Months__c',
        dataValue('Profits_Expectation_Next_Six_Months')
      ),
      field(
        'Staff_Expectation_Next_Six_Months__c',
        dataValue('Staff_Expectation_Next_Six_Months')
      ),
      field(
        'Int_l_Entities_Represent_Good_Opp__c',
        dataValue('Int_l_Entities_Represent_Good_Opp')
      ),
      field(
        'Int_l_Concessionaires_Represent_Good_Opp__c',
        dataValue('Int_l_Concessionaires_Represent_Good_Opp')
      ),
      field(
        'Sectors_Representing_Best_Local_Opps__c',
        dataValue('Sectors_Presenting_Best_Local_Opps')
      ),
      field(
        'Obstacle_Working_with_Intl_Entities__c',
        dataValue('Obstacle_Working_with_Intl_Entities')
      ),
      field(
        'Biggest_Challenge_Next_6_Months__c',
        dataValue('Biggest_Challenge_Next_6_Months')
      ),
      field(
        'Second_Biggest_Challenge_Next_6_Months__c',
        dataValue('Second_Biggest_Challenge_Next_6_Months')
      ),
      field(
        'Financial_Management_Ranking__c',
        dataValue('Financial_Management_Ranking')
      ),
      field(
        'Access_to_Finance_Ranking__c',
        dataValue('Access_to_Finance_Ranking')
      ),
      field('Administration_Ranking__c', dataValue('Administration_Ranking')),
      field('Human_Resources_Ranking__c', dataValue('Human_Resources_Ranking')),
      field(
        'Technical_Expertise_Ranking__c',
        dataValue('Technical_Expertise_Ranking')
      ),
      field(
        'Training_Helps_Efficiency__c',
        dataValue('Training_Helps_Efficiency')
      ),
      field(
        'Capacity_Building_Activities_Offered__c',
        dataValue('Capacity_Building_Activities_Offered')
      ),
      field(
        'Capacity_Building_Offered_Other__c',
        dataValue('Capacity_Building_Offered_Other')
      ),
      field(
        'Can_Provide_Quotations_WP_on_Request__c',
        dataValue('Can_Provide_Quotations_WP_on_Request')
      ),
      field('Knows_What_a_Tender_is__c', dataValue('Knows_What_a_Tender_is')),
      field(
        'Frequency_Checking_for_Tenders__c',
        dataValue('Frequency_Checking_for_Tenders')
      ),
      field(
        'Has_Submitted_a_Tender_Bid__c',
        dataValue('Has_Submitted_a_Tender_Bid')
      ),
      field(
        'Has_Won_Tenders_in_Past_Six_Months__c',
        dataValue('Has_Won_Tenders_in_Past_Six_Months')
      ),
      field(
        'Details_of_Recently_Won_Tenders__c',
        dataValue('Details_of_Recently_Won_Tenders')
      ),
      field(
        'Num_of_Gov_t_Bids_in_Last_Six_Months__c',
        dataValue('Num_of_Govt_Bids_in_Last_Six_Months')
      ),
      field(
        'Num_of_Private_Bids_in_Last_Six_Months__c',
        dataValue('Num_of_Private_Bids_in_Last_Six_Months')
      ),
      field(
        'Num_of_NGO_INGO_IO_Bids_Last_Six_Months__c',
        dataValue('Num_of_NGO_INGO_IO_Bids_Last_Six_Months')
      ),
      field(
        'Main_Reason_for_Lost_Bids__c',
        dataValue('Main_Reason_for_Lost_Bids')
      ),
      field(
        'Main_Reason_for_Lost_Bids_Other__c',
        dataValue('Main_Reason_for_Lost_Bids_Other__c')
      ),
      field(
        'Main_Reason_for_Not_Bidding_on_Tenders__c',
        dataValue('Main_Reason_for_Not_Bidding_on_Tenders')
      ),
      field(
        'Main_Reason_Not_Bidding_Tenders_Others__c',
        dataValue('Main_Reason_Not_Bidding_Tenders_Others__c')
      ),
      field(
        'Planning_to_Bid_on_Future_Tenders__c',
        dataValue('Planning_to_Bid_on_Tenders_in_the_Future')
      ),
      field(
        'Services_That_Would_Help_to_Win_Tenders__c',
        dataValue('Services_That_Would_Help_to_Win_Tenders')
      ),
      field(
        'Interested_in_Future_BM_Communications__c',
        dataValue('Interested_in_Future_BM_Communications')
      ),
      field(
        'Future_BM_Communications__c',
        dataValue('Future_BM_Communications')
      ),
      field(
        'Interested_in_Attending_Future_Training__c',
        dataValue('Interested_in_Attending_Future_Training')
      ),
      field(
        'Training_Most_Interested_in_Attending__c',
        dataValue('Training_Most_Interested_in_Attending')
      ),
      field(
        'Training_Most_Interested_in_Other__c',
        dataValue('Training_Most_Interested_in_Other')
      ),
      field(
        'Amount_Willing_to_Pay_for_Training__c',
        dataValue('Amount_Willing_to_Pay_for_Training')
      ),
      field(
        'Amount_Willing_to_Pay_for_Training__c',
        dataValue('Amount_Willing_to_Pay_for_Training')
      ),
      field(
        'Training_Interested_In_but_Not_Offered__c',
        dataValue('Training_Interested_In_but_Not_Offered')
      ),
      field(
        'Advice_to_Entrepreneurs_in_your_Country__c',
        dataValue('Advice_to_Entrepreneurs_in_your_Country')
      ),
      field('Interviewer_Comments__c', dataValue('Interviewer_Comments'))
    )
  )
);

```