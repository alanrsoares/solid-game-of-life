import { defineConfig } from "vite";
import path from "path";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    },
  },
});
