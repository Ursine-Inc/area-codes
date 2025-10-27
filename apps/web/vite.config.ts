import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  server: {
    port: 3000,
  },
  build: {
    outDir: '../../dist/apps/web',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@area-codes/shared-ui': path.resolve(
        __dirname,
        '../../lib/shared-ui/src'
      ),
    },
  },
});
