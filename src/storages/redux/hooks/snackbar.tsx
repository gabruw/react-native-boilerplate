//#region Imports

import SnackbarRedux from 'models/storages/redux/slices/SnackbarRedux';
import { useDispatch } from 'react-redux';
import { set, toggle } from '../slices/snackbar';
import { useDefaultSelector } from './default';

//#endregion

export const useSnackbarSelector = (): SnackbarRedux => useDefaultSelector<SnackbarRedux>((state) => state.snackbar);

export const useSnackbarDispatch = () => {
    const dispatch = useDispatch();

    const toggleSnackbar = () => dispatch(toggle());

    const setSnackbar = (payload: SnackbarRedux) => dispatch(set(payload));

    return {
        toggleSnackbar,
        setSnackbar
    };
};
