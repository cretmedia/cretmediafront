import { fetchAPI } from "../api";

export interface HomeServiceItem {
  id: number;
  documentId: string;
  Title?: string;
  Subtitle?: string;
  Shortdescription?: string;
  icon?: string;
  icon_import?: string;
  keypoint1?: string;
  keypoint2?: string;
  keypoint3?: string;
  keypoint4?: string;
}

export interface ServiceDetailItem {
  id: number;
  documentId: string;
  Subtitle?: string;
  Shortdescription?: string;
  SDponts?: Array<{ id: number; points: string }>;
  SD_Keypoints?: Array<{ id: number; keypoint: string }>;
  home_service?: HomeServiceItem | null;
}

export async function getHomeServices() {
  const response = await fetchAPI("/api/home-services");
  return response.data as HomeServiceItem[];
}

export async function getAllServiceDetails() {
  const response = await fetchAPI("/api/service-details");
  return response.data as ServiceDetailItem[];
}

export async function getServiceDetailByDocumentId(documentId: string) {
  try {
    const response = await fetchAPI(
      `/api/service-details?filters[home_service][documentId][$eq]=${documentId}&populate[home_service]=true&populate[SDponts]=true&populate[SD_Keypoints]=true`,
    );

    const items = response.data as ServiceDetailItem[];
    return items[0] ?? null;
  } catch (error) {
    console.error("Service detail fetch error:", error);
    return null;
  }
}
