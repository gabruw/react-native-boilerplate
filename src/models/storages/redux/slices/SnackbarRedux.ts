//#region Imports

import { SnackbarAction } from 'models/components/Snackbar';

//#endregion

type SnackbarType = 'error' | 'warning' | 'success';

export interface SetSnackbarRedux {
    duration?: number;
    type?: SnackbarType;
    isVisible?: boolean;
    text: Array<string>;
    action?: SnackbarAction;
}

interface SnackbarRedux {
    duration: number;
    type: SnackbarType;
    isVisible: boolean;
    text: Array<string>;
    action: SnackbarAction;
}

export default SnackbarRedux;
