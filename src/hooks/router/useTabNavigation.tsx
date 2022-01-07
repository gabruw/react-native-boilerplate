//#region Imports

import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from 'models/router/TabNavigatorProps';

//#endregion

const useTabNavigation = () => useNavigation<TabNavigationProps>();

export default useTabNavigation;
