//#region Imports

import StackNavigatorProps from 'models/router/StackNavigatorProps';
import TabNavigatorProps from 'models/router/TabNavigatorProps';
import Authentication from 'views/authentication';
import Profile from 'views/profile';
import Stock from 'views/stock';
import ROUTE_NAMES from './route-names';

//#endregion

export const STACK_ROUTES: Array<StackNavigatorProps> = [
    {
        name: ROUTE_NAMES.STACK.AUTHENTICATION,
        component: Authentication,
        options: { headerShown: false }
    }
];

export const TAB_ROUTES: Array<TabNavigatorProps> = [
    {
        name: ROUTE_NAMES.TABS.STOCK,
        iconName: 'boxes',
        component: Stock
    },
    {
        name: ROUTE_NAMES.TABS.PROFILE,
        iconName: 'user',
        component: Profile
    }
];
