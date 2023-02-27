import { Reducers } from "@app/storages/system/reducers/reducers";
import { SnackbarReducerState } from "@app/storages/system/reducers/snackbar/types";

export enum SnackbarActions {
    SET_SNACKBAR = "setSnackbar",
    HIDE_SNACKBAR = "hideSnackbar",
    RESET_SNACKBAR = "resetSnackbar",
}

type ResetSnackbarAction = {
    type: `${Reducers.SNACKBAR}/${SnackbarActions.RESET_SNACKBAR}`;
};

type HideSnackbarAction = {
    type: `${Reducers.SNACKBAR}/${SnackbarActions.HIDE_SNACKBAR}`;
};

type SetSnackbarAction = {
    type: `${Reducers.SNACKBAR}/${SnackbarActions.SET_SNACKBAR}`;
    payload: SnackbarReducerState;
};

export { ResetSnackbarAction, SetSnackbarAction, HideSnackbarAction };
