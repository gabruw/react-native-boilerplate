//#region Imports

import React, { Fragment } from 'react';
import { render } from 'utils/test';
import ContainerPage from '../';
import TEST_ID from './id.json';

//#endregion

describe('ContainerPage Test', () => {
    it('should put header height indent', () => {
        const { getByTestId } = render(
            <ContainerPage>
                <Fragment></Fragment>
            </ContainerPage>
        );

        const containerPage = getByTestId(TEST_ID.container);
        expect(containerPage).not.toBeUndefined();
    });
});
