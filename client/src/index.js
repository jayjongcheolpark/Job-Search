import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import store from './store'
import Router from './router'
import client from './apolloClient'


const Root = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <Router />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))