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
            state.token = action.payload.token;
        }
    }
});

export const { set } = actions;

export default reducer;
