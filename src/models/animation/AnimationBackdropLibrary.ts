export type AnimationBackdropTypes = 'loading' | 'success';

interface AnimationBackdrop {
    loop: boolean;
    source: string;
}

interface AnimationBackdropLibrary {
    loading: AnimationBackdrop;
    success: AnimationBackdrop;
}

export default AnimationBackdropLibrary;
