import Ajv, { JSONSchemaType } from "ajv";

/**
 * Validates JSON data against a JSON schema using AJV.
 * @param {JSONSchemaType<T>} schema - JSON schema for validating JSON data
 * @param {object} data - JSON data to be validated against the schema
 * @returns {boolean} - Whether the file is valid against the schema or not
 */
function validateJson<T>(schema: JSONSchemaType<T>, data: object): boolean {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid: boolean = validate(data);

  if (!isValid) console.error("Schema validation falied\n", validate.errors);
  return isValid;
}

export default validateJson;
