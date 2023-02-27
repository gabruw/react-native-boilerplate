import JailMonkey from "jail-monkey";
import { useCallback } from "react";
import { Platform } from "react-native";

import { Devices } from "@app/constants/devices";

type JailBreakPreventerReturn = {
    isJailBroken: () => boolean;
    isAndroidInsecure: () => boolean;
};

const useJailBreak = (): JailBreakPreventerReturn => {
    const isAndroidInsecure = useCallback((): boolean => {
        if (Platform.OS !== Devices.ANDROID) {
            return false;
        }

        const isOnExternalStorage = JailMonkey.isOnExternalStorage();
        const hasAnySuspiciousApplications = JailMonkey.hookDetected();

        return isOnExternalStorage && hasAnySuspiciousApplications;
    }, []);

    return {
        isAndroidInsecure,
        isJailBroken: JailMonkey.isJailBroken,
    };
};

export { useJailBreak };
