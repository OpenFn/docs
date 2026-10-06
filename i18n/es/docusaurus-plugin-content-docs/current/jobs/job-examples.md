---
title: Ejemplos de código de jobs
sidebar_label: Ejemplos de jobs
translation_source_hash: e6b804b61b644b95048adfce67db6c76a4519068
translation_review_status: machine
---

Aquí encontrarás bloques de código para distintas funciones y formas de manejar
datos que puedes usar en tus jobs.

:::tip

Para ver jobs de ejemplo escritos por el equipo principal de OpenFn y otros
usuarios, consulta la [biblioteca](/adaptors/library) u otros repositorios de
proyectos en [GitHub.com/OpenFn](https://github.com/OpenFn).

:::

:::info ¿Preguntas?

Si tienes preguntas sobre cómo escribir jobs, pregunta en la
[comunidad](https://community.openfn.org) para recibir ayuda del equipo
principal de OpenFn y de otros implementadores.

:::

### Expresión de job (de CommCare a SF) {#job-expression-for-commcare-to-sf}

La siguiente expresión de job toma un recibo que coincide y usa sus datos para
hacer un upsert de un registro `Patient__c` en Salesforce y crear varios
registros nuevos de `Patient_Visit__c` (hijos de Patient).

```js
upsert(
  'Patient__c',
  'Patient_Id__c',
  fields(
    field('Patient_Id__c', dataValue('form.patient_ID')),
    relationship('Nurse__r', 'Nurse_ID_code__c', dataValue('form.staff_id')),
    field('Phone_Number__c', dataValue('form.mobile_phone'))
  )
);
each(
  join('$.data.form.visits[*]', '$.references[0].id', 'Id'),
  create(
    'Visit__c',
    fields(
      field('Patient__c', dataValue('Id')),
      field('Date__c', dataValue('date')),
      field('Reason__c', dataValue('why_did_they_see_doctor'))
    )
  )
);
```

### Acceder al "data array" en los envíos de Open Data Kit {#accessing-the-data-array-in-open-data-kit-submissions}

Fíjate en cómo usamos "each" para obtener los datos de cada elemento del "data
array" en ODK.

```js
each(
  '$.data.data[*]',
  create(
    'ODK_Submission__c',
    fields(
      field('Site_School_ID_Number__c', dataValue('school')),
      field('Date_Completed__c', dataValue('date')),
      field('comments__c', dataValue('comments')),
      field('ODK_Key__c', dataValue('*meta-instance-id*'))
    )
  )
);
```

### De ODK a Salesforce: crear un registro padre con muchos hijos a partir de los datos del padre {#odk-to-salesforce-create-parent-record-with-many-children-from-parent-data}

Aquí, el usuario lleva `time_end` y `parentId` del objeto padre a cada línea de
detalle.

```js
each(
  dataPath('data[*]'),
  combine(
    create(
      'transaction__c',
      fields(
        field('Transaction_Date__c', dataValue('today')),
        relationship(
          'Person_Responsible__r',
          'Staff_ID_Code__c',
          dataValue('person_code')
        ),
        field('metainstanceid__c', dataValue('*meta-instance-id*'))
      )
    ),
    each(
      merge(
        dataPath('line_items[*]'),
        fields(
          field('end', dataValue('time_end')),
          field('parentId', lastReferenceValue('id'))
        )
      ),
      create(
        'line_item__c',
        fields(
          field('transaction__c', dataValue('parentId')),
          field('Barcode__c', dataValue('product_barcode')),
          field('ODK_Form_Completed__c', dataValue('end'))
        )
      )
    )
  )
);
```

> **Nota: había un error conocido en la función `combine` que ya se corrigió.
> `combine` sirve para combinar dos operaciones en una y se suele usar para
> ejecutar varios `create` dentro de un `each(path, operation)`. Puedes ver el
> código fuente de combine aquí:
> [language-common: combine](https://github.com/OpenFn/language-common/blob/master/src/index.js#L204-L222)**

### Crear muchos registros hijos SIN un grupo de repetición en ODK {#create-many-child-records-without-a-repeat-group-in-odk}

```js
beta.each(
  '$.data.data[*]',
  upsert(
    'Outlet__c',
    'Outlet_Code__c',
    fields(
      field('Outlet_Code__c', dataValue('outlet_code')),
      field('Location__Latitude__s', dataValue('gps:Latitude')),
      field('Location__Longitude__s', dataValue('gps:Longitude'))
    )
  )
);
beta.each(
  '$.data.data[*]',
  upsert(
    'Outlet_Call__c',
    'Invoice_Number__c',
    fields(
      field('Invoice_Number__c', dataValue('invoice_number')),
      relationship('Outlet__r', 'Outlet_Code__c', dataValue('outlet_code')),
      relationship('RecordType', 'name', 'No Call Card'),
      field('Trip__c', 'a0FN0000008jPue'),
      relationship(
        'Sales_Person__r',
        'Sales_Rep_Code__c',
        dataValue('sales_rep_code')
      ),
      field('Date__c', dataValue('date')),
      field('Comments__c', dataValue('comments'))
    )
  )
);
```

### Salesforce: actualizar un registro {#salesforce-perform-an-update}

```js
update("Patient__c", fields(
  field("Id", dataValue("pathToSalesforceId")),
  field("Name__c", dataValue("patient.first_name")),
  field(...)
));
```

### Salesforce: definir el tipo de registro con 'relationship(...)' {#salesforce-set-record-type-using-relationship}

```js
create(
  'custom_obj__c',
  fields(
    relationship(
      'RecordType',
      'name',
      dataValue('submission_type'),
      field('name', dataValue('Name'))
    )
  )
);
```

### Salesforce: definir el tipo de registro con el ID del tipo de registro {#salesforce-set-record-type-using-record-type-id}

```js
each(
  '$.data.data[*]',
  create(
    'fancy_object__c',
    fields(
      field('RecordTypeId', '012110000008s19'),
      field('site_size', dataValue('size'))
    )
  )
);
```

### Telerivet: enviar un SMS a partir de una alerta de workflow de Salesforce {#telerivet-send-sms-based-on-salesforce-workflow-alert}

```js
send(
  fields(
    field(
      'to_number',
      dataValue(
        'Envelope.Body.notifications.Notification.sObject.phone_number__c'
      )
    ),
    field('message_type', 'sms'),
    field('route_id', ''),
    field('content', function (state) {
      return 'Hey there. Your name is '.concat(
        dataValue('Envelope.Body.notifications.Notification.sObject.name__c')(
          state
        ),
        '.'
      );
    })
  )
);
```

### HTTP: hacer fetch sin fallar {#http-fetch-but-dont-fail}

```js
// =============
// We use "fetchWithErrors(...)" so that when the
// SMS gateway returns an error the run does not "fail".
// It "succeeds" and then delivers that error message
// back to Salesforce with the "Update SMS Status" job.
// =============
fetchWithErrors({
  getEndpoint: 'send_to_contact',
  query: function (state) {
    return {
      msisdn:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Phone_Number__c,
      message:
        state.data.Envelope.Body.notifications.Notification.sObject
          .SMS__Message__c,
      api_key: 'some-secret-key',
    };
  },
  externalId: state.data.Envelope.Body.notifications.Notification.sObject.Id,
  postUrl: 'https://www.openfn.org/inbox/another-secret-key',
});
```

### Ejemplo de job para la API de eventos de DHIS2 {#sample-dhis2-events-api-job}

```js
event(
  fields(
    field('program', 'eBAyeGv0exc'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('eventDate', dataValue('properties.date')),
    field('status', 'COMPLETED'),
    field('storedBy', 'admin'),
    field('coordinate', {
      latitude: '59.8',
      longitude: '10.9',
    }),
    field('dataValues', function (state) {
      return [
        {
          dataElement: 'qrur9Dvnyt5',
          value: dataValue('properties.prop_a')(state),
        },
        {
          dataElement: 'oZg33kd9taw',
          value: dataValue('properties.prop_b')(state),
        },
        {
          dataElement: 'msodh3rEMJa',
          value: dataValue('properties.prop_c')(state),
        },
      ];
    })
  )
);
```

### Ejemplo de job para la API de data value sets de DHIS2 {#sample-dhis2-data-value-sets-api-job}

```js
dataValueSet(
  fields(
    field('dataSet', 'pBOMPrpg1QX'),
    field('orgUnit', 'DiszpKrYNg8'),
    field('period', '201401'),
    field('completeData', dataValue('date')),
    field('dataValues', function (state) {
      return [
        { dataElement: 'f7n9E0hX8qk', value: dataValue('prop_a')(state) },
        { dataElement: 'Ix2HsbDMLea', value: dataValue('prop_b')(state) },
        { dataElement: 'eY5ehpbEsB7', value: dataValue('prop_c')(state) },
      ];
    })
  )
);
```

### Ejemplo de expresión de OpenMRS que crea una persona y luego un paciente {#sample-openmrs-expression-creates-a-person-and-then-a-patient}

```js
person(
  fields(
    field('gender', 'F'),
    field('names', function (state) {
      return [
        {
          givenName: dataValue('form.first_name')(state),
          familyName: dataValue('form.last_name')(state),
        },
      ];
    })
  )
);
patient(
  fields(
    field('person', lastReferenceValue('uuid')),
    field('identifiers', function (state) {
      return [
        {
          identifier: '1234',
          identifierType: '8d79403a-c2cc-11de-8d13-0010c6dffd0f',
          location: '8d6c993e-c2cc-11de-8d13-0010c6dffd0f',
          preferred: true,
        },
      ];
    })
  )
);
```

### Combinar muchos valores en una ruta hija {#merge-many-values-into-a-child-path}

```js
each(
  merge(
    dataPath("CHILD_ARRAY[*]"),
    fields(
      field("metaId", dataValue("*meta-instance-id*")),
      field("parentId", lastReferenceValue("id"))
    )
  ),
  create(...)
)
```

### arrayToString {#arraytostring}

```js
arrayToString(arr, separator_string);
```

### Acceder a la URL de una imagen en un envío de ODK {#access-an-image-url-from-an-odk-submission}

```js
// In ODK the image URL is inside an image object...
field("Photo_URL_text__c", dataValue("image.url")),
```

### alterState (alterar el state) para asegurarte de que los datos estén en un array {#alterstate-alter-state-to-make-sure-data-is-in-an-array}

```js
// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)
fn(state => {
  const idCards = state.data.form.ID_cards_given_to_vendor;
  if (!Array.isArray(idCards)) {
    state.data.form.ID_cards_given_to_vendor = [idCards];
  }
  return state;
});

// Now state has been changed, and we carry on...
each(
  merge(
    dataPath('form.ID_cards_given_to_vendor[*]'),
    fields(
      field('Vendor_Id', dataValue('form.ID_vendor')),
      field('form_finished_time', dataValue('form.meta.timeEnd'))
    )
  ),
  upsert(
    'Small_Packet__c',
    'sp_id__c',
    fields(
      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),
      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),
      field(
        'Small_Packet_Distribution_Date__c',
        dataValue('form_finished_time')
      )
    )
  )
);
```

### Iniciar sesión en un servidor con un certificado SSL personalizado {#log-in-to-a-server-with-a-custom-ssl-certificate}

Este fragmento muestra cómo conectarte a un servidor seguro sin verificar el
certificado SSL. Define `strictSSL: false` en el argumento de opciones de la
función `post` de `language-http`.

```js
post(
  `${state.configuration.url}/${path}`,
  {
    headers: { 'content-type': 'application/json' },
    body: {
      email: 'Luka',
      password: 'somethingSecret',
    },
    strictSSL: false,
  },
  callback
);
```
