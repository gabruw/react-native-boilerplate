//#region Imports

import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { API_URL } from '@env';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { useState } from 'react';
import { useTokenSelector } from 'storages/redux/hooks/user';
import useErrorLink from './config/links/useErrorLink';
import useRequestLink from './config/links/useRequestLink';
import useResponseLink from './config/links/useResponseLink';

//#endregion

const INITIAL_STATE: RequestContextStateProps = {
    errors: [],
    isLoading: false
};

interface Apollo {
    apollo: ApolloClient<NormalizedCacheObject>;
    requestState: RequestContextStateProps;
}

const useApollo = (): Apollo => {
    const [requestState, setRequestState] = useState<RequestContextStateProps>(INITIAL_STATE);

    const { token } = useTokenSelector();

    const { onErrorLink } = useErrorLink({ setRequestState });
    const { onRequestLink } = useRequestLink({ setRequestState });
    const { onResponseLink } = useResponseLink({ setRequestState });

    const httpLink = new HttpLink({
        uri: API_URL,
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const apollo = new ApolloClient({
        cache: new InMemoryCache(),
        link: from([onRequestLink, onErrorLink, onResponseLink, httpLink])
    });

    return {
        apollo,
        requestState
    };
};

export default useApollo;
