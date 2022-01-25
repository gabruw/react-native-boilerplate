//#region Imports

import { SnackbarAction } from 'models/components/Snackbar';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Portal, Snackbar as PaperSnackbar } from 'react-native-paper';
import { useSnackbarDispatch, useSnackbarSelector } from 'storages/redux/hooks/snackbar';
import CountdownTimerSnackbar from './components/CountdownTimerSnackbar';
import TextSnackbar from './components/TextSnackbar';
import useSnackbarStyles from './styles';

//#endregion

const Snackbar = () => {
    const { t } = useTranslation();
    const styles = useSnackbarStyles();

    const { toggleSnackbar } = useSnackbarDispatch();
    const { isVisible, duration, type, action } = useSnackbarSelector();

    const label = useMemo((): string => t(action.label || 'commons.snackbar.default.action-label'), [action]);
    const partialAction = useMemo(
        (): SnackbarAction | undefined => action.onPress && { ...action, label, onPress: handleActionPress },
        [action]
    );

    const handleActionPress = useCallback(() => {
        action.onPress && action.onPress();
        toggleSnackbar();
    }, [action]);

    return (
        <Portal>
            <PaperSnackbar
                visible={isVisible}
                duration={duration}
                style={styles[type]}
                action={partialAction}
                onDismiss={() => toggleSnackbar()}
            >
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <TextSnackbar />
                    </View>

                    {!action.onPress && <CountdownTimerSnackbar />}
                </View>
            </PaperSnackbar>
        </Portal>
    );
};

export default Snackbar;
