import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: "#74C69D",
        "dark-50": "rgba(33, 37, 41, 0.5)",
        "dark-100": "#212529",
        "green-100": "#74C69D",

        input: "#EEEEEE",
      },
      boxShadow: {
        service: "3px 4px 12px 1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
export default config;
