//#region Imports

import Button from 'components/Button';
import ContainerForm from 'components/ContainerForm';
import AuthenticationFormModule from 'forms/modules/authentication/AuthenticationFormModule';
import useHookForms from 'hooks/form/useHookForms';
import Authentication from 'models/authentication/Authentication';
import React, { useCallback } from 'react';
import { FormProvider } from 'react-hook-form';
import useUserService from 'services/axios/user/useUserService';
import { useUserDispatch } from 'storages/redux/hooks/user';
import useAuthenticationSchema from 'utils/validators/yup/schemas/useAuthenticationSchema';

//#endregion

const AuthenticationForm = () => {
    const schema = useAuthenticationSchema();
    const [form, { handleSubmit, reset }] = useHookForms<Authentication>({ schema });

    const { setUser } = useUserDispatch();
    const { fetchLogin, isLoading } = useUserService({ setLogin: setUser });

    const onSubmit = useCallback(
        async (form: Authentication): Promise<void> => {
            await fetchLogin(form);
            reset();
        },
        [fetchLogin]
    );

    return (
        <ContainerForm>
            <FormProvider {...form}>
                <AuthenticationFormModule />

                <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
                    {'commons.buttons.enter'}
                </Button>
            </FormProvider>
        </ContainerForm>
    );
};

export default AuthenticationForm;
