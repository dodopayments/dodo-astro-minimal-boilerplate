// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    output: "server",
    vite: {
      server: {
        // WHEN LOCALTESTING WEBHOOK, ADD THE NGROK BASE URL HERE FOR WEBHOOKS TO BE DELIVERED
        allowedHosts: [''],
      }
    }
  })
