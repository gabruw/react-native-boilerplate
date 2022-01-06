//#region Imports

import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import useContainerFormStyles from './styles';

//#endregion

interface ContainerFormProps {
    children: ReactNode;
}

const ContainerForm: FC<ContainerFormProps> = ({ children }) => {
    const styles = useContainerFormStyles();

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            {children}
        </KeyboardAvoidingView>
    );
};

export default ContainerForm;
