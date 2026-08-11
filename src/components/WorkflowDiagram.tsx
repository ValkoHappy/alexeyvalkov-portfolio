export function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="workflow-diagram" aria-label="Схема работы проекта">
      {steps.map((step, index) => (
        <div className="workflow-item" key={step}>
          <span>
            <b>{step}</b>
            <small>этап {index + 1}</small>
          </span>
          {index < steps.length - 1 && <i />}
        </div>
      ))}
    </div>
  );
}
