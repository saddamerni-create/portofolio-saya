import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site also works from a subfolder or a static preview.
  base: './',
  plugins: [react(), tailwindcss()],
})
