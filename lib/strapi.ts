export function parseText(blocks: any[]) {
  return blocks?.map((block) =>
    block.children.map((child: any) => child.text).join("")
  );
}