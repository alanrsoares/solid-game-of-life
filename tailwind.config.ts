import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
};

export default config;
