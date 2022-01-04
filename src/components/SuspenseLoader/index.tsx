//#region Imports

import AnimatedLottieView from 'lottie-react-native';
import React, { FC } from 'react';
import { Modal, SafeAreaView } from 'react-native';
import useSuspenseLoaderStyles from './styles';

//#endregion

const SuspenseLoader: FC = () => {
    const styles = useSuspenseLoaderStyles();

    return (
        <Modal animationType='fade' visible={true} transparent>
            <SafeAreaView style={styles.container}>
                <AnimatedLottieView
                    autoPlay
                    resizeMode='contain'
                    loop
                    style={styles.animation}
                    source={require('assets/animations/loading.json')}
                />
            </SafeAreaView>
        </Modal>
    );
};

export default SuspenseLoader;
