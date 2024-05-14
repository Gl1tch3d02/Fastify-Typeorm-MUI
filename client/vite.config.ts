import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {
        ...process.env,
        ...loadEnv(mode, path.join(process.cwd(), '..'), '')
    }

    return defineConfig({
        plugins: [react()],
        server: {
            proxy: {
                '/api': {
                    target: `https://localhost:${process.env.PORT}`,
                    changeOrigin: true,
                    secure: false
                },
                '/logos': {
                    target: `https://localhost:${process.env.PORT}`,
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    })
}