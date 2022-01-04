//#region Imports

import {
    RequestContextStateProps,
    RequestErrorProps,
    RequestSuccessProps
} from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useCallback } from 'react';

//#endregion

interface RequestStateProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

interface RequestState {
    setIsLoading: (response: boolean) => void;
    setResponseError: (response: RequestErrorProps) => void;
    setResponseSuccess: (response: RequestSuccessProps) => void;
}

const useRequestState = ({ setRequestState }: RequestStateProps): RequestState => {
    const setIsLoading = useCallback(
        (isLoading: boolean): void => setRequestState((prev) => ({ ...prev, isLoading })),
        [setRequestState]
    );

    const setResponseError = useCallback(
        (response: RequestErrorProps): void => setRequestState((prev) => ({ ...prev, ...response })),
        [setRequestState]
    );

    const setResponseSuccess = useCallback(
        (response: RequestSuccessProps): void => setRequestState((prev) => ({ ...prev, ...response })),
        [setRequestState]
    );

    return {
        setIsLoading,
        setResponseError,
        setResponseSuccess
    };
};

export default useRequestState;
