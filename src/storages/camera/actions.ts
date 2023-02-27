enum CameraActionTypes {
    SET_ZOOM = "SET_ZOOM",
    TOGGLE_TYPE = "TOGGLE_TYPE",
    TOGGLE_FLASH = "TOGGLE_FLASH",
    SET_IS_LOADING = "SET_IS_LOADING",
}

type SetZoomAction = {
    type: CameraActionTypes.SET_ZOOM;
    payload: number;
};

type ToggleTypeAction = {
    type: CameraActionTypes.TOGGLE_TYPE;
};

type ToggleFlashAction = {
    type: CameraActionTypes.TOGGLE_FLASH;
};

type SetIsLoadingAction = {
    type: CameraActionTypes.SET_IS_LOADING;
    payload: boolean;
};

type CameraActions = SetZoomAction | ToggleTypeAction | ToggleFlashAction | SetIsLoadingAction;

export { CameraActionTypes, CameraActions };
