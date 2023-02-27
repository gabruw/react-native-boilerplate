import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { snackbarReducer } from "@app/storages/system/reducers/snackbar";
import {
    HideSnackbarAction,
    ResetSnackbarAction,
    SetSnackbarAction,
} from "@app/storages/system/reducers/snackbar/actions";
import { SnackbarReducerState } from "@app/storages/system/reducers/snackbar/types";

type SnackbarActions = {
    hideSnackbarDispatch: () => HideSnackbarAction;
    resetSnackbarDispatch: () => ResetSnackbarAction;
    setSnackbarDispatch: (payload: SnackbarReducerState) => SetSnackbarAction;
};

const useSnackbarActions = (): SnackbarActions => {
    const dispatch = useSystemDispatch();

    const { setSnackbar, hideSnackbar, resetSnackbar } = snackbarReducer.actions;

    const hideSnackbarDispatch = (): HideSnackbarAction => dispatch(hideSnackbar());

    const setSnackbarDispatch = (payload: SnackbarReducerState): SetSnackbarAction => dispatch(setSnackbar(payload));

    const resetSnackbarDispatch = (): ResetSnackbarAction => dispatch(resetSnackbar());

    return {
        setSnackbarDispatch,
        hideSnackbarDispatch,
        resetSnackbarDispatch,
    };
};

export { useSnackbarActions };
