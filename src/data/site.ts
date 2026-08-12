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
  role: "Fullstack / AI Product Engineer",
  telegram: "https://t.me/leshaqt",
  github: "https://github.com/ValkoHappy",
  vk: "https://vk.ru/alexvalkoov",
  instagram: "https://www.instagram.com/leshaqt/",
  kwork: "https://kwork.ru/user/leshaqt",
  location: "Архангельск",
  summary:
    "Разрабатываю веб-приложения, внутренние сервисы, автоматизацию и AI-инструменты. Работаю с Next.js, Astro, React, Node.js и Python; также выпускаю игры на Unity."
};

export const stats = [
  { value: "18", label: "разобранных кейсов" },
  { value: "10+", label: "коммерческих заказов" },
  { value: "5.0", label: "рейтинг продавца" },
  { value: "60%", label: "повторных заказов" }
];

export const focusItems = [
  {
    title: "Сайты и сервисы",
    text: "Соберу понятный клиентский сайт, личный кабинет, внутренний сервис или CMS — от структуры до рабочего запуска."
  },
  {
    title: "Автоматизация процессов",
    text: "Уберу повторяющуюся ручную работу: сбор и обработку данных, уведомления, отчёты и обмен между сервисами."
  },
  {
    title: "AI-интеграции",
    text: "Добавлю AI в существующий продукт или соберу отдельный инструмент с контролируемым сценарием и проверкой результата."
  },
  {
    title: "Игровые системы",
    text: "Разработаю механику, интерфейс или отдельную систему для Unity-проекта и подготовлю её к интеграции в игру."
  }
];

export const aboutOverview = {
  heading: "Алексей Вальков, разработчик из Архангельска",
  paragraphs: [
    "Беру задачу от первого разбора до запуска: уточняю требования, показываю промежуточный результат и заранее объясняю технические ограничения.",
    "Могу сделать решение целиком или подключиться к существующей команде на отдельную часть. В работе ценю прямую коммуникацию, короткие итерации и результат, который можно проверить."
  ],
  pathLabel: "Формат работы",
  pathTitle: "Удалённо · проектно · в команде",
  pathText:
    "Рассматриваю заказы, долгосрочное сотрудничество и предложения о работе. Перед стартом фиксирую задачу, этапы и критерии готовности."
};

export const aboutPrinciples = [
  {
    title: "Сначала задача",
    text: "Сначала разбираюсь, что должно измениться для пользователя или бизнеса, и только потом выбираю реализацию."
  },
  {
    title: "Видимый прогресс",
    text: "Делю работу на понятные этапы и регулярно показываю то, что уже можно открыть, проверить и обсудить."
  },
  {
    title: "Поддерживаемый результат",
    text: "Оставляю аккуратный код, понятную структуру и решение, которое можно развивать после первого релиза."
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
    title: "Конструктор базы и защита от волн",
    shortTitle: "Base Defense",
    type: "Законченный игровой прототип",
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
    title: "Контентная платформа для омниканального сервиса",
    shortTitle: "CHATPLUS",
    type: "Production-контентная платформа",
    summary: "Публичный Astro-сайт и Strapi CMS с управляемыми AI-черновиками, редакторским согласованием и публикацией через VPS-контур.",
    description:
      "Production-платформа для большого продуктового сайта: Astro отвечает за маршруты и статическую сборку, Strapi — за страницы, справочники и редакторский интерфейс. AI заполняет только заранее подготовленные структуры, после чего редактор проверяет preview и вручную допускает материал к публикации.",
    stack: ["Astro", "Strapi", "PostgreSQL", "Node.js", "AI API", "VPS"],
    categories: ["websites", "fullstack", "automation"],
    links: [{ label: "Описание проекта", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Astro-портал, Strapi 5, Postgres, uploads и nginx на VPS",
      "AI Generation Jobs с target page, проверкой сущностей и обязательным human review",
      "Webhook/rebuild/deploy flow, content snapshots, импорт и автоматические проверки качества"
    ],
    workflow: ["CMS", "Content", "Build", "Deploy", "Public site"],
    accent: "cyan",
    preview: { kind: "site", label: "CMS + контент" }
  },
  {
    slug: "ads-transparency-monitor",
    title: "Мониторинг рекламных креативов",
    shortTitle: "Ads Monitor",
    type: "Приватная аналитическая система",
    summary: "Система регулярного сбора Google Ads-креативов: защищённый dashboard, очередь сканирований, worker, Postgres и MCP-доступ для агентов.",
    description:
      "Монорепозиторий из web-приложения, scan worker, MCP-сервера и общих пакетов. Администратор управляет рекламодателями и очередью, worker собирает detail/preview-данные, база хранит историю, а MCP выдаёт проверенные данные агентным клиентам.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Worker", "Playwright", "MCP"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "Private case", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Очередь advertiser jobs, bounded concurrency и история запусков",
      "Next.js dashboard с рекламодателями, креативами, экспортом и статусами ошибок",
      "Prisma/Postgres, MCP endpoint, unit/integration/e2e проверки и Docker deploy"
    ],
    workflow: ["Advertiser", "Scan job", "Worker", "Postgres", "Dashboard"],
    accent: "rose",
    preview: { kind: "tool", label: "Ad intelligence" }
  },
  {
    slug: "private-seo-audit-extension",
    title: "PrivateSEO — аудит страницы в браузере",
    shortTitle: "PrivateSEO",
    type: "Chrome-расширение с AI-анализом",
    summary: "Manifest V3-инструмент для SEO, technical и GEO-аудита открытой страницы, AI-рекомендаций и PDF-отчёта.",
    description:
      "Расширение собирает SEO-сигналы прямо из активной вкладки, дополняет их сетевыми проверками через service worker и показывает результат в модульном popup. AI-ключ не попадает в клиент: запросы идут через Yandex Cloud Function к внешней модели.",
    stack: ["JavaScript", "Manifest V3", "Chrome APIs", "SEO", "PDF"],
    categories: ["extensions", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Meta, headings, canonical, robots, hreflang, ссылки, изображения, JSON-LD и Web Vitals",
      "AI-оценка, генерация мета-тегов, intent/LSI и анализ переспама через защищённый proxy",
      "Отдельная report page, PDF-экспорт и воспроизводимая Chrome release-сборка"
    ],
    workflow: ["Content script", "Background", "Popup", "Report", "PDF"],
    accent: "blue",
    preview: { kind: "extension", label: "SEO scan" }
  },
  {
    slug: "parser-find-price-tg",
    title: "Мониторинг цен и уведомления о скидках",
    shortTitle: "Price Monitor",
    type: "Система автоматизации мониторинга",
    summary: "Регулярная проверка цен более чем в десяти магазинах с историей, менеджерским web-интерфейсом и Telegram-уведомлениями.",
    description:
      "Python-сервис объединяет отдельные адаптеры магазинов, планировщик проверок, базу товаров и цен, web API и Telegram-бота. Менеджеры работают в отдельных темах Telegram, а товары можно загружать через Excel и Google Sheets.",
    stack: ["Python", "Flask", "SQLAlchemy", "Selenium", "BS4", "Telegram API"],
    categories: ["automation", "bots", "fullstack"],
    links: [{ label: "Архив проекта", href: "https://disk.yandex.ru/d/3c2tb191ALQinw" }],
    highlights: [
      "10+ источников, включая маркетплейсы, Selenium/stealth и обычный HTTP parsing",
      "История цены, расписание APScheduler, статистика и JWT-доступ к web-интерфейсу",
      "Уведомления о снижении цены, темы для менеджеров, Excel и Google Sheets"
    ],
    workflow: ["Parse", "Store", "Compare", "Alert", "Report"],
    accent: "green",
    preview: { kind: "bot", label: "Найдена цена" }
  },
  {
    slug: "stream-tiktok-auction",
    title: "Аукцион донатов для TikTok LIVE",
    shortTitle: "Live Auction",
    type: "Realtime-система для трансляций",
    summary: "DonationAlerts-донаты превращаются в ставки по Roblox-никам, а ведущий управляет аукционом через React-панель и live overlay.",
    description:
      "Локальная система для двухкомпьютерной трансляции: Fastify хранит состояние аукциона в SQLite, React admin управляет лотами и никами, а отдельный URL используется как web source в TikTok LIVE Studio.",
    stack: ["Fastify", "React", "TypeScript", "SQLite", "Vitest"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "GitHub", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Суммирование донатов по Roblox-нику, tie-break и ручное исправление имени",
      "Таймер с продлением, лоты, dev-события и сохранение состояния в SQLite",
      "React admin и отдельный overlay для TikTok LIVE Studio по локальной сети"
    ],
    workflow: ["Donation", "Bid", "Auction", "Admin", "Overlay"],
    accent: "amber",
    preview: { kind: "tool", label: "Live overlay" }
  },
  {
    slug: "site-scorer-review-tool",
    title: "Очередь аудита сайтов из Google Sheets",
    shortTitle: "Review Queue",
    type: "Внутренний инструмент проверки",
    summary: "Пакетная обработка таблиц по 50/100/200 строк: фоновый захват сайтов, ручной scoring и синхронизация статусов обратно в Google Sheets.",
    description:
      "Google Sheet используется как исходная очередь, а Postgres — как рабочее состояние приложения. FastAPI и отдельный worker готовят следующую пачку, Playwright снимает страницы, React-интерфейс помогает быстро оценивать их и формировать CRM copy package.",
    stack: ["FastAPI", "PostgreSQL", "Playwright", "React", "Vite"],
    categories: ["fullstack", "react", "automation"],
    links: [{ label: "Internal case", href: "https://github.com/ValkoHappy" }],
    highlights: [
      "Full sync таблицы без предварительного создания тысяч review-задач",
      "Фоновые Playwright captures, очереди ARQ/Redis и Postgres migrations",
      "Плотный React review UI, ручной scoring и обратная запись статуса в Sheet"
    ],
    workflow: ["Sheet", "Batch", "Capture", "Review", "Sync"],
    accent: "cyan",
    preview: { kind: "tool", label: "Review queue" }
  },
  {
    slug: "fitseek-telegram-mini-app",
    title: "Поиск тренеров внутри Telegram",
    shortTitle: "Trainer Search",
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
    title: "Агрегатор фриланс-заказов в Telegram",
    shortTitle: "Order Feed",
    type: "Рабочий Telegram-агрегатор",
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
    title: "Мультиязычная витрина мебели и услуг в Китае",
    shortTitle: "PANZZI",
    type: "Коммерческий сайт",
    summary: "Мультиязычный коммерческий сайт с каталогом, интерактивными картами, портфолио и отдельным направлением запуска бизнеса в Китае.",
    description:
      "Коммерческий сайт PANZZI объединяет мебель, освещение, материалы, проекты и услуги сопровождения в Китае. Каталог использует интерактивные карты с hotspot-превью, а контент и навигация поддерживают RU/EN/ZH.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [{ label: "Открыть сайт", href: "https://panzzi.com/" }],
    highlights: [
      "Каталог с интерактивными hotspot-картами и галереями категорий",
      "RU/EN/ZH, отдельный China Entry flow и коммерческие CTA",
      "Адаптивная многостраничная верстка, портфолио проектов и публикация на домене"
    ],
    workflow: ["Структура", "Верстка", "Контент", "Публикация"],
    accent: "blue",
    preview: { kind: "site", label: "Каталог мебели" }
  },
  {
    slug: "mustang-driving-school",
    title: "Сайт автошколы с обработкой заявок",
    shortTitle: "Mustang",
    type: "Коммерческий сайт",
    summary: "Коммерческий сайт автошколы: страницы обучения, формы заявок, Telegram-доставка обращений и техническая SEO-подготовка.",
    description:
      "Многостраничный сайт автошколы с программами обучения, юридическими страницами и формами. PHP API валидирует обращения и отправляет их менеджеру в Telegram; robots.txt, sitemap, verification-файлы и серверные правила подготовлены для рабочего домена.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Telegram API"],
    categories: ["websites", "automation"],
    links: [
      { label: "Открыть сайт", href: "https://mustang-29.ru/" },
      { label: "Пост с примером", href: "https://t.me/alexworktut/4" }
    ],
    highlights: [
      "Адаптивная главная и отдельная страница об образовательной программе",
      "PHP endpoint для заявок, валидация и Telegram API",
      "Sitemap, robots, верификация поисковиков, privacy/offer и deploy под reg.ru"
    ],
    workflow: ["Форма", "PHP", "Telegram", "Менеджер"],
    accent: "cyan",
    preview: { kind: "site", label: "Заявки в Telegram" }
  },
  {
    slug: "course-registration-platform",
    title: "Личный кабинет участника курса",
    shortTitle: "Course Cabinet",
    type: "Учебный fullstack-проект",
    summary: "Учебное React-приложение с регистрацией, авторизацией, подачей заявок и отдельным административным сценарием на PHP/MySQL.",
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
    title: "Исследовательская платформа для мемкоинов",
    shortTitle: "Token Intelligence",
    type: "Research / paper-trading платформа",
    summary: "Надстройка над GMGN для сбора данных, replay, анализа кошельков и разработчиков, risk intelligence и проверяемых demo-решений без реальных сделок.",
    description:
      "Большая исследовательская система, где GMGN остаётся рыночным терминалом, а локальный стек добавляет память, collectors, replay и слой принятия решений. Внутри есть Chrome extension, data server, dashboard и отдельный browser audit service.",
    stack: ["Node.js", "Chrome Extension", "React", "PostgreSQL", "Playwright", "Python"],
    categories: ["extensions", "react", "fullstack", "automation"],
    links: [{ label: "Пост с примером", href: "https://t.me/alexworktut/5" }],
    highlights: [
      "Wallet/developer intelligence, token replay, coverage и risk verdicts",
      "Chrome extension, collectors, API, Postgres и operations dashboard",
      "Demo/paper decisions, тесты lifecycle и явный запрет реальных swaps/private keys"
    ],
    workflow: ["Scan", "Audit", "Database", "Dashboard"],
    accent: "rose",
    preview: { kind: "tool", label: "Аудит токена" }
  },
  {
    slug: "fitness-coach-landing",
    title: "Персональный сайт фитнес-тренера",
    shortTitle: "Coach Portfolio",
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
    slug: "used-car-showroom",
    title: "Витрина автосалона с каталогом автомобилей",
    shortTitle: "Auto Showroom",
    type: "Сайт автосалона",
    summary: "Сайт автосалона с крупной промо-витриной, навигацией по каталогу, услугам, отзывам и контактам.",
    description:
      "Архивный frontend-проект для автосалона. Главная страница построена вокруг полноэкранного промо-слайдера с предложениями, а навигация ведёт к информации о компании, каталогу автомобилей, услугам, отзывам и контактам.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [],
    highlights: [
      "Полноэкранная промо-витрина автомобилей",
      "Структура под каталог, услуги, отзывы и контакты",
      "Контрастная навигация и заметный сценарий перехода к предложению"
    ],
    workflow: ["Структура", "Витрина", "Каталог", "Контакты"],
    accent: "amber",
    preview: { kind: "site", label: "Автомобильная витрина" }
  },
  {
    slug: "funpay-price-sniper",
    title: "Снайпер цен FunPay с Telegram-алертами",
    shortTitle: "FunPay Sniper",
    type: "Система мониторинга и уведомлений",
    summary: "Автономный инструмент, который отслеживает предложения FunPay, применяет пользовательские правила и отправляет подходящие находки в Telegram.",
    description:
      "Система мониторинга лотов FunPay с отдельным backend, web-интерфейсом настроек и Telegram-уведомлениями. Парсер нормализует названия и цены, правила снайпера отбирают выгодные предложения, а уведомление сразу передаёт цену, доходность, отклонение от ориентира и ссылку на покупку.",
    stack: ["Python", "FastAPI", "React", "Telegram API", "Tests"],
    categories: ["automation", "bots", "fullstack", "react"],
    links: [],
    highlights: [
      "Параллельный мониторинг лотов FunPay и нормализация данных",
      "Настраиваемые правила снайпера и отдельная маршрутизация приоритетных находок",
      "React-интерфейс, FastAPI и Telegram-алерты с прямой ссылкой на предложение"
    ],
    workflow: ["Scan", "Normalize", "Rules", "Telegram alert"],
    accent: "rose",
    preview: { kind: "bot", label: "Выгодное предложение" }
  },
  {
    slug: "driving-test-auto-booking",
    title: "DriveAlerts — поиск слотов экзамена RSA",
    shortTitle: "DriveAlerts",
    type: "Защищённая production-система",
    summary: "Многоуровневая система мониторинга отменённых слотов RSA Ireland: participant frontend, BFF, durable workers и контролируемое подтверждение бронирования.",
    description:
      "Frontend закрывает приглашение, onboarding, подключение RSA-аккаунта, фильтры поиска и подтверждение результата. За ним работает отдельный production-oriented backend: typed RSA client, PostgreSQL jobs, monitoring/booking workers, encrypted session storage, mock RSA и защищённый beta portal.",
    stack: ["TypeScript", "React", "Vite", "BFF", "PostgreSQL", "WebSocket", "Docker"],
    categories: ["fullstack", "automation"],
    links: [],
    highlights: [
      "Одноразовые приглашения, HttpOnly session, CSRF/Origin/role checks и same-origin BFF",
      "Typed RSA client, durable monitoring/booking workflows, PostgreSQL scheduling и recovery сценарии",
      "Mock RSA, load/restore/security drills, защищённый WebSocket viewer и staged live gates"
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
    image: "/projects/mystery-forest-yandex.webp",
    imageAlt: "Страница игры Выживание: Загадочный Лес на Яндекс Играх"
  },
  "tower-defense-builder": {
    period: "Unity-глава",
    status: "Законченный проект",
    role: "Архитектура и реализация gameplay-систем на C#",
    challenge: "Строительство, экономика и волны противников требуют нескольких связанных систем, которые должны корректно переживать смену уровней и сохранение состояния.",
    solution: "Логика разделена на здания и сетку, добычу ресурсов, турели, состояния противников, спавнеры, уровни, UI и отдельный слой сохранений.",
    outcome: "Собран законченный игровой прототип с полноценной петлёй строительство → добыча → волна → защита → развитие.",
    image: "/projects/base-defense.webp",
    imageAlt: "Главное меню Unity-игры Построй и защити базу"
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
    role: "Astro-портал, Strapi-модель, AI workflow и production-публикация",
    challenge: "Контентной команде требовался управляемый портал, где публикация материалов, загрузки и подготовка черновиков не зависят от ручной правки сайта.",
    solution: "Разделил Astro-портал и Strapi CMS, описал page contracts и справочники, подключил PostgreSQL/uploads и управляемые AI Generation Jobs с preview и редакторским approval.",
    outcome: "Платформа работает на VPS: редактор управляет страницами через Strapi, AI готовит контролируемые черновики, а webhook запускает проверяемую пересборку и публикацию.",
    image: "/projects/chatplus.webp",
    imageAlt: "Главная страница платформы Chat Plus"
  },
  "driving-test-auto-booking": {
    period: "2026",
    status: "Production",
    role: "Participant frontend, BFF-контракт, backend workflows и production hardening",
    challenge: "Пользователю нужен понятный интерфейс для подключения аккаунта, настройки поиска и подтверждения найденного слота, при этом чувствительные данные не должны попадать во frontend.",
    solution: "Связал React frontend с same-origin BFF, typed RSA client, PostgreSQL jobs, monitoring/booking workers, encrypted session ingestion, mock RSA и защищённым beta portal.",
    outcome: "Собран полный production-oriented контур с безопасным пользовательским сценарием, recovery/runbook-процедурами и отдельными гейтами перед реальными booking-операциями.",
    image: "/projects/drivealerts.webp",
    imageAlt: "Интерфейс автоматического бронирования DriveAlerts"
  },
  "ads-transparency-monitor": {
    period: "2026",
    status: "Рабочий инструмент",
    role: "Монорепозиторий: dashboard, scan worker, MCP, база и deploy",
    challenge: "Рекламные креативы нужно регулярно собирать, нормализовать и отслеживать по рекламодателям без ручного обхода Google Ads Transparency Center.",
    solution: "Разделил систему на Next.js web, worker, MCP server, core parsers и Prisma/Postgres package; добавил очередь, статусы, экспорт и production deploy scripts.",
    outcome: "Система хранит рекламодателей, креативы и историю сканирований; оператор видит покрытие и ошибки, а агентные клиенты получают данные через MCP.",
    image: "/projects/ads-transparency.webp",
    imageAlt: "Дашборд Ads Transparency Monitor"
  },
  "private-seo-audit-extension": {
    period: "2025",
    status: "Рабочий инструмент",
    role: "Архитектура расширения, SEO/GEO-проверки, AI proxy и отчёт",
    challenge: "SEO-специалисту нужен быстрый аудит прямо на открытой странице без переключения между несколькими внешними сервисами.",
    solution: "Разделил расширение на content script, service worker, модульный popup и report page; добавил technical/GEO checks, AI-функции через serverless proxy и release scripts.",
    outcome: "Рабочее расширение проверяет страницу без перехода во внешние сервисы, формирует рекомендации и PDF, а AI-ключ остаётся вне клиентской сборки.",
    image: "/projects/private-seo.png",
    imageAlt: "Интерфейс расширения PrivateSEO с результатами аудита"
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
    status: "Рабочий инструмент",
    role: "FastAPI backend, capture worker, React review UI и Sheets sync",
    challenge: "Большие списки сайтов из Google Sheets неудобно открывать, проверять и размечать вручную по одному.",
    solution: "Собрал full sync таблицы, Postgres-модель, ARQ/Redis worker с Playwright capture и плотный React-интерфейс для пачек по 50/100/200 строк.",
    outcome: "Вместо ручного открытия URL оператор получает подготовленную очередь, быстро выставляет score/статус и синхронизирует результат обратно в Google Sheet."
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
    outcome: "Бот формирует чистый поток релевантных заказов и экономит время на повторном просмотре площадок.",
    image: "/projects/freelance-order-feed.png",
    imageAlt: "Карточка закрытого фриланс-заказа в Telegram-канале КопиБот"
  },
  "panzzi-furniture-website": {
    period: "2025–2026",
    status: "Production",
    role: "Многостраничный frontend, каталог, локализации и публикация",
    challenge: "Нужно было представить мебельный бизнес и направление запуска проектов в Китае в одном последовательном коммерческом сайте.",
    solution: "Собрал многостраничную структуру, RU/EN/ZH контент, каталог с hotspot-картами, галереи проектов и отдельный China Entry flow.",
    outcome: "Рабочий сайт опубликован на домене и используется как коммерческая витрина услуг и проектов.",
    image: "/projects/panzzi.webp",
    imageAlt: "Главная страница мебельного сайта PANZZI"
  },
  "mustang-driving-school": {
    period: "2024",
    status: "Production",
    role: "Frontend, PHP API заявок, Telegram и техническая SEO-подготовка",
    challenge: "Автошколе нужен был понятный адаптивный сайт, который не только рассказывает об обучении, но и собирает обращения.",
    solution: "Собрал информационные и юридические страницы, PHP endpoint с валидацией, Telegram-доставку заявок, sitemap/robots и конфигурацию рабочего хостинга.",
    outcome: "Сайт опубликован на рабочем домене, а новые заявки сразу попадают менеджеру в привычный канал.",
    image: "/projects/mustang.webp",
    imageAlt: "Главная страница автошколы Mustang"
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
    role: "Chrome extension, collectors, data server, dashboard и risk/replay слой",
    challenge: "Данные о токенах приходят из нескольких источников и требуют быстрой нормализации перед ручной оценкой.",
    solution: "Связал Chrome extension, Node collectors, Postgres API, React dashboard, external browser audit и сервисы wallet/developer intelligence и replay.",
    outcome: "Получилась большая paper-only исследовательская платформа для проверки гипотез и demo-решений без реальных swaps, приватных ключей и скрытого auto-execution."
  },
  "fitness-coach-landing": {
    period: "2023",
    status: "Production",
    role: "Дизайн структуры, адаптивная верстка и публикация",
    challenge: "Персональному тренеру требовалась компактная страница с понятным предложением, услугами и быстрым контактом.",
    solution: "Собрал посадочную страницу с последовательными секциями, адаптивной навигацией и акцентом на обращение к тренеру.",
    outcome: "Готовая страница опубликована через GitHub Pages и работает как простая персональная витрина.",
    image: "/projects/fitness-coach.webp",
    imageAlt: "Первый экран сайта персонального фитнес-тренера"
  },
  "used-car-showroom": {
    period: "Архивный проект",
    status: "Законченный проект",
    role: "Структура, дизайн интерфейса и frontend-верстка",
    challenge: "Автосалону требовалась понятная главная страница, где посетитель сразу видит актуальное предложение и может перейти к каталогу или услугам.",
    solution: "Собрал контрастную шапку с контактами и навигацией, полноэкранную промо-витрину со слайдами и структуру разделов под каталог, услуги, отзывы и контакты.",
    outcome: "Получился цельный презентационный сайт автосалона с быстрым переходом от первого предложения к нужному разделу.",
    image: "/projects/auto-showroom.webp",
    imageAlt: "Главная страница сайта автосалона с промо-витриной автомобилей"
  },
  "funpay-price-sniper": {
    period: "2025–2026",
    status: "Рабочий инструмент",
    role: "Парсер, FastAPI backend, React UI, правила отбора и Telegram-интеграция",
    challenge: "Выгодные предложения на FunPay быстро исчезают, поэтому ручная проверка цен и характеристик не даёт вовремя реагировать на отклонения от рынка.",
    solution: "Собрал автономный контур мониторинга: параллельный сбор лотов, нормализацию названий, локальные ценовые расчёты, пользовательские sniper rules и Telegram-алерты с прямой ссылкой на покупку.",
    outcome: "Инструмент самостоятельно отбирает подходящие лоты и отправляет в Telegram компактную карточку с ценой, доходностью, рыночным отклонением и действием BUY NOW.",
    image: "/projects/funpay-sniper.png",
    imageAlt: "Telegram-уведомления снайпера цен FunPay"
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
