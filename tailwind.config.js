/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        neutral: {
          100: '#f5f5f5',
          900: '#111111',
        },
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
} 