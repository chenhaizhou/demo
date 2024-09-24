import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), mockDevServerPlugin()],
    base: './',
    server: {
      proxy: { 
        '^/api': 'http://localhost:5173', 
      },
      [env.VITE_API_URL]: {
        target: env.VITE_TARGET_URL,
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(new RegExp(`^${env.VITE_API_URL}`), ''),
      },
    },
  }
})
