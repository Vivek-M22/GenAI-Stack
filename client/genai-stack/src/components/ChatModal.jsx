import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useWorkflowStore } from "../store/workFlowStore";
import { runWorkflow } from "../services/api";

export default function ChatModal() {
  const { chatOpen, closeChat, messages, addMessage } = useWorkflowStore();
  const [input, setInput] = useState("");

  async function onSend() {
    const q = input.trim();
    if (!q) return;
    addMessage({ role: "user", content: q });
    setInput("");
    const res = await runWorkflow({ query: q });
    addMessage({ role: "assistant", content: res.answer || "No response" });
  }

  return (
    <Dialog open={chatOpen} onClose={closeChat} maxWidth="md" fullWidth>
      <DialogTitle>GenAI Stack Chat</DialogTitle>
      <DialogContent dividers sx={{ minHeight: 380 }}>
        <Stack spacing={2}>
          {messages.length === 0 && (
            <Typography color="text.secondary" align="center">
              Start a conversation to test your stack
            </Typography>
          )}
          {messages.map((m, i) => (
            <Box key={i} sx={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
              <Box
                sx={{
                  px: 1.5, py: 1,
                  bgcolor: m.role === "user" ? "success.main" : "grey.100",
                  color: m.role === "user" ? "common.white" : "text.primary",
                  borderRadius: 1.5,
                  maxWidth: "75%",
                }}
              >
                <Typography variant="body2">{m.content}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ px: 2, py: 1.5 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Send a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <Button variant="contained" color="success" onClick={onSend}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}