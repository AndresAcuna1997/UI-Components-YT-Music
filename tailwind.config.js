/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        400: "400px",
      },
      height: {
        225: "225px",
      },
    },
  },
  plugins: [],
};
