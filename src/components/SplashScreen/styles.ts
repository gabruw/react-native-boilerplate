//#region Imports

import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

//#endregion

const useSplashScreenStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        }
    });
};

export default useSplashScreenStyles;
