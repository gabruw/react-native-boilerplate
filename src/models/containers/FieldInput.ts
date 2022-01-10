//#region Imports

import { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';

//#endregion

export type TextInputProps = Omit<
    ComponentProps<typeof TextInput>,
    'loading' | 'disabled' | 'label' | 'left' | 'right'
>;

interface FieldInputProps {
    name: string;
    label: string;
    left?: string;
    right?: string;
    affix?: string;
    isDisabled?: boolean;
    isPassword?: boolean;
    mask?: (text: string) => string;
}

export default FieldInputProps;
