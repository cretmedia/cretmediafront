interface StrapiTextChild {
  text?: string;
}

interface StrapiTextBlock {
  children?: StrapiTextChild[];
}

export function parseText(blocks?: StrapiTextBlock[] | null) {
  return (
    blocks?.map((block) =>
      block.children?.map((child) => child.text ?? "").join("") ?? "",
    ) ?? []
  );
}
