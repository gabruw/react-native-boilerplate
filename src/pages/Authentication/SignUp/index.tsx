import { Link } from "@react-navigation/native";
import { ReactElement } from "react";
import { Text, View } from "react-native";

const SignUp = (): ReactElement => {
    return (
        <View>
            <Text>It's SignUp</Text>
            <Link to={{ screen: "MainTabs" }}>Go home</Link>
        </View>
    );
};

export { SignUp };
