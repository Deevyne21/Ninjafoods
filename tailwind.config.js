/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#1e40af",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
