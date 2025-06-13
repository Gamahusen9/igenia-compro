// import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        codecPro: ["Codec Pro", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s forwards',
        'glow-pulse': 'glowPulse 2s infinite',
        'progress': 'progress 5s linear forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px 3px rgba(173, 73, 225, 0.3)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(173, 73, 225, 0.6)' }
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}
