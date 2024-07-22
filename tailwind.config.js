/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-button": `linear-gradient(0deg, #726ced, #726ced)`,
        "bg-radial": ` radial-gradient(
      155.56% 2452.42% at -55.56% 50%,
      #726ced 0%,
      #9d80f4 44.79%,
      #70dcf1 100%
    )`,
      },
    },
  },
  plugins: [],
};
