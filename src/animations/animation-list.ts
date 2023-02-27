import { Animations } from "@app/animations";
import ErrorAnimation from "@app/assets/animations/errors/default.json";
import LoadingAnimation from "@app/assets/animations/loading.json";
import SuccessAnimation from "@app/assets/animations/success.json";

const ANIMATION_LIST = {
    [Animations.ERROR]: ErrorAnimation,
    [Animations.SUCCESS]: SuccessAnimation,
    [Animations.LOADING]: LoadingAnimation,
};

export { ANIMATION_LIST };
