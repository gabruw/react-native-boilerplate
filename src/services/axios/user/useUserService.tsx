//#region Imports

import { useNavigation } from '@react-navigation/native';
import Authentication from 'models/authentication/Authentication';
import { TabNavigationProps } from 'models/router/TabNavigatorProps';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import { RequestContextStateProps } from 'models/storages/request/RequestContextProps';
import { useCallback } from 'react';
import ROUTE_NAMES from 'router/route-names';
import ENDPOINTS from 'services/axios/endpoints';
import useAxios from 'services/axios/useAxios';
import { useTokenSelector } from 'storages/redux/hooks/user';

//#endregion

interface UserService extends RequestContextStateProps {
    fetchLogin: (data: Authentication) => void;
    fetchRefresh: () => void;
}

interface UserServiceProps {
    setLogin?: (data: UserRedux) => void;
    setToken?: (data: UserRedux) => void;
}

const {
    AUTHENTICATION: { LOGIN, REFRESH }
} = ENDPOINTS;

const useUserService = ({ setLogin, setToken }: UserServiceProps): UserService => {
    const { navigate } = useNavigation<TabNavigationProps>();

    const { axios, requestState } = useAxios();
    const { token } = useTokenSelector();

    const fetchLogin = useCallback(
        async (form: Authentication) =>
            await axios.post<UserRedux>(LOGIN, form).then(({ data }) => {
                if (setLogin) {
                    setLogin(data);
                    navigate(ROUTE_NAMES.TABS.THIS, { screen: ROUTE_NAMES.TABS.STOCK });
                }
            }),
        [axios, setLogin, navigate]
    );

    const fetchRefresh = useCallback(
        async () => await axios.post<UserRedux>(REFRESH, token).then(({ data }) => setToken && setToken(data)),
        [axios, setToken]
    );

    return {
        fetchLogin,
        fetchRefresh,
        ...requestState
    };
};

export default useUserService;
