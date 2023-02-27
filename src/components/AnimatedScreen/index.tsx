import { AnimationObject } from "lottie-react-native";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { AnimationContainer } from "@app/components/AnimatedScreen/styles/AnimationContainer";
import { Text } from "@app/components/AnimatedScreen/styles/Text";
import { Title } from "@app/components/AnimatedScreen/styles/Title";
import { AnimatedLottie } from "@app/styles/AnimatedLottie";

type AnimatedScreenProps = {
    animation: AnimationObject;
    error?: {
        title: string;
        instruction: string;
        description: string;
    };
};

const AnimatedScreen = ({ animation, error }: AnimatedScreenProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <AnimationContainer>
            <AnimatedLottie loop autoPlay source={animation} resizeMode="contain" />

            {error && (
                <>
                    <Title variant="titleMedium">{t(error.title)}</Title>

                    <Text variant="bodyMedium">{t(error.instruction)}</Text>
                    <Text variant="bodyMedium">{t(error.description)}</Text>
                </>
            )}
        </AnimationContainer>
    );
};

export { AnimatedScreen, AnimatedScreenProps };
