import { Dimensions } from "react-native";
import { Text as PaperText } from "react-native-paper";
import styled from "styled-components/native";

const dimensions = Dimensions.get("screen");

const Text = styled(PaperText)`
    text-align: center;
    margin-bottom: 15px;
    width: ${dimensions.width - 40}px;
`;

export { Text };
