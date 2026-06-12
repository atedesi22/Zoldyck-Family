import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#080B10',
          card: '#1A1D24',
        },
        light: {
          base: '#EBEBEB',
          muted: '#A1A1AA',
        },
        primary: '#EE1C25',
        secondary: '#0E3BF0',
        accent: '#FFD700',
      },
      fontFamily: {
        gaming: ['"Industry"', 'sans-serif'], // Exemple de police géométrique
        body: ['"Inter"', 'sans-serif'], // Police claire pour les longs textes
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
    ],
})
