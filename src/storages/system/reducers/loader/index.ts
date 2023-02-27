import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoaderActions } from "@app/storages/system/reducers/loader/actions";
import { LoaderReducerState } from "@app/storages/system/reducers/loader/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const initialState: LoaderReducerState = {
    isLoading: false,
};

const loaderReducer = createSlice({
    name: Reducers.LOADER,
    initialState,
    reducers: {
        [LoaderActions.RESET_LOADER]: () => initialState,
        [LoaderActions.TOGGLE_LOADER_VISIBILITY]: (state: LoaderReducerState) => ({
            ...state,
            isLoading: !state.isLoading,
        }),
        [LoaderActions.SET_LOADER_VISIBILITY]: (state: LoaderReducerState, action: PayloadAction<boolean>) => ({
            ...state,
            isLoading: action.payload,
        }),
    },
});

export { loaderReducer };
