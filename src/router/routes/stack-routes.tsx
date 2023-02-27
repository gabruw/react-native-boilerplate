import { Guest } from "@app/pages/Authentication/Guest";
import { SignIn } from "@app/pages/Authentication/SignIn";
import { SignUp } from "@app/pages/Authentication/SignUp";
import { Welcome } from "@app/pages/Authentication/Welcome";
import { StackRoutes } from "@app/router/constants/routes";
import { StackNavigatorRoute } from "@app/router/navigator-route";

const STACK_ROUTES: StackNavigatorRoute[] = [
    {
        name: StackRoutes.Welcome,
        component: Welcome,
        options: {
            headerShown: false,
        },
    },
    {
        name: StackRoutes.SignIn,
        component: SignIn,
    },
    {
        name: StackRoutes.SignUp,
        component: SignUp,
    },
    {
        name: StackRoutes.Guest,
        component: Guest,
    },
];

export { STACK_ROUTES };
