/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/react-daisyui/dist/react-daisyui.cjs',
    'node_modules/daisyui/dist/**/*'
  ],
  
  purge:
  process.env.NODE_ENV === 'production' ? [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",        
  ] : undefined,  
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

