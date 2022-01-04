//#region Imports

import { ParamListBase } from '@react-navigation/native';
import { RoutesEnum } from 'router/route-names';

//#endregion

type RoutesProps = {
    [RoutesEnum.Tabs]: undefined;
    [RoutesEnum.Stock]: undefined;
};

type TabNavigationRoutesProps = RoutesProps & ParamListBase;

export default TabNavigationRoutesProps;
