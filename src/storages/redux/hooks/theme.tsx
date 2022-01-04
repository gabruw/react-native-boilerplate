//#region Imports

import ThemeRedux, { ThemeSchema } from 'models/storages/redux/slices/ThemeRedux';
import { useDispatch } from 'react-redux';
import { set, toggle } from '../slices/theme';
import { useDefaultSelector } from './default';

//#endregion

export const useThemeSelector = (): ThemeRedux => useDefaultSelector<ThemeRedux>((state) => state.theme);

export const useThemeDispatch = () => {
    const dispatch = useDispatch();

    const toggleTheme = () => dispatch(toggle());

    const setTheme = (payload: ThemeSchema) => dispatch(set(payload));

    return {
        toggleTheme,
        setTheme
    };
};
