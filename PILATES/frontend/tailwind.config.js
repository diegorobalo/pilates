/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#667eea",
          DEFAULT: "#667eea",
          dark: "#764ba2",
        },
        success: {
          light: "#10b981",
          DEFAULT: "#10b981",
          dark: "#059669",
        },
        danger: {
          light: "#ef4444",
          DEFAULT: "#ef4444",
          dark: "#dc2626",
        },
      },
    },
  },
  plugins: [],
}
