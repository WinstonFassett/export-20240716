import path from 'path';
import { defineConfig } from 'vite';
import baseConfig from './vite.config.base.js';

export default defineConfig({
  ...baseConfig,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  root: path.resolve(__dirname, 'demo'),
  base: '/',
  build: {
    outDir: '../dist/app',
  },
});