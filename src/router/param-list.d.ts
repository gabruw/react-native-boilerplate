import { NavigatorScreenParams } from "@react-navigation/native";

import { Navigators } from "@app/router/constants/navigators";
import { MainTabsRoutes, StackRoutes } from "@app/router/constants/routes";

type BottomTabParamList = {
    [MainTabsRoutes.Home]: undefined;
    [MainTabsRoutes.Profile]: undefined;
};

type StackParamList = {
    [StackRoutes.Guest]: undefined;
    [StackRoutes.SignIn]: undefined;
    [StackRoutes.SignUp]: undefined;
    [StackRoutes.Welcome]: undefined;
    [Navigators.MainTabs]: NavigatorScreenParams<BottomTabParamList>;
};

export { StackParamList, BottomTabParamList };
