//#region Imports

import { SnackbarAction } from 'models/components/Snackbar';

//#endregion

interface SnackbarRedux {
    text: string;
    isVisible: boolean;
    action?: SnackbarAction;
}

export default SnackbarRedux;
