/**
 * Returns base URL of this deployment.
 */
export function getBaseUrl(): string {
  // Start with custom config
  if (process.env.APP_URL) {
    return process.env.APP_URL;
  }

  // Fall back to Vercel's injected env vars
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // ... or else localhost
  return "http://localhost:3000";
}
