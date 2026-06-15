const DEFAULT_STRAPI_URL = "https://cretmediaweb.onrender.com";

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getStrapiBaseUrl() {
  return trimTrailingSlash(
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
      process.env.NEXT_PUBLIC_STRAPI_URL ||
      process.env.STRAPI_API_URL ||
      process.env.STRAPI_URL ||
      DEFAULT_STRAPI_URL,
  );
}

export function getStrapiApiUrl() {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (publicApiUrl) {
    return trimTrailingSlash(publicApiUrl);
  }

  return `${getStrapiBaseUrl()}/api`;
}

