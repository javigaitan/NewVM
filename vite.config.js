import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public_html', // Cambiar 'dist' a 'public_html'
  },
  base: '/', // Asegúrate de que esto coincida con la raíz de tu dominio.
});
