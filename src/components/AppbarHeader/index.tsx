//#region Imports

import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FC, useMemo } from 'react';
import { Appbar } from 'react-native-paper';

//#endregion

const { Header, Content, BackAction } = Appbar;

const AppbarHeader: FC<StackHeaderProps | BottomTabHeaderProps> = ({
    navigation: { canGoBack, goBack },
    route: { name }
}) => {
    const canReturn = useMemo(() => canGoBack(), [canGoBack]);

    return (
        <Header>
            {canReturn && <BackAction onPress={() => goBack()} />}
            <Content title={name} />
        </Header>
    );
};

export default AppbarHeader;
