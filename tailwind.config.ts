import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'system': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'gemunu': ['Gemunu Libre', 'sans-serif', 'system-ui'],
      'dancing': ['Dancing Script', 'sans-serif', 'system-ui'],
    },
    extend: {
      animation: {
        scaleMobile: 'scaleMobile 1.2s ease-in-out infinite',
        scaleDesktop: 'scaleDesktop 1.5s ease-in-out infinite',
      },
      keyframes: {
        scaleMobile: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        scaleDesktop: {
          '0%, 100%': { transform: 'scale(1.3)', opacity: '0' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
        }
      },
      backgroundImage: {
        'topTransparent': "url('/theme/topTransparent.webp')",
        'botTransparent': "url('/theme/botTransparent.webp')",
      },
      backgroundColor: {
        site: 'rgb(50 213 110)',
        black: {
          100: '#999999',
          200: '#888888',
          300: '#777777',
          400: '#666666',
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        customPrimary: {
          100: '#0b2d67',
          200: '#0b2b61',
          300: '#0a2656',
          400: '#081f46',
          500: '#071a3b',
          600: '#061632',
          700: '#05142d',
          800: '#030c1c',
          900: '#010409',
        },
        customSecondary: {
          100: '#53667c',
          200: '#4b5c70',
          300: '#425163',
          400: '#394656',
          500: '#303b48',
          600: '#27303b',
          700: '#1e252d',
          800: '#1b2129',
          900: '#161b22',
        },
      },
      colors: {
        site: 'rgb(50 213 110)',
        customPrimary: {
          100: '#0b2d67',
          200: '#0b2b61',
          300: '#0a2656',
          400: '#081f46',
          500: '#071a3b',
          600: '#061632',
          700: '#05142d',
          800: '#030c1c',
          900: '#010409',
        },
        customSecondary: {
          100: '#53667c',
          200: '#4b5c70',
          300: '#425163',
          400: '#394656',
          500: '#303b48',
          600: '#27303b',
          700: '#1e252d',
          800: '#1b2129',
          900: '#161b22',
        },
      },
    },
  },
  plugins: [],
}
export default config
