//#region Imports

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from 'models/router/StackNavigatorProps';

//#endregion

const useStackNavigation = () => useNavigation<StackNavigationProps>();

export default useStackNavigation;
