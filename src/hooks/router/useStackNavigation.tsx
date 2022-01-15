//#region Imports

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from 'models/router/StackNavigatorProps';

//#endregion

const useStackNavigation = (): StackNavigationProps => useNavigation<StackNavigationProps>();

export default useStackNavigation;
