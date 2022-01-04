//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FormContextState, { FormContextProps } from 'models/storages/form/FormContext';
import React, { createContext, FC, useContext } from 'react';
import { useForm } from 'react-hook-form';

//#endregion

const FormContext = createContext<FormContextState>({} as FormContextState);

export const FormContextProvider: FC<FormContextProps> = ({ children, schema, properties, defaultValues = {} }) => {
    const form = useForm({
        defaultValues,
        shouldUnregister: true,
        reValidateMode: 'onBlur',
        resolver: schema && yupResolver(schema),
        ...properties
    });

    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};

const useFormContext = () => useContext(FormContext);

export default useFormContext;
