/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xm':'100px',
        // => @media (min-width: 100px) { ... }

        'sm': '300px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors : {
        primary: '#fdfefe',
        secondary: '#ecc94b',
        third : "#ffc300",
        third : "#a04000",
        third : "#2e4053",
      }
    },
  },
  plugins: [],
}

