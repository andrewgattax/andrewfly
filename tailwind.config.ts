/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          background: "var(--background)",
          "background-light": "var(--background-light)",
          "background-dark": "var(--background-dark)",
          "soft-grey": "var(--soft-grey)",
          foreground: "var(--foreground)",
          surface: "var(--surface)",
          primary: "var(--primary)",
          "primary-foreground": "var(--primary-foreground)",
          secondary: "var(--secondary)",
          "secondary-foreground": "var(--secondary-foreground)",
          accent: "var(--accent)",
          "accent-foreground": "var(--accent-foreground)",
          muted: "var(--muted)",
          "muted-foreground": "var(--muted-foreground)",
          border: {
              DEFAULT: "var(--border)",
              subtle: "var(--border-subtle)",
          },
          slate: {
              50: "var(--slate-50)",
              100: "var(--slate-100)",
              200: "var(--slate-200)",
              400: "var(--slate-400)",
              500: "var(--slate-500)",
              600: "var(--slate-600)",
              800: "var(--slate-800)",
              900: "var(--slate-900)",
          },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(17, 164, 212, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(17, 164, 212, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
