import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  resolve: {
    mainFields: ['module'],
  },

  server: {
    host: '0.0.0.0',
    port: 4200,
  },
});
