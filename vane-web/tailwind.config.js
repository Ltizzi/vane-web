/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // montserrat: ["Montserrat"],
      playfair: ["Playfair"],
      poppins: ["Poppins"],
      perandory: ["Perandory"],
      yesteryear: ["Alex Brush"],
    },

    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vaneweb: {
          primary: "#C7C2C6",
          secondary: "#747685",
          accent: "#EAE0DE",
          neutral: "#FDFDFD",
          "base-100": "#0E0E16",
          info: "#DBCFB3",
          error: "#C7B385",
        },
      },
    ],
  },
};
