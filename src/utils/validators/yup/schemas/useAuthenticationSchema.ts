//#region Imports

import { useTranslation } from 'react-i18next';
import useYup from 'utils/validators/yup/useYup';

//#endregion

const useAuthenticationSchema = () => {
    const yup = useYup();
    const { t } = useTranslation();

    return yup.object().shape({
        [t('authentication.fields.password')]: yup
            .string()
            .required()
            .min(8)
            .max(40)
            .label('authentication.labels.password'),
        [t('authentication.fields.email')]: yup
            .string()
            .email()
            .required()
            .min(6)
            .max(80)
            .label('authentication.labels.email')
    });
};

export default useAuthenticationSchema;
