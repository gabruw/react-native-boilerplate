//#region Imports

import Modal from 'components/Modal';
import { ModalBaseProps, ModalRefProps } from 'models/components/Modal';
import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction } from 'react';

//#endregion

const NetInfoModal: ForwardRefRenderFunction<ModalRefProps, ModalBaseProps> = (
    props,
    ref: ForwardedRef<ModalRefProps>
) => {
    return (
        <Modal ref={ref} {...props}>
            <></>
        </Modal>
    );
};

export default forwardRef<ModalRefProps, ModalBaseProps>(NetInfoModal);
