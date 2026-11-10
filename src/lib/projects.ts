// Central project data. Edit names, descriptions, images, tech and links here only.
// To add a showcase image: upload it with lovable-assets into src/assets/projects/<slug>.asset.json
// and import it below. Projects without an image show a labelled placeholder.
import thriveWm from "@/assets/projects/thrive-wm.asset.json";
import fwulong from "@/assets/projects/fwulong.asset.json";
import medelite from "@/assets/projects/medelite.asset.json";
import cozyAlmonds from "@/assets/projects/cozy-almonds.asset.json";
import tuOrganics from "@/assets/projects/tu-organics.asset.json";
import narrowPath from "@/assets/projects/narrow-path.asset.json";
import kiteCompass from "@/assets/projects/kite-compass.asset.json";
import cardConservatory from "@/assets/projects/card-conservatory.asset.json";

export const CATEGORIES = [
  "All Projects",
  "Business & Corporate",
  "Professional Services",
  "Healthcare",
  "Education",
  "Ecommerce & Specialist Services",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All Projects">;

export interface ProjectImage {
  /** Placeholder identifier shown until a real image is supplied */
  id: string;
  label: string;
  src?: string;
  kind: "desktop" | "mobile" | "full-page" | "feature";
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  industry: string;
  category: string;
  group: Category;
  overview: string;
  highlights: string[];
  cover?: string;
  gallery: ProjectImage[];
  /** Leave empty until confirmed for this project */
  technologies: string[];
  liveUrl?: string;
  featured?: boolean;
}

const galleryFor = (slug: string): ProjectImage[] => [
  { id: `${slug}/desktop-01`, label: "Desktop screenshot", kind: "desktop" },
  { id: `${slug}/mobile-01`, label: "Mobile screenshot", kind: "mobile" },
  { id: `${slug}/feature-01`, label: "Feature detail", kind: "feature" },
];

export const projects: Project[] = [
  {
    slug: "cozy-almonds-cleaning",
    number: "01",
    title: "Cozy Almonds Cleaning",
    industry: "Cleaning and Home Services",
    category: "Service Business Website",
    group: "Professional Services",
    overview:
      "Designed and developed a service-focused website for a residential and commercial cleaning business. The website presents the company's services, communicates its offering, and provides visitors with a structured way to explore services and request information.",
    highlights: ["Homepage and hero presentation", "Cleaning service categories", "Service descriptions", "Quote or enquiry form", "Trust-building content", "Mobile experience"],
    cover: cozyAlmonds.url,
    gallery: galleryFor("cozy-almonds"),
    technologies: [],
    featured: true,
  },
  {
    slug: "kite-and-compass",
    number: "02",
    title: "Kite & Compass",
    industry: "Maritime Consulting",
    category: "Corporate B2B Website",
    group: "Business & Corporate",
    overview:
      "Designed and developed a corporate website for a specialist maritime consulting business serving Australia's offshore wind industry. The website communicates the business's positioning, presents its consulting services, and introduces its specialist expertise to professional audiences.",
    highlights: ["Corporate hero section", "Service presentation", "Business positioning", "Navigation and information structure", "Contact and consultation pathways"],
    cover: kiteCompass.url,
    gallery: galleryFor("kite-compass"),
    technologies: [],
    featured: true,
  },
  {
    slug: "tu-organics-academy",
    number: "03",
    title: "Tu Organics Academy",
    industry: "Beauty Education",
    category: "Education Website",
    group: "Education",
    overview:
      "Designed and developed an educational website for a beauty academy offering hair design and nail technology training. The website presents the academy, communicates its training programs, and helps prospective students explore educational opportunities.",
    highlights: ["Academy introduction", "Course and program presentation", "Educational information", "Enquiry and application pathways", "Mobile experience"],
    cover: tuOrganics.url,
    gallery: galleryFor("tu-organics"),
    technologies: [],
    featured: true,
  },
  {
    slug: "fwulong-amusement",
    number: "04",
    title: "Fwulong Amusement",
    industry: "Amusement Manufacturing",
    category: "Industrial B2B Website",
    group: "Business & Corporate",
    overview:
      "Designed and developed a corporate website for an amusement ride manufacturer. The website organizes product categories, presents the company's offerings, and provides an online platform for prospective business customers to explore products and make enquiries.",
    highlights: ["Product categories", "Product presentation", "Company information", "Product enquiry pathways", "Corporate visual identity"],
    cover: fwulong.url,
    gallery: galleryFor("fwulong"),
    technologies: [],
    featured: true,
  },
  {
    slug: "the-card-conservatory",
    number: "05",
    title: "The Card Conservatory",
    industry: "Sports Card Services",
    category: "Specialist Service Website",
    group: "Ecommerce & Specialist Services",
    overview:
      "Designed and developed a specialist website for a sports card cleaning and restoration business. The website communicates the available services and explains the restoration offering through clear visual presentation and service information.",
    highlights: ["Service introduction", "Before-and-after comparison functionality", "Restoration process", "Service information", "Enquiry experience"],
    cover: cardConservatory.url,
    gallery: galleryFor("card-conservatory"),
    technologies: [],
    featured: true,
  },
  {
    slug: "thrive-wm",
    number: "06",
    title: "Thrive WM",
    industry: "Therapy and Wellness",
    category: "Professional Services Website",
    group: "Professional Services",
    overview:
      "Designed and developed a professional website for a psychotherapy and coaching practice. The website presents the practice's approach, services, areas of specialization, and consultation pathways through a structured and approachable digital experience.",
    highlights: ["Hero presentation", "Practice introduction", "Services and specializations", "Approach to care", "Consultation pathways"],
    cover: thriveWm.url,
    gallery: galleryFor("thrive-wm"),
    technologies: [],
    liveUrl: "https://thrivewm.net",
    featured: true,
  },
  {
    slug: "medelite",
    number: "07",
    title: "Medelite",
    industry: "Healthcare",
    category: "Medical Website",
    group: "Healthcare",
    overview:
      "Designed and developed a medical website for a healthcare practice in Romania. The website introduces the clinic, presents its medical services and specialties, and helps visitors explore its professional offering.",
    highlights: ["Clinic introduction", "Medical specialties", "Professional presentation", "Service information", "Appointment pathways"],
    cover: medelite.url,
    gallery: galleryFor("medelite"),
    technologies: [],
  },
  {
    slug: "dent-hub",
    number: "08",
    title: "Dent Hub",
    industry: "Dental Healthcare",
    category: "Dental Clinic Website",
    group: "Healthcare",
    overview:
      "Designed and developed a professional website for a dental clinic. The website organizes its dental services and treatments, introduces the practice, and provides a clear digital experience for prospective patients.",
    highlights: ["Dental services", "Treatment categories", "Clinic introduction", "Patient information", "Appointment pathways"],
    gallery: galleryFor("dent-hub"),
    technologies: [],
  },
  {
    slug: "narrow-path-new-beginnings",
    number: "09",
    title: "Narrow Path New Beginnings",
    industry: "Community Support and Housing",
    category: "Organization Website",
    group: "Professional Services",
    overview:
      "Designed and developed a website for a structured sober living organization. The website communicates its mission, values, living environment, and application information through a clear and supportive digital experience.",
    highlights: ["Mission and organization introduction", "Core values", "Living environment", "Program information", "Application pathways"],
    cover: narrowPath.url,
    gallery: galleryFor("narrow-path"),
    technologies: [],
  },
  {
    slug: "rowan-and-rock",
    number: "10",
    title: "Rowan & Rock",
    industry: "Workforce Performance Consulting",
    category: "Corporate Consulting Website",
    group: "Business & Corporate",
    overview:
      "Designed and developed a corporate website for a workforce performance consultancy. The website communicates the business's approach to employee performance, workplace wellbeing, and organizational productivity.",
    highlights: ["Business positioning", "Brand messaging", "Consulting services", "Program presentation", "Enquiry pathways"],
    gallery: galleryFor("rowan-rock"),
    technologies: [],
  },
  {
    slug: "courts-psychiatric-services",
    number: "11",
    title: "Courts Psychiatric Services",
    industry: "Mental Healthcare",
    category: "Professional Healthcare Website",
    group: "Healthcare",
    overview:
      "Designed and developed a professional website for a psychiatric services practice. The website provides a digital platform for introducing the practice, presenting its professional services, and communicating with prospective patients.",
    highlights: ["Practice introduction", "Service presentation", "Professional positioning", "Contact pathways", "Mobile experience"],
    gallery: galleryFor("courts-psychiatric"),
    technologies: [],
  },
  {
    slug: "greenfield-akudi",
    number: "12",
    title: "Greenfield Akudi",
    industry: "Construction",
    category: "Construction Business Website",
    group: "Business & Corporate",
    overview:
      "Designed and developed a business website for a construction and finishing services company. The website introduces the company, presents its services, and provides visitors with a way to explore its work and make enquiries.",
    highlights: ["Company introduction", "Construction services", "Project gallery", "Business information", "Enquiry pathways"],
    gallery: galleryFor("greenfield-akudi"),
    technologies: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const services = [
  {
    n: "01",
    title: "Website Design",
    short: "Professional website design for businesses that need a strong and credible online presence.",
    description:
      "Professional website design for businesses that want to establish a credible online presence, communicate their value, and create a strong first impression.",
    includes: ["Business websites", "Corporate websites", "Professional service websites", "Personal and consultant websites", "Multi-page websites"],
  },
  {
    n: "02",
    title: "Website Redesign",
    short: "Transform outdated websites into modern, responsive, user-friendly digital experiences.",
    description:
      "Transform outdated, inconsistent, or underperforming websites into modern digital experiences that better reflect the quality and direction of the business.",
    includes: ["Website redesign", "Visual modernization", "Layout restructuring", "User experience improvements", "Mobile responsiveness", "Content and navigation improvements"],
  },
  {
    n: "03",
    title: "Ecommerce Website Development",
    short: "Functional ecommerce experiences that make it easier to present and sell products online.",
    description:
      "Create well-structured online stores that make it easier for businesses to showcase products, organize their catalogues, and provide a smooth shopping experience.",
    includes: ["Ecommerce website design", "Product presentation", "Category organization", "Shopping experience", "Store functionality", "Responsive layouts"],
  },
  {
    n: "04",
    title: "Landing Pages",
    short: "Focused landing pages built around clear messaging, user experience, and conversion objectives.",
    description:
      "Create focused landing pages that communicate a clear offer, guide visitors through important information, and encourage meaningful action.",
    includes: ["Lead generation landing pages", "Campaign landing pages", "Product landing pages", "Service landing pages", "Enquiry forms", "Call-to-action optimization"],
  },
];

export const toolGroups = [
  { title: "Website Platforms", items: ["WordPress", "Elementor", "Wix", "Hostinger", "WooCommerce"] },
  {
    title: "Design & Development",
    items: ["Responsive Website Design", "Website Redesign", "Landing Page Design", "Website Optimization", "HTML & CSS", "Website Structure & UX"],
  },
];

/** Placeholder contact links — replace with real details. Empty = shown as "to be added". */
export const contactLinks = {
  email: "",
  linkedin: "",
  fiverr: "",
};
