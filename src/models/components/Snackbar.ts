export interface SnackbarAction {
    label: string;
    onPress?: (() => void) | undefined;
}
