import { defineConfig } from "vite";
import getAbsolutePath from "./utils/functions/get-absolute-path";

export default defineConfig({
  resolve: {
    alias: {
      "@utils": getAbsolutePath("utils"),
      "@src": getAbsolutePath("src"),
      "@components": getAbsolutePath("src/components"),
      "@assets": getAbsolutePath("src/assets"),
    },
  },
});
