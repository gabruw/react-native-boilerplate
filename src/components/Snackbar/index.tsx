//#region Imports

import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Snackbar as PaperSnackbar } from 'react-native-paper';
import { useSnackbarDispatch, useSnackbarSelector } from 'storages/redux/hooks/snackbar';

//#endregion

const Snackbar: FC = () => {
    const { t } = useTranslation();

    const { toggleSnackbar } = useSnackbarDispatch();
    const { isVisible, text, action } = useSnackbarSelector();

    const handleActionPress = useCallback(() => {
        action?.onPress && action.onPress();
        toggleSnackbar();
    }, [action, toggleSnackbar]);

    return (
        <PaperSnackbar
            visible={isVisible}
            onDismiss={() => !action?.onPress && toggleSnackbar()}
            action={action && { ...action, onPress: handleActionPress }}
        >
            {t(text)}
        </PaperSnackbar>
    );
};

export default Snackbar;
