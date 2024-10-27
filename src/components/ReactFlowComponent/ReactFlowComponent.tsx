import { FC } from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const dataToFlowMapper = (data: any) => {
    const sourseData = data
    let mapedData = null
    // return data.map((node: any) => {
    //     return {
    //     id: node.id,
    //     position: node.position,
    //     data: node.data,
    //     };
    // });

    return mapedData
}

// const ReactFlowComponent = () => {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <ReactFlow nodes={initialNodes} edges={initialEdges} />
//     </div>
//   );
// };

// export default ReactFlowComponent;


type CustomReactFlowComponentProps = {
    nodes: any[];
    edges: any[];
};
const CustomReactFlowComponent: FC<CustomReactFlowComponentProps> =({nodes, edges}: CustomReactFlowComponentProps) => {
    console.log(nodes, edges)
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
};

export default CustomReactFlowComponent;
