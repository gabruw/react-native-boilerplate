//#region Imports

import { ComponentType } from 'react';
import { RoutesEnum } from 'router/route-names';

//#endregion

interface Navigation {
    name: RoutesEnum;
    component: ComponentType;
}

export default Navigation;
