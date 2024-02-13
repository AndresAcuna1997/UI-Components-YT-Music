/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        400: "400px",
        181: "181px",
      },
      height: {
        225: "225px",
      },
      colors: {
        "spotify-green": "#1DB954",
        "spotify-black": "#191414",
        "spotify-gray": "#282828",
        "spotify-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
