import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";
import React, { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { ContentFilter } from "@app/components/SplashScreen/components/ContentFilter";
import { Container } from "@app/components/SplashScreen/styles/Container";
import { ASSETS } from "@app/constants/cache/assets";
import { FONTS } from "@app/constants/cache/fonts";
import { CriticalErrors } from "@app/constants/errors/critical";
import { checkIfIsDevelopment } from "@app/functions/environments/checkIfIsDevelopment";
import { useJailBreak } from "@app/hooks/useJailBreakPreventer";

type SplashScreenProps = {
    children: ReactNode;
};

const SplashScreen = ({ children }: SplashScreenProps): ReactElement => {
    const { isJailBroken, isAndroidInsecure } = useJailBreak();

    const [isAppReady, setIsAppReady] = useState<boolean>(false);
    const [error, setError] = useState<CriticalErrors | undefined>();

    const checkDeviceSecurity = useCallback((): boolean => {
        const isDevelopment = checkIfIsDevelopment();
        if (isDevelopment) {
            return true;
        }

        const jailBroken = isJailBroken();
        const androidInsecure = isAndroidInsecure();

        const hasSecurityErrors = jailBroken || androidInsecure;
        if (hasSecurityErrors) {
            setError(CriticalErrors.JAIL_BREAK);
        }

        return hasSecurityErrors;
    }, []);

    const cacheAsync = useCallback(async (): Promise<void> => {
        try {
            ExpoSplashScreen.preventAutoHideAsync();

            await Font.loadAsync(FONTS);
            const cacheAssets = ASSETS.map((image) => Asset.fromModule(image).downloadAsync());

            await Promise.all([...cacheAssets, MaterialIcons.loadFont()]);
        } catch (e) {
            setError(CriticalErrors.FATAL);
        } finally {
            setIsAppReady(true);
            ExpoSplashScreen.hideAsync();
        }
    }, []);

    useEffect(() => {
        const isDeviceSecure = checkDeviceSecurity();
        if (isDeviceSecure) {
            cacheAsync();
        }
    }, []);

    return (
        <Container>
            <ContentFilter isAppReady={isAppReady} error={error}>
                {children}
            </ContentFilter>
        </Container>
    );
};

export { SplashScreen, SplashScreenProps };
