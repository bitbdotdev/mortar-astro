/*
  This script generates a JSON schema file (utils/schema/theme-config-schema.json)
  based on the TypeScript type definitions in utils/types/theme-config.ts. 

  Usage: Run this script using 'npx ts-node utils/scripts/generate-theme-schema.ts'
*/
import fs from "fs/promises";
import generateSchema from "@utils/functions/generate-schema";
import getAbsolutePath from "@utils/functions/get-absolute-path.ts";
import type { Config } from "ts-json-schema-generator";

const config: Config = {
  path: getAbsolutePath("utils/types/theme-config.ts"),
  tsconfig: getAbsolutePath("tsconfig.json"),
  type: "*",
};

async function writeSchemaToFile(
  generatorConfig: Config,
  outputPath: string,
): Promise<void> {
  try {
    const schemaString = JSON.stringify(
      generateSchema(generatorConfig),
      null,
      2,
    );
    await fs.writeFile(outputPath, schemaString);
    console.log("Schema successfully written to file:", outputPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

(async () => {
  await writeSchemaToFile(
    config,
    getAbsolutePath("utils/schema/theme-config-schema.json"),
  );
})();
