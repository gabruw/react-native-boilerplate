//#region Imports

import SuspenseLoader from 'components/SuspenseLoader';
import { registerRootComponent } from 'expo';
import React, { FC, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'storages/redux/store';
import i18next from 'utils/locales';
import App from './App';

//#endregion

const Index: FC = () => (
    <Suspense fallback={<SuspenseLoader />}>
        <I18nextProvider i18n={i18next}>
            <ReduxProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </ReduxProvider>
        </I18nextProvider>
    </Suspense>
);

registerRootComponent(Index);
