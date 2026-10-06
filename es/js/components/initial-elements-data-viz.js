import React from 'react';

export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          SQL DB
        </>
      )
    },
    position: { x: 200, y: 50},
  },
  {
    id: '2',
    type: 'input',
    data: {
      label: (
        <>
          CRM
        </>
      ),
    },
    position: { x: 0, y: 50 },
  },
  {
    id: '3',
    type: 'default',
    data: {
      label: (
        <>
          Power BI, Tableau, etc.
        </>
      ),
    },
      position: { x: 200, y: 150 },
  },
    

  { id: 'e1-3', source: '1', target: '3',  animated: true, arrowHeadType: 'arrowclosed' },
  { id: 'e2-3', source: '2', target: '3',  animated: true, arrowHeadType: 'arrowclosed'},
  { id: 'e4-3', source: '4', target: '3',  animated: true, arrowHeadType: 'arrowclosed'}
  
  
];