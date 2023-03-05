import { Camera, CameraType, FlashMode } from "expo-camera";
import { createContext, ReactElement, useContext, useMemo, useReducer, useRef } from "react";

import { calculateZoom } from "@app/components/Camera/functions/calculateZoom";
import { CameraActionTypes } from "@app/components/Camera/storages/camera/actions";
import { cameraReducer } from "@app/components/Camera/storages/camera/reducer";
import {
    CameraContextProps,
    CameraContextReturn,
    CameraContextState,
} from "@app/components/Camera/storages/camera/types";
import { PinchZoom } from "@app/components/Camera/types";

const CameraContext = createContext<CameraContextReturn>({} as CameraContextReturn);

const initialState: CameraContextState = {
    zoom: 0,
    isLoading: true,
    flash: FlashMode.off,
    type: CameraType.back,
};

const CameraContextProvider = ({ children, defaultState }: CameraContextProps): ReactElement => {
    const cameraRef = useRef<Camera | null>();
    const [state, dispatch] = useReducer(cameraReducer, defaultState || initialState);

    const setCameraRef = (camera: Camera | null) => {
        cameraRef.current = camera;
    };

    const setZoom = ({ scale, velocity }: PinchZoom) => {
        const zoom = calculateZoom(state.zoom!, scale, velocity);

        dispatch({
            type: CameraActionTypes.SET_ZOOM,
            payload: zoom,
        });
    };

    const toggleCameraType = () => {
        dispatch({
            type: CameraActionTypes.TOGGLE_TYPE,
        });
    };

    const toggleCameraFlash = () => {
        dispatch({
            type: CameraActionTypes.TOGGLE_FLASH,
        });
    };

    const setIsLoading = (isLoading: boolean) => {
        dispatch({
            type: CameraActionTypes.SET_IS_LOADING,
            payload: isLoading,
        });
    };

    const outputValues = useMemo(
        () => ({
            ...state,
            setZoom,
            setCameraRef,
            setIsLoading,
            toggleCameraType,
            toggleCameraFlash,
            cameraRef: cameraRef.current,
        }),
        [state, cameraRef]
    );

    return <CameraContext.Provider value={outputValues}>{children}</CameraContext.Provider>;
};

const useCameraContext = (): CameraContextReturn => useContext(CameraContext);

export { useCameraContext, CameraContextProvider };
