import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

let client = null;

if( null === client ) {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://localhost:4000/graphql'
    });
}

export default client;