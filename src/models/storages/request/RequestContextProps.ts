//#region Imports

//#endregion

export interface RequestSuccessProps {
    data?: any;
    status?: number;
}

export interface RequestErrorProps {
    status?: number;
    errors: Array<string>;
}

export interface RequestContextStateProps extends RequestSuccessProps, RequestErrorProps {
    isLoading: boolean;
}

interface RequestContextProps {
    setResponse: (response: RequestSuccessProps | RequestErrorProps) => void;
}

export default RequestContextProps;
