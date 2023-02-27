import { Link } from "@react-navigation/native";
import { ReactElement } from "react";
import { Text, View } from "react-native";

const Guest = (): ReactElement => {
    return (
        <View>
            <Text>It's Guest</Text>
            <Link to={{ screen: "MainTabs" }}>Go home</Link>
        </View>
    );
};

export { Guest };
