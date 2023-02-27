import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_BASE } from "@env";

import { checkIfIsDevelopment } from "@app/functions/environments/checkIfIsDevelopment";

const apolloClient = new ApolloClient({
    uri: API_BASE,
    cache: new InMemoryCache(),
    connectToDevTools: checkIfIsDevelopment(),
});

export { apolloClient };
