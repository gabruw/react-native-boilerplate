//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import { DeepPartial, UnpackNestedValue, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { Omit } from 'react-native';
import { AnyObjectSchema } from 'yup';

//#endregion

interface HookFormsProps<T> extends Omit<UseFormProps, 'resolver' | 'defaultValues'> {
    schema: AnyObjectSchema;
    defaultValues?: UnpackNestedValue<DeepPartial<T>>;
}

type HookFormsReturn<T> = [UseFormReturn<T, object>, UseFormReturn<T, object>];

const useHookForms = <T,>({ schema, defaultValues, ...props }: HookFormsProps<T>): HookFormsReturn<T> => {
    const form = useForm<T>({
        defaultValues,
        shouldUnregister: true,
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        ...props
    });

    return [form, form];
};

export default useHookForms;
