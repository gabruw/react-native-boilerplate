//#region Imports

import { DarkTheme } from 'react-native-paper';
import fontsTheme from './fonts';

//#endregion

const paperDarkTheme: ReactNativePaper.Theme = {
    ...DarkTheme,
    dark: true,
    fonts: fontsTheme,
    colors: {
        success: '#66CF71',
        warning: '#CFBE66',
        ...DarkTheme.colors
    }
};

export default paperDarkTheme;
