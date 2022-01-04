//#region Imports

import SplashScreen from 'components/SplashScreen';
import { Asset as ExpoAsset } from 'expo-asset';
import * as ExpoFont from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';
import React, { FC, Fragment, ReactNode, useCallback, useEffect, useState } from 'react';
import FONTS_CACHEABLE from 'utils/cache/fonts';
import IMAGES_CACHEABLE from 'utils/cache/images';

//#endregion

interface CacheLoaderProps {
    children: ReactNode;
}

const CacheLoader: FC<CacheLoaderProps> = ({ children }) => {
    const [isReady, setIsReady] = useState(false);

    const loadCache = useCallback(async () => {
        try {
            await ExpoSplashScreen.preventAutoHideAsync();

            const fonts = FONTS_CACHEABLE.map((font) => ExpoFont.loadAsync(font));
            const images = IMAGES_CACHEABLE.map((image) => ExpoAsset.fromModule(image).downloadAsync());

            await Promise.all([...fonts, ...images]);
        } catch (e) {
            console.warn(e);
        } finally {
            setIsReady(true);
        }
    }, []);

    useEffect(() => {
        loadCache();
    }, []);

    return <Fragment>{isReady ? children : <SplashScreen isReady={isReady} />}</Fragment>;
};

export default CacheLoader;
