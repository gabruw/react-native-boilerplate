import { StatusBar, View } from "react-native";
import styled from "styled-components/native";

const ActionsContainer = styled(View)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    margin: ${StatusBar.currentHeight}px;
`;

export { ActionsContainer };
