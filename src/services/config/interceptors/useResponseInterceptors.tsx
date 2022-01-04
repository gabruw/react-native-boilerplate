//#region Imports

import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import {
    RequestContextStateProps,
    RequestErrorProps,
    RequestSuccessProps
} from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction } from 'react';
import useRequestState from 'services/useRequestState';

//#endregion

interface ResponseInterceptors {
    onResponse: (response: AxiosResponse) => AxiosResponse;
    onResponseError: (error: AxiosError) => Promise<AxiosError>;
}

interface ResponseInterceptorsProps {
    api: AxiosInstance;
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useResponseInterceptors = ({ api, setRequestState }: ResponseInterceptorsProps): ResponseInterceptors => {
    const { setIsLoading, setResponseError, setResponseSuccess } = useRequestState({ setRequestState });

    const onResponse = (response: AxiosResponse): AxiosResponse => {
        const requestSuccess = {
            data: response.data,
            status: response?.status
        } as RequestSuccessProps;

        setResponseSuccess(requestSuccess);
        setIsLoading(false);

        return response;
    };

    const onResponseError = (error: AxiosError): Promise<AxiosError> => {
        const { response, message } = error;

        const requestError = {
            status: response?.status,
            errors: Array.isArray(message) ? message : [message]
        } as RequestErrorProps;

        setResponseError(requestError);

        if (response?.status === 401) {
            // const access_token = await refreshAccessToken();
            console.error(`[response error 401] [${JSON.stringify(error)}]`);
        }

        setIsLoading(false);

        return Promise.reject(error);
    };

    return {
        onResponse,
        onResponseError
    };
};

export default useResponseInterceptors;
