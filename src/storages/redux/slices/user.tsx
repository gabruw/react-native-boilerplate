//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import REDUCERS from 'utils/constants/redux/reducers.json';

//#endregion

const initialState: UserRedux = {
    token: undefined
};

const { actions, reducer } = createSlice({
    name: REDUCERS.USER,
    initialState,
    reducers: {
        set: (state, action: PayloadAction<UserRedux>) => {
            Object.assign(state, action.payload);
        },
        reset: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const { set, reset } = actions;

export default reducer;
