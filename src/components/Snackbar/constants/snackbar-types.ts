import { SnackbarProps } from "react-native-paper";

type SnackbarType = {
    icon: string;
} & Pick<SnackbarProps, "style">;

const SNACKBAR_TYPES: Record<string, SnackbarType> = {
    success: {
        icon: "check_circle",
        style: {
            backgroundColor: "#278411",
        },
    },
    warning: {
        icon: "error",
        style: {
            backgroundColor: "#EFBA40",
        },
    },
    error: {
        icon: "cancel",
        style: {
            backgroundColor: "#C10611",
        },
    },
};

export { SNACKBAR_TYPES };
