//#region Imports

import useFieldColor from 'hooks/styles/useFieldIconColor';
import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

//#endregion

interface FieldInputRightProps {
    affix?: string;
    right?: string;
    error?: FieldError;
    isFocused: boolean;
    isDisabled: boolean;
    isPassword: boolean;
    isTextVisible: boolean;
    setIsTextVisible: Dispatch<SetStateAction<boolean>>;
}

const useFieldInputRight = ({
    affix,
    right,
    error,
    isPassword,
    isFocused,
    isDisabled,
    isTextVisible,
    setIsTextVisible
}: FieldInputRightProps) => {
    const fieldColor = useFieldColor({ error, isFocused, isDisabled });

    const passwordIcon = useMemo((): string => (isTextVisible ? 'eye' : 'eye-slash'), [isTextVisible]);
    const rightIcon = useMemo(
        (): string => (error ? 'exclamation-circle' : right || passwordIcon),
        [error, right, passwordIcon]
    );

    return affix ? (
        <TextInput.Affix text={String(affix)} />
    ) : (
        (right || isPassword) && (
            <TextInput.Icon
                name={rightIcon}
                color={fieldColor}
                disabled={isDisabled}
                onPress={() => isPassword && setIsTextVisible((prev) => !prev)}
            />
        )
    );
};

export default useFieldInputRight;
