import { ReactElement } from "react";
import { IconButton } from "react-native-paper";

import { useCameraContext } from "@app/components/Camera/storages/camera";

const FlashButton = (): ReactElement => {
    const { flash, toggleCameraFlash } = useCameraContext();

    return <IconButton mode="contained" size={25} icon={flash ? "flash" : "flash-off"} onPress={toggleCameraFlash} />;
};

export { FlashButton };
