import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { locale } from "expo-localization";

import { LanguageActions } from "@app/storages/system/reducers/language/actions";
import { LanguageReducerState } from "@app/storages/system/reducers/language/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const initialState: LanguageReducerState = {
    language: locale,
};

const languageReducer = createSlice({
    name: Reducers.LANGUAGE,
    initialState,
    reducers: {
        [LanguageActions.RESET_LANGUAGE]: () => initialState,
        [LanguageActions.SET_LANGUAGE]: (state: LanguageReducerState, action: PayloadAction<string>) => ({
            ...state,
            language: action.payload,
        }),
    },
});

export { languageReducer };
