import { execSync } from "child_process";
import getAbsolutePath from "@utils/functions/get-absolute-path";

const scripts = [
  getAbsolutePath("utils/scripts/generate-theme-config-schema.ts"),
  getAbsolutePath("utils/scripts/validate-theme-config.ts"),
];

scripts.forEach((script) => {
  try {
    execSync(`npx ts-node ${script}`, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
});
