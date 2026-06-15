import { fetchAPI } from "../api";

export async function getAbout() {
  const data = await fetchAPI("/api/about");
  return data.data;
}

export async function getAboutValues() {
  const data = await fetchAPI("/api/about-value");
  return data.data;
}
