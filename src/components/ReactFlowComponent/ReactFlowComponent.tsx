import React, { FC, useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import classes from "./ReactFlowComponent.module.scss";

import "@xyflow/react/dist/style.css";

type CustomReactFlowComponentProps = {
  initialNodes: any[];
  initialEdges: any[];
};
const CustomReactFlowComponent: FC<CustomReactFlowComponentProps> = ({
  initialNodes,
  initialEdges,
}: CustomReactFlowComponentProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log(nodes, edges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div
      style={{ width: "100%", height: "70%"}}
      className={classes.flow}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
      >
        <Controls />
        <MiniMap />
        {/* <Background variant="dots" gap={12} size={1} /> */}
      </ReactFlow>
    </div>
  );
};

export default CustomReactFlowComponent;
