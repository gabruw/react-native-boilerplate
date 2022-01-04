//#region Imports

import { Theme as NavigationTheme } from '@react-navigation/native';
import { StatusBarStyle } from 'expo-status-bar';

//#endregion

export type ThemeSchema = 'dark' | 'light';

interface ThemeRedux {
    schema: ThemeSchema;
    statusBarTheme: StatusBarStyle;
    navigationTheme: NavigationTheme;
    paperTheme: ReactNativePaper.Theme;
}

export default ThemeRedux;
