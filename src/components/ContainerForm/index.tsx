//#region Imports

import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import useContainerFormStyles from './styles';

//#endregion

interface ContainerFormProps {
    children: ReactNode;
    behavior?: 'height' | 'position' | 'padding';
}

const ContainerForm: FC<ContainerFormProps> = ({ children, behavior = 'padding' }) => {
    const styles = useContainerFormStyles();

    return (
        <KeyboardAvoidingView style={styles.container} behavior={behavior}>
            {children}
        </KeyboardAvoidingView>
    );
};

export default ContainerForm;
