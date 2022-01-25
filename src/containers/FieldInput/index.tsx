//#region Imports

import FieldInputProps, { TextInputProps } from 'models/containers/FieldInput';
import React, { Fragment, useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import useFieldInputLeft from './hooks/useFieldInputLeft';
import useFieldInputRight from './hooks/useFieldInputRight';

//#endregion

type TextFieldInputProps = FieldInputProps & TextInputProps;

const FieldInput = ({
    name,
    mask,
    left,
    label,
    right,
    affix,
    onBlur,
    onFocus,
    isDisabled = false,
    isPassword = false,
    ...rest
}: TextFieldInputProps) => {
    const { t } = useTranslation();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isTextVisible, setIsTextVisible] = useState<boolean>(isPassword);

    const {
        field,
        fieldState: { error }
    } = useController({ name, defaultValue: '' });

    const leftAdornment = useFieldInputLeft({ left, error, isFocused, isDisabled });
    const rightAdornment = useFieldInputRight({
        affix,
        right,
        error,
        isFocused,
        isPassword,
        isDisabled,
        isTextVisible,
        setIsTextVisible
    });

    const handleChange = useCallback(
        (text: string): void => {
            const value = mask ? mask(text) : text;
            field.onChange(value);
        },
        [mask, field]
    );

    const handleFocus = useCallback(
        (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
            setIsFocused(true);
            onFocus && onFocus(event);
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
            setIsFocused(false);
            onBlur && onBlur(event);
        },
        [onBlur]
    );

    return (
        <Fragment>
            <TextInput
                mode='outlined'
                label={t(label)}
                value={field.value}
                left={leftAdornment}
                disabled={isDisabled}
                right={rightAdornment}
                error={Boolean(error)}
                onBlur={(e) => handleBlur(e)}
                onFocus={(e) => handleFocus(e)}
                secureTextEntry={isTextVisible}
                onChangeText={(text) => handleChange(text)}
                {...rest}
            />

            <HelperText type='error' visible={Boolean(error)}>
                {error?.message}
            </HelperText>
        </Fragment>
    );
};

export default FieldInput;
