// Create a user and submit their case to commcare

post('user', {
  username: 'janedoe42',
  password: 'qwer12345',
  first_name: 'Jane',
  last_name: 'Doe',
  default_phone_number: '+50253311399',
  email: 'jdoe@example.org',
});

submitXls([{ name: $.data.username, feeling_sick: 'No' }], {
  case_type: 'pregnancy',
  search_field: 'case_id',
  search_column: 'case_id',
  name_column: 'name',
  create_new_cases: 'on',
});
