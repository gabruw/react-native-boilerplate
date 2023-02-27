import { StatusBar, View } from "react-native";
import styled from "styled-components/native";

type ContainerProps = {
    hasStatusBar?: boolean;
};

const Container = styled(View)<ContainerProps>`
    margin-top: ${({ hasStatusBar }) => (hasStatusBar ? StatusBar.currentHeight : 0)}px;
`;

export { Container, ContainerProps };
