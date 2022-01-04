//#region Imports

import { EventMapBase, NavigationHelpers } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import Navigation from './Navigation';
import StackNavigationRoutesProps from './StackNavigationRoutesProps';

//#endregion

export type StackNavigationProps = NavigationHelpers<StackNavigationRoutesProps, EventMapBase>;

interface StackNavigatorProps extends Navigation {
    options?: StackNavigationOptions;
}

export default StackNavigatorProps;
