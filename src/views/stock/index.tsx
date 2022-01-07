//#region Imports

import useStackNavigation from 'hooks/router/useStackNavigation';
import React, { FC, Fragment } from 'react';
import { Button } from 'react-native-paper';
import ROUTE_NAMES from 'router/route-names';
import { useUserDispatch } from 'storages/redux/hooks/user';

//#endregion

const Stock: FC = () => {
    const { resetUser } = useUserDispatch();
    const { navigate } = useStackNavigation();

    return (
        <Fragment>
            <Button onPress={() => resetUser()}>Logoff</Button>
            <Button onPress={() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION)}>Go to Stack</Button>
        </Fragment>
    );
};

export default Stock;
