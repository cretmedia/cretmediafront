import { getStrapiBaseUrl } from "@/lib/env";

const BASE_URL = getStrapiBaseUrl();

interface PortfolioMapperItem {
  documentId: string;
  name: string;
  image?: {
    url?: string;
  };
  service?: {
    Name?: string;
  };
  categories_layout?: Array<{
    category_name?: string;
    enable_span?: boolean;
    col_span?: number;
    row_span?: number;
  }>;
}

export function mapPortfolio(data: PortfolioMapperItem[]) {
  return data.map((item) => {
    const layout = item.categories_layout?.find(
      (l) => l.category_name === "home" && l.enable_span,
    );

    const col = layout?.col_span || 1;
    const row = layout?.row_span || 1;

    return {
      slug: item.documentId,
      title: item.name,
      category: item.service?.Name || "",
      image: item.image?.url?.startsWith("http")
        ? item.image.url
        : `${BASE_URL}${item.image?.url ?? ""}`,
      span: `lg:col-span-${col} lg:row-span-${row}`,
    };
  });
}
