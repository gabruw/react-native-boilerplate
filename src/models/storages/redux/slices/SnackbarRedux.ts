//#region Imports

import { SnackbarAction } from 'models/components/Snackbar';

//#endregion

type SnackbarType = 'error' | 'warning' | 'success';

export interface SetSnackbarRedux {
    text: string[];
    duration?: number;
    type?: SnackbarType;
    isVisible?: boolean;
    action?: SnackbarAction;
}

interface SnackbarRedux {
    text: string[];
    duration: number;
    type: SnackbarType;
    isVisible: boolean;
    action: SnackbarAction;
}

export default SnackbarRedux;
