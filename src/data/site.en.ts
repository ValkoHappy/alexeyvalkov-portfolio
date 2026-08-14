import { getProjectDetails, projects, type HomeContent, type Project, type ProjectDetails } from "./site";

type ProjectCopy = Pick<Project, "title" | "type" | "summary" | "description" | "highlights" | "workflow">;

const copy: Record<string, ProjectCopy> = {
  "mystery-forest-survival": {
    title: "Survival: Mystery Forest",
    type: "Published Unity game",
    summary: "A 3D survival sandbox with gathering, crafting, building, hunting, fishing, quests and cloud saves.",
    description: "A complete Unity survival game set in a mysterious forest. Players manage character needs, explore the world, gather resources, build shelter, complete quests and interact with wildlife. The WebGL build is published on Yandex Games and runs without installation.",
    highlights: ["Open survival loop: gathering, crafting, building, hunting and fishing", "WebGL release with Yandex Games authentication and cloud saves", "Russian, English and Turkish localization"],
    workflow: undefined
  },
  "tower-defense-builder": {
    title: "Base Building and Defense Game",
    type: "Completed Unity project",
    summary: "A completed Unity game where players build a base, produce resources, place turrets and defend against enemy waves.",
    description: "A Unity project focused on building and defending a base. Its codebase separates construction, resource production, turrets, enemy states, waves, levels, UI, onboarding and save systems.",
    highlights: ["Grid-based placement, movement and removal of structures", "Enemy state machines with target selection and structure attacks", "Resources, levels, UI, onboarding and persistent game state"],
    workflow: undefined
  },
  "chatplus-cms-portal": {
    title: "ChatPlus Website and CMS",
    type: "Live website and CMS",
    summary: "A public Astro website and Strapi CMS. Editors manage pages while AI prepares drafts for review before publication.",
    description: "The public website runs on Astro, while editors manage pages and reference content in Strapi. AI fills predefined fields, then an editor reviews each draft and approves it for publication.",
    highlights: ["Public Astro website and Strapi CMS running on a VPS", "AI prepares structured drafts that editors review", "Automated rebuilds, content imports and checks before publication"],
    workflow: ["CMS", "Draft", "Review", "Build", "Publish"]
  },
  "ads-transparency-monitor": {
    title: "Advertising Creative Monitor",
    type: "Private analytics system",
    summary: "A system that collects Google Ads creatives, stores scan history and organizes results by advertiser in one dashboard.",
    description: "Administrators add advertisers and launch scans from a Next.js dashboard. A background worker collects the ads, PostgreSQL stores the history, and MCP makes verified data available to AI agents.",
    highlights: ["Job queue, controlled parallel scans and run history", "Dashboard with advertisers, creatives, exports and error states", "PostgreSQL, MCP access for AI agents, automated tests and Docker"],
    workflow: ["Advertiser", "Job", "Collect", "Database", "Dashboard"]
  },
  "private-seo-audit-extension": {
    title: "PrivateSEO — In-Browser Page Audit",
    type: "Chrome extension with AI analysis",
    summary: "A Chrome extension that audits the active page, finds SEO issues, generates AI recommendations and exports a PDF report.",
    description: "The extension checks SEO signals on the current page and displays the results in its own interface. AI requests pass through a Yandex Cloud Function, so the external provider key never reaches the browser bundle.",
    highlights: ["Meta tags, headings, canonical, robots, hreflang, links, images, JSON-LD and Web Vitals", "AI scoring, metadata generation, search-intent analysis and keyword-stuffing checks", "Dedicated report page, PDF export and a ready-to-install Chrome build"],
    workflow: undefined
  },
  "parser-find-price-tg": {
    title: "Price Monitoring and Discount Alerts",
    type: "Monitoring automation system",
    summary: "Scheduled price checks across more than ten stores with history, a management UI and Telegram alerts.",
    description: "A Python service that combines store-specific adapters, a scheduler, product and price storage, a web API and a Telegram bot. Managers work in dedicated Telegram topics, while products can be imported through Excel and Google Sheets.",
    highlights: ["More than ten store adapters with a unified product model", "Price history, scheduled checks and change detection", "Web management UI, spreadsheet import and Telegram notifications"],
    workflow: ["Collect", "Store", "Compare", "Notify", "Report"]
  },
  "stream-tiktok-auction": {
    title: "Donation Auction for TikTok LIVE",
    type: "Interactive streaming MVP",
    summary: "A live auction driven by donations, with lots, bids, timers, an admin panel and a streaming overlay.",
    description: "A system that converts DonationAlerts events into a visible auction during TikTok LIVE. A Fastify backend manages state, SQLite stores lots and bids, the React admin controls the session, and a separate overlay is displayed in TikTok LIVE Studio.",
    highlights: ["Donation event processing and bid updates", "React admin for lots, timers and session controls", "Dedicated browser overlay for TikTok LIVE Studio"],
    workflow: ["Donation", "Validate", "Bid", "Timer", "Overlay"]
  },
  "site-scorer-review-tool": {
    title: "Website Review Service for Google Sheets",
    type: "Internal review tool",
    summary: "A service that imports website lists from Google Sheets, prepares page screenshots and makes them quick to review in batches.",
    description: "Google Sheets holds the source list, while PostgreSQL tracks review progress. FastAPI and a background queue prepare each batch, Playwright captures the pages, and the React interface lets reviewers score sites quickly.",
    highlights: ["Large-sheet synchronization without creating unnecessary tasks", "Background screenshot capture with Playwright and a job queue", "Fast manual review with results written back to Google Sheets"],
    workflow: ["Sheet", "Batch", "Capture", "Review", "Sync"]
  },
  "fitseek-telegram-mini-app": {
    title: "Trainer Search inside Telegram",
    type: "Telegram Mini App",
    summary: "A Telegram Mini App prototype for finding trainers without installing a separate application.",
    description: "The Mini App provides the trainer search interface, FastAPI serves the data, and the bot opens the app and connects it to the Telegram user flow.",
    highlights: ["Trainer search inside a Telegram Mini App", "FastAPI and a structured data layer", "Complete flow from Telegram bot to interface and API"],
    workflow: undefined
  },
  "scaner-frilance-bot": {
    title: "Freelance Job Feed in Telegram",
    type: "Working Telegram aggregator",
    summary: "A bot that monitors freelance platforms, filters new jobs, adds tags and prevents duplicate notifications.",
    description: "A working Telegram bot for tracking new freelance jobs. Parsers collect fresh listings, filters keep relevant ones, automatic tags organize the feed, and controlled delivery respects Telegram rate limits.",
    highlights: ["Monitoring of new jobs and listings", "Filters, automatic tags and persistent seen-state", "Rate-limit protection and message migration tools"],
    workflow: undefined
  },
  "panzzi-furniture-website": {
    title: "PANZZI Furniture Catalog Website",
    type: "Commercial website",
    summary: "A multilingual website with a furniture catalog, interactive diagrams, project galleries and business support services in China.",
    description: "PANZZI brings together furniture, lighting, materials, completed projects and business support in China. The catalog uses interactive diagrams and galleries, while the content and navigation support Russian, English and Chinese.",
    highlights: ["Catalog with interactive diagrams and category galleries", "Russian, English and Chinese versions with a dedicated China services section", "Responsive multi-page website published on its own domain"],
    workflow: undefined
  },
  "mustang-driving-school": {
    title: "Driving School Website with Lead Processing",
    type: "Commercial website",
    summary: "A live driving-school website with course information and forms that send new enquiries directly to a manager in Telegram.",
    description: "The multi-page website covers training programs, legal information and enquiry forms. A PHP handler validates submissions and sends them to the manager in Telegram; sitemap, robots and server rules support the live domain.",
    highlights: ["Responsive homepage and dedicated course pages", "Validated PHP form handler with Telegram delivery", "Sitemap, robots, legal pages and live hosting setup"],
    workflow: undefined
  },
  "course-registration-platform": {
    title: "Course Participant Portal",
    type: "Educational fullstack project",
    summary: "An educational application with registration, course enrolment and a separate administrator interface.",
    description: "A course registration system with user and administrator interfaces. It demonstrates the complete flow from browser forms to an API and database.",
    highlights: ["React interface with routing", "PHP REST API for authentication and applications", "MySQL schema for users and submissions"],
    workflow: undefined
  },
  "token-audit-trading-assistant": {
    title: "Token Analysis Tool",
    type: "Research prototype",
    summary: "A tool that collects token, wallet and developer data to test trading hypotheses without making real trades.",
    description: "GMGN remains the market terminal, while local services collect and store data for later analysis. The project includes a Chrome extension, collectors, an API, a database and a research dashboard.",
    highlights: ["Wallet, developer, token-history and risk analysis", "Chrome extension, collectors, API, PostgreSQL and research dashboard", "Hypothesis testing without real trades or access to private keys"],
    workflow: undefined
  },
  "fitness-coach-landing": {
    title: "Personal Website for a Fitness Coach",
    type: "Personal landing page",
    summary: "A responsive personal website presenting a fitness coach, services, proof points and contact options.",
    description: "A focused landing page for a personal trainer with a strong opening section, service presentation, advantages, contacts and responsive navigation, published through GitHub Pages.",
    highlights: ["Clear personal-brand landing page", "Responsive sections and navigation", "Publication through GitHub Pages"],
    workflow: undefined
  },
  "used-car-showroom": {
    title: "Car Dealership Showcase and Catalog",
    type: "Car dealership website",
    summary: "A dealership website with a large promotional showcase and navigation to inventory, services, reviews and contacts.",
    description: "An archived car-dealership website. The homepage centers on a full-screen promotional showcase, with navigation to company information, inventory, services, reviews and contacts.",
    highlights: ["Full-screen vehicle promotion showcase", "Structure for inventory, services, reviews and contacts", "High-contrast navigation and clear offer CTA"],
    workflow: undefined
  },
  "funpay-price-sniper": {
    title: "FunPay Offer Monitor",
    type: "Monitoring and notification system",
    summary: "A tool that monitors FunPay listings, compares them against user-defined rules and sends matching offers to Telegram.",
    description: "The system checks FunPay listings on a schedule. The server normalizes names and prices, users configure selection rules in a separate interface, and matching offers arrive in Telegram with a direct purchase link.",
    highlights: ["Parallel FunPay monitoring and data normalization", "Configurable selection rules and separate delivery for priority matches", "React interface, FastAPI and Telegram alerts with direct offer links"],
    workflow: undefined
  },
  "driving-test-auto-booking": {
    title: "DriveAlerts — Test Slot Monitor",
    type: "Private working service",
    summary: "A service that monitors newly available test slots. Users set search preferences and confirm a matching result themselves.",
    description: "The interface covers invitations, account connection, search filters and result confirmation. The server keeps sensitive data outside the browser and runs monitoring jobs with recovery after failures.",
    highlights: ["One-time invitations, protected sessions and access checks", "Separate monitoring processes, PostgreSQL scheduling and recovery", "Test environment, load checks and a protected event viewer"],
    workflow: ["Invitation", "Account", "Search", "Monitor", "Confirm"]
  }
};

const detailsCopy: Record<string, Omit<ProjectDetails, "image" | "imageAlt"> & { imageAlt?: string }> = {
  "mystery-forest-survival": { period: "2024 — live", status: "Published", role: "Unity development, gameplay systems and WebGL release", challenge: "Create a coherent survival world where exploration, character needs, resources, crafting and construction form one loop and persist between sessions.", solution: "Connected the gameplay systems into an open survival scenario and integrated Yandex Games authentication, cloud saves and localization.", outcome: "Released on November 1, 2024; the game remains playable online and has a 4.0 user rating.", imageAlt: "Mystery Forest game page on Yandex Games" },
  "tower-defense-builder": { period: "Unity project", status: "Completed project", role: "C# architecture and gameplay systems", challenge: "Construction, resource production and enemy waves required several connected systems that could preserve state between levels.", solution: "Separated building and grid logic, resources, turrets, enemy states, spawners, levels, UI and persistence.", outcome: "Completed a playable build with the full build → produce → defend → progress loop.", imageAlt: "Main menu of the base defense Unity game" },
  "chatplus-cms-portal": { period: "2025–2026", status: "Published", role: "Astro website, Strapi CMS, AI features and deployment", challenge: "The content team needed to manage pages, uploads and drafts without editing the website code.", solution: "Separated the public Astro website from Strapi CMS, defined page structures, connected PostgreSQL and uploads, and added reviewed AI drafts.", outcome: "The website runs on a VPS: editors manage content in Strapi and approved changes trigger a new build.", imageAlt: "Chat Plus platform homepage" },
  "ads-transparency-monitor": { period: "2026", status: "Working tool", role: "Dashboard, data collection, MCP, database and deployment", challenge: "Advertising creatives had to be collected and tracked by advertiser without repeatedly browsing the Google Ads Transparency Center.", solution: "Split the system into a Next.js dashboard, background worker, MCP server, parsers and a shared PostgreSQL layer with queues, statuses and exports.", outcome: "Operators can review coverage and failures, while AI agents access verified creative data through MCP.", imageAlt: "Ads Transparency Monitor dashboard" },
  "private-seo-audit-extension": { period: "2025", status: "Working tool", role: "Extension architecture, SEO/GEO checks, AI integration and reporting", challenge: "SEO specialists needed a quick audit of the current page without switching between several external tools.", solution: "Separated page data collection, background processing, the extension interface and the report page; added technical and GEO checks, protected AI requests and release builds.", outcome: "The extension audits the current page, generates recommendations and PDF reports, while keeping the AI key out of the browser bundle.", imageAlt: "PrivateSEO extension audit results" },
  "parser-find-price-tg": { period: "2024–2025", status: "Working tool", role: "Parsers, management interface and Telegram notifications", challenge: "Prices change across stores, while manual checks do not scale or preserve history.", solution: "Connected store parsers, a Flask API, product and price history, a management interface and Telegram alerts.", outcome: "The system checks products on a schedule, records price changes and sends useful updates without manual monitoring." },
  "stream-tiktok-auction": { period: "2025", status: "MVP", role: "Server, auction logic, control panel and stream overlay", challenge: "Donations needed to become a clear live auction with bids, timers and lot changes.", solution: "Built a Fastify server, SQLite state, a React control panel and a separate overlay for TikTok LIVE Studio.", outcome: "The MVP covers the complete flow from a DonationAlerts event to a bid update and the on-stream result." },
  "site-scorer-review-tool": { period: "2026", status: "Working tool", role: "FastAPI, background page capture, review interface and Google Sheets", challenge: "Large website lists in Google Sheets were slow to open, inspect and score one by one.", solution: "Built sheet synchronization, PostgreSQL tasks, an ARQ/Redis queue with Playwright capture and a focused batch-review interface.", outcome: "Reviewers receive prepared batches, score websites quickly and write statuses back to Google Sheets." },
  "fitseek-telegram-mini-app": { period: "2024", status: "Prototype", role: "Telegram Mini App, API and data model", challenge: "Trainer discovery had to fit into a familiar Telegram flow without a separate app installation.", solution: "Connected a React/Vite web app, FastAPI backend, Telegram bot and database.", outcome: "Delivered a testable Mini App prototype with a complete bot → web app → API flow." },
  "scaner-frilance-bot": { period: "2024–2025", status: "Working tool", role: "Parsers, filters and Telegram delivery", challenge: "New freelance jobs disappear quickly in noisy feeds, while frequent polling creates duplicates and rate-limit issues.", solution: "Added asynchronous collection, filters, automatic tags, persistent seen-state and controlled delivery.", outcome: "The bot produces a clean feed of relevant jobs and reduces repeated manual browsing.", imageAlt: "Closed freelance job card in the Telegram feed" },
  "panzzi-furniture-website": { period: "2025–2026", status: "Published", role: "Multi-page website, catalog, localization and publication", challenge: "Present furniture and China business services as one coherent commercial website.", solution: "Built a multilingual structure, interactive catalog, project galleries and a dedicated China services section.", outcome: "The live site serves as a commercial showcase for services and completed projects.", imageAlt: "PANZZI furniture website homepage" },
  "mustang-driving-school": { period: "2024", status: "Published", role: "Frontend, PHP leads API, Telegram and technical SEO", challenge: "The driving school needed a clear responsive site that also captured enquiries.", solution: "Built information and legal pages, a validated PHP endpoint, Telegram lead delivery and technical SEO files.", outcome: "The site runs on its public domain and sends new leads directly to the manager.", imageAlt: "Mustang driving school homepage" },
  "course-registration-platform": { period: "2024", status: "Educational project", role: "Frontend, PHP API and MySQL", challenge: "Implement course registration with authentication and separate user and administrator flows.", solution: "Connected the React interface and routing to a PHP REST API and MySQL data model.", outcome: "The project demonstrates a complete basic full-stack flow with separate user and administrator responsibilities." },
  "token-audit-trading-assistant": { period: "2024–2025", status: "Prototype", role: "Extension, data collection, API, dashboard and risk analysis", challenge: "Token data from several sources needed to be normalized quickly before manual review.", solution: "Connected a Chrome extension, Node.js collectors, a PostgreSQL API, React dashboard and wallet/developer analysis services.", outcome: "Built a research prototype for testing hypotheses without real trades, private keys or hidden automated execution." },
  "fitness-coach-landing": { period: "2023", status: "Published", role: "Page structure, responsive frontend and publication", challenge: "A personal trainer needed a compact page with a clear offer, services and fast contact.", solution: "Built a focused sequence of sections, responsive navigation and direct contact points.", outcome: "The site is published through GitHub Pages and works as a personal showcase.", imageAlt: "Fitness coach personal website hero" },
  "used-car-showroom": { period: "Archived project", status: "Completed project", role: "Structure, interface design and frontend", challenge: "The dealership needed a homepage that immediately presented an offer and led visitors to inventory or services.", solution: "Built a contact header, high-contrast navigation, full-screen promotional slider and section structure.", outcome: "Delivered a coherent dealership presentation site with direct paths to key sections.", imageAlt: "Car dealership homepage and promotional showcase" },
  "funpay-price-sniper": { period: "2025–2026", status: "Working tool", role: "Parser, FastAPI, React interface, selection rules and Telegram", challenge: "Good FunPay offers disappear quickly, making manual price and attribute checks too slow.", solution: "Built parallel listing collection, name normalization, local price calculations, user-defined selection rules and direct Telegram alerts.", outcome: "The tool selects matching listings and sends a compact Telegram card with the price, expected return, market deviation and a direct purchase link.", imageAlt: "FunPay offer-monitoring alerts in Telegram" },
  "driving-test-auto-booking": { period: "2026", status: "Working service", role: "User interface, server workflows and data protection", challenge: "Users needed a safe flow for connecting an account, setting filters and confirming results without exposing sensitive data to the browser.", solution: "Connected the React interface to a server gateway, server-side client, PostgreSQL jobs and separate monitoring processes, with protected sessions and a test environment.", outcome: "Delivered a private working service with error recovery and manual confirmation of matching slots.", imageAlt: "DriveAlerts slot monitoring interface" }
};

const linkLabels: Record<string, string> = {
  "Играть на Яндекс Играх": "Play on Yandex Games",
  "Открыть сайт": "Open website",
  "Архив проекта": "View project archive"
};

const previewLabels: Record<string, string> = {
  "mystery-forest-survival": "Playable online",
  "tower-defense-builder": "Unity gameplay systems",
  "chatplus-cms-portal": "Website and CMS",
  "ads-transparency-monitor": "Ad intelligence",
  "private-seo-audit-extension": "SEO audit",
  "parser-find-price-tg": "Price change detected",
  "stream-tiktok-auction": "Live auction overlay",
  "site-scorer-review-tool": "Website review batch",
  "fitseek-telegram-mini-app": "Telegram Mini App",
  "scaner-frilance-bot": "New matching job",
  "panzzi-furniture-website": "Furniture catalog",
  "mustang-driving-school": "Telegram leads",
  "course-registration-platform": "Participant portal",
  "token-audit-trading-assistant": "Token analysis",
  "fitness-coach-landing": "Personal brand",
  "used-car-showroom": "Vehicle showcase",
  "funpay-price-sniper": "Matching offer",
  "driving-test-auto-booking": "Private slot monitoring"
};

export const projectsEn: Project[] = projects.map((project) => ({
  ...project,
  ...copy[project.slug],
  preview: { ...project.preview, label: previewLabels[project.slug] ?? project.preview.label },
  links: project.links.map((link) => ({ ...link, label: linkLabels[link.label] ?? link.label }))
}));

export function getProjectDetailsEn(project: Project): ProjectDetails {
  const base = getProjectDetails(project);
  return { ...base, ...detailsCopy[project.slug], imageAlt: detailsCopy[project.slug]?.imageAlt ?? base.imageAlt };
}

export const focusItemsEn = [
  { title: "Websites and services", text: "Websites, customer portals, internal tools and CMS platforms — from structure to launch." },
  { title: "Process automation", text: "Data collection and processing, notifications, reports and integrations between services." },
  { title: "AI integrations", text: "AI features for existing products and standalone tools built for a specific workflow." },
  { title: "Unity systems", text: "Gameplay mechanics, interfaces and standalone Unity systems ready to integrate into a game." }
];

export const homeContentEn: HomeContent = {
  services: { index: "01 / Services", title: "What I can build for you", intro: "Bring a specification or simply describe the problem. I will help define the scope and turn it into a working solution." },
  evidence: {
    index: "02 / Experience", title: "Work already in use", intro: "Concrete results from published products and internal tools.",
    items: [
      { id: "practice-web", label: "Websites", title: "Commercial websites", text: "Launched multi-page websites, catalogs and CMS platforms on public domains.", facts: ["ChatPlus, PANZZI and Mustang", "Lead forms and CMS", "Responsive UI, SEO and deployment"] },
      { id: "practice-automation", label: "Automation", title: "Data collection without repetitive work", text: "Built complete workflows from scheduled collection to storage and notifications.", facts: ["Price tracking across 10+ stores", "Google Ads monitoring and website review from Google Sheets", "Telegram alerts and reports"] },
      { id: "practice-ai", label: "AI and agents", title: "AI in real workflows", text: "Used AI models in CMS platforms, SEO audits and internal tools with reviewable output.", facts: ["LLM APIs and structured output", "MCP and agent workflows", "Job queues and manual review"] },
      { id: "practice-unity", label: "Unity", title: "Two completed games", text: "Built gameplay mechanics, interfaces, saves and WebGL releases.", facts: ["Two completed Unity projects", "C#, gameplay and persistence", "One game is live on Yandex Games"] }
    ]
  },
  stack: { index: "03 / Technology", title: "Technology I work with", intro: "My main stack by area. The final choice depends on the task and deployment requirements." },
  reviews: { index: "05 / Reviews", title: "Client reviews", intro: "Feedback from completed projects on Kwork.", ratingLabel: "rating", reviewsLabel: "reviews", linkLabel: "Kwork profile" },
  about: { index: "06 / About" },
  contact: { availability: "Open to freelance work and job opportunities", title: "Have a project in mind?", text: "Send me a short description on Telegram or by email. I will review the requirements and suggest the next step.", telegram: "Message me on Telegram" },
  footer: "Working remotely · 2026"
};

export const aboutOverviewEn = {
  heading: "Alexey Valkov, Fullstack / AI Product Engineer",
  paragraphs: [
    "I build websites, services, automation, AI tools and Unity projects. I can deliver a complete product or join a team to handle a specific part.",
    "I work remotely with clients and teams. I share testable versions throughout the project and hand over the code with clear setup and maintenance instructions."
  ],
  pathLabel: "Work format",
  pathTitle: "Remote · contract work · team collaboration",
  pathText: "Open to one-off projects, long-term collaboration and employment opportunities."
};

export const aboutPrinciplesEn = [
  { title: "Define the task", text: "I clarify the goal, constraints and acceptance criteria before development starts." },
  { title: "Share testable progress", text: "I split the work into stages and share versions that can already be tested." },
  { title: "Hand over a maintainable result", text: "I provide clear code, structure and instructions for future maintenance." }
];

export const reviewsEn = [
  { title: "Yandex Market parser", author: "Restup2021", text: "The task turned out to be much more complex than expected, but Alexey handled it. Thank you for the good work!" },
  { title: "Parser improvements", author: "appmasters", text: "This was my second order. The work was completed quickly and professionally. Recommended." },
  { title: "International website parser", author: "appmasters", text: "The parser was implemented as agreed, and every requested revision was completed carefully." },
  { title: "Marketplace parser", author: "Restup2021", text: "Alexey is a responsible and skilled developer. He handled revisions calmly, worked carefully and stayed in touch throughout the project." }
];
