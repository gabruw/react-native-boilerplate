import { GestureResponderEvent } from "react-native";

type SnackbarReducerState = {
    duration?: number;
    isVisible?: boolean;
    description?: string;
    type: "error" | "success" | "warning";
    action?: {
        label?: string;
        isLoading?: boolean;
        isDisabled?: boolean;
        onPress?: (e: GestureResponderEvent) => void;
    };
};

export { SnackbarReducerState };
