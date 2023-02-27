import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { loaderReducer } from "@app/storages/system/reducers/loader";
import { themeReducer } from "@app/storages/system/reducers/theme";

type ResetReducers = {
    resetReducers: () => void;
};

const useResetReducers = (): ResetReducers => {
    const dispatch = useSystemDispatch();

    const { resetTheme } = themeReducer.actions;
    const { resetLoader } = loaderReducer.actions;

    const resetReducers = (): void => {
        dispatch(resetTheme());
        dispatch(resetLoader());
    };

    return {
        resetReducers,
    };
};

export { useResetReducers };
