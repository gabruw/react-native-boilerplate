import { Link } from "@react-navigation/native";
import { ReactElement } from "react";
import { Text, View } from "react-native";

const SignIn = (): ReactElement => {
    return (
        <View>
            <Text>It's SignIn</Text>
            <Link to={{ screen: "MainTabs" }}>Go home</Link>
        </View>
    );
};

export { SignIn };
