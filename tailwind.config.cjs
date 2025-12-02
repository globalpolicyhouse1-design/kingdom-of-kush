module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary design tokens */
        primary: {
          DEFAULT: '#0B3D2E', // Royal Dark Green
          50: '#EAF4F0',
          100: '#D6ECE6',
          200: '#AEDCCE',
          300: '#74BDAE',
          400: '#3B8E7F'
        },
        gold: {
          DEFAULT: '#D4AF37', // Regal Gold
          50: '#FEF9F1',
          100: '#FBF0D9',
          200: '#F0D4A6',
          300: '#E1B66D',
          600: '#B88B2A'
        },
        'gold-pressed': '#B88B2A',
        white: '#FFFFFF',
        'offwhite': '#F5F5F5',
        muted: '#BDBDBD',
        /* Compatibility / legacy tokens */
        'sand-gold': {
          DEFAULT: '#D4AF37'
        },
        'dark-green': {
          DEFAULT: '#0B3D2E'
        },
        'black-stone': {
          DEFAULT: '#071f18'
        },
        'bronze': {
          DEFAULT: '#B88B2A'
        },
        'white-marble': {
          DEFAULT: '#F5F5F5'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
        'display-lg': ['48px', { lineHeight: '1.3', letterSpacing: '0.3px' }],
        'display-md': ['36px', { lineHeight: '1.4', letterSpacing: '0.2px' }],
        'body-lg': ['18px', { lineHeight: '1.5' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.5px' }]
      },
      spacing: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px'
      },
      width: {
        '15': '60px'
      },
      height: {
        '15': '60px'
      },
      maxWidth: {
        'container': '1440px'
      },
      borderRadius: {
        'minimal': '2px',
        'regal': '8px'
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0,0,0,0.15)',
        'luxury-hover': '0 30px 70px rgba(0,0,0,0.2)',
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'gold-glow': '0 6px 18px rgba(212,175,55,0.12)',
        'gold-strong': '0 12px 36px rgba(212,175,55,0.18)'
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.6', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { opacity: '0.6', transform: 'scale(0.98)' }
        }
      },
      animation: {
        'star-twinkle': 'twinkle 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
