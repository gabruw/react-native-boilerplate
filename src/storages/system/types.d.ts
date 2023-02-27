import { store } from "@app/storages/system";

type SystemDispatch = typeof store.dispatch;

type SystemState = ReturnType<typeof store.getState>;

export { SystemDispatch, SystemState };
