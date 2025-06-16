import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/React-Portfolio/',
  define: {
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
