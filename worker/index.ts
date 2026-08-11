import handler from "vinext/server/app-router-entry";

type WorkerEnv = Parameters<typeof handler.fetch>[1];
type WorkerContext = Parameters<typeof handler.fetch>[2];

export default {
  fetch(request: Request, env: WorkerEnv, ctx: WorkerContext) {
    return handler.fetch(request, env, ctx);
  }
};
