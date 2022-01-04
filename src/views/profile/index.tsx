//#region Imports

import React, { FC, Fragment } from 'react';
import { Button } from 'react-native-paper';
import { useThemeDispatch } from 'storages/redux/hooks/theme';

//#endregion

const Profile: FC = () => {
    const { toggleTheme } = useThemeDispatch();

    return (
        <Fragment>
            <Button onPress={() => toggleTheme()}>Change theme</Button>
        </Fragment>
    );
};

export default Profile;
