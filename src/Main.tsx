import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";
import "react-native-gesture-handler";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "@app/App";
import { apolloClient } from "@app/services/apollo-client";
import { store } from "@app/storages/system";

const Main = (): ReactElement => (
    <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </ApolloProvider>
);

export { Main };
