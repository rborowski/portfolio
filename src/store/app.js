// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const appName = import.meta.env.VITE_APP_NAME;

  return {
    appName,
  };
});
