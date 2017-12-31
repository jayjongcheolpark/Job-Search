import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class MyJobList extends Component {
  render () {
    return (
      <div>
        {this.props.data.user && this.props.data.user.email}
      </div>
    )
  }
}

export default graphql(query)(MyJobList)