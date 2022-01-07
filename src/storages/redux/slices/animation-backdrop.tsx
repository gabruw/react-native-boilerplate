//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimationBackdropTypes } from 'models/animation/AnimationBackdropLibrary';
import AnimationBackdropRedux from 'models/storages/redux/slices/AnimationBackdropRedux';
import REDUCERS from 'utils/constants/redux/reducers.json';

//#endregion

const initialState: AnimationBackdropRedux = {
    visibility: false,
    animation: undefined
};

const { actions, reducer } = createSlice({
    name: REDUCERS.ANIMATION_BACKDROP,
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<AnimationBackdropTypes | undefined>) => {
            state.animation = action.payload;
            state.visibility = !state.visibility;
        },
        set: (state, action: PayloadAction<AnimationBackdropRedux>) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { toggle, set } = actions;

export default reducer;
