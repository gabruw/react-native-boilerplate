//#region Imports

import asyncStorage from './async-storage.json';
import buttons from './buttons.json';
import snackbar from './snackbar.json';

//#endregion

const CommonsLocales = {
    ...buttons,
    ...snackbar,
    ...asyncStorage
};

export default CommonsLocales;
