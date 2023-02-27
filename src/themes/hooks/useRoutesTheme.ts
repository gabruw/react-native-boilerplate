import { Theme } from "@react-navigation/native";

import { useThemeSelector } from "@app/storages/system/hooks/theme/useThemeSelector";
import { DARK_THEME, LIGHT_THEME } from "@app/themes/schemas/navigators/bottom-tab";

const useRoutesTheme = (): Theme => {
    const { isDark } = useThemeSelector();

    return isDark ? DARK_THEME : LIGHT_THEME;
};

export { useRoutesTheme };
