/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        wheel: 'wheel 2s infinite',
        fadeIn: 'fadeIn 0.8s ease-in-out 1',
      },
      keyframes: {
        wheel: {
          to: {
            opacity: 0,
          },
        },
        fadeIn:{
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      }
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
      },
    },
    fontFamily:{
     san:['poppins'],
    },
    screens: {
      '2xs': '320px',
      // => @media (min-width: 390px) { ... }

      'xs': '520px',
      // => @media (min-width: 520px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  /*-- Dark Mood ---*/
  darkMode: "selector",
}