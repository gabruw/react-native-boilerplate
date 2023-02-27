import { Icon } from "@app/components/Icon";
import { Home } from "@app/pages/Home";
import { Profile } from "@app/pages/Profile";
import { MainTabsRoutes } from "@app/router/constants/routes";
import { BottomTabNavigatorRoute } from "@app/router/navigator-route";

const MAIN_BOTTOM_TAB_ROUTES: BottomTabNavigatorRoute[] = [
    {
        component: Home,
        name: MainTabsRoutes.Home,
        options: {
            tabBarIcon: (props) => <Icon {...props} name="home" />,
        },
    },
    {
        component: Profile,
        name: MainTabsRoutes.Profile,
        options: {
            tabBarIcon: (props) => <Icon {...props} name="account" />,
        },
    },
];

export { MAIN_BOTTOM_TAB_ROUTES };
