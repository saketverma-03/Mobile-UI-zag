/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0d0d0d",

          secondary: "#1a1919",

          accent: "#262626",

          neutral: "#000000",

          "base-100": "#ffffff",

          info: "#0072f5",

          success: "#21ca51",

          warning: "#ff6052",

          error: "#de1b8d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
