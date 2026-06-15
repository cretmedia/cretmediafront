const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function mapPortfolio(data: any[]) {
  return data.map((item) => {
    const layout = item.categories_layout?.find(
      (l: any) => l.category_name === "home" && l.enable_span
    );

    const col = layout?.col_span || 1;
    const row = layout?.row_span || 1;

    return {
      slug: item.documentId,
      title: item.name,
      category: item.service?.Name || "",
      image: BASE_URL + item.image?.url,
      span: `lg:col-span-${col} lg:row-span-${row}`,
    };
  });
}