import { execSync } from "child_process";

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  try {
    execSync("husky install", { stdio: "inherit" });
  } catch (error) {
    console.error("Error running husky install:", error);
    process.exit(1);
  }
}
