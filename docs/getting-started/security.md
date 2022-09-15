---
sidebar_label: Integration Security
title: Security considerations for integration projects
---

# Integration Security

Even if the products and applications you're using as part of your integration project can be considered secure, there are still many data security risks in data integration solutions, especially during the implementation process.

We've developed the OpenFn Security Guidebook  to help digital implementers better understand key security best practices, risks and considerations for data integration implementations. 

Through our engagements with security teams at different partners, our own research and development, consultations with security experts internal and external, and consultations with other communities of practice, we have developed 23 security considerations, best practices and supporting resources and combined them into a Guidebook to guide you through the project cycle.  

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
<li>Test, test, and test again</li>
<li>Train the solution users and relevant system administrators</li>
<li>Review your security requirements again before go-live</li>
<li>Determine point of contacts for reporting security issues</li> 
</ol>
<h4>Ongoing Monitoring & Management</h4>
<ol start="21"> 
<li>Consider Governance structures for ongoing management & changing requirements</li>
<li>Train partners on change management</li>
<li>Have a strategy for access management</li>
</ol>


<p><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSflwoTK6G7JnilqTqh7ntlzXARU2ITREXDV6hJCVpvN5gwVRn97sLVrG7pYV54UP2GhX7YPO_JSHn5/embed?start=false&loop=false&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></p>      

You can download the slides [here](https://drive.google.com/uc?export=download&id=1wqzEbu7eICJ-qOW-2372mYCFRqay-4Amj0STn8ZAYvg).

Here are some resources and implementer communities to check out:

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

More information can be found at [docs.openfn.org](http://docs.openfn.org). 

Here are the OpenFn templates and resources referenced in this document: 
[Mapping Specification Template](https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit#gid=1822444315)
[Solution Architecture Diagram](https://lucid.app/lucidchart/1e997197-2d67-4393-8394-a532d83561b2/edit#?templateid=fb96ae05-e288-4d1f-b3fc-2cbf7641a7cc)
[BPMN Diagram resources](https://docs.openfn.org/documentation/design/design-quickstart/#use-bpmn-for-standardized-documentation)
[Project Security Configuration & Go-Live Checklist](https://docs.google.com/document/d/1CbQkN7SqNmXeqt3nMTYP4ioQlTuwF2LbDkkFqhp0zsU/edit?usp=sharing)

For OpenFn users, learn more about OpenFn security & compliance at [openfn.org/trust](http://openfn.org/trust) and [openfn.org/compliance](http://openfn.org/compliance). 

### Communities of practice & other experts

Here are some other communities you may consider following for more security guidance.  

1. [OpenHIE Privacy & Security Working Group](https://wiki.ohie.org/display/resources/Privacy+and+Security+Working+Group+Call) 
2. [GovStack](https://www.govstack.global/)
3. [DHIS2 Security Team & Community of Practice](https://dhis2.org/security/)
4. [Asia eHealth Information Network (AeHIN) Communities of Practice](https://www.asiaehealthinformationnetwork.org/communities-of-practice/)
