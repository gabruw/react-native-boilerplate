import { useSystemSelector } from "@app/storages/system/hooks/system/useSystemSelector";
import { Reducers } from "@app/storages/system/reducers/reducers";

const useSnackbarSelection = () => useSystemSelector((state) => state[Reducers.SNACKBAR]);

export { useSnackbarSelection };
