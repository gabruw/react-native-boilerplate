//#region Imports

import { useMemo } from 'react';
import { FieldError } from 'react-hook-form';
import { useTheme } from 'react-native-paper';

//#endregion

interface IconColorProps {
    error?: FieldError;
    isFocused?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}

const useFieldColor = ({ error, isFocused, isLoading, isDisabled }: IconColorProps): string => {
    const { colors } = useTheme();

    const fieldColor = useMemo((): string => {
        if (error) {
            return colors.error;
        }

        if (isDisabled) {
            return colors.disabled;
        }

        if (!isFocused) {
            return colors.placeholder;
        }

        return colors.primary;
    }, [error, isLoading, isFocused, isDisabled, colors]);

    return fieldColor;
};

export default useFieldColor;
