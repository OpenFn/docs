// ----
// CommCare form submission mapped to the FHIR patient encounter standard,
// submitted by Simon Kelly @ Dimagi.
// ----

encounter(
    fields(
        field("resourceType", "Encounter"),
        field("status", "finished"),
        field("type", function(state) {
            return [{
                "coding": [{
                    "system": "momconnect:type",
                    "code": "8"
                }]
            }];
        }),
        field("contained", function(state) {
            return [{
                "resourceType": "Patient",
                "id": "patient",
                "identifier": [{
                    "use": "official",
                    "system": "momconnect:sanid",
                    "value": dataValue("properties.id_number")(state)
                }],
                "name": [{
                    "use": "official",
                    "family": [dataValue("properties.family_name")(state)],
                    "given": [dataValue("properties.given_name")(state)],
                    "text": dataValue("properties.given_name")(state).concat(
                      " ", dataValue("properties.family_name")(state)
                    )
                }],
                "gender": "female",
                "birthDate": dataValue("properties.dob")(state),
                "telecom": [{
                    "system": "phone",
                    "value": dataValue("properties.msisdn")(state)
                }],
                "communication": [{
                    "language": {
                        "coding": [{
                            "system": "urn:ietf:bcp:47",
                            "code": dataValue("properties.language_code")(state)
                        }]
                    },
                    "preferred": true
                }]
            },
            {
                "resourceType": "Observation",
                "id": "edd",
                "code": {
                    "coding": [{
                        "system": "http://loinc.org",
                        "code": "11778-8",
                        "display": "Delivery date Estimated"
                    }]
                },
                "valueDateTime": dataValue("properties.edd")(state),
                "status": "preliminary"
            }];
        }),
        field("patient", function(state){
            return {
                "reference": "#patient"
            };
        }),
        field("period", function(state){
            return {
                "start": dataValue("properties.visit_date")(state)
            };
        }),
        field("extension", function(state){
            return [
                {
                  "url": "momconnect:mha",
                  "valueInteger": 2
                }, {
                  "url": "momconnect:swt",
                  "valueInteger": 3
                },{
                  "url": "momconnect:dmsisdn",
                  "valueString": "+27831111111"
                }
            ];
        })
    )
)
