//#region Imports

import * as ExpoSplashScreen from 'expo-splash-screen';
import AnimatedLottieView from 'lottie-react-native';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import useSplashScreenStyles from './styles';

//#endregion

interface SplashScreenProps {
    isReady: boolean;
}

const SplashScreen = ({ isReady }: SplashScreenProps) => {
    const styles = useSplashScreenStyles();

    const handleHideSplashScreen = useCallback(async () => {
        if (!isReady) {
            await ExpoSplashScreen.hideAsync();
        }
    }, [isReady]);

    return (
        <SafeAreaView style={styles.container} onLayout={handleHideSplashScreen}>
            <AnimatedLottieView
                loop
                autoPlay
                resizeMode='contain'
                source={require('assets/animations/splash-screen.json')}
            />
        </SafeAreaView>
    );
};

export default SplashScreen;
