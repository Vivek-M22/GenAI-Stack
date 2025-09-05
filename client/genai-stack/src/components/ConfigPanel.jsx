import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ConfigPanel() {
  return (
    <Paper elevation={0} sx={{ width: 320, borderLeft: 1, borderColor: "divider" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          Configuration
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Select a node to configure its options (API keys, models, prompts, etc.).
        </Typography>
      </Box>
    </Paper>
  );
}