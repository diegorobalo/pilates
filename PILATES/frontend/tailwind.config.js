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
        warning: {
          light: "#f59e0b",
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        neutral: {
          light: "#f3f4f6",
          DEFAULT: "#9ca3af",
          dark: "#4b5563",
        },
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
      },
    },
  },
  plugins: [],
}
