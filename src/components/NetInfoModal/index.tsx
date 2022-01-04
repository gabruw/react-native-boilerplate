//#region Imports

import Modal from 'components/Modal';
import { ModalBaseProps, ModalRefProps } from 'models/components/Modal';
import React, { ForwardedRef, forwardRef, ForwardRefRenderFunction } from 'react';
import { useTranslation } from 'react-i18next';

//#endregion

const NetInfoModal: ForwardRefRenderFunction<ModalRefProps, ModalBaseProps> = (
    props,
    ref: ForwardedRef<ModalRefProps>
) => {
    const { t } = useTranslation();

    return (
        <Modal ref={ref} {...props}>
            <></>
        </Modal>
    );
};

export default forwardRef<ModalRefProps, ModalBaseProps>(NetInfoModal);
