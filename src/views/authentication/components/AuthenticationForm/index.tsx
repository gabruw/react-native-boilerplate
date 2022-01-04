//#region Imports

import Button from 'components/Button';
import FieldInput from 'containers/FieldInput';
import Authentication from 'models/authentication/Authentication';
import React, { FC, Fragment, useCallback } from 'react';
import useUserService from 'services/user/useUserService';
import useFormContext, { FormContextProvider } from 'storages/form';
import { useUserDispatch } from 'storages/redux/hooks/user';
import useAuthenticationSchema from 'utils/validators/yup/schemas/useAuthenticationSchema';

//#endregion

const Content: FC = () => {
    const { handleSubmit } = useFormContext();

    const { setUserDispatch } = useUserDispatch();
    const { fetchLogin, isLoading } = useUserService({ setLogin: setUserDispatch });

    const onSubmit = useCallback(async (form: Authentication): Promise<void> => await fetchLogin(form), [fetchLogin]);

    return (
        <Fragment>
            <FieldInput name='authentication.fields.email' label='authentication.labels.email' />
            <FieldInput name='authentication.fields.password' label='authentication.labels.password' isPassword />

            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
                {'commons.buttons.enter'}
            </Button>
        </Fragment>
    );
};

const AuthenticationForm: FC = () => {
    const authenticationSchema = useAuthenticationSchema();

    return (
        <FormContextProvider schema={authenticationSchema}>
            <Content />
        </FormContextProvider>
    );
};

export default AuthenticationForm;
