import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import ReactFlow, { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState } from "reactflow";

import UserQueryNode from "../nodes/UserQueryNode";
import KnowledgeBaseNode from "../nodes/KnowledgeBaseNode";
import LLMEngineNode from "../nodes/LLMEngineNode";
import OutputNode from "../nodes/OutputNode";

const nodeTypes = {
  userQuery: UserQueryNode,
  knowledgeBase: KnowledgeBaseNode,
  llmEngine: LLMEngineNode,
  output: OutputNode,
};

export default function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const kind = event.dataTransfer.getData("application/reactflow");
    if (!kind) return;
    const position = { x: event.clientX - 360, y: event.clientY - 160 };
    const id = String(Date.now());
    setNodes((nds) =>
      nds.concat({ id, type: kind, position, data: { label: kind } })
    );
  }, [setNodes]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <Box sx={{ flex: 1 }} onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={16} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </Box>
  );
}