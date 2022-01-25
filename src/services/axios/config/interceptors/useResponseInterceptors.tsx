//#region Imports

import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import useStackNavigation from 'hooks/router/useStackNavigation';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useCallback } from 'react';
import ROUTE_NAMES from 'router/route-names';
import ENDPOINTS from 'services/axios/endpoints';
import useRequestState from 'services/useRequestState';
import { useTokenSelector, useUserDispatch } from 'storages/redux/hooks/user';

//#endregion

interface ResponseInterceptors {
    onResponse: (response: AxiosResponse) => AxiosResponse;
    onResponseError: (error: AxiosError) => Promise<void | AxiosResponse<UserRedux> | AxiosError>;
}

interface ResponseInterceptorsProps {
    api: AxiosInstance;
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useResponseInterceptors = ({ api, setRequestState }: ResponseInterceptorsProps): ResponseInterceptors => {
    const { navigate } = useStackNavigation();
    const { setIsLoading, setError, setSuccess } = useRequestState({ setRequestState });

    const { token } = useTokenSelector();
    const { setUser } = useUserDispatch();

    const onResponse = useCallback((response: AxiosResponse): AxiosResponse => {
        response.data = response.data.data;

        setSuccess(response);
        setIsLoading(false);

        return response;
    }, []);

    const onResponseError = useCallback(
        async (error: AxiosError): Promise<void | AxiosResponse<UserRedux> | AxiosError> => {
            setError(error);

            if (error.response?.status === 401) {
                return await api
                    .post<UserRedux>(ENDPOINTS.AUTHENTICATION.REFRESH, token)
                    .then(({ data }) => {
                        setUser(data);
                        error.config.headers = {
                            ...error.config.headers,
                            Authorization: `Bearer ${token}`
                        };

                        return api.request(error.config);
                    })
                    .catch(() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION))
                    .finally(() => setIsLoading(false));
            }

            setIsLoading(false);
            return Promise.reject(error);
        },
        [api, token]
    );

    return {
        onResponse,
        onResponseError
    };
};

export default useResponseInterceptors;
