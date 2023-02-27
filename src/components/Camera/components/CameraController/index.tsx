import { ReactElement } from "react";
import { GestureEvent, PinchGestureHandler, PinchGestureHandlerEventPayload } from "react-native-gesture-handler";

import { FlashButton } from "@app/components/Camera/components/CameraController/components/FlashButton";
import { PictureButton } from "@app/components/Camera/components/CameraController/components/PictureButton";
import { TypeButton } from "@app/components/Camera/components/CameraController/components/TypeButton";
import { ActionsContainer } from "@app/components/Camera/components/CameraController/styles/ActionsContainer";
import { FlexCamera } from "@app/components/Camera/components/CameraController/styles/FlexCamera";
import { useCameraContext } from "@app/storages/camera";

const CameraController = (): ReactElement => {
    const { zoom, type, flash, isLoading, setZoom, setIsLoading, setCameraRef } = useCameraContext();

    const onPinchZoom = ({ nativeEvent: { scale, velocity } }: GestureEvent<PinchGestureHandlerEventPayload>) => {
        setZoom({ scale, velocity });
    };

    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <PinchGestureHandler onGestureEvent={onPinchZoom}>
                    <FlexCamera
                        zoom={zoom}
                        type={type}
                        flashMode={flash}
                        ref={setCameraRef}
                        onCameraReady={() => setIsLoading(false)}
                    >
                        <ActionsContainer>
                            <FlashButton />
                            <PictureButton />
                            <TypeButton />
                        </ActionsContainer>
                    </FlexCamera>
                </PinchGestureHandler>
            )}
        </>
    );
};

export { CameraController };
