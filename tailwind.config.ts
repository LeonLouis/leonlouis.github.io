import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': { transform: 'translate3d(-100%, 0, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translate3d(100%, 0, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        fadeInDown: {
          '0%': { transform: 'translate3d(0, -100%, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1.5s ease-in-out',
        fadeInDown: 'fadeInDown 1.5s ease-in-out',
        fadeInRight: 'fadeInRight 1.5s ease-in-out',
        fadeInUp: 'fadeInUp 1.5s ease-in-out',
        fadeIn: 'fadeIn 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config
