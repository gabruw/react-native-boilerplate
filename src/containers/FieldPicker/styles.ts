//#region Imports

import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ALIGN from 'utils/styles/align';

//#endregion

interface FieldPickerStylesProps {
    hasValue: boolean;
    isFocused: boolean;
    isLoading: boolean;
    isDisabled: boolean;
}

const useFieldPickerStyles = ({ hasValue, isFocused, isLoading, isDisabled }: FieldPickerStylesProps) => {
    const { colors } = useTheme();

    return StyleSheet.create({
        pickerContainer: {
            borderRadius: 4,
            borderStyle: 'solid',
            borderWidth: isFocused ? 2 : 1,
            borderColor: isFocused ? colors.primary : colors.backdrop,
            ...ALIGN('center', 'between')
        },
        picker: {
            height: 58,
            marginLeft: 6,
            color: hasValue ? (isFocused ? colors.background : colors.backdrop) : colors.background,
            width: isLoading ? Dimensions.get('screen').width - 90 : '100%',
            ...ALIGN('center', 'center')
        },
        item: {
            color: isDisabled || isLoading ? colors.disabled : colors.backdrop
        },
        loader: {
            marginRight: 8,
            ...ALIGN('center', 'right')
        }
    });
};

export default useFieldPickerStyles;
