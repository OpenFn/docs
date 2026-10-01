---
title: Fragmentos de código
sidebar_label: Fragmentos de código
translation_source_hash: 45bf7a84c28b09f0af8a976d6d3b790ebc094a9d
translation_review_status: machine
---

Esta sección reúne varios fragmentos de código JavaScript útiles que puedes usar
en tus jobs.

La mayoría de los fragmentos están implementados como callbacks de otras
operaciones.

Puedes copiar estos callbacks y adaptarlos a tu propio código.

## General {#general}

### Reemplazo personalizado {#custom-replacer}

```js
field('destination__c', state => {
  return dataValue('path_to_data')(state).toString().replace('cats', 'dogs');
});
```

Esto reemplaza todos los "cats" por "dogs" en la cadena que está en
`path_to_data`.

> **NOTA:** La función `replace()` de JavaScript solo reemplaza la primera
> aparición del argumento que indiques. Si buscas una forma de reemplazar todas
> las apariciones, te sugerimos usar una regex como hicimos en el
> [ejemplo](#concatenation-of-null-values) de más abajo.

### arrayToString personalizado {#custom-arraytostring}

```js
field("target_specie_list__c", function(state) {
  return Array.apply(
    null, sourceValue("$.data.target_specie_list")(state)
  ).join(', ')
}),
```

Toma un array y concatena cada elemento en una cadena, con ", " como separador.

### Concatenación personalizada {#custom-concatenation}

```js
field('ODK_Key__c', function (state) {
  return dataValue('metaId')(state).concat('(', dataValue('index')(state), ')');
});
```

Esto concatena dos valores.

### Concatenación de valores nulos {#concatenation-of-null-values}

Esto concatena muchos valores, aunque uno o más sean nulos, y los escribe en un
campo llamado Main_Office_City_c.

```js
...
  field("Main_Office_City__c", function(state) {
    return arrayToString([
      dataValue("Main_Office_City_a")(state) === null ? "" : dataValue("Main_Office_City_a")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_b")(state) === null ? "" : dataValue("Main_Office_City_b")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_c")(state) === null ? "" : dataValue("Main_Office_City_c")(state).toString().replace(/-/g, " "),
      dataValue("Main_Office_City_d")(state) === null ? "" : dataValue("Main_Office_City_d")(state).toString().replace(/-/g, " "),
    ].filter(Boolean), ',')
  })
```

> Fíjate en que esta función personalizada usa la **regex** `/-/g` para
> asegurarse de que se tengan en cuenta todas las apariciones (g = búsqueda
> global).

### ID personalizado de la enésima referencia {#custom-nth-reference-id}

Si alguna vez quieres obtener el PRIMER objeto que creaste, o el SEGUNDO, o el
enésimo, una función como esta te sirve.

```js
field('parent__c', function (state) {
  return state.references[state.references.length - 1].id;
});
```

Fíjate en que, en lugar de tomar el id de lo "último" que se creó en Salesforce,
tomas el id de lo primero, o de lo segundo si reemplazas "length-1" por
"length-2".

## Salesforce {#salesforce}

### Convertir una cadena de fecha al formato ISO estándar para Salesforce {#convert-date-string-to-standard-iso-date-for-salesforce}

```js
field('Payment_Date__c', function (state) {
  return new Date(dataValue('payment_date')(state)).toISOString();
});
```

> **NOTA**: La salida de esta función siempre tiene el formato de la zona
> horaria GMT.

### Usar campos de ID externo para las relaciones en una carga masiva en Salesforce {#use-external-id-fields-for-relationships-during-a-bulk-load-in-salesforce}

```js
array.map(item => {
  return {
    Patient_Name__c: item.fullName,
    'Account.Account_External_ID__c': item.account
    'Clinic__r.Unique_Clinic_Identifier__c': item.clinicId,
    'RecordType.Name': item.type,
  };
});
```

### Upsert masivo con un ID externo en Salesforce {#bulk-upsert-with-an-external-id-in-salesforce}

```js
bulk(
  'Visit_new__c',
  'upsert',
  {
    extIdField: 'commcare_case_id__c',
    failOnError: true,
    allowNoOp: true,
  },
  dataValue('patients')
);
```
