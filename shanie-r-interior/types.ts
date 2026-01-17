import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Kitchen' | 'Wardrobe' | 'Living' | 'Commercial';
  imageUrl: string;
  description?: string;
}

export interface Feature {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  stats?: string[];
}