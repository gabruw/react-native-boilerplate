//#region Imports

import ModalProps, { ModalRefProps } from 'models/components/Modal';
import React, {
    ForwardedRef,
    forwardRef,
    ForwardRefRenderFunction,
    useEffect,
    useImperativeHandle,
    useState
} from 'react';
import { Modal as PaperModal, Portal } from 'react-native-paper';

//#endregion

const Modal: ForwardRefRenderFunction<ModalRefProps, ModalProps> = (
    { children, onOpen, onClose },
    ref: ForwardedRef<ModalRefProps>
) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        toggle: () => setIsVisible(!isVisible)
    }));

    useEffect(() => {
        if (isVisible && onOpen) {
            onOpen();
        } else if (!isVisible && onClose) {
            onClose();
        }
    }, [isVisible]);

    return (
        <Portal>
            <PaperModal
                visible={isVisible}
                onDismiss={() => setIsVisible(false)}
                contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}
            >
                {children}
            </PaperModal>
        </Portal>
    );
};

export default forwardRef<ModalRefProps, ModalProps>(Modal);
