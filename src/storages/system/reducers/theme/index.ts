import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appearance } from "react-native";

import { Reducers } from "@app/storages/system/reducers/reducers";
import { ThemeActions } from "@app/storages/system/reducers/theme/actions";
import { ThemeReducerState } from "@app/storages/system/reducers/theme/types";

const initialState: ThemeReducerState = {
    isDark: Appearance.getColorScheme() === "dark",
};

const themeReducer = createSlice({
    name: Reducers.THEME,
    initialState,
    reducers: {
        [ThemeActions.RESET_THEME]: () => initialState,
        [ThemeActions.TOGGLE_THEME]: (state: ThemeReducerState) => ({
            ...state,
            isDark: !state.isDark,
        }),
        [ThemeActions.SET_IS_DARK_THEME]: (state: ThemeReducerState, action: PayloadAction<boolean>) => ({
            ...state,
            isDark: action.payload,
        }),
    },
});

export { themeReducer };
