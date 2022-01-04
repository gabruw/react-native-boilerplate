//#region Imports

import { DarkTheme } from 'react-native-paper';
import fontsTheme from './fonts';

//#endregion

const paperDarkTheme: ReactNativePaper.Theme = {
    ...DarkTheme,
    dark: true,
    fonts: fontsTheme,
    colors: {
        ...DarkTheme.colors
    }
};

export default paperDarkTheme;
