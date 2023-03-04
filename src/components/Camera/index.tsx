import { CameraType, Camera as ExpoCamera, FlashMode } from "expo-camera";
import { ReactElement, useEffect } from "react";

import { CameraController } from "@app/components/Camera/components/CameraController";
import { CameraContextProvider } from "@app/components/Camera/storages/camera";

type CameraProps = {
    type?: CameraType;
    flash?: FlashMode;
};

const Camera = ({ type = CameraType.back, flash = FlashMode.off }: CameraProps): ReactElement => {
    const [permission, requestPermission] = ExpoCamera.useCameraPermissions();

    useEffect(() => {
        if (!permission?.granted) {
            requestPermission();
        }
    }, [permission]);

    return (
        <>
            {permission?.granted && (
                <CameraContextProvider defaultState={{ type, flash }}>
                    <CameraController />
                </CameraContextProvider>
            )}
        </>
    );
};

export { Camera };
