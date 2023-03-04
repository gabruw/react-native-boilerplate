import { Camera, CameraType, FlashMode } from "expo-camera";
import { ReactNode } from "react";

import { PinchZoom } from "@app/components/Camera/types";

type CameraContextState = {
    zoom?: number;
    flash?: FlashMode;
    type?: CameraType;
    isLoading?: boolean;
};

type CameraContextProps = {
    children?: ReactNode;
    defaultState?: CameraContextState;
};

type CameraContextReturn = {
    cameraRef?: Camera | null;
    toggleCameraType: () => void;
    toggleCameraFlash: () => void;
    setZoom: (pinchZoom: PinchZoom) => void;
    setIsLoading: (isLoading: boolean) => void;
    setCameraRef: (camera: Camera | null) => void;
} & CameraContextState;

export { CameraContextProps, CameraContextState, CameraContextReturn };
