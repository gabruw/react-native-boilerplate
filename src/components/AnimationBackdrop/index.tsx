//#region Imports

import AnimatedLottieView from 'lottie-react-native';
import React, { useMemo } from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { useAnimationBackdropDispatch, useAnimationBackdropSelector } from 'storages/redux/hooks/animation-backdrop';
import ANIMATION_BACKDROP_LIBRARY from 'utils/constants/animation/animation-backdrop-library';
import useAnimationScreenStyles from './styles';

//#endregion

const AnimationBackdrop = () => {
    const styles = useAnimationScreenStyles();

    const { visibility, animation } = useAnimationBackdropSelector();
    const { toggleAnimationBackdrop } = useAnimationBackdropDispatch();

    const selected = useMemo(() => animation && ANIMATION_BACKDROP_LIBRARY[animation], [animation]);

    return (
        <Modal animationType='fade' visible={visibility} transparent>
            <SafeAreaView style={styles.container}>
                {selected && (
                    <AnimatedLottieView
                        autoPlay
                        resizeMode='contain'
                        loop={selected.loop}
                        style={styles.animation}
                        source={selected.source}
                        onAnimationFinish={() => toggleAnimationBackdrop()}
                    />
                )}
            </SafeAreaView>
        </Modal>
    );
};

export default AnimationBackdrop;
