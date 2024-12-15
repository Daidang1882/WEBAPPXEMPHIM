import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': '/src/utils', // Optional: to make path references easier
    },
  },
  optimizeDeps: {
    include: ['products.json'] // Explicitly include JSON if needed
  },
})
