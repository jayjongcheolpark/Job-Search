import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id
  }).restore(window.__APOLLO_CLIENT__)
})


client.query({ query: gql`
{
  user {
    id
    email
  }
}
`}).then(console.log)
client.mutate({ mutation: gql`
  mutation {
    login(email: "test@jay.com", password: "1234") {
      id
      email
    }
  }
`}).then(console.log)
client.query({ query: gql`
{
  user {
    id
    email
  }
}
`}).then(console.log)
export default client