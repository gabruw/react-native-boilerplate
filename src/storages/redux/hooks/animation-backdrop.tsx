//#region Imports

import { AnimationBackdropTypes } from 'models/animation/AnimationBackdropLibrary';
import AnimationBackdropRedux from 'models/storages/redux/slices/AnimationBackdropRedux';
import { useDispatch } from 'react-redux';
import { set, toggle } from '../slices/animation-backdrop';
import { useDefaultSelector } from './default';

//#endregion

export const useAnimationBackdropSelector = (): AnimationBackdropRedux =>
    useDefaultSelector<AnimationBackdropRedux>((state) => state.animationBackdrop);

export const useAnimationBackdropDispatch = () => {
    const dispatch = useDispatch();

    const toggleAnimationBackdrop = (payload?: AnimationBackdropTypes) => dispatch(toggle(payload));

    const setAnimationBackdrop = (payload: AnimationBackdropRedux) => dispatch(set(payload));

    return {
        toggleAnimationBackdrop,
        setAnimationBackdrop
    };
};
