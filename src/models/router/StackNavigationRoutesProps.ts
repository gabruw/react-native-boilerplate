//#region Imports

import { ParamListBase } from '@react-navigation/native';
import { RoutesEnum } from 'router/route-names';

//#endregion

type RoutesProps = {
    [RoutesEnum.Stack]: undefined;
    [RoutesEnum.Authentication]: undefined;
};

type StackNavigationRoutesProps = RoutesProps & ParamListBase;

export default StackNavigationRoutesProps;
