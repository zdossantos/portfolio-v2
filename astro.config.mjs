// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import react from '@astrojs/react';
import './src/styles/global.css';


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              '@': path.resolve('./src'),
          },
      },
	},
  integrations: [react()]
});