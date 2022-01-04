//#region Imports

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from 'models/router/StackNavigatorProps';
import React, { FC, Fragment } from 'react';
import { Button } from 'react-native-paper';
import ROUTE_NAMES from 'router/route-names';

//#endregion

const Stock: FC = () => {
    const { navigate } = useNavigation<StackNavigationProps>();

    return (
        <Fragment>
            <Button onPress={() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION)}>Go to Stack</Button>
        </Fragment>
    );
};

export default Stock;
