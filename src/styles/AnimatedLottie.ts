import AnimatedLottieView from "lottie-react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get("screen");

const AnimatedLottie = styled(AnimatedLottieView)`
    width: ${dimensions.width - 40}px;
`;

export { AnimatedLottie };
