export function WorkflowDiagram({ steps, locale = "ru" }: { steps: string[]; locale?: "ru" | "en" }) {
  const russianSteps: Record<string, string> = {
    Invitation: "Приглашение",
    Account: "Подключение аккаунта",
    Search: "Поиск слотов",
    Monitor: "Мониторинг",
    Confirm: "Подтверждение",
    Sources: "Источники",
    Collectors: "Сбор данных",
    Queue: "Очередь задач",
    Database: "Хранение",
    Dashboard: "Дашборд",
    Parse: "Сбор и разбор",
    Store: "Сохранение",
    Compare: "Сравнение",
    Alert: "Уведомление",
    Report: "Отчёт",
    "Content script": "Сбор данных",
    Background: "Фоновая обработка",
    Popup: "Окно расширения",
    PDF: "PDF-отчёт",
    Upload: "Загрузка",
    "Parse DOCX": "Разбор DOCX",
    Validate: "Проверка",
    Autofix: "Автоисправление",
    Download: "Скачивание",
    CMS: "CMS",
    Content: "Контент",
    Build: "Сборка",
    Deploy: "Публикация",
    "Public site": "Сайт",
    Advertiser: "Рекламодатель",
    "Scan job": "Задача сканирования",
    Worker: "Воркер",
    Postgres: "PostgreSQL",
    "AI generation": "AI-генерация",
    Resources: "Ресурсы",
    Craft: "Крафт",
    Construction: "Строительство",
    Survival: "Выживание"
  };

  return (
    <div className="workflow-diagram" aria-label={locale === "en" ? "Project workflow" : "Схема работы проекта"}>
      {steps.map((step, index) => (
        <div className="workflow-item" key={step}>
          <span>
            <small>0{index + 1}</small>
            <b>{locale === "en" ? step : russianSteps[step] ?? step}</b>
          </span>
          {index < steps.length - 1 && <i />}
        </div>
      ))}
    </div>
  );
}
