import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Library-Project/", // repo adın burası
  plugins: [react()],
});
