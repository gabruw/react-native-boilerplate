//#region Imports

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { EventMapBase, NavigationHelpers } from '@react-navigation/native';
import Navigation from './Navigation';
import TabNavigationRoutesProps from './TabNavigationRoutesProps';

//#endregion

export type TabNavigationProps = NavigationHelpers<TabNavigationRoutesProps, EventMapBase>;

interface TabNavigatorProps extends Navigation {
    iconName: string;
    options?: BottomTabNavigationOptions;
}

export default TabNavigatorProps;
