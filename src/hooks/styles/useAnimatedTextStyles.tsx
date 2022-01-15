//#region Imports

import { FieldError } from 'react-hook-form';
import { Animated, TextStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useFieldColor from './useFieldIconColor';

//#endregion

interface AnimateTextStylesProps {
    error?: FieldError;
    isFocused: boolean;
    animatedIsFocused: Animated.Value;
}

const useAnimateTextStyles = ({
    error,
    isFocused,
    animatedIsFocused
}: AnimateTextStylesProps): Animated.AnimatedProps<TextStyle> => {
    const { colors } = useTheme();

    const fieldColor = useFieldColor({ error, isFocused });

    return {
        zIndex: 999,
        position: 'absolute',
        paddingHorizontal: 3,
        color: fieldColor,
        backgroundColor: colors.background,
        left: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 10]
        }),
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -8]
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12]
        })
    };
};

export default useAnimateTextStyles;
