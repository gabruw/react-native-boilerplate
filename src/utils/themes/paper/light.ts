//#region Imports

import { DefaultTheme } from 'react-native-paper';
import fontsTheme from './fonts';

//#endregion

const paperLightTheme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    dark: false,
    fonts: fontsTheme,
    colors: {
        ...DefaultTheme.colors
    }
};

export default paperLightTheme;
