import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/fhir': {
        target: 'http://10.150.45.205',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fhir/, '/fhir'),
      },
    },
  },
})
