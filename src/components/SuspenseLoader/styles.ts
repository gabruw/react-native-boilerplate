//#region Imports

import { StatusBar, StyleSheet } from 'react-native';
import ALIGN from 'utils/styles/align';
import SHEET from 'utils/styles/sheet';

//#endregion

const useSuspenseLoaderStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN(),
            ...SHEET.CONTAINER
        },
        animation: {
            marginBottom: StatusBar.currentHeight
        }
    });

export default useSuspenseLoaderStyles;
