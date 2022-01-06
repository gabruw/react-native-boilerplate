//#region Imports

import React, { FC, ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useContainerPageStyles from './styles';

//#endregion

interface ContainerPageProps {
    children: ReactNode;
    hasHeader?: boolean;
}

const ContainerPage: FC<ContainerPageProps> = ({ children, hasHeader }) => {
    const styles = useContainerPageStyles({ hasHeader });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default ContainerPage;
