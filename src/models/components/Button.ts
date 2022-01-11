//#region Imports

import { ComponentProps } from 'react';
import { Button } from 'react-native-paper';

//#endregion

interface CustomButtonProps {
    isLoading?: boolean;
    isDisabled?: boolean;
}

type ButtonProps = CustomButtonProps & Omit<ComponentProps<typeof Button>, 'disabled' | 'loading'>;

export default ButtonProps;
