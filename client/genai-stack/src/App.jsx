import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import LibraryPanel from "./components/LibraryPanel";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";
import ChatModal from "./components/chatModal";
import "./index.css";

export default function App() {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ flex: 1, display: "flex", minHeight: 0 }}>
        <LibraryPanel />
        <Canvas />
        <ConfigPanel />
      </Box>
      <ChatModal />
    </Box>
  );
}