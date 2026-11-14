export interface FactItem {
  id: string;
  text: string;
  hot: boolean;
  category: string;
  sectionId: string;
  pages?: string;
}

export interface DiagramHotspot {
  title: string;
  body: string;
  tip: string;
}

export interface SectionItem {
  text: string;
  hot: boolean;
}

export interface MagazineSection {
  id: string;
  title: string;
  emoji: string;
  pages: string;
  bgHeader: string;
  bgTint: string;
  badgeColor: string;
  cartoonTitle: string;
  cartoonCaption: string;
  svgDiagram: string;
  items: SectionItem[];
}

export interface QAItem {
  id?: string;
  q: string;
  a: string;
}

export interface FilterState {
  searchQuery: string;
  onlyHot: boolean;
  activeCategory: string | null;
}
