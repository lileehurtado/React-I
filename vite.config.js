// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Otras configuraciones de Vite...

  css: {
    modules: false,
    preprocessorOptions: {
      scss: {},
      less: {},
    },
  },
});
