import { Reducers } from "@app/storages/system/reducers/reducers";

export enum LoaderActions {
    RESET_LOADER = "resetLoader",
    SET_LOADER_VISIBILITY = "setLoaderVisibility",
    TOGGLE_LOADER_VISIBILITY = "toggleLoaderVisibility",
}

type ResetLoaderAction = {
    type: `${Reducers.LOADER}/${LoaderActions.RESET_LOADER}`;
};

type SetLoaderVisibilityAction = {
    type: `${Reducers.LOADER}/${LoaderActions.SET_LOADER_VISIBILITY}`;
    payload: boolean;
};

type ToggleLoaderVisibilityAction = {
    type: `${Reducers.LOADER}/${LoaderActions.TOGGLE_LOADER_VISIBILITY}`;
};

export { ResetLoaderAction, SetLoaderVisibilityAction, ToggleLoaderVisibilityAction };
