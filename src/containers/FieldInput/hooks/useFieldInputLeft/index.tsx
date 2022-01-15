//#region Imports

import useFieldColor from 'hooks/styles/useFieldIconColor';
import React from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

//#endregion

interface FieldInputLeftProps {
    left?: string;
    error?: FieldError;
    isFocused: boolean;
    isDisabled: boolean;
}

const useFieldInputLeft = ({ left, error, isFocused, isDisabled }: FieldInputLeftProps) => {
    const fieldColor = useFieldColor({ error, isFocused, isDisabled });

    return left && <TextInput.Icon name={left} color={fieldColor} disabled={isDisabled} />;
};

export default useFieldInputLeft;
