import React, { ReactElement, ReactNode, useMemo } from "react";

import LoadingAnimation from "@app/assets/animations/loading.json";
import { AnimatedScreen, AnimatedScreenProps } from "@app/components/AnimatedScreen";
import { CRITICAL_ERRORS, CriticalErrors } from "@app/constants/errors/critical";

type ContentFilterProps = {
    isAppReady: boolean;
    children: ReactNode;
    error?: CriticalErrors;
};

const ContentFilter = ({ children, error, isAppReady }: ContentFilterProps): ReactElement => {
    const animatedScreenValues = useMemo<AnimatedScreenProps>(() => {
        if (error) {
            return CRITICAL_ERRORS[error];
        }

        return {
            animation: LoadingAnimation,
        };
    }, [error]);

    return <>{isAppReady ? children : <AnimatedScreen {...animatedScreenValues} />}</>;
};

export { ContentFilter, ContentFilterProps };
