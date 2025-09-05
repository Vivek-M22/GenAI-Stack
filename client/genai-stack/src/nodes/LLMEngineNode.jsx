import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "reactflow";

export default function LLMEngineNode({ data }) {
  const provider = data?.provider || "openai";
  const model = data?.model || "gpt-4o-mini";
  return (
    <Paper sx={{ p: 1.25 }}>
      <Typography fontWeight={600}>LLM (OpenAI/Gemini)</Typography>
      <Typography variant="caption" color="text.secondary">
        {provider} · {model}
      </Typography>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Paper>
  );
}