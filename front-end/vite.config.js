import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'https://c1q1h48z-8000.inc1.devtunnels.ms',
        changeOrigin:true,
      }
    }
  }
})
