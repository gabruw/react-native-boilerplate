import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Reducers } from "@app/storages/system/reducers/reducers";
import { SnackbarActions } from "@app/storages/system/reducers/snackbar/actions";
import { SnackbarReducerState } from "@app/storages/system/reducers/snackbar/types";

const initialState: SnackbarReducerState = {
    type: "success",
    isVisible: false,
};

const snackbarReducer = createSlice({
    name: Reducers.SNACKBAR,
    initialState,
    reducers: {
        [SnackbarActions.RESET_SNACKBAR]: () => initialState,
        [SnackbarActions.HIDE_SNACKBAR]: (state: SnackbarReducerState) => ({
            ...state,
            duration: initialState.duration,
            isVisible: initialState.isVisible,
        }),
        [SnackbarActions.SET_SNACKBAR]: (state: SnackbarReducerState, action: PayloadAction<SnackbarReducerState>) => ({
            ...state,
            ...action.payload,
        }),
    },
});

export { snackbarReducer };
