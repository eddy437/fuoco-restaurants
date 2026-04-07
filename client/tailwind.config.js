/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fire: {
          orange: '#F97316',
          copper: '#B45309',
          red: '#DC2626',
          amber: '#F59E0B',
        },
        brand: {
          black: '#0A0A0A',
          charcoal: '#1C1C1C',
          dark: '#141414',
          beige: '#F5F0E8',
          cream: '#FAF7F2',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(135deg, #F97316 0%, #B45309 50%, #DC2626 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1C1C1C 100%)',
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.9' },
          '100%': { transform: 'scaleY(1.1) scaleX(0.95)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
