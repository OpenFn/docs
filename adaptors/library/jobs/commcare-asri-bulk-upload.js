
// Bulk update obat lookup-table 
fn(state => {
    const { medication_ids, visit, obat } = state.data
    state.medication_ids = medication_ids;
    state.visit = visit
    state.obat = obat
    return state
  })
  
  fn(state => {
  
    const properties = state.visit.properties;
  
    const data = state.medication_ids
      .flatMap(medicine => {
        const medicineName = properties[Object.keys(medicine)[0]];
        return state.obat.filter(
          item => item.fields['Nama'] === medicineName
        ).map(item => ({ ...item, fields: { ...item.fields, satusehat_id: Object.values(medicine)[0] } }))
      }).map(obat => {
        const data = {
          UID: obat.id,
          'DELETE(Y/N)': 'N',
          'field:Nama': obat.fields['Nama'],
          'field:Satuan': obat.fields['Satuan'],
          'field:Harga': obat.fields['Harga'],
          'field:kfa_codes': obat.fields['kfa_codes'],
          'field:satusehat_id': obat.fields['satusehat_id'],
          'field:strength': obat.fields['strength'],
          'field:strength_unit': obat.fields['strength_unit'],
        }
        return data
      })
  
    state.medicationMappedData = {
      types: [{
        'DELETE(Y/N)': 'N',
        table_id: 'test_obat', 
        'is_global?': 'yes',
        'field 1': 'Nama',
        'field 2': 'Satuan',
        'field 3': 'Harga',
        'field 4': 'kfa_codes',
        'field 5': 'satusehat_id',
        'field 6': 'strength',
        'field 7': 'strength_unit',
      }],
      test_obat: data,
    }
  
    return state
  })
  
  bulk(
    'lookup-table',
    state => state.medicationMappedData,
    { replace: false }
  )
