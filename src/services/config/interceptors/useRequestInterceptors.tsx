//#region Imports

import { AxiosError, AxiosRequestConfig } from 'axios';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useCallback } from 'react';
import useRequestState from 'services/useRequestState';
import { useTokenSelector } from 'storages/redux/hooks/user';

//#endregion

interface RequestInterceptors {
    onRequest: (config: AxiosRequestConfig) => AxiosRequestConfig;
    onRequestError: (error: AxiosError) => Promise<AxiosError>;
}

interface RequestInterceptorsProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useRequestInterceptors = ({ setRequestState }: RequestInterceptorsProps): RequestInterceptors => {
    const { token } = useTokenSelector();
    const { setIsLoading } = useRequestState({ setRequestState });

    const onRequest = useCallback(
        (config: AxiosRequestConfig): AxiosRequestConfig => {
            setIsLoading(true);

            if (token && config.headers) {
                config.headers = {
                    Authorization: `Bearer ${token}`
                };
            }

            return config;
        },
        [token]
    );

    const onRequestError = useCallback((error: AxiosError): Promise<AxiosError> => {
        setIsLoading(true);
        return Promise.reject(error);
    }, []);

    return {
        onRequest,
        onRequestError
    };
};

export default useRequestInterceptors;
