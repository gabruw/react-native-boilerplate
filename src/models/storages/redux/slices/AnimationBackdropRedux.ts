//#region Imports

import { AnimationBackdropTypes } from 'models/animation/AnimationBackdropLibrary';

//#endregion

interface AnimationBackdropRedux {
    visibility: boolean;
    animation?: AnimationBackdropTypes;
}

export default AnimationBackdropRedux;
