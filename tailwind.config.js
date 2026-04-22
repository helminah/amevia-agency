/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        bg: { primary: '#030308', secondary: '#0a0a12' },
        accent: { primary: '#7c3aed', secondary: '#c084fc', tertiary: '#f472b6', gold: '#fbbf24' },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'blob': 'blob 20s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '25%': { transform: 'translate(50px,-30px) scale(1.1)' },
          '50%': { transform: 'translate(-30px,40px) scale(0.95)' },
          '75%': { transform: 'translate(40px,20px) scale(1.05)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
