import React from 'react';

export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Mobile data collection
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
          Google Sheets
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
          Data lake
        </>
      ),
    },
      position: { x: 200, y: 150 },
  },
    {
    id: '4',
    type: 'input',
    data: {
      label: (
        <>
          Business analysis tool
        </>
      ),
    },
    position: { x: 400, y: 50 },

  },

  { id: 'e1-3', source: '1', target: '3',  animated: true, arrowHeadType: 'arrowclosed' },
  { id: 'e2-3', source: '2', target: '3',  animated: true, arrowHeadType: 'arrowclosed'},
  { id: 'e4-3', source: '4', target: '3',  animated: true, arrowHeadType: 'arrowclosed'}
  
  
];