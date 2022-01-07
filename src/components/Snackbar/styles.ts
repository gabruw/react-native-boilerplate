//#region Imports

import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ALIGN from 'utils/styles/align';

//#endregion

const useSnackbarStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        error: {
            backgroundColor: colors.error
        },
        warning: {
            backgroundColor: colors.warning
        },
        success: {
            backgroundColor: colors.success
        },
        content: {
            ...ALIGN('center', 'between')
        },
        textContainer: {
            width: Dimensions.get('screen').width - 80
        }
    });
};

export default useSnackbarStyles;
