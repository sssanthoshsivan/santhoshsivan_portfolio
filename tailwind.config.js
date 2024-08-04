/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin-slab)', 'serif'],
      },
      screens:{
        'screen-xs':{'max':'480px'},
        'screen-sm':{'min': '480px', 'max': '768px'},
        'screen-md':{'min': '768px', 'max': '992px'},
        'screen-lg':{'min': '992px', 'max': '1200px'},
        'screen-xl':{'min':'1200px'},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        'extra-loose': '2.5',
      }
    },
  },
  plugins: [],
};
