//#region Imports

import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '..';
import TEST_ID from './id.json';

//#endregion

describe('Button Test', () => {
    it('should is disabled', () => {
        render(<Button isDisabled>Is disabled</Button>);

        const element = screen.getByTestId(TEST_ID.button);
        expect(element).toBeTruthy();
    });
});
