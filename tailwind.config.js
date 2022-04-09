module.exports = {
  content: [
    "**/pages/**/*.{js,ts,jsx,tsx}",
    "**/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
