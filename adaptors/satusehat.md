---
title: Satusehat Adaptor
---

## About Satusehat

[Satusehat](https://satusehat.kemkes.go.id/platform/docs/id/playbook/introduction/)
is a health data exchange ecosystem that connects information systems or
applications from all members of the Indonesian digital health ecosystem
including health facilities, regulators, guarantors, and digital service
providers.

SATUSEHAT uses HL7 [FHIR](https://www.hl7.org/fhir/) (Fast Healthcare Interoperability Resources) in implementing standard data models and Application Programming Interfaces (APIs).

:::info FHIR

FHIR (Fast Healthcare Interoperability Resources) is a global (international) standard that defines the data format and its elements (called " resources ") and an application programming interface (API ) standard for information exchange

:::

Here is an example of how a POST HTTP request for creating an `Encounter` resource looks like in Satusehat with the FHIR format:


```json
{
    "resourceType": "Encounter",
    "status": "arrived",
    "class": {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "AMB",
        "display": "ambulatory"
    },
    "subject": {
        "reference": "Patient/100000030009",
        "display": "Budi Santoso"
    },
    "participant": [
        {
            "type": [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                            "code": "ATND",
                            "display": "attender"
                        }
                    ]
                }
            ],
            "individual": {
                "reference": "Practitioner/N10000001",
                "display": "Dokter Bronsig"
            }
        }
    ],
    "period": {
        "start": "2022-06-14T07:00:00+07:00"
    },
    "location": [
        {
            "location": {
                "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228",
                "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"
            }
        }
    ],
    "statusHistory": [
        {
            "status": "arrived",
            "period": {
                "start": "2022-06-14T07:00:00+07:00"
            }
        }
    ],
    "serviceProvider": {
        "reference": "Organization/{{Org_id}}"
    },
    "identifier": [
        {
            "system": "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}",
            "value": "P20240001"
        }
    ]
}

```

Checkout Satusehat's [Postman Collection](https://satusehat.kemkes.go.id/platform/docs/id/postman-workshop/) for more examples and resources.

## Integration Options

1. **[REST APIs](https://satusehat.kemkes.go.id/platform/docs/id/postman-workshop/)**
   that enable external services like OpenFn to _pull_ data from Satusehat, or
   push data from external apps to Satusehat. This option is suited for
   \_scheduled or workflows that must update data in Satusehat with external
   information.

## How to Extract or Modify Satusehat Data

**See the available [helper functions](/adaptors/packages/satusehat-docs)** for
a full list of functions supported by this adaptor for extracting and/or
modifying Satusehat data.

To fetch data from Satusehat via OpenFn, you can:

1. Configure a new workflow with a "cron" trigger and define the frequency of
   your workflow (e.g., daily at 8:00AM)
2. Add a "Get data" step linked to this Satusehat adaptor
3. Edit the Step and open the Inspector (`</>`) to write a basic job using this
   adaptor's [GET](/adaptors/packages/satusehat-docs#get) to specify which data
   you want to extract or "pull" from Satusehat

See [platform docs](/documentation/build/workflows) for more guidance on
building workflows.

## Authentication

[See Satusehat docs](https://satusehat.kemkes.go.id/platform/docs/id/api-catalogue/authentication/)
for the latest on supported authentication methods.

When integrating with Satusehat via OpenFn, there are 2 primary authentication
methods supported:

1. Basic authentication (requires clientId + clientSecret), or
2. Access token (requires access token created after authenticating in
   Satusehat)

**See this adaptor's
[Configuration docs](/adaptors/packages/satusehat-configuration-schema) for more
on required authentication parameters.**

See platform docs
[on managing credentials](/documentation/manage-projects/manage-credentials) for
how to configure a credential in OpenFn and see the below Satusehat credential
example.

![Satusehat Cred](/img/satusehat_credential_edit.png)

If you're using the `Raw JSON` credential type, your configuration may look like
this:

```json
{
  "clientId": "your-client-id", // e.g 12345678
  "clientSecret": "your-client-secret-key", // e.g abcd123456
  "baseUrl": "your-base-url", // e.g https://api-satusehat-stg.dto.kemkes.go.id
  "accessToken": "your-access-token" // Don't add accessToken if you're using client secret and client id
}
```
