import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "reactflow";

export default function KnowledgeBaseNode({ data }) {
  return (
    <Paper sx={{ p: 1.25 }}>
      <Typography fontWeight={600}>Knowledge Base</Typography>
      <Typography variant="caption" color="text.secondary">
        {data?.embeddingModel || "text-embedding-3-large"}
      </Typography>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Paper>
  );
}