//#region Imports

import React from 'react';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
import useContainerFormStyles from './styles';

//#endregion

type ContainerFormProps = Omit<KeyboardAwareScrollViewProps, 'style' | 'testID'>;

const ContainerForm = ({ children, ...props }: ContainerFormProps) => {
    const styles = useContainerFormStyles();

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container} {...props}>
            {children}
        </KeyboardAwareScrollView>
    );
};

export default ContainerForm;
