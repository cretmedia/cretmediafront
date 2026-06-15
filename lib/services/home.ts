import { fetchAPI } from "../api";

export async function getHomeAbout() {
  const data = await fetchAPI("/api/home-about");
  return data.data;
}