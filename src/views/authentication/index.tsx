//#region Imports

import { useFocusEffect } from '@react-navigation/native';
import ContainerPage from 'components/ContainerPage';
import useTabNavigation from 'hooks/router/useTabNavigation';
import React, { useCallback } from 'react';
import ROUTE_NAMES from 'router/route-names';
import { useUserSelector } from 'storages/redux/hooks/user';
import AuthenticationForm from './components/AuthenticationForm';

//#endregion

const Authentication = () => {
    const user = useUserSelector();
    const { navigate } = useTabNavigation();

    useFocusEffect(
        useCallback(() => {
            if (Object.values(user).length) {
                navigate(ROUTE_NAMES.TABS.THIS, { screen: ROUTE_NAMES.TABS.STOCK });
            }
        }, [user])
    );

    return (
        <ContainerPage>
            <AuthenticationForm />
        </ContainerPage>
    );
};

export default Authentication;
