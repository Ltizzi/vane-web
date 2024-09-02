/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // montserrat: ["Montserrat"],
      playfair: ["Playfair"],
      poppins: ["Poppins"],
      perandory: ["Perandory"],
      yesteryear: ["Yesteryear"],
    },

    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["autumn"],
  },
};
