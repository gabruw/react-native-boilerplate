//#region Imports

import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ALIGN from 'utils/styles/align';

//#endregion

interface FieldPickerStylesProps {
    fieldColor: string;
    isFocused: boolean;
    isLoading: boolean;
}

const useFieldPickerStyles = ({ fieldColor, isFocused, isLoading }: FieldPickerStylesProps) => {
    const { colors } = useTheme();

    return StyleSheet.create({
        pickerContainer: {
            borderRadius: 4,
            borderStyle: 'solid',
            borderColor: fieldColor,
            borderWidth: isFocused ? 2 : 1.5,
            ...ALIGN('center', 'between')
        },
        picker: {
            height: 58,
            color: fieldColor,
            backgroundColor: colors.background,
            width: isLoading ? Dimensions.get('screen').width - 90 : '100%',
            ...ALIGN('center', 'center')
        },
        item: {
            color: fieldColor
        },
        loader: {
            marginRight: 8,
            ...ALIGN('center', 'right')
        }
    });
};

export default useFieldPickerStyles;
