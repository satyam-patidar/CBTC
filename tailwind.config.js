/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        "midnight-blue": "#02011B",
        "electric-blue": "#00D4FC",
        "light-sky": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
