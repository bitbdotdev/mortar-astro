import fs from "fs";
import getAbsolutePath from "@utils/functions/get-absolute-path";
import type { ThemeConfig } from "@utils/types/theme-config";

/**
 * Theme's configuration defined in `theme-config.json`
 */
export const themeConfig: ThemeConfig | null = JSON.parse(
  fs.readFileSync(getAbsolutePath("theme-config.json"), "utf-8"),
);
