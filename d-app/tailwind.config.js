/** @type {import('tailwindcss').Config} */
// import { Config } from 'tailwindcss';

module.exports = {
  content: [
    '/src/App.tsx',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
}