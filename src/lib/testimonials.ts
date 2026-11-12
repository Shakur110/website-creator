// Client testimonials. The "What clients say" section on the homepage appears
// automatically once this list has at least one entry, and stays hidden while empty.
//
// Only use real words from real clients, with their permission.
// To add one, copy this example, remove the // at the start of each line, and fill it in:
//
//   {
//     quote: "Onjoko rebuilt our website in two weeks and enquiries picked up straight away.",
//     name: "Jane Smith",
//     role: "Owner",                       // optional
//     company: "Thrive Wellness & Mediation", // optional
//     country: "USA",                      // optional
//     project: "thrive-wm",                // optional: slug from projects.ts, links to the case study
//   },

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  country?: string;
  /** Slug of the related project in projects.ts, to link to its case study. */
  project?: string;
}

export const testimonials: Testimonial[] = [];
