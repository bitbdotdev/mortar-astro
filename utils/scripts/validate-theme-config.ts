/*
  This script validates `theme-config.json` against JSON schema specified in
  `utils/schema/theme-config-schema.json`

  Usage: Run this script using 'npx ts-node utils/scripts/validate-theme-config.ts'
*/
import * as fs from "fs/promises";
import { basename } from "path";
import validateJson from "@utils/functions/validate-json";
import getAbsolutePath from "@utils/functions/get-absolute-path";
import type { ThemeConfig } from "@utils/types/theme-config";

/**
 * Function to validate a JSON file against JSON schema
 * @param schemaFile - path to the JSON schema file
 * @param jsonFile - path to the JSON file being validated against the JSON schema
 */
async function main(schemaFile: string, jsonFile: string): Promise<void> {
  try {
    const schema = JSON.parse(await fs.readFile(schemaFile, "utf-8"));
    const data = JSON.parse(await fs.readFile(jsonFile, "utf-8"));

    const isValid = validateJson<ThemeConfig>(schema, data);
    if (isValid) console.log(`Successfully validated ${basename(jsonFile)}`);
    else {
      console.log(`Failed to validate ${basename(jsonFile)}`);
      process.exit(1);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main(
  getAbsolutePath("utils/schema/theme-config-schema.json"),
  getAbsolutePath("theme-config.json"),
);
