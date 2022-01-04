//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ThemeRedux, { ThemeSchema } from 'models/storages/redux/slices/ThemeRedux';
import REDUCERS from 'utils/constants/redux/reducers.json';
import themesWrapper from 'utils/themes/wrapper';

//#endregion

const initialState: ThemeRedux = themesWrapper.light;

const { actions, reducer } = createSlice({
    name: REDUCERS.THEME,
    initialState,
    reducers: {
        toggle: (state) => {
            const schema = state.schema === 'light' ? 'dark' : 'light';
            const { paperTheme, statusBarTheme, navigationTheme } = themesWrapper[schema];

            state.schema = schema;
            state.paperTheme = paperTheme;
            state.statusBarTheme = statusBarTheme;
            state.navigationTheme = navigationTheme;
        },
        set: (state, action: PayloadAction<ThemeSchema>) => {
            const { schema, paperTheme, statusBarTheme, navigationTheme } = themesWrapper[action.payload];

            state.schema = schema;
            state.paperTheme = paperTheme;
            state.statusBarTheme = statusBarTheme;
            state.navigationTheme = navigationTheme;
        }
    }
});

export const { toggle, set } = actions;

export default reducer;
