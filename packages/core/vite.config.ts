import { fileURLToPath, URL } from "url";

import { defineConfig, type Plugin } from "vite";
import Vue from "@vitejs/plugin-vue";
import Dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    Vue(),
    Dts({
      tsconfigPath: "./tsconfig.app.json",
      entryRoot: "./src",
      outDir: "./dist",
      insertTypesEntry: true,
    }) as Plugin,
  ],
  define: {
    "process.env": process.env,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "HaloComponents",
      formats: ["es", "iife"],
      fileName: (format) => `vue-directive.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
        exports: "named",
        generatedCode: "es5",
      },
    },
    sourcemap: true,
  },
});
