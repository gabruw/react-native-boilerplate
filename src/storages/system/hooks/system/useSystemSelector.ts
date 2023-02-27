import { TypedUseSelectorHook, useSelector } from "react-redux";

import { SystemState } from "@app/storages/system/types";

const useSystemSelector: TypedUseSelectorHook<SystemState> = useSelector;

export { useSystemSelector };
