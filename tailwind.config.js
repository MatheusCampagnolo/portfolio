/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom Palette
        'graphite-dark': '#111111', // Pastel Black (Dark Bg)
        'graphite-medium': '#1c1c1c', // Slightly lighter for Cards
        'off-white': '#f8fafc', // Slate 50 (Light Bg)
        'cream': '#fdfbf7', // Warm off-white
        'anthracite': '#1e293b', // Dark Text
        'pearl': '#e2e8f0', // Light Text
        'glass-dark': 'rgba(15, 23, 42, 0.6)',
        'glass-light': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
