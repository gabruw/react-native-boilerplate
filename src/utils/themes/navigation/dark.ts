//#region Imports

import { DarkTheme, Theme } from '@react-navigation/native';

//#endregion

export const navigationDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors
    }
};

export default navigationDarkTheme;
