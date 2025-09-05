import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useWorkflowStore } from "../store/workFlowStore";

export default function Header() {
  const openChat = useWorkflowStore((s) => s.openChat);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GenAI Stack
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined">Build Stack</Button>
          <Button variant="contained" color="success" onClick={openChat}>
            Chat with Stack
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}