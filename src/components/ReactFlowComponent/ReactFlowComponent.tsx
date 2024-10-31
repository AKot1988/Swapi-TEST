import { FC, useCallback } from "react";
import {
  ReactFlow,
  Controls,
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
  console.log(setNodes);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div style={{ width: "100%", height: "100%" }} className={classes.flow}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CustomReactFlowComponent;
