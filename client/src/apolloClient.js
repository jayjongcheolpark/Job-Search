import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include'
  }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id
  }).restore(window.__APOLLO_CLIENT__)
})

export default client