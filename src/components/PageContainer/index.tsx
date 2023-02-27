import React, { ReactElement, ReactNode } from "react";

import { Container, ContainerProps } from "@app/components/PageContainer/styles/Container";

type PageContainerProps = ContainerProps & {
    children?: ReactNode;
};

const PageContainer = ({ children, hasStatusBar = true }: PageContainerProps): ReactElement => (
    <Container testID="page-container" hasStatusBar={hasStatusBar}>
        {children}
    </Container>
);

export { PageContainer, PageContainerProps };
