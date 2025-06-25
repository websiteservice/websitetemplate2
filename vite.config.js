import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // change here V
  base: '/websitetemplate/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

