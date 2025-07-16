// Get a birth record from OpenCRVS

fn(state => {
  const { data } = state;
  state.birthQuery = {
    event: 'birth',
    registrationStatuses: ['REGISTERED'],
    fatherFirstNames: data.fatherFirstNames,
    motherFirstNames: data.motherFirstNames,
    childGender: data.childGender,
    dateOfRegistrationStart: data.dateOfRegistrationStart,
    dateOfRegistrationEnd: data.dateOfRegistrationEnd,
    declarationJurisdictionId: data.declarationJurisdictionId,
    eventLocationId: data.eventLocationId,
  };

  return state;
});

queryEvents($.birthQuery, { count: 10, skip: 0 });
