# Writing Jobs for OpenFn

## Basics
WIP.


##### Functions(arguments)
- `each(JSON_path, operation(...))`
- `create(object__c, fields(...))`
- `upsert(object__c, external_id__c, fields(...))`
- `fields(...)`
- `field(destination_field_name__c, value)`
- `lookup(destination_relationship_name__r, external_id__c, value)`
- `sourceValue(JSON_path)`

## language-common
The expressions that (almost) every adaptor uses: `dataValue/1`, `merge/3`, etc...


### Accessing the "data array" from Open Data Kit
Notice how we use "each" to get data from each item inside the "data array" in ODK.
```
each(
    "$.data.data[*]",
    create("ODK_Submission__c", fields(
        field("Site_School_ID_Number__c", dataValue("school")),
        field("Date_Completed__c", dataValue("date")),
        field("comments__c", dataValue("comments")),
        field("ODK_Key__c", dataValue("*meta-instance-id*"))
    ))
)
```

## language-salesforce
`create/2`, `upsert/3` and `lookup/3`


## language-dhis2
`event/1`, `dataSet/1`

### Sample DHIS2 job:
```js
event(
  fields(
    field("program", "eBAyeGv0exc"),
    field("orgUnit", "DiszpKrYNg8"),
    field("eventDate", dataValue("properties.date")),
    field("status", "COMPLETED"),
    field("storedBy", "admin"),
    field("coordinate", {
      "latitude": "59.8",
      "longitude": "10.9"
    }),
    field("dataValues", function(state) {
      return [
        { "dataElement": "qrur9Dvnyt5", "value": dataValue("properties.prop_a")(state) },
        { "dataElement": "oZg33kd9taw", "value": dataValue("properties.prop_b")(state) },
        { "dataElement": "msodh3rEMJa", "value": dataValue("properties.prop_c")(state) }
      ]
    })
  )
)
```

## language-openmrs
`person/1`, `patient/1`

### sample openMRS expression, creates a person and then a patient
```
person(
  fields(
    field("gender", "F"),
    field("names", function(state) {
      return [{
        "givenName": dataValue("form.first_name")(state),
        "familyName": dataValue("form.last_name")(state)
      }]
    })
  )
),
patient(
  fields(
    field("person", lastReferenceValue("uuid")),
    field("identifiers", function(state) {
      return [{
        "identifier": "1234",
        "identifierType": "8d79403a-c2cc-11de-8d13-0010c6dffd0f",
        "location": "8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
        "preferred": true
      }]
    })
  )
)
```
