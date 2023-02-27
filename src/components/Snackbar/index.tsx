import React from "react";
import { Snackbar as PaperSnackbar, Text } from "react-native-paper";

import { SNACKBAR_TYPES } from "@app/components/Snackbar/constants/snackbar-types";
import { useSnackbarActions } from "@app/storages/system/hooks/snackbar/useSnackbarActions";
import { useSnackbarSelection } from "@app/storages/system/hooks/snackbar/useSnackbarSelection";

const Snackbar = () => {
    const { isVisible, type, action, duration, description } = useSnackbarSelection();
    const { resetSnackbarDispatch, hideSnackbarDispatch } = useSnackbarActions();

    const { icon, style } = SNACKBAR_TYPES[type];

    const handleDismiss = () => {
        hideSnackbarDispatch();
        setTimeout(resetSnackbarDispatch, 100);
    };

    return (
        <PaperSnackbar
            icon={icon}
            style={style}
            duration={duration}
            onDismiss={handleDismiss}
            visible={isVisible || !!duration}
            action={{
                uppercase: true,
                loading: action?.isLoading,
                disabled: action?.isDisabled,
                label: action?.label || "HIDE",
                onPress: action?.onPress || handleDismiss,
                labelStyle: {
                    color: "#FFFFFF",
                },
            }}
        >
            <Text>{description}</Text>
        </PaperSnackbar>
    );
};

export { Snackbar };
