//#region Imports

import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { Dispatch, SetStateAction, useMemo } from 'react';
import useRequestState from 'services/useRequestState';
import useUnauthenticatedErrorLink from './modules/useUnauthenticatedErrorLink';

//#endregion

interface ErrorLink {
    onErrorLink: ApolloLink;
}

interface ResponseLinksProps {
    setRequestState: Dispatch<SetStateAction<RequestContextStateProps>>;
}

const useErrorLink = ({ setRequestState }: ResponseLinksProps): ErrorLink => {
    const { setErrorMessage } = useRequestState({ setRequestState });

    const unauthenticatedErrorLink = useUnauthenticatedErrorLink();

    const onErrorLink = useMemo(
        () =>
            onError(({ graphQLErrors, networkError, operation, forward }) => {
                if (networkError) {
                    setErrorMessage(networkError.message);
                } else {
                    graphQLErrors?.forEach(({ message, extensions: { code } }) => {
                        switch (code) {
                            case 'UNAUTHENTICATED':
                                unauthenticatedErrorLink({ operation, forward });
                                break;
                            default:
                                setErrorMessage(message);
                                break;
                        }
                    });
                }
            }),
        []
    );

    return {
        onErrorLink
    };
};

export default useErrorLink;
