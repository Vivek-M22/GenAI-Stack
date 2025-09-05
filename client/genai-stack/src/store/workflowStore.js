import { create } from "zustand";

export const useWorkflowStore = create((set) => ({
  chatOpen: false,
  messages: [],
  openChat: () => set({ chatOpen: true }),
  closeChat: () => set({ chatOpen: false }),
  addMessage: (m) => set((s) => ({ messages: [...s.messages, m] })),
  resetChat: () => set({ messages: [] }),
}));