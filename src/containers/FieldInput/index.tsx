//#region Imports

import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { HelperText, TextInput } from 'react-native-paper';
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
    const { t } = useTranslation();
    const [isTextVisible, setIsTextVisible] = useState<boolean>(isPassword);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const tName = useMemo(() => t(name), [name]);
    const { field } = useController({ name: tName, control, defaultValue: '' });

    const hasErrors = useMemo((): boolean => Boolean(Object.keys(errors).length), [errors]);
    const passwordIcon = useMemo((): string => (isTextVisible ? 'eye' : 'eye-slash'), [isTextVisible]);

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
                error={hasErrors}
                value={field.value}
                disabled={isDisabled}
                secureTextEntry={isTextVisible}
                onChangeText={(text) => handleChange(text)}
                left={icon && <TextInput.Icon name={icon} />}
                right={
                    isPassword && (
                        <TextInput.Icon name={passwordIcon} onPress={() => setIsTextVisible((prev) => !prev)} />
                    )
                }
            />

            <HelperText type='error' visible={hasErrors}>
                {errors[tName]?.message}
            </HelperText>
        </Fragment>
    );
};

export default FieldInput;
