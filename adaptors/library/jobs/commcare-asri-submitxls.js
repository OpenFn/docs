// Update the kunjungan case with a new row of data. The row contains the case_id and satusehat_id

submitXls([{ case_id: 'abcde', satusehat_id: '12345' }], {
    case_type: 'kunjungan',
    search_field: 'case_id',
    search_column: 'case_id',
    create_new_cases: 'off',
  });