import AnimatedLottieView from "lottie-react-native";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get("screen");

const AnimatedLottie = styled(AnimatedLottieView)`
    width: ${dimensions.width - 140}px;
`;

export { AnimatedLottie };
