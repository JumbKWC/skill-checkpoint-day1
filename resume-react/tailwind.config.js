/** @type {import('tailwindcss').Config} */
export const content = [];
export const theme = {
  extend: {
    mytheme: {
      primary: "#608AF5",
      secondary: "#f000b8",
      accent: "#1dcdbc",
      neutral: "#2b3440",
      "base-100": "#ffffff",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
    },
  },
};
export const plugins = [require("daisyui")];
