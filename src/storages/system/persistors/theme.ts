import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { Reducers } from "@app/storages/system/reducers/reducers";
import { themeReducer } from "@app/storages/system/reducers/theme";
import { ThemeReducerState } from "@app/storages/system/reducers/theme/types";

const themePersistedReducer = persistReducer<ThemeReducerState, Action<ThemeReducerState>>(
    {
        key: Reducers.THEME,
        storage: AsyncStorage,
    },
    themeReducer.reducer
);

export { themePersistedReducer };
