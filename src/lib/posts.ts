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
