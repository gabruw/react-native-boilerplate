import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { MainTabsRoutes } from "@app/router/constants/routes";
import { MAIN_BOTTOM_TAB_ROUTES } from "@app/router/routes/main-bottom-tab-routes";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Navigator
        initialRouteName={MainTabsRoutes.Home}
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}
    >
        {MAIN_BOTTOM_TAB_ROUTES.map((route) => (
            <Screen key={route.name} {...route} />
        ))}
    </Navigator>
);

export { BottomTabNavigator };
