//#region Imports

import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from 'models/router/TabNavigatorProps';

//#endregion

const useTabNavigation = (): TabNavigationProps => useNavigation<TabNavigationProps>();

export default useTabNavigation;
