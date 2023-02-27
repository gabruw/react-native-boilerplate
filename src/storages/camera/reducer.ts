import { CameraType, FlashMode } from "expo-camera";

import { CameraActions, CameraActionTypes } from "@app/storages/camera/actions";
import { CameraContextState } from "@app/storages/camera/types";

const cameraReducer = (state: CameraContextState, action: CameraActions): CameraContextState => {
    switch (action.type) {
        case CameraActionTypes.SET_ZOOM:
            return { ...state, zoom: action.payload };
        case CameraActionTypes.TOGGLE_TYPE:
            return { ...state, type: state.type === CameraType.back ? CameraType.front : CameraType.back };
        case CameraActionTypes.TOGGLE_FLASH:
            return { ...state, flash: state.flash === FlashMode.off ? FlashMode.torch : FlashMode.off };
        case CameraActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export { cameraReducer };
