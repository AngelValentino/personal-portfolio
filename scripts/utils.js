export function convertToKebabCase(str) {
  return str
    .trim() // Remove wrapping white space if any
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}