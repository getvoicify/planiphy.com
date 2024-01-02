// vite.config.js
const path = require('path');
export default {
    root: path.resolve(__dirname, 'src'),
    envDir: path.resolve(__dirname, 'env'),
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        port: 8080
    }
}
