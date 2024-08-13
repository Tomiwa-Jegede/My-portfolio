/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        varela: '"Varela Round", sans-serif;',
      },
      keyframes: {
        moving: {
          '0%': { transform: "translateX(110%)" },
          "100%": { transform: "translateX(-250%)" },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
