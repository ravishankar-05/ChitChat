import { create } from "zustand";
import { useEffect } from "react";

export const useThemeStore = create((set) => ({
  theme: "coffee", // Default theme
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set(() => ({ theme }));
  },
}));

// Ensuring theme is loaded correctly from localStorage in a client-safe way
export const useInitializeTheme = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("chat-theme") || "coffee";
    setTheme(savedTheme);
  }, [setTheme]);
};
