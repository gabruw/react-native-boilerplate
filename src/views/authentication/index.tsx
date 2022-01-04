//#region Imports

import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from 'models/router/TabNavigatorProps';
import React, { FC, Fragment } from 'react';
import { Button } from 'react-native-paper';
import ROUTE_NAMES from 'router/route-names';
import useUserService from 'services/user/useUserService';
import { useThemeDispatch } from 'storages/redux/hooks/theme';
import { useUserDispatch } from 'storages/redux/hooks/user';
import AuthenticationForm from './components/AuthenticationForm';

//#endregion

const Authentication: FC = () => {
    const { navigate } = useNavigation<TabNavigationProps>();

    const { toggleTheme } = useThemeDispatch();
    const { setUserDispatch } = useUserDispatch();

    const { fetchLogin } = useUserService({ setLogin: setUserDispatch });

    return (
        <Fragment>
            <Button onPress={() => toggleTheme()}>Toggle Theme</Button>
            <Button onPress={() => fetchLogin({ email: '', password: '' })}>Refetch</Button>

            <Button onPress={() => navigate(ROUTE_NAMES.TABS.THIS, { screen: ROUTE_NAMES.TABS.STOCK })}>
                Go to Tabs
            </Button>

            <AuthenticationForm />
        </Fragment>
    );
};

export default Authentication;
