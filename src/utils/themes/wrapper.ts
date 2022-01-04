//#region Imports

import ThemeRedux from 'models/storages/redux/slices/ThemeRedux';
import navigationDarkTheme from './navigation/dark';
import navigationLightTheme from './navigation/light';
import paperDarkTheme from './paper/dark';
import paperLightTheme from './paper/light';

//#endregion

const lightTheme: ThemeRedux = {
    schema: 'light',
    statusBarTheme: 'dark',
    paperTheme: paperLightTheme,
    navigationTheme: navigationLightTheme
};

const darkTheme: ThemeRedux = {
    schema: 'dark',
    statusBarTheme: 'light',
    paperTheme: paperDarkTheme,
    navigationTheme: navigationDarkTheme
};

const themesWrapper = {
    dark: darkTheme,
    light: lightTheme
};

export default themesWrapper;
