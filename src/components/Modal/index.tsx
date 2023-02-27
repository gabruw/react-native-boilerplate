import React, { forwardRef, ReactElement, ReactNode, useEffect, useImperativeHandle, useState } from "react";
import { Dimensions } from "react-native";
import { ModalProps as PaperModalProps, Portal } from "react-native-paper";

import { ContentContainer } from "@app/components/Modal/styles/ContentContainer";
import { FullScreenModal } from "@app/components/Modal/styles/FullScreenModal";
import { usePaperTheme } from "@app/themes/hooks/usePaperTheme";

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
    dismissable?: PaperModalProps["dismissable"];
    contentContainerStyle?: PaperModalProps["contentContainerStyle"];
    overlayAccessibilityLabel?: PaperModalProps["overlayAccessibilityLabel"];
};

const dimensions = Dimensions.get("screen");

const Modal = forwardRef<ModalRefProps, ModalProps>(
    ({ onClose, duration, children, isVisible: defaultVisibility = false, ...props }, ref): ReactElement => {
        const theme = usePaperTheme();
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
                    contentContainerStyle={{
                        borderRadius: 16,
                        paddingBottom: 32,
                        paddingHorizontal: 32,
                        backgroundColor: theme.colors.background,
                        width: dimensions.width - (dimensions.width * 20) / 100,
                    }}
                    {...props}
                >
                    <ContentContainer>{children}</ContentContainer>
                </FullScreenModal>
            </Portal>
        );
    }
);

export { Modal, ModalProps, ModalRefProps };
