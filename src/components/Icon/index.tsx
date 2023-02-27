import React, { ReactElement, useMemo } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

type IconProps = {
    size: number;
    name: string;
    color: string;
    focused: boolean;
};

const Icon = ({ size, name, color, focused }: IconProps): ReactElement => {
    const iconName = useMemo(() => (focused ? name : `${name}-outline`), [focused, name]);

    return <Ionicons name={iconName} size={size} color={color} />;
};

export { Icon, IconProps };
