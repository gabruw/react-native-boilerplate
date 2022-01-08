//#region Imports

import { Picker, PickerProps } from '@react-native-picker/picker';
import useAnimateTextStyles from 'hooks/styles/useAnimatedTextStyles';
import { FieldPickerOptions } from 'models/components/FieldPicker';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { Animated, View } from 'react-native';
import { ActivityIndicator, HelperText, useTheme } from 'react-native-paper';
import useFormContext from 'storages/form';
import useFieldPickerStyles from './styles';

//#endregion

interface FieldPickerProps extends PickerProps {
    name: string;
    label: string;
    icon?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    options: FieldPickerOptions[];
}

const FieldPicker: FC<FieldPickerProps> = ({
    name,
    label,
    options = [],
    isLoading = false,
    isDisabled = false,
    ...rest
}) => {
    const { colors } = useTheme();
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const { field } = useController({ name, control, defaultValue: undefined });

    let animatedIsFocused = useMemo(() => new Animated.Value(0), []);
    const dropdownIconColor = useMemo(
        () => (!isFocused ? colors.backdrop : isLoading ? colors.background : colors.primary),
        [isFocused, isLoading, colors]
    );

    const animateTextStyles = useAnimateTextStyles({ isFocused, animatedIsFocused });
    const styles = useFieldPickerStyles({ isFocused, isLoading, isDisabled, hasValue: Boolean(field.value) });

    useEffect(() => {
        animatedIsFocused = new Animated.Value(field.value ? 1 : 0);
    }, []);

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
            duration: 200,
            useNativeDriver: false,
            toValue: isFocused || field.value ? 1 : 0
        }).start();
    }, [isFocused, field]);

    return (
        <View>
            <Animated.Text style={animateTextStyles}>{label}</Animated.Text>

            <View style={styles.pickerContainer}>
                <Picker
                    mode='dialog'
                    style={styles.picker}
                    selectedValue={field.value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    enabled={!(isDisabled || isLoading)}
                    dropdownIconColor={dropdownIconColor}
                    dropdownIconRippleColor={colors.primary}
                    onValueChange={(itemValue) => field.onChange(itemValue)}
                    {...rest}
                >
                    <Picker.Item label={label} value={undefined} />

                    {options.map(({ text, value }, index) => (
                        <Picker.Item key={index} style={styles.item} label={text} value={value} />
                    ))}
                </Picker>

                {isLoading && <ActivityIndicator size='small' style={styles.loader} />}
            </View>

            <HelperText type='error' visible={errors[name]}>
                {errors[name]?.message}
            </HelperText>
        </View>
    );
};

export default FieldPicker;
