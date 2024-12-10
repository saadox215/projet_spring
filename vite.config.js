import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Ouvre automatiquement le navigateur
  },
  build: {
    outDir: 'dist', // Dossier de sortie
  },
  resolve: {
    alias: {
      '@': '/src', // Facilité pour utiliser @ au lieu de ./src
    },
  },
});

