import React, { forwardRef, ReactElement, ReactNode, useEffect, useImperativeHandle, useState } from "react";
import { ModalProps as PaperModalProps, Portal } from "react-native-paper";

import { useFullScreenModalStyles } from "@app/components/Modal/styles/style-sheets/useFullScreenModalStyles";
import { ContentContainer } from "@app/components/Modal/styles/styled-components/ContentContainer";
import { FullScreenModal } from "@app/components/Modal/styles/styled-components/FullScreenModal";

type ModalRefProps = {
    show: () => void;
    hide: () => void;
    toggle: () => void;
};

type ModalProps = {
    duration?: number;
    isVisible?: boolean;
    onClose?: () => void;
    children?: ReactNode;
    style?: PaperModalProps["style"];
    testID?: PaperModalProps["testID"];
    dismissible?: PaperModalProps["dismissable"];
    contentContainerStyle?: PaperModalProps["contentContainerStyle"];
    overlayAccessibilityLabel?: PaperModalProps["overlayAccessibilityLabel"];
};

const Modal = forwardRef<ModalRefProps, ModalProps>(
    ({ onClose, duration, children, isVisible: defaultVisibility = false, ...props }, ref): ReactElement => {
        const fullScreenModalStyles = useFullScreenModalStyles();
        const [isVisible, setIsVisible] = useState<boolean>(defaultVisibility);

        const onDismiss = () => {
            onClose && onClose();
            setIsVisible(false);
        };

        useImperativeHandle(ref, () => ({
            show: () => setIsVisible(true),
            hide: () => setIsVisible(false),
            toggle: () => setIsVisible(!isVisible),
        }));

        useEffect(() => {
            if (isVisible && duration) {
                setTimeout(() => {
                    setIsVisible(false);
                }, duration);
            }
        }, [isVisible, duration]);

        return (
            <Portal>
                <FullScreenModal
                    visible={isVisible}
                    onDismiss={onDismiss}
                    contentContainerStyle={fullScreenModalStyles.contentContainer}
                    {...props}
                >
                    <ContentContainer>{children}</ContentContainer>
                </FullScreenModal>
            </Portal>
        );
    }
);

export { Modal, ModalProps, ModalRefProps };
