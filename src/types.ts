export interface Room {
  id: number;
  name: string;
  slug: string;
  priceFrom: number;
  surface: number;
  maxOccupancy: number;
  view: 'montaña' | 'piscina';
  brief: string;
  description: string;
  services: string[];
  mainImage: string;
  gallery: string[];
  isFeatured: boolean;
  order: number;
  category: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Offer {
  id: number;
  name: string;
  slug: string;
  discountType: 'percentage' | 'amount';
  discountValue: number;
  conditions: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface Experience {
  id: number;
  name: string;
  slug: string;
  summary: string;
  description: string;
  image: string;
  distanceKm?: number;
  travelTimeMin?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  origin: string;
  text: string;
  rating: number;
  date: string;
}

export interface NavLink {
    href: string;
    label: string;
}
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string;
  headerImage: string;
  categories: string[];
  date: string;
  author: string;
}