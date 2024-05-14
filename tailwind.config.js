/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        practicebg: "rgba(219, 158, 229, 0.3)",
        faqbg: "rgba(219, 158, 229, 0.25)",
        cardbg: "rgba(42, 0, 49, 0.7)",
        cardshadow:"rgba(171, 22, 165, 0.81)",
      },
      boxShadow:{
        "cardshadow":"0px 0px 10px 0px rgba(171, 22, 165, 0.81)",
      }
     
    },
  },
  plugins: [],
}
