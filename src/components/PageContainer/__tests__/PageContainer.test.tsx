import { render, screen } from "@testing-library/react-native";
import React from "react";
import { StatusBar, Text } from "react-native";

import { PageContainer, PageContainerProps } from "@app/components/PageContainer";

const text = "Example text :D";

const props: PageContainerProps = {
    hasStatusBar: true,
};

const setup = (defaultProps = props): void => {
    render(
        <PageContainer {...defaultProps}>
            <Text>{text}</Text>
        </PageContainer>
    );
};

describe("<PageContainer />", () => {
    it("should render with status bar spacing", () => {
        setup();

        const container = screen.getByTestId("page-container");
        expect(container).toHaveStyle({
            marginTop: StatusBar.currentHeight,
        });

        const children = screen.getByText(text);
        expect(children).toBeVisible();
    });

    it("should render without status bar spacing", () => {
        setup({ hasStatusBar: false });

        const container = screen.getByTestId("page-container");
        expect(container).toHaveStyle({
            marginTop: 0,
        });

        const children = screen.getByText(text);
        expect(children).toBeVisible();
    });
});
