import { useDispatch } from "react-redux";

import { SystemDispatch } from "@app/storages/system/types";

const useSystemDispatch = () => useDispatch<SystemDispatch>();

export { useSystemDispatch };
