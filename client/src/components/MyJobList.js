import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'
import AutoAdd from './AutoAdd'

class MyJobList extends Component {
  render () {
    return (
      <div className="container is-fluid">
        {this.props.data.user && this.props.data.user.email}
        <AutoAdd />
      </div>
    )
  }
}

export default graphql(query)(MyJobList)