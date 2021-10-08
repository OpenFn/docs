import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Background,
  ReactFlowProps,
  ReactFlowProvider
} from 'react-flow-renderer';

import initialElementsMD from './initial-elements-master-data';

const onLoad = reactFlowInstance => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const Graph_Master_View = () => {
  const [elementsMD, setElements] = useState(initialElementsMD);
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));
  const onConnect = params => setElements(els => addEdge(params, els));

  
  return (
    <div className="providerflow" style={{width: '100%', height: 400}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper"><div style={{width: '100%', height: 400}}>
          <ReactFlow
            elements={elementsMD}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onLoad={onLoad}
            snapToGrid={true}
            snapGrid={[15, 15]}
            zoomOnScroll={false}
          >
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div></div>
      </ReactFlowProvider>
    </div>
   );
};

export default Graph_Master_View;
