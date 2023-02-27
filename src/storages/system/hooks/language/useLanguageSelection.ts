import { useSystemSelector } from "@app/storages/system/hooks/system/useSystemSelector";
import { Reducers } from "@app/storages/system/reducers/reducers";

const useLanguageSelection = () => useSystemSelector((state) => state[Reducers.LANGUAGE]);

export { useLanguageSelection };
