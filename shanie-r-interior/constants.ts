
import { 
  Home, Armchair, PenTool, LayoutTemplate, 
  Hammer, ClipboardCheck, ShieldCheck, 
  Clock, DollarSign, Award, Smile, Leaf,
  Phone, Mail, MapPin, CheckCircle
} from 'lucide-react';
import { NavItem, Service, PortfolioItem, Feature, TeamMember } from './types';

export const COMPANY_INFO = {
  name: "shanie R interior",
  tagline: "Curating Luxury, Crafting Comfort.",
  address: "9465 Wilshire Blvd, Beverly Hills, Los Angeles, CA 90212, USA",
  phone: "+1 (310) 555-0198",
  whatsapp: "+13105550198",
  email: "studio@shanierinterior.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Excellence', href: '#features' },
  { label: 'Studio Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Our Story', href: '#about' },
  { label: 'Connect', href: '#contact' },
];

export const FEATURES: Feature[] = [
  { title: "Bespoke Artistry", icon: Hammer, description: "Custom designs tailored to your unique persona." },
  { title: "Decades of Mastery", icon: Award, description: "Unrivaled expertise in high-end Californian living." },
  { title: "Precision Delivery", icon: Clock, description: "Meticulous planning and on-schedule handovers." },
  { title: "Transparent Luxury", icon: DollarSign, description: "High-end quality with clear, direct valuation." },
  { title: "Sustainably Sourced", icon: ShieldCheck, description: "Ethical materials with Californian certifications." },
  { title: "Safety & Compliance", icon: CheckCircle, description: "Adhering to the strictest building standards." },
  { title: "Client Partnership", icon: Smile, description: "Collaborative journeys for personalized results." },
  { title: "Modernist Vision", icon: PenTool, description: "Blending heritage aesthetics with futuristic form." },
];

export const SERVICES: Service[] = [
  { 
    id: '1', 
    title: "Estate Interior Design", 
    description: "Holistic transformations for luxury residences.", 
    icon: Home,
    details: ["Open-Concept Living", "Bespoke Suites", "Outdoor-Indoor Blending", "Lighting Sculpture"]
  },
  { 
    id: '2', 
    title: "Executive Workspaces", 
    description: "Productivity-driven commercial environments.", 
    icon: LayoutTemplate,
    details: ["Creative Studios", "Penthouse Offices", "Showroom Curation", "VIP Lounges"]
  },
  { 
    id: '3', 
    title: "Designer Kitchens", 
    description: "Italian finishes and high-tech modularity.", 
    icon:  CheckCircle,
    details: ["Gourmet Islands", "Minimalist Cabinetry", "Smart Appliance Integration", "Natural Stone Craft"]
  }, 
  { 
    id: '4', 
    title: "Bespoke Storage", 
    description: "High-end walk-in and automated solutions.", 
    icon:  ShieldCheck,
    details: ["Climate-Controlled Closets", "Artisan Dressing Rooms", "Hidden Tech Storage", "Watch & Jewelry Safes"]
  }, 
  { 
    id: '5', 
    title: "Full Turnkey Studio", 
    description: "From initial sketch to the final key.", 
    icon: PenTool,
    details: ["Virtual Reality Previews", "White-Glove Installation", "Art Curation", "Project Management"]
  },
  { 
    id: '6', 
    title: "Curated Furniture", 
    description: "Custom pieces made by master craftsmen.", 
    icon: Armchair,
    details: ["Sculptural Sofas", "Live Edge Dining", "Architectural Lighting", "Custom Hardware"]
  },
  { 
    id: '7', 
    title: "Eco-Conscious Design", 
    description: "Sustainable luxury that protects our coast.", 
    icon: Leaf,
    details: ["Reclaimed Hardwoods", "Solar-Ready Concepts", "LEED Certified Sourcing", "Zero-VOC Finishes"]
  },
  { 
    id: '8', 
    title: "Spatial Strategy", 
    description: "Optimizing the flow of your environment.", 
    icon: ClipboardCheck,
    details: ["Blueprint Evolution", "Circulation Studies", "Acoustical Engineering", "Feng Shui Alignment"]
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: "Malibu Coastal Retreat", category: "Living", imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
  { id: '2', title: "Beverly Hills Kitchen", category: "Kitchen", imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
  { id: '3', title: "DTLA Industrial Loft", category: "Commercial", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
  { id: '4', title: "Hollywood Hills Master", category: "Living", imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
  { id: '5', title: "Glass-Front Wardrobe", category: "Wardrobe", imageUrl: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
  { id: '6', title: "Minimalist Studio", category: "Commercial", imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" },
];

export const TEAM: TeamMember = {
  name: "Shanie Revivo Bendavid",
  role: "Principal Designer",
  description: "A visionary in luxury interiors, Shanie specializes in blending modern Californian minimalism with high-tech modular functionality.",
  imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  stats: ["15+ Years Mastery", "Luxury Estate Portfolio", "Architectural Award Winner"]
};
