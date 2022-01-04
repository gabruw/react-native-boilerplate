//#region Imports

import { useNavigation } from '@react-navigation/native';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StackNavigationProps } from 'models/router/StackNavigatorProps';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import {
    RequestContextStateProps,
    RequestErrorProps,
    RequestSuccessProps
} from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useCallback } from 'react';
import ROUTE_NAMES from 'router/route-names';
import ENDPOINTS from 'services/endpoints';
import useRequestState from 'services/useRequestState';
import { useTokenSelector, useUserDispatch } from 'storages/redux/hooks/user';

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
    const { navigate } = useNavigation<StackNavigationProps>();
    const { setIsLoading, setResponseError, setResponseSuccess } = useRequestState({ setRequestState });

    const { token } = useTokenSelector();
    const { setUserDispatch } = useUserDispatch();

    const onResponse = useCallback((response: AxiosResponse): AxiosResponse => {
        const requestSuccess = {
            data: response.data,
            status: response?.status
        } as RequestSuccessProps;

        setResponseSuccess(requestSuccess);
        setIsLoading(false);

        return response;
    }, []);

    const onResponseError = useCallback(
        async (error: AxiosError): Promise<AxiosError> => {
            const { response, message } = error;

            const requestError = {
                status: response?.status,
                errors: Array.isArray(message) ? message : [message]
            } as RequestErrorProps;

            setResponseError(requestError);

            if (response?.status === 401) {
                await api
                    .post<UserRedux>(ENDPOINTS.AUTHENTICATION.REFRESH, token)
                    .then(({ data }) => setUserDispatch(data))
                    .catch(() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION));
            }

            setIsLoading(false);

            return Promise.reject(error);
        },
        [token]
    );

    return {
        onResponse,
        onResponseError
    };
};

export default useResponseInterceptors;
