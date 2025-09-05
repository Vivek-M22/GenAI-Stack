import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const items = [
  { kind: "userQuery", label: "User Query" },
  { kind: "knowledgeBase", label: "Knowledge Base" },
  { kind: "llmEngine", label: "LLM Engine" },
  { kind: "output", label: "Output" },
];

export default function LibraryPanel() {
  return (
    <Paper elevation={0} sx={{ width: 280, borderRight: 1, borderColor: "divider" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Components
        </Typography>
      </Box>
      <List dense disablePadding>
        {items.map((it) => (
          <ListItem key={it.kind} disablePadding>
            <ListItemButton
              draggable
              onDragStart={(e) => e.dataTransfer.setData("application/reactflow", it.kind)}
            >
              <ListItemText primary={it.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}