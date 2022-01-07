//#region Imports

import { AxiosError, AxiosResponse } from 'axios';
import {
    RequestContextStateProps,
    StateErrorProps,
    StateSuccessProps
} from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useSnackbarDispatch } from 'storages/redux/hooks/snackbar';

//#endregion

interface RequestStateProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

interface RequestState {
    setError: (error: AxiosError) => void;
    setIsLoading: (response: boolean) => void;
    setSuccess: (response: AxiosResponse) => void;
}

const useRequestState = ({ setRequestState }: RequestStateProps): RequestState => {
    const { setSnackbar } = useSnackbarDispatch();

    const setIsLoading = useCallback(
        (isLoading: boolean): void => setRequestState((prev) => ({ ...prev, isLoading })),
        [setRequestState]
    );

    const setError = useCallback(
        ({ response, message }: AxiosError): void => {
            const requestError: StateErrorProps = {
                status: response?.status,
                errors: Array.isArray(response?.data?.errors) ? response?.data.errors : Array(message)
            };

            if (requestError.errors.length) {
                setSnackbar({ text: requestError.errors });
            }

            setRequestState((prev) => ({ ...prev, ...requestError }));
        },
        [setRequestState]
    );

    const setSuccess = useCallback(
        ({ data, status }: AxiosResponse): void => {
            const requestSuccess: StateSuccessProps = { data, status };
            setRequestState((prev) => ({ ...prev, ...requestSuccess }));
        },
        [setRequestState]
    );

    return {
        setError,
        setSuccess,
        setIsLoading
    };
};

export default useRequestState;
