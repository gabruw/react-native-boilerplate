//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarAction } from 'models/components/Snackbar';
import SnackbarRedux, { SetSnackbarRedux } from 'models/storages/redux/slices/SnackbarRedux';
import REDUCERS from 'utils/constants/redux/reducers.json';

//#endregion

const initialState: SnackbarRedux = {
    text: [],
    type: 'error',
    duration: 7000,
    isVisible: false,
    action: {} as SnackbarAction
};

const { actions, reducer } = createSlice({
    name: REDUCERS.SNACKBAR,
    initialState,
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        },
        set: (state, action: PayloadAction<SetSnackbarRedux>) => {
            state.type = action.payload.type || initialState.type;
            state.action = action.payload.action || initialState.action;
            state.isVisible = action.payload.isVisible || !state.isVisible;
            state.duration = action.payload.duration || initialState.duration;
            state.text = Array.isArray(action.payload.text) ? action.payload.text : Array(action.payload.text);
        }
    }
});

export const { toggle, set } = actions;

export default reducer;
