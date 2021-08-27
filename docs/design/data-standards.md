---
title: Data Standards
---

# What are data standards? 
Data standards are created to encourage all parties to store and exchange data using the same the language. These standards are agreed upon and evolve and update as necessary. Health data interoperability is becoming increasingly necessary and data standards are used to reduce costs and make on demand data sharing more efficient. 

Example Data Standards: 
- [JSON](https://www.json.org/)
- [Brownfield Site Register Open Data Standard](https://www.gov.uk/government/publications/brownfield-land-registers-data-standard)
- [Fast Health Interoperability Resources (FHIR)](https://www.hl7.org/fhir/)


# FHIR-HL7
**Fast Healthcare Interoperability Resources (FHIR)** is one such data standard which describes data formats and elements for exchanging electronic health records. It was developed by [HL7 International](https://www.hl7.org/) and defines resources which satisfy the majority of common use cases in health care data exchange. A system can be built from scratch to be FHIR compliant, it can be integrated or the system's data can be exported and transformed in a way that shares the data in a FHIR-compliant format.

Learn more about FHIR at the following pages:
- HL7® FHIR® Foundation - https://fhir.org/
- DSME Presentation on applying standard: https://vimeo.com/462026684
- Digital Square FHIR overview: https://www.youtube.com/watch?v=JehDVozOCeU


### Functional Use Cases 
1. **Document Sharing**: FHIR can bridge the gap between source and destination systems and make sharing medical documents such as test results and clinic letters much easier, dramatically improving patient outcomes. 
2. **Personal Health Records**: The use of PHRs helps patients more easily access their health records and monitor their health via mobile applications and web portals. FHIR helps hospitals connect **Electronic Medical Records (EMR)** to these third party systems.
3. **Decision Support:** FHIR can improve decision support by connecting health information systems with external decision support systems.

To learn more about these use cases visit https://www.hl7.org/fhir/usecases.html. 

## Implementing FHIR on OpenFn
OpenFn can help make your data FHIR-compliant. Rather than building your own system that is FHIR compliant, **write one OpenFn job to translate your data to FHIR. This means in just hours you can be FHIR compliant.** Here’s how it might work:
Say you have 1) a source system which has not implemented FHIR and collects patient data on a mobile device and 2) a FHIR-compliant destination eHealth system. 
The OpenFn solution would... 
1. Retrieve the patient data from the source system
2. Transform the data and ensure it adheres to the FHIR [patient](https://www.hl7.org/fhir/patient-example.json.html) and [encounter](https://www.hl7.org/fhir/encounter-example.json.html) data standards
3. Send the FHIR compliant data to the destination eHealth system 


## OpenFn Example Implementation  
- Instant OpenHIE: https://docs.openfn.org/documentation/instant-openhie/
- Demo Repository: https://github.com/OpenFn/instant-demo

