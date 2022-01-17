//#region Imports

import React, { FC, ReactNode } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import useContainerPageStyles from './styles';
import TEST_ID from './tests/id.json';

//#endregion

interface ContainerPageProps {
    children: ReactNode;
    hasHeader?: boolean;
}

const ContainerPage: FC<ContainerPageProps> = ({ children, hasHeader = false }) => {
    const styles = useContainerPageStyles({ hasHeader });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView testID={TEST_ID.container} style={styles.scrollView} contentContainerStyle={styles.content}>
                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

export default ContainerPage;
