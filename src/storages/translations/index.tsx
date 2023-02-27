import { ReactElement, ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import { useLanguageActions } from "@app/storages/system/hooks/language/useLanguageActions";
import { useLanguageSelection } from "@app/storages/system/hooks/language/useLanguageSelection";
import { i18n } from "@app/storages/translations/i18n";

type TranslationsProviderProps = {
    children: ReactNode;
};

const TranslationsProvider = ({ children }: TranslationsProviderProps): ReactElement => {
    const { language } = useLanguageSelection();
    const { setLanguageDispatch } = useLanguageActions();

    useEffect(() => {
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [i18n, language]);

    i18n.on("languageChanged", (currentI18nextLanguage: string): void => {
        if (currentI18nextLanguage !== language) {
            setLanguageDispatch(currentI18nextLanguage);
        }
    });

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export { TranslationsProvider };
