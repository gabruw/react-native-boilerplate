//#region Imports

import { ApolloLink } from '@apollo/client';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction } from 'react';
import useRequestState from 'services/useRequestState';

//#endregion

interface RequestLink {
    onRequestLink: ApolloLink;
}

interface RequestLinkProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useRequestLink = ({ setRequestState }: RequestLinkProps): RequestLink => {
    const { setIsLoading } = useRequestState({ setRequestState });

    const onRequestLink = new ApolloLink((operation, forward) => {
        setIsLoading(true);
        return forward(operation);
    });

    return {
        onRequestLink
    };
};

export default useRequestLink;
