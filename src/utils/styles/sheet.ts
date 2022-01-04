//#region Imports

import { Dimensions, StatusBar } from 'react-native';

//#endregion

const SHEET = {
    CONTAINER: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    CONTENT: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - Number(StatusBar.currentHeight)
    }
};

export default SHEET;
