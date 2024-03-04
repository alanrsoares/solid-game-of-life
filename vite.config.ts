import { defineConfig } from "vite";
import path from "path";
import solidPlugin from "vite-plugin-solid";
import windicss from "vite-plugin-windicss";

export default defineConfig({
  plugins: [solidPlugin(), windicss()],
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    },
  },
});
