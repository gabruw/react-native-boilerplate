import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ReactElement } from "react";

import { useThemeSelector } from "@app/storages/system/hooks/theme/useThemeSelector";

const StatusBar = (): ReactElement => {
    const { isDark } = useThemeSelector();

    return <ExpoStatusBar style={isDark ? "light" : "dark"} animated />;
};

export { StatusBar };
