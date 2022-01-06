//#region Imports

import ContainerPage from 'components/ContainerPage';
import React, { FC } from 'react';
import AuthenticationForm from './components/AuthenticationForm';

//#endregion

const Authentication: FC = () => (
    <ContainerPage>
        <AuthenticationForm />
    </ContainerPage>
);

export default Authentication;
