/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#1e40af",
        // secondary: "#889bae",
        secondary: "#B2BEB5",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
