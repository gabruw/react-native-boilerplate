//#region Imports

import { AxiosInstance } from 'axios';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { useState } from 'react';
import useRequestInterceptors from './config/interceptors/useRequestInterceptors';
import useResponseInterceptors from './config/interceptors/useResponseInterceptors';
import useBaseAxios from './useBaseAxios';

//#endregion

const INITIAL_STATE: RequestContextStateProps = {
    errors: [],
    isLoading: false
};

interface Axios {
    axios: AxiosInstance;
    requestState: RequestContextStateProps;
}

const useAxios = (): Axios => {
    const api = useBaseAxios();
    const [requestState, setRequestState] = useState<RequestContextStateProps>(INITIAL_STATE);

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
