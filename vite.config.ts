import { defineConfig } from 'vite'

const crossOriginIsolationHeaders = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/edgekit-demo-ecommerce/' : '/',
  server: {
    port: 5173,
    headers: crossOriginIsolationHeaders,
  },
  preview: {
    headers: crossOriginIsolationHeaders,
  },
})
