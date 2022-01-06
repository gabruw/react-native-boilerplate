//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication.json';
import useYup from 'utils/validators/yup/useYup';

//#endregion

const useAuthenticationSchema = () => {
    const yup = useYup();

    return yup.object().shape({
        [AUTHENTICATION_FIELDS.EMAIL]: yup
            .string()
            .email()
            .required()
            .min(6)
            .max(80)
            .label('authentication.labels.email'),
        [AUTHENTICATION_FIELDS.PASSWORD]: yup.string().required().min(8).max(40).label('authentication.labels.password')
    });
};

export default useAuthenticationSchema;
