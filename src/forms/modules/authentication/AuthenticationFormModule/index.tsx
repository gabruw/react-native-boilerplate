//#region Imports

import FieldInput from 'containers/FieldInput';
import React, { FC, Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication.json';
import maxLength from 'utils/validators/masks/maxLength';

//#endregion

const AuthenticationFormModule: FC = () => (
    <Fragment>
        <FieldInput
            mask={(val) => maxLength(val, 80)}
            name={AUTHENTICATION_FIELDS.EMAIL}
            label='authentication.labels.email'
        />

        <FieldInput
            isPassword
            mask={(val) => maxLength(val, 40)}
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label='authentication.labels.password'
        />
    </Fragment>
);

export default AuthenticationFormModule;
