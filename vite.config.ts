import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import windicss from "vite-plugin-windicss";

export default defineConfig({
  plugins: [solidPlugin(), windicss()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
