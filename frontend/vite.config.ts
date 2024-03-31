import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

const ReferrerPlugin : PluginOption = {
  name: "configure-referrer-policy",
  configureServer: (server) => {
    server.middlewares.use((_req, res, next) => {
      res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
      next();
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ReferrerPlugin,
    react(), 
  ],
})
