//#region Imports

import React from 'react';
import { fireEvent, render } from 'utils/test';
import Button from '../';
import TEST_ID from './id.json';

//#endregion

const onPressMock = jest.fn();

describe('Button Test', () => {
    it('should not press if is disabled', () => {
        const { getByTestId } = render(
            <Button isDisabled onPress={onPressMock}>
                Is disabled
            </Button>
        );

        const button = getByTestId(TEST_ID.button);
        fireEvent.press(button);

        expect(button).toBeDisabled();
        expect(onPressMock).toHaveBeenCalledTimes(0);
    });

    it('should not press if is loading', () => {
        const { getByTestId } = render(
            <Button isLoading onPress={onPressMock}>
                Is loading
            </Button>
        );

        const button = getByTestId(TEST_ID.button);
        fireEvent.press(button);

        expect(button).toBeDisabled();
        expect(onPressMock).toHaveBeenCalledTimes(0);
    });
});
