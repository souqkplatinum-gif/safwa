
export interface NavItem {
  label: string;
  path: string;
}

export interface AcademicStage {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  content: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: 'activities' | 'classes' | 'events';
  title: string;
}
