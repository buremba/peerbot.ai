import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3004,
  },
  plugins: [
    react(),
    tsConfigPaths(),
    TanStackRouterVite(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})