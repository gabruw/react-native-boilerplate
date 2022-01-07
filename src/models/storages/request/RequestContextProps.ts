//#region Imports

//#endregion

export interface StateSuccessProps {
    data?: unknown;
    status?: number;
}

export interface StateErrorProps {
    status?: number;
    errors: Array<string>;
}

export interface RequestContextStateProps extends StateSuccessProps, StateErrorProps {
    isLoading: boolean;
}

interface RequestContextProps {
    setResponse: (response: StateSuccessProps | StateErrorProps) => void;
}

export default RequestContextProps;
