export type ProjectCategory =
  | "websites"
  | "react"
  | "automation"
  | "bots"
  | "extensions"
  | "fullstack"
  | "games";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  summary: string;
  description: string;
  stack: string[];
  categories: ProjectCategory[];
  links: {
    label: string;
    href: string;
  }[];
  highlights: string[];
  workflow: string[];
  accent: "blue" | "cyan" | "green" | "amber" | "rose";
  preview: {
    kind: "site" | "tool" | "bot" | "extension" | "game";
    label: string;
  };
};

export type ProjectDetails = {
  period: string;
  status: "Production" | "Рабочий инструмент" | "Законченный проект" | "MVP" | "Прототип" | "Учебный проект";
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  image?: string;
  imageAlt?: string;
};

export const profile = {
  name: "Алексей Вальков",
  initials: "AV",
  role: "Fullstack-разработчик веб-приложений, автоматизации и AI-инструментов",
  telegram: "https://t.me/leshaqt",
  github: "https://github.com/ValkoHappy",
  kwork: "https://kwork.ru/user/leshaqt",
  location: "Архангельск",
  summary:
    "Разрабатываю веб-приложения, внутренние сервисы, автоматизацию и AI-инструменты. Работаю с Next.js, Astro, React, Node.js и Python; также выпускаю игры на Unity."
};

export const stats = [
  { value: "17", label: "разобранных кейсов" },
  { value: "10+", label: "коммерческих заказов" },
  { value: "5.0", label: "рейтинг продавца" },
  { value: "60%", label: "повторных заказов" }
];

export const focusItems = [
  {
    title: "Веб-приложения",
    text: "Сайты, кабинеты, внутренние сервисы и CMS на Next.js, Astro и React с API, базами данных и публикацией."
  },
  {
    title: "Автоматизация",
    text: "Парсеры, workers, очереди, Telegram-боты, Chrome-расширения и интеграции со сторонними сервисами."
  },
  {
    title: "AI и агенты",
    text: "LLM API, MCP-серверы, агентные процессы, генерация по контрактам и human-in-the-loop проверка результата."
  },
  {
    title: "Unity и игры",
    text: "Gameplay-системы, UI, сохранения, WebGL-сборки и публикация проектов на Яндекс Играх."
  }
];

export const aboutOverview = {
  heading: "Fullstack-разработчик из Архангельска",
  paragraphs: [
    "Разрабатываю веб-приложения и внутренние инструменты: от интерфейса и API до базы данных, фоновых процессов и деплоя.",
    "Интегрирую AI и агентов в реальные процессы: использую MCP, очереди задач, структурированные промпты и обязательную проверку человеком. Параллельно продолжаю работать с Unity и C#."
  ],
  pathLabel: "Основной стек",
  pathTitle: "Next.js · Astro · React · Node.js · Python · PostgreSQL · Unity",
  pathText:
    "Могу подключиться к отдельной части проекта или собрать решение целиком: интерфейс, backend, интеграции, автоматизацию и запуск."
};

export const aboutPrinciples = [
  {
    title: "Fullstack",
    text: "Интерфейс, API, база данных, workers и деплой в одном проекте."
  },
  {
    title: "AI и агенты",
    text: "MCP, LLM API, управляемые AI-задачи и проверка результата человеком."
  },
  {
    title: "Unity / C#",
    text: "Два законченных игровых проекта и одна опубликованная игра на Яндекс Играх."
  }
];

const projectCatalog: Project[] = [
  {
    slug: "mystery-forest-survival",
    title: "Выживание: Загадочный Лес",
    shortTitle: "Mystery Forest",
    type: "Опубликованная Unity-игра",
    summary: "3D survival-песочница с ресурсами, крафтом, строительством, охотой, рыбалкой, квестами и облачными сохранениями.",
    description:
      "Полноценная Unity-игра о выживании в загадочном лесу. Игрок следит за состоянием персонажа, исследует мир, добывает ресурсы, строит убежище, выполняет задания и взаимодействует с животными. Проект опубликован на Яндекс Играх и доступен без установки.",
    stack: ["Unity", "C#", "WebGL", "Yandex Games SDK", "Cloud Saves"],
    categories: ["games"],
    links: [{ label: "Играть на Яндекс Играх", href: "https://yandex.ru/games/developer/99978#app=373383" }],
    highlights: [
      "Открытый survival-сценарий: ресурсы, крафт, строительство, охота и рыбалка",
      "Публикация в WebGL, авторизация и облачные сохранения Яндекс Игр",
      "Русская, английская и турецкая локализации"
    ],
    workflow: ["Исследование", "Ресурсы", "Крафт", "Строительство", "Выживание"],
    accent: "green",
    preview: { kind: "game", label: "Игра доступна онлайн" }
  },
  {
    slug: "tower-defense-builder",
    title: "Tower: строительство и защита базы",
    shortTitle: "Tower",
    type: "Законченный Unity-проект",
    summary: "Игровая система строительства базы с сеткой размещения, генераторами ресурсов, турелями, волнами противников и сохранением прогресса.",
    description:
      "Unity-проект вокруг строительства и защиты базы. В кодовой базе выделены системы построек, добычи ресурсов, турелей, состояний противников, волн, уровней, интерфейса, обучения и сохранений.",
    stack: ["Unity", "C#", "State Machine", "Save System", "Yandex SDK"],
    categories: ["games"],
    links: [{ label: "Локальный проект", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Строительство, перемещение и удаление объектов по игровой сетке",
      "Противники со state machine, поиском целей и атакой построек",
      "Ресурсы, уровни, UI, обучение и сохранение игрового состояния"
    ],
    workflow: ["Ресурсы", "Строительство", "Волна", "Защита", "Прогресс"],
    accent: "amber",
    preview: { kind: "game", label: "Unity gameplay systems" }
  },
  {
    slug: "wordset-docx-checker",
    title: "WordSet: проверка и автоисправление DOCX",
    shortTitle: "WordSet",
    type: "Продуктовый fullstack-инструмент",
    summary: "DOCX-first система для проверки академического оформления, безопасных автоисправлений и выдачи отчета по документу.",
    description:
      "Прототип продукта для работы с учебными и академическими документами. Движок разбирает DOCX, проверяет оформление по правилам, формирует список проблем и готовит безопасные исправления, а web shell закрывает сценарий upload -> review -> download.",
    stack: ["Python", "DOCX", "React", "Tests", "Validation"],
    categories: ["fullstack", "automation", "react"],
    links: [{ label: "Локальный проект", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Разбор DOCX и проверка структуры документа",
      "Правила оформления, отчет о проблемах и safe autofix",
      "Тесты и реальные fixtures для проверки движка"
    ],
    workflow: ["Upload", "Parse DOCX", "Validate", "Autofix", "Download"],
    accent: "green",
    preview: { kind: "tool", label: "DOCX validation" }
  },
  {
    slug: "scaner-blogers-dashboard",
    title: "ScanerBlogers: платформа поиска блогеров",
    shortTitle: "ScanerBlogers",
    type: "Fullstack dashboard + worker",
    summary: "Система для поиска и проверки блогеров: Next dashboard, worker, Prisma/SQLite, collectors и e2e-проверки.",
    description:
      "Крупный production-like инструмент вокруг сбора и обработки кандидатов из соцсетей. В проекте есть web-интерфейс, очередь задач, слой БД, worker-процессы, collectors для Instagram/VK/YouTube, Chrome extension и тесты.",
    stack: ["Next.js", "React", "Prisma", "SQLite", "Playwright", "Vitest"],
    categories: ["fullstack", "react", "automation", "extensions"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Архитектура web / worker / core / database",
      "Сбор и нормализация данных из нескольких соцсетей",
      "Интеграционные и e2e-проверки рабочих сценариев"
    ],
    workflow: ["Sources", "Collectors", "Queue", "Database", "Dashboard"],
    accent: "blue",
    preview: { kind: "tool", label: "Social dashboard" }
  },
  {
    slug: "chatplus-cms-portal",
    title: "CHATPLUS: сайт с CMS и контентным workflow",
    shortTitle: "CHATPLUS",
    type: "Production CMS-проект",
    summary: "Production-сайт на Astro и Strapi с AI-генерацией черновиков, human review, Postgres и публикацией на VPS.",
    description:
      "Проект уровня production: публичный сайт собирается на Astro, контент управляется через Strapi, данные и uploads живут на VPS, а отдельные Node-скрипты помогают с импортом, подготовкой и генерацией контентных черновиков.",
    stack: ["Astro", "Strapi", "PostgreSQL", "Node.js", "AI API", "VPS"],
    categories: ["websites", "fullstack", "automation"],
    links: [{ label: "Описание проекта", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Разделение публичного сайта и CMS-админки",
      "AI-задачи по контрактам, human review и управляемая публикация",
      "Production-подход с VPS, uploads и rebuild workflow"
    ],
    workflow: ["CMS", "Content", "Build", "Deploy", "Public site"],
    accent: "cyan",
    preview: { kind: "site", label: "CMS + контент" }
  },
  {
    slug: "ads-transparency-monitor",
    title: "Ads Transparency Monitor",
    shortTitle: "Ads Monitor",
    type: "Private dashboard + worker",
    summary: "Приватный Next.js-сервис для мониторинга рекламных креативов с worker, Postgres и MCP-сервером для AI-агентов.",
    description:
      "Прикладной инструмент для отслеживания рекламных креативов. Next dashboard показывает результаты, worker обрабатывает advertiser jobs, Prisma/Postgres хранят данные, а дополнительные скрипты закрывают проверку и deploy-процесс.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Worker", "Playwright", "MCP"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "Private case", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Очередь заданий для мониторинга рекламодателей",
      "Dashboard для просмотра и проверки найденных креативов",
      "MCP-сервер для Codex и других агентных клиентов"
    ],
    workflow: ["Advertiser", "Scan job", "Worker", "Postgres", "Dashboard"],
    accent: "rose",
    preview: { kind: "tool", label: "Ad intelligence" }
  },
  {
    slug: "private-seo-audit-extension",
    title: "SEO-аудит в Chrome-расширении",
    shortTitle: "SEO Audit",
    type: "Chrome-расширение",
    summary: "Manifest V3 расширение для SEO-аудита страниц, технических проверок, отчета и PDF-выгрузки.",
    description:
      "Chrome/Chromium-расширение для анализа мета-тегов, заголовков, ссылок, изображений, Open Graph, микроразметки и технических SEO-сигналов. Архитектура разделена на content script, background, popup, report page и build/zip сценарии.",
    stack: ["JavaScript", "Manifest V3", "Chrome APIs", "SEO", "PDF"],
    categories: ["extensions", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Сбор SEO-данных из активной страницы",
      "Проверки meta, headings, links, images и Open Graph",
      "Report page, PDF-экспорт и подготовка сборки"
    ],
    workflow: ["Content script", "Background", "Popup", "Report", "PDF"],
    accent: "blue",
    preview: { kind: "extension", label: "SEO scan" }
  },
  {
    slug: "parser-find-price-tg",
    title: "ParserFindPriceTg: мониторинг цен",
    shortTitle: "Price Bot",
    type: "Parser + Telegram + web UI",
    summary: "Система мониторинга цен по магазинам с парсерами, историей, web-интерфейсом и Telegram-уведомлениями.",
    description:
      "Коммерческий прикладной инструмент: парсеры собирают цены, сервисы хранят товары и историю, web UI помогает управлять списком, Telegram отправляет alerts, а Google Sheets используется как интеграционный слой для отчетов.",
    stack: ["Python", "Flask", "SQLAlchemy", "Selenium", "BS4", "Telegram API"],
    categories: ["automation", "bots", "fullstack"],
    links: [{ label: "Архив проекта", href: "https://disk.yandex.ru/d/3c2tb191ALQinw" }],
    highlights: [
      "Сбор цен с внешних страниц и маркетплейсов",
      "История товаров, сравнение и расчет выгодных вариантов",
      "Telegram alerts, web-admin и интеграция с Google Sheets"
    ],
    workflow: ["Parse", "Store", "Compare", "Alert", "Report"],
    accent: "green",
    preview: { kind: "bot", label: "Найдена цена" }
  },
  {
    slug: "stream-tiktok-auction",
    title: "StreamTiktok: аукцион для TikTok LIVE",
    shortTitle: "StreamTiktok",
    type: "Realtime MVP",
    summary: "MVP аукциона для TikTok LIVE Studio: Fastify backend, SQLite, React admin, overlay и логика ставок.",
    description:
      "Интерактивный инструмент для live-стримов. DonationAlerts-события превращаются в ставки, сервер хранит лоты и состояние аукциона, React admin управляет процессом, а overlay выводится в TikTok LIVE Studio.",
    stack: ["Fastify", "React", "TypeScript", "SQLite", "Vitest"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Auction engine со ставками, таймером и лотами",
      "Admin panel для управления live-процессом",
      "Overlay для трансляции и тесты ключевой логики"
    ],
    workflow: ["Donation", "Bid", "Auction", "Admin", "Overlay"],
    accent: "amber",
    preview: { kind: "tool", label: "Live overlay" }
  },
  {
    slug: "site-scorer-review-tool",
    title: "Site Scorer: инструмент ревью сайтов",
    shortTitle: "Site Scorer",
    type: "Internal review tool",
    summary: "FastAPI/Postgres/Playwright приложение для пакетной проверки сайтов из Google Sheets и разметки статусов.",
    description:
      "Внутренний инструмент для обработки больших списков сайтов. Backend и worker берут пачки строк, Playwright захватывает страницы, frontend дает review-интерфейс, а результат возвращается обратно в рабочий процесс.",
    stack: ["FastAPI", "PostgreSQL", "Playwright", "React", "Vite"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "Internal case", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Пакетная обработка списков из Google Sheets",
      "Playwright-захват сайтов и статусов проверки",
      "Review UI для быстрой разметки и контроля качества"
    ],
    workflow: ["Sheet", "Batch", "Capture", "Review", "Sync"],
    accent: "cyan",
    preview: { kind: "tool", label: "Review queue" }
  },
  {
    slug: "fitseek-telegram-mini-app",
    title: "FitSeek: Telegram Mini App для тренеров",
    shortTitle: "FitSeek",
    type: "Telegram Mini App",
    summary: "Mini App для поиска тренеров: React/Vite frontend, FastAPI backend, Telegram bot и база данных.",
    description:
      "Прототип сервиса в Telegram: пользовательский webapp показывает интерфейс поиска, FastAPI отвечает за API и данные, бот связывает mini app с Telegram-сценариями, а отдельная настройка туннеля помогает тестировать backend.",
    stack: ["React", "Vite", "FastAPI", "SQLAlchemy", "Telegram Bot"],
    categories: ["react", "fullstack", "bots"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Telegram Mini App с web-интерфейсом",
      "FastAPI backend и структура данных",
      "Связка bot -> webapp -> API для пользовательского сценария"
    ],
    workflow: ["Telegram", "Mini App", "API", "Database"],
    accent: "green",
    preview: { kind: "bot", label: "Mini App ready" }
  },
  {
    slug: "scaner-frilance-bot",
    title: "ScanerFrilance: бот мониторинга заказов",
    shortTitle: "Freelance Bot",
    type: "Telegram-бот",
    summary: "Бот для мониторинга заказов на freelance-площадках с фильтрами, автотегами и защитой от flood.",
    description:
      "Рабочий Telegram-бот для отслеживания новых заказов. Парсеры собирают свежие предложения, фильтры оставляют релевантное, хэштеги помогают сортировать поток, а механика отправки учитывает ограничения Telegram.",
    stack: ["Python", "aiogram", "aiohttp", "BS4", "Playwright"],
    categories: ["bots", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Мониторинг заказов и новых публикаций",
      "Фильтры, автотеги и хранение просмотренного",
      "Защита от flood и миграции сообщений"
    ],
    workflow: ["Parse", "Filter", "Tag", "Notify"],
    accent: "cyan",
    preview: { kind: "bot", label: "Новый заказ" }
  },
  {
    slug: "panzzi-furniture-website",
    title: "PANZZI: сайт магазина мебели",
    shortTitle: "PANZZI",
    type: "Коммерческий сайт",
    summary: "Сайт для китайского магазина мебели с каталогом, разделами услуг и адаптивной версткой.",
    description:
      "Коммерческий сайт для магазина мебели и поставок из Китая. В проекте собраны основные страницы, визуальные секции, каталог, контакты и адаптивная подача для клиентов.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [{ label: "Открыть сайт", href: "https://panzzi.com/" }],
    highlights: [
      "Адаптивная верстка основных страниц",
      "Каталог и контентные блоки для услуг",
      "Подготовка сайта к публикации на домене"
    ],
    workflow: ["Структура", "Верстка", "Контент", "Публикация"],
    accent: "blue",
    preview: { kind: "site", label: "Каталог мебели" }
  },
  {
    slug: "mustang-driving-school",
    title: "Mustang: сайт автошколы",
    shortTitle: "Mustang",
    type: "Коммерческий сайт",
    summary: "Сайт автошколы с формами заявок и отправкой обращений в Telegram.",
    description:
      "Сайт для автошколы с информационными страницами, адаптивом и PHP-обработчиком заявок. Заявки с формы отправляются в Telegram, чтобы менеджер быстро видел новые обращения.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Telegram API"],
    categories: ["websites", "automation"],
    links: [
      { label: "Открыть сайт", href: "https://mustang-29.ru/" },
      { label: "Пост с примером", href: "https://t.me/alexworktut/4" }
    ],
    highlights: [
      "Верстка страниц автошколы",
      "Форма заявки с PHP-обработчиком",
      "Отправка новых заявок в Telegram"
    ],
    workflow: ["Форма", "PHP", "Telegram", "Менеджер"],
    accent: "cyan",
    preview: { kind: "site", label: "Заявки в Telegram" }
  },
  {
    slug: "course-registration-platform",
    title: "Платформа записи на курсы",
    shortTitle: "Courses",
    type: "Учебный fullstack-проект",
    summary: "React-приложение для записи на курсы с backend на PHP и базой MySQL.",
    description:
      "Учебная система регистрации на курс с интерфейсом пользователя и административной частью. Проект показывает связку frontend, backend API и базы данных.",
    stack: ["React", "Vite", "PHP", "MySQL", "REST API"],
    categories: ["react", "fullstack"],
    links: [{ label: "Пост с примером", href: "https://t.me/alexworktut/2" }],
    highlights: [
      "React-интерфейс с маршрутизацией",
      "PHP API для заявок и авторизации",
      "MySQL-структура для хранения данных"
    ],
    workflow: ["React UI", "REST API", "PHP", "MySQL"],
    accent: "green",
    preview: { kind: "tool", label: "Личный кабинет" }
  },
  {
    slug: "token-audit-trading-assistant",
    title: "Ассистент аудита токенов",
    shortTitle: "Token Audit",
    type: "Сложный pet-проект",
    summary: "Сканер и плагин для анализа мемкоинов с аудитом токенов и web-интерфейсом.",
    description:
      "Экспериментальный проект вокруг анализа токенов: расширение, сбор данных, аудит сигналов, серверная часть и интерфейс для просмотра результатов.",
    stack: ["Node.js", "Playwright", "React", "PostgreSQL"],
    categories: ["extensions", "react", "fullstack", "automation"],
    links: [{ label: "Пост с примером", href: "https://t.me/alexworktut/5" }],
    highlights: [
      "Автоматизация браузера через Playwright",
      "Сбор и хранение данных",
      "Web-интерфейс для анализа"
    ],
    workflow: ["Scan", "Audit", "Database", "Dashboard"],
    accent: "rose",
    preview: { kind: "tool", label: "Аудит токена" }
  },
  {
    slug: "fitness-coach-landing",
    title: "Сайт-визитка фитнес-тренера",
    shortTitle: "Fitness",
    type: "Сайт-визитка",
    summary: "Сайт-визитка для фитнес-тренера с презентацией услуг и контактами.",
    description:
      "Лендинг для персонального тренера: первый экран, услуги, преимущества, контакты и адаптивная структура для публикации на GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/sharipculov/" }],
    highlights: [
      "Визуальная посадочная страница",
      "Адаптивные секции и навигация",
      "Публикация через GitHub Pages"
    ],
    workflow: ["Контент", "Верстка", "Адаптив", "GitHub Pages"],
    accent: "amber",
    preview: { kind: "site", label: "Личный бренд" }
  },
  {
    slug: "driving-test-auto-booking",
    title: "Сервис автоматического бронирования экзаменов",
    shortTitle: "Auto Booking",
    type: "Приватный fullstack-сервис",
    summary: "Интерфейс и защищённый пользовательский поток для автоматического поиска свободных слотов и подтверждения бронирования.",
    description:
      "Приватный англоязычный сервис с приглашениями, onboarding, подключением аккаунта, настройкой центров и предпочтений, мониторингом поиска и подтверждением найденного слота. Frontend работает только через same-origin BFF и не получает сервисные токены или внешние учётные данные.",
    stack: ["TypeScript", "Vite", "BFF", "WebSocket", "CSRF", "Docker"],
    categories: ["fullstack", "automation"],
    links: [],
    highlights: [
      "Безопасный пользовательский поток с одноразовыми приглашениями и HttpOnly-сессиями",
      "Автоматический поиск слотов, мониторинг и подтверждение бронирования",
      "Production routing, WebSocket viewer и разделение пользовательской и административной частей"
    ],
    workflow: ["Invitation", "Account", "Search", "Monitor", "Confirm"],
    accent: "cyan",
    preview: { kind: "tool", label: "Private booking service" }
  }
];

const hiddenProjectSlugs = new Set(["wordset-docx-checker", "scaner-blogers-dashboard"]);

export const projects = projectCatalog.filter((project) => !hiddenProjectSlugs.has(project.slug));

export const featuredProjectSlugs = [
  "ads-transparency-monitor",
  "chatplus-cms-portal",
  "driving-test-auto-booking",
  "mystery-forest-survival",
  "panzzi-furniture-website",
  "mustang-driving-school",
  "private-seo-audit-extension"
] as const;

export const projectDetails: Record<string, ProjectDetails> = {
  "mystery-forest-survival": {
    period: "2024 — сейчас онлайн",
    status: "Production",
    role: "Unity-разработка, игровые системы и публикация WebGL",
    challenge: "Нужно было собрать связный survival-мир, где исследование, состояние персонажа, ресурсы, крафт и строительство работают как единая игровая петля и сохраняются между сессиями.",
    solution: "Игровые механики объединены в открытый сценарий выживания, проект подготовлен под WebGL и интегрирован с Яндекс Играми: авторизация, облачные сохранения и локализации.",
    outcome: "Игра выпущена 1 ноября 2024 года, остаётся доступной игрокам на Яндекс Играх и имеет пользовательский рейтинг 4.0.",
    image: "/games/mystery-forest-cover.webp",
    imageAlt: "Обложка игры Выживание: Загадочный Лес"
  },
  "tower-defense-builder": {
    period: "Unity-глава",
    status: "Законченный проект",
    role: "Архитектура и реализация gameplay-систем на C#",
    challenge: "Строительство, экономика и волны противников требуют нескольких связанных систем, которые должны корректно переживать смену уровней и сохранение состояния.",
    solution: "Логика разделена на здания и сетку, добычу ресурсов, турели, состояния противников, спавнеры, уровни, UI и отдельный слой сохранений.",
    outcome: "Собран законченный игровой прототип с полноценной петлёй строительство → добыча → волна → защита → развитие."
  },
  "wordset-docx-checker": {
    period: "2026",
    status: "Прототип",
    role: "Продуктовая архитектура, Python-движок и web shell",
    challenge: "Проверка DOCX требует работать не только с текстом, но и со структурой документа, стилями, таблицами и безопасными изменениями без повреждения исходного файла.",
    solution: "Разделил систему на разбор документа, набор проверяемых правил, план безопасных исправлений и web-сценарий upload → review → download. Реальные fixtures и тесты помогают проверять движок на разных документах.",
    outcome: "Собран цельный DOCX-first прототип, который находит проблемы оформления, объясняет их пользователю и подготавливает контролируемые автоисправления.",
    image: "/projects/wordset.png",
    imageAlt: "Знак продукта WordSet"
  },
  "scaner-blogers-dashboard": {
    period: "2025–2026",
    status: "Рабочий инструмент",
    role: "Fullstack-разработка dashboard, worker и collectors",
    challenge: "Нужно объединить сбор кандидатов из нескольких соцсетей, разные способы авторизации, очереди задач и единый интерфейс проверки данных.",
    solution: "Построил архитектуру web / worker / core / database, добавил collectors для Instagram, VK и YouTube, управление ключевыми словами, статусами и экспортом результатов.",
    outcome: "Получился production-like инструмент с единой базой кандидатов, управляемыми сборами и проверяемыми рабочими сценариями.",
    image: "/projects/scaner-blogers.png",
    imageAlt: "Интерфейс управления ключевыми словами ScanerBlogers"
  },
  "chatplus-cms-portal": {
    period: "2025–2026",
    status: "Production",
    role: "Публичный сайт, CMS-архитектура и контентный workflow",
    challenge: "Контентной команде требовался управляемый портал, где публикация материалов, загрузки и подготовка черновиков не зависят от ручной правки сайта.",
    solution: "Разделил публичный Astro-сайт и Strapi CMS, подключил PostgreSQL и uploads на VPS, добавил Node.js-сценарии импорта, подготовки и генерации черновиков.",
    outcome: "Собрана production-система с отдельной CMS, воспроизводимой публикацией и контентным pipeline вместо ручных обновлений страниц.",
    image: "/projects/chatplus.png",
    imageAlt: "Презентационная карточка платформы Chat Plus"
  },
  "driving-test-auto-booking": {
    period: "2026",
    status: "Production",
    role: "Frontend, безопасный пользовательский поток и production routing",
    challenge: "Пользователю нужен понятный интерфейс для подключения аккаунта, настройки поиска и подтверждения найденного слота, при этом чувствительные данные не должны попадать во frontend.",
    solution: "Собрал англоязычный TypeScript-интерфейс с одноразовыми приглашениями, onboarding, консолью мониторинга и same-origin BFF-контрактом. Сервисные токены и внешние учётные данные остаются на серверной стороне.",
    outcome: "Получился приватный production-ready поток от приглашения и настройки поиска до мониторинга и подтверждения бронирования."
  },
  "ads-transparency-monitor": {
    period: "2026",
    status: "Рабочий инструмент",
    role: "Dashboard, очередь сканирования, база и deploy-сценарии",
    challenge: "Рекламные креативы нужно регулярно собирать, нормализовать и отслеживать по рекламодателям без ручного обхода Google Ads Transparency Center.",
    solution: "Собрал приватный Next.js dashboard, worker с очередью заданий, слой Prisma/PostgreSQL и отдельные сценарии проверки и публикации.",
    outcome: "Пользователь управляет рекламодателями и сканированиями из одного интерфейса, а история и найденные креативы сохраняются для дальнейшего анализа.",
    image: "/projects/ads-monitor.png",
    imageAlt: "Дашборд Ads Transparency Monitor"
  },
  "private-seo-audit-extension": {
    period: "2025",
    status: "Рабочий инструмент",
    role: "Архитектура расширения, SEO-проверки и отчёт",
    challenge: "SEO-специалисту нужен быстрый аудит прямо на открытой странице без переключения между несколькими внешними сервисами.",
    solution: "Разделил расширение на content script, background, popup и report page; добавил проверки meta, headings, links, images, Open Graph и выгрузку отчёта.",
    outcome: "Получился автономный Manifest V3-инструмент, который собирает основные SEO-сигналы и упаковывает их в понятный отчёт.",
    image: "/projects/seo-audit.png",
    imageAlt: "Иконка расширения SEO Audit"
  },
  "parser-find-price-tg": {
    period: "2024–2025",
    status: "Рабочий инструмент",
    role: "Парсеры, web-интерфейс и Telegram-уведомления",
    challenge: "Цены на одни и те же товары меняются в разных магазинах, а ручная проверка не масштабируется и не сохраняет историю.",
    solution: "Связал парсеры магазинов, Flask API, хранение товаров и истории, web UI для управления и Telegram-оповещения об изменениях.",
    outcome: "Система регулярно проверяет позиции, фиксирует динамику и доставляет полезные изменения в Telegram без ручного мониторинга.",
    imageAlt: "Схема инструмента мониторинга цен"
  },
  "stream-tiktok-auction": {
    period: "2025",
    status: "MVP",
    role: "Backend, логика аукциона, admin и overlay",
    challenge: "Пожертвования во время трансляции нужно превратить в понятный зрителям аукцион с таймером, ставками и сменой лотов.",
    solution: "Собрал Fastify backend, хранение состояния в SQLite, React-панель управления и отдельный overlay для TikTok LIVE Studio.",
    outcome: "MVP закрывает полный live-сценарий от события DonationAlerts до обновления ставки и показа результата в трансляции."
  },
  "site-scorer-review-tool": {
    period: "2026",
    status: "Прототип",
    role: "Fullstack-приложение и автоматизация review-процесса",
    challenge: "Большие списки сайтов из Google Sheets неудобно открывать, проверять и размечать вручную по одному.",
    solution: "Собрал пакетную обработку строк, Playwright-захват страниц, очередь и React-интерфейс для быстрой проверки и синхронизации статусов.",
    outcome: "Ручной процесс превратился в последовательную review-очередь с подготовленными данными и единым экраном контроля."
  },
  "fitseek-telegram-mini-app": {
    period: "2024",
    status: "Прототип",
    role: "Telegram Mini App, API и структура данных",
    challenge: "Нужно было перенести поиск тренеров в привычный Telegram-сценарий без отдельной установки приложения.",
    solution: "Связал React/Vite webapp, FastAPI backend, Telegram-бота и базу данных через единый пользовательский поток.",
    outcome: "Собран проверяемый прототип Mini App с поисковым интерфейсом и полноценной связкой bot → webapp → API."
  },
  "scaner-frilance-bot": {
    period: "2024–2025",
    status: "Рабочий инструмент",
    role: "Парсеры, фильтры и Telegram workflow",
    challenge: "Новые заказы быстро теряются в общем потоке фриланс-площадок, а частый опрос создаёт дубли и ограничения отправки.",
    solution: "Добавил асинхронный сбор, фильтрацию, автохэштеги, хранение просмотренного и контролируемую отправку сообщений.",
    outcome: "Бот формирует чистый поток релевантных заказов и экономит время на повторном просмотре площадок."
  },
  "panzzi-furniture-website": {
    period: "2025–2026",
    status: "Production",
    role: "Структура, frontend и публикация",
    challenge: "Нужно было представить мебельный бизнес и направление запуска проектов в Китае в одном последовательном коммерческом сайте.",
    solution: "Собрал многостраничную структуру, каталог, сервисные разделы и адаптивную подачу с отдельным China entry-направлением.",
    outcome: "Рабочий сайт опубликован на домене и используется как коммерческая витрина услуг и проектов.",
    image: "/projects/panzzi.png",
    imageAlt: "Страница направления запуска проектов PANZZI"
  },
  "mustang-driving-school": {
    period: "2024",
    status: "Production",
    role: "Frontend, формы заявок и интеграция Telegram",
    challenge: "Автошколе нужен был понятный адаптивный сайт, который не только рассказывает об обучении, но и собирает обращения.",
    solution: "Собрал информационные страницы, формы с PHP-обработчиком, отправку обращений в Telegram и базовую SEO-подготовку.",
    outcome: "Сайт опубликован на рабочем домене, а новые заявки сразу попадают менеджеру в привычный канал.",
    image: "/projects/mustang.jpg",
    imageAlt: "Учебный класс автошколы Mustang"
  },
  "course-registration-platform": {
    period: "2024",
    status: "Учебный проект",
    role: "Frontend, PHP API и MySQL",
    challenge: "Нужно было реализовать полный сценарий записи на курсы с авторизацией, пользовательской и административной частью.",
    solution: "Связал React-интерфейс, маршрутизацию, PHP REST API и структуру MySQL для пользователей и заявок.",
    outcome: "Проект демонстрирует базовую fullstack-связку и разделение пользовательских и административных сценариев."
  },
  "token-audit-trading-assistant": {
    period: "2024–2025",
    status: "Прототип",
    role: "Сбор данных, аудит сигналов и web-интерфейс",
    challenge: "Данные о токенах приходят из нескольких источников и требуют быстрой нормализации перед ручной оценкой.",
    solution: "Объединил браузерную автоматизацию, серверную обработку, хранение результатов и React-интерфейс анализа.",
    outcome: "Собран исследовательский прототип, на котором можно проверять сценарии сбора и аудита сигналов."
  },
  "fitness-coach-landing": {
    period: "2023",
    status: "Production",
    role: "Дизайн структуры, адаптивная верстка и публикация",
    challenge: "Персональному тренеру требовалась компактная страница с понятным предложением, услугами и быстрым контактом.",
    solution: "Собрал посадочную страницу с последовательными секциями, адаптивной навигацией и акцентом на обращение к тренеру.",
    outcome: "Готовая страница опубликована через GitHub Pages и работает как простая персональная витрина."
  }
};

export function getProjectDetails(project: Project): ProjectDetails {
  return projectDetails[project.slug] ?? {
    period: "2024–2026",
    status: "Прототип",
    role: "Проектирование и разработка",
    challenge: project.summary,
    solution: project.description,
    outcome: project.highlights.join(". ")
  };
}

export const reviews = [
  {
    title: "Парсер для ЯМ",
    author: "Restup2021",
    text:
      "Задача оказалась намного сложнее, чем была в начале. Но Алексей с ней справился. Спасибо за хорошую работу!"
  },
  {
    title: "Доработка парсера",
    author: "appmasters",
    text: "Делал заказ второй раз. Работа была выполнена оперативно и качественно, рекомендую."
  },
  {
    title: "Парсер для иностранного сайта",
    author: "appmasters",
    text:
      "Исполнитель отлично справился с заданием, реализовал парсер как договаривались, все правки и доработки были реализованы качественно."
  },
  {
    title: "Парсер для маркетплейсов",
    author: "Restup2021",
    text:
      "Алексей - очень ответственный и грамотный программист. Спокойно дорабатывал правки, работал аккуратно и вдумчиво, всегда был на связи."
  }
];

export const skillGroups = [
  { title: "Web", skills: ["Next.js", "Astro", "React", "TypeScript", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "Python", "FastAPI", "PHP", "REST API"] },
  { title: "Databases", skills: ["SQL", "SQLite", "MySQL", "PostgreSQL"] },
  { title: "AI & Agents", skills: ["LLM API", "MCP", "Agent workflows", "Structured prompts", "Human review"] },
  { title: "Automation", skills: ["Parsing", "Playwright", "Workers", "Telegram API", "Chrome Extensions"] },
  { title: "Game development", skills: ["Unity", "C#", "Gameplay systems", "WebGL", "Yandex Games SDK"] }
];
