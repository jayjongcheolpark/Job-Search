import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class MyJobList extends Component {
  render () {
    return (
      <div>
        MyJobList
      </div>
    )
  }
}

export default graphql(query)(MyJobList)