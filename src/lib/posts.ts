// Blog posts. To add a post, copy one of the objects below, give it a new `slug`,
// and put it at the TOP of the list (newest first).
//
// Writing the body:
//   { p: "A paragraph." }              → paragraph (wrap words in **double stars** for bold)
//   { h2: "A heading" }                → section heading
//   { ul: ["item", "item"] }           → bullet list
//   { ol: ["step", "step"] }           → numbered list
//   { img: "/blog/photo.webp", alt: "What the image shows", caption: "Optional caption" }
//
// `cover` is optional: put an image in public/blog/ and write "/blog/your-image.webp".

export type Block =
  | { p: string }
  | { h2: string }
  | { ul: string[] }
  | { ol: string[] }
  | { img: string; alt: string; caption?: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** YYYY-MM-DD */
  date: string;
  cover?: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "wordpress-vs-wix-vs-elementor",
    title: "WordPress, Wix or Elementor: which is right for your business website?",
    excerpt:
      "The platform you choose decides how much your site can grow, what it costs to run and how easy it is to update. Here's a plain-English comparison.",
    category: "Platforms",
    date: "2026-11-10",
    cover: "/blog/platforms-cover.svg",
    body: [
      {
        p: "One of the first questions I hear from new clients is which platform their website should be built on. There's no single right answer, but there is usually a right answer **for your business**. It depends on what the site needs to do, who will update it and how much you expect it to grow.",
      },
      { h2: "First, what these names actually mean" },
      {
        ul: [
          "**WordPress** is a free, open-source content management system. You install it on hosting you pay for, and you can extend it with thousands of themes and plugins.",
          "**Elementor** isn't a separate platform. It's a popular page builder plugin for WordPress that lets you design pages visually by dragging and dropping.",
          "**Wix** is an all-in-one website builder. Hosting, security and updates are included in your subscription, and you edit everything in Wix's own editor.",
          "**WooCommerce** is the ecommerce plugin for WordPress, used when a WordPress site needs to sell products.",
        ],
      },
      { h2: "When WordPress (with Elementor) is the better choice" },
      {
        p: "WordPress suits businesses that expect their website to grow: more pages, a blog, booking systems, multiple languages or an online shop. Because you own the files and the hosting, you can move the site to a different host or developer at any time.",
      },
      {
        ul: [
          "You want full control over design, structure and SEO settings.",
          "You plan to add features later, such as bookings, memberships or ecommerce.",
          "You want to own your site outright and be free to move it.",
        ],
      },
      {
        p: "The trade-off is maintenance. WordPress, its theme and its plugins need regular updates and backups to stay secure. Many businesses handle this with a managed hosting plan or a small monthly care plan.",
      },
      { h2: "When Wix is the better choice" },
      {
        p: "Wix is a good fit when you want a professional site with as little technical upkeep as possible. Hosting and security are handled for you, and the editor is easy for non-technical owners to use.",
      },
      {
        ul: [
          "You need a smaller site, such as a service business, clinic or personal brand.",
          "You want to make simple updates yourself without worrying about plugins.",
          "You prefer one predictable subscription over separate hosting and maintenance.",
        ],
      },
      {
        p: "The trade-off is flexibility. You're working within Wix's tools, and a Wix site can't simply be exported and moved to another platform; switching later usually means rebuilding.",
      },
      { h2: "A quick way to decide" },
      {
        ol: [
          "List what the site must do in the next two to three years, not just at launch.",
          "Decide who will update it, and how comfortable they are with technology.",
          "Weigh ownership and flexibility (WordPress) against simplicity and low upkeep (Wix).",
        ],
      },
      {
        p: "If you're still unsure, that's exactly what a discovery call is for. I build on both, so my recommendation is based on your business, not on the one tool I happen to know.",
      },
    ],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "7 signs your business website needs a redesign",
    excerpt:
      "Your website might be costing you enquiries without you noticing. These are the warning signs I look for first.",
    category: "Redesign",
    date: "2026-11-10",
    cover: "/blog/redesign-cover.svg",
    body: [
      {
        p: "A website rarely breaks overnight. More often it slowly falls behind: the business changes, customers' expectations rise and the site stays the same. Here are seven signs it's time for a redesign.",
      },
      { h2: "1. It's hard to use on a phone" },
      {
        p: "Open your site on your phone and try to find your services and contact details. If you have to pinch, zoom or hunt for buttons, many visitors will leave before they get in touch.",
      },
      { h2: "2. It loads slowly" },
      {
        p: "Large images, outdated themes and too many plugins all slow a site down. A slow site frustrates visitors and can also affect how you appear in search results.",
      },
      { h2: "3. It doesn't explain what you do in a few seconds" },
      {
        p: "A first-time visitor should understand who you help, what you offer and what to do next almost immediately. If your homepage opens with a vague slogan, your message is getting lost.",
      },
      {
        img: "/projects/cozy-almonds-cleaning-1200.webp",
        alt: "Cozy Almonds Cleaning website: a clear headline, Google rating and a quote form in the first screen",
        caption:
          "Cozy Almonds Cleaning's homepage says exactly what they do, shows their Google rating and puts the quote form in the first screen.",
      },
      { h2: "4. Enquiries have dropped or never arrived" },
      {
        p: "If people visit but rarely contact you, the problem is often structure: no clear call to action, forms that are hard to find, or no reason to trust you, such as reviews, examples or credentials.",
      },
      { h2: "5. You're embarrassed to share the link" },
      {
        p: "If you hesitate before sending your website to a potential client, it's no longer doing its job. Your site is often the first impression of your business.",
      },
      { h2: "6. You can't update it yourself" },
      {
        p: "Needing a developer to change a phone number or add a service is a sign the site was built on the wrong setup. A good redesign gives you an editor you're comfortable using.",
      },
      { h2: "7. It no longer matches your business" },
      {
        p: "New services, new branding, new locations or a new type of customer all deserve a website that reflects where the business is today, not where it was when the site was built.",
      },
      { h2: "What a redesign should include" },
      {
        ul: [
          "A clear structure built around what your customers look for.",
          "A modern, consistent design that works on every screen size.",
          "Faster loading, with images optimised for the web.",
          "Obvious ways to contact you, and trust signals near them.",
          "A platform and editor you can manage yourself.",
        ],
      },
      {
        p: "If you recognised two or more of these signs, it's worth a conversation. I'm happy to look at your current site and tell you honestly whether it needs a redesign or just a few targeted fixes.",
      },
    ],
  },
  {
    slug: "what-to-prepare-before-hiring-a-website-designer",
    title: "What to prepare before hiring a website designer",
    excerpt:
      "A little preparation makes your project faster, your quote more accurate and the finished website better. Here's a checklist.",
    category: "Planning",
    date: "2026-11-10",
    cover: "/blog/checklist-cover.svg",
    body: [
      {
        p: "You don't need to have everything figured out before contacting a website designer. But a few answers ready in advance will make your first conversation more useful and help you get an accurate quote.",
      },
      { h2: "1. The goal of the website" },
      {
        p: "Decide what success looks like. More phone calls? Online bookings? Product sales? Applications from students? The main goal shapes every page and every button on the site.",
      },
      { h2: "2. Who your customers are" },
      {
        p: "Describe the people you want to reach: where they are, what problem they have, and what they need to know before choosing you. The website should answer their questions, not just describe your company.",
      },
      { h2: "3. A rough list of pages" },
      {
        p: "Most business websites start with Home, About, Services, Contact and sometimes a Blog or Portfolio. Note any extras, such as individual service pages, a booking page or an FAQ.",
      },
      { h2: "4. Your content" },
      {
        ul: [
          "Your logo, and brand colours if you have them.",
          "Text about your business and services, even if it's rough.",
          "Real photos of your team, premises or work. These build far more trust than stock images.",
          "Reviews or testimonials from past clients.",
        ],
      },
      {
        img: "/projects/dent-hub-1200.webp",
        alt: "DentHub website showing real photos of the dental team and clinic",
        caption:
          "Real photos of the team and the clinic, like these on DentHub's website, build far more trust than stock images.",
      },
      { h2: "5. Websites you like" },
      {
        p: "Share two or three websites you like, from any industry, and say what you like about each one. This is the fastest way to agree on a visual direction.",
      },
      { h2: "6. Access to your domain and hosting" },
      {
        p: "If you already have a domain name or an old website, find the login details for your domain registrar and hosting account. Missing access is one of the most common causes of launch delays.",
      },
      { h2: "7. Budget, timeline and who will update the site" },
      {
        p: "Share a realistic budget range and any deadline, such as a launch or event. Also think about who will update the website after launch, as this affects which platform makes most sense.",
      },
      { h2: "Ready to start?" },
      {
        p: "If you have even half of this list, you're ready for a first conversation. Send me what you have, and I'll help you fill in the gaps.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Rough reading time at ~220 words per minute. */
export const readingTime = (post: Post) => {
  const words = post.body
    .flatMap((b) =>
      "p" in b ? [b.p] : "h2" in b ? [b.h2] : "ul" in b ? b.ul : "ol" in b ? b.ol : [],
    )
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
