/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to look at all your React files
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0F0F0F",
        primary: "#6366f1", 
        secondary: "#94a3b8",
        accent: "#10b981",
      },
    },
  },
  plugins: [],
}