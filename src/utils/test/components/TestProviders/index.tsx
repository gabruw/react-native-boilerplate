//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { useThemeSelector } from 'storages/redux/hooks/theme';
import store from 'storages/redux/store';
import i18next from 'utils/locales';
import apolloClientMocks from 'utils/test/mocks/apollo-client';

//#endregion

interface TestProvidersProps {
    children: ReactNode;
}

const Content = ({ children }: TestProvidersProps) => {
    const { paperTheme } = useThemeSelector();

    return (
        <I18nextProvider i18n={i18next}>
            <PaperProvider theme={paperTheme}>{children}</PaperProvider>
        </I18nextProvider>
    );
};

const TestProviders = ({ children }: TestProvidersProps) => (
    <ReduxProvider store={store}>
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <Content>{children}</Content>
        </MockedProvider>
    </ReduxProvider>
);

export default TestProviders;
