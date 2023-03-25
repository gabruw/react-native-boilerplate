import { render } from "@testing-library/react-native";
import React from "react";

import { Icon, IconProps } from "@app/components/Icon";

const props: IconProps = {
    size: 16,
    color: "red",
    name: "plus",
    focused: false,
};

const setup = (): void => {
    render(<Icon {...props} />);
};

describe("<Icon />", () => {
    it("should render", () => {
        setup();
    });
});
