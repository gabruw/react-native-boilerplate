import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackParamList } from "@app/router/param-list";

const useStackNavigation = (): StackNavigationProp<StackParamList, keyof StackParamList> =>
    useNavigation<StackNavigationProp<StackParamList>>();

export { useStackNavigation };
