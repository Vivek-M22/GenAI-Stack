import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "reactflow";

export default function OutputNode() {
  return (
    <Paper sx={{ p: 1.25 }}>
      <Typography fontWeight={600}>Output</Typography>
      <Typography variant="caption" color="text.secondary">Displays final response</Typography>
      <Handle type="target" position={Position.Left} />
    </Paper>
  );
}