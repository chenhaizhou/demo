/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 -1px 3px rgba(0, 0, 0, 0.1)',
      },
      width: {
        '90': '360px',
        '120': '480px'
      },
      maxHeight: {
        '120': '480px'
      },
    },
  },
  plugins: [],
}

