//#region Imports

import { DefaultTheme } from 'react-native-paper';
import fontsTheme from './fonts';

//#endregion

const paperLightTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    dark: false,
    fonts: fontsTheme,
    colors: {
        success: '#66CF71',
        warning: '#CFBE66',
        ...DefaultTheme.colors
    }
};

export default paperLightTheme;
