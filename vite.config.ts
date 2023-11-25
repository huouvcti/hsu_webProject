import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  resolve: {
    alias: [
      { find: "@pages", replacement: "/src/pages" },
      { find: "@fonts", replacement: "/src/assets/fonts" },
      { find: "@images", replacement: "/src/assets/images" },
      { find: "@videos", replacement: "/src/assets/videos" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
})
