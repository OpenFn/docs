// ----
// Create new events in DHIS2 using a generic JSON message, submitted by
// Taylor Downs @ OpenFn.
// ---

event(
  fields(
    field("program", "eBAyeGv0exc"),
    field("orgUnit", "DiszpKrYNg8"),
    field("eventDate", dataValue("meta.date")),
    field("status", "COMPLETED"),
    field("storedBy", "admin"),
    field("coordinate", {
      "latitude": "59.8",
      "longitude": "10.9"
    }),
    field("dataValues", function(state) {
      return [
        dataElement("qrur9Dvnyt5", dataValue("form.prop_a")(state)),
        dataElement("oZg33kd9taw", dataValue("form.prop_b")(state)),
        dataElement("msodh3rEMJa", dataValue("form.prop_c")(state))
      ]
    })
  )
)
