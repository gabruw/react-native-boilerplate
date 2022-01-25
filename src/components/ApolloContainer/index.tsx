//#region Imports

import { ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';
import useApollo from 'services/apollo/useApollo';

//#endregion

interface ApolloContainerProps {
    children: ReactNode;
}

const ApolloContainer = ({ children }: ApolloContainerProps) => {
    const { apollo } = useApollo();

    return <ApolloProvider client={apollo}>{children}</ApolloProvider>;
};

export default ApolloContainer;
