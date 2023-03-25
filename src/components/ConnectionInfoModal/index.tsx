import { useNetInfo } from "@react-native-community/netinfo";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import NoConnectionAnimation from "@app/assets/animations/errors/no-connection.json";
import { AnimatedLottie } from "@app/components/ConnectionInfoModal/styles/AnimatedLottie";
import { ModalBody } from "@app/components/ConnectionInfoModal/styles/ModalBody";
import { ModalTitle } from "@app/components/ConnectionInfoModal/styles/ModalTitle";
import { Modal } from "@app/components/Modal";

const ConnectionInfoModal = (): ReactElement => {
    const { t } = useTranslation();
    const { isInternetReachable } = useNetInfo();

    return (
        <Modal dismissible={false} isVisible={!!isInternetReachable}>
            <AnimatedLottie loop autoPlay resizeMode="contain" source={NoConnectionAnimation} />

            <ModalTitle variant="titleMedium">{t("errors.connection.title")}</ModalTitle>
            <ModalBody variant="bodyMedium">{t("errors.connection.description")}</ModalBody>
        </Modal>
    );
};

export { ConnectionInfoModal };
