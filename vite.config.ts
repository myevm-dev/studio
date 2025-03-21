import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        // Example of proxy for CORS issue resolution (adjust URL to your backend or API)
        '/api': {
          target: 'http://localhost:5000', // Replace with your backend URL
          changeOrigin: true,
          secure: false, // If your backend uses http instead of https
        },
      },
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
  };
});
