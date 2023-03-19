import { render, screen } from "@testing-library/react-native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";

import SuccessAnimation from "@app/assets/animations/success.json";
import { AnimatedBackdrop, AnimatedBackdropProps } from "@app/components/AnimatedBackdrop";
import { store } from "@app/storages/system";

const props: AnimatedBackdropProps = {
    isVisible: true,
    onClose: jest.fn(),
    testID: "animation-backdrop",
    lottie: {
        source: SuccessAnimation,
    },
};

const setup = (defaultProps = props): void => {
    render(
        <ReduxProvider store={store}>
            <PaperProvider>
                <AnimatedBackdrop {...defaultProps} />
            </PaperProvider>
        </ReduxProvider>
    );
};

describe("<AnimatedBackdrop />", () => {
    it("should render", async () => {
        setup();

        const modal = await screen.findByTestId(props.testID!);
        expect(modal).toBeVisible();
    });

    it("should't render the backdrop when is not visible", async () => {
        setup({ ...props, isVisible: false });

        const modal = screen.queryByTestId(props.testID!);
        expect(modal).toBeNull();
    });
});
