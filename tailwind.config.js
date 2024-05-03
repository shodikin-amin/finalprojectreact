/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/assets/img/backgroundHome.jpg')",
      },
      colors: {
        'hijau1': '#006666',
        'hijauMd': '#ACFFE3',
        'green-primer': '#006666',
        'hijau1txt' : '#DDDDDD',
        'hovertxt' : '#ffffff',
      },
      boxShadow: {
        'custom': '10px 10px 20px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
