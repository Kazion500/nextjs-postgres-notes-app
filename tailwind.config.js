module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          100: "#FBFBFB",
          200: "#F6F6F6",
        },
        muteColor: {
          100: "#FBFBFB",
          200: "#F6F6F6",
          300: "#ACACAC",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
