import { Reducers } from "@app/storages/system/reducers/reducers";

export enum ThemeActions {
    RESET_THEME = "resetTheme",
    TOGGLE_THEME = "toggleTheme",
    SET_IS_DARK_THEME = "setIsDarkTheme",
}

type ResetThemeAction = {
    type: `${Reducers.THEME}/${ThemeActions.RESET_THEME}`;
};

type SetIsDarkThemeAction = {
    type: `${Reducers.THEME}/${ThemeActions.SET_IS_DARK_THEME}`;
    payload: boolean;
};

type ToggleThemeAction = {
    type: `${Reducers.THEME}/${ThemeActions.TOGGLE_THEME}`;
};

export { ResetThemeAction, SetIsDarkThemeAction, ToggleThemeAction };
