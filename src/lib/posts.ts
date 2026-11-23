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
//
// Scheduling: a post whose `date` is in the future stays hidden until that day.
// `category` should be one of BLOG_CATEGORIES so the blog's filter can group it.

export type Block =
  | { p: string }
  | { h2: string }
  | { ul: string[] }
  | { ol: string[] }
  | { img: string; alt: string; caption?: string };

export const BLOG_CATEGORIES = [
  "Websites",
  "Shopify",
  "CRM & Automation",
  "AI Tools",
  "Planning",
  "Platforms",
  "Redesign",
] as const;

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
    slug: "why-your-shopify-store-is-slow-and-the-apps-behind-it",
    title: "Why your Shopify store is slow (and the apps behind it)",
    excerpt:
      "How Shopify apps quietly add code to your store, how to audit what you have installed, and how to clean up leftovers so pages load faster.",
    category: "Shopify",
    date: "2026-11-30",
    body: [
      {
        p: "Your Shopify store used to feel quick. Now product pages take a moment too long to appear, the cart drawer stutters on your phone, and you are not sure what changed. You have not touched the theme in months, so it is hard to see where the slowdown came from.",
      },
      {
        p: "In most of the stores I am asked to look at, the answer is the same: apps. Not one bad app, but a slow build-up of them over time. The good news is that this is usually fixable without a redesign.",
      },
      { h2: "How apps slow a store down" },
      {
        p: "Most Shopify apps add something to your storefront so they can do their job. A reviews app shows stars on product pages. A pop-up app loads its form. A chat widget, a currency switcher, an upsell tool and a loyalty badge all need their own code to run in your visitor's browser.",
      },
      {
        p: "Each one on its own might be small. But every app adds files the browser has to download and run before the page feels ready. Some load on every single page, even pages where they do nothing. Stack eight or ten of these and your shoppers feel it, especially on a mobile connection.",
      },
      { h2: "The leftover code problem" },
      {
        p: "This is the part most store owners do not know about. When you uninstall an app, Shopify removes the app itself, but **some apps leave code behind in your theme**. Older apps in particular used to paste snippets straight into theme files. Uninstalling them does not always take those snippets out.",
      },
      {
        p: "The result is a store that still tries to load scripts for apps you stopped paying for a year ago. Sometimes those scripts fail quietly. Sometimes they slow the page or break something small, like a button that no longer responds on the first tap.",
      },
      {
        p: "Newer apps that use theme app extensions (blocks you add and remove in the theme editor) are much cleaner here, because turning off the block removes its code from the page. It is still worth checking.",
      },
      { h2: "How to audit your installed apps" },
      {
        p: "Set aside an hour. You do not need to be technical for most of this. Here is the process I follow:",
      },
      {
        ol: [
          "Open Settings, then Apps and sales channels, and write down every installed app.",
          "Next to each one, note what it does and whether you can point to a real reason it is there today.",
          "Mark any apps that do the same job as another app. Decide which one to keep.",
          "Mark apps you installed to test and never really used.",
          "For each app you plan to keep, check whether it loads on every page or only where it is needed. Many apps have a setting for this.",
          "Before removing anything, duplicate your live theme so you have a safe backup.",
          "Uninstall the apps you no longer need, then follow each app's own removal instructions, as some ask you to delete code or blocks by hand.",
        ],
      },
      {
        p: "If you are unsure what an app is doing, ask its support team directly whether it adds code to your theme and how to remove it fully. Good app developers will tell you.",
      },
      { h2: "Cleaning out what was left behind" },
      {
        p: "Once the apps are gone, look for traces of them. In the theme editor, check each template for app blocks or sections that now show nothing. Remove them.",
      },
      {
        p: "If your theme is older or has been edited by different people, there may be leftover snippets in the code. This is where I would suggest getting help unless you are comfortable editing theme files, because deleting the wrong line can break your layout. Working on a duplicate theme first, then publishing it once you are happy, keeps your live store safe.",
      },
      { h2: "Apps are not the only cause" },
      {
        p: "While you are tidying up, check a few other common culprits:",
      },
      {
        ul: [
          "**Large images.** Product photos uploaded straight from a camera or phone can be far bigger than needed. Resize them before uploading and keep a consistent size across your catalogue.",
          "**Autoplay video and big sliders.** A homepage slideshow with five large images, or a background video, is heavy on mobile. Often one strong image does a better job.",
          "**An outdated or heavily customised theme.** Older themes were not built with today's performance in mind. A modern, well-supported theme can make a noticeable difference.",
          "**Too many fonts.** Each extra font or weight is another file to download. Two fonts are usually plenty.",
        ],
      },
      { h2: "A quick checklist for keeping your store fast" },
      {
        ul: [
          "Review your installed apps every few months, not just when things feel slow.",
          "Before installing a new app, ask what it adds to the storefront and whether your theme can already do the job.",
          "Test new apps on a duplicate theme where possible.",
          "Always remove app blocks and leftover code after uninstalling.",
          "Resize images before uploading them.",
          "Check your store on your own phone, on mobile data, after every change.",
        ],
      },
      { h2: "Why this matters for sales" },
      {
        p: "Shoppers rarely complain that a store is slow. They just leave and buy somewhere else. A faster store makes browsing feel easier, which helps people get from product page to checkout without giving up halfway. Cleaning up apps is one of the simplest improvements you can make, and it often saves you money on subscriptions you forgot you were paying for.",
      },
      {
        p: "If your Shopify store feels sluggish and you would like a second pair of eyes on your apps and theme, get in touch. I am happy to help with your store, your website, or the CRM and automations behind them.",
      },
    ],
  },
  {
    slug: "building-a-simple-sales-pipeline-in-your-crm",
    title: "Building a simple sales pipeline in your CRM",
    excerpt:
      "How to set up a few clear pipeline stages in your CRM, decide what moves a deal forward, and review it weekly so no lead is forgotten.",
    category: "CRM & Automation",
    date: "2026-11-29",
    body: [
      {
        p: 'You have enquiries coming in from your website, your phone and your inbox. Some turn into paying work, some go quiet, and a few you simply forget about. When someone asks how many jobs you have in the works, the honest answer is often "I\'d have to check."',
      },
      {
        p: "A sales pipeline fixes that. It is a simple visual list of every live opportunity and where it stands. Most CRMs have one built in, but many small businesses either never set it up or set it up with so many stages that nobody uses it. Here is how I keep it simple.",
      },
      { h2: "What a sales pipeline actually is" },
      {
        p: 'Think of a row of columns, like a whiteboard with sticky notes. Each column is a stage, such as "New lead" or "Quote sent". Each sticky note is a deal: one potential customer and the job they might buy. As the conversation moves forward, you drag the deal to the next column.',
      },
      {
        p: "In a CRM, for example HubSpot or Zoho, this board is usually called a pipeline or deals view. The deal is linked to the contact record, so their emails, notes and form submissions sit in one place.",
      },
      {
        p: "The point is not the software. The point is that at any moment you can open one screen and see what is waiting on you, what is waiting on the customer, and what needs a nudge.",
      },
      { h2: "Start with five stages, not fifteen" },
      {
        p: "The most common mistake I see is a pipeline that tries to describe every tiny step. If moving a deal feels like admin, people stop doing it, and the board goes out of date within a fortnight. For most service businesses, these stages are enough:",
      },
      {
        ol: [
          "**New lead.** Someone has enquired, but you have not spoken to them yet.",
          "**In conversation.** You have replied or had a call, and you are working out what they need.",
          "**Quote or proposal sent.** They have a price in front of them.",
          "**Won.** They have said yes, paid a deposit or signed.",
          "**Lost.** They have said no, chosen someone else or stopped replying after your follow-ups.",
        ],
      },
      {
        p: 'If you book site visits or discovery calls, you might add a "Call booked" stage between New lead and In conversation. Add a stage only when it changes what you do next. If two stages always lead to the same action, merge them.',
      },
      { h2: "Decide what moves a deal forward" },
      {
        p: "Every stage needs a clear rule for getting in and getting out. Without one, two people on your team will put the same deal in different columns, and the board stops meaning anything.",
      },
      {
        p: "Write the rules down in one line each. For example:",
      },
      {
        ul: [
          "A deal moves to **In conversation** once you have had a real two-way exchange, not just sent an auto-reply.",
          "A deal moves to **Quote sent** the day the quote leaves your outbox.",
          "A deal moves to **Won** when there is a firm commitment, such as a signed agreement or a deposit.",
          "A deal moves to **Lost** after an agreed number of follow-ups with no reply, so it does not sit in limbo forever.",
        ],
      },
      {
        p: "Marking deals as lost feels uncomfortable, but it is useful. When you record a short reason, such as price, timing or chose a competitor, you start to see patterns you can act on.",
      },
      { h2: "Let automation do the boring parts" },
      {
        p: "Once the stages are clear, you can let the CRM handle some of the moving and reminding. This is where a pipeline starts saving real time:",
      },
      {
        ul: [
          "Website form submissions create a new deal in **New lead** automatically, tagged with where the enquiry came from.",
          "When a deal enters **Quote sent**, the CRM sets a task to follow up a few days later.",
          "If a deal sits in one stage for too long, you get a reminder rather than discovering it a month later.",
          "When a deal is marked **Won**, a welcome email or onboarding checklist goes out.",
        ],
      },
      {
        p: "Start with one or two of these, not all four. Automations are easy to switch on and easy to forget about, so I prefer adding them one at a time and checking each one works properly before the next.",
      },
      { h2: "The weekly review habit" },
      {
        p: "A pipeline only helps if you look at it. The simplest habit I recommend is a fifteen-minute review at the same time each week. Open the board and go column by column:",
      },
      {
        ol: [
          "Check **New lead**: has everyone had a reply?",
          "Check **In conversation**: does each deal have a clear next step and a date?",
          "Check **Quote sent**: who needs a follow-up this week?",
          "Move anything that has gone cold to **Lost**, with a reason.",
          "Look at **Won** for the week and make sure each new customer has been handed over properly.",
        ],
      },
      {
        p: "That is it. Over a few weeks, you will notice which stage deals tend to get stuck in. That tells you where to focus, whether it is replying faster, making quotes clearer or following up more consistently.",
      },
      { h2: "A quick setup checklist" },
      {
        ul: [
          "Pick four to six stages that match how you actually sell.",
          "Write a one-line rule for entering each stage.",
          "Connect your website forms so new enquiries land in the first stage.",
          "Add a follow-up task when a quote is sent.",
          "Add a field for the reason a deal was lost.",
          "Book a recurring fifteen-minute pipeline review in your calendar.",
        ],
      },
      {
        p: "You do not need a complicated system to stay on top of your sales. A small, honest pipeline that you check every week will do more for you than a detailed one nobody updates.",
      },
      {
        p: "If you would like help setting up a pipeline in your CRM, connecting it to your website forms or adding a few sensible automations, get in touch. I'm happy to look at what you have now and suggest a simple next step.",
      },
    ],
  },
  {
    slug: "trust-signals-make-visitors-believe-you-before-they-call",
    title: "Trust signals: how to make visitors believe you before they call",
    excerpt:
      "The reviews, photos, details and proof that help a stranger trust your business website enough to pick up the phone or fill in your form.",
    category: "Websites",
    date: "2026-11-28",
    body: [
      {
        p: "Someone lands on your website. They have never heard of you, they have three other tabs open with your competitors, and they are trying to decide who to contact. They will not read every word. They are scanning for one thing: can I trust this business?",
      },
      {
        p: "If your site does not answer that question quickly, they move on, even if you are the best option. The good news is that trust is not magic. It comes from a handful of specific signals, and most of them are easy to add.",
      },
      { h2: "What a trust signal actually is" },
      {
        p: "A trust signal is anything on your website that tells a visitor you are real, you are reliable and other people have had a good experience with you. It is proof, not promises.",
      },
      {
        p: 'Saying "we offer excellent service" is a promise. Showing a review from a named customer who describes what you did for them is proof. Visitors have learned to skip over the first kind and look for the second.',
      },
      { h2: "Reviews and testimonials that feel real" },
      {
        p: 'Reviews are usually the strongest signal you have, but how you show them matters. A single line like "Great service!" with no name attached does very little. Visitors have seen too many made-up testimonials to believe that.',
      },
      {
        p: "When I add reviews to a client's site, I look for these qualities:",
      },
      {
        ul: [
          "A real first name, and a town or business name where the customer is happy to share it.",
          "Specific details about the job, the problem or the result, in the customer's own words.",
          "A mix of reviews that cover your main services, not five that all say the same thing.",
          "Placement near the decision points: on service pages and close to your contact form, not only on a separate reviews page.",
        ],
      },
      {
        p: "If you collect reviews on Google or another review platform, you can show a selection of those on your site too. Just make sure you only use reviews that customers actually left. Never write or edit them yourself.",
      },
      { h2: "Real photos of you, your team and your work" },
      {
        p: "Stock photos of smiling people in suits are easy to spot, and they quietly tell visitors you might be hiding something. Real photos do the opposite.",
      },
      {
        p: "You do not need a professional shoot to start. Clear, well-lit photos of you, your team, your van, your workspace or your finished jobs go a long way. For product businesses, photos of real products being used work better than flat images on a white background alone.",
      },
      {
        p: "A photo of the owner on the About page and next to the contact form is one of the simplest changes I make. People like to know who they are about to speak to.",
      },
      { h2: "Clear contact details and a real location" },
      {
        p: "It sounds obvious, but many small business sites make it hard to find basic information. If a visitor has to hunt for your phone number, they start to wonder why.",
      },
      {
        ul: [
          "Show a phone number and email address in the header or footer of every page.",
          "Make the phone number tap-to-call on mobile.",
          "Include your business address or the areas you serve.",
          "Add your opening hours and how quickly you usually reply to enquiries.",
          "Use a business email address on your own domain rather than a free personal one.",
        ],
      },
      { h2: "Credentials, memberships and guarantees" },
      {
        p: "If you hold licences, qualifications, insurance or memberships of trade bodies that matter in your industry, say so clearly. A short line with the name of the body is enough. Only list ones you genuinely hold and keep them up to date.",
      },
      {
        p: "Guarantees work the same way. If you offer a workmanship guarantee, a satisfaction promise or a clear refund policy, put it where people are deciding, not buried in the small print. Be precise about what it covers so it builds trust rather than raising questions.",
      },
      { h2: "Show your work with short case studies" },
      {
        p: "A case study does not have to be long. A few sentences on what the customer needed, what you did and how it turned out, plus a photo or two, is often more convincing than a page of sales copy.",
      },
      {
        p: 'Keep them honest. Describe the work plainly and avoid inventing numbers you cannot back up. If a customer is happy to be named, ask their permission first. If not, describe them in general terms, such as "a family-run bakery" or "a cleaning company in Manchester".',
      },
      { h2: "The small details that quietly matter" },
      {
        p: "Some trust signals are not things you add, but problems you remove. Visitors notice when something feels neglected.",
      },
      {
        ul: [
          "A copyright year in the footer that is several years out of date.",
          'Broken links, empty pages or "coming soon" sections that never arrived.',
          "Spelling mistakes in headings.",
          "A missing security padlock in the browser because the site has no SSL certificate.",
          "A blog whose latest post is from years ago.",
        ],
      },
      { h2: "A quick trust check for your own website" },
      {
        p: "Open your website on your phone, pretend you are a new customer and work through these steps:",
      },
      {
        ol: [
          "Can you find a phone number within five seconds of landing on the homepage?",
          "Is there at least one real review visible without scrolling far?",
          "Do you see a real photo of the person or team behind the business?",
          "Is it clear where you work or who you serve?",
          "Are your credentials, insurance or guarantees mentioned on your service pages?",
          "Is there at least one example of past work with a short description?",
          "Is everything up to date, from the footer year to your opening hours?",
        ],
      },
      {
        p: "If you answered no to two or more, that is where I would start. These changes are usually quicker and cheaper than a redesign, and they help every visitor who arrives.",
      },
      {
        p: "If you would like a second pair of eyes on your website, Shopify store or the way enquiries are followed up in your CRM, feel free to get in touch. I am happy to take a look and point out the trust gaps worth fixing first.",
      },
    ],
  },
  {
    slug: "ai-tools-and-customer-data-what-to-be-careful-about",
    title: "AI tools and customer data: what small businesses should be careful about",
    excerpt:
      "Simple rules for using AI tools with customer information: what not to paste in, which settings to check, and where a human should stay involved.",
    category: "AI Tools",
    date: "2026-11-27",
    body: [
      {
        p: "AI tools are now part of everyday work for a lot of small businesses. You paste in an email to get a better reply, drop in a spreadsheet to get a summary, or connect a chatbot to your website. It saves time, and it is easy to forget what you just shared.",
      },
      {
        p: "Your customers trusted you with their names, phone numbers, order history and sometimes much more. Before that information goes into an AI tool, it is worth pausing for a moment. Here is how I think about it when I set up AI tools for clients, in plain English.",
      },
      { h2: "Why this matters more than it seems" },
      {
        p: "When you type into an AI tool, that text leaves your computer and is processed on someone else's servers. Depending on the tool, your plan and your settings, it may be stored, reviewed or used to improve the service. Many tools are careful about this, but you should know the answer for the ones you use rather than assume.",
      },
      {
        p: "There is also the legal side. Businesses in the UK, Canada and Australia, and many US states, have privacy rules about how customer data is collected, stored and shared. I am not a lawyer, and I won't pretend the rules are identical everywhere, but the common thread is simple: you are responsible for what happens to your customers' information, including when a tool you chose handles it.",
      },
      { h2: "What not to paste into a general AI tool" },
      {
        p: "My rule of thumb: if you wouldn't put it in an email to a stranger, don't paste it into a general-purpose AI chat. In particular, keep these out:",
      },
      {
        ul: [
          "Payment details, card numbers or bank information.",
          "Passwords, login links or API keys for your website, store or CRM.",
          "Health, medical or other sensitive personal details.",
          "Full customer lists or exports with names, emails and phone numbers.",
          "Anything covered by a confidentiality agreement with a client or supplier.",
        ],
      },
      {
        p: 'The good news is that you rarely need the personal details to get the help you want. If you are asking for help with a reply to a complaint, replace the customer\'s name with "the customer" and remove the order number. The AI can write just as good a reply without knowing who it is for.',
      },
      { h2: "Check the settings before you rely on a tool" },
      {
        p: "Most popular AI tools have settings or plan options that change how your data is handled. They are often a few clicks deep, so it pays to look once and write down what you find. When I review a tool for a client, these are the questions I try to answer:",
      },
      {
        ul: [
          "Is my content used to train or improve the tool, and can I switch that off?",
          "How long are my conversations or uploaded files kept, and can I delete them?",
          "Is there a business or team plan with stronger data protections than the free version?",
          "Who in my team has access, and does each person have their own login?",
          "If the tool connects to my CRM, inbox or store, what exactly can it read and change?",
        ],
      },
      {
        p: "That last point matters most for automations. When an AI tool is connected to your CRM or Shopify store, it can often see far more than the one task needs. Give it the narrowest access that still works. If it only needs to read new form enquiries, it shouldn't be able to export your whole customer list.",
      },
      { h2: "Keep a human in the loop" },
      {
        p: "AI is good at drafting, sorting and summarising. It is not good at knowing when something is sensitive, unusual or simply wrong. That is why I build most client automations so a person checks the output before it reaches a customer.",
      },
      {
        p: "For example, an AI tool can draft a reply to every new enquiry and put it in your CRM for review. Someone on your team reads it, fixes anything off and clicks send. You still save most of the time, but nothing goes out that a person hasn't seen. Once you trust a particular type of message, such as a simple booking confirmation, you can decide whether that one is safe to send automatically.",
      },
      { h2: "A simple AI data checklist for your business" },
      {
        p: "You don't need a long policy document to start. Run through these steps once, write the answers on a single page and share it with your team:",
      },
      {
        ol: [
          "List every AI tool your team uses, including free ones people signed up for themselves.",
          "For each tool, check the data and training settings and switch on the most private option that still works for you.",
          "Agree what must never be pasted in: payment details, passwords, sensitive personal data and full customer exports.",
          "Remove names and identifying details from anything you share, unless the tool is approved for customer data.",
          "Limit connected tools to the access they need, and remove access you no longer use.",
          "Decide which AI outputs a person must check before they reach a customer.",
          "Review the list every few months, because tools and settings change.",
        ],
      },
      {
        p: "It is also worth updating your website's privacy policy if you use AI tools that handle customer information, so people know how their data is processed. A legal professional can help you get the wording right.",
      },
      { h2: "Careful doesn't mean avoiding AI" },
      {
        p: "None of this is a reason to stay away from AI tools. Used well, they save small teams hours every week. Being careful just means choosing tools on purpose, setting them up properly and keeping a person involved where it counts. That is a much better position than finding out later that half your team has been pasting customer lists into whatever tool they found first.",
      },
      {
        p: "If you'd like help setting up AI tools, a CRM or automations that save time without putting your customers' information at risk, feel free to get in touch. I'm happy to look at what you're using now and suggest a sensible setup for your website, Shopify store or CRM.",
      },
    ],
  },
  {
    slug: "wordpress-maintenance-what-needs-doing-every-month",
    title: "WordPress maintenance: what needs doing every month",
    excerpt:
      "A plain-English monthly checklist for keeping a WordPress site secure, backed up and working, plus how to decide between DIY and a care plan.",
    category: "Platforms",
    date: "2026-11-26",
    body: [
      {
        p: "Your WordPress site launched, it looked great, and then life got busy. Months later a plugin warning appears, the contact form has quietly stopped sending emails, or the site is suddenly showing something strange.",
      },
      {
        p: 'WordPress is flexible and powerful, but it isn\'t a "set it and forget it" platform. A little regular care keeps it secure, fast and working. Here is the routine I recommend to the business owners I build for, and how to decide whether to do it yourself or hand it over.',
      },
      {
        h2: "Why WordPress needs regular care",
      },
      {
        p: "A WordPress site is made of several moving parts: WordPress itself, your theme (and often a page builder like Elementor), and a collection of plugins. Each one is updated by a different team on its own schedule.",
      },
      {
        p: "Updates fix bugs, close security holes and keep everything compatible with each other. When a site goes months without updates, the gaps add up. Outdated plugins are one of the most common ways small business sites get into trouble, and the longer you wait, the bigger and riskier the catch-up becomes.",
      },
      {
        h2: "Step one: back up before you touch anything",
      },
      {
        p: "Backups are your safety net. If an update breaks a page, or something worse happens, a recent backup lets you put the site back the way it was.",
      },
      {
        ul: [
          "Make sure backups run automatically, at least weekly, and daily if your site changes often (for example a shop taking orders).",
          "Back up both the files and the database. The database holds your pages, posts, form entries and orders.",
          "Keep at least one copy somewhere other than your hosting account, such as cloud storage.",
          "Take a fresh backup right before you run updates, not just on the regular schedule.",
          "Every few months, check that a backup can actually be restored. A backup you've never tested is a hope, not a plan.",
        ],
      },
      {
        p: "Many hosting providers, including Hostinger, offer backup tools in their dashboard. Check what yours includes and how long backups are kept.",
      },
      {
        h2: "The monthly WordPress checklist",
      },
      {
        p: "Once a month, set aside an hour and work through this list in order:",
      },
      {
        ol: [
          "Take a full backup and confirm it finished.",
          "Update plugins, one at a time or in small groups, checking the site after each.",
          "Update your theme and page builder, then check your key pages still look right.",
          "Update WordPress itself when a new version is available.",
          "Delete plugins and themes you no longer use. Deactivated plugins can still be a risk.",
          "Submit every form on the site and confirm the email arrives where it should.",
          "Click through your main pages on a phone and a computer, looking for broken layouts or links.",
          "Check your site's speed and look out for anything that has slowed down since last month.",
          "Review user accounts and remove anyone who no longer needs access.",
          "If you run WooCommerce, place a test order to make sure checkout and emails work.",
        ],
      },
      {
        p: "The form test is the one people skip most often, and it matters. A broken contact form doesn't show an error to you. It just means enquiries stop arriving, and you may not notice for weeks.",
      },
      {
        h2: "Security and uptime: the ongoing basics",
      },
      {
        p: "Alongside the monthly routine, a few settings should be in place all the time:",
      },
      {
        ul: [
          "**Strong passwords and two-factor login** for every admin account.",
          "**A security plugin or host-level protection** that blocks repeated login attempts and scans for known problems.",
          "**An SSL certificate** so your site loads over https. Most hosts provide this, but check it renews.",
          "**Uptime monitoring** that emails you if the site goes down, so you hear about it before a customer does.",
          "**Fewer admins.** Give staff and freelancers the lowest level of access they need.",
        ],
      },
      {
        h2: "When an update goes wrong",
      },
      {
        p: "Occasionally an update clashes with another plugin or your theme. A page might look broken, or a feature might stop working. Don't panic, and don't start changing lots of things at once.",
      },
      {
        p: "Note which update you ran last, since that is usually the cause. You can often roll back that one plugin, or restore the backup you took before updating. Then check whether the plugin's developer has released a fix, and try again later. This is exactly why updating in small groups helps: you always know where to look.",
      },
      {
        h2: "DIY or a care plan?",
      },
      {
        p: "Plenty of business owners handle maintenance themselves, and that's fine. Doing it yourself tends to suit you if:",
      },
      {
        ul: [
          "Your site is fairly simple, with a small number of plugins.",
          "You're comfortable logging into WordPress and following a checklist.",
          "You will genuinely block out time for it every month.",
        ],
      },
      {
        p: "A care plan, where a developer or agency handles updates, backups, monitoring and fixes for a monthly fee, tends to make more sense if your site takes bookings or sells products, if downtime would cost you enquiries, or if you know the monthly hour will keep slipping. The real cost of skipped maintenance is usually a rushed, stressful repair later.",
      },
      {
        p: "Whichever route you choose, the important part is that someone owns the job and it happens on a schedule.",
      },
      {
        h2: "Keep a simple log",
      },
      {
        p: "Finally, keep a short note each month: the date, what was updated, anything that went wrong and how it was fixed. It takes two minutes. If a problem appears later, that log tells you or your developer exactly what changed and when.",
      },
      {
        p: "If you'd like a hand keeping your WordPress site healthy, or you want help with your Shopify store, CRM or automations, feel free to get in touch. I'm happy to take a look and tell you what your site needs.",
      },
    ],
  },
  {
    slug: "7-shopify-store-fixes-that-can-lift-sales-without-a-redesign",
    title: "7 Shopify store fixes that can lift sales without a redesign",
    excerpt:
      "Seven practical changes to your Shopify store's homepage, product pages and checkout path that can help more visitors buy, no redesign needed.",
    category: "Shopify",
    date: "2026-11-25",
    body: [
      {
        p: "Your Shopify store gets visitors, but not as many of them buy as you hoped. The tempting answer is a full redesign: new theme, new layout, new everything.",
      },
      {
        p: "In my experience, that's often not where the problem is. Most stores I look at lose sales to a handful of small, fixable gaps. Here are the seven I check first, and none of them need you to start again.",
      },
      {
        h2: "1. Make the homepage say what you sell in seconds",
      },
      {
        p: "A new visitor should understand what your store sells, and who it's for, within a few seconds of landing. Big lifestyle images and vague slogans look nice but often leave people guessing.",
      },
      {
        p: "Check the top of your homepage on a phone. Is there a plain headline about your products? Is there one clear button that takes people to your best sellers or main collection? If the answer is no, that's your first fix. It's usually a text and button change, not a new theme.",
      },
      {
        h2: "2. Improve your product photos",
      },
      {
        p: "Online shoppers can't pick up your product, so your photos have to do that job. One small image on a white background rarely answers enough questions.",
      },
      {
        ul: [
          "Show the product from several angles, including close-ups of texture, stitching or labels.",
          "Add at least one photo of the product in use, so people can judge size and scale.",
          "Keep lighting and backgrounds consistent across your catalogue so the store looks cared for.",
          "Compress images before uploading so they stay sharp without slowing the page down.",
        ],
      },
      {
        p: "You don't need a professional studio to start. Good natural light, a clean background and a steady phone can make a real difference.",
      },
      {
        h2: "3. Put reviews where buyers make decisions",
      },
      {
        p: "Reviews help people trust a store they haven't bought from before. But many stores collect them and then hide them at the very bottom of the product page, below everything else.",
      },
      {
        p: "Show a star rating near the product title and price, and the full reviews further down. If you're just starting out and don't have many yet, set up an automatic email asking recent customers for a review a little while after delivery. Most review apps can do this for you. Please don't add made-up reviews; it damages trust quickly when people notice.",
      },
      {
        h2: "4. Be clear about shipping and returns",
      },
      {
        p: "Surprise shipping costs at checkout are one of the most common reasons people give up on a purchase. The fix is simple: tell them early.",
      },
      {
        ul: [
          "Add a short shipping line under the price or the Add to Cart button, such as when it ships and roughly how long delivery takes.",
          "If you offer free shipping over a certain order value, say so in the announcement bar at the top of the store.",
          "Summarise your returns policy in one or two sentences on product pages, with a link to the full policy.",
          "If you ship internationally, say which countries you cover so overseas visitors aren't left wondering.",
        ],
      },
      {
        h2: "5. Add trust signals that are real",
      },
      {
        p: 'Shoppers want reassurance that a real business is behind the store. Generic "100% secure" badges don\'t do much on their own. Real details do.',
      },
      {
        p: "A short About page with your story and a real photo, a visible contact email or phone number, clear payment options, and a simple FAQ all help. If your products have genuine credentials, for example certifications or materials you can back up, mention them near the product description.",
      },
      {
        h2: "6. Capture emails from people who aren't ready to buy",
      },
      {
        p: "Most first-time visitors won't buy on their first visit. If they leave without a trace, you've lost them. A simple email signup gives you a second chance.",
      },
      {
        p: "Offer something useful in return, like early access to new products or a small first-order discount, and keep the popup polite: wait a few seconds before showing it and make it easy to close on mobile. Then connect it to an email tool, for example Klaviyo or Shopify's own email features, so new subscribers get a short welcome series and people who leave items in their cart get a reminder.",
      },
      {
        h2: "7. Speed up the store",
      },
      {
        p: "A slow store tests people's patience, especially on mobile data. Speed problems on Shopify usually come from a few familiar places:",
      },
      {
        ul: [
          "Large, uncompressed images, especially in homepage sliders.",
          "Too many apps, including ones you stopped using but never fully removed.",
          "Autoplay videos and heavy animations above the fold.",
          "Several tracking and chat scripts loading on every page.",
        ],
      },
      {
        p: "Go through your installed apps and remove anything you don't actively use. Some apps leave code behind after uninstalling, so it's worth checking your theme too, or asking someone to do it for you.",
      },
      {
        h2: "A quick checklist to work through",
      },
      {
        ol: [
          "Read your homepage on a phone. Can you tell what the store sells in five seconds?",
          "Pick your three best sellers and add better photos to each.",
          "Move star ratings up near the price and switch on review request emails.",
          "Add a shipping and returns line to your product page template.",
          "Make sure your contact details and About page are easy to find.",
          "Set up an email signup and a basic abandoned cart reminder.",
          "Remove apps you don't use and compress your largest images.",
          "Place a test order on your phone from start to finish.",
        ],
      },
      {
        p: "Do them one at a time and give each change a few weeks before judging it. Small, steady improvements are easier to measure than a big overhaul, and they keep your store selling while you work on it.",
      },
      {
        h2: "When a redesign does make sense",
      },
      {
        p: "Sometimes a store really has outgrown its theme: it's hard to update, it looks dated, or it can't do what the business needs. But it's worth fixing the basics first. If sales still fall short after that, you'll go into a redesign knowing exactly what needs to change.",
      },
      {
        p: "If you'd like a second pair of eyes on your Shopify store, or help working through any of these fixes, get in touch. I'm happy to look at what you have and point out the changes most likely to help.",
      },
    ],
  },
  {
    slug: "connecting-your-website-forms-to-a-crm",
    title: "Connecting your website forms to a CRM: a beginner's guide",
    excerpt:
      "How to get every website enquiry into your CRM automatically, with the right fields, a clear lead source and no duplicates.",
    category: "CRM & Automation",
    date: "2026-11-24",
    body: [
      {
        p: "Someone fills in the contact form on your website. An email lands in your inbox. Then someone has to copy the details into your CRM, if they remember, and if the email didn't end up in spam.",
      },
      {
        p: "That small manual step is where a lot of enquiries quietly go missing. Connecting your forms straight to your CRM removes it, and it's one of the most useful bits of setup a small business can do.",
      },
      {
        h2: 'What "connecting" actually means',
      },
      {
        p: "When your form is connected, every submission creates or updates a contact record in your CRM automatically. The person's details, their message and where they came from are all saved in one place the moment they press send.",
      },
      {
        p: "There are a few common ways to do this, and which one fits depends on your website platform and your CRM:",
      },
      {
        ul: [
          "**A built-in integration.** Many CRMs, for example HubSpot or Zoho, offer their own form or a plugin that links to WordPress, Wix and other builders.",
          "**Your form tool's own connection.** Some form plugins, including the forms in Elementor, can send submissions to popular CRMs or to a webhook.",
          "**A connector service in the middle.** Tools that pass data between apps can take a form submission and create a CRM contact, which is handy when there's no direct link.",
          "**The CRM's own embedded form.** You place the CRM's form on your page, so submissions go straight in.",
        ],
      },
      {
        p: 'None of these is "best" in every case. I usually start by checking what your website and CRM already support before adding anything new, because fewer moving parts means fewer things to break.',
      },
      {
        h2: "The form fields that matter",
      },
      {
        p: "A long form puts people off, and a form that's too short leaves you guessing. For most service businesses, these fields are enough to start a useful conversation:",
      },
      {
        ul: [
          "Name.",
          "Email address.",
          "Phone number, marked optional unless you really need it.",
          "What they need help with, ideally as a short dropdown of your main services.",
          "A message box for anything else.",
          "A consent tickbox if you plan to send marketing emails.",
        ],
      },
      {
        p: "The dropdown is worth the effort. Free-text answers are hard to sort later, but a fixed list means your CRM can group enquiries by service and route them to the right person.",
      },
      {
        p: 'Make sure each form field maps to a matching field in your CRM. If your form says "Service needed" but the CRM has nowhere to put it, that information gets dropped or dumped into a notes field nobody reads.',
      },
      {
        h2: "Tag every lead with its source",
      },
      {
        p: "Knowing where an enquiry came from is one of the most valuable things a CRM can tell you, and it's easy to miss when setting up forms. At the very least, record which form or page the enquiry came from.",
      },
      {
        p: 'Most setups can also pass along a hidden field with the page address, or the campaign details from an ad link. You don\'t need anything fancy. Even a simple "Lead source: Website - Contact page" or "Website - Quote form" lets you see over a few months which pages actually bring in work.',
      },
      {
        h2: "Set up the right notifications",
      },
      {
        p: "Getting leads into the CRM is half the job. Someone still needs to know they've arrived. I usually set up two things:",
      },
      {
        ol: [
          "**An instant acknowledgement to the customer.** A short, friendly email confirming you've received their message and when they can expect to hear back.",
          "**An alert to your team.** An email or app notification to whoever handles new enquiries, with the key details and a link to the contact in the CRM.",
        ],
      },
      {
        p: 'If several people share the work, use the service dropdown or a simple rule to assign each lead to one owner. A lead that "everyone" is responsible for is often a lead nobody follows up.',
      },
      {
        h2: "Avoid duplicate contacts",
      },
      {
        p: "Duplicates creep in when the same person fills in a form twice, uses a different form, or is already in your CRM from an earlier job. Before long you have three records for one customer and nobody knows which is right.",
      },
      {
        p: "Most CRMs can match new submissions to existing contacts by email address and update the record instead of creating a new one. Check that this is switched on. If you use a connector service, set it to search for an existing contact first, then create one only if none is found.",
      },
      {
        p: "It also helps to keep your form's email field required and checked for a valid format. A typo in the email address is one of the most common reasons a lead can't be matched or contacted.",
      },
      {
        h2: "A simple checklist before you go live",
      },
      {
        ol: [
          "List every form on your website, including quote, booking and newsletter forms.",
          "Decide which fields each form needs and remove the rest.",
          "Map each form field to a field in your CRM.",
          "Add a lead source for each form.",
          "Switch on duplicate matching by email address.",
          "Set up the customer acknowledgement and the team alert.",
          "Submit a test enquiry from each form and check the CRM record, both emails and the lead source.",
          "Repeat the test on your phone, and again after any website update.",
        ],
      },
      {
        p: "That last step matters more than it looks. Plugin updates, theme changes and new CRM settings can quietly break a connection. A test submission once a month takes two minutes and can save you from weeks of lost enquiries.",
      },
      {
        h2: "Start small and build from there",
      },
      {
        p: "Once your forms feed your CRM reliably, other improvements become much easier: automated follow-up emails, a simple sales pipeline, review requests after a job. But they all depend on clean, complete data coming in at the start. Get the form connection right first.",
      },
      {
        p: "If you'd like help connecting your website forms to your CRM, or tidying up a setup that's become messy, get in touch. I'm happy to look at what you have and suggest the simplest way to make it work.",
      },
    ],
  },
  {
    slug: "mobile-first-design-what-it-means-for-your-business-website",
    title: "Mobile-first design: what it means for your business website",
    excerpt:
      "Many of your visitors meet your business on a phone. Here's what mobile-first design means in practice and how to check your own site in ten minutes.",
    category: "Websites",
    date: "2026-11-23",
    body: [
      {
        p: "You've probably only ever looked at your website properly on a laptop. It looks fine there. But a lot of your customers find you on a phone, often standing in a queue or sitting in a car, with one thumb and a few spare seconds.",
      },
      {
        p: "If your site makes them pinch, zoom and hunt for your phone number, many of them simply go back to the search results and tap the next business. Mobile-first design is about making sure that doesn't happen.",
      },
      { h2: 'What "mobile-first" actually means' },
      {
        p: "Mobile-first is a way of planning a website. Instead of designing the big desktop version and then squeezing it onto a small screen, you start with the phone. You decide what someone on a phone needs most, put that first, and then add extra room and detail for larger screens.",
      },
      {
        p: "It's not the same as having a site that \"works on mobile\". Most modern themes on WordPress, Shopify, Wix and other platforms are responsive, which means the layout rearranges itself to fit the screen. That's a good start, but a layout that technically fits can still be awkward to use. Mobile-first means thinking about how the page **feels** on a phone, not just whether it fits.",
      },
      { h2: "Why it matters for a small business" },
      {
        p: "When I review sites for clients, the phone version is usually where the biggest problems hide. The owner checked the desktop version carefully, and the mobile version was left to the theme. Common things I see:",
      },
      {
        ul: [
          "The phone number is shown as plain text, so it can't be tapped to call.",
          "The menu opens into a long list that pushes everything else off the screen.",
          "A large image or slider fills the first screen, so the visitor has to scroll before learning what the business does.",
          "Buttons are small and placed close together, so people tap the wrong one.",
          "Forms ask for too much, and typing on a phone keyboard makes every extra field feel twice as long.",
          "Pop-ups cover the whole screen with a close button that's hard to find.",
        ],
      },
      {
        p: "None of these break the site. They just add friction, and on a phone, friction is what makes people give up.",
      },
      { h2: "The essentials of a phone-friendly business site" },
      {
        p: "Here's what I aim for on every site I build or improve, whether it's a service business on WordPress or a Shopify store.",
      },
      {
        ul: [
          "**Say what you do in the first screen.** A short headline and one line about who you help should be visible without scrolling.",
          "**Make contact one tap away.** A tap-to-call phone number, a WhatsApp or message link if you use one, and a clear button to book or get a quote.",
          "**Thumb-friendly buttons.** Big enough to tap easily, with space around them, and placed where a thumb naturally reaches.",
          "**Readable text.** Body text large enough to read without zooming, short paragraphs, and strong contrast between text and background.",
          "**A simple menu.** Keep it to the pages people actually need. Put your main call to action outside the menu so it's always visible.",
          "**Light images.** Photos sized for the web so the page loads quickly on mobile data.",
          "**Short forms.** Only ask for what you need to reply. Name, contact details and one message box is often enough to start.",
        ],
      },
      { h2: "Test your own site in ten minutes" },
      {
        p: "You don't need any special tools for a first check. Pick up your own phone, switch off Wi-Fi so you're on mobile data, and go through these steps as if you were a new customer:",
      },
      {
        ol: [
          "Search for your business or open your homepage. Count how long it takes before the page is usable.",
          "Without scrolling, ask yourself: can I tell what this business does and where it works?",
          "Try to call you. Is the number tappable, and is it easy to find?",
          "Open the menu, visit two pages, and try to get back to the homepage.",
          "Fill in your own contact form and submit it. Check the message actually arrives.",
          "Read a full page of text. Did you need to zoom at any point?",
          "Repeat the test on a different phone if you can, ideally an older or smaller one.",
        ],
      },
      {
        p: "Write down anything that annoyed you, even slightly. If it annoyed you on your own site, it's annoying your customers too.",
      },
      { h2: "Fixing it without starting again" },
      {
        p: "The good news is that most mobile problems can be fixed without a full redesign. Making the phone number tappable, adding a sticky call or booking button, shrinking oversized images, trimming the menu and shortening forms are usually small jobs. Page builders like Elementor let you adjust spacing, font sizes and visibility for mobile separately, so you can tidy the phone layout without touching the desktop one.",
      },
      {
        p: "If the site was built years ago on an older theme that was never designed for phones, it may be time for a bigger refresh. But start with the checklist above. It will tell you quickly whether you're looking at a few tweaks or a deeper job.",
      },
      { h2: "Start with the phone, then go bigger" },
      {
        p: "Mobile-first isn't a trend or a technical term to worry about. It's simply respecting how your customers already find you. If your site is clear, fast and easy to act on with one thumb, it will usually work well on a big screen too.",
      },
      {
        p: "If you'd like a second pair of eyes on how your website or Shopify store works on a phone, or help connecting your enquiry forms to a CRM and simple automations, get in touch. I'm happy to take a look and tell you what I'd fix first.",
      },
    ],
  },
  {
    slug: "use-ai-to-write-website-content-without-sounding-like-a-robot",
    title: "How to use AI to write website content without sounding like a robot",
    excerpt:
      "AI can speed up your website copy, but only if you feed it real facts and your own voice, then edit hard. Here's the process I use.",
    category: "AI Tools",
    date: "2026-11-22",
    body: [
      {
        p: 'You know you need better words on your website, so you ask an AI tool to write your About page. It comes back in seconds, and it sounds like every other business on the internet: "passionate", "dedicated", "tailored solutions". You could swap your name for a competitor\'s and nobody would notice.',
      },
      {
        p: "The problem isn't the tool. It's what we give it. AI writes generic copy when it gets generic input. Give it your real facts, your real customers and your real way of speaking, and it becomes a genuinely useful writing partner.",
      },
      { h2: "Why AI copy sounds the same" },
      {
        p: "AI writing tools are trained on huge amounts of text, so when you ask a vague question they give you the most average answer. \"Write a homepage for a cleaning company\" produces the average cleaning company homepage. That's exactly what you don't want, because your website's job is to show why you are not average.",
      },
      {
        p: "The fix is simple to describe and takes a little effort to do: put more of your business into the prompt than you expect the AI to put into the answer.",
      },
      { h2: "Step 1: Give it facts it can't guess" },
      {
        p: "Before I ask an AI tool to draft anything for a client, I collect the raw material first. This is the part that makes the difference, and it's the part only you can provide:",
      },
      {
        ul: [
          "What you actually do, in plain words, and what you don't do.",
          "Who your customers are, where they are, and what problem they had when they found you.",
          "The questions people ask you most often on the phone or by email.",
          "What makes you different: how you work, how quickly you respond, what's included.",
          "Words and phrases your customers use when they describe you.",
        ],
      },
      {
        p: "Paste all of that into the conversation first. Then ask for the page. You'll notice the draft immediately gets more specific, because it finally has something specific to work with.",
      },
      { h2: "Step 2: Show it your voice" },
      {
        p: "If you want copy that sounds like you, give the tool examples of you. A few emails you've sent to customers, a social post you were happy with, or even a voice note you've transcribed. Then tell it plainly: \"Write in this tone. Short sentences. No buzzwords.\"",
      },
      {
        p: 'It also helps to give it a short list of words to avoid. Mine usually includes things like "cutting-edge", "seamless", "elevate" and "one-stop shop". Banning a handful of tired phrases does a surprising amount of work.',
      },
      { h2: "Step 3: Ask for options, not a finished page" },
      {
        p: "Rather than asking for a whole page in one go, I ask for pieces. Five possible headlines. Three ways to open the About section. A short and a long version of a service description. Then I pick the best parts and combine them.",
      },
      {
        p: "This keeps you in charge. You're choosing and shaping, not just accepting whatever comes out first.",
      },
      { h2: "Step 4: Edit for specifics and truth" },
      {
        p: "This is the step people skip, and it's the one that matters most. Read every line and ask two questions: is this true, and could a competitor say exactly the same thing?",
      },
      {
        p: "AI tools can confidently add things that aren't true, like years of experience you don't have, guarantees you don't offer or awards you never won. Anything like that has to go. And any sentence that could belong to anyone should either be made specific or cut.",
      },
      {
        p: 'For example, "We provide excellent customer service" says nothing. "We reply to every enquiry the same working day" says something, but only if it\'s true.',
      },
      { h2: "What I don't hand over to AI" },
      {
        p: "Some parts of a website are too important to outsource completely. I always write or heavily rewrite these by hand with the business owner:",
      },
      {
        ul: [
          "**Prices, policies and guarantees.** These need to be exact and checked.",
          "**Customer stories and reviews.** Only real ones, in the customer's own words.",
          "**Your About story.** AI can tidy it up, but the story itself has to come from you.",
          "**Anything legal or medical.** Get a qualified person to check it.",
        ],
      },
      { h2: "A quick checklist before you publish" },
      {
        ol: [
          "Read it out loud. If you wouldn't say it to a customer, rewrite it.",
          "Check every fact, number and claim against reality.",
          "Cut any sentence a competitor could copy word for word.",
          "Make sure each page has one clear next step, like calling, booking or getting a quote.",
          "Ask someone who knows your business to read it and tell you if it sounds like you.",
        ],
      },
      { h2: "AI is the first draft, not the last word" },
      {
        p: "Used this way, AI saves real time. It gets you past the blank page, gives you options you might not have thought of, and helps tidy up your own rough notes. But the facts, the voice and the final edit still need a human who knows the business.",
      },
      {
        p: "If you'd like help writing or refreshing the content on your website, setting up your Shopify store, or putting practical AI tools and automations to work in your business, get in touch. I'm happy to look at what you have and suggest where to start.",
      },
    ],
  },
  {
    slug: "appointment-reminders-cut-no-shows",
    title: "Appointment reminders: the simple automation that cuts no-shows",
    excerpt:
      "How to set up email and text reminders that people actually act on: when to send them, what to say, and how to make rescheduling easy.",
    category: "CRM & Automation",
    date: "2026-11-21",
    body: [
      {
        p: "You block out an hour for a client, prepare for it, and they simply don't turn up. No call, no message. When it happens once it's annoying. When it happens every week, it's lost income and a calendar slot someone else could have used.",
      },
      {
        p: "Most no-shows aren't rude. People forget, mix up the time, or mean to cancel and never get round to it. A well-timed reminder deals with all three, and it's one of the easiest automations a service business can set up.",
      },
      { h2: "Why a reminder works better than you'd think" },
      {
        p: "When someone books with you, the appointment feels important. A week later it's one item among dozens in their head. A reminder brings it back to the front at the moment they can still do something about it.",
      },
      {
        p: 'Just as useful: a reminder gives people an easy way to say "I can\'t make it". A cancellation two days ahead is far better than an empty chair, because you can offer that slot to someone else.',
      },
      { h2: "When to send reminders" },
      {
        p: "There's no single perfect schedule, but this is the pattern I set up for most clients and then adjust once we see how their customers respond:",
      },
      {
        ul: [
          "**Straight after booking:** a confirmation with the date, time, location or video link, and what to bring or prepare.",
          "**Two or three days before:** a reminder with a clear link to confirm, reschedule or cancel.",
          "**The day before, or a few hours before:** a short text with the time and address. This is the one that catches people who simply forgot.",
        ],
      },
      {
        p: "For appointments booked weeks in advance, add one more reminder about a week out. For same-week bookings, the confirmation and the day-before message are usually enough. More than three or four messages for one appointment starts to feel like nagging.",
      },
      { h2: "Email or text?" },
      {
        p: "Use both, for different jobs. Email is good for the confirmation, because it can hold the details: directions, parking, forms to fill in, your cancellation policy. Text messages are better for the final nudge, because people tend to read them quickly and they don't get lost in a busy inbox.",
      },
      {
        p: "Always ask for permission to send texts when people book, and give them a simple way to opt out. Rules on marketing and messaging differ between the US, UK, Canada and Australia, so keep reminders strictly about the appointment and check what applies where your customers are.",
      },
      { h2: "What a good reminder says" },
      {
        p: "Keep it short and make the next step obvious. A reminder that someone has to read twice gets ignored. Every message should include:",
      },
      {
        ul: [
          "Your business name, so they know who it's from straight away.",
          'The day, date and time, written out plainly ("Tuesday 3 March at 2:30pm"), with the time zone if you work with clients online.',
          "Where it is: the address, or the video link for online meetings.",
          "One link to confirm, reschedule or cancel.",
          "Anything they need to bring or do beforehand, in one line.",
        ],
      },
      {
        p: 'Write it the way you\'d speak to a client. "Hi Sarah, just a reminder that your consultation with us is tomorrow at 10am" works better than a block of formal text.',
      },
      { h2: "Make rescheduling easy, not awkward" },
      {
        p: "This is the part many businesses skip. If changing an appointment means phoning during office hours, a lot of people will put it off and then not show up. If it's one click to pick a new time, they'll do it.",
      },
      {
        p: "Most online booking tools let customers reschedule or cancel themselves, within limits you set, such as no changes less than 24 hours before. Link that page in every reminder. You'll get more cancellations, but they arrive in time to be useful, and that's the point.",
      },
      { h2: "How to set it up" },
      {
        p: "You don't need anything complicated. Here are the steps I follow:",
      },
      {
        ol: [
          "Check what you already have. Many booking tools and CRMs, for example HubSpot or Zoho, include reminder features you may not have switched on.",
          "Make sure bookings land in one place: a booking page on your website connected to your calendar and your CRM.",
          "Collect a mobile number and email address at booking, with consent for appointment texts.",
          "Write your confirmation and two reminder messages, using the checklist above.",
          "Set the timing for each message, and add a link to reschedule or cancel.",
          "Book a test appointment yourself and check every message arrives correctly on your phone and in your inbox.",
          "After a month, look at your no-shows and late cancellations, and adjust the timing or wording if needed.",
        ],
      },
      { h2: "Going a step further" },
      {
        p: 'Once the basics work, a few small additions can help. When someone cancels, your system can alert you, or notify a waiting list, so the slot gets filled. When someone does miss an appointment, an automatic "Sorry we missed you, would you like to rebook?" message often brings them back without you having to chase.',
      },
      {
        p: "And after the appointment, a short thank-you message is a natural moment to ask for a review or suggest the next booking. Keep each step simple; you can always add more later.",
      },
      { h2: "A quick reminder checklist" },
      {
        ul: [
          "Confirmation sent immediately after booking",
          "A reminder two or three days before, with a reschedule link",
          "A short text the day before or a few hours before",
          "Every message includes who, when, where and one clear link",
          "Text consent collected and opt-out working",
          "Tested end to end with a real booking",
        ],
      },
      {
        p: "If you'd like help setting up booking and reminders on your website, or connecting them to your CRM so nothing slips through, get in touch. I'm happy to look at what you have now and suggest the simplest way to cut down on empty slots.",
      },
    ],
  },
  {
    slug: "is-shopify-right-for-your-business",
    title: "Is Shopify right for your business? A plain-English guide",
    excerpt:
      "Who Shopify suits, what running a store on it involves, and when WooCommerce or Wix might be the better fit for what you sell.",
    category: "Shopify",
    date: "2026-11-20",
    body: [
      {
        p: "You want to sell online, and everyone seems to say \"just use Shopify\". But you're not sure whether it fits a business like yours, what it actually takes to run, or whether you'd be better off adding a shop to the website you already have.",
      },
      {
        p: "I build and improve Shopify stores, and I also build shops on WooCommerce and Wix. So here is how I talk clients through the decision, without the jargon.",
      },
      { h2: "What Shopify actually is" },
      {
        p: "Shopify is a hosted platform built for selling. You pay a monthly subscription, and in return Shopify looks after the hosting, security, checkout and the technical plumbing. You choose a theme, add your products, connect payments and shipping, and you have a working store.",
      },
      {
        p: "The key word is **hosted**. You don't install anything, update software or worry about your server going down on a busy day. That is the main reason people choose it, and it's a good reason.",
      },
      { h2: "Who Shopify suits best" },
      { p: "In my experience, Shopify is a strong fit when:" },
      {
        ul: [
          "Selling products is the main thing your business does, not a side feature.",
          "You have more than a handful of products, or plan to grow the range.",
          "You want a reliable checkout without managing technical updates yourself.",
          "You ship physical products and need stock, orders and shipping in one place.",
          "You want to sell in more than one place, such as your website and social media.",
          "You'd rather spend your time on products and marketing than on maintenance.",
        ],
      },
      {
        p: "A clothing brand, a skincare line, a speciality food business or a homeware shop are all classic Shopify businesses. The platform is designed around their day-to-day: adding products, processing orders, running offers and following up with customers.",
      },
      { h2: "When something else might be better" },
      {
        p: "Shopify isn't the right answer for everyone. These are the situations where I often suggest looking elsewhere:",
      },
      {
        ul: [
          "**You mainly sell services.** If you're a cleaner, consultant or coach who sells the odd package or gift voucher, a booking tool or a simple payment option on your existing site is usually enough.",
          "**You already have a WordPress site you love.** WooCommerce adds a shop to WordPress, so your content, blog and store live together. It's flexible, but you take on more of the maintenance.",
          "**You sell a few items and want everything in one simple builder.** Wix has built-in selling that works well for small ranges, and it keeps things in one familiar place.",
          "**Your products need very unusual setups.** Complex custom quotes or highly bespoke ordering can be done on Shopify, but it may need extra apps or development, so it's worth checking first.",
        ],
      },
      { h2: "What running a Shopify store really involves" },
      {
        p: "Shopify removes the technical upkeep, but it doesn't run the shop for you. Before you commit, it helps to know where your time will actually go.",
      },
      {
        ul: [
          "**Product content:** clear photos, honest descriptions, sizes, materials and prices for every item.",
          "**Orders and shipping:** packing, sending, tracking and handling returns.",
          "**Apps:** extra features such as reviews or email marketing usually come from apps, and some have their own monthly costs.",
          "**Marketing:** a store doesn't bring visitors by itself. Email, social media and search all need ongoing effort.",
          "**Customer questions:** delivery times, sizing and refunds will land in your inbox.",
        ],
      },
      {
        p: "On cost, I'd think in terms of three parts: the Shopify subscription, payment processing on each sale, and any paid apps or a premium theme. Check Shopify's own pricing page for current plans, and add up the apps you'll need before you decide. Paid apps are often the cost people forget.",
      },
      { h2: "A quick checklist to help you decide" },
      {
        p: "Answer these honestly. The more you say yes to, the better Shopify is likely to suit you.",
      },
      {
        ol: [
          "Is selling products the main way your business makes money?",
          "Do you expect to sell more than ten or so products within the next year?",
          "Would you rather pay a monthly fee than handle updates and security yourself?",
          "Do you need stock tracking, shipping rates and order management in one place?",
          "Do you want to sell on social media or in person as well as on your website?",
          "Are you happy for your store to be separate from any existing website, or to move your whole site to Shopify?",
        ],
      },
      {
        p: "If you said yes to most of these, Shopify is probably a good home. If you said no to the first two, start by looking at a simpler option on the platform you already use.",
      },
      { h2: "Mistakes I see when people start on Shopify" },
      {
        ul: [
          "Installing lots of apps in the first week, then forgetting what each one does. Every app can slow the store down and add a bill.",
          "Picking a theme because the demo looks beautiful, then filling it with photos that don't match the style.",
          "Leaving shipping costs, delivery times and returns vague. Unclear policies are one of the most common reasons people leave at checkout.",
          "Launching without placing a few test orders on a phone to check the whole journey.",
          "Treating the store as finished on launch day instead of improving it month by month.",
        ],
      },
      { h2: "My honest take" },
      {
        p: "For a business whose main job is selling physical products, Shopify is usually the most practical choice. It lets you focus on what you sell rather than on keeping a website running. For service businesses, or for people who only sell a few things, it can be more platform than you need.",
      },
      {
        p: "The right choice depends on what you sell, how you want to grow and how much you want to manage yourself. A short conversation before you start can save you from moving platforms a year later.",
      },
      {
        p: "If you're weighing up Shopify, or you already have a store that isn't selling the way you hoped, feel free to get in touch. I'm happy to look at your situation and help you work out the right setup, whether that's a new Shopify store, improvements to your current one, or a CRM and automations to follow up with customers.",
      },
    ],
  },
  {
    slug: "why-your-website-is-slow-and-what-to-do-about-it",
    title: "Why your website is slow and what to do about it",
    excerpt:
      "Slow pages lose visitors before they read a word. Here are the usual causes, how to check your own site and the fixes worth doing first.",
    category: "Websites",
    date: "2026-11-19",
    body: [
      {
        p: "You open your own website on your phone and wait. The logo appears, then a blank space, then the page jumps around as images load. If it feels slow to you, it feels slower to a stranger who has never heard of your business and has three other options in the next tab.",
      },
      {
        p: "The good news is that most slow business websites are slow for the same handful of reasons. You don't need to understand code to find out which ones apply to you, and many of the fixes are simple.",
      },
      { h2: "How to check your speed in ten minutes" },
      {
        p: "Before changing anything, get a rough picture of where you stand. Free testing tools, for example Google's PageSpeed Insights, will load your page and give you a score plus a list of issues. Run it on your homepage and on one or two of your most important pages, such as a service page or contact page.",
      },
      {
        p: "Don't obsess over the score itself; it varies between tests. What matters is the list of problems underneath it, and how the site feels on a real phone using mobile data rather than your office Wi-Fi.",
      },
      {
        ol: [
          "Test your homepage and two key pages, on mobile settings.",
          "Write down the top three issues each test flags.",
          "Open the site on your own phone away from Wi-Fi and note anything that feels sluggish.",
        ],
      },
      { h2: "Cause 1: images that are far too big" },
      {
        p: "This is the most common problem I see, by a long way. A photo straight from a phone or camera can be several megabytes and thousands of pixels wide. Your website might only display it at the size of a postcard, but visitors still download the whole thing.",
      },
      {
        p: "The fix is to resize images to roughly the size they're shown on the page, compress them, and use a modern format such as WebP where your platform supports it. On WordPress, an image optimisation plugin can handle much of this automatically for new and existing images. On Wix and Shopify, the platform does some of the work, but uploading sensibly sized images in the first place still helps.",
      },
      { h2: "Cause 2: too many plugins, apps and add-ons" },
      {
        p: "Every plugin on a WordPress site, and every app on a Shopify store, can add its own code to your pages. One or two are fine. Twenty, several of which you installed once to try something and forgot about, can add up quickly.",
      },
      {
        p: "Go through your list and ask of each one: do I still use this, and does it need to run on every page? Remove the ones you don't need. Be aware that some leave code behind after you uninstall them, which is worth having someone check if your site still feels heavy afterwards.",
      },
      { h2: "Cause 3: hosting that can't keep up" },
      {
        p: 'If your site is on WordPress, your hosting matters a lot. The cheapest shared plans put your website on a server with many others, and when those sites get busy, yours slows down. A slow first response from the server, which testing tools often call "server response time", is a common sign.',
      },
      {
        p: "Better hosting doesn't have to mean expensive hosting. A reputable host, for example Hostinger, with caching switched on and a server located reasonably close to your customers usually makes a noticeable difference. Hosted platforms like Shopify and Wix manage this side for you, so if your store or Wix site is slow, the cause is more likely to be in the list above or below.",
      },
      { h2: "Cause 4: page builders and heavy themes" },
      {
        p: "Page builders such as Elementor are a great way to build and edit a site without code, and I use them often. But they can produce bloated pages if every section is stacked with animations, sliders, background videos and widgets that each load their own files.",
      },
      {
        ul: [
          "Replace homepage sliders with one strong image and a clear headline.",
          "Remove background videos unless they really earn their place.",
          "Cut entrance animations on text and buttons.",
          "Turn off theme features and builder widgets you don't use, where the settings allow it.",
        ],
      },
      { h2: "Cause 5: third-party scripts" },
      {
        p: "Chat widgets, booking tools, social feeds, review badges, tracking pixels and embedded maps all load code from other companies' servers. Each one is a small delay, and you have no control over how fast those servers respond.",
      },
      {
        p: 'Keep the ones that bring you enquiries or that you genuinely rely on for information. For the rest, ask whether a simple link would do the same job. An Instagram feed on the homepage, for example, can often be replaced by a button that says "Follow us on Instagram".',
      },
      { h2: "A quick speed checklist" },
      {
        ul: [
          "Resize and compress every large image, and use WebP where you can.",
          "Delete plugins or apps you no longer use.",
          "Switch on caching if you're on WordPress.",
          "Review your hosting if the server response is slow.",
          "Simplify sliders, videos and animations.",
          "Remove third-party widgets that don't pay their way.",
          "Re-test after each change so you know what helped.",
        ],
      },
      {
        p: "Make one change at a time and test again. That way, if something breaks or a change makes no difference, you know exactly which step to look at. And always take a backup before removing plugins or changing themes.",
      },
      { h2: "When to get help" },
      {
        p: "If you've worked through the obvious fixes and your site is still slow, the problem is usually deeper: a theme that needs replacing, leftover code from old apps, or a builder layout that needs rebuilding more efficiently. That's the point where an hour of expert time saves you a week of guessing.",
      },
      {
        p: "If you'd like me to look at why your website or Shopify store is slow, or you're thinking about a rebuild anyway, get in touch. I'm happy to take a look and tell you plainly what's worth fixing first.",
      },
    ],
  },
  {
    slug: "how-to-plan-your-website-pages-before-you-hire-a-designer",
    title: "How to plan your website pages before you hire a designer",
    excerpt:
      "A simple page plan saves time, money and revisions. Here's how to map your site, give each page one job and know what to include.",
    category: "Planning",
    date: "2026-11-18",
    body: [
      {
        p: "Most website projects that drag on do so for one reason: nobody decided what pages the site needed before the design started. Pages get added halfway through, content gets moved around, and the designer redoes work that was already finished.",
      },
      {
        p: "You don't need to be technical to fix this. A one-page plan of your site, written before you speak to a designer, makes the whole project faster and the quotes you receive far more accurate.",
      },
      {
        h2: "Start with what the website is for",
      },
      {
        p: "Before you list a single page, write down the main thing you want visitors to do. For most service businesses it's one of these: call, book, request a quote or fill in an enquiry form. For a shop, it's buy.",
      },
      {
        p: "Everything else in your plan should support that one action. If a page doesn't help someone understand you, trust you or contact you, ask whether it needs to exist at all.",
      },
      {
        h2: "Give every page one job",
      },
      {
        p: "A common mistake is trying to make every page do everything. Instead, decide the single job of each page. The homepage introduces you and points people to the right place. A service page explains one service and asks for an enquiry. The contact page makes getting in touch effortless.",
      },
      {
        p: "When I plan a site with a client, I write the page name and its job side by side. It sounds simple, but it settles a lot of debates later about what belongs where.",
      },
      {
        h2: "Common page lists by business type",
      },
      {
        p: "These are starting points, not rules. Use them to check you haven't missed anything obvious.",
      },
      {
        ul: [
          "**Local service business** (cleaning, trades, clinics): Home, one page per main service, About, Reviews or Results, Service areas, FAQ, Contact or Book.",
          "**Consultant or coach**: Home, Services or Packages, About, Case studies, Blog or Resources, Book a call.",
          "**Online shop**: Home, Shop and category pages, product pages, About, Shipping and returns, FAQ, Contact.",
          "**Professional practice** (accountants, therapists, law): Home, Services, Team, Who we help, Fees or How it works, Contact.",
        ],
      },
      {
        p: 'Notice that each main service usually gets its own page. One long "Services" page is harder to read, and separate pages give you a better chance of appearing in search for each thing you do.',
      },
      {
        h2: "Sketch the structure in plain text",
      },
      {
        p: "A sitemap is just a list of your pages showing which sit under which. You can write it in a notes app. For example:",
      },
      {
        ul: [
          "Home",
          "Services → Deep cleaning, End of tenancy, Office cleaning",
          "About",
          "Reviews",
          "FAQ",
          "Contact",
        ],
      },
      {
        p: "Try to keep your main menu to around five to seven items. If it's longer, group related pages under one heading. Visitors scan menus quickly, and too many choices make them hesitate.",
      },
      {
        h2: "Note what goes on each page",
      },
      {
        p: "Under each page name, add a few bullet points about what it needs to say. You don't have to write the final copy yet. Just capture the essentials, such as who the service is for, what's included, how it works and what to do next.",
      },
      {
        p: "This is also the moment to note what you already have and what you still need. Photos, reviews, team bios, prices and certificates all take longer to gather than people expect.",
      },
      {
        h2: "Your page planning checklist",
      },
      {
        ol: [
          "Write down the one action you want visitors to take.",
          "List every page and give each one a single job.",
          "Give each main service its own page.",
          "Arrange pages into a simple sitemap with a short main menu.",
          "Add a few bullet points of content for each page.",
          "Mark which content and photos you have and which you still need.",
          "Note any features you need, such as online booking, payments or a client login.",
        ],
      },
      {
        h2: "What to do with your plan",
      },
      {
        p: "Send the plan to any designer you're speaking to. It gives them a clear picture of the size of the project, so their quote reflects what you actually need. It also shows them how you think about your business, which leads to better conversations from the start.",
      },
      {
        p: "Don't worry if the plan isn't perfect. A good designer will suggest changes, and that's a normal part of the process. The point is to start from something concrete instead of a blank page.",
      },
      {
        p: "If you'd like a second pair of eyes on your page plan, or help turning it into a website, feel free to get in touch. I'm happy to talk it through.",
      },
    ],
  },
  {
    slug: "should-you-add-an-ai-chat-assistant-to-your-website",
    title: "Should you add an AI chat assistant to your website?",
    excerpt:
      "An AI chat assistant can answer questions at any hour, or frustrate visitors who just want a person. Here's how to tell which it will be for you.",
    category: "AI Tools",
    date: "2026-11-17",
    body: [
      {
        p: "AI chat assistants are everywhere now, and many business owners ask me whether they should add one to their website. The worry is understandable: if competitors have one, are you missing out?",
      },
      {
        p: "The honest answer is that a chat assistant can be genuinely useful or genuinely annoying. Which one it becomes depends on what you ask it to do and how you set it up.",
      },
      {
        h2: "When a chat assistant helps",
      },
      {
        p: "A chat assistant earns its place when visitors ask the same questions again and again, and those questions have clear answers. It's especially helpful when people visit outside your working hours and would otherwise leave without an answer.",
      },
      {
        ul: [
          "Questions about opening hours, locations and service areas.",
          "What a service includes and how the process works.",
          "Booking, rescheduling and what to bring to an appointment.",
          "Shipping, returns and order questions for online shops.",
          "Pointing people to the right page or form.",
        ],
      },
      {
        p: "In these cases the assistant saves your team from repeating themselves and gives visitors an answer straight away, instead of making them wait for a reply to an email.",
      },
      {
        h2: "When it gets in the way",
      },
      {
        p: "A chat assistant becomes a problem when it pops up too eagerly, hides your contact details or tries to handle conversations it shouldn't. Visitors with a complicated or sensitive question usually want a person, and being stuck in a loop with a bot is a fast way to lose them.",
      },
      {
        p: 'It also works poorly on a small site with very little information. If the assistant has nothing reliable to draw on, it will either say "I don\'t know" constantly or, worse, guess.',
      },
      {
        h2: "What it should and shouldn't answer",
      },
      {
        p: "Before setting one up, I write a short list with the client of what the assistant is allowed to talk about. This keeps it accurate and stops it drifting into areas where a wrong answer could cause harm.",
      },
      {
        ul: [
          "**Should answer:** facts already on your website, your process, general availability, how to book or contact you.",
          "**Should not answer:** exact quotes for custom work, medical, legal or financial advice, complaints, anything involving personal or payment details.",
          "**Should always offer:** a clear way to reach a real person.",
        ],
      },
      {
        p: "Most good chat tools let you give the assistant your own content to work from and set instructions about tone and limits. Use that. An assistant trained on your actual FAQs and service pages is far more useful than a general one.",
      },
      {
        h2: "Handing off to a human",
      },
      {
        p: "The handoff is the most important part of the setup, and the part most often skipped. When a visitor asks something the assistant can't handle, or simply asks for a person, it should collect their name, contact details and question, then pass them on.",
      },
      {
        p: "Ideally that information goes straight into your inbox or CRM, so nobody has to copy it across. Then someone on your team follows up, just like any other enquiry. Done well, the visitor never feels abandoned.",
      },
      {
        h2: "A quick checklist before you add one",
      },
      {
        ol: [
          "List the ten questions you're asked most often. If you can't, you may not need a chat assistant yet.",
          "Make sure those answers are already written clearly on your website.",
          "Decide what the assistant must never answer, and write that into its instructions.",
          "Set up a handoff that captures contact details and sends them to you or your CRM.",
          "Keep your phone number and contact form visible. The chat should be an extra option, not the only one.",
          "Test it yourself with awkward questions before it goes live.",
          "Read the conversations every week for the first month and fix the gaps.",
        ],
      },
      {
        h2: "An alternative worth considering",
      },
      {
        p: "Sometimes the better fix is a well-written FAQ page and a simple contact form that gets a quick, automated acknowledgement. That covers many of the same needs with less to maintain. A chat assistant then becomes a next step once you know what people actually ask.",
      },
      {
        p: "Whichever route you choose, keep the visitor's experience at the centre. The aim is to help people get answers and reach you more easily, not to keep them away from your team. If a chat assistant makes contacting you harder, it isn't doing its job, however clever it looks.",
      },
      {
        p: "If you're weighing up a chat assistant, or want help setting one up so it hands enquiries to your team properly, get in touch and we can work out what makes sense for your site.",
      },
    ],
  },
  {
    slug: "what-is-a-crm-and-does-a-small-business-need-one",
    title: "What is a CRM, and does a small business really need one?",
    excerpt:
      "A plain-English guide to what a CRM does, the signs you've outgrown spreadsheets and inboxes, and what to track first.",
    category: "CRM & Automation",
    date: "2026-11-16",
    body: [
      {
        p: "If your enquiries live in your email, your customer notes live in a spreadsheet and your follow-ups live in your head, you're not alone. That's how most small businesses start.",
      },
      {
        p: "It works until it doesn't. A lead gets forgotten, two people reply to the same customer, or you can't remember what you quoted someone last month. That's usually when the word CRM comes up.",
      },
      {
        h2: "What a CRM actually is",
      },
      {
        p: "CRM stands for customer relationship management. In practice, it's a single place where you keep everything about the people you deal with: their contact details, every conversation, what they've asked for, what you've sent them and what should happen next.",
      },
      {
        p: "Well-known examples include HubSpot and Zoho, but there are many options, from simple tools built for sole traders to large systems for sales teams. The idea behind all of them is the same: one shared record per customer instead of information scattered across inboxes, notebooks and phones.",
      },
      {
        h2: "What a CRM does day to day",
      },
      {
        ul: [
          "Stores contacts and companies with their full history in one place.",
          "Captures enquiries from your website forms automatically.",
          "Shows where each lead is, from new enquiry to won or lost.",
          "Reminds you when to follow up, so nothing slips.",
          "Sends automated emails, such as an instant reply to a new enquiry.",
          "Gives you simple reports, such as where leads come from.",
        ],
      },
      {
        h2: "Signs you need one",
      },
      {
        p: "You don't need a CRM because a business blog told you to. You need one when the way you're working now is costing you time or customers. Watch for these signs:",
      },
      {
        ul: [
          "You've realised days later that an enquiry was never answered.",
          "You search through old emails to remember what a customer asked for.",
          "More than one person deals with customers and you're not sure who's handling what.",
          "You don't know which marketing brings in your best customers.",
          "Following up depends on you remembering, and you're busy.",
          "Your spreadsheet has become so large or messy that nobody trusts it.",
        ],
      },
      {
        p: "If two or three of these sound familiar, a simple CRM will probably pay for the time it takes to set up.",
      },
      {
        h2: "When you might not need one yet",
      },
      {
        p: "If you handle a handful of enquiries a month, work alone and have no trouble keeping track, a tidy spreadsheet and a good email routine can be enough for now. There's no prize for adopting software early. The important thing is to notice when that system starts to strain.",
      },
      {
        h2: "What to track first",
      },
      {
        p: "The biggest mistake I see is trying to set up everything at once. Custom fields for every detail, complex pipelines and dozens of automations. Then nobody uses it. Start small and add only what you'll actually look at.",
      },
      {
        ol: [
          "**Contact details:** name, email, phone and company if relevant.",
          "**Lead source:** how they found you, such as website, referral or social media.",
          "**What they need:** the service or product they asked about.",
          "**Stage:** a few simple steps, like New, Contacted, Quote sent, Won, Lost.",
          "**Next action and date:** what happens next and when.",
        ],
      },
      {
        p: "That's enough to stop leads falling through the cracks and to start seeing patterns. Once the habit is in place, you can add more.",
      },
      {
        h2: "Connecting it to your website",
      },
      {
        p: "A CRM becomes far more useful when your website feeds it directly. When someone fills in your enquiry form, their details should land in the CRM automatically, tagged with the page they came from, and trigger a quick acknowledgement email. No copying and pasting, no missed messages.",
      },
      {
        p: "This is the part of the setup that most small businesses find fiddly, and it's where a lot of the value is.",
      },
      {
        h2: "Choosing one without overthinking it",
      },
      {
        p: "Pick a CRM that your team will actually open. Simple and used beats powerful and ignored. Look for one that connects easily to your website and email, has a mobile app if you're often out of the office, and lets you start on a small plan.",
      },
      {
        p: "Most CRMs offer a free trial or a free starter plan. Use that time to enter a few real leads and run them through your process. You'll learn more in a week of real use than from any feature comparison.",
      },
      {
        p: "If you'd like help choosing a CRM, connecting it to your website or setting up your first follow-up automations, get in touch. I'm happy to help you find a setup that fits how you work.",
      },
    ],
  },
  {
    slug: "how-to-write-a-homepage-headline",
    title: "How to write a homepage headline that tells visitors what you do",
    excerpt:
      "Your headline has seconds to explain who you help and what you do. Here's a simple formula, with before-and-after examples.",
    category: "Websites",
    date: "2026-11-15",
    body: [
      {
        p: "Visitors decide very quickly whether to stay on your website. The first thing most of them read is the big headline at the top of your homepage, and on many small business sites that headline doesn't say what the business does.",
      },
      {
        p: '"Welcome to our website." "Excellence in everything we do." "Your journey starts here." They sound pleasant, but a visitor still has no idea whether they\'re in the right place.',
      },
      {
        h2: "Why clever headlines often fail",
      },
      {
        p: "It's tempting to write something catchy or inspiring. The trouble is that a new visitor doesn't know you yet. They arrived with a question: can this business help me? A vague headline makes them work to find the answer, and many won't bother.",
      },
      {
        p: "A clear headline does the opposite. It confirms they're in the right place, so they keep reading. You can still have personality. Clarity just has to come first.",
      },
      {
        h2: "A simple formula",
      },
      {
        p: "Most good homepage headlines answer three questions:",
      },
      {
        ol: [
          "**Who do you help?** A type of customer or a location.",
          "**What do you do?** The service or product, in everyday words.",
          "**What do they get?** The result or benefit they care about.",
        ],
      },
      {
        p: "You won't always fit all three into the headline itself. That's fine. Put the most important two in the headline and the third in the short line underneath, often called the subheading.",
      },
      {
        h2: "Before and after examples",
      },
      {
        p: "These businesses are made up, but the patterns are ones I see all the time.",
      },
      {
        ul: [
          '**Before:** "Quality you can trust." **After:** "Reliable home cleaning in Leeds, booked online in two minutes."',
          '**Before:** "Empowering your financial future." **After:** "Bookkeeping and tax returns for freelancers and small businesses."',
          '**Before:** "Welcome to Bright Smiles." **After:** "Family dental care in Toronto, with evening and Saturday appointments."',
          '**Before:** "Innovative solutions for modern teams." **After:** "IT support for small offices, so your tech just works."',
        ],
      },
      {
        p: 'Each "after" version tells a visitor within a few words whether this business is for them. That\'s the job.',
      },
      {
        h2: "Use your customers' words, not your industry's",
      },
      {
        p: 'Business owners often describe their work in the language of their industry. Customers rarely search that way. A landscaper might say "hardscaping" while customers search for "patios and paving". A clinic might say "musculoskeletal therapy" while patients look for "back pain treatment".',
      },
      {
        p: "Listen to how customers describe their problem on the phone or in emails, and borrow those words. It makes your headline clearer and can help your search visibility too.",
      },
      {
        p: "A quick way to gather these words is to look back through your last ten enquiries. Note the exact phrases people used to describe what they needed. You'll often find the same few words repeated, and those are strong candidates for your headline and subheading. Reviews are another good source, because they show what customers valued in their own language.",
      },
      {
        h2: "Support the headline underneath",
      },
      {
        p: "The headline doesn't work alone. Right below it, visitors should see:",
      },
      {
        ul: [
          "A one or two sentence subheading that adds detail or the main benefit.",
          'One clear button, such as "Book a cleaning" or "Get a quote".',
          "A quick sign of trust, such as a review rating, years in business or the area you serve.",
        ],
      },
      {
        p: "Together these form the part of the page people see before scrolling. Get this right and the rest of the page has a much easier job.",
      },
      {
        h2: "Test it with a five-second check",
      },
      {
        p: "Here's a simple way to check your headline. Show your homepage to someone who doesn't know your business for five seconds, then hide it. Ask them what you do and who it's for.",
      },
      {
        ol: [
          "If they can answer both, your headline is working.",
          'If they describe something vague, like "some kind of consultancy", make it more specific.',
          "If they guess the wrong service entirely, rewrite it in plainer words.",
          "Try two or three versions and keep the one people understand fastest.",
        ],
      },
      {
        h2: "Small change, big difference",
      },
      {
        p: "Rewriting a headline is one of the quickest improvements you can make to a website. It doesn't need a redesign, and it changes how every new visitor experiences your homepage.",
      },
      {
        p: "Once you're happy with it, check that the same message carries through the rest of the page and into your search result title, so visitors see a consistent promise from the first click.",
      },
      {
        p: "If you'd like a fresh perspective on your homepage, or help rewriting it so it speaks clearly to your customers, feel free to get in touch.",
      },
    ],
  },
  {
    slug: "practical-ways-small-businesses-can-use-ai-tools",
    title: "5 practical ways small businesses can use AI tools this week",
    excerpt:
      "No big projects or new software. Five everyday tasks where AI tools can save you time right now, with a person still checking the result.",
    category: "AI Tools",
    date: "2026-11-14",
    body: [
      {
        p: "Most conversations about AI feel either overhyped or overwhelming. Business owners hear that it will change everything, but nobody explains what to actually do on a Tuesday afternoon.",
      },
      {
        p: "This post is the practical version. Five everyday tasks where a general AI assistant, the chat-style tools many people already have access to, can save you time this week. No integrations, no big setup.",
      },
      {
        h2: "A ground rule first: you stay in charge",
      },
      {
        p: "AI tools are good at producing a first draft quickly. They're not reliable enough to send things out unchecked. They can get facts wrong, misunderstand context or sound slightly off. Treat everything they produce as a draft that you review, correct and approve.",
      },
      {
        p: "Also, be careful what you paste in. Avoid sharing customers' personal details, passwords, payment information or anything confidential unless you've checked the tool's privacy settings and your own obligations.",
      },
      {
        h2: "1. Drafting emails you've been putting off",
      },
      {
        p: "Every business has emails that sit in drafts because they're awkward: chasing a late payment, declining a project, explaining a price increase. Describe the situation to an AI tool, say what tone you want, and ask for a short draft.",
      },
      {
        p: "You'll still edit it, but starting from something is much faster than starting from nothing. Ask for two or three versions if the first one doesn't sound like you.",
      },
      {
        h2: "2. Summarising calls and long documents",
      },
      {
        p: "If you have notes from a client call, a long proposal from a supplier or a dense contract update, an AI tool can turn it into a short summary with the key points and actions. Ask it to list decisions, open questions and next steps separately.",
      },
      {
        p: "Always check the summary against the original for anything important. Summaries can miss nuance, and it matters most in the details.",
      },
      {
        p: "This works well for internal use, like catching up on a long email thread before a call. For anything you'll act on financially or legally, read the original properly.",
      },
      {
        h2: "3. Building out your FAQs",
      },
      {
        p: "Write down the questions customers ask you most often, along with your rough answers. Then ask an AI tool to turn them into clear, friendly FAQ entries. It's good at tidying up wording and spotting questions you haven't covered.",
      },
      {
        p: "A strong FAQ page helps visitors decide faster and reduces the number of repetitive emails you get. It's also a useful foundation if you ever add a chat assistant to your website.",
      },
      {
        h2: "4. Social media captions and post ideas",
      },
      {
        p: "Give the tool a few facts about a recent job, a new service or a seasonal tip, and ask for several short caption options. You can also ask for a month of post ideas based on the questions your customers ask.",
      },
      {
        p: "Add your own details before posting. Generic captions are easy to spot. A specific detail from the actual job is what makes a post feel real.",
      },
      {
        h2: "5. Turning meeting notes into action lists",
      },
      {
        p: "After a team meeting, paste in your rough notes and ask for a tidy list of who is doing what by when. It takes seconds and means everyone leaves with the same understanding.",
      },
      {
        h2: "How to get better results",
      },
      {
        p: "The quality of what you get back depends heavily on what you put in. A few habits make a big difference:",
      },
      {
        ol: [
          "Say who the content is for, such as a new customer or a long-standing client.",
          "Give the facts. The tool can't know your prices, policies or process unless you tell it.",
          "Describe the tone: friendly, formal, short, reassuring.",
          "Paste in an example of your own writing and ask it to match the style.",
          "Ask for a specific format, like three bullet points or under 100 words.",
          "Read the result critically and edit anything that isn't true or doesn't sound like you.",
        ],
      },
      {
        h2: "Where to go from here",
      },
      {
        p: "Once you've used AI tools for a few weeks, you'll notice which tasks you repeat most. Those are the candidates for proper automation later, such as AI-assisted replies inside your CRM or a chat assistant trained on your own content.",
      },
      {
        p: "Start small, keep a person in the loop, and build from what actually saves you time.",
      },
      {
        p: "If you'd like help working out where AI tools could fit into your business, or connecting them to your website and CRM, get in touch. I'm always happy to talk through practical options.",
      },
    ],
  },
  {
    slug: "what-every-service-business-homepage-needs-above-the-fold",
    title: "The 5 things every service business homepage needs above the fold",
    excerpt:
      "The top of your homepage does most of the work. Here are the five things it needs so visitors understand you, trust you and get in touch.",
    category: "Websites",
    date: "2026-11-13",
    body: [
      {
        p: "Many visitors never scroll past the top of your homepage. If that first screen doesn't tell them what you do and how to reach you, they leave, often without you ever knowing they were there.",
      },
      {
        p: '"Above the fold" is an old newspaper term for the top half of the front page. On a website it means what people see before they scroll. For a service business, that space has a very specific job.',
      },
      {
        h2: "1. A clear headline",
      },
      {
        p: "The headline should say what you do in plain words. Not a slogan, not a welcome message. A visitor should be able to read it and know immediately whether they're in the right place.",
      },
      {
        p: 'For example, "Emergency plumbing across Manchester, 7 days a week" does far more than "Your trusted partner". If you want to add personality, do it in the line underneath.',
      },
      {
        h2: "2. Who you help",
      },
      {
        p: 'Make it obvious who your service is for. That might be a location, a type of customer or a specific problem. "For homeowners in Brisbane", "for small accounting firms" or "for families with young children" all help the right visitors feel at home and the wrong ones move on quickly, which saves everyone time.',
      },
      {
        p: "Often this fits naturally into the headline or a short subheading below it.",
      },
      {
        h2: "3. A sign of proof",
      },
      {
        p: "People are cautious about businesses they don't know. A small piece of proof near the top reassures them before they've read anything else. It doesn't need to be large. Options include:",
      },
      {
        ul: [
          "A short line from a real customer review.",
          "Your rating from a review platform, if you have a good number of reviews.",
          "Years in business or number of jobs completed, if accurate.",
          "Recognisable memberships, accreditations or client logos, used with permission.",
          "A real photo of you, your team or your work.",
        ],
      },
      {
        p: "Only use proof that's true and current. Visitors notice when a claim feels inflated, and it undoes the trust you're trying to build.",
      },
      {
        h2: "4. One main call to action",
      },
      {
        p: 'Decide the single most important thing you want a visitor to do and give it a prominent button. "Book a free consultation", "Get a quote" or "Check availability" are all clearer than "Learn more" or "Submit".',
      },
      {
        p: "It's fine to have a second, quieter option for people who aren't ready, such as \"See our services\". But if the top of your page has four buttons of equal weight, visitors don't know where to start.",
      },
      {
        h2: "5. An easy way to make contact",
      },
      {
        p: "Some people want to call, not fill in a form. For many service businesses, a visible phone number in the header is one of the most useful things on the page, especially on mobile, where it should be tap-to-call.",
      },
      {
        p: "If you don't take calls, make sure your contact or booking option is easy to find without scrolling. Hiding contact details at the bottom of the page is a common reason enquiries are lower than they should be.",
      },
      {
        p: 'It also helps to show when you\'re available or how quickly you reply, for example "We reply to every enquiry within one working day". Only promise what you can keep, but a clear expectation makes people more comfortable getting in touch.',
      },
      {
        h2: "What to leave out",
      },
      {
        p: "Just as important is what doesn't belong at the top of the page:",
      },
      {
        ul: [
          "Auto-playing sliders that rotate through several messages.",
          "Large decorative images that push everything else down.",
          "Pop-ups that appear before the visitor has read anything.",
          "Long paragraphs about your history. Save those for the About page.",
        ],
      },
      {
        h2: "A quick checklist for your homepage",
      },
      {
        p: "Open your homepage on your phone and on a laptop, and without scrolling, check each of these:",
      },
      {
        ol: [
          "Can you tell what the business does within a few seconds?",
          "Is it clear who the service is for?",
          "Is there at least one genuine sign of trust?",
          "Is there one obvious button to take the next step?",
          "Can you see a phone number or contact option?",
          "Does it all load quickly and read easily on a small screen?",
        ],
      },
      {
        p: "If any answer is no, that's your first fix. These changes are often small, but they shape every visitor's first impression.",
      },
      {
        p: "If you'd like me to take a look at your homepage, or help you rebuild the top of it so it brings in more enquiries, feel free to get in touch.",
      },
    ],
  },
  {
    slug: "why-leads-go-cold-and-how-automated-follow-up-fixes-it",
    title: "Why leads go cold, and how automated follow-up fixes it",
    excerpt:
      "An enquiry that waits in your inbox is an enquiry you may lose. Here's how a simple instant reply and follow-up sequence keeps leads warm.",
    category: "CRM & Automation",
    date: "2026-11-12",
    body: [
      {
        p: "Someone fills in your website form, asking about your services. You're on a job, in a meeting or simply busy, and you plan to reply later. By the time you do, they've already booked with someone else, or they've stopped answering.",
      },
      {
        p: "It's one of the most common ways small businesses lose work, and it has nothing to do with the quality of the service. It's about timing. The good news is that it's also one of the easiest problems to fix with automation.",
      },
      {
        h2: "What happens while an enquiry waits",
      },
      {
        p: "When someone sends an enquiry, they're interested right now. They've usually contacted more than one business. If one replies quickly and the others don't, the quick one has a natural head start.",
      },
      {
        p: "As hours pass, their attention moves elsewhere. They forget which websites they visited. Your reply, when it arrives, competes with everything else in their inbox. The lead hasn't been rejected. It has simply gone cold.",
      },
      {
        h2: "Why it keeps happening",
      },
      {
        ul: [
          "Form submissions land in a general inbox that nobody checks often.",
          "The owner is the only one who replies, and they're busy doing the work.",
          "There's no reminder to follow up when someone doesn't respond.",
          "Following up feels pushy, so it doesn't happen at all.",
        ],
      },
      {
        p: "None of these are failures of effort. They're gaps in the system. And gaps in the system are what automation is good at filling.",
      },
      {
        h2: "Step one: an instant reply",
      },
      {
        p: "The simplest improvement is an automatic email sent the moment someone submits your form. It isn't meant to replace your personal reply. It's there to reassure them that their message arrived and tell them what happens next.",
      },
      {
        p: "A good instant reply is short and human. It thanks them, confirms what they asked about, says when they'll hear from you and gives them something useful while they wait, such as a link to your booking calendar or an answer to a common question. If you can, send it from a real person's name rather than \"no-reply\".",
      },
      {
        h2: "Step two: a three-touch follow-up",
      },
      {
        p: "Many leads don't reply to your first message. Not because they aren't interested, but because life gets in the way. A short, polite follow-up sequence catches those people without you having to remember.",
      },
      {
        ol: [
          "**Your personal reply**, as soon as you can, ideally the same day. Answer their question and suggest a clear next step.",
          "**A gentle check-in** a couple of days later if they haven't replied. Keep it to two or three lines and make it easy to answer.",
          "**A helpful nudge** about a week later, with something useful such as a short FAQ, an example of your work or a simple way to book.",
          "**A polite close** after another week or so, letting them know you won't keep emailing and they're welcome to get in touch any time.",
        ],
      },
      {
        p: 'The sequence should stop automatically the moment they reply or book. Nothing feels worse to a customer than receiving "just checking in" after they\'ve already said yes.',
      },
      {
        h2: "Where a CRM comes in",
      },
      {
        p: "You can set up a basic instant reply with most form tools. The full sequence works best when your form sends enquiries into a CRM. The CRM records each lead, sends the follow-ups on schedule, stops them when someone responds and shows you at a glance who still needs attention.",
      },
      {
        p: "It also means that if more than one person handles enquiries, everyone can see what has been sent and who is dealing with whom.",
      },
      {
        h2: "Your follow-up checklist",
      },
      {
        ul: [
          "Every form submission triggers an instant, friendly confirmation email.",
          "Enquiries go to a place someone checks several times a day, or into a CRM.",
          "You aim to reply personally the same working day.",
          "Unanswered leads get two or three short follow-ups, spaced out over a couple of weeks.",
          "Follow-ups stop as soon as the lead replies or books.",
          "Every message is short, specific and easy to respond to.",
        ],
      },
      {
        h2: "Keep it human",
      },
      {
        p: "Automation should make you more responsive, not more robotic. Write your messages the way you'd speak to a customer, and review them every few months to make sure they still reflect how you work.",
      },
      {
        p: "If you'd like help connecting your website form to a CRM and setting up a follow-up sequence that sounds like you, get in touch. It's often a smaller job than people expect.",
      },
    ],
  },
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

const todayISO = () => new Date().toISOString().slice(0, 10);

/** Posts whose date has arrived, newest first. Use this everywhere on the site. */
export const publishedPosts = () =>
  posts.filter((p) => p.date <= todayISO()).sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => publishedPosts().find((p) => p.slug === slug);

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
