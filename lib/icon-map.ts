import {
  Clapperboard,
  Code,
  Film,
  Instagram,
  Layers3,
  Megaphone,
  Package,
  Palette,
  Printer,
  type LucideIcon,
  Video,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  instagram: Instagram,
  palette: Palette,
  design: Palette,
  printer: Printer,
  print: Printer,
  package: Package,
  packaging: Package,
  video: Video,
  film: Film,
  clapperboard: Clapperboard,
  megaphone: Megaphone,
  marketing: Megaphone,
  layers3: Layers3,
  code: Code,
};

function normalizeKey(value?: string | null): string {
  return value?.trim().toLowerCase().replace(/[\s_-]+/g, "") ?? "";
}

export function getServiceIcon(...candidates: Array<string | undefined | null>): LucideIcon {
  for (const candidate of candidates) {
    const normalized = normalizeKey(candidate);
    if (normalized && iconMap[normalized]) {
      return iconMap[normalized];
    }
  }

  return Code;
}
