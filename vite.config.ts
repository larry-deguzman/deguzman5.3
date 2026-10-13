import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Only split leaf libraries; splitting React-dependent packages
        // into separate chunks can create circular chunk imports.
        manualChunks(id) {
          if (id.includes('node_modules/react-player')) return 'vendor-player'
        },
      },
    },
  },
})
