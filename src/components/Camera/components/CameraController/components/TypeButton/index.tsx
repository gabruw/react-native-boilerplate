import { ReactElement } from "react";
import { IconButton } from "react-native-paper";

import { useCameraContext } from "@app/storages/camera";

const TypeButton = (): ReactElement => {
    const { toggleCameraType } = useCameraContext();

    return <IconButton mode="contained" size={25} icon="camera-reverse" onPress={toggleCameraType} />;
};

export { TypeButton };
