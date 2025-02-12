import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vitePluginSitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginSitemap({
      hostname: "https://licvanesacarlottomiranda.com.ar",
      readable: true,
      routes: ["/", "/faq", "/about", "/contact", "/info"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
