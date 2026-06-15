import {
  Palette,
  Video,
  Printer,
  Package,
  Megaphone,
  Film,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getStrapiBaseUrl } from "@/lib/env";

// ── Services ────────────────────────────────────────────────────────────────
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export interface MarketingService {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  items: string[];
  heroDescription: string;
  benefits: string[];
  id?: number;
  documentId?: string;
  name?: string;
  Title?: RichTextNode[];
  short_Description?: string;
  long_Description?: RichTextNode[];
  client?: string;
  Year?: string;
}

export const services: MarketingService[] = [
  {
    slug: "social-media",
    icon: Palette,
    title: "Social Media Design",
    shortTitle: "Social Media",
    description: "Eye-catching posts, stories, and ads designed for Instagram, Facebook, LinkedIn and more.",
    items: [
      "Instagram Posts",
      "Story Templates",
      "Ad Creatives",
      "Carousel Designs",
    ],
    heroDescription: "We create scroll-stopping social media content that builds brand recognition and drives engagement. From feed posts to stories, our designs are crafted to perform across every platform.",
    benefits: [
      "Platform-optimized designs for maximum reach",
      "Consistent brand identity across all channels",
      "High-conversion ad creatives backed by data",
      "Quick turnaround for time-sensitive campaigns",
      "Unlimited revisions until perfect",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
  {
    slug: "video-editing",
    icon: Video,
    title: "Video Editing",
    shortTitle: "Video",
    description: "Professional video editing for ads, explainer videos, promotional content and social media.",
    items: [
      "Promotional Videos",
      "Explainer Videos",
      "Testimonial Edits",
      "Motion Graphics",
    ],
    heroDescription: "From raw footage to polished production, we transform your video content into compelling stories. Our editing services cover everything from social ads to full-length explainer videos.",
    benefits: [
      "Cinematic color grading and correction",
      "Custom motion graphics and animations",
      "Optimized exports for every platform",
      "Professional sound design and mixing",
      "Fast delivery without compromising quality",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
  {
    slug: "print-design",
    icon: Printer,
    title: "Print Design",
    shortTitle: "Print",
    description: "Professional print materials including brochures, business cards, banners and more.",
    items: [
      "Brochures",
      "Business Cards",
      "Banners & Standees",
      "Flyers & Posters",
    ],
    heroDescription: "Premium print design that makes a lasting impression. We create everything from business cards to large-format banners with meticulous attention to detail and print-ready quality.",
    benefits: [
      "Print-ready files in all required formats",
      "CMYK color accuracy guaranteed",
      "Die-cut and special finish specifications",
      "Multiple size variations included",
      "Vendor coordination support",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
  {
    slug: "packaging",
    icon: Package,
    title: "Packaging Design",
    shortTitle: "Packaging",
    description: "Stand-out packaging that brings your products to life on shelves and in ecommerce.",
    items: [
      "Product Packaging",
      "Label Design",
      "Box Design",
      "Eco-friendly Packaging",
    ],
    heroDescription: "Packaging that sells. We design product packaging that not only looks stunning but also communicates your brand story and stands out in a crowded marketplace.",
    benefits: [
      "Structural design and dieline creation",
      "3D mockup visualization before production",
      "Sustainable material recommendations",
      "Regulatory compliance and labeling",
      "Production-ready artwork files",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
  {
    slug: "social-media",
    icon: Megaphone,
    title: "Social Media Campaigns",
    shortTitle: "Campaigns",
    description: "Creative concepts that drive engagement, build brand loyalty and reach new audiences.",
    items: [
      "Campaign Strategy",
      "Content Calendar",
      "Ad Campaigns",
      "Influencer Marketing",
    ],
    heroDescription: "Strategic social media campaigns that deliver results. We combine creative excellence with data-driven strategy to build campaigns that engage, convert, and grow your audience.",
    benefits: [
      "Data-driven campaign strategy",
      "Multi-platform content creation",
      "Performance tracking and optimization",
      "Audience targeting and segmentation",
      "Monthly reporting and insights",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
  {
    slug: "video-editing",
    icon: Film,
    title: "Reels & Shorts",
    shortTitle: "Reels",
    description: "Short-form video content optimized for Instagram Reels, YouTube Shorts and TikTok.",
    items: [
      "Instagram Reels",
      "YouTube Shorts",
      "TikTok Content",
      "Vertical Video Ads",
    ],
    heroDescription: "Short-form video that captures attention in seconds. We create trending, engaging reels and shorts optimized for maximum reach on Instagram, YouTube, and TikTok.",
    benefits: [
      "Trend-aware content creation",
      "Platform-specific optimization",
      "Hook-driven storytelling",
      "Music and sound design",
      "Hashtag and caption strategy",
    ],
    id: 0,
    documentId: "",
    name: "",
    Title: [],
    short_Description: "",
    long_Description: [],
    client: "",
    Year: ""
  },
];

// Unique service pages (deduplicated by slug)
export const servicePages = [
  services[0], // social-media
  services[1], // video-editing
  services[2], // print-design
  services[3], // packaging
];

// ── Portfolio ───────────────────────────────────────────────────────────────

// export interface Project {
//   slug: string;
//   title: string;
//   category: string;
//   image: string;
//   span: string;
//   client: string;
//   year: string;
//   description: string;
//   challenge: string;
//   solution: string;
//   results: string[];
//   gallery: string[];
// }

// export const projects: Project[] = [
//   {
//     slug: "ecommerce-social-campaign",
//     title: "E-commerce Social Campaign",
//     category: "Social Media",
//     image: "/images/portfolio-1.jpg",
//     span: "lg:col-span-2 lg:row-span-2",
//     client: "FashionForward",
//     year: "2024",
//     description:
//       "A comprehensive social media campaign for a leading fashion e-commerce brand targeting Gen-Z and millennial shoppers.",
//     challenge:
//       "The client needed to increase engagement rates by 40% and drive a 25% increase in website traffic from social media channels within 3 months.",
//     solution:
//       "We designed a multi-platform campaign featuring dynamic carousel posts, interactive stories, and short-form video content with a consistent visual language that resonated with younger audiences.",
//     results: [
//       "52% increase in engagement rate",
//       "38% increase in website traffic from social",
//       "2.5x return on ad spend",
//       "15K new followers across platforms",
//     ],
//     gallery: [
//       "/images/portfolio-1.jpg",
//       "/images/portfolio-2.jpg",
//       "/images/portfolio-3.jpg",
//     ],
//   },
//   {
//     slug: "tech-startup-explainer",
//     title: "Tech Startup Explainer",
//     category: "Video",
//     image: "/images/portfolio-2.jpg",
//     span: "",
//     client: "NeuralSync AI",
//     year: "2024",
//     description:
//       "An animated explainer video for an AI startup launching their flagship product to enterprise clients.",
//     challenge:
//       "Simplify a complex AI product offering into a digestible 90-second video that appeals to both technical and non-technical decision makers.",
//     solution:
//       "We created a sleek motion-graphics-driven explainer with custom 3D elements, clear visual metaphors, and a professional voiceover that communicated the value proposition effectively.",
//     results: [
//       "1.2M views across platforms",
//       "45% increase in demo requests",
//       "Used in 3 investor pitch decks",
//       "Featured at TechCrunch Disrupt",
//     ],
//     gallery: [
//       "/images/portfolio-2.jpg",
//       "/images/portfolio-1.jpg",
//       "/images/portfolio-5.jpg",
//     ],
//   },
//   {
//     slug: "restaurant-brand-materials",
//     title: "Restaurant Brand Materials",
//     category: "Print",
//     image: "/images/portfolio-3.jpg",
//     span: "",
//     client: "Saffron & Sage",
//     year: "2024",
//     description:
//       "Complete brand identity and print collateral for a premium farm-to-table restaurant launching in Mumbai.",
//     challenge:
//       "Create a cohesive brand identity that communicates luxury, sustainability, and authentic culinary craftsmanship across all touchpoints.",
//     solution:
//       "We developed a full suite of print materials including menus, business cards, signage, table tents, and packaging using premium materials and sophisticated typography.",
//     results: [
//       "Brand recognition increased by 60%",
//       "Featured in Architectural Digest India",
//       "Consistent 5-star reviews mentioning ambiance",
//       "3 new locations adopted the same identity",
//     ],
//     gallery: [
//       "/images/portfolio-3.jpg",
//       "/images/portfolio-4.jpg",
//       "/images/portfolio-6.jpg",
//     ],
//   },
//   {
//     slug: "organic-food-packaging",
//     title: "Organic Food Packaging",
//     category: "Packaging",
//     image: "/images/portfolio-4.jpg",
//     span: "lg:col-span-2",
//     client: "GreenHarvest Organics",
//     year: "2023",
//     description:
//       "Eco-friendly packaging design for an organic food brand expanding into retail stores nationwide.",
//     challenge:
//       "Design packaging that stands out on retail shelves while maintaining the brand's commitment to sustainability and eco-conscious values.",
//     solution:
//       "We created a nature-inspired packaging system using recycled materials, soy-based inks, and botanical illustrations that tell the story of each product's origin.",
//     results: [
//       "35% increase in retail shelf appeal",
//       "Zero-waste packaging certified",
//       "Expanded to 500+ retail locations",
//       "Won a Dieline Packaging Award",
//     ],
//     gallery: [
//       "/images/portfolio-4.jpg",
//       "/images/portfolio-3.jpg",
//       "/images/portfolio-1.jpg",
//     ],
//   },
//   {
//     slug: "fitness-app-promo",
//     title: "Fitness App Promo Video",
//     category: "Video",
//     image: "/images/portfolio-5.jpg",
//     span: "",
//     client: "FlexFit Pro",
//     year: "2024",
//     description:
//       "A high-energy promotional video for a fitness app launch targeting health-conscious millennials.",
//     challenge:
//       "Create a video that conveys energy, motivation, and the app's seamless user experience while appealing to a diverse fitness community.",
//     solution:
//       "We shot dynamic gym sequences combined with screen recordings, motion graphics UI overlays, and an energetic soundtrack to create an immersive promotional experience.",
//     results: [
//       "500K+ views in first week",
//       "28% app download conversion rate",
//       "Featured on App Store homepage",
//       "Used in a paid TV campaign",
//     ],
//     gallery: [
//       "/images/portfolio-5.jpg",
//       "/images/portfolio-2.jpg",
//       "/images/portfolio-6.jpg",
//     ],
//   },
//   {
//     slug: "luxury-watch-campaign",
//     title: "Luxury Watch Campaign",
//     category: "Social Media",
//     image: "/images/portfolio-6.jpg",
//     span: "",
//     client: "Chronos Timepieces",
//     year: "2024",
//     description:
//       "A premium social media campaign for a luxury watch brand entering the Indian market.",
//     challenge:
//       "Position a new luxury watch brand in an already saturated market while building aspirational appeal among affluent consumers.",
//     solution:
//       "We crafted a visually stunning campaign featuring dramatic product photography, cinematic short films, and influencer collaborations that emphasized heritage and craftsmanship.",
//     results: [
//       "10x return on ad spend",
//       "85% brand recall in target audience",
//       "Partnership with 12 luxury influencers",
//       "Sold out limited edition collection",
//     ],
//     gallery: [
//       "/images/portfolio-6.jpg",
//       "/images/portfolio-1.jpg",
//       "/images/portfolio-4.jpg",
//     ],
//   },
// ];

// export const portfolioCategories = [
//   "All",
//   "Social Media",
//   "Video",
//   "Print",
//   "Packaging",
// ];

// lib/data.ts
export interface RichTextNode {
  type?: string;
  text?: string;
  children?: RichTextNode[];
  [key: string]: unknown;
}

export interface MediaFormat {
  url?: string;
}

export interface StrapiImage {
  id?: number;
  documentId?: string;
  name?: string;
  url?: string;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
}

export interface CategoryLayout {
  id: number;
  category_name: string;
  enable_span: boolean;
  col_span: number;
  row_span: number;
  postion_no: number;
}

export interface GalleryImage {
  id: number;
  col_span: number;
  row_span: number;
  caption: string;
  postion: number;
  image: StrapiImage;
}

export interface Service {
  id: number;
  documentId: string;
  name: string;
  Title: RichTextNode[];
  short_Description: string;
  long_Description: RichTextNode[];
  client: string;
  Year: string;
  image?: StrapiImage;
  service?: {
    id: number;
    documentId?: string;
    Name: string;
  };
  categories_layout?: CategoryLayout[];
  items?: GalleryImage[];
  gallery?: GalleryImage[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface GridPlacementStyle {
  gridColumn?: string;
  gridRow?: string;
}

export interface ServiceCategory {
  id: number;
  documentId: string;
  Name: string;
}

type NextFetchRequestInit = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status?: number;
    name?: string;
    message?: string;
    details?: unknown;
  };
}

const API_URL =
  getStrapiBaseUrl();

const API_TOKEN = process.env.STRAPI_API_TOKEN;

const LIST_QUERY =
  "/api/service-types?populate[image]=true&populate[service]=true&populate[categories_layout]=true";

const DETAIL_QUERY =
  "populate[image]=true&populate[service]=true&populate[categories_layout]=true&populate[items][populate]=image";

function normalizeService(service: Service): Service {
  const sortedItems = [...(service.items ?? [])]
    .map((item) => ({
      ...item,
      image: item.image ?? { url: "/placeholder.svg" },
    }))
    .sort(
      (a, b) =>
        (a.postion ?? Number.MAX_SAFE_INTEGER) - (b.postion ?? Number.MAX_SAFE_INTEGER),
    );

  return {
    ...service,
    categories_layout: service.categories_layout ?? [],
    items: sortedItems,
    gallery: sortedItems,
  };
}

function getHomePosition(service: Service): number {
  const layout = getCategoryLayout(service, "home");

  return layout?.postion_no ?? Number.MAX_SAFE_INTEGER;
}

function normalizeCategoryName(value: string): string {
  return value.trim().toLowerCase();
}

export function getCategoryLayout(
  service: Service,
  categoryName: string,
): CategoryLayout | undefined {
  const normalizedCategory = normalizeCategoryName(categoryName);

  return service.categories_layout?.find(
    (entry) => normalizeCategoryName(entry.category_name) === normalizedCategory,
  );
}

export function getCategoryPosition(
  service: Service,
  categoryName: string,
): number {
  return getCategoryLayout(service, categoryName)?.postion_no ?? Number.MAX_SAFE_INTEGER;
}

export function getGridPlacementStyle(layout?: {
  enable_span?: boolean;
  col_span?: number;
  row_span?: number;
}): GridPlacementStyle {
  if (!layout?.enable_span) {
    return {};
  }

  const style: GridPlacementStyle = {};

  if ((layout.col_span ?? 1) > 1) {
    style.gridColumn = `span ${layout.col_span} / span ${layout.col_span}`;
  }

  if ((layout.row_span ?? 1) > 1) {
    style.gridRow = `span ${layout.row_span} / span ${layout.row_span}`;
  }

  return style;
}

export function getGalleryPlacementStyle(item?: {
  col_span?: number;
  row_span?: number;
}): GridPlacementStyle {
  if (!item) {
    return {};
  }

  const style: GridPlacementStyle = {};

  if ((item.col_span ?? 1) > 1) {
    style.gridColumn = `span ${item.col_span} / span ${item.col_span}`;
  }

  if ((item.row_span ?? 1) > 1) {
    style.gridRow = `span ${item.row_span} / span ${item.row_span}`;
  }

  return style;
}

async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (API_TOKEN) {
    headers["Authorization"] = `Bearer ${API_TOKEN}`;
  }

  const url = `${API_URL.replace(/\/$/, "")}${endpoint}`;
  const requestInit: NextFetchRequestInit = {
    headers,
    next: { revalidate: 60 },
  };

  const response = await fetch(url, requestInit);

  const text = await response.text();
  const payload = text ? (JSON.parse(text) as StrapiResponse<unknown> | T) : ({} as T);

  if (!response.ok) {
    const apiError =
      typeof payload === "object" && payload !== null && "error" in payload
        ? (payload as StrapiResponse<unknown>).error
        : undefined;

    console.error("Strapi request failed", {
      url,
      status: response.status,
      statusText: response.statusText,
      error: apiError,
      body: text,
    });

    throw new Error(apiError?.message || `Failed to fetch: ${response.status}`);
  }

  return payload as T;
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<Service[]>>(LIST_QUERY);

    return response.data
      .map(normalizeService)
      .sort((a, b) => getHomePosition(a) - getHomePosition(b));
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getServiceBySlug(documentId: string): Promise<Service | null> {
  try {
    const response = await fetchStrapi<StrapiResponse<Service>>(
      `/api/service-types/${documentId}?${DETAIL_QUERY}`,
    );

    return normalizeService(response.data);
  } catch (error) {
    console.error("Error fetching service:", { documentId, error });
    return null;
  }
}

export async function getAllServiceIds(): Promise<string[]> {
  const services = await getAllServices();
  return services.map((service) => service.documentId).filter(Boolean);
}

export async function getAllPortfolioCategories(): Promise<string[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<ServiceCategory[]>>("/api/services");

    return response.data
      .map((service) => service.Name?.trim())
      .filter((name): name is string => Boolean(name));
  } catch (error) {
    console.error("Error fetching portfolio categories:", error);
    return [];
  }
}

export const portfolioCategories = [
  "All",
  "Social Media",
  "Video",
  "Print",
  "Packaging",
];

export function getImageUrl(
  image?: StrapiImage,
  size: "thumbnail" | "medium" | "large" = "medium",
): string {
  if (!image) {
    return "/placeholder.svg";
  }

  const imageUrl =
    image.formats?.[size]?.url ||
    image.formats?.small?.url ||
    image.url;

  if (!imageUrl) {
    return "/placeholder.svg";
  }

  return imageUrl.startsWith("http")
    ? imageUrl
    : `${API_URL.replace(/\/$/, "")}${imageUrl}`;
}

export function extractTextFromRichText(richText: RichTextNode[] | RichTextNode | null | undefined): string {
  if (!richText) {
    return "";
  }

  if (Array.isArray(richText)) {
    return richText
      .map((node) => extractTextFromRichText(node))
      .filter(Boolean)
      .join("\n")
      .trim();
  }

  if (typeof richText.text === "string") {
    return richText.text.trim();
  }

  if (Array.isArray(richText.children)) {
    return richText.children
      .map((child) => extractTextFromRichText(child))
      .filter(Boolean)
      .join(" ")
      .trim();
  }

  return "";
}

export function extractChallenge(shortDesc: string): string {
  if (!shortDesc) {
    return "";
  }

  const normalized = shortDesc.trim();
  const withoutHeading = normalized.replace(/^the challenge\s*/i, "").trim();
  return withoutHeading || normalized;
}

export function extractSolution(longDesc: RichTextNode[]): string {
  const text = extractTextFromRichText(longDesc);

  if (!text) {
    return "";
  }

  return text.replace(/^our solution\s*/i, "").trim();
}

export function getGalleryImageUrl(
  galleryImage: GalleryImage,
  size: "thumbnail" | "medium" | "large" = "medium",
): string {
  return getImageUrl(galleryImage.image, size);
}
// ── Products ────────────────────────────────────────────────────────────────

export interface Product {
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string;
}

export const products: Product[] = [
  {
    title: "Instagram Social Media Pack",
    description:
      "50+ ready-to-use Instagram post and story templates for businesses and influencers.",
    price: 299,
    originalPrice: 499,
    image: "/images/product-1.jpg",
    badge: "Best Seller",
  },
  {
    title: "Brand Identity Starter Kit",
    description:
      "Complete branding package with logo templates, business cards, letterheads and style guide.",
    price: 599,
    originalPrice: 999,
    image: "/images/product-2.jpg",
    badge: "Popular",
  },
  {
    title: "YouTube Thumbnail Pack",
    description:
      "40+ professional YouTube thumbnail templates optimized for clicks and engagement.",
    price: 199,
    originalPrice: 349,
    image: "/images/product-3.jpg",
    badge: "",
  },
  {
    title: "Social Media Calendar",
    description:
      "365-day content calendar with daily post ideas, hashtag sets, and caption templates.",
    price: 149,
    originalPrice: 299,
    image: "/images/product-4.jpg",
    badge: "New",
  },
  {
    title: "Story Templates Collection",
    description:
      "70+ Instagram & Facebook story templates for promotions, launches and engagement.",
    price: 199,
    originalPrice: 399,
    image: "/images/product-5.jpg",
    badge: "",
  },
  {
    title: "Business Card Templates",
    description:
      "25+ premium business card designs for professionals across multiple industries.",
    price: 99,
    originalPrice: 199,
    image: "/images/product-6.jpg",
    badge: "",
  },
];

// ── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "+", label: "Years Experience" },
];
