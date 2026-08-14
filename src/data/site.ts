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
  workflow?: string[];
  accent: "blue" | "cyan" | "green" | "amber" | "rose";
  preview: {
    kind: "site" | "tool" | "bot" | "extension" | "game";
    label: string;
  };
};

export type ProjectDetails = {
  period: string;
  status: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  image?: string;
  imageAlt?: string;
};

export type HomeContent = {
  services: { index: string; title: string; intro: string };
  evidence: {
    index: string;
    title: string;
    intro: string;
    items: { id: string; label: string; title: string; text: string; facts: string[] }[];
  };
  stack: { index: string; title: string; intro: string };
  reviews: { index: string; title: string; intro: string; ratingLabel: string; reviewsLabel: string; linkLabel: string };
  about: { index: string };
  contact: { availability: string; title: string; text: string; telegram: string };
  footer: string;
};

export const profile = {
  name: "Алексей Вальков",
  initials: "AV",
  role: "Fullstack / AI Product Engineer",
  email: "aivai.studio.alexeyka@gmail.com",
  telegram: "https://t.me/leshaqt",
  github: "https://github.com/ValkoHappy",
  vk: "https://vk.ru/alexvalkoov",
  instagram: "https://www.instagram.com/leshaqt/",
  kwork: "https://kwork.ru/user/leshaqt",
  summary:
    "Разрабатываю веб-приложения, внутренние сервисы, автоматизацию и AI-инструменты. Работаю с Next.js, Astro, React, Node.js и Python; также выпускаю игры на Unity."
};

export const focusItems = [
  {
    title: "Сайты и сервисы",
    text: "Разработаю сайт, личный кабинет, внутренний сервис или CMS — от структуры до запуска."
  },
  {
    title: "Автоматизация процессов",
    text: "Настрою сбор и обработку данных, уведомления, отчёты и интеграции между сервисами."
  },
  {
    title: "AI-интеграции",
    text: "Добавлю AI-функции в существующий продукт или соберу отдельный инструмент под конкретный процесс."
  },
  {
    title: "Игровые системы",
    text: "Разработаю игровую механику, интерфейс или отдельную Unity-систему и подготовлю её к интеграции."
  }
];

export const homeContent: HomeContent = {
  services: {
    index: "01 / Услуги",
    title: "Что можно заказать",
    intro: "Можно прийти с техническим заданием или описать проблему. Я помогу определить объём работ и собрать решение."
  },
  evidence: {
    index: "02 / Опыт",
    title: "Что уже работает",
    intro: "Конкретные результаты из опубликованных и внутренних проектов.",
    items: [
      {
        id: "practice-web",
        label: "Сайты",
        title: "Коммерческие сайты",
        text: "Запускал многостраничные сайты, каталоги и CMS на реальных доменах.",
        facts: ["ChatPlus, PANZZI и Mustang", "Формы заявок и CMS", "Адаптив, SEO и публикация"]
      },
      {
        id: "practice-automation",
        label: "Автоматизация",
        title: "Сбор данных без ручной рутины",
        text: "Собирал цепочки от регулярной проверки источников до хранения результатов и уведомлений.",
        facts: ["Мониторинг цен в 10+ магазинах", "Google Ads и сайты из Google Sheets", "Telegram-уведомления и отчёты"]
      },
      {
        id: "practice-ai",
        label: "AI и агенты",
        title: "AI в рабочих процессах",
        text: "Использовал модели в CMS, SEO-аудите и внутренних инструментах с проверяемым результатом.",
        facts: ["LLM API и структурированные ответы", "MCP и агентные сценарии", "Очереди задач и ручная проверка"]
      },
      {
        id: "practice-unity",
        label: "Unity",
        title: "Две законченные игры",
        text: "Разрабатывал игровые механики, интерфейсы, сохранения и WebGL-сборки.",
        facts: ["Два законченных Unity-проекта", "C#, gameplay и сохранения", "Одна игра доступна на Яндекс Играх"]
      }
    ]
  },
  stack: {
    index: "03 / Технологии",
    title: "С чем работаю",
    intro: "Основной стек по направлениям. Конкретный набор зависит от задачи и условий запуска."
  },
  reviews: {
    index: "05 / Отзывы",
    title: "Отзывы заказчиков",
    intro: "Отзывы о выполненных заказах из моего профиля на Kwork.",
    ratingLabel: "рейтинг",
    reviewsLabel: "отзыва",
    linkLabel: "Профиль на Kwork"
  },
  about: { index: "06 / Обо мне" },
  contact: {
    availability: "Открыт к проектам и предложениям",
    title: "Есть задача?",
    text: "Напишите в Telegram или на почту и коротко опишите, что нужно сделать. Я разберу требования и предложу следующий шаг.",
    telegram: "Написать в Telegram"
  },
  footer: "Работаю удалённо · 2026"
};

export const aboutOverview = {
  heading: "Алексей Вальков, Fullstack / AI Product Engineer",
  paragraphs: [
    "Разрабатываю сайты, сервисы, автоматизацию, AI-инструменты и Unity-проекты. Могу отвечать за продукт целиком или подключиться к команде на отдельную часть.",
    "Работаю удалённо с заказчиками и командами. Показываю результат по этапам, фиксирую договорённости и передаю код вместе с инструкциями по запуску и поддержке."
  ],
  pathLabel: "Формат работы",
  pathTitle: "Удалённо · проектно · в команде",
  pathText:
    "Рассматриваю разовые проекты, долгосрочное сотрудничество и предложения о работе."
};

export const aboutPrinciples = [
  {
    title: "Разбираю задачу",
    text: "Уточняю цель, ограничения и критерии готовности до начала разработки."
  },
  {
    title: "Показываю по этапам",
    text: "Делю работу на части и показываю версии, которые уже можно проверить."
  },
  {
    title: "Передаю результат",
    text: "Оставляю понятную структуру, код и инструкции для дальнейшей поддержки."
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
    accent: "green",
    preview: { kind: "game", label: "Игра доступна онлайн" }
  },
  {
    slug: "tower-defense-builder",
    title: "Игра о строительстве и защите базы",
    shortTitle: "Base Defense",
    type: "Законченный игровой прототип",
    summary: "Законченная Unity-игра: игрок строит базу, добывает ресурсы, ставит турели и отбивает волны противников.",
    description:
      "Unity-проект вокруг строительства и защиты базы. В кодовой базе выделены системы построек, добычи ресурсов, турелей, состояний противников, волн, уровней, интерфейса, обучения и сохранений.",
    stack: ["Unity", "C#", "State Machine", "Save System", "Yandex SDK"],
    categories: ["games"],
    links: [],
    highlights: [
      "Строительство, перемещение и удаление объектов по игровой сетке",
      "Противники со state machine, поиском целей и атакой построек",
      "Ресурсы, уровни, UI, обучение и сохранение игрового состояния"
    ],
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
    links: [],
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
    links: [],
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
    title: "Сайт и CMS для ChatPlus",
    shortTitle: "CHATPLUS",
    type: "Работающий сайт и CMS",
    summary: "Публичный сайт на Astro и CMS на Strapi. Редакторы управляют страницами, а AI помогает готовить черновики перед ручной публикацией.",
    description:
      "Публичный сайт работает на Astro, а страницы и справочники редактируются через Strapi. AI заполняет заранее подготовленные поля, после чего редактор проверяет черновик и вручную допускает его к публикации.",
    stack: ["Astro", "Strapi", "PostgreSQL", "Node.js", "AI API", "VPS"],
    categories: ["websites", "fullstack", "automation"],
    links: [{ label: "Открыть сайт", href: "https://chatplus247.ru/" }],
    highlights: [
      "Публичный Astro-сайт и Strapi CMS на VPS",
      "AI готовит черновики в заданной структуре, редактор проверяет результат",
      "Автоматическая пересборка сайта, импорт контента и проверки перед публикацией"
    ],
    workflow: ["CMS", "Черновик", "Проверка", "Сборка", "Публикация"],
    accent: "cyan",
    preview: { kind: "site", label: "CMS + контент" }
  },
  {
    slug: "ads-transparency-monitor",
    title: "Мониторинг рекламных креативов",
    shortTitle: "Ads Monitor",
    type: "Приватная аналитическая система",
    summary: "Система регулярно собирает объявления Google Ads, хранит историю и показывает результаты по рекламодателям в одном интерфейсе.",
    description:
      "Администратор добавляет рекламодателей и запускает задания через Next.js-интерфейс. Фоновый процесс собирает объявления, PostgreSQL хранит историю, а MCP предоставляет проверенные данные AI-агентам.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Worker", "Playwright", "MCP"],
    categories: ["fullstack", "react", "automation"],
    links: [],
    highlights: [
      "Очередь заданий, ограничение параллельных запусков и история сканирований",
      "Интерфейс с рекламодателями, объявлениями, экспортом и ошибками",
      "PostgreSQL, MCP-доступ для AI-агентов, автоматические проверки и Docker"
    ],
    workflow: ["Рекламодатель", "Задание", "Сбор", "База", "Интерфейс"],
    accent: "rose",
    preview: { kind: "tool", label: "Ad intelligence" }
  },
  {
    slug: "private-seo-audit-extension",
    title: "PrivateSEO — аудит страницы в браузере",
    shortTitle: "PrivateSEO",
    type: "Chrome-расширение с AI-анализом",
    summary: "Chrome-расширение проверяет открытую страницу, находит SEO-ошибки, предлагает AI-рекомендации и формирует PDF-отчёт.",
    description:
      "Расширение проверяет SEO-параметры открытой страницы и показывает результат в своём интерфейсе. AI-запросы проходят через Yandex Cloud Function, поэтому ключ внешней модели не попадает в браузерную сборку.",
    stack: ["JavaScript", "Manifest V3", "Chrome APIs", "SEO", "PDF"],
    categories: ["extensions", "automation"],
    links: [],
    highlights: [
      "Meta, headings, canonical, robots, hreflang, ссылки, изображения, JSON-LD и Web Vitals",
      "AI-оценка, генерация мета-тегов, анализ поискового намерения и переспама",
      "Отдельная страница отчёта, PDF-экспорт и готовая сборка расширения"
    ],
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
      "Более 10 магазинов и маркетплейсов с разными способами сбора данных",
      "История цены, расписание APScheduler, статистика и JWT-доступ к web-интерфейсу",
      "Уведомления о снижении цены, темы для менеджеров, Excel и Google Sheets"
    ],
    workflow: ["Сбор", "Хранение", "Сравнение", "Уведомление", "Отчёт"],
    accent: "green",
    preview: { kind: "bot", label: "Найдена цена" }
  },
  {
    slug: "stream-tiktok-auction",
    title: "Аукцион донатов для TikTok LIVE",
    shortTitle: "Live Auction",
    type: "MVP для прямых трансляций",
    summary: "Система превращает донаты в ставки аукциона, показывает таймер и результат зрителям, а ведущему даёт отдельную панель управления.",
    description:
      "Локальная система для двухкомпьютерной трансляции: Fastify хранит состояние аукциона в SQLite, React admin управляет лотами и никами, а отдельный URL используется как web source в TikTok LIVE Studio.",
    stack: ["Fastify", "React", "TypeScript", "SQLite", "Vitest"],
    categories: ["fullstack", "react", "automation"],
    links: [],
    highlights: [
      "Суммирование донатов по Roblox-нику, tie-break и ручное исправление имени",
      "Таймер с продлением, лоты, dev-события и сохранение состояния в SQLite",
      "React admin и отдельный overlay для TikTok LIVE Studio по локальной сети"
    ],
    workflow: ["Донат", "Ставка", "Таймер", "Управление", "Экран"],
    accent: "amber",
    preview: { kind: "tool", label: "Live overlay" }
  },
  {
    slug: "site-scorer-review-tool",
    title: "Сервис проверки сайтов из Google Sheets",
    shortTitle: "Review Queue",
    type: "Внутренний инструмент проверки",
    summary: "Сервис загружает список сайтов из Google Sheets, заранее делает снимки страниц и помогает быстро оценить их пачками.",
    description:
      "Google Sheets хранит исходный список, а PostgreSQL — состояние проверки. FastAPI и фоновая очередь готовят следующую пачку, Playwright делает снимки страниц, а React-интерфейс помогает быстро оценить сайты.",
    stack: ["FastAPI", "PostgreSQL", "Playwright", "React", "Vite"],
    categories: ["fullstack", "react", "automation"],
    links: [],
    highlights: [
      "Синхронизация больших таблиц без создания лишних заданий",
      "Фоновая подготовка снимков страниц через Playwright и очередь задач",
      "Быстрая ручная оценка и запись результата обратно в Google Sheets"
    ],
    workflow: ["Таблица", "Пачка", "Снимки", "Проверка", "Синхронизация"],
    accent: "cyan",
    preview: { kind: "tool", label: "Review queue" }
  },
  {
    slug: "fitseek-telegram-mini-app",
    title: "Поиск тренеров внутри Telegram",
    shortTitle: "Trainer Search",
    type: "Telegram Mini App",
    summary: "Прототип Telegram Mini App, где пользователь может искать тренеров без установки отдельного приложения.",
    description:
      "Прототип сервиса внутри Telegram: Mini App показывает поиск тренеров, FastAPI отвечает за данные, а бот открывает приложение и связывает его с пользовательским сценарием.",
    stack: ["React", "Vite", "FastAPI", "SQLAlchemy", "Telegram Bot"],
    categories: ["react", "fullstack", "bots"],
    links: [],
    highlights: [
      "Telegram Mini App с web-интерфейсом",
      "FastAPI и структура данных",
      "Полный путь от Telegram-бота до интерфейса и API"
    ],
    accent: "green",
    preview: { kind: "bot", label: "Mini App ready" }
  },
  {
    slug: "scaner-frilance-bot",
    title: "Агрегатор фриланс-заказов в Telegram",
    shortTitle: "Order Feed",
    type: "Рабочий Telegram-агрегатор",
    summary: "Бот собирает новые заказы с фриланс-площадок, отбирает подходящие и отправляет их в Telegram без дублей.",
    description:
      "Рабочий Telegram-бот для отслеживания новых заказов. Парсеры собирают свежие предложения, фильтры оставляют релевантное, хэштеги помогают сортировать поток, а механика отправки учитывает ограничения Telegram.",
    stack: ["Python", "aiogram", "aiohttp", "BS4", "Playwright"],
    categories: ["bots", "automation"],
    links: [],
    highlights: [
      "Мониторинг заказов и новых публикаций",
      "Фильтры, автотеги и хранение просмотренного",
      "Защита от flood и миграции сообщений"
    ],
    accent: "cyan",
    preview: { kind: "bot", label: "Новый заказ" }
  },
  {
    slug: "panzzi-furniture-website",
    title: "Сайт PANZZI с каталогом мебели",
    shortTitle: "PANZZI",
    type: "Коммерческий сайт",
    summary: "Мультиязычный сайт с каталогом мебели, интерактивными схемами, портфолио и услугами сопровождения бизнеса в Китае.",
    description:
      "Коммерческий сайт PANZZI объединяет мебель, освещение, материалы, проекты и услуги сопровождения в Китае. Каталог использует интерактивные карты с hotspot-превью, а контент и навигация поддерживают RU/EN/ZH.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [{ label: "Открыть сайт", href: "https://panzzi.com/" }],
    highlights: [
      "Каталог с интерактивными схемами и галереями категорий",
      "Русская, английская и китайская версии, отдельный раздел услуг в Китае",
      "Адаптивная многостраничная верстка, портфолио проектов и публикация на домене"
    ],
    accent: "blue",
    preview: { kind: "site", label: "Каталог мебели" }
  },
  {
    slug: "mustang-driving-school",
    title: "Сайт автошколы с обработкой заявок",
    shortTitle: "Mustang",
    type: "Коммерческий сайт",
    summary: "Работающий сайт автошколы с программами обучения и формами, которые отправляют новые заявки менеджеру в Telegram.",
    description:
      "Многостраничный сайт автошколы с программами обучения, юридическими страницами и формами. PHP API валидирует обращения и отправляет их менеджеру в Telegram; robots.txt, sitemap, verification-файлы и серверные правила подготовлены для рабочего домена.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Telegram API"],
    categories: ["websites", "automation"],
    links: [{ label: "Открыть сайт", href: "https://mustang-29.ru/" }],
    highlights: [
      "Адаптивная главная и отдельная страница об образовательной программе",
      "PHP-обработчик заявок, проверка данных и отправка в Telegram",
      "Sitemap, robots, юридические страницы и публикация на рабочем хостинге"
    ],
    accent: "cyan",
    preview: { kind: "site", label: "Заявки в Telegram" }
  },
  {
    slug: "course-registration-platform",
    title: "Личный кабинет участника курса",
    shortTitle: "Course Cabinet",
    type: "Учебный fullstack-проект",
    summary: "Учебное приложение с регистрацией, записью на курсы и отдельным интерфейсом администратора.",
    description:
      "Учебная система регистрации на курс с интерфейсами пользователя и администратора. Проект показывает полный путь от формы в браузере до API и базы данных.",
    stack: ["React", "Vite", "PHP", "MySQL", "REST API"],
    categories: ["react", "fullstack"],
    links: [],
    highlights: [
      "React-интерфейс с маршрутизацией",
      "PHP API для заявок и авторизации",
      "MySQL-структура для хранения данных"
    ],
    accent: "green",
    preview: { kind: "tool", label: "Личный кабинет" }
  },
  {
    slug: "token-audit-trading-assistant",
    title: "Инструмент анализа токенов",
    shortTitle: "Token Intelligence",
    type: "Исследовательский прототип",
    summary: "Инструмент собирает данные о токенах, кошельках и разработчиках, чтобы проверять торговые гипотезы без реальных сделок.",
    description:
      "GMGN используется как рыночный терминал, а локальные сервисы собирают и сохраняют данные для последующего анализа. В проект входят Chrome-расширение, сборщики, API, база и интерфейс исследования.",
    stack: ["Node.js", "Chrome Extension", "React", "PostgreSQL", "Playwright", "Python"],
    categories: ["extensions", "react", "fullstack", "automation"],
    links: [],
    highlights: [
      "Анализ кошельков, разработчиков, истории токена и факторов риска",
      "Chrome-расширение, сборщики, API, PostgreSQL и интерфейс исследования",
      "Тестовые решения без реальных сделок и доступа к приватным ключам"
    ],
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
      "Архивный сайт автосалона. На главной размещена полноэкранная витрина предложений, а навигация ведёт к информации о компании, каталогу автомобилей, услугам, отзывам и контактам.",
    stack: ["HTML", "CSS", "JavaScript"],
    categories: ["websites"],
    links: [],
    highlights: [
      "Полноэкранная промо-витрина автомобилей",
      "Структура под каталог, услуги, отзывы и контакты",
      "Контрастная навигация и заметный сценарий перехода к предложению"
    ],
    accent: "amber",
    preview: { kind: "site", label: "Автомобильная витрина" }
  },
  {
    slug: "funpay-price-sniper",
    title: "Мониторинг предложений FunPay",
    shortTitle: "FunPay Sniper",
    type: "Система мониторинга и уведомлений",
    summary: "Инструмент отслеживает предложения FunPay, сравнивает их по заданным правилам и отправляет подходящие варианты в Telegram.",
    description:
      "Система регулярно проверяет лоты FunPay. Сервер нормализует названия и цены, пользователь задаёт правила отбора в отдельном интерфейсе, а подходящие предложения приходят в Telegram со ссылкой на покупку.",
    stack: ["Python", "FastAPI", "React", "Telegram API", "Tests"],
    categories: ["automation", "bots", "fullstack", "react"],
    links: [],
    highlights: [
      "Параллельный мониторинг лотов FunPay и нормализация данных",
      "Настраиваемые правила отбора и отдельная отправка приоритетных находок",
      "React-интерфейс, FastAPI и Telegram-алерты с прямой ссылкой на предложение"
    ],
    accent: "rose",
    preview: { kind: "bot", label: "Выгодное предложение" }
  },
  {
    slug: "driving-test-auto-booking",
    title: "DriveAlerts — поиск свободных слотов",
    shortTitle: "DriveAlerts",
    type: "Приватный рабочий сервис",
    summary: "Сервис отслеживает освободившиеся места на экзамен. Пользователь задаёт параметры поиска и сам подтверждает найденный вариант.",
    description:
      "Пользователь принимает приглашение, подключает аккаунт, задаёт параметры поиска и подтверждает найденный вариант. Сервер хранит сессии в зашифрованном виде, запускает задания мониторинга и восстанавливает их после ошибок.",
    stack: ["TypeScript", "React", "Vite", "BFF", "PostgreSQL", "WebSocket", "Docker"],
    categories: ["fullstack", "automation"],
    links: [],
    highlights: [
      "Одноразовые приглашения, защищённые сессии и проверка прав доступа",
      "Отдельные процессы мониторинга, PostgreSQL и восстановление после ошибок",
      "Тестовый контур, проверки нагрузки и защищённый просмотр событий"
    ],
    workflow: ["Приглашение", "Аккаунт", "Параметры", "Поиск", "Подтверждение"],
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
    status: "Опубликован",
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
    role: "Архитектура и игровые системы на C#",
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
    status: "Опубликован",
    role: "Astro-сайт, Strapi CMS, AI-функции и публикация",
    challenge: "Контентной команде требовался управляемый портал, где публикация материалов, загрузки и подготовка черновиков не зависят от ручной правки сайта.",
    solution: "Разделил публичный Astro-сайт и Strapi CMS, описал структуру страниц, подключил PostgreSQL и загрузку файлов. AI готовит черновики, которые редактор проверяет перед публикацией.",
    outcome: "Сайт работает на VPS: контент редактируется через Strapi, а после проверки автоматически запускается новая сборка.",
    image: "/projects/chatplus.webp",
    imageAlt: "Главная страница платформы Chat Plus"
  },
  "driving-test-auto-booking": {
    period: "2026",
    status: "Рабочий сервис",
    role: "Пользовательский интерфейс, серверная часть и защита данных",
    challenge: "Пользователю нужен понятный интерфейс для подключения аккаунта, настройки поиска и подтверждения найденного места без передачи чувствительных данных в браузер.",
    solution: "Связал React-интерфейс с серверным шлюзом, серверным клиентом, заданиями PostgreSQL и отдельными процессами мониторинга. Добавил защищённые сессии и тестовый контур.",
    outcome: "Собран приватный рабочий сервис с восстановлением после ошибок и ручным подтверждением найденного места.",
    image: "/projects/drivealerts.webp",
    imageAlt: "Интерфейс автоматического бронирования DriveAlerts"
  },
  "ads-transparency-monitor": {
    period: "2026",
    status: "Рабочий инструмент",
    role: "Интерфейс, сбор данных, MCP, база и публикация",
    challenge: "Рекламные креативы нужно регулярно собирать, нормализовать и отслеживать по рекламодателям без ручного обхода Google Ads Transparency Center.",
    solution: "Разделил систему на Next.js-интерфейс, фоновый сборщик, MCP-сервер, парсеры и общую базу PostgreSQL. Добавил очередь, статусы и экспорт.",
    outcome: "Система хранит рекламодателей, креативы и историю сканирований; оператор видит покрытие и ошибки, а агентные клиенты получают данные через MCP.",
    image: "/projects/ads-transparency.webp",
    imageAlt: "Дашборд Ads Transparency Monitor"
  },
  "private-seo-audit-extension": {
    period: "2025",
    status: "Рабочий инструмент",
    role: "Архитектура расширения, SEO/GEO-проверки, AI и отчёты",
    challenge: "SEO-специалисту нужен быстрый аудит прямо на открытой странице без переключения между несколькими внешними сервисами.",
    solution: "Разделил расширение на сбор данных со страницы, фоновую обработку, интерфейс и отдельный отчёт. Добавил технические и GEO-проверки, защищённые AI-запросы и сборку релиза.",
    outcome: "Рабочее расширение проверяет страницу без перехода во внешние сервисы, формирует рекомендации и PDF, а AI-ключ остаётся вне клиентской сборки.",
    image: "/projects/private-seo.png",
    imageAlt: "Интерфейс расширения PrivateSEO с результатами аудита"
  },
  "parser-find-price-tg": {
    period: "2024–2025",
    status: "Рабочий инструмент",
    role: "Парсеры, интерфейс управления и Telegram-уведомления",
    challenge: "Цены на одни и те же товары меняются в разных магазинах, а ручная проверка не масштабируется и не сохраняет историю.",
    solution: "Связал парсеры магазинов, Flask API, хранение товаров и истории, web UI для управления и Telegram-оповещения об изменениях.",
    outcome: "Система регулярно проверяет позиции, фиксирует динамику и доставляет полезные изменения в Telegram без ручного мониторинга.",
    imageAlt: "Схема инструмента мониторинга цен"
  },
  "stream-tiktok-auction": {
    period: "2025",
    status: "MVP",
    role: "Сервер, логика аукциона, панель управления и экран трансляции",
    challenge: "Пожертвования во время трансляции нужно превратить в понятный зрителям аукцион с таймером, ставками и сменой лотов.",
    solution: "Собрал Fastify backend, хранение состояния в SQLite, React-панель управления и отдельный overlay для TikTok LIVE Studio.",
    outcome: "MVP закрывает полный live-сценарий от события DonationAlerts до обновления ставки и показа результата в трансляции."
  },
  "site-scorer-review-tool": {
    period: "2026",
    status: "Рабочий инструмент",
    role: "FastAPI, фоновая подготовка страниц, интерфейс проверки и Google Sheets",
    challenge: "Большие списки сайтов из Google Sheets неудобно открывать, проверять и размечать вручную по одному.",
    solution: "Настроил синхронизацию таблицы, модель PostgreSQL, очередь ARQ/Redis и фоновую подготовку снимков через Playwright. React-интерфейс показывает пачки по 50, 100 или 200 сайтов.",
    outcome: "Оператор получает готовую очередь, быстро оценивает сайты и записывает статус обратно в Google Sheets."
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
    role: "Парсеры, фильтры и отправка в Telegram",
    challenge: "Новые заказы быстро теряются в общем потоке фриланс-площадок, а частый опрос создаёт дубли и ограничения отправки.",
    solution: "Добавил асинхронный сбор, фильтрацию, автохэштеги, хранение просмотренного и контролируемую отправку сообщений.",
    outcome: "Бот формирует чистый поток релевантных заказов и экономит время на повторном просмотре площадок.",
    image: "/projects/freelance-order-feed.png",
    imageAlt: "Карточка закрытого фриланс-заказа в Telegram-канале КопиБот"
  },
  "panzzi-furniture-website": {
    period: "2025–2026",
    status: "Опубликован",
    role: "Многостраничный сайт, каталог, локализации и публикация",
    challenge: "Нужно было представить мебельный бизнес и направление запуска проектов в Китае в одном последовательном коммерческом сайте.",
    solution: "Собрал многостраничную структуру на русском, английском и китайском, каталог с интерактивными схемами, галереи проектов и раздел услуг в Китае.",
    outcome: "Рабочий сайт опубликован на домене и используется как коммерческая витрина услуг и проектов.",
    image: "/projects/panzzi.webp",
    imageAlt: "Главная страница мебельного сайта PANZZI"
  },
  "mustang-driving-school": {
    period: "2024",
    status: "Опубликован",
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
    role: "Расширение, сбор данных, сервер, интерфейс и анализ рисков",
    challenge: "Данные о токенах приходят из нескольких источников и требуют быстрой нормализации перед ручной оценкой.",
    solution: "Связал Chrome-расширение, сборщики на Node.js, PostgreSQL API, React-интерфейс и сервисы анализа кошельков, разработчиков и истории токенов.",
    outcome: "Получился исследовательский прототип для проверки гипотез без реальных сделок, приватных ключей и автоматической торговли."
  },
  "fitness-coach-landing": {
    period: "2023",
    status: "Опубликован",
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
