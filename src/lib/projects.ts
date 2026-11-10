// Central project data. Edit names, descriptions, images, platforms and links here only.
//
// HOW TO ADD A PROJECT'S WEBSITE LINK
//   liveUrl: "https://www.example.com",
//   → shows a "Live" badge on the project card, the address in the browser frame,
//     and a "Visit example.com" button on the case study.
//
// HOW TO ADD A PROJECT COVER (the main screenshot)
//   Either upload it in Lovable (it creates src/assets/projects/<name>.asset.json; import it
//   below like the others and set  cover: myImport.url ), or put the file in
//   public/projects/ and set  cover: "/projects/my-project.webp" .
//   Best size: a desktop screenshot of the top of the homepage, 1600 × 1000 px, .webp or .jpg.
//   It is shown inside a browser window and cropped from the top, so any height works.
//
// HOW TO ADD MORE SCREENSHOTS (case study "The finished website" section)
//   Give a gallery item a src, e.g. in public/projects/:
//   gallery: [
//     { id: "x-desktop", label: "Services page", kind: "desktop", src: "/projects/x-services.webp" },
//     { id: "x-mobile", label: "Mobile homepage", kind: "mobile", src: "/projects/x-mobile.webp" },
//   ],
//   Items without a src are hidden, so the page never shows empty boxes.
//
// PLATFORMS:  technologies: ["WordPress", "Elementor"]   → shown as "Platform" on the case study.
// STORY (optional, recommended): challenge, solution, result, testimonial.

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
  /** Larger version of the cover for big screens (optional). */
  coverLarge?: string;
  /**
   * true when the cover is a finished presentation board (it already contains
   * browser windows and a title), so the site shows it as-is without adding
   * its own browser frame.
   */
  coverIsShowcase?: boolean;
  gallery: ProjectImage[];
  /** Leave empty until confirmed for this project */
  technologies: string[];
  liveUrl?: string;
  featured?: boolean;
  /** Optional case-study story. Each section only appears once you fill it in. */
  challenge?: string;
  solution?: string;
  result?: string;
  testimonial?: { quote: string; name: string; role?: string };
}

const galleryFor = (slug: string): ProjectImage[] => [
  { id: `${slug}/desktop-01`, label: "Desktop screenshot", kind: "desktop" },
  { id: `${slug}/mobile-01`, label: "Mobile screenshot", kind: "mobile" },
  { id: `${slug}/feature-01`, label: "Feature detail", kind: "feature" },
];

/** Showcase board in public/projects/: <name>-1200.webp and <name>-2000.webp */
const board = (name: string) => ({
  cover: `/projects/${name}-1200.webp`,
  coverLarge: `/projects/${name}-2000.webp`,
  coverIsShowcase: true,
});

export const projects: Project[] = [
  {
    slug: "thrive-wm",
    number: "01",
    title: "Thrive Wellness & Mediation",
    industry: "Psychotherapy & Coaching",
    category: "Professional Services Website",
    group: "Professional Services",
    overview:
      "A calm, trust-first website for a psychotherapy and coaching practice in West Orange, New Jersey, helping individuals, couples and families book a free consultation.",
    highlights: [
      "Consultation booking form",
      "Counseling and therapy service pages",
      "Specializations and approach to care",
      "Articles and resources blog",
      "Contact details with map",
      "Mobile-friendly layout",
    ],
    ...board("thrive-wm"),
    gallery: galleryFor("thrive-wm"),
    technologies: [],
    liveUrl: "https://thrivewm.net",
    featured: true,
  },
  {
    slug: "fwulong-amusement",
    number: "02",
    title: "Fwulong Amusement",
    industry: "Manufacturing · B2B",
    category: "Industrial B2B Website",
    group: "Business & Corporate",
    overview:
      "A B2B website for an amusement ride manufacturer exporting worldwide, built to showcase hundreds of products and turn international buyers into quote requests.",
    highlights: [
      "Product catalogue and categories",
      "Quote and inquiry forms",
      "Six-step ordering process",
      "Trade exhibitions and client gallery",
      "FAQ for international buyers",
      "WhatsApp contact",
    ],
    ...board("fwulong-amusement"),
    gallery: galleryFor("fwulong"),
    technologies: [],
    liveUrl: "https://fwulongamusement.com",
    featured: true,
  },
  {
    slug: "medelite",
    number: "03",
    title: "Policlinica Med Elite",
    industry: "Healthcare Clinic",
    category: "Medical Clinic Website",
    group: "Healthcare",
    overview:
      "A Romanian-language website for a multi-specialty medical clinic, presenting its specialties, its team of doctors and an easy way to book a consultation.",
    highlights: [
      "Medical specialties overview",
      "Meet the doctors section",
      "Appointment request form",
      "Patient testimonials",
      "Four-step patient journey",
      "Medical articles",
    ],
    ...board("medelite"),
    gallery: galleryFor("medelite"),
    technologies: [],
    liveUrl: "https://medelite.ro",
    featured: true,
  },
  {
    slug: "cozy-almonds-cleaning",
    number: "04",
    title: "Cozy Almonds Cleaning",
    industry: "Home Services",
    category: "Service Business Website",
    group: "Professional Services",
    overview:
      "A conversion-focused website for a residential and commercial cleaning company, built around a quick quote form, Google reviews and clear service options.",
    highlights: [
      "Instant quote form in the hero",
      "Standard, deep and move-in/move-out services",
      "Google reviews section",
      "Four-step booking process",
      "Careers page for new cleaners",
      "FAQ",
    ],
    ...board("cozy-almonds-cleaning"),
    gallery: galleryFor("cozy-almonds"),
    technologies: [],
    liveUrl: "https://cozyalmondscleaning.com",
    featured: true,
  },
  {
    slug: "tu-organics-academy",
    number: "05",
    title: "TU Organics Academy",
    industry: "Beauty Education",
    category: "Education Website",
    group: "Education",
    overview:
      "A website for a hair design and nail technology academy in Pahrump, Nevada, guiding prospective students from exploring programs to applying online.",
    highlights: [
      "Program pages with available spaces",
      "Online application and facility visits",
      "Tuition and funding information",
      "Three-step enrollment process",
      "Academy gallery and video",
      "Instructor recruitment section",
    ],
    ...board("tu-organics-academy"),
    gallery: galleryFor("tu-organics"),
    technologies: [],
    liveUrl: "https://tuorganicsacademy.com",
  },
  {
    slug: "dent-hub",
    number: "06",
    title: "DentHub",
    industry: "Dental Clinic",
    category: "Dental Clinic Website",
    group: "Healthcare",
    overview:
      "A bilingual (Romanian and English) website for a dental clinic in Oțelu Roșu, Romania, highlighting its European-trained specialists, services and transparent pricing.",
    highlights: [
      "Romanian and English versions",
      "Services and price list",
      "Clinic gallery",
      "Patient reviews and video stories",
      "Appointment booking",
      "Emergency dental care section",
    ],
    ...board("dent-hub"),
    gallery: galleryFor("dent-hub"),
    technologies: [],
    liveUrl: "https://dent-hub.eu",
  },
  {
    slug: "narrow-path-new-beginnings",
    number: "07",
    title: "Narrow Path New Beginnings",
    industry: "Sober Living",
    category: "Organization Website",
    group: "Professional Services",
    overview:
      "A website for a structured sober living home in Kennewick, Washington, explaining who it serves, how residence works and how to apply.",
    highlights: [
      "Online resident application",
      "Four-step move-in journey",
      "Core values and house expectations",
      "Who we serve section",
      "Resident testimonials",
      "FAQ",
    ],
    ...board("narrow-path-new-beginnings"),
    gallery: galleryFor("narrow-path"),
    technologies: [],
    liveUrl: "https://narrowpathnewbeginnings.com",
  },
  {
    slug: "rowan-and-rock",
    number: "08",
    title: "Rowan & Rock",
    industry: "Workforce Performance",
    category: "Corporate Consulting Website",
    group: "Business & Corporate",
    overview:
      "A corporate website for a UK workforce performance consultancy, making a data-led commercial case for investing in employee performance and wellbeing.",
    highlights: [
      "Research-backed statistics with sources",
      "The Rowan & Rock Index explained",
      "Programme and coaching services",
      "Conversation booking calls to action",
      "Blog",
    ],
    ...board("rowan-and-rock"),
    gallery: galleryFor("rowan-rock"),
    technologies: [],
    liveUrl: "https://rowanandrock.com",
  },
  {
    slug: "kite-and-compass",
    number: "09",
    title: "Kite & Compass",
    industry: "Maritime Consulting",
    category: "Corporate B2B Website",
    group: "Business & Corporate",
    overview:
      "A corporate website for a Melbourne maritime consultancy serving Australia's offshore wind industry, with separate paths for developers and vessel operators.",
    highlights: [
      "Separate developer and operator services",
      "Six service workstreams",
      "Three ways to start an engagement",
      "Market insights section",
      "Discovery call booking",
    ],
    ...board("kite-and-compass"),
    gallery: galleryFor("kite-compass"),
    technologies: [],
    liveUrl: "https://kiteandcompass.com.au",
    featured: true,
  },
  {
    slug: "the-card-conservatory",
    number: "10",
    title: "The Card Conservatory",
    industry: "Collectibles Restoration",
    category: "Specialist Service Website",
    group: "Ecommerce & Specialist Services",
    overview:
      "A dark, premium website for a sports card cleaning and restoration service, with an interactive before-and-after slider and clear per-card pricing.",
    highlights: [
      "Interactive before-and-after slider",
      "Per-card pricing tiers",
      "Mail-in order process",
      "Treatment techniques explained",
      "Collector FAQ",
      "Quote request",
    ],
    ...board("card-conservatory"),
    gallery: galleryFor("card-conservatory"),
    technologies: [],
    liveUrl: "https://thecardconservatory.com",
  },
  {
    slug: "courts-psychiatric-services",
    number: "11",
    title: "Courts Psychiatric Services",
    industry: "Psychiatric Care",
    category: "Professional Healthcare Website",
    group: "Healthcare",
    overview:
      "A website for a board-certified psychiatric practice in Austin, Texas, bringing appointments, telehealth, patient paperwork and secure payments into one place.",
    highlights: [
      "Appointment requests and telehealth",
      "Patient paperwork and portal links",
      "Secure online payments",
      "Insurance and pricing information",
      "Crisis and community resources",
      "Preceptorship inquiries",
    ],
    ...board("courts-psychiatric-services"),
    gallery: galleryFor("courts-psychiatric"),
    technologies: [],
    liveUrl: "https://courtspsychiatricservices.com",
  },
  {
    slug: "greenfield-akudi",
    number: "12",
    title: "Greenfield Akudi",
    industry: "Construction & Finishing",
    category: "Construction Business Website",
    group: "Business & Corporate",
    overview:
      "A business website for a UK construction and finishing company specialising in spray plastering, tape and jointing, traditional plastering and dry lining.",
    highlights: [
      "Service pages for each specialism",
      "Quote requests",
      "Project gallery",
      "Four-step working process",
      "Careers section",
    ],
    ...board("greenfield-akudi"),
    gallery: galleryFor("greenfield-akudi"),
    technologies: [],
    liveUrl: "https://greenfieldakudi.co.uk",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length]!;
};

export const services = [
  {
    n: "01",
    title: "Website Design",
    short:
      "Professional website design for businesses that need a strong and credible online presence.",
    description:
      "Professional website design for businesses that want to establish a credible online presence, communicate their value, and create a strong first impression.",
    includes: [
      "Business websites",
      "Corporate websites",
      "Professional service websites",
      "Personal and consultant websites",
      "Multi-page websites",
    ],
  },
  {
    n: "02",
    title: "Website Redesign",
    short:
      "Transform outdated websites into modern, responsive, user-friendly digital experiences.",
    description:
      "Transform outdated, inconsistent, or underperforming websites into modern digital experiences that better reflect the quality and direction of the business.",
    includes: [
      "Website redesign",
      "Visual modernization",
      "Layout restructuring",
      "User experience improvements",
      "Mobile responsiveness",
      "Content and navigation improvements",
    ],
  },
  {
    n: "03",
    title: "Ecommerce Website Development",
    short:
      "Functional ecommerce experiences that make it easier to present and sell products online.",
    description:
      "Create well-structured online stores that make it easier for businesses to showcase products, organize their catalogues, and provide a smooth shopping experience.",
    includes: [
      "Ecommerce website design",
      "Product presentation",
      "Category organization",
      "Shopping experience",
      "Store functionality",
      "Responsive layouts",
    ],
  },
  {
    n: "04",
    title: "Landing Pages",
    short:
      "Focused landing pages built around clear messaging, user experience, and conversion objectives.",
    description:
      "Create focused landing pages that communicate a clear offer, guide visitors through important information, and encourage meaningful action.",
    includes: [
      "Lead generation landing pages",
      "Campaign landing pages",
      "Product landing pages",
      "Service landing pages",
      "Enquiry forms",
      "Call-to-action optimization",
    ],
  },
];

export const toolGroups = [
  {
    title: "Website Platforms",
    items: ["WordPress", "Elementor", "Wix", "Hostinger", "WooCommerce"],
  },
  {
    title: "Design & Development",
    items: [
      "Responsive Website Design",
      "Website Redesign",
      "Landing Page Design",
      "Website Optimization",
      "HTML & CSS",
      "Website Structure & UX",
    ],
  },
];

/**
 * Contact details. Fill these in and they appear on the Contact page and footer.
 * Empty values are hidden from visitors. When `email` is set, the contact form
 * opens the visitor's email app with their enquiry addressed to you.
 */
export const contactLinks = {
  email: "",
  linkedin: "",
  fiverr: "",
  whatsapp: "", // full link, e.g. https://wa.me/2348000000000
  calendly: "", // booking link, e.g. https://calendly.com/yourname/intro
};

/** Shown under the contact details to reassure clients in other time zones. */
export const responseNote =
  "I usually reply within one business day. Based in Nigeria (GMT+1), working with clients in the US, UK, Canada and Australia.";

/** Portrait photo URL. Leave empty to hide the photo block until you add one. */
export const portrait = "";
