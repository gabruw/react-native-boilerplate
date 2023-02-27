import { useThemeSelector } from "@app/storages/system/hooks/theme/useThemeSelector";
import { DARK_THEME, LIGHT_THEME } from "@app/themes/schemas/default";

const usePaperTheme = () => {
    const { isDark } = useThemeSelector();

    return isDark ? DARK_THEME : LIGHT_THEME;
};

export { usePaperTheme };
