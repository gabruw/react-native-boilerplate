//#region Imports

import SnackbarRedux, { SetSnackbarRedux } from 'models/storages/redux/slices/SnackbarRedux';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { set, toggle } from '../slices/snackbar';
import { useDefaultSelector } from './default';

//#endregion

export const useSnackbarSelector = (): SnackbarRedux => useDefaultSelector<SnackbarRedux>((state) => state.snackbar);

export const useSnackbarDispatch = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const toggleSnackbar = () => dispatch(toggle());

    const setSnackbar = (payload: SetSnackbarRedux) => {
        payload.text = t(payload.text);
        return dispatch(set(payload));
    };

    return {
        toggleSnackbar,
        setSnackbar
    };
};
