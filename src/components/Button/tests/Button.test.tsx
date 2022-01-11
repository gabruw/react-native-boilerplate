//#region Imports

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
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

        expect(onPressMock).toHaveBeenCalledTimes(0);
    });
});
