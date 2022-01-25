//#region Imports

import { Picker, PickerProps } from '@react-native-picker/picker';
import useAnimateTextStyles from 'hooks/styles/useAnimatedTextStyles';
import useFieldColor from 'hooks/styles/useFieldIconColor';
import { FieldPickerOptions } from 'models/containers/FieldPicker';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { Animated, NativeSyntheticEvent, TargetedEvent, View } from 'react-native';
import { ActivityIndicator, HelperText } from 'react-native-paper';
import useFieldPickerStyles from './styles';

//#endregion

interface FieldPickerProps extends Omit<PickerProps, 'enabled'> {
    name: string;
    label: string;
    icon?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    options: FieldPickerOptions[];
}

const FieldPicker = ({
    name,
    label,
    onBlur,
    onFocus,
    options = [],
    isLoading = false,
    isDisabled = false,
    ...rest
}: FieldPickerProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const {
        field,
        fieldState: { error }
    } = useController({ name });

    const fieldColor = useFieldColor({ error, isFocused, isLoading, isDisabled });
    const styles = useFieldPickerStyles({ fieldColor, isFocused, isLoading });

    const animatedIsFocused = useMemo(() => new Animated.Value(field.value ? 1 : 0), []);
    const animateTextStyles = useAnimateTextStyles({ error, isFocused, animatedIsFocused });

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
            duration: 200,
            useNativeDriver: false,
            toValue: isFocused || field.value ? 1 : 0
        }).start();
    }, [isFocused, field]);

    const handleFocus = useCallback(
        (event: NativeSyntheticEvent<TargetedEvent>) => {
            setIsFocused(true);
            onFocus && onFocus(event);
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        (event: NativeSyntheticEvent<TargetedEvent>): void => {
            setIsFocused(false);
            onBlur && onBlur(event);
        },
        [onBlur]
    );

    return (
        <View>
            <Animated.Text style={animateTextStyles}>{label}</Animated.Text>

            <View style={styles.pickerContainer}>
                <Picker
                    mode='dialog'
                    style={styles.picker}
                    selectedValue={field.value}
                    onBlur={(e) => handleBlur(e)}
                    onFocus={(e) => handleFocus(e)}
                    dropdownIconColor={fieldColor}
                    enabled={!(isDisabled || isLoading)}
                    onValueChange={(itemValue) => field.onChange(itemValue)}
                    {...rest}
                >
                    <Picker.Item />

                    {options.map(({ text, value }, index) => (
                        <Picker.Item key={index} style={styles.item} label={text} value={value} />
                    ))}
                </Picker>

                {isLoading && <ActivityIndicator size='small' style={styles.loader} />}
            </View>

            <HelperText type='error' visible={Boolean(error)}>
                {error?.message}
            </HelperText>
        </View>
    );
};

export default FieldPicker;
