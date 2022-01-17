//#region Imports

import ContainerPage from 'components/ContainerPage';
import React, { FC } from 'react';
import { Button } from 'react-native-paper';
import { useThemeDispatch } from 'storages/redux/hooks/theme';

//#endregion

const Profile: FC = () => {
    const { toggleTheme } = useThemeDispatch();

    return (
        <ContainerPage>
            <Button onPress={() => toggleTheme()}>Change theme</Button>
        </ContainerPage>
    );
};

export default Profile;
