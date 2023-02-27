import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { themeReducer } from "@app/storages/system/reducers/theme";
import { SetIsDarkThemeAction, ToggleThemeAction } from "@app/storages/system/reducers/theme/actions";

type ThemeActions = {
    toggleThemeDispatch: () => ToggleThemeAction;
    setIsDarkThemeDispatch: (payload: boolean) => SetIsDarkThemeAction;
};

const useThemeActions = (): ThemeActions => {
    const dispatch = useSystemDispatch();

    const { toggleTheme, setIsDarkTheme } = themeReducer.actions;

    const toggleThemeDispatch = (): ToggleThemeAction => dispatch(toggleTheme());

    const setIsDarkThemeDispatch = (payload: boolean): SetIsDarkThemeAction => dispatch(setIsDarkTheme(payload));

    return {
        toggleThemeDispatch,
        setIsDarkThemeDispatch,
    };
};

export { useThemeActions };
