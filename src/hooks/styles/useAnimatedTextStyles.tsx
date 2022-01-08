//#region Imports

import { Animated, TextStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

//#endregion

interface AnimateTextStylesProps {
    isFocused: boolean;
    animatedIsFocused: Animated.Value;
}

const useAnimateTextStyles = ({
    isFocused,
    animatedIsFocused
}: AnimateTextStylesProps): Animated.AnimatedProps<TextStyle> => {
    const { colors } = useTheme();

    return {
        zIndex: 999,
        position: 'absolute',
        paddingHorizontal: 3,
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
        }),
        color: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.backdrop, isFocused ? colors.primary : colors.backdrop]
        })
    };
};

export default useAnimateTextStyles;
