import { createGenerator } from "ts-json-schema-generator";
import type { Config, Schema } from "ts-json-schema-generator";

/**
 * Generates JSON Schema from Typescript type definition, using `ts-json-schema-generator`
 * @param {Config} config - `ts-json-schema-generator` config object
 * @returns {Schema | null} - a JSON schema or null if an error occurs
 */
function generateSchema(config: Config): Schema | null {
  try {
    return createGenerator(config).createSchema(config.type);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default generateSchema;
