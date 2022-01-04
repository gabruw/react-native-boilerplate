//#region Imports

import { ReactNode } from 'react';

//#endregion

export interface ModalRefProps {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

export interface ModalBaseProps {
    onOpen?: () => void;
    onClose?: () => void;
}

interface ModalProps extends ModalBaseProps {
    children: ReactNode;
}

export default ModalProps;
