//#region Imports

import { ApolloLink } from '@apollo/client';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction } from 'react';
import useRequestState from 'services/useRequestState';

//#endregion

interface ResponseLink {
    onResponseLink: ApolloLink;
}

interface ResponseLinkProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useResponseLink = ({ setRequestState }: ResponseLinkProps): ResponseLink => {
    const { setIsLoading } = useRequestState({ setRequestState });

    const onResponseLink = new ApolloLink((operation, forward) => {
        setIsLoading(false);
        return forward(operation);
    });

    return {
        onResponseLink
    };
};

export default useResponseLink;
