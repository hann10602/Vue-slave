/** @type {import('tailwindcss').Config} */
export default {
  //jit mode
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  // affected files
  theme: {
    extend: {
      // config own styles
      spacing: {
        39: '40px',
        sm: '100px',
      },
      colors: {
        custom: '#51cf92',
      },
    },
    plugins: [],
  },
}
