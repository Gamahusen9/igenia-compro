import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_PATH || '/igenia-compro',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['.ngrok-free.app'], // ⬅️ tambahkan ini
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'framer-motion',
            'react-router-dom'
          ],
        },
      },
    },
  },
  // Optimize error handling
  optimizeDeps: {
    include: ['framer-motion'],
  },
})
