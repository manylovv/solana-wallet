import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({ globals: { Buffer: true } })],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
