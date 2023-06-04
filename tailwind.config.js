/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        neutral: {
          DEFAULT: "var(--neutral)",
        },
        "neutral-alt": {
          DEFAULT: "#var(--neutral-alt)",
        },
        foreground: {
          DEFAULT: "#var(--foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
        },
        warning: {
          DEFAULT: "var(--warning)",
        },
        danger: {
          DEFAULT: "var(--danger)",
        },

        "white-alpha": {
          DEFAULT: "var(--white-alpha)",
          25: "var(--white-alpha-25)",
          50: "var(--white-alpha-50)",
          75: "var(--white-alpha-75)",
        },
        "black-alpha": {
          DEFAULT: "var(--black-alpha)",
          25: "var(--black-alpha-25)",
          50: "var(--black-alpha-50)",
          75: "var(--black-alpha-75)",
        },
      },
    },
  },
}
