import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5jmzk0qdc01z2h0jb7yqb/master',
  cache: new InMemoryCache(),
});
