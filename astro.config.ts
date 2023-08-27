import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { themeConfig } from "./utils/data/theme-config";

export default defineConfig({
  site: themeConfig ? themeConfig.global.siteUrl : "example.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
