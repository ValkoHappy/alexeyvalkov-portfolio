export function WorkflowDiagram({ steps, locale = "ru" }: { steps: string[]; locale?: "ru" | "en" }) {
  return (
    <div className="workflow-diagram" aria-label={locale === "en" ? "Project workflow" : "Схема работы проекта"}>
      {steps.map((step, index) => (
        <div className="workflow-item" key={step}>
          <span>
            <small>0{index + 1}</small>
            <b>{step}</b>
          </span>
          {index < steps.length - 1 && <i />}
        </div>
      ))}
    </div>
  );
}
