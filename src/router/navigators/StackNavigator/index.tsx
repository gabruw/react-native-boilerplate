//#region Imports

import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationRoutesProps from 'models/router/StackNavigationRoutesProps';
import StackNavigatorProps from 'models/router/StackNavigatorProps';
import React, { FC } from 'react';
import ROUTE_NAMES from 'router/route-names';
import { STACK_ROUTES } from 'router/routes';
import TabNavigator from '../TabNavigator';

//#endregion

const { Navigator, Screen } = createStackNavigator<StackNavigationRoutesProps>();

const StackNavigator: FC = () => (
    <Navigator initialRouteName={ROUTE_NAMES.STACK.AUTHENTICATION}>
        <Screen name={ROUTE_NAMES.TABS.THIS} component={TabNavigator} />

        {STACK_ROUTES.map(({ name, options, component }: StackNavigatorProps, index) => (
            <Screen key={index} name={name} options={options} component={component} />
        ))}
    </Navigator>
);

export default StackNavigator;
