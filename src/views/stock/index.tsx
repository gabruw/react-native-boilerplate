//#region Imports

import ContainerPage from 'components/ContainerPage';
import useStackNavigation from 'hooks/router/useStackNavigation';
import React from 'react';
import { Button } from 'react-native-paper';
import ROUTE_NAMES from 'router/route-names';
import { useUserDispatch } from 'storages/redux/hooks/user';

//#endregion

const Stock = () => {
    const { resetUser } = useUserDispatch();
    const { navigate } = useStackNavigation();

    return (
        <ContainerPage>
            <Button onPress={() => resetUser()}>Logoff</Button>
            <Button onPress={() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION)}>Go to Stack</Button>
        </ContainerPage>
    );
};

export default Stock;
