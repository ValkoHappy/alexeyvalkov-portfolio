import type { Project, ProjectDetails } from "./site";

export const recentProjects: Project[] = [
  {
    slug: "copeeq-document-workspace",
    title: "Copeeq: из фото в редактируемый документ",
    shortTitle: "Copeeq",
    type: "Прототип сервиса для работы с документами",
    summary: "Лендинг, загрузка файлов и редактор документов. Можно пройти сценарий от фотографии до проверки текста и оформления.",
    description: "Интерфейс Copeeq объединяет загрузку, примеры документов, личный кабинет и редактор. Отдельное ядро foto2word отвечает за модель документа и сборку DOCX. Публичная версия показывает работу интерфейса без отправки файлов в AI и без реальных платежей.",
    stack: ["Python", "FastAPI", "JavaScript", "DOCX"],
    categories: ["websites", "fullstack"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/copeeq/" }],
    highlights: ["Лендинг с примерами и сравнением документов", "Личный кабинет, загрузка и редактирование", "Отдельное ядро обработки и сборки DOCX"],
    workflow: ["Загрузка", "Оформление", "Проверка", "Редактор"],
    accent: "blue",
    preview: { kind: "site", label: "Демо сервиса документов" }
  },
  {
    slug: "korochki-learning-center",
    title: "«Корочки.Есть»: запись на IT-курсы",
    shortTitle: "Корочки.Есть",
    type: "Учебный сайт и личный кабинет",
    summary: "Сайт учебного центра с каталогом курсов, заявками на обучение и кабинетом администратора.",
    description: "Посетитель выбирает курс, дату начала и способ оплаты. В кабинете можно найти заявку и посмотреть её статус, администратор управляет ходом обучения. Серверная версия работает с PHP и MySQL, публичное демо сохраняет заявки в браузере.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    categories: ["websites", "fullstack"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/korochki-learning-center/" }],
    highlights: ["Каталог курсов и форма записи", "Поиск заявок и фильтры по статусам", "Раздельные кабинеты пользователя и администратора"],
    accent: "rose",
    preview: { kind: "site", label: "Учебный центр" }
  },
  {
    slug: "computer-repair-service",
    title: "Заявки на ремонт компьютеров",
    shortTitle: "Ремонт компьютеров",
    type: "Учебный сервис заявок",
    summary: "Форма вызова мастера, история обращений и обработка заявок в кабинете администратора.",
    description: "Пользователь описывает неисправность и указывает дату визита. Заявка появляется в личном кабинете, администратор подтверждает или отклоняет обращение. PHP-версия хранит данные в MySQL, демоверсия работает локально в браузере.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    categories: ["websites", "fullstack"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/computer-repair-service/" }],
    highlights: ["Заявка с описанием проблемы и датой визита", "История обращений пользователя", "Изменение статусов администратором"],
    accent: "green",
    preview: { kind: "site", label: "Сервис ремонта" }
  },
  {
    slug: "pastry-workshop-booking",
    title: "Запись на кондитерский мастер-класс",
    shortTitle: "Мастер-класс",
    type: "Учебный сервис записи",
    summary: "Выбор изделия, даты и количества участников с просмотром и обработкой заявок.",
    description: "В форме записи можно выбрать торт, пирожное или зефир, указать дату и количество участников. Пользователь следит за статусом в кабинете, администратор обрабатывает записи. В публичном демо данные остаются в браузере.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    categories: ["websites", "fullstack"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/pastry-workshop-booking/" }],
    highlights: ["Форма записи с выбором изделия и даты", "Личный кабинет с историей заявок", "Кабинет администратора для обработки записей"],
    accent: "amber",
    preview: { kind: "site", label: "Запись на мастер-класс" }
  },
  {
    slug: "doctor-home-visits",
    title: "Вызов врача на дом",
    shortTitle: "Вызов врача",
    type: "Учебная система заявок",
    summary: "Учебный сценарий подачи обращения, просмотра истории и обработки заявок администратором.",
    description: "В серверной версии пользователь создаёт обращение и видит только свои заявки, администратор работает с общим списком и меняет статусы. Публичная версия показывает этот сценарий на локальных данных и не отправляет реальные вызовы врачам.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    categories: ["websites", "fullstack"],
    links: [{ label: "Открыть сайт", href: "https://valkohappy.github.io/doctor-home-visits/" }],
    highlights: ["Форма обращения и история заявок", "Проверка прав и доступ к своим обращениям в PHP-версии", "Демо без отправки реальных вызовов"],
    accent: "cyan",
    preview: { kind: "site", label: "Учебная система заявок" }
  }
];

export const recentProjectDetails: Record<string, ProjectDetails> = {
  "copeeq-document-workspace": {
    period: "2026", status: "Интерактивный прототип", role: "Интерфейс сервиса, редактор и ядро сборки документов",
    challenge: "Показать путь от фотографии бумажного документа до проверки текста и редактируемого результата.",
    solution: "Объединил лендинг, загрузку, кабинет и редактор. Ядро обработки документов отделено от интерфейса, публичный сайт использует демонстрационные сценарии.",
    outcome: "Можно посмотреть примеры и пройти сценарии интерфейса. Реальное распознавание, платежи и выгрузка готового документа в публичном демо не подключены.",
    image: "/projects/copeeq.webp", imageAlt: "Главная страница Copeeq с загрузкой фото документа"
  },
  "korochki-learning-center": {
    period: "Учебный проект", status: "Демоверсия опубликована", role: "Вёрстка, PHP, база данных и кабинеты",
    challenge: "Собрать сайт учебного центра, где можно выбрать курс и отслеживать заявку на обучение.",
    solution: "Связал каталог, формы записи и кабинеты с базой MySQL. Обработку входа и заявок вынес в отдельные контроллеры, добавил проверку ролей и защиту форм.",
    outcome: "Серверная версия работает на PHP и MySQL. Онлайн-демо позволяет создавать заявки, искать их и менять статусы без регистрации, сохраняя данные в браузере.",
    image: "/projects/korochki.webp", imageAlt: "Главная страница учебного центра «Корочки.Есть»"
  },
  "computer-repair-service": {
    period: "Учебный проект", status: "Демоверсия опубликована", role: "Формы, личный кабинет, PHP и MySQL",
    challenge: "Организовать подачу и обработку заявок на выезд компьютерного мастера.",
    solution: "Подготовил форму обращения, историю заявок и кабинет администратора. Настройки базы и обработка запросов отделены от страниц, сервер проверяет роли и защищает формы CSRF-токенами.",
    outcome: "Сценарий создания заявки и смены статуса доступен в браузере. Демо не отправляет обращения мастерам, серверная версия запускается отдельно с MySQL.",
    image: "/projects/computer-repair.webp", imageAlt: "Форма заявки на ремонт компьютера"
  },
  "pastry-workshop-booking": {
    period: "Учебный проект", status: "Демоверсия опубликована", role: "Формы записи, кабинеты, PHP и MySQL",
    challenge: "Принимать записи на мастер-классы с выбором изделия, даты и количества участников.",
    solution: "Собрал форму записи, список заявок пользователя и обработку статусов администратором. Серверные обработчики отделены от шаблонов страниц.",
    outcome: "Запись и смену статусов можно проверить в онлайн-демо. Данные сохраняются только в браузере; для серверного запуска подготовлена схема MySQL.",
    image: "/projects/pastry-workshop.webp", imageAlt: "Форма записи на кондитерский мастер-класс"
  },
  "doctor-home-visits": {
    period: "Учебный проект", status: "Демоверсия опубликована", role: "PHP, работа с пользователями, заявки и интерфейс",
    challenge: "Реализовать учебную систему обращений с отдельными возможностями пользователя и администратора.",
    solution: "Разделил работу с пользователями, хранение заявок, обработку запросов и шаблон интерфейса. В PHP-версии проверяются права на обращение и статус администратора.",
    outcome: "В демо можно пройти путь от подачи обращения до изменения статуса. Оно не связано с медицинскими организациями и не отправляет реальные вызовы.",
    image: "/projects/doctor-home.webp", imageAlt: "Учебная форма вызова врача на дом"
  }
};

type ProjectCopy = Pick<Project, "title" | "type" | "summary" | "description" | "highlights" | "workflow">;

export const recentProjectsEn: Record<string, ProjectCopy> = {
  "copeeq-document-workspace": {
    title: "Copeeq: photos to editable documents", type: "Document workspace prototype",
    summary: "Landing page, file upload and document editor, covering the workflow from a photograph to reviewing text and formatting.",
    description: "Copeeq combines a landing page, upload flow, account area and editor. A separate foto2word core handles document models and DOCX generation. The public demo does not send files to AI providers or process real payments.",
    highlights: ["Document examples and comparisons", "Account area, upload flow and editor", "Separate document processing and DOCX core"],
    workflow: ["Upload", "Formatting", "Review", "Editor"]
  },
  "korochki-learning-center": {
    title: "Korochki: IT course registration", type: "Educational website and account area",
    summary: "A training centre website with course listings, enrolment requests and an administrator workspace.",
    description: "Visitors choose a course, start date and payment method. Users can search requests and view their status; administrators update progress. The server version uses PHP and MySQL, while the public demo stores requests in the browser.",
    highlights: ["Course catalogue and registration form", "Request search and status filters", "User and administrator workspaces"]
  },
  "computer-repair-service": {
    title: "Computer repair requests", type: "Educational request management service",
    summary: "A technician request form, request history and an administrator workspace.",
    description: "Users describe a fault and choose a visit date. Requests appear in their account, where administrators can confirm or reject them. The PHP version uses MySQL; the public demo runs locally in the browser.",
    highlights: ["Fault description and visit date", "User request history", "Administrator status updates"]
  },
  "pastry-workshop-booking": {
    title: "Pastry workshop booking", type: "Educational booking service",
    summary: "A booking form with pastry selection, date and participant count, plus request management.",
    description: "Visitors select a cake, pastry or marshmallow workshop, date and participant count. Users follow the status in their account and administrators process bookings. Public demo data stays in the browser.",
    highlights: ["Workshop type and date selection", "Personal booking history", "Administrator booking management"]
  },
  "doctor-home-visits": {
    title: "Doctor home visit requests", type: "Educational request system",
    summary: "An educational workflow for submitting requests, viewing history and administrator processing.",
    description: "The server version limits users to their own requests and gives administrators access to status management. The public demo uses local browser data and does not send real requests to doctors.",
    highlights: ["Request form and history", "Ownership checks in the PHP version", "Demo without real medical requests"]
  }
};

export const recentProjectDetailsEn: Record<string, Omit<ProjectDetails, "image">> = {
  "copeeq-document-workspace": {
    period: "2026", status: "Interactive prototype", role: "Service interface, editor and document generation core",
    challenge: "Show the workflow from a document photograph to text review and an editable result.",
    solution: "Combined a landing page, upload flow, account area and editor. The document core is separate from the interface; the public site uses demonstration scenarios.",
    outcome: "Visitors can inspect examples and try the interface. Real recognition, payments and final document exports are not connected in the public demo.",
    imageAlt: "Copeeq landing page with document upload"
  },
  "korochki-learning-center": {
    period: "Educational project", status: "Demo published", role: "Frontend, PHP, database and account areas",
    challenge: "Build a training centre website with course selection and enrolment tracking.",
    solution: "Connected the catalogue, request forms and workspaces to MySQL. Authentication and request handling use separate controllers with role checks and CSRF protection.",
    outcome: "The PHP version runs with MySQL. The online demo supports local requests, search and status changes without registration.",
    imageAlt: "Korochki training centre homepage"
  },
  "computer-repair-service": {
    period: "Educational project", status: "Demo published", role: "Forms, account area, PHP and MySQL",
    challenge: "Organise the submission and processing of computer repair visit requests.",
    solution: "Built a request form, user history and administrator workspace. Database configuration and handlers are separate from page templates, with server role checks and CSRF tokens.",
    outcome: "The demo supports local request creation and status changes. It does not contact technicians; the server version runs separately with MySQL.",
    imageAlt: "Computer repair request form"
  },
  "pastry-workshop-booking": {
    period: "Educational project", status: "Demo published", role: "Booking forms, workspaces, PHP and MySQL",
    challenge: "Accept workshop bookings with pastry selection, date and participant count.",
    solution: "Built a booking form, personal request list and administrator status management. Server handlers are separate from page templates.",
    outcome: "Bookings and status updates are available in the online demo. Data stays in the browser; the server version includes a MySQL schema.",
    imageAlt: "Pastry workshop booking form"
  },
  "doctor-home-visits": {
    period: "Educational project", status: "Demo published", role: "PHP, users, request handling and interface",
    challenge: "Implement an educational request system with distinct user and administrator capabilities.",
    solution: "Separated authentication, request storage, controller and page template. The PHP version checks request ownership and administrator permissions.",
    outcome: "The demo covers request creation and status changes. It is not connected to medical organisations and does not send real calls.",
    imageAlt: "Educational doctor visit request form"
  }
};
