//#region Imports

import { ReactNode } from 'react';
import { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

//#endregion

export interface FormContextProps {
    children?: ReactNode;
    defaultValues?: object;
    schema?: AnyObjectSchema;
    properties?: UseFormProps;
}

type FormContextState = UseFormReturn<FieldValues, object>;

export default FormContextState;
