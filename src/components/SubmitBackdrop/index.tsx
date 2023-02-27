import React, { ForwardedRef, forwardRef, ReactElement, useMemo } from "react";

import ErrorAnimation from "@app/assets/animations/errors/default.json";
import SuccessAnimation from "@app/assets/animations/success.json";
import { AnimatedBackdrop } from "@app/components/AnimatedBackdrop";
import { ModalRefProps } from "@app/components/Modal";

type SubmitBackdropProps = {
    isSuccess?: boolean;
};

const SubmitBackdrop = forwardRef<ModalRefProps, SubmitBackdropProps>(
    ({ isSuccess }: SubmitBackdropProps, ref: ForwardedRef<ModalRefProps>): ReactElement => {
        const animation = useMemo(() => (isSuccess ? SuccessAnimation : ErrorAnimation), [isSuccess]);

        return <AnimatedBackdrop ref={ref} lottie={{ source: animation }} />;
    }
);

export { SubmitBackdrop, SubmitBackdropProps };
