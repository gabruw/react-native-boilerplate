import { useSystemSelector } from "@app/storages/system/hooks/system/useSystemSelector";
import { Reducers } from "@app/storages/system/reducers/reducers";

const useThemeSelector = () => useSystemSelector((state) => state[Reducers.THEME]);

export { useThemeSelector };
