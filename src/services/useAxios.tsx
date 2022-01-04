//#region Imports

import { API_URL } from '@env';
import axios, { AxiosInstance } from 'axios';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { useState } from 'react';
import useRequestInterceptors from './config/interceptors/useRequestInterceptors';
import useResponseInterceptors from './config/interceptors/useResponseInterceptors';

//#endregion

const INITIAL_STATE: RequestContextStateProps = {
    errors: [],
    data: undefined,
    isLoading: false,
    status: undefined
};

interface Axios {
    axios: AxiosInstance;
    requestState: RequestContextStateProps;
}

const useAxios = (): Axios => {
    const [requestState, setRequestState] = useState<RequestContextStateProps>(INITIAL_STATE);

    const api = axios.create({ baseURL: API_URL });

    const { onRequest, onRequestError } = useRequestInterceptors({ setRequestState });
    const { onResponse, onResponseError } = useResponseInterceptors({ api, setRequestState });

    api.interceptors.request.use(onRequest, onRequestError);
    api.interceptors.response.use(onResponse, onResponseError);

    return {
        axios: api,
        requestState
    };
};

export default useAxios;
