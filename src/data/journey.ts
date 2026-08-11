export type JourneyStageId = "unity" | "web" | "react" | "automation" | "now";

export type JourneyIcon = "gamepad" | "globe" | "code" | "workflow" | "flag";

export type JourneyMission = {
  title: string;
  description: string;
  status: "live" | "complete" | "case";
  projectSlug?: string;
  href?: string;
  image?: string;
};

export type JourneyStage = {
  id: JourneyStageId;
  chapter: string;
  label: string;
  title: string;
  summary: string;
  icon: JourneyIcon;
  accent: "copper" | "cyan" | "blue" | "lime" | "white";
  skills: string[];
  achievements: string[];
  missions: JourneyMission[];
};

export const journeyStages: JourneyStage[] = [
  {
    id: "unity",
    chapter: "Глава 01",
    label: "Unity / C#",
    title: "Сначала я строил игровые миры",
    summary:
      "Unity научил меня собирать большие системы из небольших компонентов: игровое состояние, поведение объектов, интерфейс, сохранения и события.",
    icon: "gamepad",
    accent: "copper",
    skills: ["Unity", "C#", "Gameplay systems", "WebGL", "Save systems"],
    achievements: ["2 законченных проекта", "1 опубликованная игра", "3 локализации"],
    missions: [
      {
        title: "Выживание: Загадочный Лес",
        description: "Survival-песочница, которая до сих пор доступна на Яндекс Играх.",
        status: "live",
        projectSlug: "mystery-forest-survival",
        href: "https://yandex.ru/games/developer/99978#app=373383",
        image: "/games/mystery-forest-icon.webp"
      },
      {
        title: "Tower",
        description: "Строительство базы, экономика, турели, волны врагов и сохранения.",
        status: "complete",
        projectSlug: "tower-defense-builder"
      }
    ]
  },
  {
    id: "web",
    chapter: "Глава 02",
    label: "Web",
    title: "Игровая логика перешла в реальные задачи",
    summary:
      "Я переключился на коммерческие сайты: научился работать с контентом, адаптивом, формами заявок, SEO и публикацией на настоящих доменах.",
    icon: "globe",
    accent: "cyan",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SEO"],
    achievements: ["Коммерческие сайты", "Рабочие домены", "Заявки в Telegram"],
    missions: [
      { title: "PANZZI", description: "Коммерческий сайт мебельного бизнеса и запуска проектов в Китае.", status: "case", projectSlug: "panzzi-furniture-website" },
      { title: "Mustang", description: "Сайт автошколы с формами и отправкой обращений в Telegram.", status: "case", projectSlug: "mustang-driving-school" }
    ]
  },
  {
    id: "react",
    chapter: "Глава 03",
    label: "React / Fullstack",
    title: "От страниц — к продуктовым интерфейсам",
    summary:
      "Дальше появились кабинеты, сложные формы, API, базы данных, очереди и worker-процессы. Я начал отвечать не за экран, а за полный пользовательский сценарий.",
    icon: "code",
    accent: "blue",
    skills: ["React", "Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    achievements: ["Dashboard-системы", "API и базы", "Fullstack-архитектура"],
    missions: [
      { title: "WordSet", description: "Проверка DOCX, набор правил и безопасные автоисправления.", status: "case", projectSlug: "wordset-docx-checker" },
      { title: "ScanerBlogers", description: "Dashboard, collectors, очередь и единая база кандидатов.", status: "case", projectSlug: "scaner-blogers-dashboard" }
    ]
  },
  {
    id: "automation",
    chapter: "Глава 04",
    label: "Automation",
    title: "Теперь системы делают рутину сами",
    summary:
      "Парсеры, боты, расширения и фоновые процессы превратились в основное направление: убрать ручные шаги и оставить человеку понятный контроль.",
    icon: "workflow",
    accent: "lime",
    skills: ["Playwright", "Workers", "Telegram", "Chrome APIs", "Parsing"],
    achievements: ["Мониторинг данных", "Боты и уведомления", "Внутренние инструменты"],
    missions: [
      { title: "Ads Monitor", description: "Мониторинг рекламных креативов с очередью сканирования.", status: "case", projectSlug: "ads-transparency-monitor" },
      { title: "SEO Audit", description: "Расширение для технического аудита и подготовки отчётов.", status: "case", projectSlug: "private-seo-audit-extension" }
    ]
  },
  {
    id: "now",
    chapter: "Текущая миссия",
    label: "Сейчас",
    title: "Собираю законченные прикладные продукты",
    summary:
      "Сегодня мой фокус — веб-инструменты, где интерфейс, данные, интеграции и автоматизация работают как одна понятная система.",
    icon: "flag",
    accent: "white",
    skills: ["Product thinking", "Architecture", "Delivery", "Testing", "Deployment"],
    achievements: ["17 кейсов", "5.0 на Kwork", "60% повторных заказов"],
    missions: [
      { title: "Новая задача", description: "Следующая точка карты пока свободна. Здесь может быть ваш проект.", status: "live", href: "https://t.me/leshaqt" }
    ]
  }
];

export function getJourneyStage(stageId: JourneyStageId): JourneyStage {
  const stage = journeyStages.find((item) => item.id === stageId);
  if (!stage) throw new Error(`Unknown journey stage: ${stageId}`);
  return stage;
}
