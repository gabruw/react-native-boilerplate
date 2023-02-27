import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { languageReducer } from "@app/storages/system/reducers/language";
import { LanguageReducerState } from "@app/storages/system/reducers/language/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const languagePersistedReducer = persistReducer<LanguageReducerState, Action<LanguageReducerState>>(
    {
        key: Reducers.THEME,
        storage: AsyncStorage,
    },
    languageReducer.reducer
);

export { languagePersistedReducer };
