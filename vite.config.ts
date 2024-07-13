import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cube-game/",
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/shared/assets/style/index.scss";`
      }
    }
  }
})
