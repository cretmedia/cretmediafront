import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/products-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our collection of ready-to-use digital templates and design resources for social media, branding, and more.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
