---
sidebar_label: Security
title: Security considerations for data integration projects
---

# Security Guidelines for Data Integration Implementations

Even if the technologies leveraged in your integration solution can be considered secure, there are still many security risks in data integration, especially during implementation. With support from Digital Square, we have therefore developed a **Security Guidebook for Data Integration Implementations**.

Since 2014, we at Open Function Group (the primary custodians of OpenFn) have helped implement nearly 100 data integration solutions for over 45 NGO and government partners around the world. Through our engagements with security teams at different partners, our own research and development, consultations with security experts internal and external, and partnerships with other communities of practice, we have developed a strong understanding of security best practices and considerations for data integration projects that we would like to share with the wider digital development community. 


**This Guidebook aims to help digital implementers in the Digital Public Good and Global Goods communities better understand security risks and presents 23 best practices for the various implementation phases of data integration projects.** It also links to some open-sourced OFG resources our team uses in our own implementation process for OpenFn projects. 

You can  find a complete list of the 23 best practices on this page below.

**To access the Guidebook, check out the below slides or click the link to share & download:** [https://bit.ly/security_guidebook](https://bit.ly/security_guidebook) 


<p><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSflwoTK6G7JnilqTqh7ntlzXARU2ITREXDV6hJCVpvN5gwVRn97sLVrG7pYV54UP2GhX7YPO_JSHn5/embed?start=false&loop=false&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></p>  


<h3>Secure Data Integration: 23 Implementation Best Practices</h3>
<h4>Core Tenets</h4>
<ol> 
 <li>Understand relevant policies specific to data sharing, storage, and protection</li>
 <li>Only extract & transfer essential data points</li>
 <li>Document, document, document</li> 
</ol>
<h4>Analyze & Plan</h4>
<ol start="4"> 
 <li>Don’t take API security for granted</li>  
 <li>Budget time for security testing</li>    
</ol>

<h4>Design</h4>
<ol start="6"> 
<li>Resource: Mapping specification template</li>
<li>Resource: Architecture data flow diagram</li>
<li>Resource: Project Security Configuration & Go-Live Checklist</li>
<li>Consider idempotency, unique identifiers, & “upsert” operations to ensure data integrity</li>
<li>Design for failures & transaction reprocessing</li>
<li>Consider data validation</li>
</ol>
<h4>Build</h4>
<ol start="12"> 
<li>Use change tracking & version control</li>
<li>Encrypt where possible</li>
<li>Use strong authentication;  don’t talk to strangers</li>
<li>Authorization scopes to limit access</li>
<li>Log transactions for activity monitoring & control what information is logged</li>
</ol>
<h4>Deploy</h4>
<ol start="17"> 
<li>Test again, especially credentials, before deployment</li>
<li>Train users and system administrators on integration security</li>
<li>Review your security requirements again before go-live</li>
<li>Determine point of contacts for reporting security issues</li> 
</ol>
<h4>Ongoing Monitoring & Management</h4>
<ol start="21"> 
<li>Consider Governance models for ongoing management & changing requirements</li>
<li>Train partners on change management</li>
<li>Have a strategy for access management</li>
</ol>

Read on for other resources and implementer communities to check out.

### Resources referenced in the guidebook

+ [Principles of Digital Development Privacy and Security Guide](https://digitalprinciples.org/wp-content/uploads/PDD_Principle-AddressPrivacySecurity_v2.pdf) 
+ [UNICEF policy on personal data protection](https://www.unicef.org/supply/media/5356/file/Policy-on-personal-data-protection-July2020.pdf.pdf)
+ [International Committee of the Red Cross Handbook on data protection in humanitarian action](https://www.icrc.org/en/data-protection-humanitarian-action-handbook)
+ [GDPR Quick Guide](https://gdpr.eu/what-is-gdpr/)
+ [Sanity.io A Rough Guide to Running a GDPR Compliant SaaS Business](https://www.sanity.io/blog/a-rough-guide-to-running-a-gdpr-compliant-saas-business)
+ [OWASP API Security Project](https://owasp.org/www-project-api-security/)
+ [GovStack Security & API Standards](https://www.govstack.global/wp-content/uploads/2021/08/Security_Building_Block_Definition_1.0.1.pdf)
+ [Health Data Governance Principles](https://www.healthdataprinciples.org/)
+ [CDC Health Data Privacy, Confidentiality, and Security Guidelines](https://gicsandbox.org/sandbox-cms/health-data-privacy-confidentiality-and-security-guidelines-development-toolkit#dd01fcf80d4d46f08a099b282bc23f16)

### OpenFn Resources

More implementation guidance can be found across this Docs site. For OpenFn users, learn more about OpenFn security & compliance at [openfn.org/trust](http://openfn.org/trust) and [openfn.org/compliance](http://openfn.org/compliance). 

Here are the key OpenFn templates and resources referenced in the Guidebook: 
+ [Mapping Specification Template](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit#gid=1822444315)
+ [Solution Architecture Diagram](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit#?templateid=fb96ae05-e288-4d1f-b3fc-2cbf7641a7cc)
+ [BPMN Diagram resources](https://docs.openfn.org/documentation/design/design-quickstart/#use-bpmn-for-standardized-documentation)
+ [Project Security Configuration & Go-Live Checklist](https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing)



### Communities of practice & other experts

Here are some other communities you may consider following for more security guidance.  

1. [OpenHIE Privacy & Security Working Group](https://wiki.ohie.org/display/resources/Privacy+and+Security+Working+Group+Call) 
2. [GovStack](https://www.govstack.global/)
3. [DHIS2 Security Team & Community of Practice](https://dhis2.org/security/)
4. [Asia eHealth Information Network (AeHIN) Communities of Practice](https://www.asiaehealthinformationnetwork.org/communities-of-practice/)
