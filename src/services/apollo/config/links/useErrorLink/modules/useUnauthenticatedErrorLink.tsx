//#region Imports

import { fromPromise, NextLink, Observable, Operation } from '@apollo/client';
import useStackNavigation from 'hooks/router/useStackNavigation';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import ROUTE_NAMES from 'router/route-names';
import ENDPOINTS from 'services/axios/endpoints';
import useBaseAxios from 'services/axios/useBaseAxios';
import { useTokenSelector, useUserDispatch } from 'storages/redux/hooks/user';

//#endregion

interface UnauthenticatedErrorProps {
    forward: NextLink;
    operation: Operation;
}

type UnauthenticatedErrorLink = ({ operation, forward }: UnauthenticatedErrorProps) => Observable<unknown>;

const useUnauthenticatedErrorLink = (): UnauthenticatedErrorLink => {
    const axios = useBaseAxios();
    const { navigate } = useStackNavigation();

    const { token } = useTokenSelector();
    const { setUser } = useUserDispatch();

    const unauthenticatedErrorLink = ({ operation, forward }: UnauthenticatedErrorProps) =>
        fromPromise(
            axios
                .post<UserRedux>(ENDPOINTS.AUTHENTICATION.REFRESH, token)
                .then(({ data }) => setUser(data))
                .catch(() => navigate(ROUTE_NAMES.STACK.AUTHENTICATION))
        )
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
                operation.setContext({
                    headers: {
                        ...operation.getContext().headers,
                        authorization: `Bearer ${accessToken}`
                    }
                });

                return forward(operation);
            });

    return unauthenticatedErrorLink;
};

export default useUnauthenticatedErrorLink;
