/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(85px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(85px) rotate(-360deg)" }
        }
      },
      animation: {
        "spin-slower": "spin 12s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        orbit: "orbit 8s linear infinite"
      },
      // Define the custom fonts used in the project
      fontFamily: {
        'syncopate': ['Syncopate', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'mono-tech': ['JetBrains Mono', 'monospace'],
      },
      // You can define custom colors here if needed
      colors: {
        'bg-color': '#050505',
        'text-primary': '#f0f0f0',
        'text-secondary': '#888888',
        'accent': '#3399ff',
      }
    },
  },
  plugins: [],
}
