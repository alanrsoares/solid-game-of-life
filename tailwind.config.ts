import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: "'Gordita Regular', sans-serif",
      },
      colors: {
        primary: "#2c4f7c",
        secondary: "#335d92",
        light: "#446b9e",
        dark: "#0d1825",
        accent: "#66e6ac",
      },
    },
  },
});
