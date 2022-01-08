//#region Imports

import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { HelperText, TextInput, useTheme } from 'react-native-paper';
import useFormContext from 'storages/form';

//#endregion

interface FieldInputProps {
    name: string;
    label: string;
    icon?: string;
    isDisabled?: boolean;
    isPassword?: boolean;
    mask?: (text: string) => string;
}

const FieldInput: FC<FieldInputProps> = ({ name, label, icon, mask, isDisabled = false, isPassword = false }) => {
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
                left={icon && <TextInput.Icon name={icon} color={iconColor} disabled={isDisabled} />}
                right={
                    isPassword && (
                        <TextInput.Icon
                            color={iconColor}
                            name={passwordIcon}
                            disabled={isDisabled}
                            onPress={() => setIsTextVisible((prev) => !prev)}
                        />
                    )
                }
            />

            <HelperText type='error' visible={errors[name]}>
                {errors[name]?.message}
            </HelperText>
        </Fragment>
    );
};

export default FieldInput;
