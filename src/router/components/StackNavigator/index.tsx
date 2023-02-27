import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { BottomTabNavigator } from "@app/router/components/BottomTabsNavigator";
import { Navigators } from "@app/router/constants/navigators";
import { StackRoutes } from "@app/router/constants/routes";
import { StackParamList } from "@app/router/param-list";
import { STACK_ROUTES } from "@app/router/routes/stack-routes";

const { Navigator, Screen } = createStackNavigator<StackParamList>();

const StackNavigator = () => (
    <Navigator initialRouteName={StackRoutes.Welcome}>
        <Screen name={Navigators.MainTabs} component={BottomTabNavigator} />

        {STACK_ROUTES.map((route) => (
            <Screen key={route.name} {...route} />
        ))}
    </Navigator>
);

export { StackNavigator };
