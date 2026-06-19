// Split large arrays into chunks, then post each chunk sequentially.
// Use separate each() calls instead of Promise.all with array.map.
fn(state => {
  function chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size)
      chunks.push(arr.slice(i, i + size));
    return chunks;
  }

  return {
    ...state,
    clinicChunks: chunk($.data.Clinic, 10),
    patientChunks: chunk($.data.Patient, 10),
    visitChunks: chunk($.data.Visit, 10),
    deletedVisitChunks: chunk($.data.VisitDeleted, 10),
  };
});

each($.clinicChunks, post($.configuration.inboxUrl, { clinics: $.data }));
each($.patientChunks, post($.configuration.inboxUrl, { patients: $.data }));
each($.visitChunks, post($.configuration.inboxUrl, { visits: $.data }));
each($.deletedVisitChunks, post($.configuration.inboxUrl, { deletedVisits: $.data }));

fn(state => {
  console.log('All chunks posted successfully.');
  return state;
});
