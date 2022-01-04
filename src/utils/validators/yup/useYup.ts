//#region Imports

import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

//#endregion

const useYup = () => {
    const { t } = useTranslation();

    yup.setLocale({
        mixed: {
            default: ({ label }) => t('yup.mixed.default', { label: t(label) }),
            required: ({ label }) => t('yup.mixed.required', { label: t(label) }),
            oneOf: ({ label, values }) => t('yup.mixed.oneOf', { label: t(label), values }),
            notOneOf: ({ label, values }) => t('yup.mixed.notOneOf', { label: t(label), values })
        },
        string: {
            url: ({ label }) => t('yup.string.url', { label: t(label) }),
            trim: ({ label }) => t('yup.string.trim', { label: t(label) }),
            email: ({ label }) => t('yup.string.email', { label: t(label) }),
            max: ({ label, max }) => t('yup.string.max', { label: t(label), max }),
            min: ({ label, min }) => t('yup.string.min', { label: t(label), min }),
            uppercase: ({ label }) => t('yup.string.uppercase', { label: t(label) }),
            lowercase: ({ label }) => t('yup.string.lowercase', { label: t(label) }),
            length: ({ label, length }) => t('yup.string.length', { label: t(label), length })
        },
        number: {
            integer: ({ label }) => t('yup.number.integer', { label: t(label) }),
            positive: ({ label }) => t('yup.number.positive', { label: t(label) }),
            negative: ({ label }) => t('yup.number.negative', { label: t(label) }),
            min: ({ label, min }) => t('yup.number.min', { label: t(label), min }),
            max: ({ label, max }) => t('yup.number.max', { label: t(label), max }),
            lessThan: ({ label, less }) => t('yup.number.lessThan', { label: t(label), less }),
            moreThan: ({ label, more }) => t('yup.number.moreThan', { label: t(label), more })
        },
        date: {
            min: ({ label, min }) => t('yup.date.min', { label: t(label), min }),
            max: ({ label, max }) => t('yup.date.max', { label: t(label), max })
        },
        array: {
            min: ({ label, min }) => t('yup.array.min', { label: t(label), min }),
            max: ({ label, max }) => t('yup.array.max', { label: t(label), max })
        }
    });

    return yup;
};

export default useYup;
