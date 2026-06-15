import type { HomeServiceItem, ServiceDetailItem } from "../services/services";
import type { ServiceCardData, TransformedServiceData } from "../types";

function toShortTitle(title: string): string {
  const [first, second] = title.split(" ");
  return second ? `${first} ${second}` : title;
}

export function mapHomeServices(data: HomeServiceItem[]): ServiceCardData[] {
  return data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.Title || item.Shortdescription || "Service",
    shortTitle: toShortTitle(item.Title || item.Shortdescription || "Service"),
    description: item.Shortdescription || item.Subtitle || "",
    heroDescription: item.Subtitle || item.Shortdescription || "",
    iconName: item.icon || item.Title || undefined,
    iconImport: item.icon_import || undefined,
    items: [item.keypoint1, item.keypoint2, item.keypoint3, item.keypoint4].filter(
      Boolean,
    ) as string[],
  }));
}

export function mapServiceDetail(
  detail: ServiceDetailItem | null,
  homeService?: HomeServiceItem | null,
): TransformedServiceData {
  const source = detail?.home_service || homeService;

  return {
    id: detail?.id || source?.id || 0,
    documentId: detail?.documentId || source?.documentId || "",
    title: source?.Title || detail?.Shortdescription || "Service",
    shortTitle: toShortTitle(source?.Title || detail?.Shortdescription || "Service"),
    description: detail?.Shortdescription || source?.Shortdescription || "",
    heroDescription: detail?.Subtitle || source?.Subtitle || "",
    iconName: source?.icon || source?.Title || undefined,
    iconImport: source?.icon_import || undefined,
    items: (detail?.SDponts || []).map((item) => item.points).filter(Boolean),
    benefits: (detail?.SD_Keypoints || [])
      .map((item) => item.keypoint)
      .filter(Boolean),
  };
}
