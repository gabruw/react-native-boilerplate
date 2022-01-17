//#region Imports

import React, { FC } from 'react';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
import useContainerFormStyles from './styles';

//#endregion

type ContainerFormProps = Omit<KeyboardAwareScrollViewProps, 'style' | 'testID'>;

const ContainerForm: FC<ContainerFormProps> = ({ children, ...props }) => {
    const styles = useContainerFormStyles();

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container} {...props}>
            {children}
        </KeyboardAwareScrollView>
    );
};

export default ContainerForm;
