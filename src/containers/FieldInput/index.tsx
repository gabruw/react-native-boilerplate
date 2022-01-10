//#region Imports

import FieldInputProps, { TextInputProps } from 'models/containers/FieldInput';
import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { HelperText, TextInput, useTheme } from 'react-native-paper';
import useFormContext from 'storages/form';

//#endregion

const FieldInput: FC<FieldInputProps & TextInputProps> = ({
    name,
    mask,
    left,
    label,
    right,
    affix,
    isDisabled = false,
    isPassword = false,
    ...rest
}) => {
    const { colors } = useTheme();
    const { t } = useTranslation();

    const [isTextVisible, setIsTextVisible] = useState<boolean>(isPassword);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control, defaultValue: '' });

    const passwordIcon = useMemo((): string => (isTextVisible ? 'eye' : 'eye-slash'), [isTextVisible]);
    const iconColor = useMemo((): string => (isDisabled ? colors.disabled : colors.primary), [isDisabled]);

    const handleChange = useCallback(
        (text: string): void => {
            const value = mask ? mask(text) : text;
            field.onChange(value);
        },
        [mask, field]
    );

    return (
        <Fragment>
            <TextInput
                mode='outlined'
                label={t(label)}
                value={field.value}
                error={errors[name]}
                disabled={isDisabled}
                secureTextEntry={isTextVisible}
                onChangeText={(text) => handleChange(text)}
                left={left && <TextInput.Icon name={left} color={iconColor} disabled={isDisabled} />}
                right={
                    affix ? (
                        <TextInput.Affix text={String(affix)} />
                    ) : (
                        (right || isPassword) && (
                            <TextInput.Icon
                                color={iconColor}
                                disabled={isDisabled}
                                name={right || passwordIcon}
                                onPress={() => setIsTextVisible((prev) => !prev)}
                            />
                        )
                    )
                }
                {...rest}
            />

            <HelperText type='error' visible={errors[name]}>
                {errors[name]?.message}
            </HelperText>
        </Fragment>
    );
};

export default FieldInput;
