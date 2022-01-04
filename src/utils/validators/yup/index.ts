//#region Imports

import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

//#endregion

const useYup = () => {
    const { t } = useTranslation();

    yup.setLocale({
        mixed: {
            default: ({ label }) => t('yup.mixed.default', { label }),
            required: ({ label }) => t('yup.mixed.required', { label }),
            oneOf: ({ label, values }) => t('yup.mixed.oneOf', { label, values }),
            notOneOf: ({ label, values }) => t('yup.mixed.notOneOf', { label, values })
        },
        string: {
            url: ({ label }) => t('yup.string.url', { label }),
            trim: ({ label }) => t('yup.string.trim', { label }),
            email: ({ label }) => t('yup.string.email', { label }),
            max: ({ label, max }) => t('yup.string.max', { label, max }),
            min: ({ label, min }) => t('yup.string.min', { label, min }),
            uppercase: ({ label }) => t('yup.string.uppercase', { label }),
            lowercase: ({ label }) => t('yup.string.lowercase', { label }),
            length: ({ label, length }) => t('yup.string.length', { label, length })
        },
        number: {
            integer: ({ label }) => t('yup.number.integer', { label }),
            positive: ({ label }) => t('yup.number.positive', { label }),
            negative: ({ label }) => t('yup.number.negative', { label }),
            min: ({ label, min }) => t('yup.number.min', { label, min }),
            max: ({ label, max }) => t('yup.number.max', { label, max }),
            lessThan: ({ label, less }) => t('yup.number.lessThan', { label, less }),
            moreThan: ({ label, more }) => t('yup.number.moreThan', { label, more })
        },
        date: {
            min: ({ label, min }) => t('yup.date.min', { label, min }),
            max: ({ label, max }) => t('yup.date.max', { label, max })
        },
        array: {
            min: ({ label, min }) => t('yup.array.min', { label, min }),
            max: ({ label, max }) => t('yup.array.max', { label, max })
        }
    });

    return yup;
};

export default useYup;
