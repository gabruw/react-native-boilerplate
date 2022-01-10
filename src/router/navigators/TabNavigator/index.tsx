//#region Imports

import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigationRoutesProps from 'models/router/TabNavigationRoutesProps';
import TabNavigatorProps from 'models/router/TabNavigatorProps';
import React, { FC } from 'react';
import { TAB_ROUTES } from 'router/routes';

//#endregion

const { Navigator, Screen } = createBottomTabNavigator<TabNavigationRoutesProps>();

const TabNavigator: FC = () => (
    <Navigator screenOptions={{ headerShown: false }}>
        {TAB_ROUTES.map(({ name, iconName, options, component }: TabNavigatorProps, index) => (
            <Screen
                key={index}
                name={name}
                component={component}
                options={{
                    ...options,
                    tabBarIcon: (props) => <FontAwesome5 name={iconName} {...props} />
                }}
            />
        ))}
    </Navigator>
);

export default TabNavigator;
