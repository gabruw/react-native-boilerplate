import { NavigationContainer as NavigationProvider } from "@react-navigation/native";
import React from "react";

import { StackNavigator } from "@app/router/components/StackNavigator";
import { useRoutesTheme } from "@app/themes/hooks/useRoutesTheme";

const Router = () => {
    const theme = useRoutesTheme();

    return (
        <NavigationProvider theme={theme}>
            <StackNavigator />
        </NavigationProvider>
    );
};

export { Router };
