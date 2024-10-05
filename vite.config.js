import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Landing-Page-MihaiSebastian/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html'),
            },
        },
    },
})