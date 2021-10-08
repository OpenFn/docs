import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Background,
  ReactFlowProps,
  ReactFlowProvider
} from 'react-flow-renderer';

import initialElements from './initial-elements-ccsf';

const onLoad = reactFlowInstance => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const Graph_CommCaretoSF = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));
  const onConnect = params => setElements(els => addEdge(params, els));

  
  return (
    <div className="providerflow1" style={{width: '100%', height: 400}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper"><div style={{width: '100%', height: 400}}>
            <ReactFlow
              elements={elements}
              onElementsRemove={onElementsRemove}
              onConnect={onConnect}
              onLoad={onLoad}
              snapToGrid={true}
              snapGrid={[20, 20]}
              zoomOnScroll={false}
            >
              <Background color="#aaa" gap={16} />
            </ReactFlow>
        </div></div>
      </ReactFlowProvider>
    </div>
  );
};

export default Graph_CommCaretoSF;
