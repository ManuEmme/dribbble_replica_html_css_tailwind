/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}

 
/**@type {import('tailwindcss').Config} */
module.exports = {
   
  theme: {
    extend: {
      keyframes: {
        badgeColorCycle: {
          '0%': { backgroundColor: '#ffda79' },

          '25%': { backgroundColor: '#ffabe7' },

          '50%': { backgroundColor: '#d2dcf3' },

          '75%': { backgroundColor: '#edf3d8' },

          '100%': { backgroundColor: '#ffda79' }
        }
      }
    }
  }
}
