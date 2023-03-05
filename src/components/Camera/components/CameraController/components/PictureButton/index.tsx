import { ImageType } from "expo-camera/build/Camera.types";
import { ReactElement } from "react";
import { IconButton } from "react-native-paper";

import { useCameraContext } from "@app/components/Camera/storages/camera";

const PictureButton = (): ReactElement => {
    const { cameraRef } = useCameraContext();

    const takePicture = async () => {
        await cameraRef?.takePictureAsync({
            base64: true,
            isImageMirror: false,
            imageType: ImageType.png,
        });
    };

    return <IconButton mode="contained" size={40} icon="aperture" onPress={takePicture} />;
};

export { PictureButton };
