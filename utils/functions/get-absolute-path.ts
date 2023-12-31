import { resolve } from "path";

/**
 * Function to get absolute path from the input.
 * The input must be a path relative to the project root.
 *
 * @param {string} path - the path value relative to the project root
 * @returns {string} - the absolute path value for the input path
 */
export default function getAbsolutePath(path: string): string {
  return resolve(process.cwd(), path);
}
