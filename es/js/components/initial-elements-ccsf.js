import React from 'react';

export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          CommCare
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          Community health worker
        </>
      ),
    },
    position: { x: 50, y: 150 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          Salesforce
        </>
      ),
    },
    position: { x: 400, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },

  { id: 'e1-2', source: '2', target: '1', label: 'submits a form', animated: true },
  { id: 'e1-3', source: '1', target: '3', label: 'adds a new row in', animated: true },
  
  
];