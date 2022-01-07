//#region Imports

import jwtDecode from 'jwt-decode';
import UserRedux from 'models/storages/redux/slices/UserRedux';
import User from 'models/user/User';
import { reset, set } from '../slices/user';
import { useDefaultDispatch, useDefaultSelector } from './default';

//#endregion

export const useUserSelector = (): User => {
    let user: User = {};

    const userRedux = useDefaultSelector<UserRedux>((state) => state.user);
    if (userRedux.token) {
        user = jwtDecode<User>(userRedux.token);
    }

    return user;
};

export const useTokenSelector = (): UserRedux => useDefaultSelector<UserRedux>((state) => state.user);

export const useUserDispatch = () => {
    const dispatch = useDefaultDispatch();

    const resetUser = () => dispatch(reset());

    const setUser = (payload: UserRedux) => dispatch(set(payload));

    return {
        setUser,
        resetUser
    };
};
