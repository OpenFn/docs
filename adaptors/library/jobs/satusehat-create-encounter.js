post('Encounter', {
    resourceType: 'Encounter',
    status: 'arrived',
    class: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: 'AMB',
      display: 'ambulatory',
    },
    subject: {
      reference: 'Patient/100000030009',
      display: 'Budi Santoso',
    },
    participant: [
      {
        type: [
          {
            coding: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                code: 'ATND',
                display: 'attender',
              },
            ],
          },
        ],
        individual: {
          reference: 'Practitioner/N10000001',
          display: 'Dokter Bronsig',
        },
      },
    ],
    period: {
      start: '2022-06-14T07:00:00+07:00',
    },
    location: [
      {
        location: {
          reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',
          display:
            'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
        },
      },
    ],
    statusHistory: [
      {
        status: 'arrived',
        period: {
          start: '2022-06-14T07:00:00+07:00',
        },
      },
    ],
    serviceProvider: {
      reference: 'Organization/{{Org_id}}',
    },
    identifier: [
      {
        system: 'http://sys-ids.kemkes.go.id/encounter/{{Org_id}}',
        value: 'P20240001',
      },
    ],
  });