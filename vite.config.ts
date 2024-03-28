import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    server: {
      host: true
    },
    plugins: [svgr({ include: './src/**/*.svg' }), react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            styles: path.resolve(__dirname, './src/app/styles'),
        },
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
    },
});
