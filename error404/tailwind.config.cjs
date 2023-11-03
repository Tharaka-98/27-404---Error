/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'green': '#3ebd93', // Use the red color code you prefer
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

