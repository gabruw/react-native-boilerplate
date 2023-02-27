import { AnimatedLottieViewProps, AnimationObject } from "lottie-react-native";
import React, { ForwardedRef, forwardRef, ReactElement, useMemo } from "react";

import { Modal, ModalProps, ModalRefProps } from "@app/components/Modal";
import { AnimatedLottie } from "@app/styles/AnimatedLottie";

type AnimatedBackdropProps = {
    lottie: Omit<AnimatedLottieViewProps, "source"> & {
        source: AnimationObject;
    };
} & Pick<ModalProps, "isVisible" | "onClose" | "testID">;

const AnimatedBackdrop = forwardRef<ModalRefProps, AnimatedBackdropProps>(
    (
        { lottie: { source, loop = false, autoPlay = true, resizeMode = "contain", ...restLottie }, ...rest },
        ref: ForwardedRef<ModalRefProps>
    ): ReactElement => {
        const duration = useMemo(() => (loop ? undefined : (source.op / source.fr) * 1000), [loop, source]);

        return (
            <Modal {...rest} ref={ref} duration={duration} dismissable={false} contentContainerStyle={undefined}>
                <AnimatedLottie
                    loop={loop}
                    source={source}
                    autoPlay={autoPlay}
                    resizeMode={resizeMode}
                    {...restLottie}
                />
            </Modal>
        );
    }
);

export { AnimatedBackdrop, AnimatedBackdropProps };
