export interface ServiceCardData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  heroDescription: string;
  iconName?: string;
  iconImport?: string;
  shortTitle: string;
  items: string[];
}

export interface TransformedServiceData extends ServiceCardData {
  benefits: string[];
}
