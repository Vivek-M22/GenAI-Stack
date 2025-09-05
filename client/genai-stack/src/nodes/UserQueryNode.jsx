import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "reactflow";

export default function UserQueryNode({ data }) {
  return (
    <Paper sx={{ p: 1.25 }}>
      <Typography fontWeight={600}>User Query</Typography>
      <Typography variant="caption" color="text.secondary">
        {data?.placeholder || "Write your query in chat"}
      </Typography>
      <Handle type="source" position={Position.Right} />
    </Paper>
  );
}