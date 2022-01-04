//#region Imports

import { StatusBar } from 'react-native';

//#endregion

const SHEET = {
    CONTAINER: {
        flex: 1
    },
    CONTENT: {
        marginTop: Number(StatusBar.currentHeight)
    }
};

export default SHEET;
