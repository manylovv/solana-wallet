import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({ globals: { Buffer: true } }),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Diatype',
            src: './src/assets/fonts/ABCDiatype/*.woff2',
          },
          {
            name: 'Diatype Mono',
            src: './src/assets/fonts/ABCDiatypeSemi-Mono/*.woff2',
          },
        ],
      },
    }),
  ],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
