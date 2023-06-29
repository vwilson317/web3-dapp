/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.js',
    './src/App.tsx',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
  // corePlugins: require('tailwind-rn/unsupported-core-plugins')
}