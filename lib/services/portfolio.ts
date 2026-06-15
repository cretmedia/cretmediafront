import { fetchAPI } from "../api";

export async function getPortfolioProjects() {
  const data = await fetchAPI(
    "/api/service-types?populate=image&populate=service&populate=categories_layout"
  );

  return data.data;
}

export async function getPortfolioBySlug(slug: string) {
  const data = await fetchAPI(
    `/api/service-types/${slug}?populate[items][populate]=*&populate[categories_layout][populate]=*&populate=image&populate=service`
  );

  return data.data;
}