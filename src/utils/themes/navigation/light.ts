//#region Imports

import { DefaultTheme, Theme } from '@react-navigation/native';

//#endregion

const navigationLightTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors
    }
};

export default navigationLightTheme;
