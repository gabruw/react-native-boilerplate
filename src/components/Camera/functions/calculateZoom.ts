import { Platform } from "react-native";

import { PinchZoom } from "@app/components/Camera/types";

const calculateZoom = (currentZoom: number, scale: PinchZoom["scale"], velocity: PinchZoom["velocity"]) => {
    let zoom = 0;
    const decreasedVelocity = velocity / 20;

    if (decreasedVelocity > 0) {
        zoom = currentZoom + scale * decreasedVelocity;
        zoom *= Platform.OS === "ios" ? 0.01 : 25;
    } else {
        zoom = currentZoom - scale * Math.abs(decreasedVelocity);
        zoom *= Platform.OS === "ios" ? 0.02 : 50;
    }

    if (zoom < 0) {
        zoom = 0;
    } else if (zoom > 0.5) {
        zoom = 0.5;
    }

    return zoom;
};

export { calculateZoom };
