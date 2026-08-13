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
    type: "Completed game prototype",
    summary: "A completed Unity game where players build a base, produce resources, place turrets and defend against enemy waves.",
    description: "A Unity project focused on building and defending a base. Its codebase separates construction, resource production, turrets, enemy states, waves, levels, UI, onboarding and save systems.",
    highlights: ["Grid-based placement, movement and removal of structures", "Enemy state machines with target selection and structure attacks", "Resources, levels, UI, onboarding and persistent game state"],
    workflow: undefined
  },
  "chatplus-cms-portal": {
    title: "ChatPlus Website and CMS",
    type: "Live website and CMS",
    summary: "A public Astro website and Strapi CMS. Editors manage pages while AI prepares drafts for review before publication.",
    description: "A production platform for a large product website. Astro handles routes and static builds, while Strapi manages pages, reference data and editorial workflows. AI fills predefined content structures; editors review previews and approve publication manually.",
    highlights: ["Public Astro website and Strapi CMS running on a VPS", "AI prepares structured drafts that editors review", "Automated rebuilds, content imports and checks before publication"],
    workflow: ["CMS", "Draft", "Review", "Build", "Publish"]
  },
  "ads-transparency-monitor": {
    title: "Advertising Creative Monitor",
    type: "Private analytics system",
    summary: "A system that collects Google Ads creatives, stores scan history and organizes results by advertiser in one dashboard.",
    description: "A monorepo containing a web app, scan worker, MCP server and shared packages. Administrators manage advertisers and jobs; the worker collects creative details and previews; PostgreSQL stores history; MCP exposes verified data to agent clients.",
    highlights: ["Advertiser job queue, bounded concurrency and run history", "Next.js dashboard with creatives, exports and error states", "Prisma/PostgreSQL, MCP endpoint, automated tests and Docker deployment"],
    workflow: ["Advertiser", "Job", "Collect", "Database", "Dashboard"]
  },
  "private-seo-audit-extension": {
    title: "PrivateSEO — In-Browser Page Audit",
    type: "Chrome extension with AI analysis",
    summary: "A Chrome extension that audits the active page, finds SEO issues, generates AI recommendations and exports a PDF report.",
    description: "The extension reads SEO signals from the active tab, adds network checks through a service worker and presents results in a modular popup. AI requests go through a serverless proxy, keeping the provider key out of the client bundle.",
    highlights: ["Meta tags, headings, canonical, robots, hreflang, links, images, JSON-LD and Web Vitals", "AI scoring, metadata generation, intent/LSI and keyword-stuffing analysis through a protected proxy", "Dedicated report page, PDF export and reproducible Chrome release build"],
    workflow: undefined
  },
  "parser-find-price-tg": {
    title: "Price Monitoring and Discount Alerts",
    type: "Monitoring automation system",
    summary: "Scheduled price checks across more than ten stores with history, a management UI and Telegram alerts.",
    description: "A Python service that combines store-specific adapters, a scheduler, product and price storage, a web API and a Telegram bot. Managers work in dedicated Telegram topics, while products can be imported through Excel and Google Sheets.",
    highlights: ["More than ten store adapters with a unified product model", "Price history, scheduled checks and change detection", "Web management UI, spreadsheet import and Telegram notifications"],
    workflow: ["Import", "Schedule", "Parse", "Compare", "Notify"]
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
    title: "Website Review Queue from Google Sheets",
    type: "Internal review tool",
    summary: "A FastAPI and React workflow that turns large Google Sheets URL lists into prepared screenshot review batches.",
    description: "The system syncs a source sheet, stores review tasks in PostgreSQL, captures websites through Playwright workers and presents dense batches in a React UI. Scores and statuses are written back to the original sheet.",
    highlights: ["Full sheet sync without pre-creating thousands of capture jobs", "ARQ/Redis workers, Playwright screenshots and PostgreSQL migrations", "Fast batch review with scores, statuses and write-back to Google Sheets"],
    workflow: ["Sheet", "Batch", "Capture", "Review", "Sync"]
  },
  "fitseek-telegram-mini-app": {
    title: "Trainer Search inside Telegram",
    type: "Telegram Mini App",
    summary: "A trainer discovery prototype with a React/Vite frontend, FastAPI backend, Telegram bot and database.",
    description: "A service prototype delivered inside Telegram. The web app provides search UI, FastAPI serves the data, and a bot connects Telegram interactions to the Mini App.",
    highlights: ["Telegram Mini App user interface", "FastAPI backend and structured data layer", "Complete bot → web app → API flow"],
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
    summary: "A multilingual commercial website with a catalog, interactive hotspot maps, project galleries and China market-entry services.",
    description: "PANZZI combines furniture, lighting, materials, completed projects and China business services. The catalog uses interactive hotspot maps and galleries, while content and navigation support Russian, English and Chinese.",
    highlights: ["Catalog with interactive hotspot maps and category galleries", "Russian, English and Chinese content with a dedicated China Entry flow", "Responsive multi-page layout published on a production domain"],
    workflow: undefined
  },
  "mustang-driving-school": {
    title: "Driving School Website with Lead Processing",
    type: "Commercial website",
    summary: "A production driving-school website with course pages, lead forms, Telegram delivery and technical SEO setup.",
    description: "A multi-page website covering courses, legal information and lead forms. A PHP endpoint validates submissions and sends them to the manager through Telegram; sitemap, robots and server rules support the production domain.",
    highlights: ["Responsive landing and dedicated course information pages", "Validated PHP lead endpoint with Telegram delivery", "Sitemap, robots, legal pages and production hosting setup"],
    workflow: undefined
  },
  "course-registration-platform": {
    title: "Course Participant Portal",
    type: "Educational fullstack project",
    summary: "A React application with registration, authentication, course applications and a separate admin workflow on PHP and MySQL.",
    description: "An educational course registration system with user and administrator interfaces, demonstrating a complete frontend, backend API and database flow.",
    highlights: ["React interface with routing", "PHP REST API for authentication and applications", "MySQL schema for users and submissions"],
    workflow: undefined
  },
  "token-audit-trading-assistant": {
    title: "Token Analysis Tool",
    type: "Research prototype",
    summary: "A tool that collects token, wallet and developer data to test trading hypotheses without making real trades.",
    description: "A research platform where GMGN remains the market terminal while a local stack adds memory, collectors, replay and decision support. It includes a Chrome extension, data services, a dashboard and browser audit tooling.",
    highlights: ["Wallet and developer intelligence, token replay, coverage and risk verdicts", "Chrome extension, collectors, API, PostgreSQL and operations dashboard", "Paper-only decisions with explicit safeguards against real swaps and private-key handling"],
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
    description: "An archived frontend project for a car dealership. The homepage centers on a full-screen promotional slider, with navigation to company information, inventory, services, reviews and contacts.",
    highlights: ["Full-screen vehicle promotion showcase", "Structure for inventory, services, reviews and contacts", "High-contrast navigation and clear offer CTA"],
    workflow: undefined
  },
  "funpay-price-sniper": {
    title: "FunPay Offer Monitor",
    type: "Monitoring and notification system",
    summary: "An autonomous tool that monitors FunPay listings, applies user-defined rules and sends matching opportunities to Telegram.",
    description: "A FunPay listing monitor with a separate backend, settings UI and Telegram notifications. The parser normalizes names and prices; sniper rules select opportunities; alerts include price, yield, market deviation and a direct purchase link.",
    highlights: ["Parallel FunPay monitoring and data normalization", "Configurable sniper rules and priority routing", "React interface, FastAPI backend and actionable Telegram alerts"],
    workflow: undefined
  },
  "driving-test-auto-booking": {
    title: "DriveAlerts — RSA Test Slot Monitor",
    type: "Private working service",
    summary: "A service that monitors newly available RSA Ireland test slots. Users set search preferences and confirm a matching result themselves.",
    description: "The interface covers invitations, account connection, search filters and result confirmation. The server keeps sensitive data outside the browser and runs monitoring jobs with recovery after failures.",
    highlights: ["One-time invitations, protected sessions and access checks", "Separate monitoring processes, PostgreSQL scheduling and recovery", "Mock RSA, load checks and a protected event viewer"],
    workflow: ["Invitation", "Account", "Search", "Monitor", "Confirm"]
  }
};

const detailsCopy: Record<string, Omit<ProjectDetails, "image" | "imageAlt"> & { imageAlt?: string }> = {
  "mystery-forest-survival": { period: "2024 — live", status: "Published", role: "Unity development, gameplay systems and WebGL release", challenge: "Build a coherent survival world where exploration, character needs, resources, crafting and construction form one loop and persist between sessions.", solution: "Connected the gameplay systems into an open survival scenario and integrated authentication, cloud saves and localization for Yandex Games.", outcome: "Released on November 1, 2024; the game remains playable online and has a 4.0 user rating.", imageAlt: "Mystery Forest game page on Yandex Games" },
  "tower-defense-builder": { period: "Unity project", status: "Completed project", role: "C# architecture and gameplay systems", challenge: "Construction, economy and enemy waves require several connected systems that must survive level changes and saved state.", solution: "Separated buildings and grid logic, resources, turrets, enemy states, spawners, levels, UI and persistence.", outcome: "Completed a playable build with a full build → produce → defend → progress loop.", imageAlt: "Main menu of the base defense Unity game" },
  "chatplus-cms-portal": { period: "2025–2026", status: "Published", role: "Astro website, Strapi CMS, AI features and deployment", challenge: "The content team needed to manage pages, uploads and drafts without editing the website code.", solution: "Separated the public Astro website from Strapi CMS, defined page structures, connected PostgreSQL and uploads, and added reviewed AI drafts.", outcome: "The website runs on a VPS: editors manage content in Strapi and approved changes trigger a new build.", imageAlt: "Chat Plus platform homepage" },
  "ads-transparency-monitor": { period: "2026", status: "Working tool", role: "Dashboard, scan worker, MCP, database and deployment", challenge: "Advertising creatives had to be collected and tracked by advertiser without repeatedly browsing the Google Ads Transparency Center.", solution: "Split the system into Next.js web, worker, MCP server, parsers and a Prisma/PostgreSQL package with queues, statuses and exports.", outcome: "Operators can review coverage and failures while agent clients access verified creative data through MCP.", imageAlt: "Ads Transparency Monitor dashboard" },
  "private-seo-audit-extension": { period: "2025", status: "Working tool", role: "Extension architecture, SEO/GEO checks, AI proxy and reporting", challenge: "SEO specialists needed a quick audit on the active page without switching between external tools.", solution: "Separated content script, service worker, popup and report page; added technical and GEO checks, AI through a serverless proxy and release scripts.", outcome: "The extension audits pages in place, generates recommendations and PDFs, while keeping the AI key out of the client.", imageAlt: "PrivateSEO extension audit results" },
  "parser-find-price-tg": { period: "2024–2025", status: "Working tool", role: "Parsers, web UI and Telegram notifications", challenge: "Prices change across stores and manual checks neither scale nor preserve history.", solution: "Connected store parsers, Flask API, product and history storage, management UI and Telegram alerts.", outcome: "The system checks products on schedule, records changes and sends useful updates without manual monitoring." },
  "stream-tiktok-auction": { period: "2025", status: "MVP", role: "Backend, auction logic, admin and overlay", challenge: "Donations needed to become a clear live auction with bids, timers and lot changes.", solution: "Built a Fastify backend, SQLite state, React control panel and a separate TikTok LIVE Studio overlay.", outcome: "The MVP covers the full path from DonationAlerts event to bid update and on-stream result." },
  "site-scorer-review-tool": { period: "2026", status: "Working tool", role: "FastAPI, capture worker, React review UI and Sheets sync", challenge: "Large URL lists in Google Sheets were slow to open, inspect and score one by one.", solution: "Built full sheet sync, PostgreSQL tasks, ARQ/Redis workers with Playwright capture and a dense batch review interface.", outcome: "Reviewers receive prepared queues, score sites quickly and sync statuses back to Google Sheets." },
  "fitseek-telegram-mini-app": { period: "2024", status: "Prototype", role: "Telegram Mini App, API and data model", challenge: "Trainer discovery had to fit into a familiar Telegram flow without a separate app installation.", solution: "Connected a React/Vite web app, FastAPI backend, Telegram bot and database.", outcome: "Delivered a testable Mini App prototype with a complete bot → web app → API flow." },
  "scaner-frilance-bot": { period: "2024–2025", status: "Working tool", role: "Parsers, filtering and Telegram workflow", challenge: "New freelance jobs disappear quickly in noisy feeds, while frequent polling creates duplicates and rate-limit issues.", solution: "Added asynchronous collection, filters, automatic tags, persistent seen-state and controlled delivery.", outcome: "The bot produces a clean stream of relevant work and reduces repeated manual browsing.", imageAlt: "Closed freelance job card in the Telegram feed" },
  "panzzi-furniture-website": { period: "2025–2026", status: "Published", role: "Multi-page website, catalog, localization and publication", challenge: "Present furniture and China business services as one coherent commercial website.", solution: "Built a multilingual structure, interactive catalog, project galleries and a dedicated China services section.", outcome: "The live site serves as a commercial showcase for services and completed projects.", imageAlt: "PANZZI furniture website homepage" },
  "mustang-driving-school": { period: "2024", status: "Published", role: "Frontend, PHP leads API, Telegram and technical SEO", challenge: "The driving school needed a clear responsive site that also captured enquiries.", solution: "Built information and legal pages, a validated PHP endpoint, Telegram lead delivery and technical SEO files.", outcome: "The site runs on its public domain and sends new leads directly to the manager.", imageAlt: "Mustang driving school homepage" },
  "course-registration-platform": { period: "2024", status: "Educational project", role: "Frontend, PHP API and MySQL", challenge: "Implement course registration with authentication, user and admin scenarios.", solution: "Connected React routing, a PHP REST API and MySQL data structures.", outcome: "Demonstrates a complete basic fullstack flow and separated user/admin responsibilities." },
  "token-audit-trading-assistant": { period: "2024–2025", status: "Prototype", role: "Extension, collectors, data server, dashboard and replay/risk layer", challenge: "Token data from multiple sources needed rapid normalization before manual review.", solution: "Connected a Chrome extension, Node collectors, PostgreSQL API, React dashboard, browser audit and wallet/developer intelligence.", outcome: "Built a paper-only research platform for testable hypotheses without real swaps, private keys or hidden execution." },
  "fitness-coach-landing": { period: "2023", status: "Published", role: "Page structure, responsive frontend and publication", challenge: "A personal trainer needed a compact page with a clear offer, services and fast contact.", solution: "Built a focused sequence of sections, responsive navigation and direct contact points.", outcome: "The site is published through GitHub Pages and works as a personal showcase.", imageAlt: "Fitness coach personal website hero" },
  "used-car-showroom": { period: "Archived project", status: "Completed project", role: "Structure, interface design and frontend", challenge: "The dealership needed a homepage that immediately presented an offer and led visitors to inventory or services.", solution: "Built a contact header, high-contrast navigation, full-screen promotional slider and section structure.", outcome: "Delivered a coherent dealership presentation site with direct paths to key sections.", imageAlt: "Car dealership homepage and promotional showcase" },
  "funpay-price-sniper": { period: "2025–2026", status: "Working tool", role: "Parser, FastAPI, React UI, selection rules and Telegram integration", challenge: "Good FunPay offers disappear quickly, making manual price and attribute checks too slow.", solution: "Built parallel listing collection, name normalization, local price calculations, user-defined sniper rules and direct Telegram alerts.", outcome: "The tool selects matching lots and sends price, yield, market deviation and a BUY NOW action to Telegram.", imageAlt: "FunPay price sniper alerts in Telegram" },
  "driving-test-auto-booking": { period: "2026", status: "Working service", role: "User interface, server workflows and data protection", challenge: "Users needed a safe flow for connecting an RSA account, setting filters and confirming results without exposing sensitive data to the browser.", solution: "Connected the React interface to a server gateway, RSA client, PostgreSQL jobs and separate monitoring processes, with protected sessions and a mock RSA environment.", outcome: "Delivered a private working service with error recovery and manual confirmation of matching slots.", imageAlt: "DriveAlerts slot monitoring interface" }
};

const linkLabels: Record<string, string> = {
  "Играть на Яндекс Играх": "Play on Yandex Games",
  "Открыть сайт": "Open website",
  "Пост с примером": "View example",
  "Описание проекта": "Project overview",
  "Локальный проект": "Project repository"
};

const previewLabels: Record<string, string> = {
  "mystery-forest-survival": "Playable online",
  "tower-defense-builder": "Unity gameplay systems",
  "chatplus-cms-portal": "CMS and content workflow",
  "ads-transparency-monitor": "Ad intelligence",
  "private-seo-audit-extension": "SEO audit",
  "parser-find-price-tg": "Price update",
  "stream-tiktok-auction": "Live auction overlay",
  "site-scorer-review-tool": "Review queue",
  "fitseek-telegram-mini-app": "Telegram Mini App",
  "scaner-frilance-bot": "New freelance job",
  "panzzi-furniture-website": "Furniture catalog",
  "mustang-driving-school": "Telegram leads",
  "course-registration-platform": "Participant portal",
  "token-audit-trading-assistant": "Token risk review",
  "fitness-coach-landing": "Personal brand",
  "used-car-showroom": "Vehicle showcase",
  "funpay-price-sniper": "Matching opportunity",
  "driving-test-auto-booking": "Private slot monitor"
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
  { title: "Websites and services", text: "Websites, customer portals, internal services and CMS platforms — from structure to launch." },
  { title: "Process automation", text: "Data collection, processing, alerts, reports and integrations between services." },
  { title: "AI tools", text: "AI features for existing products and standalone tools built around a specific workflow." },
  { title: "Unity development", text: "Gameplay mechanics, interfaces and standalone Unity systems ready for integration." }
];

export const homeContentEn: HomeContent = {
  services: { index: "01 / Services", title: "What I can build", intro: "Bring a specification or describe the problem. I will help define the scope and turn it into a working solution." },
  evidence: {
    index: "02 / Experience", title: "What is already working", intro: "Concrete results from live and internal projects.",
    items: [
      { id: "practice-web", label: "Websites", title: "Commercial websites", text: "Launched multi-page websites, catalogs and CMS platforms on public domains.", facts: ["ChatPlus, PANZZI and Mustang", "Lead forms and CMS", "Responsive UI, SEO and deployment"] },
      { id: "practice-automation", label: "Automation", title: "Data collection without manual work", text: "Built complete workflows from scheduled collection to storage and notifications.", facts: ["Price tracking across 10+ stores", "Google Ads and Google Sheets review", "Telegram alerts and reports"] },
      { id: "practice-ai", label: "AI and agents", title: "AI in practical workflows", text: "Used models in CMS, SEO audits and internal tools with reviewable output.", facts: ["LLM APIs and structured output", "MCP and agent workflows", "Job queues and manual review"] },
      { id: "practice-unity", label: "Unity", title: "Two completed games", text: "Built gameplay mechanics, interfaces, saves and WebGL releases.", facts: ["Two completed Unity projects", "C#, gameplay and persistence", "One game is live on Yandex Games"] }
    ]
  },
  stack: { index: "03 / Technology", title: "Tools I use", intro: "My main stack by area. The final choice depends on the product and deployment constraints." },
  reviews: { index: "05 / Reviews", title: "Client reviews", intro: "Feedback from completed projects on Kwork.", ratingLabel: "rating", reviewsLabel: "reviews", linkLabel: "Kwork profile" },
  about: { index: "06 / About" },
  contact: { availability: "Open to projects and opportunities", title: "Have a project in mind?", text: "Send me a short description on Telegram. I will review the requirements and suggest the next step.", telegram: "Message on Telegram" },
  footer: "Remote · 2026"
};

export const aboutOverviewEn = {
  heading: "Alexey Valkov, Fullstack / AI Product Engineer",
  paragraphs: [
    "I build websites, services, automation, AI tools and Unity projects. I can own a complete product or join a team for a focused part.",
    "I work remotely with clients and teams. I share progress in working stages and hand over the code with clear setup and maintenance notes."
  ],
  pathLabel: "Work format",
  pathTitle: "Remote · project-based · team collaboration",
  pathText: "Open to one-off projects, long-term collaboration and employment opportunities."
};

export const aboutPrinciplesEn = [
  { title: "Define the task", text: "Clarify the goal, constraints and acceptance criteria before development starts." },
  { title: "Show working stages", text: "Split the work into parts and share versions that can already be tested." },
  { title: "Hand over the result", text: "Leave clear structure, code and instructions for future maintenance." }
];

export const reviewsEn = [
  { title: "Yandex Market parser", author: "Restup2021", text: "The task turned out to be much more complex than expected, but Alexey handled it. Thank you for the good work!" },
  { title: "Parser improvements", author: "appmasters", text: "This was my second order. The work was completed quickly and professionally. Recommended." },
  { title: "International website parser", author: "appmasters", text: "The parser was implemented as agreed, and every requested revision was completed carefully." },
  { title: "Marketplace parser", author: "Restup2021", text: "Alexey is a responsible and skilled developer. He handled revisions calmly, worked carefully and stayed in touch throughout the project." }
];
