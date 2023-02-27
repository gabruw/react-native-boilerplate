import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { languageReducer } from "@app/storages/system/reducers/language";
import { ResetLanguageAction, SetLanguageAction } from "@app/storages/system/reducers/language/actions";

type LanguageActions = {
    resetLanguageDispatch: () => ResetLanguageAction;
    setLanguageDispatch: (payload: string) => SetLanguageAction;
};

const useLanguageActions = (): LanguageActions => {
    const dispatch = useSystemDispatch();

    const { resetLanguage, setLanguage } = languageReducer.actions;

    const setLanguageDispatch = (payload: string): SetLanguageAction => dispatch(setLanguage(payload));

    const resetLanguageDispatch = (): ResetLanguageAction => dispatch(resetLanguage());

    return {
        setLanguageDispatch,
        resetLanguageDispatch,
    };
};

export { useLanguageActions };
