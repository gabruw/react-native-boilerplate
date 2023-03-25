import { act, render, screen } from "@testing-library/react-native";
import React, { createRef } from "react";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";

import { Modal, ModalProps, ModalRefProps } from "@app/components/Modal";
import { store } from "@app/storages/system";

const CHILDREN_TEXT = "Hello World";

const ref = createRef<ModalRefProps>();

const props: ModalProps = {
    onClose: jest.fn(),
    testID: "modal",
};

const setup = (): void => {
    render(
        <ReduxProvider store={store}>
            <PaperProvider>
                <Modal ref={ref} {...props}>
                    <Text>{CHILDREN_TEXT}</Text>
                </Modal>
            </PaperProvider>
        </ReduxProvider>
    );
};

describe("<Modal />", () => {
    it("should visible when reference show function is called", async () => {
        setup();

        const modalChildrenHided = screen.queryByText(CHILDREN_TEXT);
        expect(modalChildrenHided).toBeNull();

        act(() => ref.current?.show());

        const modal = await screen.findByTestId(props.testID!);
        expect(modal).toBeVisible();

        act(() => ref.current?.hide());

        const modalChildrenVisible = await screen.findByText(CHILDREN_TEXT);
        expect(modalChildrenVisible).not.toBeVisible();
    });

    it("should visible when reference toggle function is called and hided when called again", async () => {
        setup();

        const modalChildrenHided = screen.queryByText(CHILDREN_TEXT);
        expect(modalChildrenHided).toBeNull();

        act(() => ref.current?.toggle());

        const modal = await screen.findByTestId(props.testID!);
        expect(modal).toBeVisible();

        act(() => ref.current?.toggle());

        const modalChildrenVisible = await screen.findByText(CHILDREN_TEXT);
        expect(modalChildrenVisible).not.toBeVisible();
    });
});
