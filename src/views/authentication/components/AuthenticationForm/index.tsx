//#region Imports

import Button from 'components/Button';
import ContainerForm from 'components/ContainerForm';
import FieldPicker from 'containers/FieldPicker';
import AuthenticationFormModule from 'forms/modules/authentication/AuthenticationFormModule';
import useHookForms from 'hooks/form/useHookForms';
import Authentication from 'models/authentication/Authentication';
import React, { FC, useCallback } from 'react';
import { FormProvider } from 'react-hook-form';
import useUserService from 'services/user/useUserService';
import { useUserDispatch } from 'storages/redux/hooks/user';
import useAuthenticationSchema from 'utils/validators/yup/schemas/useAuthenticationSchema';
import Profile from 'views/profile';

//#endregion

const AuthenticationForm: FC = () => {
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
        <FormProvider {...form}>
            <ContainerForm>
                <FieldPicker name='efe' label='Bring it back' options={[{ text: 'f', value: 1 }]} />
                <AuthenticationFormModule />
            </ContainerForm>

            <Profile />

            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
                {'commons.buttons.enter'}
            </Button>
        </FormProvider>
    );
};

export default AuthenticationForm;
