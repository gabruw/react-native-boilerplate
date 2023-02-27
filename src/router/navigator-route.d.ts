import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { StackNavigationOptions } from "@react-navigation/stack";
import { ReactElement } from "react";

import { MainTabsRoutes, StackRoutes } from "@app/router/constants/routes";

type StackNavigatorRoute = {
    name: StackRoutes;
    component: () => ReactElement;
    options?: StackNavigationOptions;
};

type BottomTabNavigatorRoute = {
    name: MainTabsRoutes;
    component: () => ReactElement;
    options?: BottomTabNavigationOptions;
};

export { StackNavigatorRoute, BottomTabNavigatorRoute };
