//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarAction } from 'models/components/Snackbar';
import SnackbarRedux from 'models/storages/redux/slices/SnackbarRedux';
import REDUCERS from 'utils/constants/redux/reducers.json';

//#endregion

const initialState: SnackbarRedux = {
    text: '',
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
        set: (state, action: PayloadAction<SnackbarRedux>) => {
            state.text = action.payload.text;
            state.action = action.payload.action;
            state.isVisible = action.payload.isVisible;
        }
    }
});

export const { toggle, set } = actions;

export default reducer;
