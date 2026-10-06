import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        // Pages are split per route (src/App.jsx). Without these groups every
        // shared icon and small component becomes its own request.
        advancedChunks: {
          groups: [
            { name: 'icons', test: /node_modules[\\/](lucide-react|react-icons)/ },
            { name: 'shared', test: /src[\\/]components[\\/]/, minShareCount: 2 },
          ],
        },
      },
    },
  },
})
