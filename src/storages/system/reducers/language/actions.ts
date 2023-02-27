import { Reducers } from "@app/storages/system/reducers/reducers";

export enum LanguageActions {
    SET_LANGUAGE = "setLanguage",
    RESET_LANGUAGE = "resetLanguage",
}

type ResetLanguageAction = {
    type: `${Reducers.LANGUAGE}/${LanguageActions.RESET_LANGUAGE}`;
};

type SetLanguageAction = {
    type: `${Reducers.LANGUAGE}/${LanguageActions.SET_LANGUAGE}`;
    payload: string;
};

export { ResetLanguageAction, SetLanguageAction };
