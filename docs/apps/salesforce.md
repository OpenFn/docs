---
title: Salesforce
---

## App Overview
~~~ 
# Functional overview - What is this app and how it is typically used? 
# Links to available documentaiton
~~~ 

[Salesforce](https://www.salesforce.com/) is a **customer relationship management (CRM)** platform which hosts applications that customers can access online.

### Data Model
~~~ 
# How is this app's data structured? Are there key resources/tables/data elements this app is built around? 
# Links to any other online docs or resources? 
~~~ 
Much of Salesforce data is stored in **individual records (rows)** and organized within **objects (tables)**.
Learn more about how data is structured in Salesforce at the links below:   
- How data is organized in Salesforce: https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5  
- Salesforce objects: https://www.salesforcetutorial.com/salesforce-objects/


## Integration Use Cases
~~~ 
# Why might someone want to integrate with this app? 
# What are some business use cases for using the APIs? 
~~~ 

Example user stories:
- As a program assistant at an organization that hosts events in rural areas with limited access to internet, I would like to take attendance on a mobile device and automatically sync participant information to Salesforce so I can better analyze event popularity. 
- As a project manager at an NGO, I would like to see all data consolidated in Salesforce so I can better monitor fundraising activities and nurture relationships with all stakeholders. 

## APIs & Integration Options

1. **APIs:** Salesforce has a robust set of RESTful APIs that support a wide range
   of operations. See OpenFn API adaptor
   [`language-salesforce`](https://github.com/OpenFn/language-salesforce).
2. **Webhook:** Using
   [`Outbound Messages`](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm)
   and workflow automation, admins can configure notifications to be sent to
   OpenFn when a specific event occurs.
   
## App Setup & Integration Tips
~~~ 
# How does one secure access to the app? What type of access do they need to start integrating? 
# Any API-specific features or settings that should be enabled? Any other setup steps?  
# Add links to this app's documentation on how the app can be installed, configured, etc. 
# Mapping or design considerations specific to this app?
~~~
### 1. Field API Names
- In the **Salesforce Classic View**, select `Setup` from the top naviagation menu. Search for `Object` in the left-hand search box without hitting Enter. From the quick results, select Create -> Objects. This takes you to all the custom objects. Select an object and you'll see all the fields and relationships on the object.
- You can also view Salesforce API names by downloading the Chrome [exstention](https://chrome.google.com/webstore/detail/salesforce-show-api-name/dcfecmnffjopafbbbaepgopfcphnoham) **Salesforce Show API Name**. Follow the instructions for adding it to Chrome and use it to display API names without going to Setup.
- **API field names** are used in the OpenFn jobs during an integration, not **field labels**.
![image](https://user-images.githubusercontent.com/80456839/128650593-343090da-7f12-468a-aa51-1f87f1cf9f34.png)


### 2. Mapping and Design Considerations
- **External Identifiers**: This is important for integrations because it prevents duplicate records from being created in Salesforce. To enable, ensure `External ID` is checked on the field settings. Learn more about external identifiers in Salesforce at https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html
![image](https://user-images.githubusercontent.com/80456839/128650680-e10fa395-bddb-45bd-bd6c-3a9dda8998f8.png)

- **Relationships**: When mapping lookup fields in Salesforce, use relationships. Ex. Say there is a `Person` object in Salesforce with a field called `Parent` that looks up to another `Person` object. This would require the relationship class to use the `externalID` field to connect the two objects.
- **Multi-select fields**: During the mapping phase, make sure that option values for **multi-select** fields also match. If they do not match, specify the transformation required. Ex. When mapping a field that specifies gender, the source system could have the options "male", "female", "other" and the destination system has the options "Male", "Female", "Other". The mappings would need to specify a transformation that makes the fist letter in each option lowercase.

### 3. Salesforce Credentials

Salesforce requires a username, password, login URL, and security token to
authenticate via a user. **Note every time you reset the user's password, the
security token will reset and you need to update the Credential record used in
your OpenFn job.**

![Credentials Menu](/img/credentials.png)

A "Salesforce" Credential record should include:

- Username
- Password
- Security Token (Salesforce will email you this when you set your password. If
  you cannot find "security token" in your inbox, see below for how to reset
  it.)
- Login URL: If a production system, use `https://login.salesforce.com/` (unless
  you have a custom domain `https://domainName.salesforce.com/`). For sandbox
  environments, `https://test.salesforce.com/`.

![Salesforce Cred](/img/salesforce-cred.png)

For **OpenFn/devtools** or **OpenFn/engine** the raw JSON of the credential for
inclusion in `state` should look like this:

```json
"configuration": {
  "loginUrl": "https://login.salesforce.com/",
  "username": "openfn@salesforce.org",
  "password": "testing123",
  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"
},
```

#### Resetting Your Security Token

[See instructions here](https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5)
or below screenshot. Once reset, you will receive an email from Salesforce.
Please save this `security token` in your OpenFn `Credential`.

![Token Reset](/img/security-token.png)

### Common Errors
~~~ 
# What ares some common error messages OpenFn users might encounter? Any guidance on how to troubleshoot?
~~~
1. `INVALID_FIELD: Foreign key external id not found`: This error message usually means that the parent record for an object has not been synced. For example, if one tries uploading participants for an event that has not yet been synced.
2. `TypeError [Error]`:This error usually mean that the job received a part of the message that it wasn't expecting, or there is a syntax error in your job code. It means that the job needs to be updated to know how to handle the message.
3. `NOT_FOUND: Provided external ID field does not exist or is not accessible`: This error usually means that `External ID` has not been checked in the field settings in Salesforce. See Mapping and Design Considerations section above. 
4. `MULTIPLE_CHOICES: Multiple records found`: This error means that Salesforce has found multiple records with the `External ID` that was specified. 
5. `REQUIRED_FIELD_MISSING: Required fields are missing`: This error usually means that a field which is required on the object being updated has not been set. 


### OpenFn Adaptors
OpenFn has a robust [`language-salesforce`](https://github.com/OpenFn/language-salesforce) adaptor with a range of helper functions for common CRUD & upsert operations, and for accessing the Salesforce bulk API. 

### Example Implementations
- MiracleFeet (CommCare-to-Salesforce sync): https://github.com/OpenFn/miracle-feet
- Lwala (CommCare-Salesforce 2-way sync): https://github.com/OpenFn/lwala
- GRS CommCare - Salesforce sync: https://github.com/OpenFn/grassroot-soccer
