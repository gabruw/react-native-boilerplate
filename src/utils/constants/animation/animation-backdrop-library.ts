//#region Imports

import AnimationBackdropLibrary from 'models/animation/AnimationBackdropLibrary';

//#endregion

const ANIMATION_BACKDROP_LIBRARY: AnimationBackdropLibrary = {
    loading: {
        loop: true,
        source: require('assets/animations/loading.json')
    },
    success: {
        loop: false,
        source: require('assets/animations/success.json')
    }
};

export default ANIMATION_BACKDROP_LIBRARY;
