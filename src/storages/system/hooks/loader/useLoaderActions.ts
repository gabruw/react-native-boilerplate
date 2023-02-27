import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { loaderReducer } from "@app/storages/system/reducers/loader";
import { SetLoaderVisibilityAction, ToggleLoaderVisibilityAction } from "@app/storages/system/reducers/loader/actions";

type LoaderActions = {
    toggleLoaderVisibilityDispatch: () => ToggleLoaderVisibilityAction;
    setLoaderVisibilityDispatch: (payload: boolean) => SetLoaderVisibilityAction;
};

const useLoaderActions = (): LoaderActions => {
    const dispatch = useSystemDispatch();

    const { setLoaderVisibility, toggleLoaderVisibility } = loaderReducer.actions;

    const setLoaderVisibilityDispatch = (payload: boolean): SetLoaderVisibilityAction =>
        dispatch(setLoaderVisibility(payload));

    const toggleLoaderVisibilityDispatch = (): ToggleLoaderVisibilityAction => dispatch(toggleLoaderVisibility());

    return {
        setLoaderVisibilityDispatch,
        toggleLoaderVisibilityDispatch,
    };
};

export { useLoaderActions };
